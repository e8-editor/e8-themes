// SPDX-License-Identifier: MIT
//
// nord-theme's tests, with ERT: loading the theme gives faces Nord's
// colours, its options change the region and the inactive mode lines, and
// disabling it takes them back. `make test` runs them in e8 --batch, as CI
// does.

import { ertDeftest, shouldEqual } from "ert";

const color = (face: string, attribute: string) => String(e8.faceAttribute(face, `:${attribute}`)).toLowerCase();

ertDeftest("nord-theme-gives-faces-nords-colours-and-disabling-takes-them-back", () => {
  const foreground = color("default", "foreground");
  e8.call("load-theme", "nord", true);
  shouldEqual(e8.variable("custom-enabled-themes"), ["nord"]);
  // Polar Night, Snow Storm and Frost.
  shouldEqual(color("default", "background"), "#2e3440");
  shouldEqual(color("default", "foreground"), "#d8dee9");
  shouldEqual(color("org-level-1", "foreground"), "#8fbcbb");
  shouldEqual(color("org-verbatim", "foreground"), "#8fbcbb");
  shouldEqual(color("font-lock-keyword-face", "foreground"), "#81a1c1");
  shouldEqual(color("font-lock-comment-face", "foreground"), "#616e88");
  shouldEqual(color("region", "background"), "#434c5e");
  e8.call("disable-theme", "nord");
  shouldEqual(e8.variable("custom-enabled-themes"), []);
  shouldEqual(color("default", "foreground"), foreground);
  shouldEqual(color("default", "background"), "unspecified");
});

ertDeftest("nord-theme-options-change-the-region-and-inactive-mode-lines", () => {
  // An E8 before 0.5.3 does not load a theme loaded before again, so its
  // options take effect only in a session that has not loaded it.
  if (!("load" in e8)) return;
  // Set before the theme loads, as nord-theme.el reads them.
  e8.setVariable("nord-region-highlight", "frost");
  e8.setVariable("nord-uniform-mode-lines", true);
  try {
    e8.call("load-theme", "nord", true);
    shouldEqual(color("region", "background"), "#88c0d0");
    shouldEqual(color("region", "foreground"), "#2e3440");
    shouldEqual(color("mode-line-inactive", "background"), "#4c566a");
  } finally {
    e8.call("disable-theme", "nord");
    e8.setVariable("nord-region-highlight", null);
    e8.setVariable("nord-uniform-mode-lines", false);
  }
});
