// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-everforest-light theme for E8.
//
// A port to E8 of solarized-everforest-light-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Thomas Frössman
// Copyright (C) 2026 Thomas Frössman
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

import { defineSolarizedTheme } from "solarized";

/** The colours, by the names the upstream gives them. */
const c = {
  base03: "#fdf6e3",
  base02: "#f4f0d9",
  base01: "#939f91",
  base00: "#939f91",
  base0: "#5c6a72",
  base1: "#5c6a72",
  base2: "#d3c6aa",
  base3: "#d3c6aa",
  yellow: "#dfa000",
  orange: "#f57d26",
  red: "#f85552",
  magenta: "#df69ba",
  violet: "#9d79d7",
  blue: "#3a94c5",
  cyan: "#35a77c",
  green: "#8da101",
  yellow1bg: "#fff7d3",
  yellow1fg: "#b78b36",
  yellow2bg: "#fff0b1",
  yellow2fg: "#a88648",
  yellowD: "#d2951b",
  yellowL: "#ffc652",
  red1bg: "#ffe2cf",
  red1fg: "#d0645e",
  red2bg: "#ffd2be",
  red2fg: "#ba6863",
  redL: "#ff7d68",
  magenta2bg: "#ffd9ec",
  magenta2fg: "#a76f9b",
  magentaL: "#ff8ad4",
  blue1bg: "#e7eae2",
  blue1fg: "#4f8aae",
  blue2bg: "#d1e6f0",
  blue2fg: "#5583a2",
  blueL: "#76baec",
  cyanL: "#6ed69f",
  green1bg: "#f1ecc8",
  green1fg: "#84923b",
  green2bg: "#ededab",
  green2fg: "#7d8948",
  greenL: "#bbcb50",
  whitespaceTrailingForeground: "#ff9f4f",
  orgHabitOverdueFutureFaceBackground: "#ff7d68",
  orgHabitOverdueFaceForeground: "#ff7d68",
  orgHabitAlertFutureFaceBackground: "#ffc652",
  orgHabitAlertFaceForeground: "#ffc652",
  orgHabitReadyFutureFaceBackground: "#bbcb50",
  orgHabitReadyFaceBackground: "#bbcb50",
  orgHabitClearFutureFaceBackground: "#76baec",
  orgHabitClearFaceForeground: "#458ab9",
  orgHabitClearFaceBackground: "#76baec",
  magitDiffHunkHeadingSelectionBackground: "#f5e8c7",
  hiRedBBackground: "#ffd8c4",
  hiRedBForeground: "#ce615c",
  hiGreenBBackground: "#e9e5bb",
  hiGreenBForeground: "#829038",
  hiBlueBBackground: "#d9e7ce",
  hiBlueBForeground: "#489579",
  hiBlueBackground: "#e4e7df",
  hiBlueForeground: "#537f9b",
  hiGreenBackground: "#eee9c5",
  hiGreenForeground: "#79854b",
  hiPinkBackground: "#fbe2dd",
  hiPinkForeground: "#9f6e95",
  hiYellowBackground: "#fde9c6",
  hiYellowForeground: "#a3844d",
  verticalBorderForeground: "#d1d3bf",
  separatorLineBackground: "#d1d3bf",
  modeLineInactiveUnderline: "#d1d3bf",
  modeLineUnderline: "#d1d3bf",
  helpKeyBindingBoxColor: "#d1d3bf",
  childFrameBorderBackground: "#d1d3bf",
};

defineSolarizedTheme("solarized-everforest-light", "The Solarized theme with the Everforest light palette (medium contrast).", c);
