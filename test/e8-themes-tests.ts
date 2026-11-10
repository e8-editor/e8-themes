// SPDX-License-Identifier: GPL-3.0-or-later
//
// e8-themes' tests, with ERT: each theme loads, gives faces its colours
// and gives them back when disabled; the index, sources.json and the theme
// files agree, and every theme is credited and readable; the Modus themes
// have their upstream's colours; and e8-themes-select shows each theme as
// the selection moves, narrows as you type, keeps the one chosen, or goes
// back. `make test` runs them in e8 --batch, as CI does.

import { ertDeftest, should, shouldEqual } from "ert";
import { availableThemes, credit, matches, setQuery, themeInfo } from "e8-themes";
import { THEMES } from "e8-themes-index";

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

/** The text of FILE. */
function readFile(file: string): string {
  const temp = e8.getBufferCreate(" *e8-themes-tests*");
  try {
    return e8.withCurrentBuffer(temp, () => {
      e8.deleteRegion(e8.pointMin(), e8.pointMax());
      e8.insertFileContents(file);
      return e8.bufferSubstringNoProperties(e8.pointMin(), e8.pointMax());
    });
  } finally {
    e8.call("kill-buffer", " *e8-themes-tests*");
  }
}

/** The names of the themes the chooser's list shows, in order. */
const listed = (): string[] =>
  text("*Themes*")
    .split("\n")
    .map((l) => /^ [▸ ] .{11} {2}(\S+)/u.exec(l)?.[1])
    .filter((n): n is string => n !== undefined);

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
  should(themes.length >= 150, `${themes.length} themes`);
  const foreground = color("default", "foreground");
  const keyword = color("font-lock-keyword-face", "foreground");
  clean(() => {
    for (const theme of themes) {
      e8.call("load-theme", theme, true);
      shouldEqual(enabled(), [theme]);
      const bg = color("default", "background");
      should(typeof bg === "string" && bg !== "unspecified", `${theme} gives the default face a background`);
      const entry = THEMES.find((t) => t.name === theme);
      if (entry) shouldEqual(String(bg).toLowerCase(), entry.background.toLowerCase(), `${theme}'s background is the index's`);
      e8.call("disable-theme", theme);
      shouldEqual(enabled(), []);
      shouldEqual(color("default", "foreground"), foreground);
      shouldEqual(color("font-lock-keyword-face", "foreground"), keyword);
    }
  });
});

ertDeftest("e8-themes-index-sources-and-files-agree", () => {
  const files = ours().filter((t) => t !== "catppuccin");
  const names = THEMES.map((t) => t.name);
  shouldEqual([...names].sort(), [...files].sort(), "every theme file has an index entry, and every entry a file");
  const sources = JSON.parse(readFile("sources.json")) as {
    theme: string;
    repository: string;
    commit: string;
    blob: string;
    licence: string;
    authors: string[];
    copyright: string[];
    file: string;
  }[];
  shouldEqual(sources.map((s) => s.theme).sort(), [...names].sort(), "sources.json names the same themes");
  for (const s of sources) {
    should(/^https:\/\//.test(s.repository), `${s.theme} has a repository`);
    should(/^[0-9a-f]{40}$/.test(s.commit) || /^emacs-[0-9.]+$/.test(s.commit), `${s.theme} has a commit`);
    should(/^[0-9a-f]{40}$/.test(s.blob), `${s.theme} has its file's git object`);
    should(s.licence === "MIT" || s.licence === "GPL-3.0-or-later", `${s.theme}'s licence`);
    should(s.authors.length > 0, `${s.theme} is credited to its authors`);
    should(s.copyright.length > 0, `${s.theme} keeps its copyright`);
    should(s.file.endsWith("-theme.el"), `${s.theme} names its upstream file`);
  }
});

ertDeftest("e8-themes-every-theme-is-readable", () => {
  for (const t of THEMES) {
    should(t.contrast.text >= 4.0, `${t.name}'s text at ${t.contrast.text}:1`);
    should(t.contrast.code >= 2.0, `${t.name}'s code at ${t.contrast.code}:1`);
    should(t.contrast.comments >= 1.8, `${t.name}'s comments at ${t.contrast.comments}:1`);
  }
  // Repeats of a theme here from its own authors are left out.
  for (const repeat of ["doom-gruvbox", "doom-nord", "doom-dracula", "doom-zenburn", "solarized-gruvbox-dark"]) {
    should(!THEMES.some((t) => t.name === repeat), `${repeat} is left out`);
  }
});

ertDeftest("e8-themes-modus-has-its-upstreams-colours", () => {
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

ertDeftest("e8-themes-tells-dark-themes-from-light-and-credits-them", () => {
  clean(() => {
    const vivendi = themeInfo("modus-vivendi")!;
    const operandi = themeInfo("modus-operandi")!;
    shouldEqual(vivendi.dark, true);
    shouldEqual(operandi.dark, false);
    shouldEqual(vivendi.background, "#000000");
    shouldEqual(vivendi.swatches.length, 6);
    shouldEqual(vivendi.collection, "Modus");
    should(vivendi.doc.length > 0);
    // From the index: reading it loads no theme.
    shouldEqual(enabled(), []);
    const tokyo = credit(themeInfo("doom-tokyo-night")!);
    should(tokyo[0].includes("FosterHangdaan") && tokyo[0].includes("enkia"), tokyo[0]);
    should(/doom-themes .* at [0-9a-f]{7}, MIT/.test(tokyo[1]), tokyo[1]);
  });
});

ertDeftest("e8-themes-matches-words-anywhere", () => {
  const tokyo = themeInfo("doom-tokyo-night")!;
  should(matches(tokyo, "tokyo"));
  should(matches(tokyo, "doom dark"));
  should(matches(tokyo, "Foster"));
  should(!matches(tokyo, "light"));
  should(!matches(tokyo, "gruvbox"));
  // Words match at their start: "ef" is not in "default".
  should(matches(themeInfo("ef-summer")!, "ef light"));
  should(!matches(themeInfo("adwaita")!, "ef"));
});

ertDeftest("e8-themes-select-shows-each-theme-and-goes-back", () => {
  clean(() => {
    e8.call("load-theme", "wombat", true);
    const windows = e8.windowList().length;
    run("e8-themes-select");
    shouldEqual(e8.bufferName(), "*Themes*");
    shouldEqual(e8.windowList().length, 2);
    should(listed().length >= 150);
    // The selection starts on the theme enabled, which stays shown.
    shouldEqual(enabled(), ["wombat"]);
    should(/▸ .* wombat {2}✓/u.test(text("*Themes*")));
    should(text("*Theme Sample*").includes("Kristoffer Grönlund"));
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

ertDeftest("e8-themes-select-narrows-as-you-type", () => {
  clean(() => {
    run("e8-themes-select");
    setQuery("gruvbox");
    // Doom's Miramare says it is built on Gruvbox, so it matches too.
    shouldEqual(listed(), ["doom-miramare", "gruvbox-dark-hard", "gruvbox-dark-medium", "gruvbox-dark-soft", "gruvbox-light-hard", "gruvbox-light-medium", "gruvbox-light-soft"]);
    // The selection moved onto the first match, and shows it.
    shouldEqual(enabled(), ["doom-miramare"]);
    should(text("*Themes*").startsWith(" Dark\n"));
    setQuery("light gruvbox");
    shouldEqual(listed(), ["gruvbox-light-hard", "gruvbox-light-medium", "gruvbox-light-soft"]);
    setQuery("no such theme");
    shouldEqual(listed(), []);
    should(text("*Themes*").includes("No theme matches."));
    setQuery("");
    should(listed().length >= 150);
  });
});

ertDeftest("e8-themes-select-filters-dark-and-light", () => {
  clean(() => {
    run("e8-themes-select");
    const list = () => text("*Themes*");
    should(list().includes(" Dark\n") && list().includes(" Light\n"));
    run("e8-themes-cycle-filter");
    should(list().includes(" Dark\n") && !list().includes(" Light\n"));
    should(!listed().includes("modus-operandi"));
    run("e8-themes-cycle-filter");
    should(!list().includes(" Dark\n") && list().includes(" Light\n"));
    // The selection moved onto a light theme, and shows it.
    shouldEqual(themeInfo((enabled() as string[])[0])!.dark, false);
    run("e8-themes-cycle-filter");
    should(list().includes(" Dark\n") && list().includes(" Light\n"));
  });
});

ertDeftest("e8-themes-catppuccin-has-each-flavour", () => {
  clean(() => {
    e8.call("load-theme", "catppuccin-latte", true);
    shouldEqual(color("default", "background"), "#eff1f5");
    e8.call("disable-theme", "catppuccin-latte");
    // catppuccin itself follows catppuccin-flavor, as upstream's does.
    e8.call("load-theme", "catppuccin", true);
    shouldEqual(color("default", "background"), "#1e1e2e");
    e8.call("catppuccin-load-flavor" as unknown as e8.DefinedCommand, "latte");
    shouldEqual(color("default", "background"), "#eff1f5");
    e8.setVariable("catppuccin-flavor", "mocha");
    run("catppuccin-reload");
    shouldEqual(color("default", "background"), "#1e1e2e");
  });
});
