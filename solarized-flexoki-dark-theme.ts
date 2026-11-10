// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-flexoki-dark theme for E8.
//
// A port to E8 of solarized-flexoki-dark-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#100f0f",
  base02: "#1c1b1a",
  base01: "#575653",
  base00: "#575653",
  base0: "#cecdc3",
  base1: "#cecdc3",
  base2: "#f2f0e5",
  base3: "#fffcf0",
  yellow: "#d0a215",
  orange: "#da702c",
  red: "#d14d41",
  magenta: "#ce5d97",
  violet: "#8b7ec8",
  blue: "#4385be",
  cyan: "#3aa99f",
  green: "#879a39",
  yellowMinus1bg: "#282113",
  yellowMinus1fg: "#e0b95f",
  yellowMinus2bg: "#4d3c12",
  yellowMinus2fg: "#dfbe76",
  yellowD: "#9a7200",
  yellowL: "#fcc955",
  redMinus1bg: "#291815",
  redMinus1fg: "#e3816f",
  redMinus2bg: "#4e211b",
  redMinus2fg: "#e29381",
  redL: "#ff7458",
  magentaMinus2bg: "#4c2638",
  magentaMinus2fg: "#dc9bb3",
  magentaL: "#f87eb4",
  blueMinus1bg: "#191d24",
  blueMinus1fg: "#82a4cb",
  blueMinus2bg: "#203245",
  blueMinus2fg: "#95aeca",
  blueL: "#75a8e8",
  cyanL: "#72d8ca",
  greenMinus1bg: "#1f2015",
  greenMinus1fg: "#a9b46d",
  greenMinus2bg: "#343919",
  greenMinus2fg: "#b3ba80",
  greenL: "#b7ca5e",
  whitespaceTrailingForeground: "#a23f00",
  orgHabitOverdueFutureFaceBackground: "#9b120f",
  orgHabitOverdueFaceForeground: "#9b120f",
  orgHabitAlertFutureFaceBackground: "#9a7200",
  orgHabitAlertFaceForeground: "#9a7200",
  orgHabitReadyFutureFaceBackground: "#5e7202",
  orgHabitReadyFaceBackground: "#5e7202",
  orgHabitClearFutureFaceBackground: "#00558f",
  orgHabitClearFaceForeground: "#75a8e8",
  orgHabitClearFaceBackground: "#00558f",
  magitDiffHunkHeadingSelectionBackground: "#2c261c",
  hiRedBBackground: "#331d19",
  hiRedBForeground: "#d77766",
  hiGreenBBackground: "#262819",
  hiGreenBForeground: "#9ea963",
  hiBlueBBackground: "#1c2a29",
  hiBlueBForeground: "#71b5aa",
  hiBlueBackground: "#1a1f26",
  hiBlueForeground: "#91a8c1",
  hiGreenBackground: "#212217",
  hiGreenForeground: "#acb37f",
  hiPinkBackground: "#291b21",
  hiPinkForeground: "#d298ad",
  hiYellowBackground: "#2a2215",
  hiYellowForeground: "#d5b775",
  verticalBorderForeground: "#2f2e2d",
  separatorLineBackground: "#2f2e2d",
  modeLineInactiveUnderline: "#2f2e2d",
  modeLineUnderline: "#2f2e2d",
  helpKeyBindingBoxColor: "#2f2e2d",
  childFrameBorderBackground: "#2f2e2d",
};

defineSolarizedTheme("solarized-flexoki-dark", "The Solarized theme with the Flexoki dark palette.", c);
