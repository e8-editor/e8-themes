// SPDX-License-Identifier: GPL-3.0-or-later
//
// The dichromacy theme for E8.
//
// A port to E8 of etc/themes/dichromacy-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Chong Yidong
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

deftheme("dichromacy", "Face colors suitable for red/green color-blind users.");

customThemeSetFaces("dichromacy", [
  ["default", { foreground: "#000000", background: "#ffffff" }],
  ["cursor", { background: "#000000" }],
  ["fringe", { background: "#f7f7f7" }],
  ["highlight", { foreground: "#0072b2", background: "#e5e5e5" }],
  ["region", { background: "#f8ec59" }],
  ["secondary-selection", { background: "#e5e5e5" }],
  ["isearch", { foreground: "#ffffff", background: "#d55e00" }],
  ["lazy-highlight", { foreground: "#ffffff", background: "#cc79a7" }],
  ["trailing-whitespace", { background: "#d55e00" }],
  ["mode-line", { box: { lineWidth: -1, style: "released-button" }, background: "#e5e5e5", foreground: "#000000" }],
  ["mode-line-inactive", { box: { lineWidth: -1, style: "released-button" }, background: "#b0b0b0", foreground: "#000000" }],
  ["minibuffer-prompt", { weight: "bold", foreground: "#0072b2" }],
  ["escape-glyph", { foreground: "#d55e00" }],
  ["error", { weight: "bold", slant: "italic", foreground: "#d55e00" }],
  ["warning", { foreground: "#e69f00" }],
  ["success", { foreground: "#009e73" }],
  ["font-lock-builtin-face", { foreground: "#0072b2" }],
  ["font-lock-comment-face", { slant: "italic", foreground: "#009e73" }],
  ["font-lock-constant-face", { weight: "bold", foreground: "#d55e00" }],
  ["font-lock-function-name-face", { foreground: "#d55e00" }],
  ["font-lock-keyword-face", { weight: "bold", foreground: "#56b4e9" }],
  ["font-lock-string-face", { foreground: "#848ea9" }],
  ["font-lock-type-face", { weight: "bold", foreground: "#0072b2" }],
  ["font-lock-variable-name-face", { weight: "bold", foreground: "#e69f00" }],
  ["link", { underline: true, foreground: "#0072b2" }],
  ["link-visited", { underline: true, foreground: "#cc79a7" }],
  ["flyspell-duplicate", { underline: "#e69f00" }],
  ["flyspell-incorrect", { underline: "#cc79a7" }],
  ["ansi-color-black", { background: "#000000", foreground: "#000000" }],
  ["ansi-color-red", { background: "#d55e00", foreground: "#d55e00" }],
  ["ansi-color-green", { background: "#009e73", foreground: "#009e73" }],
  ["ansi-color-yellow", { background: "#f8ec59", foreground: "#f8ec59" }],
  ["ansi-color-blue", { background: "#0072b2", foreground: "#0072b2" }],
  ["ansi-color-magenta", { background: "#cc79a7", foreground: "#cc79a7" }],
  ["ansi-color-cyan", { background: "#56b4e9", foreground: "#56b4e9" }],
  ["ansi-color-white", { background: "#e5e5e5", foreground: "#e5e5e5" }],
  ["ansi-color-bright-black", { background: "#000000", foreground: "#000000" }],
  ["ansi-color-bright-red", { background: "#d55e00", foreground: "#d55e00" }],
  ["ansi-color-bright-green", { background: "#009e73", foreground: "#009e73" }],
  ["ansi-color-bright-yellow", { background: "#f8ec59", foreground: "#f8ec59" }],
  ["ansi-color-bright-blue", { background: "#0072b2", foreground: "#0072b2" }],
  ["ansi-color-bright-magenta", { background: "#cc79a7", foreground: "#cc79a7" }],
  ["ansi-color-bright-cyan", { background: "#56b4e9", foreground: "#56b4e9" }],
  ["ansi-color-bright-white", { background: "#e5e5e5", foreground: "#e5e5e5" }],
]);

provideTheme("dichromacy");
