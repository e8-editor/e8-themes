// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-selenized-light theme for E8.
//
// A port to E8 of solarized-selenized-light-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Thomas Frössman
// Copyright (C) 2019 Thomas Frössman
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
  base03: "#fbf3db",
  base02: "#ece3cc",
  base01: "#909995",
  base00: "#fbf3db",
  base0: "#53676d",
  base1: "#3a4d53",
  base2: "#adbcbc",
  base3: "#cad8d9",
  yellow: "#ad8900",
  orange: "#c25d1e",
  red: "#d2212d",
  magenta: "#ca4898",
  violet: "#8762c6",
  blue: "#0072d4",
  cyan: "#009c8f",
  green: "#489100",
  yellowMinus1bg: "#f4e5c0",
  yellowMinus1fg: "#90792f",
  yellowMinus2bg: "#edd397",
  yellowMinus2fg: "#887640",
  yellowD: "#a88625",
  yellowL: "#d9af49",
  redMinus1bg: "#fedac1",
  redMinus1fg: "#ac403b",
  redMinus2bg: "#ffb39b",
  redMinus2fg: "#a04e48",
  redL: "#ff6147",
  magentaMinus2bg: "#f7bdcb",
  magentaMinus2fg: "#955b82",
  magentaL: "#f66fb5",
  blueMinus1bg: "#e4e1de",
  blueMinus1fg: "#3369ae",
  blueMinus2bg: "#c0c7e5",
  blueMinus2fg: "#426ba2",
  blueL: "#7395f2",
  cyanL: "#66c6b2",
  greenMinus1bg: "#e4e7bf",
  greenMinus1fg: "#4b7f2e",
  greenMinus2bg: "#c1d795",
  greenMinus2fg: "#527c3f",
  greenL: "#7cbc48",
  whitespaceTrailingForeground: "#f28243",
  orgHabitOverdueFutureFaceBackground: "#ff6147",
  orgHabitOverdueFaceForeground: "#ff6147",
  orgHabitAlertFutureFaceBackground: "#d9af49",
  orgHabitAlertFaceForeground: "#d9af49",
  orgHabitReadyFutureFaceBackground: "#7cbc48",
  orgHabitReadyFaceBackground: "#7cbc48",
  orgHabitClearFutureFaceBackground: "#7395f2",
  orgHabitClearFaceForeground: "#346ecb",
  orgHabitClearFaceBackground: "#7395f2",
  magitDiffHunkHeadingSelectionBackground: "#e8daba",
  hiRedBBackground: "#faceb5",
  hiRedBForeground: "#a93d39",
  hiGreenBBackground: "#d9e0b3",
  hiGreenBForeground: "#497c2b",
  hiBlueBBackground: "#d5e2cc",
  hiBlueBForeground: "#29847c",
  hiBlueBackground: "#e2dfdb",
  hiBlueForeground: "#385f91",
  hiGreenBackground: "#e2e5bd",
  hiGreenForeground: "#476e39",
  hiPinkBackground: "#f6dbd1",
  hiPinkForeground: "#845175",
  hiYellowBackground: "#f2e3bd",
  hiYellowForeground: "#786a3a",
  verticalBorderForeground: "#cbc8b8",
  separatorLineBackground: "#cbc8b8",
  modeLineInactiveUnderline: "#cbc8b8",
  modeLineUnderline: "#cbc8b8",
  helpKeyBindingBoxColor: "#cbc8b8",
  childFrameBorderBackground: "#cbc8b8",
};

defineSolarizedTheme("solarized-selenized-light", "The light variant of the Solarized colour theme with selenized color palette", c);
