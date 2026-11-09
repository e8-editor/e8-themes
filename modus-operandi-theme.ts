// SPDX-License-Identifier: GPL-3.0-or-later
//
// The modus-operandi theme for E8.
//
// A port to E8 of modus-themes.el 4.4.0, by Protesilaos Stavrou, as GNU Emacs 30 ships it,
// written by tools/port-themes.el from the faces Emacs gives the theme, for
// the faces E8 and its ports draw. It is not the upstream authors' work as
// they published it, and they do not endorse it.
//
// Copyright (C) 2019-2025 Free Software Foundation, Inc.
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

import { defineModusThemesTheme } from "modus-themes";

/** The colours, by the names the upstream gives them. */
const c = {
  bgMain: "#ffffff",
  bgDim: "#f2f2f2",
  fgMain: "#000000",
  fgDim: "#595959",
  fgAlt: "#193668",
  bgActive: "#c4c4c4",
  bgInactive: "#e0e0e0",
  border: "#9f9f9f",
  red: "#a60000",
  redWarmer: "#972500",
  redCooler: "#a0132f",
  redFaint: "#7f0000",
  redIntense: "#d00000",
  green: "#006800",
  greenCooler: "#00663f",
  greenFaint: "#2a5045",
  yellow: "#6f5500",
  yellowWarmer: "#884900",
  yellowFaint: "#624416",
  blue: "#0031a9",
  blueWarmer: "#3548cf",
  blueCooler: "#0000b0",
  blueIntense: "#0000ff",
  magenta: "#721045",
  magentaWarmer: "#8f0075",
  magentaCooler: "#531ab6",
  magentaFaint: "#7c318f",
  cyan: "#005e8b",
  cyanCooler: "#005f5f",
  bgRedIntense: "#ff8f88",
  bgYellowIntense: "#f3d000",
  bgCyanIntense: "#a4d5f9",
  bgRedSubtle: "#ffcfbf",
  bgMagentaSubtle: "#ffddff",
  bgCyanSubtle: "#bfefff",
  bgYellowNuanced: "#f8f0d0",
  bgCyanNuanced: "#e0f2fa",
  bgGraphRed0: "#ef7969",
  bgGraphRed1: "#ffaab4",
  bgGraphGreen0: "#2fe029",
  bgGraphGreen1: "#75ef30",
  bgGraphYellow0: "#ffcf00",
  bgGraphYellow1: "#f9ff00",
  bgGraphBlue0: "#7f90ff",
  bgGraphBlue1: "#9fc6ff",
  bgCompletion: "#c0deff",
  bgHover: "#b2e4dc",
  bgHoverSecondary: "#f5d0a0",
  bgHlLine: "#dae5ec",
  bgRegion: "#bdbdbd",
  bgModeLineActive: "#c8c8c8",
  borderModeLineActive: "#5a5a5a",
  bgModeLineInactive: "#e6e6e6",
  fgModeLineInactive: "#585858",
  borderModeLineInactive: "#a3a3a3",
  modelineErr: "#7f0000",
  modelineInfo: "#002580",
  bgTabBar: "#dfdfdf",
  bgTabOther: "#c2c2c2",
  bgAdded: "#c1f2d1",
  bgAddedFaint: "#d8f8e1",
  bgAddedRefine: "#aee5be",
  fgAdded: "#005000",
  fgAddedIntense: "#006700",
  bgChanged: "#ffdfa9",
  bgChangedFaint: "#ffefbf",
  bgChangedRefine: "#fac090",
  fgChanged: "#553d00",
  fgChangedIntense: "#655000",
  bgRemoved: "#ffd8d5",
  bgRemovedFaint: "#ffe9e9",
  bgRemovedRefine: "#f3b5af",
  fgRemoved: "#8f1313",
  fgRemovedIntense: "#aa2222",
  bgDiffContext: "#f3f3f3",
  bgParenMatch: "#5fcfff",
  bgParenExpression: "#efd3f5",
  cursor: "#000000",
  keybind: "#0000b0",
  identifier: "#7a4f2f",
  underlineWarning: "#808000",
  underlineNote: "#008899",
  fgActiveArgument: "#884900",
  fgActiveValue: "#3f578f",
  comment: "#595959",
  docstring: "#2a5045",
  accent0: "#0031a9",
  accent2: "#005e8b",
  accent3: "#a60000",
  fgMarkDelete: "#a60000",
  bgTermBlack: "#000000",
  bgTermBlackBright: "#595959",
  bgTermWhite: "#a6a6a6",
  bgTermWhiteBright: "#ffffff",
  fgHeading3: "#193668",
  fgHeading7: "#3f578f",
  hiAquamarineBackground: "#ffffff",
  hiAquamarineForeground: "#227f9f",
  hiBlueBackground: "#ffffff",
  hiBlueForeground: "#3366dd",
  hiGreenBackground: "#ffffff",
  hiGreenForeground: "#008a00",
  hiPinkBackground: "#ffffff",
  hiPinkForeground: "#bd30aa",
  hiRedBBackground: "#ffffff",
  hiRedBForeground: "#dd0000",
  hiSalmonBackground: "#ffffff",
  hiSalmonForeground: "#bf555a",
  hiYellowBackground: "#ffffff",
  hiYellowForeground: "#af6400",
};

defineModusThemesTheme("modus-operandi", "Elegant, highly legible theme with a white background.", c);
