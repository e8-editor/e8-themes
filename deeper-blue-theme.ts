// SPDX-License-Identifier: GPL-3.0-or-later
//
// The deeper-blue theme for E8.
//
// A port to E8 of etc/themes/deeper-blue-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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

deftheme("deeper-blue", "Face colors using a deep blue background.");

customThemeSetFaces("deeper-blue", [
  ["default", { background: "#181a26", foreground: "#cccccc" }],
  ["compilation-column-number", { foreground: "#90ee90" }],
  ["compilation-error", { foreground: "#ff0000" }],
  ["compilation-info", { weight: "normal", foreground: "#87cefa" }],
  ["compilation-line-number", { foreground: "#90ee90" }],
  ["compilation-mode-line-exit", { foreground: "#00008b" }],
  ["cursor", { background: "#00ff00" }],
  ["diff-context", { foreground: "#8b8682" }],
  ["diff-file-header", { background: "#999999" }],
  ["diff-function", { inherit: "diff-header" }],
  ["diff-header", { background: "#737373" }],
  ["diff-hunk-header", { inherit: "diff-header" }],
  ["diff-indicator-added", { foreground: "#ffffff", background: "#556b2f" }],
  ["diff-indicator-changed", { foreground: "#ffffff", background: "#104e8b" }],
  ["diff-indicator-removed", { foreground: "#ffffff", background: "#8b3a3a" }],
  ["dired-marked", { background: "#1874cd", foreground: "#ffffff" }],
  ["ediff-current-diff-A", { background: "#008b00", foreground: "#ffffff" }],
  ["ediff-current-diff-B", { background: "#cd6600", foreground: "#ffffff" }],
  ["ediff-even-diff-B", { background: "#7f7f7f", foreground: "#ffffff" }],
  ["ediff-fine-diff-A", { background: "#4a708b", foreground: "#ffffff" }],
  ["ediff-fine-diff-B", { background: "#008b8b", foreground: "#ffffff" }],
  ["ediff-odd-diff-A", { background: "#7f7f7f", foreground: "#ffffff" }],
  ["error", { foreground: "#ff0000" }],
  ["font-lock-builtin-face", { foreground: "#f08080" }],
  ["font-lock-comment-delimiter-face", { foreground: "#7f7f7f" }],
  ["font-lock-comment-face", { foreground: "#7f7f7f" }],
  ["font-lock-constant-face", { foreground: "#a2cd5a" }],
  ["font-lock-doc-face", { foreground: "#ffe4b5" }],
  ["font-lock-function-name-face", { foreground: "#daa520" }],
  ["font-lock-keyword-face", { foreground: "#00bfff" }],
  ["font-lock-preprocessor-face", { foreground: "#ffd700" }],
  ["font-lock-reference-face", { foreground: "#f08080" }],
  ["font-lock-regexp-grouping-backslash", { weight: "bold" }],
  ["font-lock-regexp-grouping-construct", { weight: "bold" }],
  ["font-lock-string-face", { foreground: "#deb887" }],
  ["font-lock-type-face", { foreground: "#98f5ff" }],
  ["font-lock-variable-name-face", { foreground: "#4eee94" }],
  ["fringe", { background: "#000000" }],
  ["highlight", { background: "#104e8b" }],
  ["isearch", { background: "#ee6a50", foreground: "#ffffff" }],
  ["lazy-highlight", { background: "#5f9ea0", foreground: "#ffffff" }],
  ["match", { background: "#8b0a50" }],
  ["minibuffer-prompt", { foreground: "#98f5ff" }],
  ["mode-line", { background: "#bfbfbf", foreground: "#000000", box: { lineWidth: 1, style: "released-button" } }],
  ["mode-line-buffer-id", { weight: "bold", foreground: "#00008b" }],
  ["mode-line-inactive", { background: "#666666", foreground: "#000000", box: { lineWidth: 1, color: "#666666" } }],
  ["outline-1", { foreground: "#87ceff" }],
  ["outline-2", { foreground: "#98f5ff" }],
  ["outline-3", { foreground: "#cae1ff" }],
  ["outline-4", { foreground: "#00e5ee" }],
  ["outline-5", { foreground: "#7fffd4" }],
  ["region", { background: "#103050" }],
  ["success", { foreground: "#4eee94" }],
  ["warning", { foreground: "#ffff00" }],
]);

provideTheme("deeper-blue");
