// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-dark theme for E8.
//
// A port to E8 of solarized-dark-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Bozhidar Batsov
// Copyright (C) 2011-2025 Bozhidar Batsov
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
  base03: "#002b36",
  base02: "#073642",
  base01: "#586e75",
  base00: "#657b83",
  base0: "#839496",
  base1: "#93a1a1",
  base2: "#eee8d5",
  base3: "#fdf6e3",
  yellow: "#b58900",
  orange: "#cb4b16",
  red: "#dc322f",
  magenta: "#d33682",
  violet: "#6c71c4",
  blue: "#268bd2",
  cyan: "#2aa198",
  green: "#859900",
  yellowMinus1bg: "#273532",
  yellowMinus1fg: "#af8f41",
  yellowMinus2bg: "#433e20",
  yellowMinus2fg: "#b39a5e",
  yellowD: "#866300",
  yellowL: "#e1af4b",
  redMinus1bg: "#2d2c31",
  redMinus1fg: "#d66556",
  redMinus2bg: "#532725",
  redMinus2fg: "#ce7667",
  redL: "#ff6849",
  magentaMinus2bg: "#4c2942",
  magentaMinus2fg: "#c47896",
  magentaL: "#ff699e",
  blueMinus1bg: "#003547",
  blueMinus1fg: "#5c93c5",
  blueMinus2bg: "#003f5e",
  blueMinus2fg: "#709bc3",
  blueL: "#74adf5",
  cyanL: "#6ccec0",
  greenMinus1bg: "#1d3732",
  greenMinus1fg: "#8c9a43",
  greenMinus2bg: "#2f4321",
  greenMinus2fg: "#97a35f",
  greenL: "#b3c34d",
  whitespaceTrailingForeground: "#992700",
  orgHabitOverdueFutureFaceBackground: "#a7020a",
  orgHabitOverdueFaceForeground: "#a7020a",
  orgHabitAlertFutureFaceBackground: "#866300",
  orgHabitAlertFaceForeground: "#866300",
  orgHabitReadyFutureFaceBackground: "#5b7300",
  orgHabitReadyFaceBackground: "#5b7300",
  orgHabitClearFutureFaceBackground: "#0061a8",
  orgHabitClearFaceForeground: "#74adf5",
  orgHabitClearFaceBackground: "#0061a8",
  magitDiffHunkHeadingSelectionBackground: "#263d3f",
  hiRedBBackground: "#3d3235",
  hiRedBForeground: "#cf5e50",
  hiGreenBBackground: "#263e34",
  hiGreenBForeground: "#8d9b44",
  hiBlueBBackground: "#054048",
  hiBlueBForeground: "#56a29b",
  hiBlueBackground: "#03384b",
  hiBlueForeground: "#6e96ba",
  hiGreenBackground: "#1f3934",
  hiGreenForeground: "#919d60",
  hiPinkBackground: "#2c3140",
  hiPinkForeground: "#ba7691",
  hiYellowBackground: "#293834",
  hiYellowForeground: "#ab955f",
  verticalBorderForeground: "#284953",
  separatorLineBackground: "#284953",
  modeLineInactiveUnderline: "#284953",
  modeLineUnderline: "#284953",
  helpKeyBindingBoxColor: "#284953",
  childFrameBorderBackground: "#284953",
};

defineSolarizedTheme("solarized-dark", "The dark variant of the Solarized colour theme", c);
