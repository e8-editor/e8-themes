// SPDX-License-Identifier: GPL-3.0-or-later
//
// The tango theme for E8.
//
// A port to E8 of etc/themes/tango-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Free Software Foundation, Inc
// Copyright (C) 2010-2026 Free Software Foundation, Inc.
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

deftheme("tango", "Face colors using the Tango palette (light background).");

customThemeSetFaces("tango", [
  ["default", { foreground: "#2e3436", background: "#eeeeec" }],
  ["cursor", { background: "#204a87" }],
  ["fringe", { background: "#d3d7cf" }],
  ["highlight", { background: "#babdb6" }],
  ["region", { background: "#babdb6" }],
  ["secondary-selection", { background: "#8cc4ff" }],
  ["isearch", { foreground: "#ffffff", background: "#ce5c00" }],
  ["lazy-highlight", { background: "#e9b96e" }],
  ["trailing-whitespace", { background: "#ef2929" }],
  ["mode-line", { box: { lineWidth: -1, style: "released-button" }, background: "#d3d7cf", foreground: "#2e3436" }],
  ["mode-line-inactive", { box: { lineWidth: -1, style: "released-button" }, background: "#888a85", foreground: "#2e3436" }],
  ["minibuffer-prompt", { weight: "bold", foreground: "#204a87" }],
  ["escape-glyph", { foreground: "#a40000" }],
  ["error", { foreground: "#a40000" }],
  ["warning", { foreground: "#ce5c00" }],
  ["success", { foreground: "#4e9a06" }],
  ["font-lock-builtin-face", { foreground: "#75507b" }],
  ["font-lock-comment-face", { slant: "italic", foreground: "#5f615c" }],
  ["font-lock-constant-face", { weight: "bold", foreground: "#204a87" }],
  ["font-lock-function-name-face", { foreground: "#a40000" }],
  ["font-lock-keyword-face", { foreground: "#346604" }],
  ["font-lock-string-face", { foreground: "#5c3566" }],
  ["font-lock-type-face", { foreground: "#204a87" }],
  ["font-lock-variable-name-face", { foreground: "#b35000" }],
  ["link", { underline: true, foreground: "#204a87" }],
  ["link-visited", { underline: true, foreground: "#3465a4" }],
  ["ediff-current-diff-A", { background: "#729fcf" }],
  ["ediff-fine-diff-A", { background: "#ad7fa8" }],
  ["ediff-current-diff-B", { background: "#fce94f" }],
  ["ediff-fine-diff-B", { background: "#fcaf3e" }],
  ["flyspell-duplicate", { underline: "#fcaf3e" }],
  ["flyspell-incorrect", { underline: "#ef2929" }],
  ["ansi-color-black", { background: "#2e3436", foreground: "#2e3436" }],
  ["ansi-color-red", { background: "#cc0000", foreground: "#cc0000" }],
  ["ansi-color-green", { background: "#4e9a06", foreground: "#4e9a06" }],
  ["ansi-color-yellow", { background: "#c4a000", foreground: "#c4a000" }],
  ["ansi-color-blue", { background: "#3465a4", foreground: "#3465a4" }],
  ["ansi-color-magenta", { background: "#75507b", foreground: "#75507b" }],
  ["ansi-color-cyan", { background: "#06989a", foreground: "#06989a" }],
  ["ansi-color-white", { background: "#d3d7cf", foreground: "#d3d7cf" }],
  ["ansi-color-bright-black", { background: "#5f615c", foreground: "#5f615c" }],
  ["ansi-color-bright-red", { background: "#ef2929", foreground: "#ef2929" }],
  ["ansi-color-bright-green", { background: "#8ae234", foreground: "#8ae234" }],
  ["ansi-color-bright-yellow", { background: "#fce94f", foreground: "#fce94f" }],
  ["ansi-color-bright-blue", { background: "#729fcf", foreground: "#729fcf" }],
  ["ansi-color-bright-magenta", { background: "#ad7fa8", foreground: "#ad7fa8" }],
  ["ansi-color-bright-cyan", { background: "#34e2e2", foreground: "#34e2e2" }],
  ["ansi-color-bright-white", { background: "#eeeeec", foreground: "#eeeeec" }],
]);

provideTheme("tango");
