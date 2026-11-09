// SPDX-License-Identifier: GPL-3.0-or-later
//
// The sanityinc-tomorrow-eighties theme for E8.
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
  background: "#2d2d2d",
  altBackground: "#333333333333",
  currentLine: "#393939",
  selection: "#515151",
  foreground: "#cccccc",
  comment: "#999999",
  red: "#f2777a",
  orange: "#f99157",
  yellow: "#ffcc66",
  green: "#99cc99",
  aqua: "#66cccc",
  blue: "#6699cc",
  purple: "#cc99cc",
  ansiColorBlackForeground: "#515151",
  ansiColorBlackBackground: "#515151",
  ansiColorWhiteForeground: "#999999",
  ansiColorWhiteBackground: "#999999",
};

defineColorThemeSanityincTomorrowTheme("sanityinc-tomorrow-eighties", "A version of Chris Kempson's 'Tomorrow' theme (eighties version)", c);
