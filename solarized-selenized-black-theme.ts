// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-selenized-black theme for E8.
//
// A port to E8 of solarized-selenized-black-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#181818",
  base02: "#252525",
  base01: "#777777",
  base00: "#181818",
  base0: "#b9b9b9",
  base1: "#dedede",
  base2: "#53676d",
  base3: "#3a4d53",
  yellow: "#dbb32d",
  orange: "#e67f43",
  red: "#ed4a46",
  magenta: "#eb6eb7",
  violet: "#a580e2",
  blue: "#368aeb",
  cyan: "#3fc5b7",
  green: "#70b433",
  yellow1bg: "#302a1c",
  yellow1fg: "#debd66",
  yellow2bg: "#56471d",
  yellow2fg: "#d7bb78",
  yellowD: "#a68000",
  yellowL: "#e5bb45",
  red1bg: "#331f1d",
  red1fg: "#ee7a6e",
  red2bg: "#5d2621",
  red2fg: "#e5887d",
  redL: "#f15a4b",
  magenta2bg: "#5b3148",
  magenta2fg: "#dd99bd",
  magentaL: "#e973b8",
  blue1bg: "#202530",
  blue1fg: "#7a9fe5",
  blue2bg: "#25395a",
  blue2fg: "#8aa4db",
  blueL: "#518eee",
  cyanL: "#50d3c5",
  green1bg: "#232a1c",
  green1fg: "#92be67",
  green2bg: "#32471d",
  green2fg: "#9bbc78",
  greenL: "#7bc447",
  whitespaceTrailingForeground: "#aa4b11",
  orgHabitOverdueFutureFaceBackground: "#ad1117",
  orgHabitOverdueFaceForeground: "#ad1117",
  orgHabitAlertFutureFaceBackground: "#a68000",
  orgHabitAlertFaceForeground: "#a68000",
  orgHabitReadyFutureFaceBackground: "#428800",
  orgHabitReadyFaceBackground: "#428800",
  orgHabitClearFutureFaceBackground: "#0057af",
  orgHabitClearFaceForeground: "#518eee",
  orgHabitClearFaceBackground: "#0057af",
  magitDiffHunkHeadingSelectionBackground: "#363127",
  hiRedBBackground: "#3f2420",
  hiRedBForeground: "#f17d71",
  hiGreenBBackground: "#29331f",
  hiGreenBForeground: "#95c16a",
  hiBlueBBackground: "#243633",
  hiBlueBForeground: "#7ccec3",
  hiBlueBackground: "#222632",
  hiBlueForeground: "#9cb3e6",
  hiGreenBackground: "#252c1d",
  hiGreenForeground: "#abca8b",
  hiPinkBackground: "#33242c",
  hiPinkForeground: "#e9a9cb",
  hiYellowBackground: "#322b1d",
  hiYellowForeground: "#e3c88b",
  verticalBorderForeground: "#404040",
  separatorLineBackground: "#404040",
  modeLineInactiveUnderline: "#404040",
  modeLineUnderline: "#404040",
  helpKeyBindingBoxColor: "#404040",
  childFrameBorderBackground: "#404040",
};

defineSolarizedTheme("solarized-selenized-black", "The black variant of the Solarized colour theme with selenized color palette", c);
