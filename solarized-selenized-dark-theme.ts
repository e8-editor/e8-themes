// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-selenized-dark theme for E8.
//
// A port to E8 of solarized-selenized-dark-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#103c48",
  base02: "#184956",
  base01: "#72898f",
  base00: "#103c48",
  base0: "#adbcbc",
  base1: "#cad8d9",
  base2: "#ece3cc",
  base3: "#fbf3db",
  yellow: "#dbb32d",
  orange: "#ed8649",
  red: "#fa5750",
  magenta: "#f275be",
  violet: "#af88eb",
  blue: "#4695f7",
  cyan: "#41c7b9",
  green: "#75b938",
  yellowMinus1bg: "#374a45",
  yellowMinus1fg: "#e5c364",
  yellowMinus2bg: "#615f3c",
  yellowMinus2fg: "#e2c475",
  yellowD: "#ac8a0c",
  yellowL: "#ffd557",
  redMinus1bg: "#3f4147",
  redMinus1fg: "#fe8875",
  redMinus2bg: "#6f4443",
  redMinus2fg: "#f79781",
  redL: "#ff7c65",
  magentaMinus2bg: "#664d6b",
  magentaMinus2fg: "#eda5c0",
  magentaL: "#ff92d2",
  blueMinus1bg: "#16465d",
  blueMinus1fg: "#8daded",
  blueMinus2bg: "#18557f",
  blueMinus2fg: "#9fb3e0",
  blueL: "#82afff",
  cyanL: "#7cefda",
  greenMinus1bg: "#244b46",
  greenMinus1fg: "#9dc869",
  greenMinus2bg: "#37613e",
  greenMinus2fg: "#a9c879",
  greenL: "#9fe35b",
  whitespaceTrailingForeground: "#b45b24",
  orgHabitOverdueFutureFaceBackground: "#b42e2a",
  orgHabitOverdueFaceForeground: "#b42e2a",
  orgHabitAlertFutureFaceBackground: "#ac8a0c",
  orgHabitAlertFaceForeground: "#ac8a0c",
  orgHabitReadyFutureFaceBackground: "#489615",
  orgHabitReadyFaceBackground: "#489615",
  orgHabitClearFutureFaceBackground: "#0068bb",
  orgHabitClearFaceForeground: "#82afff",
  orgHabitClearFaceBackground: "#0068bb",
  magitDiffHunkHeadingSelectionBackground: "#355354",
  hiRedBBackground: "#4d454a",
  hiRedBForeground: "#f58477",
  hiGreenBBackground: "#2c5348",
  hiGreenBForeground: "#92c36c",
  hiBlueBBackground: "#19555d",
  hiBlueBForeground: "#76cdc3",
  hiBlueBackground: "#184860",
  hiBlueForeground: "#96b6e9",
  hiGreenBackground: "#264d48",
  hiGreenForeground: "#a4c98b",
  hiPinkBackground: "#394658",
  hiPinkForeground: "#e3aacc",
  hiYellowBackground: "#394c47",
  hiYellowForeground: "#dac588",
  verticalBorderForeground: "#3a5f69",
  separatorLineBackground: "#3a5f69",
  modeLineInactiveUnderline: "#3a5f69",
  modeLineUnderline: "#3a5f69",
  helpKeyBindingBoxColor: "#3a5f69",
  childFrameBorderBackground: "#3a5f69",
};

defineSolarizedTheme("solarized-selenized-dark", "The dark variant of the Solarized colour theme with selenized color palette", c);
