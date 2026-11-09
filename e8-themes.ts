// SPDX-License-Identifier: GPL-3.0-or-later
//
// e8-themes: themes for E8, and e8-themes-select, which lists every theme
// there is to load, each with a strip of its own colours, beside a sample
// of code, Org, a diff and the editor's highlights; moving through the
// list shows each theme at once, RET keeps it and q goes back to the one
// before. The themes themselves are the NAME-theme.ts files beside this
// one, loaded by load-theme as any theme is:
//
//   e8.usePackage("e8-editor/e8-themes");
//   e8.call("load-theme", "modus-vivendi", true);
//
// Emacs has no command like e8-themes-select; consult-theme, which
// previews in the minibuffer, is the nearest.
//
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

import * as custom from "custom";
import { disableTheme, enableTheme, loadTheme } from "custom";

/** What custom gives in E8 0.5.2 and later, reached so that older E8s still run the chooser, reading each theme by enabling it. */
const customApi = custom as unknown as {
  customThemeSettings?: (name: string) => { doc: string; faces: [string, e8.FaceAttributes][] } | undefined;
  customAvailableThemes?: () => string[];
};

e8.defineFace({ name: "e8-themes-group", doc: "Face of the Dark and Light headings in e8-themes-select.", attributes: { inherit: ["shadow", "bold"] } });
e8.defineFace({ name: "e8-themes-selected", doc: "Face of the theme the selection is on in e8-themes-select.", attributes: { inherit: ["highlight", "bold"], extend: true } });
e8.defineFace({ name: "e8-themes-enabled", doc: "Face of the mark beside the theme enabled before e8-themes-select.", attributes: { inherit: "success" } });
e8.defineFace({ name: "e8-themes-title", doc: "Face of the theme's name above the sample.", attributes: { inherit: "bold", height: 1.4 } });
e8.defineFace({ name: "e8-themes-label", doc: "Face of the labels in the sample.", attributes: { inherit: "shadow", slant: "italic" } });

/** What the chooser shows of a theme. */
export interface ThemeInfo {
  name: string;
  doc: string;
  /** Whether its background is dark, by luminance. */
  dark: boolean;
  background?: string;
  foreground?: string;
  /** Its colours for keywords, functions, strings, types, constants and comments. */
  swatches: string[];
}

/** The faces whose colours a theme's strip shows. */
const SWATCH_FACES = [
  "font-lock-keyword-face",
  "font-lock-function-name-face",
  "font-lock-string-face",
  "font-lock-type-face",
  "font-lock-constant-face",
  "font-lock-comment-face",
];

/** The themes there are to load: custom-available-themes, or each NAME-theme.ts along load-path in an older E8. */
export function availableThemes(): string[] {
  if (customApi.customAvailableThemes) return customApi.customAvailableThemes();
  const names = new Set<string>();
  const dirs = e8.variable("load-path");
  for (const dir of Array.isArray(dirs) ? dirs.map((d) => e8.expandFileName(String(d))) : []) {
    if (!e8.fileDirectoryP(dir)) continue;
    for (const file of e8.directoryFiles(dir, { match: "-theme\\.ts\\'" })) names.add(file.replace(/-theme\.ts$/, ""));
  }
  return [...names].sort();
}

/** A colour as a face attribute gives one, or undefined for none. */
function colour(value: unknown): string | undefined {
  return typeof value === "string" && value !== "unspecified" && e8.colorValues(value) !== undefined ? value : undefined;
}

/** Whether a colour is dark, as color-dark-p: luminance below 0.325, with Emacs's weights. */
export function colourDarkP(color: string): boolean {
  const [r, g, b] = e8.colorValues(color) ?? [65535, 65535, 65535];
  const lum = (c: number) => {
    const x = c / 65535;
    return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lum(r) + 0.7152 * lum(g) + 0.0722 * lum(b) < 0.325;
}

/**
 * What the chooser shows of THEME, loading it, without enabling it, if it
 * is not loaded; undefined if it cannot be loaded.
 */
export function themeInfo(theme: string): ThemeInfo | undefined {
  try {
    if (!customApi.customThemeSettings?.(theme)) loadTheme(theme, true, true);
  } catch (e) {
    e8.message(`e8-themes: cannot load ${theme}: ${e instanceof Error ? e.message : String(e)}`);
    return undefined;
  }
  const settings = customApi.customThemeSettings?.(theme);
  if (!settings) return enabledInfo(theme);
  const faces = new Map(settings.faces);
  // A face's colour as the theme gives it, through the faces it inherits from.
  const attribute = (face: string, name: "foreground" | "background", depth = 0): string | undefined => {
    const attrs = faces.get(face);
    if (!attrs || depth > 8) return undefined;
    const own = colour(attrs[name]);
    if (own) return own;
    const inherit = attrs.inherit;
    for (const parent of Array.isArray(inherit) ? inherit : inherit ? [inherit] : []) {
      const found = attribute(String(parent), name, depth + 1);
      if (found) return found;
    }
    return undefined;
  };
  const background = attribute("default", "background");
  const foreground = attribute("default", "foreground");
  return {
    name: theme,
    doc: settings.doc.split("\n")[0] ?? "",
    dark: background !== undefined && colourDarkP(background),
    background,
    foreground,
    swatches: SWATCH_FACES.map((f) => attribute(f, "foreground") ?? foreground).filter((c): c is string => c !== undefined),
  };
}

/**
 * What the chooser shows of THEME in an E8 without customThemeSettings:
 * the faces' colours while it is enabled alone, the themes enabled before
 * enabled again after.
 */
function enabledInfo(theme: string): ThemeInfo {
  const before = enabledThemes();
  for (const t of before) disableTheme(t);
  enableTheme(theme);
  const get = (face: string, attribute: string) => colour(e8.faceAttribute(face, attribute, true));
  const background = get("default", ":background");
  const foreground = get("default", ":foreground");
  const swatches = SWATCH_FACES.map((f) => get(f, ":foreground") ?? foreground).filter((c): c is string => c !== undefined);
  disableTheme(theme);
  for (const t of [...before].reverse()) enableTheme(t);
  return { name: theme, doc: "", dark: background !== undefined && colourDarkP(background), background, foreground, swatches };
}

// The chooser.

type Filter = "all" | "dark" | "light";

/** The chooser that is open: what to go back to, and what it shows. */
interface Session {
  saved: string[];
  configuration: e8.WindowConfiguration;
  themes: ThemeInfo[];
  filter: Filter;
  selected: string | undefined;
  previewed: string | undefined;
}

let session: Session | undefined;

const LIST = "*Themes*";
const SAMPLE = "*Theme Sample*";

const enabledThemes = (): string[] => {
  const v = e8.variable("custom-enabled-themes");
  return Array.isArray(v) ? v.map(String) : [];
};

/** The themes the filter lets through, dark ones first, each group by name. */
function shown(s: Session): ThemeInfo[] {
  const keep = s.themes.filter((t) => s.filter === "all" || (s.filter === "dark") === t.dark);
  return [...keep.filter((t) => t.dark), ...keep.filter((t) => !t.dark)];
}

/** Text in a face: a face name, a list of them, or an anonymous face's attributes. */
const seg = (text: string, face?: e8.Value): e8.PropertizedString | string =>
  face === undefined ? text : e8.propertize(text, { face });

/** A theme's strip: "Aa" in its own colours, then a dot in each of its accents, on its background. */
function strip(t: ThemeInfo): (e8.PropertizedString | string)[] {
  if (!t.background) return [seg("  no colours  ", "shadow")];
  const on = (fg: string | undefined): e8.Value => [":background", t.background!, ...(fg ? [":foreground", fg] : [])] as e8.Value;
  return [
    seg(" Aa ", [":weight", "bold", ...(on(t.foreground) as string[])] as e8.Value),
    ...t.swatches.map((c) => seg("●", on(c))),
    seg(" ", on(undefined)),
  ];
}

/** Writes the list, the selection on SELECTED, and puts point there. */
function renderList(s: Session): void {
  const themes = shown(s);
  e8.withCurrentBuffer(LIST, () => {
    e8.letBind({ "inhibit-read-only": true }, () => {
      e8.deleteRegion(e8.pointMin(), e8.pointMax());
      let at: number | undefined;
      let group: boolean | undefined;
      for (const t of themes) {
        if (t.dark !== group) {
          group = t.dark;
          if (e8.point() > e8.pointMin()) e8.insert("\n");
          e8.insert(seg(` ${t.dark ? "Dark" : "Light"}\n`, "e8-themes-group"));
        }
        const start = e8.point();
        const selected = t.name === s.selected;
        if (selected) at = start;
        // The strip first, so a narrow window cuts only the ends of long names.
        e8.insert(selected ? " ▸ " : "   ");
        for (const part of strip(t)) e8.insert(part);
        e8.insert(`  ${t.name}`);
        if (s.saved[0] === t.name) e8.insert(seg("  ✓", "e8-themes-enabled"));
        e8.insert("\n");
        if (selected) {
          // The selection's face under the strip's own, to the window's edge.
          e8.addFaceTextProperty(start, e8.point(), "e8-themes-selected", { append: true });
        }
        e8.putTextProperty(start, e8.point(), "e8-themes-theme", t.name);
      }
      if (themes.length === 0) e8.insert(seg(" No themes along load-path.\n", "shadow"));
      const dark = s.themes.filter((t) => t.dark).length;
      e8.insert(seg(`\n ${s.themes.length} themes, ${dark} dark and ${s.themes.length - dark} light`, "shadow"));
      e8.gotoChar(at ?? e8.pointMin());
      e8.setBufferModified(false);
    });
  });
  const win = e8.windowList().find((w) => e8.windowBuffer(w) === LIST);
  if (win !== undefined) e8.setWindowPoint(win, e8.withCurrentBuffer(LIST, () => e8.point()));
  e8.withCurrentBuffer(LIST, () =>
    e8.setVariable("header-line-format", ` ${s.filter === "all" ? "All" : s.filter === "dark" ? "Dark" : "Light"} themes   RET keep  q back  TAB filter`),
  );
}

/** The sample: each line a list of [text, face] parts. */
const SAMPLE_LINES: [string, e8.Value?][][] = [
  [["TypeScript", "e8-themes-label"]],
  [["// Greets each name it is given.", "font-lock-comment-face"]],
  [["export", "font-lock-keyword-face"], [" "], ["function", "font-lock-keyword-face"], [" "], ["greet", "font-lock-function-name-face"], ["(names: "], ["string", "font-lock-type-face"], ["[]): "], ["number", "font-lock-type-face"], [" {"]],
  [["  "], ["const", "font-lock-keyword-face"], [" "], ["greeting", "font-lock-variable-name-face"], [" = "], ['"Hello"', "font-lock-string-face"], [";"]],
  [["  "], ["for", "font-lock-keyword-face"], [" ("], ["const", "font-lock-keyword-face"], [" "], ["name", "font-lock-variable-name-face"], [" "], ["of", "font-lock-keyword-face"], [" names) e8."], ["message", "font-lock-function-call-face"], ["("], ["`${greeting}, ${name}!`", "font-lock-string-face"], [");"]],
  [["  "], ["return", "font-lock-keyword-face"], [" names.length * "], ["42", "font-lock-number-face"], [" || "], ["undefined", "font-lock-constant-face"], [";"]],
  [["}"]],
  [],
  [["Org", "e8-themes-label"]],
  [["* ", "org-level-1"], ["TODO", "org-todo"], [" Choose a theme ", "org-level-1"], [":e8:", "org-tag"]],
  [["** ", "org-level-2"], ["DONE", "org-done"], [" Port Modus and Nord", ["org-headline-done", "org-level-2"]]],
  [["   "], ["SCHEDULED:", "org-special-keyword"], [" "], ["<2026-11-09 Mon>", "org-date"]],
  [["   - "], ["[X]", "org-checkbox"], [" Read "], ["the manual", "org-link"], [", with "], ["~code~", "org-code"], [" and "], ["=verbatim=", "org-verbatim"]],
  [["*** Notes", "org-level-3"]],
  [["   | Theme         | Dark |", "org-table"]],
  [],
  [["Diff", "e8-themes-label"]],
  [["@@ -1,3 +1,3 @@", "diff-hunk-header"]],
  [[' const editor = "E8";', "diff-context"]],
  [['-const theme = "wombat";', "diff-removed"]],
  [['+const theme = "modus-vivendi";', "diff-added"]],
  [],
  [["Editing", "e8-themes-label"]],
  [[" 12 ", "line-number"], [" "], ["the region", "region"], [", "], ["a match", "isearch"], [", "], ["the others", "lazy-highlight"], [", "], ["(", "show-paren-match"], ["parens"], [")", "show-paren-match"]],
  [[" 13 ", "line-number-current-line"], [" "], ["error", "error"], ["  "], ["warning", "warning"], ["  "], ["success", "success"], ["  "], ["a link", "link"], ["  "], ["shadow", "shadow"]],
  [[" 14 ", "line-number"], [" "], ["Find file: ", "minibuffer-prompt"], ["~/proj/"], ["e8", "completions-common-part"], ["-themes/"]],
];

/** Writes the sample for theme T, or for the themes enabled when there is none. */
function renderSample(t: ThemeInfo | undefined): void {
  e8.withCurrentBuffer(SAMPLE, () => {
    e8.letBind({ "inhibit-read-only": true }, () => {
      e8.deleteRegion(e8.pointMin(), e8.pointMax());
      e8.insert("\n ");
      e8.insert(seg(t?.name ?? "No theme", "e8-themes-title"));
      e8.insert("\n");
      const about = t ? [t.dark ? "A dark theme" : "A light theme", t.doc].filter((x) => x !== "").join(". ") : "Emacs's own faces";
      e8.insert(seg(` ${about.replace(/\.$/, "")}.\n\n`, "shadow"));
      for (const line of SAMPLE_LINES) {
        e8.insert(" ");
        for (const [text, face] of line) e8.insert(seg(text, face));
        e8.insert("\n");
      }
      e8.gotoChar(e8.pointMin());
      e8.setBufferModified(false);
    });
  });
}

/** Shows THEME, alone, as the chooser previews it. */
function preview(s: Session, theme: string): void {
  if (s.previewed === theme) return;
  for (const t of enabledThemes()) disableTheme(t);
  try {
    loadTheme(theme, true);
    s.previewed = theme;
  } catch (e) {
    e8.message(`e8-themes: cannot load ${theme}: ${e instanceof Error ? e.message : String(e)}`);
  }
  renderSample(s.themes.find((t) => t.name === theme));
}

/** The theme on the line point is on in the list. */
function themeAtPoint(): string | undefined {
  const v = e8.getTextProperty(e8.lineBeginningPosition(), "e8-themes-theme");
  return typeof v === "string" ? v : undefined;
}

function current(): Session {
  if (!session) e8.userError("No theme chooser is open");
  return session;
}

/** Moves the selection N themes on, or back, and shows the theme it lands on. */
export function move(n: number): void {
  const s = current();
  const themes = shown(s);
  if (themes.length === 0) return;
  const i = themes.findIndex((t) => t.name === s.selected);
  const next = i < 0 ? 0 : Math.max(0, Math.min(themes.length - 1, i + n));
  select(themes[next].name);
}

/** Puts the selection on THEME and shows it. */
export function select(theme: string): void {
  const s = current();
  s.selected = theme;
  preview(s, theme);
  renderList(s);
}

/** Closes the chooser, keeping the theme it shows if KEEP, else enabling again the themes enabled before. */
function close(keep: boolean): string | undefined {
  const s = current();
  session = undefined;
  if (!keep) {
    for (const t of enabledThemes()) if (!s.saved.includes(t)) disableTheme(t);
    for (const t of [...s.saved].reverse()) enableTheme(t);
  }
  e8.setWindowConfiguration(s.configuration);
  for (const name of [LIST, SAMPLE]) if (e8.getBuffer(name)) e8.call("kill-buffer", name);
  return keep ? s.previewed : undefined;
}

const next = e8.defineCommand({ name: "e8-themes-next", doc: "Show the next theme.", params: [{ name: "n", kind: "count" }], run: (n) => move(Number(n ?? 1)) });
const previous = e8.defineCommand({ name: "e8-themes-previous", doc: "Show the previous theme.", params: [{ name: "n", kind: "count" }], run: (n) => move(-Number(n ?? 1)) });
const first = e8.defineCommand({ name: "e8-themes-first", doc: "Show the first theme.", run: () => move(-Infinity) });
const last = e8.defineCommand({ name: "e8-themes-last", doc: "Show the last theme.", run: () => move(Infinity) });

const mouseSelect = e8.defineCommand({
  name: "e8-themes-mouse-select",
  doc: "Show the theme clicked on.",
  run: () => {
    const where = e8.lastMouseEvent();
    if (where?.position !== undefined) {
      e8.selectWindow(where.window);
      e8.gotoChar(where.position);
    }
    const theme = themeAtPoint();
    if (theme) select(theme);
  },
});

const cycleFilter = e8.defineCommand({
  name: "e8-themes-cycle-filter",
  doc: "Show all the themes, only the dark ones, or only the light ones, in turn.",
  run: () => {
    const s = current();
    s.filter = s.filter === "all" ? "dark" : s.filter === "dark" ? "light" : "all";
    const themes = shown(s);
    if (themes.length > 0 && !themes.some((t) => t.name === s.selected)) select(themes[0].name);
    else renderList(s);
  },
});

const choose = e8.defineCommand({
  name: "e8-themes-choose",
  doc: "Keep the theme shown and close the chooser.",
  run: () => {
    const theme = close(true);
    if (theme) e8.message(`Theme ${theme}.  To keep it, add to init.ts: e8.call("load-theme", "${theme}", true);`);
  },
});

const quit = e8.defineCommand({
  name: "e8-themes-quit",
  doc: "Close the chooser and go back to the themes enabled before it.",
  run: () => {
    close(false);
  },
});

const listMode = e8.defineMajorMode({
  name: "e8-themes-mode",
  modeName: "Themes",
  parent: "special-mode",
  doc: "The theme chooser's list: moving shows each theme, RET keeps it and q goes back.",
  bindings: {
    n: next,
    p: previous,
    "C-n": next,
    "C-p": previous,
    "<down>": next,
    "<up>": previous,
    "<": first,
    ">": last,
    "M-<": first,
    "M->": last,
    RET: choose,
    q: quit,
    "C-g": quit,
    TAB: cycleFilter,
    "<mouse-1>": mouseSelect,
  },
  setup: () => {
    e8.setVariable("truncate-lines", true);
    e8.setVariable("cursor-type", false);
  },
});

const sampleMode = e8.defineMajorMode({
  name: "e8-themes-sample-mode",
  modeName: "Theme Sample",
  parent: "special-mode",
  doc: "The theme chooser's sample of text in the faces a theme gives.",
  setup: () => {
    e8.setVariable("truncate-lines", true);
    e8.setVariable("cursor-type", false);
  },
});

e8.defineCommand({
  name: "e8-themes-select",
  doc: "Choose a theme from all there are to load, showing each one, with a sample of text in it, as the selection moves. RET keeps the theme, q goes back to the themes enabled before.",
  run: () => {
    if (session) close(false);
    const saved = enabledThemes();
    const configuration = e8.currentWindowConfiguration();
    const themes = availableThemes()
      .map(themeInfo)
      .filter((t): t is ThemeInfo => t !== undefined);
    const s: Session = { saved, configuration, themes, filter: "all", selected: undefined, previewed: saved[0] };
    s.selected = saved.find((t) => themes.some((i) => i.name === t)) ?? shown(s)[0]?.name;
    session = s;
    for (const [name, mode] of [[LIST, listMode], [SAMPLE, sampleMode]] as const) {
      e8.getBufferCreate(name);
      e8.withCurrentBuffer(name, () => e8.call(mode));
    }
    e8.call("delete-other-windows");
    const list = e8.selectedWindow();
    e8.setWindowBuffer(list, LIST);
    const width = 3 + 4 + SWATCH_FACES.length + 1 + 2 + Math.max(16, ...themes.map((t) => t.name.length)) + 4;
    const sample = e8.splitWindow(list, "right", Math.min(width, Math.floor(e8.frameWidth() / 2)));
    e8.setWindowBuffer(sample, SAMPLE);
    e8.selectWindow(list);
    renderList(s);
    renderSample(themes.find((t) => t.name === s.selected));
  },
});
