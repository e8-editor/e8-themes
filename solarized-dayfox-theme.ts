// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-dayfox theme for E8.
//
// A port to E8 of solarized-dayfox-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#f6f2ee",
  base02: "#e4dcd4",
  base01: "#837a72",
  base00: "#837a72",
  base0: "#3d2b5a",
  base1: "#302b5d",
  base2: "#cdcecf",
  base3: "#cdcecf",
  yellow: "#ac5402",
  orange: "#955f61",
  red: "#a5222f",
  magenta: "#a440b5",
  violet: "#6e33ce",
  blue: "#2848a9",
  cyan: "#287980",
  green: "#396847",
  yellow1bg: "#f3dccd",
  yellow1fg: "#8f492e",
  yellow2bg: "#edbc9b",
  yellow2fg: "#874941",
  yellowD: "#a8531a",
  yellowL: "#d97c40",
  red1bg: "#f1d7d1",
  red1fg: "#8a2b40",
  red2bg: "#eaada6",
  red2fg: "#82344e",
  redL: "#d7574c",
  magenta2bg: "#e4b7e3",
  magenta2fg: "#7a4297",
  magentaL: "#d165de",
  blue1bg: "#ded9e7",
  blue1fg: "#314194",
  blue2bg: "#b8b4df",
  blue2fg: "#3b4490",
  blueL: "#6966d2",
  cyanL: "#61a5ab",
  green1bg: "#dbdfd6",
  green1fg: "#3d5851",
  green2bg: "#b3c4b2",
  green2fg: "#43565c",
  greenL: "#609968",
  whitespaceTrailingForeground: "#ca736f",
  orgHabitOverdueFutureFaceBackground: "#d7574c",
  orgHabitOverdueFaceForeground: "#d7574c",
  orgHabitAlertFutureFaceBackground: "#d97c40",
  orgHabitAlertFaceForeground: "#d97c40",
  orgHabitReadyFutureFaceBackground: "#609968",
  orgHabitReadyFaceBackground: "#609968",
  orgHabitClearFutureFaceBackground: "#6966d2",
  orgHabitClearFaceForeground: "#3541a6",
  orgHabitClearFaceBackground: "#6966d2",
  magitDiffHunkHeadingSelectionBackground: "#e2cebf",
  hiRedBBackground: "#eccac4",
  hiRedBForeground: "#87283d",
  hiGreenBBackground: "#cfd6ca",
  hiGreenBForeground: "#3a554f",
  hiBlueBBackground: "#cfd9d7",
  hiBlueBForeground: "#306176",
  hiBlueBackground: "#dbd7e5",
  hiBlueForeground: "#303982",
  hiGreenBackground: "#d9ddd3",
  hiGreenForeground: "#394953",
  hiPinkBackground: "#ecd8e6",
  hiPinkForeground: "#693788",
  hiYellowBackground: "#f0daca",
  hiYellowForeground: "#773d3b",
  verticalBorderForeground: "#c1b9b0",
  separatorLineBackground: "#c1b9b0",
  modeLineInactiveUnderline: "#c1b9b0",
  modeLineUnderline: "#c1b9b0",
  helpKeyBindingBoxColor: "#c1b9b0",
  childFrameBorderBackground: "#c1b9b0",
};

defineSolarizedTheme("solarized-dayfox", "The Solarized theme with the Dayfox palette.", c);
