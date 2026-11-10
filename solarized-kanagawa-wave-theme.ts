// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-kanagawa-wave theme for E8.
//
// A port to E8 of solarized-kanagawa-wave-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#1f1f28",
  base02: "#2a2a37",
  base01: "#727169",
  base00: "#727169",
  base0: "#dcd7ba",
  base1: "#dcd7ba",
  base2: "#e7dba0",
  base3: "#f2ecbc",
  yellow: "#c0a36e",
  orange: "#ffa066",
  red: "#c34043",
  magenta: "#d27e99",
  violet: "#957fb8",
  blue: "#7e9cd8",
  cyan: "#6a9589",
  green: "#76946a",
  yellow1bg: "#332e30",
  yellow1fg: "#ccb682",
  yellow2bg: "#52463a",
  yellow2fg: "#cbb886",
  yellowD: "#927238",
  yellowL: "#e8c174",
  red1bg: "#35232a",
  red1fg: "#d37562",
  red2bg: "#55262a",
  red2fg: "#d2866c",
  redL: "#f3674c",
  magenta2bg: "#583a49",
  magenta2fg: "#d7a59e",
  magentaL: "#f592a3",
  blue1bg: "#2a2d3d",
  blue1fg: "#a3b0ce",
  blue2bg: "#3a445f",
  blue2fg: "#adb4c2",
  blueL: "#9db0e9",
  cyanL: "#83c6a4",
  green1bg: "#292c2f",
  green1fg: "#98ab7f",
  green2bg: "#374139",
  green2fg: "#a2b083",
  greenL: "#93c56e",
  whitespaceTrailingForeground: "#b16836",
  orgHabitOverdueFutureFaceBackground: "#960216",
  orgHabitOverdueFaceForeground: "#960216",
  orgHabitAlertFutureFaceBackground: "#927238",
  orgHabitAlertFaceForeground: "#927238",
  orgHabitReadyFutureFaceBackground: "#437432",
  orgHabitReadyFaceBackground: "#437432",
  orgHabitClearFutureFaceBackground: "#4163a3",
  orgHabitClearFaceForeground: "#9db0e9",
  orgHabitClearFaceBackground: "#4163a3",
  magitDiffHunkHeadingSelectionBackground: "#38343c",
  hiRedBBackground: "#3f272d",
  hiRedBForeground: "#d07264",
  hiGreenBBackground: "#2f3434",
  hiGreenBForeground: "#94a881",
  hiBlueBBackground: "#2d343a",
  hiBlueBForeground: "#8da998",
  hiBlueBackground: "#2c2f3f",
  hiBlueForeground: "#b2b9ca",
  hiGreenBackground: "#2b2e31",
  hiGreenForeground: "#a8b591",
  hiPinkBackground: "#372c37",
  hiPinkForeground: "#d9abaa",
  hiYellowBackground: "#353032",
  hiYellowForeground: "#cfbd94",
  verticalBorderForeground: "#424248",
  separatorLineBackground: "#424248",
  modeLineInactiveUnderline: "#424248",
  modeLineUnderline: "#424248",
  helpKeyBindingBoxColor: "#424248",
  childFrameBorderBackground: "#424248",
};

defineSolarizedTheme("solarized-kanagawa-wave", "The Solarized theme with the Kanagawa wave palette.", c);
