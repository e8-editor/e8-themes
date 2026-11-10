// SPDX-License-Identifier: MIT
//
// The gruvbox-light-hard theme for E8.
//
// A port to E8 of gruvbox-light-hard-theme.el from gruvbox-theme 1.30.3 (https://github.com/greduan/emacs-theme-gruvbox), at commit 351a3ced876f, 1.30.4-1-g351a3ce. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
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
  dark0: "#fbf1c7",
  dark0Soft: "#f2e5bc",
  dark1: "#ebdbb2",
  dark2: "#d5c4a1",
  dark3: "#bdae93",
  dark4: "#a89984",
  light0: "#282828",
  light1: "#3c3836",
  light2: "#504945",
  light3: "#665c54",
  light4: "#7c6f64",
  brightRed: "#9d0006",
  brightGreen: "#79740e",
  brightYellow: "#b57614",
  brightBlue: "#076678",
  brightPurple: "#8f3f71",
  brightAqua: "#427b58",
  brightOrange: "#af3a03",
  neutralRed: "#9d0006",
  fadedRed: "#cc241d",
  fadedGreen: "#98971a",
  fadedYellow: "#d79921",
  fadedBlue: "#458588",
  fadedAqua: "#689d6a",
  fadedOrange: "#d65d0e",
  delimiterThree: "#8ec07c",
  black: "#000000",
  lightblue4: "#66999d",
  ediffCurrentDiffA: "#fbc6a3",
  ediffCurrentDiffB: "#e3f3b5",
  ediffCurrentDiffC: "#fadccc",
  ediffCurrentDiffAncestor: "#ccc6d1",
  ediffFineDiffA: "#fbb091",
  ediffFineDiffB: "#b6f691",
  ediffFineDiffC: "#fbb0d6",
  ediffFineDiffAncestor: "#b6b0d6",
  tabBarBackground: "#f9f5d7",
  tabBarTabInactiveBackground: "#f9f5d7",
  isearchFailForeground: "#f9f5d7",
  lazyHighlightForeground: "#f9f5d7",
  isearchForeground: "#f9f5d7",
  fringeBackground: "#f9f5d7",
  defaultBackground: "#f9f5d7",
};

defineGruvboxTheme("gruvbox-light-hard", "A retro-groove colour theme (light version, hard contrast)", c);
