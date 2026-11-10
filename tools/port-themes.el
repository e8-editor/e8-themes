;;; port-themes.el --- Port Emacs themes to E8 -*- lexical-binding: t -*-

;; Copyright (C) 2026 The E8 contributors
;;
;; This program is free software: you can redistribute it and/or modify it
;; under the terms of the GNU General Public License as published by the
;; Free Software Foundation, either version 3 of the License, or (at your
;; option) any later version.

;;; Commentary:

;; Writes this repository's themes from their upstreams, as Emacs itself
;; loads them. Each theme is loaded, not enabled, in Emacs; each of its faces
;; that E8 or its ports draw (tools/e8-faces.txt), and those they inherit
;; from, takes the attributes Emacs would give it on a graphical frame in
;; millions of colours; and each colour is written by the name the
;; upstream's palette gives it, so the port reads as its upstream does.
;;
;; Themes that share their faces, as the Modus and Ef themes share Modus's,
;; are one family: a module of faces, written in terms of a palette, and a
;; file per theme holding its palette, as their upstreams have them. A face
;; most of the family give alike is the module's; a theme that gives it
;; otherwise gives its own, and one that does not give it leaves it out.
;;
;; Besides the themes it writes:
;;
;; - sources.json: where each theme comes from, for checking for updates
;;   (tools/check-upstreams.sh) and for crediting it: its upstream's
;;   repository and the commit it was ported at, the git object of the
;;   theme's own file there, the version and authors its files declare, its
;;   copyright and licence, and the theme it is itself a port of, if any;
;; - e8-themes-index.ts: what e8-themes-select shows of each theme without
;;   loading it: whether it is dark, its colours, its contrast, its source;
;; - THEMES.md: the credits, and the themes left out and why.
;;
;; A theme is left out if it repeats one this repository has from its own
;; authors (`e8-port-repeats'), or if its text, code or comments are too
;; hard to read against its background (`e8-port-contrast-floor').
;;
;; Run from the repository's root, after tools/fetch-upstreams.sh, with
;; `make port', or:
;;
;;   emacs -Q --batch -l tools/port-themes.el -f e8-port-themes

;;; Code:

(require 'cl-lib)
(require 'subr-x)
(require 'json)
(require 'lisp-mnt)
(require 'color)

(defvar e8-port-upstream-dir (expand-file-name ".upstream")
  "Where tools/fetch-upstreams.sh checks out the upstreams.")
(defvar e8-port-background 'dark "The background the faces are chosen for.")
(defvar e8-port-faces nil "The faces to port, a hash table.")

;;;; What is ported, and from where

(defconst e8-port-packages
  '((modus :package "modus-themes" :licence gpl :main "modus-themes.el" :collection "Modus")
    (ef :package "ef-themes" :licence gpl :main "ef-themes.el" :collection "Ef")
    (doom :package "doom-themes" :licence mit :main "doom-themes.el" :collection "Doom")
    (gruvbox :package "gruvbox-theme" :licence mit :main "gruvbox.el" :collection "Gruvbox")
    (solarized :package "solarized-theme" :licence gpl :main "solarized-theme.el" :collection "Solarized")
    (tomorrow :package "color-theme-sanityinc-tomorrow" :licence gpl
              :main "color-theme-sanityinc-tomorrow.el" :collection "Tomorrow")
    (catppuccin :package "catppuccin-theme" :licence mit :main "catppuccin-theme.el" :collection "Catppuccin")
    (zenburn :package "zenburn-theme" :licence gpl :main "zenburn-theme.el" :collection "Zenburn")
    (dracula :package "dracula-theme" :licence mit :main "dracula-theme.el" :collection "Dracula")
    (nord :package "nord-theme" :licence mit :main "nord-theme.el" :collection "Nord")
    (emacs :package "GNU Emacs" :licence gpl :collection "Emacs"))
  "Each upstream: its package's name, licence and main file, and the
collection e8-themes-select files its themes under.")

(defconst e8-port-families
  '((modus-themes
     :module "modus-themes" :dirs ("modus" "ef") :palette e8-port-modus-palette
     :faces-from modus
     :members ((modus modus-operandi modus-operandi-tinted modus-operandi-deuteranopia
                      modus-operandi-tritanopia modus-vivendi modus-vivendi-tinted
                      modus-vivendi-deuteranopia modus-vivendi-tritanopia)
               (ef :all "ef")))
    (doom-themes
     :module "doom-themes" :dirs ("doom" "doom/themes") :palette e8-port-doom-palette
     :faces-from doom :members ((doom :all "doom/themes")))
    (gruvbox
     :module "gruvbox" :dirs ("gruvbox" "autothemer" "dash")
     :palette (e8-port-regexp-palette "gruvbox/%s-theme.el" "(gruvbox-\\([a-z0-9_-]+\\) +\"\\(#[0-9a-fA-F]+\\)\"")
     :faces-from gruvbox
     :members ((gruvbox gruvbox-dark-hard gruvbox-dark-medium gruvbox-dark-soft
                        gruvbox-light-hard gruvbox-light-medium gruvbox-light-soft)))
    (solarized
     :module "solarized" :dirs ("solarized" "dash") :palette e8-port-solarized-palette
     :faces-from solarized :members ((solarized :all "solarized")))
    (tomorrow
     :module "color-theme-sanityinc-tomorrow" :dirs ("tomorrow") :palette e8-port-tomorrow-palette
     :faces-from tomorrow
     :members ((tomorrow sanityinc-tomorrow-night sanityinc-tomorrow-day sanityinc-tomorrow-eighties
                         sanityinc-tomorrow-blue sanityinc-tomorrow-bright)))
    (catppuccin
     :module "catppuccin" :dirs ("catppuccin") :palette e8-port-catppuccin-palette
     :faces-from catppuccin :flavors t
     :members ((catppuccin catppuccin-latte catppuccin-frappe catppuccin-macchiato catppuccin-mocha)))
    (zenburn :dirs ("zenburn") :palette e8-port-zenburn-palette :members ((zenburn zenburn)))
    (dracula
     :dirs ("dracula")
     :palette (e8-port-regexp-palette "dracula/dracula-theme.el" "(dracula-\\([a-z0-9-]+\\) +\"\\(#[0-9a-fA-F]+\\)\"")
     :members ((dracula dracula)))
    ;; Emacs's own, each a theme by itself.
    (emacs :dirs ("emacs/etc/themes") :singles t :members ((emacs :all "emacs/etc/themes")))
    ;; Nord's options, set when it is loaded, are tools/nord-options.ts, after its faces.
    (nord :dirs ("nord") :append "tools/nord-options.ts" :members ((nord nord))))
  "The themes ported, by family. A family's :members are lists of an
upstream and its themes, or :all and the directory of an upstream whose
every theme is taken but the repeats. A family of more than one theme
shares a :module of faces.")

(defconst e8-port-repeats
  '((doom-dracula . "A repeat. Dracula, from its authors, is here as dracula. Doom's has the same palette and gives 9 of 20 key colours alike (tools/compare-repeats.el): it swaps types and constants, and its headings and diffs are plain")
    (doom-gruvbox . "A repeat. Gruvbox, from its authors, is here as gruvbox-dark-medium and its kin. Doom's has the same palette and gives 17 of 20 key colours alike: its types are yellow and its headings plain")
    (doom-gruvbox-light . "A repeat. Gruvbox, from its authors, is here as gruvbox-light-medium and its kin. Doom's has the same palette and gives 16 of 20 key colours alike")
    (doom-nord . "A repeat. Nord, from its authors, is here as nord. Doom's has the same palette and gives 16 of 20 key colours alike: its headings are plain")
    (doom-solarized-dark . "A repeat. Solarized is here from solarized-emacs, as solarized-dark. Doom's has the same palette and gives 11 of 19 key colours alike: it gives constants, variables and builtins other colours")
    (doom-solarized-dark-high-contrast . "A repeat. Solarized is here from solarized-emacs, as solarized-dark-high-contrast. Doom's has the same palette and gives 11 of 19 key colours alike")
    (doom-solarized-light . "A repeat. Solarized is here from solarized-emacs, as solarized-light. Doom's has the same palette and gives 10 of 19 key colours alike")
    (doom-tomorrow-day . "A repeat. Tomorrow is here from Steve Purcell's port, as sanityinc-tomorrow-day. Doom's has the same palette and gives 10 of 20 key colours alike: it follows the original Tomorrow's choice of colour for keywords, strings and functions more closely")
    (doom-tomorrow-night . "A repeat. Tomorrow is here from Steve Purcell's port, as sanityinc-tomorrow-night. Doom's has the same palette and gives 6 of 20 key colours alike: it follows the original Tomorrow's choice of colour for keywords, strings and functions more closely, with darker comments")
    (doom-zenburn . "A repeat. Zenburn is here from zenburn-emacs, as zenburn. Doom's has the same palette and gives 17 of 20 key colours alike")
    (solarized-gruvbox-dark . "A repeat. Gruvbox, from its authors, is here as gruvbox-dark-medium; this is Gruvbox's palette in Solarized's faces")
    (solarized-gruvbox-light . "A repeat. Gruvbox, from its authors, is here as gruvbox-light-medium; this is Gruvbox's palette in Solarized's faces")
    (solarized-nordfox . "A repeat. Nightfox's take on Nord's palette; Nord, from its authors, is here as nord")
    (solarized-wombat-dark . "A repeat. Wombat, as Emacs ships it, is here as wombat; this is its palette in Solarized's faces")
    (solarized-zenburn . "A repeat. Zenburn is here from zenburn-emacs, as zenburn; this is its palette in Solarized's faces")
    (modus-operandi . "Emacs ships a version of Modus; Modus is here from its own repository, modus-themes, newer than Emacs's") (modus-operandi-tinted . "Emacs ships a version of Modus; Modus is here from its own repository, modus-themes, newer than Emacs's") (modus-operandi-deuteranopia . "Emacs ships a version of Modus; Modus is here from its own repository, modus-themes, newer than Emacs's")
    (modus-operandi-tritanopia . "Emacs ships a version of Modus; Modus is here from its own repository, modus-themes, newer than Emacs's") (modus-vivendi . "Emacs ships a version of Modus; Modus is here from its own repository, modus-themes, newer than Emacs's") (modus-vivendi-tinted . "Emacs ships a version of Modus; Modus is here from its own repository, modus-themes, newer than Emacs's")
    (modus-vivendi-deuteranopia . "Emacs ships a version of Modus; Modus is here from its own repository, modus-themes, newer than Emacs's") (modus-vivendi-tritanopia . "Emacs ships a version of Modus; Modus is here from its own repository, modus-themes, newer than Emacs's")
    (newcomers-presets . "Not a colour theme: it sets options for people new to Emacs")
    (light-blue . "Obsolete in GNU Emacs since 29.1"))
  "Themes the upstreams have that are left out, and why: most because this
repository has the theme they repeat, from its own authors or its
long-standing Emacs port. The same palette with some colours given other
roles is the same theme, so one version of each, the original's, is here.")

(defconst e8-port-contrast-floor '(:text 4.0 :code 2.0 :comments 1.8)
  "The least contrast against its background, as WCAG measures it, that a
theme's ordinary text, each of its code's colours (keywords, strings,
functions, types and constants) and its comments may have. They are set
to keep the themes people choose on purpose, Solarized Light's text at
4.1:1 and Catppuccin Latte's yellow at 2.3:1 among them, and to leave out
those whose code or comments can hardly be read, at 1.7:1 and below.")

;;;; Upstreams

(defun e8-port-upstream-dir (name)
  (expand-file-name (symbol-name name) e8-port-upstream-dir))

(defun e8-port-git (dir &rest args)
  (with-temp-buffer
    (when (zerop (apply #'call-process "git" nil t nil "-C" dir args))
      (string-trim (buffer-string)))))

(defun e8-port-upstreams ()
  "tools/upstreams.tsv, as an alist of name to its repository."
  (with-temp-buffer
    (insert-file-contents "tools/upstreams.tsv")
    (cl-loop for line in (split-string (buffer-string) "\n" t)
             unless (string-prefix-p "#" line)
             collect (let ((f (split-string line "\t")))
                       (cons (intern (nth 0 f)) (nth 1 f))))))

;;;; Palettes: lists of (NAME . COLOUR), NAME a string, in the upstream's order

(defun e8-port-modus-palette (theme)
  "The Modus or Ef THEME's palette, its semantic names resolved."
  (let* ((palette (symbol-value (intern (format "%s-palette" theme))))
         (resolve (lambda (v)
                    (let ((n 0))
                      (while (and (symbolp v) v (< (cl-incf n) 10))
                        (setq v (car (alist-get v palette))))
                      v))))
    (cl-loop for (name value) in palette
             for c = (funcall resolve value)
             when (stringp c) collect (cons (symbol-name name) c))))

(defun e8-port-regexp-palette (file regexp)
  "A palette read from FILE, a format of the theme's name, with REGEXP."
  (lambda (theme)
    (with-temp-buffer
      (insert-file-contents (expand-file-name (format file theme) e8-port-upstream-dir))
      (let (out)
        (while (re-search-forward regexp nil t)
          (push (cons (match-string 1) (match-string 2)) out))
        (nreverse out)))))

(defun e8-port-solarized-palette (theme)
  "The solarized-emacs THEME's palette, its bases swapped for a light
theme as `solarized-with-color-variables' swaps them."
  (let (variant alist)
    (with-temp-buffer
      (insert-file-contents (e8-port-theme-file theme))
      (condition-case nil
          (while t
            (let ((form (read (current-buffer))))
              (when (eq (car-safe form) 'solarized-with-color-variables)
                (setq variant (cadr (nth 1 form)) alist (symbol-value (nth 3 form))))))
        (end-of-file nil)))
    (let ((swap (if (eq variant 'light)
                    '((base03 . base3) (base02 . base2) (base01 . base1) (base00 . base0)
                      (base3 . base03) (base2 . base02) (base1 . base01) (base0 . base00))
                  nil)))
      (cl-loop for (name . _) in alist
               collect (cons (symbol-name name) (cdr (assq (or (alist-get name swap) name) alist)))))))

(defun e8-port-tomorrow-palette (theme)
  (let ((mode (intern (string-remove-prefix "sanityinc-tomorrow-" (symbol-name theme)))))
    (cl-loop for (name . c) in (cdr (assq mode color-theme-sanityinc-tomorrow-colors))
             collect (cons (symbol-name name) c))))

(defun e8-port-catppuccin-palette (theme)
  (let ((flavor (intern (string-remove-prefix "catppuccin-" (symbol-name theme)))))
    (cl-loop for (name . c) in (alist-get flavor catppuccin-flavor-alist)
             collect (cons (symbol-name name) c))))

(defun e8-port-zenburn-palette (_theme)
  (cl-loop for (name . c) in zenburn-default-colors-alist
           collect (cons (string-remove-prefix "zenburn-" name) c)))

(defun e8-port-doom-palette (_theme)
  (cl-loop for (name . c) in doom-themes--colors
           for v = (if (consp c) (car c) c)
           when (stringp v) collect (cons (symbol-name name) v)))

;;;; Choosing a face's attributes

(defun e8-port-match-display (display &optional _frame)
  "Whether DISPLAY matches a graphical frame in millions of colours."
  (or (eq display t)
      (and (consp display)
           (cl-every
            (lambda (req)
              (let ((values (cdr req)))
                (pcase (car req)
                  ('type (cl-intersection values '(graphic ns x w32 pgtk mac haiku android)))
                  ('class (memq 'color values))
                  ('min-colors (<= (car values) 16777216))
                  ('background (memq e8-port-background values))
                  ('supports t)
                  (_ nil))))
            display))))

(defun e8-port-hex (colour)
  "COLOUR as six lower-case hex digits, or nil if it is none."
  (cond
   ((not (stringp colour)) nil)
   ((string-prefix-p "unspecified" colour) nil)
   ((string-match "\\`#\\([0-9a-fA-F]+\\)\\'" colour)
    (let ((h (downcase (match-string 1 colour))))
      (pcase (length h)
        (3 (format "#%c%c%c%c%c%c" (aref h 0) (aref h 0) (aref h 1) (aref h 1) (aref h 2) (aref h 2)))
        (6 (concat "#" h))
        (12 (concat "#" (substring h 0 2) (substring h 4 6) (substring h 8 10)))
        (_ nil))))
   ((member (downcase colour) '("unspecified-fg" "unspecified-bg")) nil)
   (t (or (gethash (e8-port-colour-key colour) (e8-port-rgb))
          ;; Emacs leaves a face without a colour it does not know, as
          ;; manoj-dark's "ConFlowerBlue"; so does the port.
          (progn (message "Unknown colour %S, left out as Emacs leaves it" colour) nil)))))

(defun e8-port-colour-key (name)
  (downcase (replace-regexp-in-string " " "" name)))

(defvar e8-port--rgb nil)

(defun e8-port-rgb ()
  "The colours X11 names, as GNU Emacs's etc/rgb.txt gives them: batch
Emacs knows only some of them, without spaces."
  (or e8-port--rgb
      (let ((table (make-hash-table :test #'equal)))
        (with-temp-buffer
          (insert-file-contents (expand-file-name "emacs/etc/rgb.txt" e8-port-upstream-dir))
          (while (re-search-forward "^[ \t]*\\([0-9]+\\)[ \t]+\\([0-9]+\\)[ \t]+\\([0-9]+\\)[ \t]+\\(.+?\\)[ \t]*$" nil t)
            (puthash (e8-port-colour-key (match-string 4))
                     (format "#%02x%02x%02x" (string-to-number (match-string 1))
                             (string-to-number (match-string 2)) (string-to-number (match-string 3)))
                     table)))
        (setq e8-port--rgb table))))

(defun e8-port-colour (c)
  (let ((h (e8-port-hex c))) (if h (list 'colour h) 'skip)))

(defun e8-port-decoration (v)
  (cond ((eq v 'unspecified) 'skip)
        ((eq v t) t)
        ((null v) :false)
        ((stringp v) (e8-port-colour v))
        ((consp v)
         (let (out)
           (when-let* ((s (plist-get v :style))) (push (cons "style" (symbol-name s)) out))
           (let ((c (plist-get v :color)))
             (when (stringp c)
               (let ((col (e8-port-colour c))) (unless (eq col 'skip) (push (cons "color" col) out)))))
           (if out (cons 'object (nreverse out)) t)))
        (t 'skip)))

(defun e8-port-box (v)
  (cond ((eq v 'unspecified) 'skip)
        ((eq v t) t)
        ((null v) :false)
        ((numberp v) v)
        ((stringp v) (e8-port-colour v))
        ((consp v)
         (let (out (w (plist-get v :line-width)))
           (when w (push (cons "lineWidth" (if (consp w) (car w) w)) out))
           (let ((c (plist-get v :color)))
             (when (stringp c)
               (let ((col (e8-port-colour c))) (unless (eq col 'skip) (push (cons "color" col) out)))))
           (when-let* ((s (plist-get v :style))) (push (cons "style" (symbol-name s)) out))
           (if out (cons 'object (nreverse out)) t)))
        (t 'skip)))

(defun e8-port-key (keyword)
  (pcase keyword
    (:distant-foreground "distantForeground")
    (:strike-through "strikeThrough")
    (:inverse-video "inverseVideo")
    (_ (substring (symbol-name keyword) 1))))

(defun e8-port-attributes (plist)
  "PLIST, a face's attributes, as E8's: a list of (NAME . VALUE)."
  (let (out)
    (while (and plist (keywordp (car plist)))
      (let* ((k (pop plist)) (v (pop plist))
             (value
              (pcase k
                ((or :foreground :background :distant-foreground) (e8-port-colour v))
                ((or :weight :slant :width) (if (and v (symbolp v) (not (eq v 'unspecified))) (symbol-name v) 'skip))
                ((or :underline :overline :strike-through) (e8-port-decoration v))
                (:box (e8-port-box v))
                ((or :inverse-video :extend) (cond ((eq v 'unspecified) 'skip) (v t) (t :false)))
                ;; A float is a factor of the height below and a whole number
                ;; an absolute height in tenths of a point; TypeScript has one
                ;; kind of number, and E8 reads a whole one as absolute. A
                ;; factor of 1.0 changes nothing, so it is left out, where
                ;; written as 1 it would draw the text at a tenth of a point,
                ;; and another whole factor is { factor: N }.
                (:height (cond ((and (floatp v) (= v 1.0)) 'skip)
                               ;; A whole factor, as calfw's titles' 2.0, which E8 would
                               ;; read as absolute written as a number.
                               ((and (floatp v) (= v (ftruncate v)))
                                (cons 'object (list (cons "factor" (truncate v)))))
                               ((numberp v) v)
                               (t 'skip)))
                (:family (if (stringp v) v 'skip))
                (:inherit (cond ((or (null v) (eq v 'unspecified)) 'skip)
                                ((consp v) (cons 'array (mapcar #'symbol-name (cl-remove-if-not #'symbolp v))))
                                ((symbolp v) (symbol-name v))
                                (t 'skip)))
                (_ 'skip))))
        (unless (eq value 'skip)
          (setf (alist-get (e8-port-key k) out nil nil #'equal) value))))
    (nreverse out)))

(defun e8-port-all-faces (theme)
  "Every face THEME gives, in its order, as (FACE . ATTRIBUTES)."
  (let (all)
    (dolist (setting (reverse (get theme 'theme-settings)))
      (when (and (eq (car setting) 'theme-face)
                 (not (assoc (symbol-name (nth 1 setting)) all)))
        (let ((attrs (cl-letf (((symbol-function 'face-spec-set-match-display) #'e8-port-match-display))
                       (face-spec-choose (nth 3 setting) nil))))
          (push (cons (symbol-name (nth 1 setting)) (e8-port-attributes attrs)) all))))
    (nreverse all)))

(defun e8-port-inherits (attrs)
  (let ((inherit (cdr (assoc "inherit" attrs))))
    (cond ((stringp inherit) (list inherit))
          ((eq (car-safe inherit) 'array) (cdr inherit)))))

(defun e8-port-wanted-faces (all)
  "Of ALL, the faces E8 draws and those they inherit from; `default' first."
  (let ((wanted (make-hash-table :test #'equal))
        (queue (cl-remove-if-not (lambda (f) (gethash (car f) e8-port-faces)) all))
        faces)
    (while queue
      (let ((f (pop queue)))
        (unless (gethash (car f) wanted)
          (puthash (car f) t wanted)
          (dolist (parent (e8-port-inherits (cdr f)))
            (when-let* ((p (assoc parent all))) (push p queue))))))
    (dolist (f all) (when (gethash (car f) wanted) (push f faces)))
    (setq faces (nreverse faces))
    (let ((default (assoc "default" faces)))
      (if default (cons default (delq default faces)) faces))))

(defun e8-port-resolve (all face attribute &optional depth)
  "The colour FACE has for ATTRIBUTE in ALL, through what it inherits."
  (let* ((attrs (cdr (assoc face all)))
         (own (cdr (assoc attribute attrs))))
    (cond
     ((and (consp own) (eq (car own) 'colour)) (cadr own))
     ((> (or depth 0) 10) nil)
     (t (cl-some (lambda (p) (e8-port-resolve all p attribute (1+ (or depth 0)))) (e8-port-inherits attrs))))))

;;;; Contrast, as WCAG measures it

(defun e8-port-luminance (hex)
  (let ((v (mapcar (lambda (i)
                     (let ((c (/ (string-to-number (substring hex i (+ i 2)) 16) 255.0)))
                       (if (<= c 0.04045) (/ c 12.92) (expt (/ (+ c 0.055) 1.055) 2.4))))
                   '(1 3 5))))
    (+ (* 0.2126 (nth 0 v)) (* 0.7152 (nth 1 v)) (* 0.0722 (nth 2 v)))))

(defun e8-port-contrast (a b)
  (let ((la (e8-port-luminance a)) (lb (e8-port-luminance b)))
    (/ (+ (max la lb) 0.05) (+ (min la lb) 0.05))))

(defconst e8-port-code-faces
  '("font-lock-keyword-face" "font-lock-string-face" "font-lock-function-name-face"
    "font-lock-type-face" "font-lock-constant-face"))

(defun e8-port-summary (all)
  "What the index shows of a theme whose faces are ALL: its colours and contrast."
  (let* ((bg (or (e8-port-resolve all "default" "background") "#ffffff"))
         (fg (or (e8-port-resolve all "default" "foreground") "#000000"))
         (fg-of (lambda (face) (or (e8-port-resolve all face "foreground") fg)))
         (comment (funcall fg-of "font-lock-comment-face")))
    (list :background bg :foreground fg
          :dark (< (e8-port-luminance bg) 0.18)
          :swatches (mapcar fg-of (append e8-port-code-faces '("font-lock-comment-face")))
          :contrast (list :text (e8-port-contrast fg bg)
                          :code (apply #'min (mapcar (lambda (f) (e8-port-contrast (funcall fg-of f) bg)) e8-port-code-faces))
                          :comments (e8-port-contrast comment bg)))))

(defun e8-port-readable-p (summary)
  "Whether SUMMARY's contrast reaches `e8-port-contrast-floor', and if not, why."
  (let ((c (plist-get summary :contrast)) why)
    (dolist (k '(:text :code :comments))
      (when (< (plist-get c k) (plist-get e8-port-contrast-floor k))
        (push (format "its %s reach %.1f:1 against its background, below %.1f:1"
                      (pcase k (:text "text does") (:code "code does at worst") (:comments "comments do"))
                      (plist-get c k) (plist-get e8-port-contrast-floor k))
              why)))
    (if why (string-join (nreverse why) "; ") t)))

;;;; Where a theme comes from

(defun e8-port-theme-file (theme)
  (locate-file (format "%s-theme" theme) (custom-theme--load-path) '(".el")))

(defun e8-port-copyright (file)
  (when (and file (file-exists-p file))
    (with-temp-buffer
      (let ((coding-system-for-read 'utf-8)) (insert-file-contents file))
      (let (out)
        (while (re-search-forward "^\\(?:;;+\\)? *\\(Copyright\\(?: ([cC])\\| ©\\|\\)? [0-9].*\\)$" nil t)
          (push (string-trim (match-string 1)) out))
        (nreverse out)))))

(defun e8-port-people (file field)
  "The names FILE's header gives in FIELD, \"Author\" or \"Maintainer\",
without their addresses: lisp-mnt's own reading drops a name with none,
and letters such as É."
  (when (and file (file-exists-p file))
    (with-temp-buffer
      (let ((coding-system-for-read 'utf-8)) (insert-file-contents file))
      (cl-loop for line in (lm-header-multiline field)
               append (cl-loop for part in (split-string line "\\(?:,\\| and \\)" t)
                               for name = (string-trim
                                           (replace-regexp-in-string "<[^>]*>\\|([^)]*)\\|https?://[^ ]*" "" part))
                               unless (string-empty-p name) collect name)))))

(defun e8-port-holders (copyright)
  "The holders COPYRIGHT's lines name, for a theme whose files name no author."
  (delete-dups
   (cl-loop for line in copyright
            for holder = (replace-regexp-in-string
                          "\\`Copyright\\(?: ([cC])\\| ©\\)? *[-0-9, ]*\\(?:present\\)?,? *\\|,? *All rights reserved\\.?\\|\\.\\'" "" line)
            unless (string-empty-p (string-trim holder)) collect (string-trim holder))))

(defun e8-port-source (upstream theme)
  "Where THEME, from UPSTREAM, comes from, as a plist for sources.json."
  (let* ((info (alist-get upstream e8-port-packages))
         (file (e8-port-theme-file theme))
         (dir (e8-port-upstream-dir upstream))
         (main (and (plist-get info :main) (expand-file-name (plist-get info :main) dir)))
         (main (if (and main (file-exists-p main)) main
                 (and (plist-get info :main)
                      (car (directory-files-recursively dir (concat "\\`" (regexp-quote (plist-get info :main)) "\\'"))))))
         (copyright (or (e8-port-copyright file) (e8-port-copyright main)
                        (e8-port-copyright (car (directory-files dir t "\\`LICEN[CS]E")))))
         (describe (or (e8-port-git dir "describe" "--tags") "")))
    (list :theme (symbol-name theme)
          :collection (plist-get info :collection)
          :package (plist-get info :package)
          :repository (alist-get upstream (e8-port-upstreams))
          :commit (e8-port-git dir "rev-parse" "HEAD")
          :describe describe
          ;; GNU Emacs's themes have no version of their own: Emacs's is theirs.
          :version (or (and main (or (lm-version main)
                                     (with-temp-buffer (insert-file-contents main) (lm-header "Package-Version"))))
                       (and (string-prefix-p "emacs-" describe) (string-remove-prefix "emacs-" describe))
                       "")
          :file (file-relative-name file dir)
          :blob (e8-port-git dir "rev-parse" (format "HEAD:%s" (file-relative-name file dir)))
          :licence (if (eq (plist-get info :licence) 'mit) "MIT" "GPL-3.0-or-later")
          :authors (or (e8-port-people file "Author") (e8-port-holders (e8-port-copyright file))
                       (e8-port-people main "Author") (e8-port-holders copyright))
          :maintainers (or (e8-port-people file "Maintainer") (e8-port-people main "Maintainer"))
          :copyright copyright
          :original (let ((s (and file (with-temp-buffer
                                         (insert-file-contents file)
                                         (lm-header "Source")))))
                      (and s (string-prefix-p "http" s) s)))))

;;;; Loading

(defun e8-port-load (theme loader)
  "Loads THEME afresh with LOADER, as on a graphical display in millions of
colours, and returns all its faces."
  (let ((e8-port-background 'dark) all)
    (cl-letf (((symbol-function 'display-graphic-p) (lambda (&rest _) t))
              ((symbol-function 'display-color-cells) (lambda (&rest _) 16777216))
              ((symbol-function 'tty-display-color-cells) (lambda (&rest _) 16777216)))
      (funcall loader))
    (setq all (e8-port-all-faces theme))
    (let ((bg (e8-port-resolve all "default" "background")))
      (when (and bg (> (e8-port-luminance bg) 0.18))
        (setq e8-port-background 'light)
        (setq all (e8-port-all-faces theme))))
    all))

(defun e8-port-forget (theme)
  "Forgets what THEME gave, so that loading it again gives only what it gives now."
  (put theme 'theme-settings nil))

(defun e8-port-defines-theme-p (file)
  "Whether FILE defines a theme, as solarized-theme.el, the package's entry, does not."
  (with-temp-buffer
    (insert-file-contents file)
    (re-search-forward "^(\\(?:deftheme\\|def-doom-theme\\|modus-themes-theme\\|gruvbox-deftheme\\)\\_>" nil t)))

(defun e8-port-members (family)
  "FAMILY's themes, as (UPSTREAM THEME) pairs, the repeats left out."
  (cl-loop for (upstream . themes) in (plist-get family :members)
           append (mapcar (lambda (theme) (list upstream theme))
                          (if (eq (car themes) :all)
                              (let ((dir (expand-file-name (cadr themes) e8-port-upstream-dir)))
                                (cl-loop for f in (directory-files dir nil "-theme\\.el\\'")
                                         for theme = (intern (string-remove-suffix "-theme.el" f))
                                         unless (or (assq theme e8-port-repeats)
                                                    (not (e8-port-defines-theme-p (expand-file-name f dir))))
                                         collect theme))
                            themes))))

;;;; Naming colours by the palette

(defun e8-port-camel (name)
  "NAME as a JavaScript identifier in camel case. A sign before a digit is
kept as a word, as Zenburn's bg-1 and bg+1 are two colours: bgMinus1 and
bgPlus1."
  (let* ((name (replace-regexp-in-string "\\`-" "minus-" name))
         (name (replace-regexp-in-string "-\\([0-9]\\)" "-minus-\\1" name))
         (name (replace-regexp-in-string "\\+\\([0-9]\\)" "-plus-\\1" name))
         (parts (split-string name "[-_ +]+" t)))
    (concat (car parts) (mapconcat #'capitalize (cdr parts) ""))))

(defun e8-port-identifier-p (s)
  (string-match-p "\\`[a-zA-Z_$][a-zA-Z0-9_$]*\\'" s))

(defun e8-port-ref (key)
  "How the code reaches the palette's KEY."
  (if (e8-port-identifier-p key) (concat "c." key) (format "c[%S]" key)))

(defun e8-port-map-colours (attrs fn)
  (mapcar (lambda (a)
            (cons (car a)
                  (let ((v (cdr a)))
                    (cond ((and (consp v) (eq (car v) 'colour)) (funcall fn v))
                          ((and (consp v) (eq (car v) 'object))
                           (cons 'object (e8-port-map-colours (cdr v) fn)))
                          (t v)))))
          attrs))

(defun e8-port-colour-paths (attrs &optional prefix)
  (cl-loop for (k . v) in attrs
           append (cond ((and (consp v) (eq (car v) 'colour)) (list (append prefix (list k))))
                        ((and (consp v) (eq (car v) 'object)) (e8-port-colour-paths (cdr v) (append prefix (list k)))))))

(defun e8-port-colour-at (attrs path)
  (let ((v (cdr (assoc (car path) attrs))))
    (if (cdr path) (e8-port-colour-at (cdr v) (cdr path)) (cadr v))))

(defun e8-port-set-colour (attrs path value)
  (mapcar (lambda (a)
            (if (equal (car a) (car path))
                (cons (car a) (if (cdr path)
                                  (cons 'object (e8-port-set-colour (cddr a) (cdr path) value))
                                value))
              a))
          attrs))

(cl-defstruct (e8-port-member (:constructor e8-port-member-make))
  theme upstream faces palette by-name by-hex keys summary source)

(defun e8-port-index-palette (m)
  "Fills in member M's lookups: palette name to colour, and colour to names.
Two names that would be one identifier are an error, not a colour lost."
  (let ((by-name (make-hash-table :test #'equal))
        (by-hex (make-hash-table :test #'equal))
        (keys (make-hash-table :test #'equal)))
    (dolist (e (e8-port-member-palette m))
      (let ((other (gethash (e8-port-camel (car e)) keys)))
        (when (and other (not (equal other (car e))))
          (error "%s's palette names %s and %s are both %s" (e8-port-member-theme m) other (car e) (e8-port-camel (car e))))
        (puthash (e8-port-camel (car e)) (car e) keys)))
    (dolist (e (e8-port-member-palette m))
      (let ((hex (e8-port-hex (cdr e))))
        (when (and hex (not (gethash (car e) by-name)))
          (puthash (car e) hex by-name)
          (puthash hex (append (gethash hex by-hex) (list (car e))) by-hex))))
    (setf (e8-port-member-by-name m) by-name
          (e8-port-member-by-hex m) by-hex
          (e8-port-member-keys m) nil)))

(defun e8-port-common-name (members hexes)
  "The first name in the first member's palette that names, in every one
of MEMBERS, the colour HEXES gives for it."
  (cl-loop for name in (gethash (car hexes) (e8-port-member-by-hex (car members)))
           when (cl-every (lambda (pair) (equal (gethash name (e8-port-member-by-name (car pair))) (cdr pair)))
                          (cl-mapcar #'cons members hexes))
           return name))

(defun e8-port-use-key (m key colour)
  (unless (assoc key (e8-port-member-keys m))
    (push (cons key colour) (e8-port-member-keys m))))

(defun e8-port-name-colours (members)
  "Names the colours of MEMBERS' faces by their palettes.
Returns (SHARED . OWN): the faces the module gives, with colours as
(ref KEY), or (literal HEX) for a family of one; and for each member, an
alist of the faces it gives otherwise, with literal colours, and the
shared faces it does not give, as (FACE . omit)."
  (let* ((single (= (length members) 1))
         (strip (lambda (attrs) (e8-port-map-colours attrs (lambda (_) '(colour)))))
         (order (cl-remove-duplicates
                 (apply #'append (mapcar (lambda (m) (mapcar #'car (e8-port-member-faces m))) members))
                 :test #'equal :from-end t))
         (own (mapcar (lambda (m) (list m)) members))
         shared)
    (dolist (face order)
      ;; The members grouped by how they give FACE, the largest group first.
      (let ((groups nil))
        (dolist (m members)
          (let ((spec (assoc face (e8-port-member-faces m))))
            (when spec
              (let* ((form (funcall strip (cdr spec)))
                     (g (assoc form groups)))
                (if g (setcdr g (append (cdr g) (list m))) (push (list form m) groups))))))
        (setq groups (sort (nreverse groups) (lambda (a b) (> (length (cdr a)) (length (cdr b))))))
        (let* ((group (cdr (car groups)))
               (specs (mapcar (lambda (m) (cdr (assoc face (e8-port-member-faces m)))) group))
               (named (car specs)))
          (dolist (path (e8-port-colour-paths (car specs)))
            (let* ((hexes (mapcar (lambda (s) (e8-port-colour-at s path)) specs))
                   (name (e8-port-common-name group hexes)))
              (setq named
                    (e8-port-set-colour
                     named path
                     (cond
                      (name
                       (let ((key (e8-port-camel name)))
                         (dolist (m group) (e8-port-use-key m key (gethash name (e8-port-member-by-name m))))
                         (list 'ref key)))
                      (single (list 'literal (car hexes)))
                      (t
                       (let ((key (e8-port-camel (format "%s-%s" face (string-join path "-")))))
                         (cl-loop for m in group for h in hexes do (e8-port-use-key m key h))
                         (list 'ref key))))))))
          (push (cons face named) shared)
          ;; The rest give it otherwise, or not at all.
          (dolist (m members)
            (unless (memq m group)
              (let ((spec (assoc face (e8-port-member-faces m)))
                    (o (assq m own)))
                (nconc o (list (if spec
                                   (cons face (e8-port-map-colours (cdr spec) (lambda (c) (list 'literal (cadr c)))))
                                 (cons face 'omit))))))))))
    (cons (nreverse shared) (mapcar #'cdr own))))

(defun e8-port-ordered-keys (m)
  "Member M's palette keys in use, in its upstream's order, faces' own last."
  (let ((order (make-hash-table :test #'equal)) (i 0))
    (dolist (e (e8-port-member-palette m))
      (let ((k (e8-port-camel (car e))))
        (unless (gethash k order) (puthash k (cl-incf i) order))))
    (sort (copy-sequence (e8-port-member-keys m))
          (lambda (a b) (< (gethash (car a) order 100000) (gethash (car b) order 100000))))))

;;;; Writing TypeScript

(defun e8-port-ts-value (v)
  (cond ((eq v t) "true")
        ((eq v :false) "false")
        ((stringp v) (json-encode-string v))
        ((integerp v) (number-to-string v))
        ((floatp v) (format "%s" v))
        ((eq (car v) 'ref) (e8-port-ref (cadr v)))
        ((memq (car v) '(literal colour)) (json-encode-string (cadr v)))
        ((eq (car v) 'array) (concat "[" (mapconcat #'json-encode-string (cdr v) ", ") "]"))
        ((eq (car v) 'object) (e8-port-ts-object (cdr v)))
        (t (error "Cannot write %S" v))))

(defun e8-port-ts-object (attrs)
  (if (null attrs) "{}"
    (concat "{ " (mapconcat (lambda (a) (format "%s: %s" (car a) (e8-port-ts-value (cdr a)))) attrs ", ") " }")))

(defun e8-port-ts-faces (faces indent)
  (mapconcat (lambda (f) (format "%s[%S, %s]," indent (car f) (e8-port-ts-object (cdr f)))) faces "\n"))

(defun e8-port-ts-palette (palette indent)
  (mapconcat (lambda (e) (format "%s%s: %S," indent
                                 (if (e8-port-identifier-p (car e)) (car e) (json-encode-string (car e)))
                                 (cdr e)))
             palette "\n"))

(defconst e8-port-mit-text
  "Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the \"Software\"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.")

(defconst e8-port-gpl-text
  "This program is free software: you can redistribute it and/or modify it
under the terms of the GNU General Public License as published by the
Free Software Foundation, either version 3 of the License, or (at your
option) any later version.

This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
Public License for more details.")

(defun e8-port-comment (text)
  (mapconcat (lambda (l) (if (string-empty-p l) "//" (concat "// " l))) (split-string text "\n") "\n"))

(defun e8-port-header (source title &optional module-of)
  "The header of a file holding SOURCE's theme, or the faces of a family's
MODULE-OF upstream: its licence, where it comes from, and its copyright."
  (let ((mit (equal (plist-get source :licence) "MIT")))
    (concat
     (format "// SPDX-License-Identifier: %s\n//\n" (plist-get source :licence))
     (e8-port-comment title) "\n//\n"
     (e8-port-comment
      (format "A port to E8 of %s from %s %s (%s), at commit %s, %s. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it."
              (if module-of "the faces" (plist-get source :file))
              (plist-get source :package) (plist-get source :version)
              (plist-get source :repository)
              (substring (plist-get source :commit) 0 (min 12 (length (plist-get source :commit))))
              (plist-get source :describe)))
     "\n//\n"
     (let ((authors (plist-get source :authors)))
       (if authors (concat (e8-port-comment (format "Author: %s" (string-join authors ", "))) "\n") ""))
     (if (plist-get source :original)
         (concat (e8-port-comment (format "After: %s" (plist-get source :original))) "\n") "")
     (mapconcat (lambda (c) (concat "// " c "\n")) (plist-get source :copyright) "")
     "// Copyright (C) 2026 The E8 contributors\n//\n"
     (e8-port-comment (if mit e8-port-mit-text e8-port-gpl-text))
     "\n")))

(defun e8-port-fill (s width)
  "S broken into lines of at most WIDTH."
  (with-temp-buffer
    (insert s)
    (let ((fill-column width)) (fill-region (point-min) (point-max)))
    (buffer-string)))

(defun e8-port-write (file text)
  (with-temp-file file (insert text))
  (message "Wrote %s" file))

(defun e8-port-doc (theme)
  (let ((doc (get theme 'theme-documentation)))
    (if (stringp doc) (string-trim (car (split-string doc "\n"))) (format "The %s theme" theme))))

(defun e8-port-define-name (module)
  (concat "define" (mapconcat #'capitalize (split-string module "-") "") "Theme"))

(defun e8-port-own-text (own)
  "The arguments a member's file passes for the faces it gives otherwise, OWN."
  (let ((faces (cl-remove-if (lambda (f) (eq (cdr f) 'omit)) own))
        (omit (mapcar #'car (cl-remove-if-not (lambda (f) (eq (cdr f) 'omit)) own))))
    (concat
     (if (or faces omit) (concat ", [\n" (e8-port-ts-faces faces "  ") (if faces "\n" "") "]") "")
     (if omit (concat ", " (concat "[" (mapconcat #'json-encode-string omit ", ") "]")) ""))))

(defun e8-port-write-single (m shared &optional append)
  (let* ((theme (e8-port-member-theme m))
         (source (e8-port-member-source m))
         (keys (e8-port-ordered-keys m)))
    (e8-port-write
     (format "%s-theme.ts" theme)
     (concat
      (e8-port-header source (format "The %s theme for E8." theme))
      "\nimport { customThemeSetFaces, deftheme, provideTheme } from \"custom\";\n\n"
      (format "deftheme(%S, %s);\n\n" (symbol-name theme) (json-encode-string (e8-port-doc theme)))
      (if keys
          (concat "/** The colours, by the names the upstream gives them. */\nconst c = {\n"
                  (e8-port-ts-palette keys "  ") "\n};\n\n")
        "")
      (format "customThemeSetFaces(%S, [\n" (symbol-name theme))
      (e8-port-ts-faces shared "  ")
      "\n]);\n\n"
      (if append (concat (with-temp-buffer (insert-file-contents append) (buffer-string)) "\n") "")
      (format "provideTheme(%S);\n" (symbol-name theme))))))

(defun e8-port-write-family (family members shared own)
  (let* ((module (plist-get family :module))
         (fn (e8-port-define-name module))
         (faces-source (e8-port-member-source
                        (or (cl-find (plist-get family :faces-from) members :key #'e8-port-member-upstream)
                            (car members))))
         (flavors (plist-get family :flavors)))
    (e8-port-write
     (format "%s.ts" module)
     (concat
      (e8-port-header faces-source
                      (format "What the %s themes share: their faces, in terms of each one's palette%s."
                              (plist-get faces-source :collection)
                              (if flavors ", and each flavour's palette" ""))
                      t)
      "\nimport { customThemeSetFaces, deftheme, provideTheme } from \"custom\";\n\n"
      "/** A theme's colours, by the names its upstream gives them. */\n"
      "export type Palette = Record<string, string>;\n\n"
      (if flavors
          (concat "/** Each flavour's colours. */\nexport const flavors: Record<string, Palette> = {\n"
                  (mapconcat (lambda (m)
                               (format "  %s: {\n%s\n  },"
                                       (string-remove-prefix "catppuccin-" (symbol-name (e8-port-member-theme m)))
                                       (e8-port-ts-palette (e8-port-ordered-keys m) "    ")))
                             members "\n")
                  "\n};\n\n")
        "")
      "/**\n * Defines and provides the theme NAME in the colours of palette C, with\n"
      " * the faces OWN gives in place of the family's, and without those OMIT names.\n */\n"
      (format "export function %s(name: string, doc: string, c: Palette, own: [string, e8.FaceAttributes][] = [], omit: string[] = []): void {\n" fn)
      "  deftheme(name, doc);\n"
      "  const faces: [string, e8.FaceAttributes][] = [\n"
      (e8-port-ts-faces shared "    ")
      "\n  ];\n"
      "  customThemeSetFaces(name, [...faces.filter(([f]) => !omit.includes(f)), ...own]);\n"
      "  provideTheme(name);\n}\n"))
    (cl-loop for m in members for o in own
             for theme = (e8-port-member-theme m)
             do (e8-port-write
                 (format "%s-theme.ts" theme)
                 (concat
                  (e8-port-header (e8-port-member-source m) (format "The %s theme for E8." theme))
                  (if flavors
                      (format "\nimport { %s, flavors } from %S;\n\n%s(%S, %s, flavors.%s%s);\n"
                              fn module fn (symbol-name theme) (json-encode-string (e8-port-member-doc m))
                              (string-remove-prefix "catppuccin-" (symbol-name theme)) (e8-port-own-text o))
                    (concat
                     (format "\nimport { %s } from %S;\n\n" fn module)
                     "/** The colours, by the names the upstream gives them. */\nconst c = {\n"
                     (e8-port-ts-palette (e8-port-ordered-keys m) "  ") "\n};\n\n"
                     (format "%s(%S, %s, c%s);\n" fn (symbol-name theme)
                             (json-encode-string (e8-port-member-doc m)) (e8-port-own-text o)))))))
    (when flavors (e8-port-write-catppuccin fn module (car members)))))

(defun e8-port-write-catppuccin (fn module m)
  "catppuccin-theme.ts: the theme in the flavour catppuccin-flavor names, as upstream has it."
  (e8-port-write
   "catppuccin-theme.ts"
   (concat
    (e8-port-header (plist-put (copy-sequence (e8-port-member-source m)) :file "catppuccin-theme.el")
                    "The Catppuccin theme for E8, in the flavour catppuccin-flavor names, as upstream has it; catppuccin-latte and the rest are each flavour as a theme of its own.")
    (format "\nimport { enableTheme } from \"custom\";\nimport { %s, flavors } from %S;\n\n" fn module)
    "e8.defineVariable({\n  name: \"catppuccin-flavor\",\n"
    "  doc: 'The flavour of the catppuccin theme: \"mocha\", \"macchiato\", \"frappe\" or \"latte\". catppuccin-reload shows a change.',\n"
    "  value: \"mocha\",\n});\n\n"
    "/** Defines catppuccin in the flavour catppuccin-flavor names. */\nfunction define(): void {\n"
    "  const flavor = String(e8.variable(\"catppuccin-flavor\"));\n"
    (format "  %s(\"catppuccin\", \"Catppuccin, in the flavour catppuccin-flavor names\", flavors[flavor] ?? flavors.mocha);\n" fn)
    "}\n\ndefine();\n\n"
    "e8.defineCommand({\n  name: \"catppuccin-reload\",\n"
    "  doc: \"Define catppuccin again in the flavour catppuccin-flavor names, and enable it.\",\n"
    "  run: () => {\n    define();\n    enableTheme(\"catppuccin\");\n  },\n});\n"
    "e8.defineCommand({\n  name: \"catppuccin-load-flavor\",\n"
    "  doc: \"Set catppuccin-flavor to FLAVOR and show catppuccin in it.\",\n"
    "  params: [{ name: \"flavor\", prompt: \"Flavor: \", collection: () => Object.keys(flavors), requireMatch: true }],\n"
    "  run: (flavor) => {\n    e8.setVariable(\"catppuccin-flavor\", flavor);\n    define();\n    enableTheme(\"catppuccin\");\n  },\n});\n")))

(defun e8-port-member-doc (m)
  (or (get (e8-port-member-theme m) 'e8-port-doc) (e8-port-doc (e8-port-member-theme m))))

;;;; Porting a family

(defvar e8-port-results nil "Each theme ported: (THEME SUMMARY SOURCE DOC).")
(defvar e8-port-left-out nil "Each theme left out: (THEME REASON SOURCE).")

(defun e8-port-palette-function (family)
  (let ((p (plist-get family :palette)))
    (cond ((null p) (lambda (_) nil))
          ((functionp p) p)
          ((eq (car-safe p) 'e8-port-regexp-palette) (apply #'e8-port-regexp-palette (cdr p))))))

(defun e8-port-family (name family)
  (message "Porting %s" name)
  (dolist (d (plist-get family :dirs))
    (let ((dir (expand-file-name d e8-port-upstream-dir)))
      (add-to-list 'load-path dir)
      (add-to-list 'custom-theme-load-path dir)))
  (let ((palette (e8-port-palette-function family))
        (flavors (plist-get family :flavors))
        members)
    (pcase-dolist (`(,upstream ,theme) (e8-port-members family))
      (let* ((loaded (if flavors 'catppuccin theme))
             (all (progn
                    (e8-port-forget loaded)
                    (e8-port-load loaded
                                  (if flavors
                                      (lambda ()
                                        (setq catppuccin-flavor (intern (string-remove-prefix "catppuccin-" (symbol-name theme))))
                                        (load "catppuccin-theme" nil t))
                                    (lambda () (load-theme theme t t))))))
             (summary (e8-port-summary all))
             (source (e8-port-source upstream (if flavors 'catppuccin theme)))
             (readable (if (e8-port-resolve all "default" "background")
                           (e8-port-readable-p summary)
                         'no-background)))
        (when flavors
          (put theme 'e8-port-doc
               (format "Catppuccin %s, %s" (capitalize (string-remove-prefix "catppuccin-" (symbol-name theme)))
                       (if (plist-get summary :dark) "a dark flavour" "the light flavour")))
          (setq source (plist-put source :theme (symbol-name theme))))
        (if (not (eq readable t))
            (push (list theme
                        (if (eq readable 'no-background)
                            "Gives no background: it is meant for a frame already dark or light enough for it, which E8's window may not be."
                          (format "Hard to read: %s." readable))
                        source)
                  e8-port-left-out)
          (let ((m (e8-port-member-make :theme theme :upstream upstream
                                        :faces (e8-port-wanted-faces all)
                                        :palette (funcall palette theme)
                                        :summary summary :source source)))
            (e8-port-index-palette m)
            (push m members)))))
    (setq members (nreverse members))
    (dolist (m members)
      (push (list (e8-port-member-theme m) (e8-port-member-summary m) (e8-port-member-source m)
                  (e8-port-member-doc m) name)
            e8-port-results))
    (cond
     ((or (plist-get family :hand) (null members)) nil)
     ((or (plist-get family :singles) (and (= (length members) 1) (not (plist-get family :module))))
      (dolist (m members)
        (e8-port-write-single m (car (e8-port-name-colours (list m))) (plist-get family :append))))
     (t (pcase-let ((`(,shared . ,own) (e8-port-name-colours members)))
          (e8-port-write-family family members shared own))))))

;;;; Sources, index and credits

(defun e8-port-json (value)
  (let ((json-encoding-pretty-print t) (json-encoding-default-indentation "  "))
    (json-encode value)))

(defun e8-port-plist-alist (plist)
  (cl-loop for (k v) on plist by #'cddr
           collect (cons (substring (symbol-name k) 1)
                         (if (memq k '(:authors :maintainers :copyright)) (vconcat v) v))))

(defun e8-port-write-sources ()
  (let ((sources (mapcar (lambda (r) (e8-port-plist-alist (nth 2 r)))
                         (sort (copy-sequence e8-port-results)
                               (lambda (a b) (string< (car a) (car b)))))))
    (e8-port-write "sources.json" (concat (e8-port-json (vconcat sources)) "\n"))))

(defun e8-port-round (x) (/ (round (* x 10)) 10.0))

(defun e8-port-write-index ()
  (let ((results (sort (copy-sequence e8-port-results) (lambda (a b) (string< (car a) (car b))))))
    (e8-port-write
     "e8-themes-index.ts"
     (concat
      "// SPDX-License-Identifier: GPL-3.0-or-later\n//\n"
      "// What e8-themes-select shows of each theme in this repository without\n"
      "// loading it, written by tools/port-themes.el from the faces Emacs gives\n"
      "// the theme upstream. Do not edit: run `make port` again.\n\n"
      "/** A theme of this repository, as the chooser lists it. */\n"
      "export interface ThemeEntry {\n"
      "  name: string;\n  /** The collection it is filed under: Modus, Ef, Doom, ... */\n  collection: string;\n"
      "  doc: string;\n  dark: boolean;\n  background: string;\n  foreground: string;\n"
      "  /** Its colours for keywords, strings, functions, types, constants and comments. */\n  swatches: string[];\n"
      "  /** Contrast against its background, as WCAG measures it: text, code at worst, comments. */\n"
      "  contrast: { text: number; code: number; comments: number };\n"
      "  /** Where it comes from. */\n"
      "  /** Where it comes from, sources.json says more: its package and version, the commit it was ported at, its licence and authors, and the theme it is after. */\n"
      "  source: { package: string; version: string; commit: string; licence: string; authors: string[]; original?: string };\n"
      "}\n\n"
      "export const THEMES: ThemeEntry[] = [\n"
      (mapconcat
       (lambda (r)
         (pcase-let ((`(,theme ,summary ,source ,doc ,_family) r))
           (let ((c (plist-get summary :contrast)))
             (format "  { name: %S, collection: %S, doc: %s, dark: %s, background: %S, foreground: %S, swatches: [%s], contrast: { text: %s, code: %s, comments: %s }, source: { package: %S, version: %S, commit: %S, licence: %S, authors: [%s]%s } },"
                     (symbol-name theme) (plist-get source :collection) (json-encode-string doc)
                     (if (plist-get summary :dark) "true" "false")
                     (plist-get summary :background) (plist-get summary :foreground)
                     (mapconcat (lambda (s) (format "%S" s)) (plist-get summary :swatches) ", ")
                     (e8-port-round (plist-get c :text)) (e8-port-round (plist-get c :code)) (e8-port-round (plist-get c :comments))
                     (plist-get source :package) (plist-get source :version)
                     (substring (plist-get source :commit) 0 (min 12 (length (plist-get source :commit))))
                     (plist-get source :licence)
                     (mapconcat #'json-encode-string (plist-get source :authors) ", ")
                     (if (stringp (plist-get source :original)) (format ", original: %S" (plist-get source :original)) "")))))
       results "\n")
      "\n];\n"))))

(defun e8-port-md-escape (s) (replace-regexp-in-string "|" "\\\\|" s))

(defun e8-port-write-credits ()
  (let* ((results (sort (copy-sequence e8-port-results) (lambda (a b) (string< (car a) (car b)))))
         (by-collection (seq-group-by (lambda (r) (plist-get (nth 2 r) :collection)) results))
         (dark (cl-count-if (lambda (r) (plist-get (nth 1 r) :dark)) results)))
    (e8-port-write
     "THEMES.md"
     (concat
      "# The themes\n\n"
      (format "%d themes, %d dark and %d light, each a port of a theme for Emacs, credited here to its authors with the exact version it was ported from. `tools/check-upstreams.sh` says which upstreams have changed since. This file, `sources.json` and `e8-themes-index.ts` are written by `tools/port-themes.el`: do not edit them.\n\n"
              (length results) dark (- (length results) dark))
      (mapconcat
       (lambda (group)
         (let* ((rows (cdr group))
                (s (nth 2 (car rows))))
           (concat
            (format "## %s\n\n" (car group))
            (format "From [%s](%s) %s, ported at commit `%s` (%s), under the %s licence.\n\n"
                    (plist-get s :package) (string-remove-suffix ".git" (plist-get s :repository))
                    (plist-get s :version) (substring (plist-get s :commit) 0 (min 12 (length (plist-get s :commit))))
                    (plist-get s :describe) (plist-get s :licence))
            "| Theme | | Authors | After | Contrast (text, code, comments) |\n| --- | --- | --- | --- | --- |\n"
            (mapconcat
             (lambda (r)
               (pcase-let ((`(,theme ,summary ,source ,_doc ,_f) r))
                 (let ((c (plist-get summary :contrast)))
                   (format "| `%s` | %s | %s | %s | %.1f, %.1f, %.1f |"
                           theme (if (plist-get summary :dark) "dark" "light")
                           (e8-port-md-escape (string-join (plist-get source :authors) ", "))
                           (if (stringp (plist-get source :original)) (plist-get source :original) "")
                           (plist-get c :text) (plist-get c :code) (plist-get c :comments)))))
             rows "\n")
            "\n\n")))
       by-collection "")
      "## Left out\n\n"
      "Themes the upstreams above have that this repository does not, and why.\n\n"
      "| Theme | Why |\n| --- | --- |\n"
      (mapconcat (lambda (r) (format "| `%s` | %s |" (car r) (cdr r)))
                 (sort (append (mapcar (lambda (r) (cons (symbol-name (car r)) (nth 1 r))) e8-port-left-out)
                               (cl-loop for (theme . why) in e8-port-repeats
                                        unless (assq theme e8-port-results)
                                        collect (cons (symbol-name theme) (concat why ".")))
                               (when (cl-some (lambda (r) (string-prefix-p "modus-" (symbol-name (car r)))) e8-port-results)
                                 (list (cons "modus-* in GNU Emacs" (concat (alist-get 'modus-operandi e8-port-repeats) ".")))))
                       (lambda (a b) (string< (car a) (car b))))
                 "\n")
      "\n"))))

(defun e8-port-remove-stale (before)
  "Deletes the theme files BEFORE named that this run did not write."
  (let ((now (mapcar (lambda (r) (symbol-name (car r))) e8-port-results)))
    (dolist (theme before)
      (unless (or (member theme now) (equal theme "catppuccin"))
        (let ((file (format "%s-theme.ts" theme)))
          (when (file-exists-p file)
            (delete-file file)
            (message "Removed %s" file)))))))

;;;; Entry point

;; Nord asks whether the display is graphical before it gives colours.
(advice-add 'nord-display-truecolor-or-graphic-p :override (lambda (&rest _) t))

(defun e8-port-themes ()
  "Ports every family, or those named on the command line."
  (setq e8-port-faces (make-hash-table :test #'equal))
  (with-temp-buffer
    (insert-file-contents "tools/e8-faces.txt")
    (dolist (f (split-string (buffer-string) "\n" t)) (puthash f t e8-port-faces)))
  (let ((names (mapcar #'intern command-line-args-left))
        (before (when (file-exists-p "sources.json")
                  (mapcar (lambda (s) (alist-get 'theme s)) (json-read-file "sources.json")))))
    (setq command-line-args-left nil)
    (dolist (family e8-port-families)
      (when (or (null names) (memq (car family) names))
        (e8-port-family (car family) (cdr family))))
    (unless names
      (e8-port-write-sources)
      (e8-port-write-index)
      (e8-port-write-credits)
      (e8-port-remove-stale before))
    (message "%d themes ported, %d left out as hard to read or without a background" (length e8-port-results) (length e8-port-left-out))
    (dolist (r e8-port-left-out) (message "  left out %s: %s" (car r) (nth 1 r)))))

;;; port-themes.el ends here
