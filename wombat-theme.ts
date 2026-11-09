// SPDX-License-Identifier: GPL-3.0-or-later
//
// The wombat theme for E8.
//
// A port to E8 of wombat-theme.el, by Kristoffer Grönlund, as GNU Emacs 30 ships it,
// written by tools/port-themes.el from the faces Emacs gives the theme, for
// the faces E8 and its ports draw. It is not the upstream authors' work as
// they published it, and they do not endorse it.
//
// Copyright (C) 2011-2025 Free Software Foundation, Inc.
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

deftheme("wombat", "Medium-contrast faces with a dark gray background.");

customThemeSetFaces("wombat", [
  ["default", { background: "#242424", foreground: "#f6f3e8" }],
  ["cursor", { background: "#656565" }],
  ["fringe", { background: "#303030" }],
  ["highlight", { background: "#454545", foreground: "#ffffff", underline: true }],
  ["region", { background: "#444444" }],
  ["secondary-selection", { background: "#333366", foreground: "#f6f3e8" }],
  ["isearch", { background: "#343434", foreground: "#857b6f" }],
  ["lazy-highlight", { background: "#384048", foreground: "#a0a8b0" }],
  ["mode-line", { background: "#444444", foreground: "#f6f3e8" }],
  ["mode-line-inactive", { background: "#444444", foreground: "#857b6f" }],
  ["minibuffer-prompt", { foreground: "#e5786d" }],
  ["escape-glyph", { foreground: "#ddaa6f", weight: "bold" }],
  ["font-lock-builtin-face", { foreground: "#e5786d" }],
  ["font-lock-comment-face", { foreground: "#99968b" }],
  ["font-lock-constant-face", { foreground: "#e5786d" }],
  ["font-lock-function-name-face", { foreground: "#cae682" }],
  ["font-lock-keyword-face", { foreground: "#8ac6f2", weight: "bold" }],
  ["font-lock-string-face", { foreground: "#95e454" }],
  ["font-lock-type-face", { foreground: "#92a65e", weight: "bold" }],
  ["font-lock-variable-name-face", { foreground: "#cae682" }],
  ["font-lock-warning-face", { foreground: "#ccaa8f" }],
  ["help-key-binding", { background: "#333333", foreground: "#f6f3e8" }],
  ["link", { foreground: "#8ac6f2", underline: true }],
  ["link-visited", { foreground: "#e5786d", underline: true }],
  ["button", { background: "#333333", foreground: "#f6f3e8" }],
  ["header-line", { background: "#303030", foreground: "#e7f6da" }],
  ["ansi-color-black", { background: "#242424", foreground: "#242424" }],
  ["ansi-color-red", { background: "#b85149", foreground: "#b85149" }],
  ["ansi-color-green", { background: "#92a65e", foreground: "#92a65e" }],
  ["ansi-color-yellow", { background: "#ccaa8f", foreground: "#ccaa8f" }],
  ["ansi-color-blue", { background: "#5b98c2", foreground: "#5b98c2" }],
  ["ansi-color-magenta", { background: "#64619a", foreground: "#64619a" }],
  ["ansi-color-cyan", { background: "#3f9f9e", foreground: "#3f9f9e" }],
  ["ansi-color-white", { background: "#f6f3e8", foreground: "#f6f3e8" }],
  ["ansi-color-bright-black", { background: "#444444", foreground: "#444444" }],
  ["ansi-color-bright-red", { background: "#e5786d", foreground: "#e5786d" }],
  ["ansi-color-bright-green", { background: "#95e454", foreground: "#95e454" }],
  ["ansi-color-bright-yellow", { background: "#edc4a3", foreground: "#edc4a3" }],
  ["ansi-color-bright-blue", { background: "#8ac6f2", foreground: "#8ac6f2" }],
  ["ansi-color-bright-magenta", { background: "#a6a1de", foreground: "#a6a1de" }],
  ["ansi-color-bright-cyan", { background: "#70cecc", foreground: "#70cecc" }],
  ["ansi-color-bright-white", { background: "#ffffff", foreground: "#ffffff" }],
]);

provideTheme("wombat");
