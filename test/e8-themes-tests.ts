// SPDX-License-Identifier: GPL-3.0-or-later
//
// e8-themes' tests, with ERT: each theme loads, gives faces its colours
// and gives them back when disabled; the Modus themes have Emacs's
// colours; and e8-themes-select shows each theme as the selection moves,
// keeps the one chosen, or goes back. `make test` runs them in
// e8 --batch, as CI does.

import { ertDeftest, should, shouldEqual } from "ert";
import * as custom from "custom";
import { availableThemes, themeInfo } from "e8-themes";

/** Runs one of e8-themes' commands, which e8.d.ts does not declare. */
const run = (command: string) => e8.call(command as unknown as e8.DefinedCommand);
const color = (face: string, attribute: string) => e8.faceAttribute(face, `:${attribute}`);
const enabled = () => e8.variable("custom-enabled-themes");

/** The themes this repository holds, `make test` running in its root. */
function ours(): string[] {
  return availableThemes().filter((t) => e8.fileExists(`${t}-theme.ts`));
}

/** The text of BUFFER. */
const text = (buffer: string): string => e8.withCurrentBuffer(buffer, () => e8.bufferSubstringNoProperties(e8.pointMin(), e8.pointMax()));

/** Runs FN, then disables every theme and closes a chooser left open. */
function clean(fn: () => void): void {
  try {
    fn();
  } finally {
    if (e8.getBuffer("*Themes*")) run("e8-themes-quit");
    for (const t of (enabled() as string[]) ?? []) e8.call("disable-theme", t);
  }
}

ertDeftest("e8-themes-each-theme-loads-and-gives-its-faces-back", () => {
  const themes = ours();
  should(themes.length >= 7, `the themes: ${themes.join(", ")}`);
  const foreground = color("default", "foreground");
  const keyword = color("font-lock-keyword-face", "foreground");
  clean(() => {
    for (const theme of themes) {
      e8.call("load-theme", theme, true);
      shouldEqual(enabled(), [theme]);
      should(typeof color("default", "background") === "string" && color("default", "background") !== "unspecified");
      e8.call("disable-theme", theme);
      shouldEqual(enabled(), []);
      shouldEqual(color("default", "foreground"), foreground);
      shouldEqual(color("font-lock-keyword-face", "foreground"), keyword);
    }
  });
});

ertDeftest("e8-themes-modus-has-emacss-colours", () => {
  clean(() => {
    e8.call("load-theme", "modus-vivendi", true);
    shouldEqual(color("default", "background"), "#000000");
    shouldEqual(color("default", "foreground"), "#ffffff");
    shouldEqual(color("font-lock-keyword-face", "foreground"), "#b6a0ff");
    // The faces Modus's own inherit from come too.
    shouldEqual(color("font-lock-keyword-face", "inherit"), "modus-themes-bold");
    e8.call("disable-theme", "modus-vivendi");
    e8.call("load-theme", "modus-operandi", true);
    shouldEqual(color("default", "background"), "#ffffff");
    shouldEqual(color("font-lock-keyword-face", "foreground"), "#531ab6");
    shouldEqual(color("region", "background"), "#bdbdbd");
  });
});

ertDeftest("e8-themes-tells-dark-themes-from-light", () => {
  clean(() => {
    const vivendi = themeInfo("modus-vivendi")!;
    const operandi = themeInfo("modus-operandi")!;
    shouldEqual(vivendi.dark, true);
    shouldEqual(operandi.dark, false);
    shouldEqual(vivendi.background, "#000000");
    shouldEqual(vivendi.swatches.length, 6);
    // An E8 before 0.5.2 has no customThemeSettings, and so no documentation to show.
    if ("customThemeSettings" in custom) should(vivendi.doc.length > 0);
    // Reading a theme loads it without enabling it.
    shouldEqual(enabled(), []);
  });
});

ertDeftest("e8-themes-select-shows-each-theme-and-goes-back", () => {
  clean(() => {
    e8.call("load-theme", "wombat", true);
    const windows = e8.windowList().length;
    run("e8-themes-select");
    shouldEqual(e8.bufferName(), "*Themes*");
    shouldEqual(e8.windowList().length, 2);
    // The selection starts on the theme enabled, which stays shown.
    shouldEqual(enabled(), ["wombat"]);
    should(text("*Themes*").includes("  wombat  ✓"));
    run("e8-themes-first");
    const shown = (enabled() as string[])[0];
    should(shown !== "wombat");
    shouldEqual((enabled() as string[]).length, 1);
    should(text("*Theme Sample*").includes(shown));
    run("e8-themes-next");
    should((enabled() as string[])[0] !== shown);
    run("e8-themes-quit");
    shouldEqual(enabled(), ["wombat"]);
    shouldEqual(e8.windowList().length, windows);
    shouldEqual(e8.getBuffer("*Themes*"), undefined);
  });
});

ertDeftest("e8-themes-select-keeps-the-theme-chosen", () => {
  clean(() => {
    run("e8-themes-select");
    run("e8-themes-last");
    const last = (enabled() as string[])[0];
    run("e8-themes-choose");
    shouldEqual(enabled(), [last]);
    shouldEqual(e8.getBuffer("*Themes*"), undefined);
  });
});

ertDeftest("e8-themes-select-filters-dark-and-light", () => {
  clean(() => {
    run("e8-themes-select");
    const list = () => text("*Themes*");
    should(list().includes(" Dark\n") && list().includes(" Light\n"));
    run("e8-themes-cycle-filter");
    should(list().includes(" Dark\n") && !list().includes(" Light\n"));
    should(!list().includes("modus-operandi "));
    run("e8-themes-cycle-filter");
    should(!list().includes(" Dark\n") && list().includes(" Light\n"));
    // The selection moved onto a light theme, and shows it.
    shouldEqual(themeInfo((enabled() as string[])[0])!.dark, false);
    run("e8-themes-cycle-filter");
    should(list().includes(" Dark\n") && list().includes(" Light\n"));
  });
});

ertDeftest("e8-themes-catppuccin-changes-flavour", () => {
  clean(() => {
    e8.call("load-theme", "catppuccin", true);
    shouldEqual(color("default", "background"), "#1e1e2e");
    e8.call("catppuccin-load-flavor" as unknown as e8.DefinedCommand, "latte");
    shouldEqual(color("default", "background"), "#eff1f5");
    shouldEqual(enabled(), ["catppuccin"]);
    e8.setVariable("catppuccin-flavor", "mocha");
    run("catppuccin-reload");
    shouldEqual(color("default", "background"), "#1e1e2e");
  });
});
