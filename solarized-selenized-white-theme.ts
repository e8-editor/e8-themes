// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-selenized-white theme for E8.
//
// A port to E8 of solarized-selenized-white-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#ffffff",
  base02: "#ebebeb",
  base01: "#878787",
  base00: "#ffffff",
  base0: "#474747",
  base1: "#282828",
  base2: "#b9b9b9",
  base3: "#dedede",
  yellow: "#c49700",
  orange: "#d04a00",
  red: "#d6000c",
  magenta: "#dd0f9d",
  violet: "#7f51d6",
  blue: "#0064e4",
  cyan: "#00ad9c",
  green: "#1d9700",
  yellowMinus1bg: "#fdf1df",
  yellowMinus1fg: "#967621",
  yellowMinus2bg: "#fadfae",
  yellowMinus2fg: "#866c2d",
  yellowD: "#c09329",
  yellowL: "#efbe53",
  redMinus1bg: "#ffe3db",
  redMinus1fg: "#a4291b",
  redMinus2bg: "#ffb7a4",
  redMinus2fg: "#933526",
  redL: "#ff6141",
  magentaMinus2bg: "#ffbce2",
  magentaMinus2fg: "#933a6f",
  magentaL: "#ff68c2",
  blueMinus1bg: "#e8e9ff",
  blueMinus1fg: "#3453aa",
  blueMinus2bg: "#c4c8ff",
  blueMinus2fg: "#405194",
  blueL: "#7587ff",
  cyanL: "#69d6c5",
  greenMinus1bg: "#e4f3de",
  greenMinus1fg: "#31761f",
  greenMinus2bg: "#bbe1ab",
  greenMinus2fg: "#3a6d2b",
  greenL: "#66c350",
  whitespaceTrailingForeground: "#ff7845",
  orgHabitOverdueFutureFaceBackground: "#ff6141",
  orgHabitOverdueFaceForeground: "#ff6141",
  orgHabitAlertFutureFaceBackground: "#efbe53",
  orgHabitAlertFaceForeground: "#efbe53",
  orgHabitReadyFutureFaceBackground: "#66c350",
  orgHabitReadyFaceBackground: "#66c350",
  orgHabitClearFutureFaceBackground: "#7587ff",
  orgHabitClearFaceForeground: "#405fd9",
  orgHabitClearFaceBackground: "#7587ff",
  magitDiffHunkHeadingSelectionBackground: "#eae3d6",
  hiRedBBackground: "#ffd6cb",
  hiRedBForeground: "#a12618",
  hiGreenBBackground: "#d8ebcf",
  hiGreenBForeground: "#2d741c",
  hiBlueBBackground: "#d9efeb",
  hiBlueBForeground: "#2a8277",
  hiBlueBackground: "#e6e6fc",
  hiBlueForeground: "#354480",
  hiGreenBackground: "#e2f0db",
  hiGreenForeground: "#305d22",
  hiPinkBackground: "#fee2f0",
  hiPinkForeground: "#7f305f",
  hiYellowBackground: "#fbefdc",
  hiYellowForeground: "#745c25",
  verticalBorderForeground: "#c7c7c7",
  separatorLineBackground: "#c7c7c7",
  modeLineInactiveUnderline: "#c7c7c7",
  modeLineUnderline: "#c7c7c7",
  helpKeyBindingBoxColor: "#c7c7c7",
  childFrameBorderBackground: "#c7c7c7",
};

defineSolarizedTheme("solarized-selenized-white", "The white variant of the Solarized colour theme with selenized color palette", c);
