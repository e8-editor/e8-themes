// SPDX-License-Identifier: GPL-3.0-or-later
//
// The solarized-dark-high-contrast theme for E8.
//
// A port to E8 of solarized-dark-high-contrast-theme.el from solarized-theme 2.2.0 (https://github.com/bbatsov/solarized-emacs), at commit c3efdaa7ff69, v2.2.0-13-gc3efdaa. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  base03: "#002732",
  base02: "#01323d",
  base01: "#62787f",
  base00: "#60767e",
  base0: "#8d9fa1",
  base1: "#9eacac",
  base2: "#faf3e0",
  base3: "#ffffee",
  yellow: "#c49619",
  orange: "#db5823",
  red: "#ec423a",
  magenta: "#e2468f",
  violet: "#7a7ed2",
  blue: "#3c98e0",
  cyan: "#3cafa5",
  green: "#93a61a",
  yellow1bg: "#273430",
  yellow1fg: "#bb9a4c",
  yellow2bg: "#484224",
  yellow2fg: "#bba165",
  yellowD: "#936d00",
  yellowL: "#f3be51",
  red1bg: "#2f2c31",
  red1fg: "#dc6a5a",
  red2bg: "#582b29",
  red2fg: "#d77e6f",
  redL: "#ff7254",
  magenta2bg: "#512c46",
  magenta2fg: "#cd809f",
  magentaL: "#ff75ab",
  blue1bg: "#023447",
  blue1fg: "#649bce",
  blue2bg: "#004363",
  blue2fg: "#78a3cb",
  blueL: "#7ebaff",
  cyanL: "#77dece",
  green1bg: "#1e3531",
  green1fg: "#97a54d",
  green2bg: "#354725",
  green2fg: "#9eaa66",
  greenL: "#c3d255",
  whitespaceTrailingForeground: "#a72e01",
  orgHabitOverdueFutureFaceBackground: "#ae1212",
  orgHabitOverdueFaceForeground: "#ae1212",
  orgHabitAlertFutureFaceBackground: "#936d00",
  orgHabitAlertFaceForeground: "#936d00",
  orgHabitReadyFutureFaceBackground: "#687f00",
  orgHabitReadyFaceBackground: "#687f00",
  orgHabitClearFutureFaceBackground: "#0069b0",
  orgHabitClearFaceForeground: "#7ebaff",
  orgHabitClearFaceBackground: "#0069b0",
  magitDiffHunkHeadingSelectionBackground: "#233b3c",
  hiRedBBackground: "#3d3134",
  hiRedBForeground: "#de6b5b",
  hiGreenBBackground: "#273d33",
  hiGreenBForeground: "#9aa850",
  hiBlueBBackground: "#083f47",
  hiBlueBForeground: "#62afa7",
  hiBlueBackground: "#053649",
  hiBlueForeground: "#7aa2c6",
  hiGreenBackground: "#1f3733",
  hiGreenForeground: "#9da96b",
  hiPinkBackground: "#2b2f3f",
  hiPinkForeground: "#c7829d",
  hiYellowBackground: "#293632",
  hiYellowForeground: "#b8a16a",
  verticalBorderForeground: "#284953",
  separatorLineBackground: "#284953",
  modeLineInactiveUnderline: "#284953",
  modeLineUnderline: "#284953",
  helpKeyBindingBoxColor: "#284953",
  childFrameBorderBackground: "#284953",
};

defineSolarizedTheme("solarized-dark-high-contrast", "The dark variant of the Solarized colour theme with slightly higher text contrast", c);
