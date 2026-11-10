// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-carbon-dark theme for E8.
//
// A port to E8 of solarized-carbon-dark-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#161616",
  base02: "#262626",
  base01: "#6f6f6f",
  base00: "#6f6f6f",
  base0: "#c6c6c6",
  base1: "#f4f4f4",
  base2: "#f4f4f4",
  base3: "#ffffff",
  yellow: "#d2a106",
  orange: "#ff832b",
  red: "#fa4d56",
  magenta: "#ff7eb6",
  violet: "#be95ff",
  blue: "#78a9ff",
  cyan: "#08bdba",
  green: "#42be65",
  yellowMinus1bg: "#2d2618",
  yellowMinus1fg: "#e3b960",
  yellowMinus2bg: "#523f14",
  yellowMinus2fg: "#e2bf7a",
  yellowD: "#9d7200",
  yellowL: "#fec857",
  redMinus1bg: "#331e1d",
  redMinus1fg: "#ff8783",
  redMinus2bg: "#602626",
  redMinus2fg: "#fb9994",
  redL: "#ff7972",
  magentaMinus2bg: "#603547",
  magentaMinus2fg: "#f7afcb",
  magentaL: "#ff9ccf",
  blueMinus1bg: "#232731",
  blueMinus1fg: "#a4bffd",
  blueMinus2bg: "#34425f",
  blueMinus2fg: "#b0c3f4",
  blueL: "#9cc2ff",
  cyanL: "#71e7e3",
  greenMinus1bg: "#1d2a1f",
  greenMinus1fg: "#82d08f",
  greenMinus2bg: "#234a2b",
  greenMinus2fg: "#95d19e",
  greenL: "#78ec87",
  whitespaceTrailingForeground: "#ad4f00",
  orgHabitOverdueFutureFaceBackground: "#ad1426",
  orgHabitOverdueFaceForeground: "#ad1426",
  orgHabitAlertFutureFaceBackground: "#9d7200",
  orgHabitAlertFaceForeground: "#9d7200",
  orgHabitReadyFutureFaceBackground: "#009133",
  orgHabitReadyFaceBackground: "#009133",
  orgHabitClearFutureFaceBackground: "#3d6cae",
  orgHabitClearFaceForeground: "#9cc2ff",
  orgHabitClearFaceBackground: "#3d6cae",
  magitDiffHunkHeadingSelectionBackground: "#363027",
  hiRedBBackground: "#3f2321",
  hiRedBForeground: "#ff8682",
  hiGreenBBackground: "#223324",
  hiGreenBForeground: "#81d08f",
  hiBlueBBackground: "#203332",
  hiBlueBForeground: "#75cecb",
  hiBlueBackground: "#252833",
  hiBlueForeground: "#bdcefb",
  hiGreenBackground: "#1f2b21",
  hiGreenForeground: "#a4dbac",
  hiPinkBackground: "#34242a",
  hiPinkForeground: "#febcd5",
  hiYellowBackground: "#2f2819",
  hiYellowForeground: "#ebc98a",
  verticalBorderForeground: "#3e3e3e",
  separatorLineBackground: "#3e3e3e",
  modeLineInactiveUnderline: "#3e3e3e",
  modeLineUnderline: "#3e3e3e",
  helpKeyBindingBoxColor: "#3e3e3e",
  childFrameBorderBackground: "#3e3e3e",
};

defineSolarizedTheme("solarized-carbon-dark", "The Solarized theme with the IBM Carbon dark palette.", c);
