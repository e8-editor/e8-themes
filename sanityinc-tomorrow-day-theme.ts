// SPDX-License-Identifier: GPL-3.0-or-later
//
// The sanityinc-tomorrow-day theme for E8.
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
  background: "#ffffff",
  altBackground: "#f7f7f7f7f7f7",
  currentLine: "#efefef",
  selection: "#d6d6d6",
  foreground: "#4d4d4c",
  comment: "#8e908c",
  red: "#c82829",
  orange: "#f5871f",
  yellow: "#eab700",
  green: "#718c00",
  aqua: "#3e999f",
  blue: "#4271ae",
  purple: "#8959a8",
  ansiColorBlackForeground: "#8e908c",
  ansiColorBlackBackground: "#8e908c",
  ansiColorWhiteForeground: "#d6d6d6",
  ansiColorWhiteBackground: "#d6d6d6",
};

defineColorThemeSanityincTomorrowTheme("sanityinc-tomorrow-day", "A version of Chris Kempson's 'Tomorrow' theme (day version)", c);
