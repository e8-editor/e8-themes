// SPDX-License-Identifier: GPL-3.0-or-later
//
// The tsdh-light theme for E8.
//
// A port to E8 of etc/themes/tsdh-light-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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

deftheme("tsdh-light", "A light Emacs theme.");

customThemeSetFaces("tsdh-light", [
  ["default", { background: "#fafafa", foreground: "#383a42" }],
  ["diff-added", { inherit: "diff-changed", background: "#90ee90" }],
  ["diff-changed", { background: "#b0c4de" }],
  ["diff-indicator-added", { inherit: "diff-indicator-changed" }],
  ["diff-indicator-changed", { weight: "bold" }],
  ["diff-indicator-removed", { inherit: "diff-indicator-changed" }],
  ["diff-removed", { inherit: "diff-changed", background: "#f4a460" }],
  ["dired-directory", { inherit: "font-lock-function-name-face", weight: "bold" }],
  ["font-lock-builtin-face", { foreground: "#e44649" }],
  ["font-lock-comment-delimiter-face", { inherit: "font-lock-comment-face", weight: "bold" }],
  ["font-lock-comment-face", { foreground: "#a0a1a7" }],
  ["font-lock-doc-face", { inherit: "font-lock-string-face", slant: "italic" }],
  ["font-lock-function-name-face", { foreground: "#0184bc" }],
  ["font-lock-keyword-face", { foreground: "#a626a4" }],
  ["font-lock-negation-char-face", { weight: "bold" }],
  ["font-lock-regexp-grouping-backslash", { inherit: "bold", foreground: "#000000" }],
  ["font-lock-regexp-grouping-construct", { inherit: "bold", foreground: "#000000" }],
  ["font-lock-string-face", { foreground: "#50a14f" }],
  ["font-lock-type-face", { foreground: "#c18401" }],
  ["font-lock-variable-name-face", { foreground: "#8b4513" }],
  ["header-line", { inherit: "mode-line", inverseVideo: true }],
  ["hl-line", { background: "#f0f0f1" }],
  ["minibuffer-prompt", { foreground: "#0184bc", box: { lineWidth: -1, style: "released-button" }, weight: "bold" }],
  ["mode-line", { background: "#f0f0f1", box: { lineWidth: 1, color: "#383a42" } }],
  ["mode-line-inactive", { inherit: "mode-line", foreground: "#a0a1a7" }],
  ["org-agenda-date", { inherit: "org-agenda-structure" }],
  ["org-agenda-structure", { foreground: "#0000ff", weight: "bold", height: 1.1, family: "DeJaVu Sans" }],
  ["org-hide", { foreground: "#ffffff" }],
  ["org-level-1", { inherit: "outline-1", box: false }],
  ["org-level-2", { inherit: "outline-2", box: false }],
  ["org-level-3", { inherit: "outline-3", box: false }],
  ["org-level-4", { inherit: "outline-4", box: false }],
  ["org-level-5", { inherit: "outline-5", box: false }],
  ["org-level-6", { inherit: "outline-6", box: false }],
  ["org-level-7", { inherit: "outline-7", box: false }],
  ["org-level-8", { inherit: "outline-8", box: false }],
  ["org-tag", { weight: "bold" }],
  ["outline-1", { inherit: "font-lock-function-name-face", weight: "bold" }],
  ["outline-2", { inherit: "font-lock-variable-name-face", weight: "bold" }],
  ["outline-3", { inherit: "font-lock-keyword-face", weight: "bold" }],
  ["outline-4", { inherit: "font-lock-comment-face", weight: "bold" }],
  ["outline-5", { inherit: "font-lock-type-face", weight: "bold" }],
  ["outline-6", { inherit: "font-lock-constant-face", weight: "bold" }],
  ["outline-7", { inherit: "font-lock-builtin-face", weight: "bold" }],
  ["outline-8", { inherit: "font-lock-string-face", weight: "bold" }],
  ["region", { background: "#ffec8b" }],
  ["show-paren-match", { background: "#00ffff", weight: "bold" }],
  ["show-paren-mismatch", { background: "#ff1493", weight: "bold" }],
]);

provideTheme("tsdh-light");
