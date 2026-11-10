// SPDX-License-Identifier: GPL-3.0-or-later
//
// The sanityinc-tomorrow-blue theme for E8.
//
// A port to E8 of sanityinc-tomorrow-blue-theme.el from color-theme-sanityinc-tomorrow 1.19 (https://github.com/purcell/color-theme-sanityinc-tomorrow), at commit 3b7af324a739, 1.19. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  background: "#002451",
  altBackground: "#002c5f",
  currentLine: "#00346e",
  selection: "#003f8e",
  foreground: "#ffffff",
  comment: "#7285b7",
  red: "#ff9da4",
  orange: "#ffc58f",
  yellow: "#ffeead",
  green: "#d1f1a9",
  aqua: "#99ffff",
  blue: "#bbdaff",
  purple: "#ebbbff",
  ansiColorWhiteBackground: "#7285b7",
  ansiColorWhiteForeground: "#7285b7",
  ansiColorBlackBackground: "#003f8e",
  ansiColorBlackForeground: "#003f8e",
};

defineColorThemeSanityincTomorrowTheme("sanityinc-tomorrow-blue", "A version of Chris Kempson's 'Tomorrow' theme (blue version)", c);
