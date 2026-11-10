// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-nightfox theme for E8.
//
// A port to E8 of solarized-nightfox-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#192330",
  base02: "#212e3f",
  base01: "#738091",
  base00: "#738091",
  base0: "#cdcecf",
  base1: "#d6d6d7",
  base2: "#e4dcd4",
  base3: "#f6f2ee",
  yellow: "#dbc074",
  orange: "#f4a261",
  red: "#c94f6d",
  magenta: "#d67ad2",
  violet: "#9d79d6",
  blue: "#719cd6",
  cyan: "#63cdcf",
  green: "#81b29a",
  yellowMinus1bg: "#333538",
  yellowMinus1fg: "#e2cc96",
  yellowMinus2bg: "#5a5342",
  yellowMinus2fg: "#decba0",
  yellowD: "#a48940",
  yellowL: "#fcda87",
  redMinus1bg: "#322936",
  redMinus1fg: "#d8808f",
  redMinus2bg: "#552e3e",
  redMinus2fg: "#d7909a",
  redL: "#f47083",
  magentaMinus2bg: "#563c62",
  magentaMinus2fg: "#dba6d4",
  magentaL: "#f791ee",
  blueMinus1bg: "#233144",
  blueMinus1fg: "#9ab2db",
  blueMinus2bg: "#304763",
  blueMinus2fg: "#a6b7d6",
  blueL: "#90b3f2",
  cyanL: "#8aefee",
  greenMinus1bg: "#25343c",
  greenMinus1fg: "#a1c2b0",
  greenMinus2bg: "#374e4f",
  greenMinus2fg: "#abc4b4",
  greenL: "#96d9b2",
  whitespaceTrailingForeground: "#b06c33",
  orgHabitOverdueFutureFaceBackground: "#991940",
  orgHabitOverdueFaceForeground: "#991940",
  orgHabitAlertFutureFaceBackground: "#a48940",
  orgHabitAlertFaceForeground: "#a48940",
  orgHabitReadyFutureFaceBackground: "#42876a",
  orgHabitReadyFaceBackground: "#42876a",
  orgHabitClearFutureFaceBackground: "#3266a5",
  orgHabitClearFaceForeground: "#90b3f2",
  orgHabitClearFaceBackground: "#3266a5",
  magitDiffHunkHeadingSelectionBackground: "#343a44",
  hiRedBBackground: "#3d2d3b",
  hiRedBForeground: "#d27a8b",
  hiGreenBBackground: "#2c3c43",
  hiGreenBForeground: "#9bbdac",
  hiBlueBBackground: "#27414c",
  hiBlueBForeground: "#8dd0d2",
  hiBlueBackground: "#253346",
  hiBlueForeground: "#a7b9d7",
  hiGreenBackground: "#27363e",
  hiGreenForeground: "#acc4b8",
  hiPinkBackground: "#332f45",
  hiPinkForeground: "#d9aad5",
  hiYellowBackground: "#35373a",
  hiYellowForeground: "#dbcba6",
  verticalBorderForeground: "#3c495a",
  separatorLineBackground: "#3c495a",
  modeLineInactiveUnderline: "#3c495a",
  modeLineUnderline: "#3c495a",
  helpKeyBindingBoxColor: "#3c495a",
  childFrameBorderBackground: "#3c495a",
};

defineSolarizedTheme("solarized-nightfox", "The Solarized theme with the Nightfox palette.", c);
