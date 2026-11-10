// SPDX-License-Identifier: GPL-3.0-or-later
//
// The whiteboard theme for E8.
//
// A port to E8 of etc/themes/whiteboard-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Scott Frazer
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

deftheme("whiteboard", "Face colors similar to markers on a whiteboard.");

customThemeSetFaces("whiteboard", [
  ["default", { background: "#f5f5f5", foreground: "#000000" }],
  ["compilation-column-number", { foreground: "#006400" }],
  ["compilation-error", { foreground: "#ff0000" }],
  ["compilation-info", { weight: "normal", foreground: "#00688b" }],
  ["compilation-line-number", { foreground: "#006400" }],
  ["cursor", { background: "#008b00" }],
  ["dired-marked", { background: "#1874cd", foreground: "#ffffff" }],
  ["font-lock-builtin-face", { foreground: "#cd6600" }],
  ["font-lock-comment-delimiter-face", { foreground: "#7f7f7f" }],
  ["font-lock-comment-face", { foreground: "#7f7f7f" }],
  ["font-lock-constant-face", { foreground: "#6e8b3d" }],
  ["font-lock-doc-face", { foreground: "#cd853f" }],
  ["font-lock-function-name-face", { foreground: "#cd9b1d" }],
  ["font-lock-keyword-face", { foreground: "#1c86ee" }],
  ["font-lock-preprocessor-face", { foreground: "#cdad00" }],
  ["font-lock-reference-face", { foreground: "#fa8072" }],
  ["font-lock-regexp-grouping-backslash", { weight: "bold" }],
  ["font-lock-regexp-grouping-construct", { weight: "bold" }],
  ["font-lock-string-face", { foreground: "#8b7355" }],
  ["font-lock-type-face", { foreground: "#00688b" }],
  ["font-lock-variable-name-face", { foreground: "#2e8b57" }],
  ["font-lock-warning-face", { foreground: "#ff0000" }],
  ["fringe", { background: "#dcdcdc" }],
  ["highlight", { background: "#87ceff" }],
  ["isearch", { background: "#ee6a50", foreground: "#ffffff" }],
  ["lazy-highlight", { background: "#5f9ea0", foreground: "#ffffff" }],
  ["match", { background: "#ffaeb9" }],
  ["minibuffer-prompt", { foreground: "#104e8b" }],
  ["mode-line", { background: "#bfbfbf", foreground: "#000000", box: { lineWidth: 1, style: "released-button" } }],
  ["mode-line-buffer-id", { weight: "bold", foreground: "#00008b" }],
  ["mode-line-inactive", { background: "#666666", foreground: "#000000", box: { lineWidth: 1, color: "#666666" } }],
  ["outline-1", { foreground: "#0000cd" }],
  ["outline-2", { foreground: "#1e90ff" }],
  ["outline-3", { foreground: "#4682b4" }],
  ["outline-4", { foreground: "#4169e1" }],
  ["outline-5", { foreground: "#00bfff" }],
  ["region", { background: "#87ceff" }],
  ["warning", { foreground: "#8b8b00" }],
]);

provideTheme("whiteboard");
