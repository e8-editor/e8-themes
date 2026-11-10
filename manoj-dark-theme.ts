// SPDX-License-Identifier: GPL-3.0-or-later
//
// The manoj-dark theme for E8.
//
// A port to E8 of etc/themes/manoj-dark-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Manoj Srivastava
// Copyright (C) 2011-2026 Free Software Foundation, Inc.
// Copyright (C) 2026 The E8 contributors
//
// This program is free software: you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the
// Free Software Foundation, either version 3 of the License, or (at your
// option) any later version.
//
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
// Public License for more details.

import { customThemeSetFaces, deftheme, provideTheme } from "custom";

deftheme("manoj-dark", "Very high contrast faces with a black background.");

customThemeSetFaces("manoj-dark", [
  ["default", { background: "#000000", foreground: "#f5f5f5" }],
  ["font-lock-builtin-face", { foreground: "#b0c4de" }],
  ["font-lock-constant-face", { foreground: "#8470ff", weight: "bold" }],
  ["font-lock-preprocessor-face", { foreground: "#6495ed", slant: "italic" }],
  ["font-lock-keyword-face", { foreground: "#00ffff" }],
  ["font-lock-type-face", { foreground: "#63b8ff" }],
  ["font-lock-regexp-grouping-backslash", { weight: "bold" }],
  ["font-lock-regexp-grouping-construct", { weight: "bold" }],
  ["font-lock-variable-name-face", { foreground: "#7fffd4" }],
  ["font-lock-function-name-face", { foreground: "#00fa9a", weight: "bold" }],
  ["font-lock-string-face", { foreground: "#ffc1c1" }],
  ["font-lock-comment-face", { slant: "oblique", foreground: "#ff7f24" }],
  ["font-lock-comment-delimiter-face", { foreground: "#fa8072" }],
  ["font-lock-doc-face", { slant: "oblique", foreground: "#f08080" }],
  ["font-lock-warning-face", { foreground: "#ffc0cb", weight: "bold" }],
  ["org-agenda-date", { foreground: "#87cefa" }],
  ["org-agenda-structure", { foreground: "#87cefa" }],
  ["org-code", { foreground: "#b3b3b3" }],
  ["org-column", { background: "#4d4d4d", slant: "normal", weight: "normal", height: 81 }],
  ["org-column-title", { background: "#4d4d4d", underline: true, weight: "bold" }],
  ["org-date", { foreground: "#00ffff", underline: true }],
  ["org-done", { foreground: "#98fb98", weight: "bold" }],
  ["org-drawer", { foreground: "#87cefa" }],
  ["org-ellipsis", { foreground: "#eedd82", underline: true }],
  ["org-formula", { foreground: "#ff7f24" }],
  ["org-headline-done", { foreground: "#ffa07a" }],
  ["org-hide", { foreground: "#000000" }],
  ["org-level-1", { foreground: "#87cefa" }],
  ["org-level-2", { foreground: "#eedd82" }],
  ["org-level-3", { foreground: "#00ffff" }],
  ["org-level-4", { foreground: "#ff7f24" }],
  ["org-level-5", { foreground: "#98fb98" }],
  ["org-level-6", { foreground: "#7fffd4" }],
  ["org-level-7", { foreground: "#b0c4de" }],
  ["org-level-8", { foreground: "#ffa07a" }],
  ["org-link", { foreground: "#00ffff", underline: true }],
  ["org-mode-line-clock", { foreground: "#006400", underline: true }],
  ["org-scheduled-previously", { foreground: "#ff7f24" }],
  ["org-scheduled-today", { foreground: "#98fb98" }],
  ["org-sexp-date", { foreground: "#00ffff" }],
  ["org-special-keyword", { foreground: "#ffa07a" }],
  ["org-table", { foreground: "#87cefa" }],
  ["org-tag", { weight: "bold" }],
  ["org-target", { underline: true }],
  ["org-todo", { foreground: "#ffc0cb", weight: "bold" }],
  ["org-upcoming-deadline", { foreground: "#ff7f24" }],
  ["org-verbatim", { foreground: "#b3b3b3", underline: true }],
  ["org-warning", { weight: "bold", foreground: "#ffc0cb" }],
  ["outline-1", { foreground: "#87cefa" }],
  ["outline-2", { foreground: "#eedd82" }],
  ["outline-3", { foreground: "#00ffff" }],
  ["outline-4", { foreground: "#ff7f24" }],
  ["outline-5", { foreground: "#98fb98" }],
  ["outline-6", { foreground: "#7fffd4" }],
  ["outline-7", { foreground: "#b0c4de" }],
  ["outline-8", { foreground: "#ffa07a" }],
  ["bold", { weight: "bold" }],
  ["bold-italic", { slant: "italic", weight: "bold" }],
  ["border", { background: "#ffd700", foreground: "#000000" }],
  ["buffer-menu-buffer", { weight: "bold" }],
  ["button", { underline: true, box: { lineWidth: 2, color: "#bebebe", style: "released-button" }, foreground: "#000000", background: "#bebebe", weight: "bold" }],
  ["comint-highlight-input", { weight: "bold" }],
  ["comint-highlight-prompt", { foreground: "#00ffff" }],
  ["compilation-column-number", { foreground: "#98fb98" }],
  ["compilation-error", { weight: "bold", foreground: "#ff4040" }],
  ["compilation-info", { foreground: "#ffaeb9", weight: "bold" }],
  ["compilation-line-number", { foreground: "#eedd82" }],
  ["compilation-warning", { foreground: "#ffa500", weight: "bold" }],
  ["completions-common-part", { width: "normal", weight: "normal", slant: "normal", foreground: "#f5f5f5", background: "#000000", height: 0.9 }],
  ["completions-first-difference", { weight: "bold" }],
  ["cursor", { background: "#da70d6" }],
  ["diff-added", { foreground: "#00ff00" }],
  ["diff-file-header", { background: "#333333", foreground: "#fffff0", weight: "bold" }],
  ["diff-hunk-header", { slant: "italic", background: "#104e8b" }],
  ["diff-nonexistent", { weight: "bold", background: "#000000", foreground: "#ffe7ba" }],
  ["diff-removed", { foreground: "#ff8c69" }],
  ["escape-glyph", { foreground: "#00ffff" }],
  ["file-name-shadow", { foreground: "#b3b3b3" }],
  ["fringe", { background: "#4d4d4d", foreground: "#f5deb3" }],
  ["header-line", { box: { lineWidth: -1, color: "#333333", style: "released-button" }, background: "#333333", foreground: "#e5e5e5", height: 0.9 }],
  ["help-argument-name", { slant: "italic" }],
  ["highlight", { background: "#1a1a1a", foreground: "#fdf5e6" }],
  ["hl-line", { background: "#1a1a1a", foreground: "#fdf5e6" }],
  ["isearch", { background: "#ee799f", foreground: "#8b2323" }],
  ["isearch-fail", { background: "#8b0000" }],
  ["italic", { slant: "italic" }],
  ["lazy-highlight", { background: "#668b8b" }],
  ["link", { foreground: "#00ffff", underline: true }],
  ["link-visited", { underline: true, foreground: "#ee82ee" }],
  ["match", { background: "#3a5fcd" }],
  ["minibuffer-prompt", { foreground: "#00ffff" }],
  ["mode-line", { background: "#bfbfbf", foreground: "#0000ff", box: { lineWidth: -1, style: "released-button" }, height: 0.9 }],
  ["mode-line-buffer-id", { background: "#a6a6a6", foreground: "#ff0000", weight: "bold", height: 0.9 }],
  ["mode-line-emphasis", { weight: "bold" }],
  ["mode-line-highlight", { box: { lineWidth: 2, color: "#666666", style: "released-button" }, height: 0.9 }],
  ["mode-line-inactive", { background: "#4d4d4d", foreground: "#cccccc", box: { lineWidth: -1, color: "#666666" }, weight: "light", height: 0.9 }],
  ["mouse", { background: "#ff4500" }],
  ["next-error", { background: "#0000cd" }],
  ["nobreak-space", { foreground: "#00ffff", underline: true }],
  ["query-replace", { foreground: "#8b2323", background: "#ee799f" }],
  ["region", { background: "#0000cd" }],
  ["secondary-selection", { background: "#4a708b" }],
  ["shadow", { foreground: "#b3b3b3" }],
  ["show-paren-match", { background: "#4f94cd" }],
  ["show-paren-mismatch", { background: "#a020f0", foreground: "#ffffff" }],
  ["tooltip", { background: "#ffffe0", foreground: "#000000" }],
  ["trailing-whitespace", { background: "#ff0000" }],
  ["underline", { underline: true }],
  ["vertical-border", { background: "#696969" }],
]);

provideTheme("manoj-dark");
