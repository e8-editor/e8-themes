// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-flexoki-light theme for E8.
//
// A port to E8 of solarized-flexoki-light-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#fffcf0",
  base02: "#f2f0e5",
  base01: "#b7b5ac",
  base00: "#b7b5ac",
  base0: "#100f0f",
  base1: "#100f0f",
  base2: "#cecdc3",
  base3: "#cecdc3",
  yellow: "#ad8301",
  orange: "#bc5215",
  red: "#af3029",
  magenta: "#a02f6f",
  violet: "#5e409d",
  blue: "#205ea6",
  cyan: "#24837b",
  green: "#66800b",
  yellowMinus1bg: "#f9ecd1",
  yellowMinus1fg: "#7d6015",
  yellowMinus2bg: "#efd5a2",
  yellowMinus2fg: "#6d551e",
  yellowD: "#a87e1f",
  yellowL: "#dbac4d",
  redMinus1bg: "#fbe1d2",
  redMinus1fg: "#7f2c24",
  redMinus2bg: "#f4b7a5",
  redMinus2fg: "#6f2e26",
  redL: "#e66147",
  magentaMinus2bg: "#e8b6c5",
  magentaMinus2fg: "#662e4b",
  magentaL: "#d46095",
  blueMinus1bg: "#e4e5e8",
  blueMinus1fg: "#274777",
  blueMinus2bg: "#bbc4de",
  blueMinus2fg: "#2d4267",
  blueL: "#6785d1",
  cyanL: "#63b4a8",
  greenMinus1bg: "#ebebd1",
  greenMinus1fg: "#4e5e17",
  greenMinus2bg: "#ced4a1",
  greenMinus2fg: "#48531f",
  greenL: "#98ae4b",
  whitespaceTrailingForeground: "#ef7c43",
  orgHabitOverdueFutureFaceBackground: "#e66147",
  orgHabitOverdueFaceForeground: "#e66147",
  orgHabitAlertFutureFaceBackground: "#dbac4d",
  orgHabitAlertFaceForeground: "#dbac4d",
  orgHabitReadyFutureFaceBackground: "#98ae4b",
  orgHabitReadyFaceBackground: "#98ae4b",
  orgHabitClearFutureFaceBackground: "#6785d1",
  orgHabitClearFaceForeground: "#3459a2",
  orgHabitClearFaceBackground: "#6785d1",
  magitDiffHunkHeadingSelectionBackground: "#eee5d0",
  hiRedBBackground: "#f5d4c5",
  hiRedBForeground: "#7c2921",
  hiGreenBBackground: "#e1e2c3",
  hiGreenBForeground: "#4b5b14",
  hiBlueBBackground: "#d6e4d8",
  hiBlueBForeground: "#245d58",
  hiBlueBackground: "#e2e3e6",
  hiBlueForeground: "#223455",
  hiGreenBackground: "#e9e9ce",
  hiGreenForeground: "#3a4415",
  hiPinkBackground: "#f3dedc",
  hiPinkForeground: "#54233c",
  hiYellowBackground: "#f6e9ce",
  hiYellowForeground: "#5a4515",
  verticalBorderForeground: "#dddbd1",
  separatorLineBackground: "#dddbd1",
  modeLineInactiveUnderline: "#dddbd1",
  modeLineUnderline: "#dddbd1",
  helpKeyBindingBoxColor: "#dddbd1",
  childFrameBorderBackground: "#dddbd1",
};

defineSolarizedTheme("solarized-flexoki-light", "The Solarized theme with the Flexoki light palette.", c);
