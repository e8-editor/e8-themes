// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-carbonfox theme for E8.
//
// A port to E8 of solarized-carbonfox-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base02: "#252525",
  base01: "#6e6f70",
  base00: "#6e6f70",
  base0: "#f2f4f8",
  base1: "#f9fbff",
  base2: "#dfdfe0",
  base3: "#e4e4e5",
  yellow: "#f1c21b",
  orange: "#ff832b",
  red: "#fa4d56",
  magenta: "#ff7eb6",
  violet: "#be95ff",
  blue: "#78a9ff",
  cyan: "#08bdba",
  green: "#25be6a",
  yellowMinus1bg: "#312a19",
  yellowMinus1fg: "#f7d06b",
  yellowMinus2bg: "#5c4a19",
  yellowMinus2fg: "#f1d083",
  yellowD: "#ad8c00",
  yellowL: "#ffe15c",
  redMinus1bg: "#331e1d",
  redMinus1fg: "#ff8583",
  redMinus2bg: "#602626",
  redMinus2fg: "#f89794",
  redL: "#ff756f",
  magentaMinus2bg: "#603547",
  magentaMinus2fg: "#f5aecb",
  magentaL: "#ff98cb",
  blueMinus1bg: "#232731",
  blueMinus1fg: "#a2befd",
  blueMinus2bg: "#34425f",
  blueMinus2fg: "#adc2f4",
  blueL: "#97beff",
  cyanL: "#6de2df",
  greenMinus1bg: "#1c2a20",
  greenMinus1fg: "#75cf93",
  greenMinus2bg: "#1e4a2d",
  greenMinus2fg: "#8bd0a1",
  greenL: "#6ce68d",
  whitespaceTrailingForeground: "#ad4f00",
  orgHabitOverdueFutureFaceBackground: "#ad1426",
  orgHabitOverdueFaceForeground: "#ad1426",
  orgHabitAlertFutureFaceBackground: "#ad8c00",
  orgHabitAlertFaceForeground: "#ad8c00",
  orgHabitReadyFutureFaceBackground: "#008f3f",
  orgHabitReadyFaceBackground: "#008f3f",
  orgHabitClearFutureFaceBackground: "#3d6cae",
  orgHabitClearFaceForeground: "#97beff",
  orgHabitClearFaceBackground: "#3d6cae",
  magitDiffHunkHeadingSelectionBackground: "#383227",
  hiRedBBackground: "#3f2321",
  hiRedBForeground: "#ff8885",
  hiGreenBBackground: "#203325",
  hiGreenBForeground: "#78d296",
  hiBlueBBackground: "#203332",
  hiBlueBForeground: "#76d0cf",
  hiBlueBackground: "#252833",
  hiBlueForeground: "#bfd1ff",
  hiGreenBackground: "#1e2c21",
  hiGreenForeground: "#a0deb3",
  hiPinkBackground: "#34242a",
  hiPinkForeground: "#ffbfda",
  hiYellowBackground: "#332b1b",
  hiYellowForeground: "#fede98",
  verticalBorderForeground: "#3d3d3e",
  separatorLineBackground: "#3d3d3e",
  modeLineInactiveUnderline: "#3d3d3e",
  modeLineUnderline: "#3d3d3e",
  helpKeyBindingBoxColor: "#3d3d3e",
  childFrameBorderBackground: "#3d3d3e",
};

defineSolarizedTheme("solarized-carbonfox", "The Solarized theme with the Carbonfox palette.", c);
