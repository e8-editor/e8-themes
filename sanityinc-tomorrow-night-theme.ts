// SPDX-License-Identifier: GPL-3.0-or-later
//
// The sanityinc-tomorrow-night theme for E8.
//
// A port to E8 of color-theme-sanityinc-tomorrow 1.19 (https://github.com/purcell/color-theme-sanityinc-tomorrow),
// written by tools/port-themes.el from the faces Emacs gives the theme, for
// the faces E8 and its ports draw. It is not the upstream authors' work as
// they published it, and they do not endorse it.
//
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
  background: "#1d1f21",
  altBackground: "#22a224a427a7",
  currentLine: "#282a2e",
  selection: "#373b41",
  foreground: "#c5c8c6",
  comment: "#969896",
  red: "#cc6666",
  orange: "#de935f",
  yellow: "#f0c674",
  green: "#b5bd68",
  aqua: "#8abeb7",
  blue: "#81a2be",
  purple: "#b294bb",
  ansiColorBlackForeground: "#373b41",
  ansiColorBlackBackground: "#373b41",
  ansiColorWhiteForeground: "#969896",
  ansiColorWhiteBackground: "#969896",
};

defineColorThemeSanityincTomorrowTheme("sanityinc-tomorrow-night", "A version of Chris Kempson's 'Tomorrow' theme (night version)", c);
