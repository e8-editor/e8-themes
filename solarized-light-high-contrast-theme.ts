// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-light-high-contrast theme for E8.
//
// A port to E8 of solarized-light-high-contrast-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#fffce9",
  base02: "#f4eedb",
  base01: "#98a6a6",
  base00: "#88999b",
  base0: "#596e76",
  base1: "#5d737a",
  base2: "#002b37",
  base3: "#00212b",
  yellow: "#a67c00",
  orange: "#bb3e06",
  red: "#cc1f24",
  magenta: "#c42475",
  violet: "#5e65b6",
  blue: "#007ec4",
  cyan: "#11948b",
  green: "#778c00",
  yellowMinus1bg: "#f7eacb",
  yellowMinus1fg: "#7a6120",
  yellowMinus2bg: "#ecd29c",
  yellowMinus2fg: "#6b5a2c",
  yellowD: "#785700",
  yellowL: "#d6a549",
  redMinus1bg: "#ffe1cb",
  redMinus1fg: "#952f2a",
  redMinus2bg: "#ffb79f",
  redMinus2fg: "#823731",
  redL: "#ff6243",
  magentaMinus2bg: "#f9b9c4",
  magentaMinus2fg: "#7a395c",
  magentaL: "#f46495",
  blueMinus1bg: "#e6ebe7",
  blueMinus1fg: "#0a6395",
  blueMinus2bg: "#bfd2e6",
  blueMinus2fg: "#185b85",
  blueL: "#6fa5e7",
  cyanL: "#66c1b3",
  greenMinus1bg: "#eeedcb",
  greenMinus1fg: "#596c21",
  greenMinus2bg: "#d5d99d",
  greenMinus2fg: "#51622d",
  greenL: "#a8b84b",
  whitespaceTrailingForeground: "#ed6e3e",
  orgHabitOverdueFutureFaceBackground: "#ff6243",
  orgHabitOverdueFaceForeground: "#ff6243",
  orgHabitAlertFutureFaceBackground: "#d6a549",
  orgHabitAlertFaceForeground: "#d6a549",
  orgHabitReadyFutureFaceBackground: "#a8b84b",
  orgHabitReadyFaceBackground: "#a8b84b",
  orgHabitClearFutureFaceBackground: "#6fa5e7",
  orgHabitClearFaceForeground: "#005797",
  orgHabitClearFaceBackground: "#6fa5e7",
  magitDiffHunkHeadingSelectionBackground: "#eee2c7",
  hiRedBBackground: "#fdd4be",
  hiRedBForeground: "#b3483d",
  hiGreenBBackground: "#e5e5be",
  hiGreenBForeground: "#738437",
  hiBlueBBackground: "#d7e7d6",
  hiBlueBForeground: "#388a86",
  hiBlueBackground: "#e4e8e4",
  hiBlueForeground: "#49789f",
  hiGreenBackground: "#ecebc8",
  hiGreenForeground: "#6f7f4c",
  hiPinkBackground: "#fadfd7",
  hiPinkForeground: "#975977",
  hiYellowBackground: "#f5e8c8",
  hiYellowForeground: "#89774b",
  verticalBorderForeground: "#d3d4c8",
  separatorLineBackground: "#d3d4c8",
  modeLineInactiveUnderline: "#d3d4c8",
  modeLineUnderline: "#d3d4c8",
  helpKeyBindingBoxColor: "#d3d4c8",
  childFrameBorderBackground: "#d3d4c8",
};

defineSolarizedTheme("solarized-light-high-contrast", "The light variant of the Solarized colour theme with slightly higher text contrast", c);
