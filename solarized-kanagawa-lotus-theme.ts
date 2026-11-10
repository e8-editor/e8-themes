// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-kanagawa-lotus theme for E8.
//
// A port to E8 of solarized-kanagawa-lotus-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#f2ecbc",
  base02: "#e7dba0",
  base01: "#8a8980",
  base00: "#8a8980",
  base0: "#545464",
  base1: "#43436c",
  base2: "#dcd7ba",
  base3: "#dcd7ba",
  yellow: "#77713f",
  orange: "#cc6d00",
  red: "#c84053",
  magenta: "#b35b79",
  violet: "#5d57a3",
  blue: "#4d699b",
  cyan: "#597b75",
  green: "#6f894e",
  yellow1bg: "#e2dbab",
  yellow1fg: "#6d6551",
  yellow2bg: "#cac492",
  yellow2fg: "#6e655f",
  yellowD: "#7f7631",
  yellowL: "#aa9e50",
  red1bg: "#f2d6ae",
  red1fg: "#a7475d",
  red2bg: "#f3b59b",
  red2fg: "#9c4f68",
  redL: "#f7685e",
  magenta2bg: "#e7beac",
  magenta2fg: "#8d5a7d",
  magentaL: "#e27387",
  blue1bg: "#dddaba",
  blue1fg: "#4d608f",
  blue2bg: "#bec0bb",
  blue2fg: "#536190",
  blueL: "#7585be",
  cyanL: "#77ac96",
  green1bg: "#e0dfad",
  green1fg: "#67765b",
  green2bg: "#c9d19b",
  green2fg: "#687166",
  greenL: "#98b95b",
  whitespaceTrailingForeground: "#f5923a",
  orgHabitOverdueFutureFaceBackground: "#f7685e",
  orgHabitOverdueFaceForeground: "#f7685e",
  orgHabitAlertFutureFaceBackground: "#aa9e50",
  orgHabitAlertFaceForeground: "#aa9e50",
  orgHabitReadyFutureFaceBackground: "#98b95b",
  orgHabitReadyFaceBackground: "#98b95b",
  orgHabitClearFutureFaceBackground: "#7585be",
  orgHabitClearFaceForeground: "#485f9a",
  orgHabitClearFaceBackground: "#7585be",
  magitDiffHunkHeadingSelectionBackground: "#dcd096",
  hiRedBBackground: "#eecca6",
  hiRedBForeground: "#a4445b",
  hiGreenBBackground: "#d7d8a5",
  hiGreenBForeground: "#657359",
  hiBlueBBackground: "#d3d5ae",
  hiBlueBForeground: "#536a73",
  hiBlueBackground: "#dbd7b8",
  hiBlueForeground: "#485683",
  hiGreenBackground: "#deddab",
  hiGreenForeground: "#5d655f",
  hiPinkBackground: "#ead6b2",
  hiPinkForeground: "#7d4f73",
  hiYellowBackground: "#dfd9a8",
  hiYellowForeground: "#615957",
  verticalBorderForeground: "#c6bd95",
  separatorLineBackground: "#c6bd95",
  modeLineInactiveUnderline: "#c6bd95",
  modeLineUnderline: "#c6bd95",
  helpKeyBindingBoxColor: "#c6bd95",
  childFrameBorderBackground: "#c6bd95",
};

defineSolarizedTheme("solarized-kanagawa-lotus", "The Solarized theme with the Kanagawa lotus palette.", c);
