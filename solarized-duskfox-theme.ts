// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-duskfox theme for E8.
//
// A port to E8 of solarized-duskfox-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#232136",
  base02: "#2d2a45",
  base01: "#817c9c",
  base00: "#817c9c",
  base0: "#e0def4",
  base1: "#eae8ff",
  base2: "#ebe5df",
  base3: "#faf4ed",
  yellow: "#f6c177",
  orange: "#ea9a97",
  red: "#eb6f92",
  magenta: "#eb98c3",
  violet: "#c4a7e7",
  blue: "#569fba",
  cyan: "#9ccfd8",
  green: "#a3be8c",
  yellow1bg: "#3f333e",
  yellow1fg: "#f7cd98",
  yellow2bg: "#695248",
  yellow2fg: "#efcca1",
  yellowD: "#b38547",
  yellowL: "#ffd88e",
  red1bg: "#3d2a41",
  red1fg: "#f096aa",
  red2bg: "#653650",
  red2fg: "#eaa2af",
  redL: "#ff8ca8",
  magenta2bg: "#634461",
  magenta2fg: "#e8b7cb",
  magentaL: "#ffadd7",
  blue1bg: "#293046",
  blue1fg: "#8ab5c6",
  blue2bg: "#2f475e",
  blue2fg: "#9abac6",
  blueL: "#7cc4e3",
  cyanL: "#b1eaf3",
  green1bg: "#333340",
  green1fg: "#bacba6",
  green2bg: "#4b514e",
  green2fg: "#bfcbac",
  greenL: "#bfe29b",
  whitespaceTrailingForeground: "#ac5c60",
  orgHabitOverdueFutureFaceBackground: "#b03760",
  orgHabitOverdueFaceForeground: "#b03760",
  orgHabitAlertFutureFaceBackground: "#b38547",
  orgHabitAlertFaceForeground: "#b38547",
  orgHabitReadyFutureFaceBackground: "#6e8e54",
  orgHabitReadyFaceBackground: "#6e8e54",
  orgHabitClearFutureFaceBackground: "#177295",
  orgHabitClearFaceForeground: "#7cc4e3",
  orgHabitClearFaceBackground: "#177295",
  magitDiffHunkHeadingSelectionBackground: "#41374a",
  hiRedBBackground: "#493047",
  hiRedBForeground: "#f095b2",
  hiGreenBBackground: "#3b3d46",
  hiGreenBForeground: "#b9cbae",
  hiBlueBBackground: "#393f53",
  hiBlueBForeground: "#b4d7e4",
  hiBlueBackground: "#2b3248",
  hiBlueForeground: "#a4c3dc",
  hiGreenBackground: "#353542",
  hiGreenForeground: "#c7d3c5",
  hiPinkBackground: "#3e3149",
  hiPinkForeground: "#edc1e1",
  hiYellowBackground: "#413540",
  hiYellowForeground: "#f5d4bb",
  verticalBorderForeground: "#494562",
  separatorLineBackground: "#494562",
  modeLineInactiveUnderline: "#494562",
  modeLineUnderline: "#494562",
  helpKeyBindingBoxColor: "#494562",
  childFrameBorderBackground: "#494562",
};

defineSolarizedTheme("solarized-duskfox", "The Solarized theme with the Duskfox palette.", c);
