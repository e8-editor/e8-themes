;;; compare-repeats.el --- How far each repeat is from the theme it repeats -*- lexical-binding: t -*-

;; Copyright (C) 2026 The E8 contributors
;; SPDX-License-Identifier: GPL-3.0-or-later

;;; Commentary:

;; For each theme `e8-port-repeats' leaves out that has an original here,
;; how many of twenty key colours (the background and text, code, comments,
;; region, mode line, headings, diff, search and links) it gives alike, by
;; CIEDE2000 under 3, and those it gives far otherwise, at 10 or more. Run
;; it when an upstream changes, to see whether a repeat has become a theme
;; of its own:
;;
;;   emacs -Q --batch -l tools/compare-repeats.el

;;; Code:

(load (expand-file-name "tools/port-themes.el"))
(dolist (d '("doom" "doom/themes" "gruvbox" "autothemer" "dash" "solarized" "tomorrow" "zenburn" "dracula" "nord"))
  (add-to-list 'load-path (expand-file-name d e8-port-upstream-dir))
  (add-to-list 'custom-theme-load-path (expand-file-name d e8-port-upstream-dir)))
(defconst keys '(("default" "background") ("default" "foreground") ("font-lock-keyword-face" "foreground")
  ("font-lock-string-face" "foreground") ("font-lock-function-name-face" "foreground") ("font-lock-type-face" "foreground")
  ("font-lock-constant-face" "foreground") ("font-lock-comment-face" "foreground") ("font-lock-variable-name-face" "foreground")
  ("font-lock-builtin-face" "foreground") ("region" "background") ("mode-line" "background") ("org-level-1" "foreground")
  ("org-level-2" "foreground") ("diff-added" "foreground") ("diff-removed" "foreground") ("isearch" "background")
  ("show-paren-match" "background") ("link" "foreground") ("error" "foreground")))
(defun lab (hex) (apply #'color-srgb-to-lab (color-name-to-rgb hex)))
(defun faces-of (theme) (e8-port-load theme (lambda () (load-theme theme t t))))
(dolist (pair '((gruvbox-dark-medium . doom-gruvbox) (gruvbox-light-medium . doom-gruvbox-light) (nord . doom-nord)
                (dracula . doom-dracula) (solarized-dark . doom-solarized-dark) (solarized-light . doom-solarized-light)
                (solarized-dark-high-contrast . doom-solarized-dark-high-contrast) (zenburn . doom-zenburn)
                (sanityinc-tomorrow-night . doom-tomorrow-night) (sanityinc-tomorrow-day . doom-tomorrow-day)))
  (let* ((a (faces-of (car pair))) (b (faces-of (cdr pair))) (same 0) (n 0) diffs)
    (dolist (k keys)
      (let ((ca (or (e8-port-resolve a (car k) (cadr k)) (and (equal (cadr k) "foreground") (e8-port-resolve a "default" "foreground"))))
            (cb (or (e8-port-resolve b (car k) (cadr k)) (and (equal (cadr k) "foreground") (e8-port-resolve b "default" "foreground")))))
        (when (and ca cb)
          (let ((d (color-cie-de2000 (lab ca) (lab cb))))
            (cl-incf n) (when (< d 3) (cl-incf same))
            (when (>= d 10) (push (format "%s %s→%s" (car k) ca cb) diffs))))))
    (message "%-30s %-34s %2d/%2d alike; differ: %s" (car pair) (cdr pair) same n (string-join (reverse diffs) ", "))))

;;; compare-repeats.el ends here
