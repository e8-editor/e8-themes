// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-kanagawa-dragon theme for E8.
//
// A port to E8 of solarized-kanagawa-dragon-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#181616",
  base02: "#282727",
  base01: "#737c73",
  base00: "#737c73",
  base0: "#c5c9c5",
  base1: "#c5c9c5",
  base2: "#e7dba0",
  base3: "#f2ecbc",
  yellow: "#c4b28a",
  orange: "#c68b64",
  red: "#c4746e",
  magenta: "#a292a3",
  violet: "#8992a7",
  blue: "#658594",
  cyan: "#7aa89f",
  green: "#8a9a7b",
  yellowMinus1bg: "#2c2823",
  yellowMinus1fg: "#cfc096",
  yellowMinus2bg: "#4d4538",
  yellowMinus2fg: "#cdc196",
  yellowD: "#917b4b",
  yellowL: "#e9ce8d",
  redMinus1bg: "#2c2120",
  redMinus1fg: "#d19582",
  redMinus2bg: "#4d302e",
  redMinus2fg: "#cf9f86",
  redL: "#ec8973",
  magentaMinus2bg: "#413a40",
  magentaMinus2fg: "#bbafa4",
  magentaL: "#ce9dc1",
  blueMinus1bg: "#212324",
  blueMinus1fg: "#8ea09e",
  blueMinus2bg: "#2d363b",
  blueMinus2fg: "#9ba79c",
  blueL: "#80aab9",
  cyanL: "#91d2b8",
  greenMinus1bg: "#252521",
  greenMinus1fg: "#a6af8b",
  greenMinus2bg: "#393d33",
  greenMinus2fg: "#adb38d",
  greenL: "#aac87d",
  whitespaceTrailingForeground: "#93552c",
  orgHabitOverdueFutureFaceBackground: "#913934",
  orgHabitOverdueFaceForeground: "#913934",
  orgHabitAlertFutureFaceBackground: "#917b4b",
  orgHabitAlertFaceForeground: "#917b4b",
  orgHabitReadyFutureFaceBackground: "#58753b",
  orgHabitReadyFaceBackground: "#58753b",
  orgHabitClearFutureFaceBackground: "#285b71",
  orgHabitClearFaceForeground: "#80aab9",
  orgHabitClearFaceBackground: "#285b71",
  magitDiffHunkHeadingSelectionBackground: "#353330",
  hiRedBBackground: "#362726",
  hiRedBForeground: "#c88e87",
  hiGreenBBackground: "#2c2d28",
  hiGreenBForeground: "#9ca891",
  hiBlueBBackground: "#2a2f2e",
  hiBlueBForeground: "#91b2aa",
  hiBlueBackground: "#232426",
  hiBlueForeground: "#95a7ac",
  hiGreenBackground: "#272723",
  hiGreenForeground: "#a7b19f",
  hiPinkBackground: "#2a2628",
  hiPinkForeground: "#b4adb4",
  hiYellowBackground: "#2e2a25",
  hiYellowForeground: "#c6bea7",
  verticalBorderForeground: "#414340",
  separatorLineBackground: "#414340",
  modeLineInactiveUnderline: "#414340",
  modeLineUnderline: "#414340",
  helpKeyBindingBoxColor: "#414340",
  childFrameBorderBackground: "#414340",
};

defineSolarizedTheme("solarized-kanagawa-dragon", "The Solarized theme with the Kanagawa dragon palette.", c);
