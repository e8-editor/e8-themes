// SPDX-License-Identifier: GPL-3.0-or-later
//
// The misterioso theme for E8.
//
// A port to E8 of etc/themes/misterioso-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Sebastian Hermida
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

deftheme("misterioso", "Predominantly blue/cyan faces on a dark cyan background.");

customThemeSetFaces("misterioso", [
  ["default", { background: "#2d3743", foreground: "#e1e1e0" }],
  ["cursor", { background: "#415160" }],
  ["fringe", { background: "#2e3748" }],
  ["highlight", { background: "#338f86", foreground: "#e1e1e0" }],
  ["region", { background: "#2d4948", foreground: "#e1e1e0" }],
  ["isearch", { background: "#fcffad", foreground: "#000000" }],
  ["lazy-highlight", { background: "#338f86" }],
  ["trailing-whitespace", { background: "#ff4242" }],
  ["mode-line", { background: "#212931", foreground: "#eeeeec" }],
  ["mode-line-inactive", { background: "#878787", foreground: "#eeeeec" }],
  ["header-line", { background: "#808080", foreground: "#333333" }],
  ["minibuffer-prompt", { foreground: "#729fcf", weight: "bold" }],
  ["font-lock-builtin-face", { foreground: "#23d7d7" }],
  ["font-lock-comment-face", { foreground: "#74af68" }],
  ["font-lock-constant-face", { foreground: "#008b8b" }],
  ["font-lock-function-name-face", { foreground: "#00ede1", weight: "bold" }],
  ["font-lock-keyword-face", { foreground: "#ffad29", weight: "bold" }],
  ["font-lock-string-face", { foreground: "#e67128" }],
  ["font-lock-type-face", { foreground: "#34cae2" }],
  ["font-lock-variable-name-face", { foreground: "#dbdb95" }],
  ["font-lock-warning-face", { foreground: "#ff4242", weight: "bold" }],
  ["button", { underline: true }],
  ["link", { foreground: "#59e9ff", underline: true }],
  ["link-visited", { foreground: "#ed74cd", underline: true }],
  ["ediff-even-diff-A", { background: "#1d2430" }],
  ["ediff-even-diff-B", { background: "#1d2430" }],
  ["ediff-even-diff-C", { background: "#1d2430" }],
  ["ediff-odd-diff-A", { background: "#415160" }],
  ["ediff-odd-diff-B", { background: "#415160" }],
  ["ediff-odd-diff-C", { background: "#415160" }],
  ["ansi-color-black", { background: "#2d3743", foreground: "#2d3743" }],
  ["ansi-color-red", { background: "#da3938", foreground: "#da3938" }],
  ["ansi-color-green", { background: "#74af68", foreground: "#74af68" }],
  ["ansi-color-yellow", { background: "#dbdb95", foreground: "#dbdb95" }],
  ["ansi-color-blue", { background: "#34cae2", foreground: "#34cae2" }],
  ["ansi-color-magenta", { background: "#b33c97", foreground: "#b33c97" }],
  ["ansi-color-cyan", { background: "#008b8b", foreground: "#008b8b" }],
  ["ansi-color-white", { background: "#e1e1e0", foreground: "#e1e1e0" }],
  ["ansi-color-bright-black", { background: "#415160", foreground: "#415160" }],
  ["ansi-color-bright-red", { background: "#ff4242", foreground: "#ff4242" }],
  ["ansi-color-bright-green", { background: "#74cd65", foreground: "#74cd65" }],
  ["ansi-color-bright-yellow", { background: "#ffad29", foreground: "#ffad29" }],
  ["ansi-color-bright-blue", { background: "#59e9ff", foreground: "#59e9ff" }],
  ["ansi-color-bright-magenta", { background: "#ed74cd", foreground: "#ed74cd" }],
  ["ansi-color-bright-cyan", { background: "#00ede1", foreground: "#00ede1" }],
  ["ansi-color-bright-white", { background: "#eeeeec", foreground: "#eeeeec" }],
]);

provideTheme("misterioso");
