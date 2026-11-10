// SPDX-License-Identifier: MIT
//
// The gruvbox-dark-hard theme for E8.
//
// A port to E8 of gruvbox-dark-hard-theme.el from gruvbox-theme 1.30.3 (https://github.com/greduan/emacs-theme-gruvbox), at commit 351a3ced876f, 1.30.4-1-g351a3ce. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Jason Milkins
// Copyright (c) 2013 Lee Machin
// Copyright (c) 2013-2016 Eduardo Lavaque
// Copyright (c) 2016-2022 Jason Milkins
// Copyright (c) 2017-2018 Martijn Terpstra
// Copyright (C) 2026 The E8 contributors
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { defineGruvboxTheme } from "gruvbox";

/** The colours, by the names the upstream gives them. */
const c = {
  dark0: "#282828",
  dark0Soft: "#32302f",
  dark1: "#3c3836",
  dark2: "#504945",
  dark3: "#665c54",
  dark4: "#7c6f64",
  light0: "#fdf4c1",
  light1: "#ebdbb2",
  light2: "#d5c4a1",
  light3: "#bdae93",
  light4: "#a89984",
  brightRed: "#fb4933",
  brightGreen: "#b8bb26",
  brightYellow: "#fabd2f",
  brightBlue: "#83a598",
  brightPurple: "#d3869b",
  brightAqua: "#8ec07c",
  brightOrange: "#fe8019",
  neutralRed: "#fb4934",
  fadedRed: "#cc241d",
  fadedGreen: "#98971a",
  fadedYellow: "#d79921",
  fadedBlue: "#458588",
  fadedAqua: "#689d6a",
  fadedOrange: "#d65d0e",
  delimiterThree: "#8ec07c",
  black: "#000000",
  lightblue4: "#66999d",
  ediffCurrentDiffA: "#4f2121",
  ediffCurrentDiffB: "#243c24",
  ediffCurrentDiffC: "#4f214f",
  ediffCurrentDiffAncestor: "#21214f",
  ediffFineDiffA: "#761919",
  ediffFineDiffB: "#1c691c",
  ediffFineDiffC: "#761976",
  ediffFineDiffAncestor: "#12129d",
  tabBarBackground: "#1d2021",
  tabBarTabInactiveBackground: "#1d2021",
  isearchFailForeground: "#1d2021",
  lazyHighlightForeground: "#1d2021",
  isearchForeground: "#1d2021",
  fringeBackground: "#1d2021",
  defaultBackground: "#1d2021",
};

defineGruvboxTheme("gruvbox-dark-hard", "A retro-groove colour theme (dark version, hard contrast)", c);
