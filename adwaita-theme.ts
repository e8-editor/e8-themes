// SPDX-License-Identifier: GPL-3.0-or-later
//
// The adwaita theme for E8.
//
// A port to E8 of etc/themes/adwaita-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: William Stevenson
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

deftheme("adwaita", "Face colors similar to the default theme of Gnome 3 (Adwaita).");

customThemeSetFaces("adwaita", [
  ["default", { background: "#ededed", foreground: "#2e3436" }],
  ["cursor", { background: "#00bbff" }],
  ["fringe", { background: "#e6e6e6" }],
  ["mode-line", { box: { lineWidth: -1, style: "released-button" }, background: "#ffffff", foreground: "#2e3436" }],
  ["mode-line-inactive", { foreground: "#c6c6c6", background: "#ffffff" }],
  ["header-line", { foreground: "#cccccc", background: "#000000" }],
  ["minibuffer-prompt", { foreground: "#0084c8", weight: "bold" }],
  ["region", { background: "#c2d5e9" }],
  ["dired-header", { weight: "bold", foreground: "#0084c8" }],
  ["success", { weight: "bold", foreground: "#4e9a06" }],
  ["warning", { foreground: "#ce5c00" }],
  ["error", { foreground: "#b50000" }],
  ["font-lock-builtin-face", { foreground: "#a020f0" }],
  ["font-lock-constant-face", { foreground: "#f5666d" }],
  ["font-lock-comment-face", { foreground: "#204a87" }],
  ["font-lock-function-name-face", { foreground: "#00578e", weight: "bold" }],
  ["font-lock-keyword-face", { weight: "bold", foreground: "#a52a2a" }],
  ["font-lock-string-face", { foreground: "#4e9a06" }],
  ["font-lock-type-face", { foreground: "#2f8b58", weight: "bold" }],
  ["font-lock-variable-name-face", { foreground: "#0084c8", weight: "bold" }],
  ["font-lock-warning-face", { foreground: "#f5666d", weight: "bold" }],
  ["link", { underline: true, foreground: "#0066cc" }],
  ["link-visited", { underline: true, foreground: "#6799cc" }],
  ["highlight", { foreground: "#ffffff", background: "#4a90d9" }],
  ["isearch", { foreground: "#ffffff", background: "#77a4dd" }],
  ["diff-added", { weight: "bold", foreground: "#4e9a06" }],
  ["diff-removed", { weight: "bold", foreground: "#f5666d" }],
]);

provideTheme("adwaita");
