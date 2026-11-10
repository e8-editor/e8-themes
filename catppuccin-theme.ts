// SPDX-License-Identifier: MIT
//
// The Catppuccin theme for E8, in the flavour catppuccin-flavor names, as upstream has it; catppuccin-latte and the rest are each flavour as a theme of its own.
//
// A port to E8 of catppuccin-theme.el from catppuccin-theme 1.0.0 (https://github.com/catppuccin/emacs), at commit 56c3cbe1fee8, V0.2.0-alpha-200-g56c3cbe. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: nyxkrage
// Copyright 2022-present Catppuccin, All rights reserved
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

import { enableTheme } from "custom";
import { defineCatppuccinTheme, flavors } from "catppuccin";

e8.defineVariable({
  name: "catppuccin-flavor",
  doc: 'The flavour of the catppuccin theme: "mocha", "macchiato", "frappe" or "latte". catppuccin-reload shows a change.',
  value: "mocha",
});

/** Defines catppuccin in the flavour catppuccin-flavor names. */
function define(): void {
  const flavor = String(e8.variable("catppuccin-flavor"));
  defineCatppuccinTheme("catppuccin", "Catppuccin, in the flavour catppuccin-flavor names", flavors[flavor] ?? flavors.mocha);
}

define();

e8.defineCommand({
  name: "catppuccin-reload",
  doc: "Define catppuccin again in the flavour catppuccin-flavor names, and enable it.",
  run: () => {
    define();
    enableTheme("catppuccin");
  },
});
e8.defineCommand({
  name: "catppuccin-load-flavor",
  doc: "Set catppuccin-flavor to FLAVOR and show catppuccin in it.",
  params: [{ name: "flavor", prompt: "Flavor: ", collection: () => Object.keys(flavors), requireMatch: true }],
  run: (flavor) => {
    e8.setVariable("catppuccin-flavor", flavor);
    define();
    enableTheme("catppuccin");
  },
});
