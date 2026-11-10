// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-apple-dark theme for E8.
//
// A port to E8 of solarized-apple-dark-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#1c1c1e",
  base02: "#2c2c2e",
  base01: "#8e8e93",
  base00: "#8e8e93",
  base0: "#ebebf5",
  base1: "#ffffff",
  base2: "#f2f2f7",
  base3: "#ffffff",
  yellow: "#ffd600",
  orange: "#ff9230",
  red: "#ff4245",
  magenta: "#db34f2",
  violet: "#6d7cff",
  blue: "#0091ff",
  cyan: "#00dac3",
  green: "#30d158",
  yellow1bg: "#393121",
  yellow1fg: "#ffdf69",
  yellow2bg: "#66551d",
  yellow2fg: "#fbdc82",
  yellowD: "#af9e00",
  yellowL: "#fff764",
  red1bg: "#3a2322",
  red1fg: "#ff8276",
  red2bg: "#672825",
  red2fg: "#ff958a",
  redL: "#ff7363",
  magenta2bg: "#592561",
  magenta2fg: "#e692ee",
  magentaL: "#ff71ff",
  blue1bg: "#232938",
  blue1fg: "#7eadfd",
  blue2bg: "#233e65",
  blue2fg: "#95b5f5",
  blueL: "#75b3ff",
  cyanL: "#77ffe9",
  green1bg: "#233225",
  green1fg: "#7fde88",
  green2bg: "#26552d",
  green2fg: "#95dc99",
  greenL: "#78fc7e",
  whitespaceTrailingForeground: "#b05f00",
  orgHabitOverdueFutureFaceBackground: "#ae0619",
  orgHabitOverdueFaceForeground: "#ae0619",
  orgHabitAlertFutureFaceBackground: "#af9e00",
  orgHabitAlertFaceForeground: "#af9e00",
  orgHabitReadyFutureFaceBackground: "#00a029",
  orgHabitReadyFaceBackground: "#00a029",
  orgHabitClearFutureFaceBackground: "#0061b1",
  orgHabitClearFaceForeground: "#75b3ff",
  orgHabitClearFaceBackground: "#0061b1",
  magitDiffHunkHeadingSelectionBackground: "#403a30",
  hiRedBBackground: "#462725",
  hiRedBForeground: "#ff8479",
  hiGreenBBackground: "#273c2a",
  hiGreenBForeground: "#82e18b",
  hiBlueBBackground: "#263d3b",
  hiBlueBForeground: "#7ee7d5",
  hiBlueBackground: "#252b3a",
  hiBlueForeground: "#aac6ff",
  hiGreenBackground: "#253327",
  hiGreenForeground: "#a9eaac",
  hiPinkBackground: "#362439",
  hiPinkForeground: "#f4a6fa",
  hiYellowBackground: "#3b3322",
  hiYellowForeground: "#ffea98",
  verticalBorderForeground: "#4c4c4f",
  separatorLineBackground: "#4c4c4f",
  modeLineInactiveUnderline: "#4c4c4f",
  modeLineUnderline: "#4c4c4f",
  helpKeyBindingBoxColor: "#4c4c4f",
  childFrameBorderBackground: "#4c4c4f",
};

defineSolarizedTheme("solarized-apple-dark", "The Solarized theme with the Apple dark palette.", c);
