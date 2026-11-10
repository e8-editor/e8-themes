// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-dawnfox theme for E8.
//
// A port to E8 of solarized-dawnfox-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#faf4ed",
  base02: "#ebe5df",
  base01: "#9893a5",
  base00: "#9893a5",
  base0: "#575279",
  base1: "#4c4769",
  base2: "#e0def4",
  base3: "#e0def4",
  yellow: "#b77f39",
  orange: "#d7827e",
  red: "#b4637a",
  magenta: "#d685af",
  violet: "#907aa9",
  blue: "#286983",
  cyan: "#56949f",
  green: "#618774",
  yellow1bg: "#f5e4d4",
  yellow1fg: "#9d704d",
  yellow2bg: "#efcfae",
  yellow2fg: "#956e5c",
  yellowD: "#ba7a36",
  yellowL: "#e8a258",
  red1bg: "#f3e1de",
  red1fg: "#985d77",
  red2bg: "#ebc4c8",
  red2fg: "#91617d",
  redL: "#e47b92",
  magenta2bg: "#fcd6e2",
  magenta2fg: "#a07197",
  magentaL: "#f89bc7",
  blue1bg: "#dee1df",
  blue1fg: "#3b617e",
  blue2bg: "#b4c5cd",
  blue2fg: "#486481",
  blueL: "#5f93b0",
  cyanL: "#79c0ce",
  green1bg: "#e5e6dd",
  green1fg: "#5e7674",
  green2bg: "#c6d2c6",
  green2fg: "#637479",
  greenL: "#7aba95",
  whitespaceTrailingForeground: "#fb9890",
  orgHabitOverdueFutureFaceBackground: "#e47b92",
  orgHabitOverdueFaceForeground: "#e47b92",
  orgHabitAlertFutureFaceBackground: "#e8a258",
  orgHabitAlertFaceForeground: "#e8a258",
  orgHabitReadyFutureFaceBackground: "#7aba95",
  orgHabitReadyFaceBackground: "#7aba95",
  orgHabitClearFutureFaceBackground: "#5f93b0",
  orgHabitClearFaceForeground: "#326c8d",
  orgHabitClearFaceBackground: "#5f93b0",
  magitDiffHunkHeadingSelectionBackground: "#e8dbce",
  hiRedBBackground: "#eed7d5",
  hiRedBForeground: "#965b75",
  hiGreenBBackground: "#dbded4",
  hiGreenBForeground: "#5c7371",
  hiBlueBBackground: "#dae1dd",
  hiBlueBForeground: "#557c8f",
  hiBlueBackground: "#dcdedd",
  hiBlueForeground: "#3f5876",
  hiGreenBackground: "#e2e3da",
  hiGreenForeground: "#58666f",
  hiPinkBackground: "#f6e4e4",
  hiPinkForeground: "#90658b",
  hiYellowBackground: "#f3e2d1",
  hiYellowForeground: "#866254",
  verticalBorderForeground: "#cdc8ca",
  separatorLineBackground: "#cdc8ca",
  modeLineInactiveUnderline: "#cdc8ca",
  modeLineUnderline: "#cdc8ca",
  helpKeyBindingBoxColor: "#cdc8ca",
  childFrameBorderBackground: "#cdc8ca",
};

defineSolarizedTheme("solarized-dawnfox", "The Solarized theme with the Dawnfox palette.", c);
