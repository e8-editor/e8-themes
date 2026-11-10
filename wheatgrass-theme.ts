// SPDX-License-Identifier: GPL-3.0-or-later
//
// The wheatgrass theme for E8.
//
// A port to E8 of etc/themes/wheatgrass-theme.el from GNU Emacs 31.1 (https://github.com/emacs-mirror/emacs), at commit a360712c9d27, emacs-31.1. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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

deftheme("wheatgrass", "High-contrast green/blue/brown faces on a black background.");

customThemeSetFaces("wheatgrass", [
  ["default", { foreground: "#f5deb3", background: "#000000" }],
  ["cursor", { background: "#d8bfd8" }],
  ["error", { foreground: "#ff8c69" }],
  ["warning", { foreground: "#ffa500" }],
  ["success", { foreground: "#9acd32" }],
  ["compilation-mode-line-fail", { foreground: "#006400" }],
  ["compilation-mode-line-exit", { foreground: "#008b45" }],
  ["compilation-info", { foreground: "#228b22" }],
  ["highlight", { foreground: "#ffffff", background: "#006400" }],
  ["region", { foreground: "#ffffff", background: "#006400" }],
  ["secondary-selection", { background: "#2f4f4f" }],
  ["isearch", { foreground: "#ffffff", background: "#b8860b" }],
  ["lazy-highlight", { background: "#404040" }],
  ["font-lock-builtin-face", { foreground: "#b0c4de" }],
  ["font-lock-comment-face", { foreground: "#00cd66" }],
  ["font-lock-constant-face", { foreground: "#40e0d0" }],
  ["font-lock-function-name-face", { foreground: "#98fb98" }],
  ["font-lock-keyword-face", { foreground: "#ffffff" }],
  ["font-lock-string-face", { foreground: "#bdb76b" }],
  ["font-lock-type-face", { foreground: "#7fffd4" }],
  ["font-lock-variable-name-face", { foreground: "#9acd32" }],
  ["link", { underline: true, foreground: "#00ffff" }],
  ["link-visited", { underline: true, foreground: "#008b8b" }],
]);

provideTheme("wheatgrass");
