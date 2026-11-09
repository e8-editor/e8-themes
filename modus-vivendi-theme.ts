// SPDX-License-Identifier: GPL-3.0-or-later
//
// The modus-vivendi theme for E8.
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
  bgMain: "#000000",
  bgDim: "#1e1e1e",
  fgMain: "#ffffff",
  fgDim: "#989898",
  fgAlt: "#c6daff",
  bgActive: "#535353",
  bgInactive: "#303030",
  border: "#646464",
  red: "#ff5f59",
  redWarmer: "#ff6b55",
  redCooler: "#ff7f9f",
  redFaint: "#ff9580",
  redIntense: "#ff5f5f",
  green: "#44bc44",
  greenCooler: "#00c06f",
  greenFaint: "#88ca9f",
  yellow: "#d0bc00",
  yellowWarmer: "#fec43f",
  yellowFaint: "#d2b580",
  blue: "#2fafff",
  blueWarmer: "#79a8ff",
  blueCooler: "#00bcff",
  blueIntense: "#338fff",
  magenta: "#feacd0",
  magentaWarmer: "#f78fe7",
  magentaCooler: "#b6a0ff",
  magentaFaint: "#caa6df",
  cyan: "#00d3d0",
  cyanCooler: "#6ae4b9",
  bgRedIntense: "#9d1f1f",
  bgYellowIntense: "#7a6100",
  bgCyanIntense: "#2266ae",
  bgRedSubtle: "#620f2a",
  bgMagentaSubtle: "#552f5f",
  bgCyanSubtle: "#004065",
  bgYellowNuanced: "#381d0f",
  bgCyanNuanced: "#042837",
  bgGraphRed0: "#b52c2c",
  bgGraphRed1: "#702020",
  bgGraphGreen0: "#0fed00",
  bgGraphGreen1: "#007800",
  bgGraphYellow0: "#f1e00a",
  bgGraphYellow1: "#b08940",
  bgGraphBlue0: "#2fafef",
  bgGraphBlue1: "#1f2f8f",
  bgCompletion: "#2f447f",
  bgHover: "#45605e",
  bgHoverSecondary: "#654a39",
  bgHlLine: "#2f3849",
  bgRegion: "#5a5a5a",
  bgModeLineActive: "#505050",
  borderModeLineActive: "#959595",
  bgModeLineInactive: "#2d2d2d",
  fgModeLineInactive: "#969696",
  borderModeLineInactive: "#606060",
  modelineErr: "#ffa9bf",
  modelineInfo: "#9fefff",
  bgTabBar: "#313131",
  bgTabOther: "#545454",
  bgAdded: "#00381f",
  bgAddedFaint: "#002910",
  bgAddedRefine: "#034f2f",
  fgAdded: "#a0e0a0",
  fgAddedIntense: "#80e080",
  bgChanged: "#363300",
  bgChangedFaint: "#2a1f00",
  bgChangedRefine: "#4a4a00",
  fgChanged: "#efef80",
  fgChangedIntense: "#c0b05f",
  bgRemoved: "#4f1119",
  bgRemovedFaint: "#380a0f",
  bgRemovedRefine: "#781a1f",
  fgRemoved: "#ffbfbf",
  fgRemovedIntense: "#ff9095",
  bgDiffContext: "#1a1a1a",
  bgParenMatch: "#2f7f9f",
  bgParenExpression: "#453040",
  cursor: "#ffffff",
  keybind: "#00bcff",
  identifier: "#d2b580",
  underlineWarning: "#d0bc00",
  underlineNote: "#00d3d0",
  fgActiveArgument: "#dfaf7a",
  fgActiveValue: "#6ae4b9",
  comment: "#989898",
  docstring: "#9ac8e0",
  accent0: "#00bcff",
  accent2: "#6ae4b9",
  accent3: "#d0bc00",
  fgMarkDelete: "#ff7f9f",
  bgTermBlack: "#000000",
  bgTermBlackBright: "#595959",
  bgTermWhite: "#a6a6a6",
  bgTermWhiteBright: "#ffffff",
  fgHeading3: "#82b0ec",
  fgHeading7: "#9ac8e0",
  hiAquamarineBackground: "#000000",
  hiAquamarineForeground: "#66cbdc",
  hiBlueBackground: "#000000",
  hiBlueForeground: "#aaccff",
  hiGreenBackground: "#000000",
  hiGreenForeground: "#66dd66",
  hiPinkBackground: "#000000",
  hiPinkForeground: "#ff88ee",
  hiRedBBackground: "#000000",
  hiRedBForeground: "#f06666",
  hiSalmonBackground: "#000000",
  hiSalmonForeground: "#e08a50",
  hiYellowBackground: "#000000",
  hiYellowForeground: "#faea00",
};

defineModusThemesTheme("modus-vivendi", "Elegant, highly legible theme with a black background.", c);
