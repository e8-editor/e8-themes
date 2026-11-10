// SPDX-License-Identifier: GPL-3.0-or-later
//
// The tsdh-dark theme for E8.
//
// A port to E8 of etc/themes/tsdh-dark-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Free Software Foundation, Inc
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

deftheme("tsdh-dark", "A dark theme used and created by Tassilo Horn.");

customThemeSetFaces("tsdh-dark", [
  ["default", { background: "#333333", foreground: "#f5f5f5" }],
  ["diff-added", { inherit: "diff-changed", background: "#006400" }],
  ["diff-changed", { background: "#191970" }],
  ["diff-indicator-added", { inherit: "diff-indicator-changed" }],
  ["diff-indicator-changed", { weight: "bold" }],
  ["diff-indicator-removed", { inherit: "diff-indicator-changed" }],
  ["diff-removed", { inherit: "diff-changed", background: "#8b0000" }],
  ["dired-directory", { foreground: "#1e90ff", weight: "bold" }],
  ["error", { foreground: "#ff1493", weight: "bold" }],
  ["font-lock-builtin-face", { foreground: "#76ee00" }],
  ["font-lock-comment-face", { foreground: "#cd853f" }],
  ["font-lock-constant-face", { foreground: "#1e90ff" }],
  ["font-lock-doc-face", { foreground: "#cd5c5c" }],
  ["font-lock-function-name-face", { foreground: "#00ff7f" }],
  ["font-lock-keyword-face", { foreground: "#20b2aa", weight: "bold" }],
  ["font-lock-preprocessor-face", { foreground: "#6495ed" }],
  ["font-lock-string-face", { foreground: "#ffa07a" }],
  ["font-lock-type-face", { foreground: "#9370db" }],
  ["font-lock-variable-name-face", { foreground: "#9acd32" }],
  ["font-lock-warning-face", { foreground: "#ff69b4", weight: "bold" }],
  ["header-line", { inverseVideo: true, box: { lineWidth: -1, color: "#ff0000", style: "released-button" } }],
  ["highlight", { background: "#2e8b57" }],
  ["hl-line", { background: "#404040" }],
  ["icomplete-first-match", { foreground: "#00bfff", weight: "bold" }],
  ["minibuffer-prompt", { background: "#ffff00", foreground: "#0000cd", box: { lineWidth: -1, color: "#ff0000", style: "released-button" }, weight: "bold" }],
  ["mode-line", { background: "#4d4d4d", box: { lineWidth: 1, color: "#ff0000" }, family: "DejaVu Sans" }],
  ["mode-line-inactive", { inherit: "mode-line", foreground: "#a9a9a9" }],
  ["org-agenda-date", { inherit: "org-agenda-structure" }],
  ["org-agenda-done", { foreground: "#269926" }],
  ["org-agenda-structure", { foreground: "#4671d5", weight: "bold" }],
  ["org-date", { foreground: "#3cb371", underline: true }],
  ["org-done", { foreground: "#008500", weight: "bold" }],
  ["org-drawer", { foreground: "#2a4480" }],
  ["org-ellipsis", { foreground: "#ff7400", underline: true }],
  ["org-footnote", { foreground: "#1240ab", underline: true }],
  ["org-hide", { foreground: "#333333" }],
  ["org-level-1", { inherit: "outline-1", box: false }],
  ["org-level-2", { inherit: "outline-2", box: false }],
  ["org-level-3", { inherit: "outline-3", box: false }],
  ["org-level-4", { inherit: "outline-4", box: false }],
  ["org-level-5", { inherit: "outline-5", box: false }],
  ["org-level-6", { inherit: "outline-6", box: false }],
  ["org-level-7", { inherit: "outline-7", box: false }],
  ["org-level-8", { inherit: "outline-8", box: false }],
  ["org-scheduled-previously", { foreground: "#ff7400" }],
  ["org-tag", { weight: "bold" }],
  ["org-todo", { foreground: "#ff6961", weight: "bold" }],
  ["outline-1", { foreground: "#00ffff", weight: "bold" }],
  ["outline-2", { foreground: "#54ff9f", weight: "bold" }],
  ["outline-3", { foreground: "#00cdcd", weight: "bold" }],
  ["outline-4", { foreground: "#43cd80", weight: "bold" }],
  ["outline-5", { foreground: "#ffec8b", weight: "bold" }],
  ["outline-6", { foreground: "#ffa07a", weight: "bold" }],
  ["outline-7", { foreground: "#eee8aa", weight: "bold" }],
  ["outline-8", { foreground: "#c0ff3e", weight: "bold" }],
  ["region", { background: "#2e8b57" }],
  ["secondary-selection", { background: "#333366", foreground: "#f6f3e8" }],
  ["show-paren-match", { background: "#00688b" }],
  ["show-paren-mismatch", { background: "#8b008b" }],
]);

provideTheme("tsdh-dark");
