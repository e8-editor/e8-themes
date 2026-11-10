// SPDX-License-Identifier: GPL-3.0-or-later
//
// The sanityinc-tomorrow-bright theme for E8.
//
// A port to E8 of sanityinc-tomorrow-bright-theme.el from color-theme-sanityinc-tomorrow 1.19 (https://github.com/purcell/color-theme-sanityinc-tomorrow), at commit 3b7af324a739, 1.19. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Steve Purcell
// Copyright (C) 2012-2026 Steve Purcell
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

import { defineColorThemeSanityincTomorrowTheme } from "color-theme-sanityinc-tomorrow";

/** The colours, by the names the upstream gives them. */
const c = {
  background: "#000000",
  altBackground: "#151515",
  currentLine: "#2a2a2a",
  selection: "#424242",
  foreground: "#eaeaea",
  comment: "#969896",
  red: "#d54e53",
  orange: "#e78c45",
  yellow: "#e7c547",
  green: "#b9ca4a",
  aqua: "#70c0b1",
  blue: "#7aa6da",
  purple: "#c397d8",
  ansiColorWhiteBackground: "#969896",
  ansiColorWhiteForeground: "#969896",
  ansiColorBlackBackground: "#424242",
  ansiColorBlackForeground: "#424242",
};

defineColorThemeSanityincTomorrowTheme("sanityinc-tomorrow-bright", "A version of Chris Kempson's 'Tomorrow' theme (bright version)", c);
