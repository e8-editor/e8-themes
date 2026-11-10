// SPDX-License-Identifier: GPL-3.0-or-later
//
// The tango-dark theme for E8.
//
// A port to E8 of etc/themes/tango-dark-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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

deftheme("tango-dark", "Face colors using the Tango palette (dark background).");

customThemeSetFaces("tango-dark", [
  ["default", { foreground: "#eeeeec", background: "#2e3436" }],
  ["cursor", { background: "#fce94f" }],
  ["header-line", { background: "#666666" }],
  ["fringe", { background: "#212526" }],
  ["highlight", { foreground: "#2e3436", background: "#c0c000" }],
  ["region", { background: "#555753" }],
  ["secondary-selection", { background: "#204a87" }],
  ["isearch", { foreground: "#eeeeec", background: "#ce5c00" }],
  ["lazy-highlight", { background: "#8f5902" }],
  ["trailing-whitespace", { background: "#a40000" }],
  ["mode-line", { box: { lineWidth: -1, style: "released-button" }, background: "#d3d7cf", foreground: "#2e3436" }],
  ["mode-line-inactive", { box: { lineWidth: -1, style: "released-button" }, background: "#555753", foreground: "#eeeeec" }],
  ["compilation-mode-line-fail", { foreground: "#a40000" }],
  ["compilation-mode-line-exit", { foreground: "#4e9a06" }],
  ["minibuffer-prompt", { foreground: "#b4fa70" }],
  ["escape-glyph", { foreground: "#c4a000" }],
  ["error", { foreground: "#ff4b4b" }],
  ["warning", { foreground: "#fcaf3e" }],
  ["success", { foreground: "#8ae234" }],
  ["font-lock-builtin-face", { foreground: "#e090d7" }],
  ["font-lock-comment-face", { foreground: "#73d216" }],
  ["font-lock-constant-face", { foreground: "#e9b2e3" }],
  ["font-lock-function-name-face", { foreground: "#fce94f" }],
  ["font-lock-keyword-face", { foreground: "#b4fa70" }],
  ["font-lock-string-face", { foreground: "#e9b96e" }],
  ["font-lock-type-face", { foreground: "#8cc4ff" }],
  ["font-lock-variable-name-face", { foreground: "#fcaf3e" }],
  ["link", { underline: true, foreground: "#729fcf" }],
  ["link-visited", { underline: true, foreground: "#3465a4" }],
  ["ediff-current-diff-A", { background: "#555753" }],
  ["ediff-fine-diff-A", { background: "#204a87" }],
  ["ediff-even-diff-A", { background: "#41423f" }],
  ["ediff-odd-diff-A", { background: "#41423f" }],
  ["ediff-current-diff-B", { background: "#555753" }],
  ["ediff-fine-diff-B", { background: "#8f5902" }],
  ["ediff-even-diff-B", { background: "#41423f" }],
  ["ediff-odd-diff-B", { background: "#41423f" }],
  ["flyspell-duplicate", { underline: "#fcaf3e" }],
  ["flyspell-incorrect", { underline: "#ef2929" }],
  ["ansi-color-black", { background: "#212526", foreground: "#212526" }],
  ["ansi-color-red", { background: "#ef2929", foreground: "#ef2929" }],
  ["ansi-color-green", { background: "#73d216", foreground: "#73d216" }],
  ["ansi-color-yellow", { background: "#edd400", foreground: "#edd400" }],
  ["ansi-color-blue", { background: "#3465a4", foreground: "#3465a4" }],
  ["ansi-color-magenta", { background: "#e090d7", foreground: "#e090d7" }],
  ["ansi-color-cyan", { background: "#06989a", foreground: "#06989a" }],
  ["ansi-color-white", { background: "#d3d7cf", foreground: "#d3d7cf" }],
  ["ansi-color-bright-black", { background: "#555753", foreground: "#555753" }],
  ["ansi-color-bright-red", { background: "#ff4b4b", foreground: "#ff4b4b" }],
  ["ansi-color-bright-green", { background: "#8ae234", foreground: "#8ae234" }],
  ["ansi-color-bright-yellow", { background: "#fce94f", foreground: "#fce94f" }],
  ["ansi-color-bright-blue", { background: "#8cc4ff", foreground: "#8cc4ff" }],
  ["ansi-color-bright-magenta", { background: "#e9b2e3", foreground: "#e9b2e3" }],
  ["ansi-color-bright-cyan", { background: "#34e2e2", foreground: "#34e2e2" }],
  ["ansi-color-bright-white", { background: "#eeeeec", foreground: "#eeeeec" }],
]);

provideTheme("tango-dark");
