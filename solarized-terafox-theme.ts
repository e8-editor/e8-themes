// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-terafox theme for E8.
//
// A port to E8 of solarized-terafox-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#152528",
  base02: "#1d3337",
  base01: "#6d7f8b",
  base00: "#6d7f8b",
  base0: "#e6eaea",
  base1: "#eaeeee",
  base2: "#ebebeb",
  base3: "#eeeeee",
  yellow: "#fda47f",
  orange: "#ff8349",
  red: "#e85c51",
  magenta: "#ad5c7c",
  violet: "#846ab2",
  blue: "#5a93aa",
  cyan: "#a1cdd8",
  green: "#7aa4a1",
  yellowMinus1bg: "#343432",
  yellowMinus1fg: "#f9b89d",
  yellowMinus2bg: "#634b40",
  yellowMinus2fg: "#efbaa5",
  yellowD: "#b06b4b",
  yellowL: "#ffbc97",
  redMinus1bg: "#342d2c",
  redMinus1fg: "#ee887b",
  redMinus2bg: "#5e352f",
  redMinus2fg: "#e8968a",
  redL: "#ff806a",
  magentaMinus2bg: "#47333f",
  magentaMinus2fg: "#c293a3",
  magentaL: "#df769a",
  blueMinus1bg: "#1c3237",
  blueMinus1fg: "#86abbb",
  blueMinus2bg: "#25454f",
  blueMinus2fg: "#94b0bd",
  blueL: "#7abbd9",
  cyanL: "#b5e7f4",
  greenMinus1bg: "#203436",
  greenMinus1fg: "#9ab7b5",
  greenMinus2bg: "#314b4c",
  greenMinus2fg: "#a3bab8",
  greenL: "#90d2cd",
  whitespaceTrailingForeground: "#b0521e",
  orgHabitOverdueFutureFaceBackground: "#ad2c23",
  orgHabitOverdueFaceForeground: "#ad2c23",
  orgHabitAlertFutureFaceBackground: "#b06b4b",
  orgHabitAlertFaceForeground: "#b06b4b",
  orgHabitReadyFutureFaceBackground: "#387f7b",
  orgHabitReadyFaceBackground: "#387f7b",
  orgHabitClearFutureFaceBackground: "#146b87",
  orgHabitClearFaceForeground: "#7abbd9",
  orgHabitClearFaceBackground: "#146b87",
  magitDiffHunkHeadingSelectionBackground: "#343d3e",
  hiRedBBackground: "#403230",
  hiRedBForeground: "#f18b7d",
  hiGreenBBackground: "#273c3e",
  hiGreenBForeground: "#9bbab8",
  hiBlueBBackground: "#2d4247",
  hiBlueBForeground: "#b8d7df",
  hiBlueBackground: "#1e3439",
  hiBlueForeground: "#a4c0cc",
  hiGreenBackground: "#223638",
  hiGreenForeground: "#b2c9c7",
  hiPinkBackground: "#2c2d33",
  hiPinkForeground: "#cfa5b3",
  hiYellowBackground: "#363634",
  hiYellowForeground: "#f9cab6",
  verticalBorderForeground: "#384c53",
  separatorLineBackground: "#384c53",
  modeLineInactiveUnderline: "#384c53",
  modeLineUnderline: "#384c53",
  helpKeyBindingBoxColor: "#384c53",
  childFrameBorderBackground: "#384c53",
};

defineSolarizedTheme("solarized-terafox", "The Solarized theme with the Terafox palette.", c);
