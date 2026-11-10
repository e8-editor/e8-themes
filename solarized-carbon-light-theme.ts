// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-carbon-light theme for E8.
//
// A port to E8 of solarized-carbon-light-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base02: "#f4f4f4",
  base01: "#8d8d8d",
  base00: "#8d8d8d",
  base0: "#525252",
  base1: "#161616",
  base2: "#c6c6c6",
  base3: "#c6c6c6",
  yellow: "#8e6a00",
  orange: "#ba4e00",
  red: "#da1e28",
  magenta: "#d02670",
  violet: "#8a3ffc",
  blue: "#0072c3",
  cyan: "#007d79",
  green: "#198038",
  yellowMinus1bg: "#f4eadc",
  yellowMinus1fg: "#6b5114",
  yellowMinus2bg: "#e2cba6",
  yellowMinus2fg: "#604b1e",
  yellowD: "#8c681c",
  yellowL: "#c09649",
  redMinus1bg: "#ffe4df",
  redMinus1fg: "#9e2925",
  redMinus2bg: "#ffbaae",
  redMinus2fg: "#893029",
  redL: "#ff654b",
  magentaMinus2bg: "#ffbcce",
  magentaMinus2fg: "#82324e",
  magentaL: "#ff6793",
  blueMinus1bg: "#e5ebf9",
  blueMinus1fg: "#25568c",
  blueMinus2bg: "#bdcff3",
  blueMinus2fg: "#304f79",
  blueL: "#6c99eb",
  cyanL: "#5daca7",
  greenMinus1bg: "#e1efe2",
  greenMinus1fg: "#236030",
  greenMinus2bg: "#b4d7b6",
  greenMinus2fg: "#2b5732",
  greenL: "#5eb264",
  whitespaceTrailingForeground: "#ec7c46",
  orgHabitOverdueFutureFaceBackground: "#ff654b",
  orgHabitOverdueFaceForeground: "#ff654b",
  orgHabitAlertFutureFaceBackground: "#c09649",
  orgHabitAlertFaceForeground: "#c09649",
  orgHabitReadyFutureFaceBackground: "#5eb264",
  orgHabitReadyFaceBackground: "#5eb264",
  orgHabitClearFutureFaceBackground: "#6c99eb",
  orgHabitClearFaceForeground: "#326bb8",
  orgHabitClearFaceBackground: "#6c99eb",
  magitDiffHunkHeadingSelectionBackground: "#ece6dc",
  hiRedBBackground: "#ffd8d1",
  hiRedBForeground: "#9b2623",
  hiGreenBBackground: "#d4e6d5",
  hiGreenBForeground: "#205e2e",
  hiBlueBBackground: "#d4e5e3",
  hiBlueBForeground: "#1a5c59",
  hiBlueBackground: "#e3e9f7",
  hiBlueForeground: "#244166",
  hiGreenBackground: "#dfecdf",
  hiGreenForeground: "#204827",
  hiPinkBackground: "#fde2e9",
  hiPinkForeground: "#6e2740",
  hiYellowBackground: "#f1e7d9",
  hiYellowForeground: "#503d15",
  verticalBorderForeground: "#cfcfcf",
  separatorLineBackground: "#cfcfcf",
  modeLineInactiveUnderline: "#cfcfcf",
  modeLineUnderline: "#cfcfcf",
  helpKeyBindingBoxColor: "#cfcfcf",
  childFrameBorderBackground: "#cfcfcf",
};

defineSolarizedTheme("solarized-carbon-light", "The Solarized theme with the IBM Carbon light palette.", c);
