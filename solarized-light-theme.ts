// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-light theme for E8.
//
// A port to E8 of solarized-light-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#fdf6e3",
  base02: "#eee8d5",
  base01: "#93a1a1",
  base00: "#839496",
  base0: "#657b83",
  base1: "#586e75",
  base2: "#073642",
  base3: "#002b36",
  yellow: "#b58900",
  orange: "#cb4b16",
  red: "#dc322f",
  magenta: "#d33682",
  violet: "#6c71c4",
  blue: "#268bd2",
  cyan: "#2aa198",
  green: "#859900",
  yellow1bg: "#f8e8c6",
  yellow1fg: "#876d26",
  yellow2bg: "#f1d49b",
  yellow2fg: "#766634",
  yellowD: "#866300",
  yellowL: "#e1af4b",
  red1bg: "#ffdec8",
  red1fg: "#a33c35",
  red2bg: "#ffb9a1",
  red2fg: "#8e433d",
  redL: "#ff6849",
  magenta2bg: "#fdbac6",
  magenta2fg: "#854568",
  magentaL: "#ff699e",
  blue1bg: "#e7e8e4",
  blue1fg: "#1e6fa2",
  blue2bg: "#c3d5e9",
  blue2fg: "#246792",
  blueL: "#74adf5",
  cyanL: "#6ccec0",
  green1bg: "#efeac7",
  green1fg: "#657827",
  green2bg: "#dbdb9c",
  green2fg: "#5b6e35",
  greenL: "#b3c34d",
  whitespaceTrailingForeground: "#fb7640",
  orgHabitOverdueFutureFaceBackground: "#ff6849",
  orgHabitOverdueFaceForeground: "#ff6849",
  orgHabitAlertFutureFaceBackground: "#e1af4b",
  orgHabitAlertFaceForeground: "#e1af4b",
  orgHabitReadyFutureFaceBackground: "#b3c34d",
  orgHabitReadyFaceBackground: "#b3c34d",
  orgHabitClearFutureFaceBackground: "#74adf5",
  orgHabitClearFaceForeground: "#0061a8",
  orgHabitClearFaceBackground: "#74adf5",
  magitDiffHunkHeadingSelectionBackground: "#ebdec2",
  hiRedBBackground: "#fed2bc",
  hiRedBForeground: "#bc4f44",
  hiGreenBBackground: "#e7e3ba",
  hiGreenBForeground: "#7c8c38",
  hiBlueBBackground: "#d9e5d4",
  hiBlueBForeground: "#40928d",
  hiBlueBackground: "#e4e5e1",
  hiBlueForeground: "#4d7ca3",
  hiGreenBackground: "#ede8c4",
  hiGreenForeground: "#74834b",
  hiPinkBackground: "#fadcd4",
  hiPinkForeground: "#9b5d7b",
  hiYellowBackground: "#f5e5c4",
  hiYellowForeground: "#8e7b4a",
  verticalBorderForeground: "#cecfc3",
  separatorLineBackground: "#cecfc3",
  modeLineInactiveUnderline: "#cecfc3",
  modeLineUnderline: "#cecfc3",
  helpKeyBindingBoxColor: "#cecfc3",
  childFrameBorderBackground: "#cecfc3",
};

defineSolarizedTheme("solarized-light", "The light variant of the Solarized colour theme", c);
