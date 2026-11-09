;;; port-themes.el --- Port Emacs themes to E8 -*- lexical-binding: t -*-

;; Copyright (C) 2026 The E8 contributors
;;
;; This program is free software: you can redistribute it and/or modify it
;; under the terms of the GNU General Public License as published by the
;; Free Software Foundation, either version 3 of the License, or (at your
;; option) any later version.

;;; Commentary:

;; Writes the themes of this repository from their upstreams, as Emacs
;; itself loads them: each theme is loaded (not enabled) in Emacs, each of
;; its faces that E8 or its ports draw (tools/e8-faces.txt) takes the
;; attributes Emacs would give it on a graphical frame in millions of
;; colours, and the colours are written by the names the upstream's palette
;; gives them, so the ported theme reads as its upstream does. A family of
;; themes that share their faces, as the Modus themes do, is written as one
;; module of faces and a file per theme holding its palette.
;;
;; Run from the repository's root, with the upstreams checked out in
;; UPSTREAM (see `make port' in the Makefile):
;;
;;   emacs -Q --batch -l tools/port-themes.el -f e8-port-themes UPSTREAM [FAMILY...]

;;; Code:

(require 'cl-lib)
(require 'subr-x)
(require 'json)

(defvar e8-port-upstream nil "The directory holding the upstreams' checkouts.")
(defvar e8-port-background 'dark "The background the faces are chosen for.")
(defvar e8-port-faces nil "The faces to port, a hash table.")

;;;; The families

(defconst e8-port-mit
  "// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the \"Software\"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.")

(defconst e8-port-gpl
  "// This program is free software: you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the
// Free Software Foundation, either version 3 of the License, or (at your
// option) any later version.
//
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
// Public License for more details.")

(defconst e8-port-families
  `((modus
     :module "modus-themes" :licence gpl
     :upstream "modus-themes.el 4.4.0, by Protesilaos Stavrou, as GNU Emacs 30 ships it"
     :copyright ("Copyright (C) 2019-2025 Free Software Foundation, Inc.")
     :doc "highly accessible themes, conforming with the highest standard for colour contrast (WCAG AAA)"
     :members (modus-operandi modus-vivendi modus-operandi-tinted modus-vivendi-tinted)
     :palette e8-port-modus-palette)
    (gruvbox
     :module "gruvbox" :licence mit :dirs ("gruvbox" "autothemer" "dash")
     :upstream "emacs-theme-gruvbox 1.30.3 (https://github.com/greduan/emacs-theme-gruvbox)"
     :copyright ("Copyright (c) 2013 Lee Machin" "Copyright (c) 2013-2016 Eduardo Lavaque"
                 "Copyright (c) 2016-2022 Jason Milkins")
     :members (gruvbox-dark-medium gruvbox-light-medium)
     :palette (e8-port-regexp-palette "gruvbox/%s-theme.el" "(gruvbox-\\([a-z0-9_-]+\\) +\"\\(#[0-9a-fA-F]+\\)\""))
    ;; Solarized's light and dark give the same palette names other colours,
    ;; so each is written alone, in the colours' own names.
    (solarized-dark
     :licence gpl :dirs ("solarized" "dash")
     :upstream "solarized-emacs 2.2.0 (https://github.com/bbatsov/solarized-emacs)"
     :copyright ("Copyright (C) 2011-2025 Bozhidar Batsov")
     :members (solarized-dark)
     :palette e8-port-solarized-palette)
    (solarized-light
     :licence gpl :dirs ("solarized" "dash")
     :upstream "solarized-emacs 2.2.0 (https://github.com/bbatsov/solarized-emacs)"
     :copyright ("Copyright (C) 2011-2025 Bozhidar Batsov")
     :members (solarized-light)
     :palette e8-port-solarized-palette)
    (tomorrow
     :module "color-theme-sanityinc-tomorrow" :licence gpl :dirs ("tomorrow")
     :upstream "color-theme-sanityinc-tomorrow 1.19 (https://github.com/purcell/color-theme-sanityinc-tomorrow)"
     :copyright ("Copyright (C) 2012-2026 Steve Purcell")
     :members (sanityinc-tomorrow-night sanityinc-tomorrow-day sanityinc-tomorrow-eighties)
     :palette e8-port-tomorrow-palette)
    (catppuccin
     :module "catppuccin" :licence mit :dirs ("catppuccin")
     :upstream "catppuccin-theme 1.0.0 (https://github.com/catppuccin/emacs)"
     :copyright ("Copyright 2022-present Catppuccin, All rights reserved")
     :flavors (mocha macchiato frappe latte)
     :palette e8-port-catppuccin-palette)
    (zenburn
     :licence gpl :dirs ("zenburn")
     :upstream "zenburn-theme 2.11.0 (https://github.com/bbatsov/zenburn-emacs)"
     :copyright ("Copyright (C) 2011-2026 Bozhidar Batsov" "Copyright (C) 2009 Jani Nurminen")
     :members (zenburn)
     :palette e8-port-zenburn-palette)
    (dracula
     :licence mit :dirs ("dracula")
     :upstream "dracula-theme 1.8.3 (https://github.com/dracula/emacs)"
     :copyright ("Copyright (c) 2015-present Dracula Theme")
     :members (dracula)
     :palette (e8-port-regexp-palette "dracula/dracula-theme.el" "(dracula-\\([a-z0-9-]+\\) +\"\\(#[0-9a-fA-F]+\\)\""))
    (doom-one
     :licence mit :dirs ("doom" "doom/themes")
     :upstream "doom-themes 2.3.0 (https://github.com/doomemacs/themes)"
     :copyright ("Copyright (c) 2016-2026 Henrik Lissner")
     :members (doom-one)
     :palette e8-port-doom-palette)
    (doom-one-light
     :licence mit :dirs ("doom" "doom/themes")
     :upstream "doom-themes 2.3.0 (https://github.com/doomemacs/themes)"
     :copyright ("Copyright (c) 2016-2026 Henrik Lissner")
     :members (doom-one-light)
     :palette e8-port-doom-palette)
    (doom-tokyo-night
     :licence mit :dirs ("doom" "doom/themes")
     :upstream "doom-themes 2.3.0 (https://github.com/doomemacs/themes)"
     :copyright ("Copyright (c) 2016-2026 Henrik Lissner")
     :members (doom-tokyo-night)
     :palette e8-port-doom-palette)
    (leuven
     :licence gpl
     :upstream "leuven-theme.el, by Fabrice Niessen, as GNU Emacs 30 ships it"
     :copyright ("Copyright (C) 2003-2025 Free Software Foundation, Inc.")
     :members (leuven))
    (wombat
     :licence gpl
     :upstream "wombat-theme.el, by Kristoffer Grönlund, as GNU Emacs 30 ships it"
     :copyright ("Copyright (C) 2011-2025 Free Software Foundation, Inc.")
     :members (wombat)))
  "The themes this repository ports, by family.
A family has :members, themes that share one module of faces when there
are several, or :flavors, palettes of one theme chosen by a variable.")

;;;; Palettes: lists of (NAME . COLOUR), NAME a string, in the upstream's order

(defun e8-port-modus-palette (theme)
  "The Modus THEME's palette, its semantic names resolved."
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
      (insert-file-contents (expand-file-name (format file theme) e8-port-upstream))
      (let (out)
        (while (re-search-forward regexp nil t)
          (push (cons (match-string 1) (match-string 2)) out))
        (nreverse out)))))

(defun e8-port-solarized-palette (theme)
  (let ((alist (symbol-value (intern (format "%s-color-palette-alist" theme)))))
    (cl-loop for (name . c) in alist collect (cons (symbol-name name) c))))

(defun e8-port-tomorrow-palette (theme)
  (let ((mode (intern (string-remove-prefix "sanityinc-tomorrow-" (symbol-name theme)))))
    (cl-loop for (name . c) in (cdr (assq mode color-theme-sanityinc-tomorrow-colors))
             collect (cons (symbol-name name) c))))

(defun e8-port-catppuccin-palette (flavor)
  (cl-loop for (name . c) in (alist-get flavor catppuccin-flavor-alist)
           collect (cons (symbol-name name) c)))

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
   (t (let ((v (tty-color-standard-values (downcase colour))))
        (when v (apply #'format "#%02x%02x%02x" (mapcar (lambda (x) (/ x 257)) v)))))))

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

(defun e8-port-attributes (plist)
  "PLIST, a face's attributes, as E8's: a list of (NAME . VALUE)."
  (let (out)
    (while plist
      (let* ((k (pop plist)) (v (pop plist))
             (value
              (pcase k
                ((or :foreground :background :distant-foreground) (e8-port-colour v))
                ((or :weight :slant :width) (if (and v (symbolp v) (not (eq v 'unspecified))) (symbol-name v) 'skip))
                ((or :underline :overline :strike-through) (e8-port-decoration v))
                (:box (e8-port-box v))
                ((or :inverse-video :extend) (cond ((eq v 'unspecified) 'skip) (v t) (t :false)))
                (:height (if (numberp v) v 'skip))
                (:family (if (stringp v) v 'skip))
                (:inherit (cond ((or (null v) (eq v 'unspecified)) 'skip)
                                ((consp v) (cons 'array (mapcar #'symbol-name v)))
                                (t (symbol-name v))))
                (_ 'skip))))
        (unless (eq value 'skip)
          (setf (alist-get (e8-port-key k) out nil nil #'equal) value))))
    (nreverse out)))

(defun e8-port-key (keyword)
  (pcase keyword
    (:distant-foreground "distantForeground")
    (:strike-through "strikeThrough")
    (:inverse-video "inverseVideo")
    (_ (substring (symbol-name keyword) 1))))

(defun e8-port-theme-faces (theme)
  "THEME's faces that E8 draws, in the theme's order, as (FACE . ATTRIBUTES).
The faces they inherit from come too, as the theme gives them: the Modus
themes' own `modus-themes-heading-1' and the like. `default' comes first."
  (let (all wanted faces)
    (dolist (setting (reverse (get theme 'theme-settings)))
      (when (and (eq (car setting) 'theme-face)
                 (not (assoc (symbol-name (nth 1 setting)) all)))
        (let ((attrs (cl-letf (((symbol-function 'face-spec-set-match-display) #'e8-port-match-display))
                       (face-spec-choose (nth 3 setting) nil))))
          (push (cons (symbol-name (nth 1 setting)) (e8-port-attributes attrs)) all))))
    (setq all (nreverse all))
    (let ((queue (cl-remove-if-not (lambda (f) (gethash (car f) e8-port-faces)) all)))
      (while queue
        (let ((f (pop queue)))
          (unless (member (car f) wanted)
            (push (car f) wanted)
            (let ((inherit (cdr (assoc "inherit" (cdr f)))))
              (dolist (parent (cond ((stringp inherit) (list inherit))
                                    ((eq (car-safe inherit) 'array) (cdr inherit))))
                (when-let* ((p (assoc parent all))) (push p queue))))))))
    (dolist (f all)
      (when (member (car f) wanted) (push f faces)))
    (setq faces (nreverse faces))
    (let ((default (assoc "default" faces)))
      (if default (cons default (delq default faces)) faces))))

(defun e8-port-luminance (hex)
  (let ((v (mapcar (lambda (i) (/ (string-to-number (substring hex i (+ i 2)) 16) 255.0)) '(1 3 5))))
    (+ (* 0.2126 (nth 0 v)) (* 0.7152 (nth 1 v)) (* 0.0722 (nth 2 v)))))

(defun e8-port-default-background (faces)
  (let ((bg (alist-get "background" (cdr (assoc "default" faces)) nil nil #'equal)))
    (and (consp bg) (eq (car bg) 'colour) (cadr bg))))

(defun e8-port-load (theme &optional flavor)
  "Loads THEME afresh and returns its faces and palette, as (FACES . PALETTE)."
  (put theme 'theme-settings nil)
  (setq custom-known-themes (delq theme custom-known-themes))
  (let ((e8-port-background 'dark) faces)
    (load-theme theme t t)
    (setq faces (e8-port-theme-faces theme))
    (let ((bg (e8-port-default-background faces)))
      (when (and bg (> (e8-port-luminance bg) 0.5))
        (setq e8-port-background 'light)
        (setq faces (e8-port-theme-faces theme))))
    (cons faces (and (boundp 'e8-port--palette-function) e8-port--palette-function
                     (funcall e8-port--palette-function (or flavor theme))))))

(defvar e8-port--palette-function nil)

;;;; Naming colours by the palette

(defun e8-port-camel (name)
  (let ((parts (split-string name "[-_ +]+" t)))
    (concat (car parts) (mapconcat #'capitalize (cdr parts) ""))))

(defun e8-port-identifier-p (s)
  (string-match-p "\\`[a-zA-Z_$][a-zA-Z0-9_$]*\\'" s))

(defun e8-port-ref (key)
  "How the code reaches the palette's KEY."
  (if (e8-port-identifier-p key) (concat "c." key) (format "c[%S]" key)))

(defun e8-port-name-colours (members)
  "MEMBERS, each (NAME FACES PALETTE), with their colours named.
Returns (SHARED-FACES EXTRA PALETTES): the faces all members give alike,
with each colour (ref KEY) or (literal HEX); each member's own faces;
and each member's palette, as (KEY . COLOUR), holding the keys used."
  (let* ((single (= (length members) 1))
         (palettes (mapcar (lambda (m) (list (car m))) members))
         (shared nil) (extra (mapcar (lambda (m) (list (car m))) members))
         (strip (lambda (attrs) (e8-port-map-colours attrs (lambda (_) '(colour)))))
         (faces-of (lambda (m) (nth 1 m))))
    (dolist (face (cl-remove-duplicates (apply #'append (mapcar (lambda (m) (mapcar #'car (funcall faces-of m))) members))
                                        :test #'equal :from-end t))
      (let ((specs (mapcar (lambda (m) (cdr (assoc face (funcall faces-of m)))) members))
            (present (cl-every (lambda (m) (assoc face (funcall faces-of m))) members)))
        (if (and present
                 (cl-every (lambda (s) (equal (funcall strip s) (funcall strip (car specs)))) specs))
            ;; Alike but for their colours: each colour named, the same name in every member.
            (let ((paths (e8-port-colour-paths (car specs))) (named (car specs)))
              (dolist (path paths)
                (let* ((hexes (mapcar (lambda (s) (e8-port-colour-at s path)) specs))
                       (key (e8-port-common-name members hexes)))
                  (cond
                   (key
                    (cl-loop for p in palettes for m in members
                             do (unless (assoc key (cdr p))
                                  (nconc p (list (cons key (cdr (assoc (e8-port-original-name key m) (nth 2 m)))))))))
                   ((and single (not key)) nil)
                   (t (setq key (e8-port-camel (format "%s-%s" face (mapconcat #'identity path "-"))))
                      (cl-loop for p in palettes for h in hexes do (nconc p (list (cons key h))))))
                  (setq named (e8-port-set-colour named path (if key (list 'ref key) (list 'literal (car hexes)))))))
              (push (cons face named) shared))
          ;; Unlike: each member gives its own, colours as literals.
          (cl-loop for m in members for e in extra for s in specs
                   when (assoc face (funcall faces-of m))
                   do (nconc e (list (cons face (e8-port-map-colours s (lambda (c) (list 'literal (cadr c)))))))))))
    (list (nreverse shared) extra palettes)))

(defun e8-port-original-name (key member)
  (car (cl-find key (nth 2 member) :key (lambda (e) (e8-port-camel (car e))) :test #'equal)))

(defun e8-port-common-name (members hexes)
  "The first palette name that is HEXES in each of MEMBERS, as a key."
  (let ((first (nth 2 (car members))))
    (cl-loop for (name . c) in first
             when (cl-every (lambda (pair)
                              (let ((entry (assoc name (nth 2 (car pair)))))
                                (and entry (equal (e8-port-hex (cdr entry)) (cdr pair)))))
                            (cl-mapcar #'cons members hexes))
             return (e8-port-camel name))))

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
                                (if (eq (car value) 'colour) value value)))
              a))
          attrs))

;;;; Writing TypeScript

(defun e8-port-ts-value (v)
  (cond ((eq v t) "true")
        ((eq v :false) "false")
        ((stringp v) (json-encode-string v))
        ((integerp v) (number-to-string v))
        ((floatp v) (let ((s (format "%s" v))) s))
        ((eq (car v) 'ref) (e8-port-ref (cadr v)))
        ((eq (car v) 'literal) (json-encode-string (cadr v)))
        ((eq (car v) 'colour) (json-encode-string (cadr v)))
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

(defun e8-port-header (family title)
  (let ((licence (plist-get family :licence)))
    (concat
     (format "// SPDX-License-Identifier: %s\n//\n" (if (eq licence (quote mit)) "MIT" "GPL-3.0-or-later"))
     (format "// %s\n" title)
     (format "//\n// A port to E8 of %s,\n" (plist-get family :upstream))
     "// written by tools/port-themes.el from the faces Emacs gives the theme, for\n"
     "// the faces E8 and its ports draw. It is not the upstream authors' work as\n"
     "// they published it, and they do not endorse it.\n//\n"
     (mapconcat (lambda (c) (concat "// " c "\n")) (plist-get family :copyright) "")
     "// Copyright (C) 2026 The E8 contributors\n//\n"
     (if (eq licence 'mit) e8-port-mit e8-port-gpl)
     "\n")))

(defun e8-port-write (file text)
  (with-temp-file file (insert text))
  (message "Wrote %s" file))

(defun e8-port-doc (theme)
  (let ((doc (get theme 'theme-documentation)))
    (if (stringp doc) (car (split-string doc "\n")) (format "The %s theme" theme))))

(defun e8-port-family (name family)
  (let ((members-names (or (plist-get family :members) (plist-get family :flavors)))
        (palette (plist-get family :palette))
        (flavors (plist-get family :flavors))
        members)
    (dolist (d (plist-get family :dirs))
      (let ((dir (expand-file-name d e8-port-upstream)))
        (add-to-list 'load-path dir)
        (add-to-list 'custom-theme-load-path dir)))
    (setq e8-port--palette-function
          (cond ((functionp palette) palette)
                ((and (consp palette) (eq (car palette) 'e8-port-regexp-palette))
                 (apply #'e8-port-regexp-palette (cdr palette)))))
    (dolist (m members-names)
      (let ((loaded (if flavors
                        (progn (setq catppuccin-flavor m)
                               (load "catppuccin-theme" nil t)
                               (e8-port-load 'catppuccin m))
                      (e8-port-load m))))
        (push (list m (car loaded)
                    (mapcar (lambda (e) (cons (car e) (cdr e))) (cdr loaded)))
              members)))
    (setq members (nreverse members))
    (pcase-let ((`(,shared ,extra ,palettes) (e8-port-name-colours members)))
      ;; Each palette in the upstream's order, the colours named after faces last.
      (setq palettes
            (cl-loop for p in palettes for m in members
                     collect (let ((order (mapcar (lambda (e) (e8-port-camel (car e))) (nth 2 m))))
                               (cons (car p)
                                     (cl-sort (copy-sequence (cdr p)) #'<
                                              :key (lambda (e) (or (cl-position (car e) order :test #'equal) 100000)))))))
      (cond
       (flavors (e8-port-write-flavors name family members shared extra palettes))
       ((= (length members) 1) (e8-port-write-single family (car members) shared palettes))
       (t (e8-port-write-family family members shared extra palettes))))))

(defun e8-port-palette-camel (palette)
  (mapcar (lambda (e) (cons (car e) (cdr e))) (cdr palette)))

(defun e8-port-write-single (family member shared palettes)
  (let* ((theme (car member)) (palette (cdr (car palettes))))
    (e8-port-write
     (format "%s-theme.ts" theme)
     (concat
      (e8-port-header family (format "The %s theme for E8." theme))
      "\nimport { customThemeSetFaces, deftheme, provideTheme } from \"custom\";\n\n"
      (format "deftheme(%S, %s);\n\n" (symbol-name theme) (json-encode-string (e8-port-doc theme)))
      (if palette
          (concat "/** The colours, by the names the upstream gives them. */\nconst c = {\n"
                  (e8-port-ts-palette palette "  ") "\n};\n\n")
        "")
      (format "customThemeSetFaces(%S, [\n" (symbol-name theme))
      (e8-port-ts-faces shared "  ")
      "\n]);\n\n"
      (format "provideTheme(%S);\n" (symbol-name theme))))))

(defun e8-port-extra-text (extra)
  (if (cdr extra) (concat ", [\n" (e8-port-ts-faces (cdr extra) "  ") "\n]") ""))

(defun e8-port-write-family (family members shared extra palettes)
  (let* ((module (plist-get family :module))
         (fn (concat "define" (mapconcat #'capitalize (split-string module "-") "") "Theme")))
    (e8-port-write
     (format "%s.ts" module)
     (concat
      (e8-port-header family (format "What the %s themes share: their faces, in terms of each one's palette." module))
      "\nimport { customThemeSetFaces, deftheme, provideTheme } from \"custom\";\n\n"
      "/** A theme's colours, by the names its upstream gives them. */\n"
      "export type Palette = Record<string, string>;\n\n"
      (format "/** Defines and provides the theme NAME in the colours of palette C, with EXTRA faces of its own. */\nexport function %s(name: string, doc: string, c: Palette, extra: [string, e8.FaceAttributes][] = []): void {\n" fn)
      "  deftheme(name, doc);\n  customThemeSetFaces(name, [\n"
      (e8-port-ts-faces shared "    ")
      "\n    ...extra,\n  ]);\n  provideTheme(name);\n}\n"))
    (cl-loop for m in members for e in extra for p in palettes
             do (e8-port-write
                 (format "%s-theme.ts" (car m))
                 (concat
                  (e8-port-header family (format "The %s theme for E8." (car m)))
                  (format "\nimport { %s } from %S;\n\n" fn module)
                  "/** The colours, by the names the upstream gives them. */\nconst c = {\n"
                  (e8-port-ts-palette (cdr p) "  ") "\n};\n\n"
                  (format "%s(%S, %s, c%s);\n" fn (symbol-name (car m))
                          (json-encode-string (e8-port-doc (car m)))
                          (e8-port-extra-text e)))))))

(defun e8-port-write-flavors (_name family members shared extra palettes)
  (e8-port-write
   "catppuccin-theme.ts"
   (concat
    (e8-port-header family "The Catppuccin theme for E8, in the flavour catppuccin-flavor names.")
    "\nimport { customThemeSetFaces, deftheme, enableTheme, provideTheme } from \"custom\";\n\n"
    "e8.defineVariable({\n  name: \"catppuccin-flavor\",\n"
    "  doc: 'The flavour of Catppuccin: \"mocha\", \"macchiato\", \"frappe\" or \"latte\". catppuccin-reload shows a change.',\n"
    "  value: \"mocha\",\n});\n\n"
    "/** Each flavour's colours, by the names Catppuccin gives them. */\nconst flavors: Record<string, Record<string, string>> = {\n"
    (mapconcat (lambda (p) (format "  %s: {\n%s\n  }," (car p) (e8-port-ts-palette (cdr p) "    "))) palettes "\n")
    "\n};\n\n"
    "/** Each flavour's faces of its own. */\nconst extras: Record<string, [string, e8.FaceAttributes][]> = {\n"
    (mapconcat (lambda (e) (format "  %s: [\n%s\n  ]," (car e) (e8-port-ts-faces (cdr e) "    "))) extra "\n")
    "\n};\n\n"
    "/** Defines Catppuccin's faces in the flavour catppuccin-flavor names. */\nfunction define(): void {\n"
    "  const flavor = String(e8.variable(\"catppuccin-flavor\"));\n"
    "  const c = flavors[flavor] ?? flavors.mocha;\n"
    (format "  deftheme(\"catppuccin\", %s);\n" (json-encode-string (e8-port-doc 'catppuccin)))
    "  customThemeSetFaces(\"catppuccin\", [\n"
    (e8-port-ts-faces shared "    ")
    "\n    ...(extras[flavor] ?? extras.mocha),\n  ]);\n  provideTheme(\"catppuccin\");\n}\n\n"
    "define();\n\n"
    "e8.defineCommand({\n  name: \"catppuccin-reload\",\n"
    "  doc: \"Define Catppuccin again in the flavour catppuccin-flavor names, and enable it.\",\n"
    "  run: () => {\n    define();\n    enableTheme(\"catppuccin\");\n  },\n});\n"
    "e8.defineCommand({\n  name: \"catppuccin-load-flavor\",\n"
    "  doc: \"Set catppuccin-flavor to FLAVOR and show Catppuccin in it.\",\n"
    "  params: [{ name: \"flavor\", prompt: \"Flavor: \", collection: () => Object.keys(flavors), requireMatch: true }],\n"
    "  run: (flavor) => {\n    e8.setVariable(\"catppuccin-flavor\", flavor);\n    define();\n    enableTheme(\"catppuccin\");\n  },\n});\n")))

;;;; Entry point

(defun e8-port-themes ()
  "Ports the families named on the command line, or all of them."
  (setq e8-port-upstream (expand-file-name (pop command-line-args-left)))
  (setq e8-port-faces (make-hash-table :test #'equal))
  (with-temp-buffer
    (insert-file-contents "tools/e8-faces.txt")
    (dolist (f (split-string (buffer-string) "\n" t)) (puthash f t e8-port-faces)))
  (let ((names (mapcar #'intern command-line-args-left)))
    (setq command-line-args-left nil)
    (dolist (family e8-port-families)
      (when (or (null names) (memq (car family) names))
        (e8-port-family (car family) (cdr family))))))

;;; port-themes.el ends here
