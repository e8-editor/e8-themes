// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-everforest-dark theme for E8.
//
// A port to E8 of solarized-everforest-dark-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#2d353b",
  base02: "#343f44",
  base01: "#859289",
  base00: "#859289",
  base0: "#d3c6aa",
  base1: "#d3c6aa",
  base2: "#f4f0d9",
  base3: "#fdf6e3",
  yellow: "#dbbc7f",
  orange: "#e69875",
  red: "#e67e80",
  magenta: "#d699b6",
  violet: "#b6a3db",
  blue: "#7fbbb3",
  cyan: "#83c092",
  green: "#a7c080",
  yellow1bg: "#434543",
  yellow1fg: "#e3ca9a",
  yellow2bg: "#665e4c",
  yellow2fg: "#e0cba1",
  yellowD: "#a7894c",
  yellowL: "#fdd891",
  red1bg: "#463e43",
  red1fg: "#eda09a",
  red2bg: "#6b494c",
  red2fg: "#e8aaa0",
  redL: "#ff9992",
  magenta2bg: "#635260",
  magenta2fg: "#ddb8bf",
  magentaL: "#f7aeca",
  blue1bg: "#364549",
  blue1fg: "#a4cabe",
  blue2bg: "#435d5e",
  blue2fg: "#aecabd",
  blueL: "#9ae4d4",
  cyanL: "#9ce7a5",
  green1bg: "#3c4543",
  green1fg: "#becd9a",
  green2bg: "#525f4d",
  green2fg: "#c2cda1",
  greenL: "#c8e790",
  whitespaceTrailingForeground: "#af6645",
  orgHabitOverdueFutureFaceBackground: "#ae4a4e",
  orgHabitOverdueFaceForeground: "#ae4a4e",
  orgHabitAlertFutureFaceBackground: "#a7894c",
  orgHabitAlertFaceForeground: "#a7894c",
  orgHabitReadyFutureFaceBackground: "#77964b",
  orgHabitReadyFaceBackground: "#77964b",
  orgHabitClearFutureFaceBackground: "#43938a",
  orgHabitClearFaceForeground: "#9ae4d4",
  orgHabitClearFaceBackground: "#43938a",
  magitDiffHunkHeadingSelectionBackground: "#444a4a",
  hiRedBBackground: "#514348",
  hiRedBForeground: "#e3958c",
  hiGreenBBackground: "#444e48",
  hiGreenBForeground: "#b5c28d",
  hiBlueBBackground: "#3d4e4b",
  hiBlueBForeground: "#9dc399",
  hiBlueBackground: "#38474b",
  hiBlueForeground: "#acc1af",
  hiGreenBackground: "#3e4845",
  hiGreenForeground: "#bec395",
  hiPinkBackground: "#44434c",
  hiPinkForeground: "#d6b0b0",
  hiYellowBackground: "#464745",
  hiYellowForeground: "#d8c195",
  verticalBorderForeground: "#4f5b5b",
  separatorLineBackground: "#4f5b5b",
  modeLineInactiveUnderline: "#4f5b5b",
  modeLineUnderline: "#4f5b5b",
  helpKeyBindingBoxColor: "#4f5b5b",
  childFrameBorderBackground: "#4f5b5b",
};

defineSolarizedTheme("solarized-everforest-dark", "The Solarized theme with the Everforest dark palette (medium contrast).", c);
