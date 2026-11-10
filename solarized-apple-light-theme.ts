// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-apple-light theme for E8.
//
// A port to E8 of solarized-apple-light-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#ffffff",
  base02: "#f2f2f7",
  base01: "#8e8e93",
  base00: "#8e8e93",
  base0: "#3c3c43",
  base1: "#000000",
  base2: "#ebebf5",
  base3: "#ebebf5",
  yellow: "#a16a00",
  orange: "#c55300",
  red: "#e9152d",
  magenta: "#b02fc2",
  violet: "#564ade",
  blue: "#1e6ef4",
  cyan: "#008575",
  green: "#008932",
  yellowMinus1bg: "#f8eadc",
  yellowMinus1fg: "#724c0f",
  yellowMinus2bg: "#eccca7",
  yellowMinus2fg: "#624417",
  yellowD: "#a56d25",
  yellowL: "#d2954a",
  redMinus1bg: "#ffe5df",
  redMinus1fg: "#a22124",
  redMinus2bg: "#ffbcb0",
  redMinus2fg: "#872725",
  redL: "#ff6651",
  magentaMinus2bg: "#efbcf3",
  magentaMinus2fg: "#682c70",
  magentaL: "#de67ef",
  blueMinus1bg: "#eaeaff",
  blueMinus1fg: "#2a4fa7",
  blueMinus2bg: "#c8cdff",
  blueMinus2fg: "#314589",
  blueL: "#778eff",
  cyanL: "#5db3a3",
  greenMinus1bg: "#e1f0e1",
  greenMinus1fg: "#176128",
  greenMinus2bg: "#b4dbb5",
  greenMinus2fg: "#205428",
  greenL: "#5fb864",
  whitespaceTrailingForeground: "#f67f48",
  orgHabitOverdueFutureFaceBackground: "#ff6651",
  orgHabitOverdueFaceForeground: "#ff6651",
  orgHabitAlertFutureFaceBackground: "#d2954a",
  orgHabitAlertFaceForeground: "#d2954a",
  orgHabitReadyFutureFaceBackground: "#5fb864",
  orgHabitReadyFaceBackground: "#5fb864",
  orgHabitClearFutureFaceBackground: "#778eff",
  orgHabitClearFaceForeground: "#4367e1",
  orgHabitClearFaceBackground: "#778eff",
  magitDiffHunkHeadingSelectionBackground: "#ede4df",
  hiRedBBackground: "#ffd8d2",
  hiRedBForeground: "#9f1d21",
  hiGreenBBackground: "#d4e8d4",
  hiGreenBForeground: "#145e25",
  hiBlueBBackground: "#d4e7e2",
  hiBlueBForeground: "#145c51",
  hiBlueBackground: "#e7e8ff",
  hiBlueForeground: "#233772",
  hiGreenBackground: "#dfeedf",
  hiGreenForeground: "#15441d",
  hiPinkBackground: "#f6e2f7",
  hiPinkForeground: "#55205c",
  hiYellowBackground: "#f5e8d9",
  hiYellowForeground: "#4f350d",
  verticalBorderForeground: "#ceced3",
  separatorLineBackground: "#ceced3",
  modeLineInactiveUnderline: "#ceced3",
  modeLineUnderline: "#ceced3",
  helpKeyBindingBoxColor: "#ceced3",
  childFrameBorderBackground: "#ceced3",
};

defineSolarizedTheme("solarized-apple-light", "The Solarized theme with the Apple light palette.", c);
