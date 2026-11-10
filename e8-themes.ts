// SPDX-License-Identifier: GPL-3.0-or-later
//
// e8-themes: themes for E8, and e8-themes-select, which lists every theme
// there is to load, each with a strip of its own colours, beside a sample
// of code, Org, a diff and the editor's highlights; moving through the
// list shows each theme at once, RET keeps it and q goes back to the one
// before; / narrows the list as you type, and TAB shows only the dark or
// the light themes. The themes themselves are the NAME-theme.ts files
// beside this one, loaded by load-theme as any theme is:
//
//   e8.usePackage("e8-editor/e8-themes");
//   e8.call("load-theme", "modus-vivendi", true);
//
// The chooser reads what it shows of this repository's themes from
// e8-themes-index.ts, which tools/port-themes.el writes, so it opens
// without loading them; a theme of the user's own is read when the
// chooser opens. Emacs has no command like e8-themes-select;
// consult-theme, which previews in the minibuffer, is the nearest.
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
import { THEMES, type ThemeEntry } from "e8-themes-index";

/** What custom gives in E8 0.5.2 and later, reached so that older E8s still run the chooser, reading a theme of the user's by enabling it. */
const customApi = custom as unknown as {
  customThemeSettings?: (name: string) => { doc: string; faces: [string, e8.FaceAttributes][] } | undefined;
  customAvailableThemes?: () => string[];
};

// The chooser's own text is in the theme's ordinary colours, never shadow,
// which many themes dim below easy reading.
e8.defineFace({ name: "e8-themes-group", doc: "Face of the Dark and Light headings in e8-themes-select.", attributes: { weight: "bold" } });
e8.defineFace({ name: "e8-themes-selected", doc: "Face of the theme the selection is on in e8-themes-select.", attributes: { inherit: ["highlight", "bold"], extend: true } });
e8.defineFace({ name: "e8-themes-enabled", doc: "Face of the mark beside the theme enabled before e8-themes-select.", attributes: { inherit: "success" } });
e8.defineFace({ name: "e8-themes-title", doc: "Face of the theme's name above the sample.", attributes: { inherit: "bold", height: 1.4 } });
e8.defineFace({ name: "e8-themes-label", doc: "Face of the labels and credits in the sample.", attributes: { slant: "italic" } });

/** What the chooser shows of a theme: its index entry, or as much of one as a theme of the user's own gives. */
export type ThemeInfo = Pick<ThemeEntry, "name" | "collection" | "doc" | "dark" | "swatches"> &
  Partial<Pick<ThemeEntry, "background" | "foreground" | "contrast" | "source">>;

/** The faces whose colours a theme's strip shows, as the index gives them. */
const SWATCH_FACES = [
  "font-lock-keyword-face",
  "font-lock-string-face",
  "font-lock-function-name-face",
  "font-lock-type-face",
  "font-lock-constant-face",
  "font-lock-comment-face",
];

/** Themes of this repository the chooser does not list: catppuccin follows catppuccin-flavor, whose flavours are listed each as a theme. */
const UNLISTED = new Set(["catppuccin"]);

const INDEX = new Map(THEMES.map((t) => [t.name, t]));

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
 * What the chooser shows of THEME: its entry in the index, or for a theme
 * of the user's own, what it gives once loaded, without enabling it;
 * undefined if it cannot be loaded.
 */
export function themeInfo(theme: string): ThemeInfo | undefined {
  const entry = INDEX.get(theme);
  if (entry) return entry;
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
    collection: "Yours",
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
  return { name: theme, collection: "Yours", doc: "", dark: background !== undefined && colourDarkP(background), background, foreground, swatches };
}

/**
 * Whether theme T matches QUERY: each of its words in T's name,
 * collection, description, authors or the theme it is after; "dark" and
 * "light" match T's background, not words such as "lights" in its
 * description.
 */
export function matches(t: ThemeInfo, query: string): boolean {
  const words = query.toLowerCase().split(/\s+/).filter((w) => w !== "");
  // Each word must begin a word of T's, so "ef" finds ef-summer but not "default".
  const theirs = [t.name, t.collection, t.doc, ...(t.source?.authors ?? []), t.source?.original ?? ""]
    .join(" ")
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u);
  return words.every((w) => (w === "dark" ? t.dark : w === "light" ? !t.dark : theirs.some((x) => x.startsWith(w))));
}

// The chooser.

type Filter = "all" | "dark" | "light";

/** The chooser that is open: what to go back to, and what it shows. */
interface Session {
  saved: string[];
  configuration: e8.WindowConfiguration;
  themes: ThemeInfo[];
  filter: Filter;
  query: string;
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

/** The themes the filter and the query let through: dark ones first, each by collection, the user's own last, then by name. */
function shown(s: Pick<Session, "themes" | "filter" | "query">): ThemeInfo[] {
  const keep = s.themes.filter((t) => (s.filter === "all" || (s.filter === "dark") === t.dark) && matches(t, s.query));
  const key = (t: ThemeInfo) => `${t.collection === "Yours" ? "~" : t.collection}\u0000${t.name}`;
  const sorted = [...keep].sort((a, b) => (key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0));
  return [...sorted.filter((t) => t.dark), ...sorted.filter((t) => !t.dark)];
}

/** Text in a face: a face name, a list of them, or an anonymous face's attributes. */
const seg = (text: string, face?: e8.Value): e8.PropertizedString | string =>
  face === undefined ? text : e8.propertize(text, { face });

/** A theme's strip: "Aa" in its own colours, then a dot in each of its accents, on its background. */
function strip(t: ThemeInfo): (e8.PropertizedString | string)[] {
  if (!t.background) return [seg("  no colours  ", "e8-themes-label")];
  const on = (fg: string | undefined): e8.Value => [":background", t.background!, ...(fg ? [":foreground", fg] : [])] as e8.Value;
  return [
    seg(" Aa ", [":weight", "bold", ...(on(t.foreground) as string[])] as e8.Value),
    ...t.swatches.map((c) => seg("●", on(c))),
    seg(" ", on(undefined)),
  ];
}

/** The list's header line: how many themes it shows, of how many, and why. */
function headerLine(s: Session, count: number): string {
  const which = s.filter === "all" ? "themes" : `${s.filter} themes`;
  const what = s.query === "" && s.filter === "all" ? `${count} themes` : `${count} of ${s.themes.length} ${which}${s.query ? ` matching “${s.query}”` : ""}`;
  return ` ${what}`.replace(/%/g, "%%");
}

/** The keys, in the wide sample window's header line. */
const KEYS = " n p move   RET keep it   q go back   / filter   TAB dark or light";

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
        // The selection's face under the strip's own, to the window's edge.
        if (selected) e8.addFaceTextProperty(start, e8.point(), "e8-themes-selected", { append: true });
        e8.putTextProperty(start, e8.point(), "e8-themes-theme", t.name);
      }
      if (themes.length === 0) e8.insert(seg(s.themes.length === 0 ? " No themes along load-path.\n" : " No theme matches.\n", "e8-themes-label"));
      e8.gotoChar(at ?? e8.pointMin());
      e8.setBufferModified(false);
      e8.setVariable("header-line-format", headerLine(s, themes.length));
    });
  });
  const win = e8.windowList().find((w) => e8.windowBuffer(w) === LIST);
  if (win !== undefined) e8.setWindowPoint(win, e8.withCurrentBuffer(LIST, () => e8.point()));
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

/** Who made theme T, where it comes from and how readable it is, for the sample's head: a few short lines. */
export function credit(t: ThemeInfo): string[] {
  const src = t.source;
  if (!src) return [t.collection === "Yours" ? "A theme of your own, along load-path." : ""];
  const by = src.authors.length ? `By ${src.authors.join(", ")}` : "";
  const after = src.original ? `, after ${src.original.replace(/^https?:\/\/(www\.)?/, "")}` : "";
  const lines = [`${by}${after}.`, `From ${src.package} ${src.version} at ${src.commit.slice(0, 7)}, ${src.licence}.`];
  if (t.contrast) lines.push(`Contrast ${t.contrast.text}:1 text, ${t.contrast.code}:1 code, ${t.contrast.comments}:1 comments.`);
  return lines;
}

/** Writes the sample for theme T, or for the themes enabled when there is none. */
function renderSample(t: ThemeInfo | undefined): void {
  e8.withCurrentBuffer(SAMPLE, () => {
    e8.letBind({ "inhibit-read-only": true }, () => {
      e8.deleteRegion(e8.pointMin(), e8.pointMax());
      e8.insert("\n ");
      e8.insert(seg(t?.name ?? "No theme", "e8-themes-title"));
      e8.insert("\n");
      const about = t ? [`A ${t.dark ? "dark" : "light"} theme${t.collection !== "Yours" ? ` from ${t.collection}` : ""}`, t.doc].filter((x) => x !== "").join(". ") : "Emacs's own faces";
      e8.insert(` ${about.replace(/\.$/, "")}.\n`);
      for (const line of t ? credit(t) : []) if (line !== "") e8.insert(seg(` ${line}\n`, "e8-themes-label"));
      e8.insert("\n");
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

/** Puts the selection on the first theme shown if the one it is on is not, without showing it. */
function keepSelectionShown(s: Session): void {
  const themes = shown(s);
  if (themes.length > 0 && !themes.some((t) => t.name === s.selected)) s.selected = themes[0].name;
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
    const was = s.selected;
    keepSelectionShown(s);
    if (s.selected !== was && s.selected) select(s.selected);
    else renderList(s);
  },
});

/** Sets the query, the list narrowing as it is typed, and shows the theme the selection is then on. */
export function setQuery(query: string): void {
  const s = current();
  s.query = query;
  keepSelectionShown(s);
  if (s.selected) select(s.selected);
  else renderList(s);
}

const filter = e8.defineCommand({
  name: "e8-themes-filter",
  doc: "Narrow the list to the themes matching words typed: in their names, collections, descriptions or authors, or dark or light. The list narrows as you type; RET shows the first match, C-g goes back to the words before.",
  run: () => {
    const s = current();
    const before = s.query;
    const depth = e8.minibufferDepth() + 1;
    const update = () => {
      if (session !== s) return;
      s.query = e8.minibufferContents();
      keepSelectionShown(s);
      renderList(s);
    };
    const setup = () => {
      if (e8.minibufferDepth() !== depth) return;
      e8.removeHook("minibuffer-setup-hook", setup);
      e8.addHook("post-command-hook", update, { local: true });
    };
    e8.addHook("minibuffer-setup-hook", setup);
    let query: string;
    try {
      query = e8.readString("Filter themes: ", { initial: before });
    } catch (e) {
      s.query = before;
      keepSelectionShown(s);
      renderList(s);
      throw e;
    } finally {
      e8.removeHook("minibuffer-setup-hook", setup);
    }
    setQuery(query.trim());
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
  doc: "The theme chooser's list: moving shows each theme, RET keeps it, q goes back, / narrows the list and TAB shows dark or light themes only.",
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
    "/": filter,
    s: filter,
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
    e8.setVariable("header-line-format", KEYS);
  },
});

e8.defineCommand({
  name: "e8-themes-select",
  doc: "Choose a theme from all there are to load, showing each one, with a sample of text in it, as the selection moves. RET keeps the theme, q goes back to the themes enabled before, / narrows the list as you type and TAB shows only dark or light themes.",
  run: () => {
    if (session) close(false);
    const saved = enabledThemes();
    const configuration = e8.currentWindowConfiguration();
    const themes = availableThemes()
      .filter((name) => !UNLISTED.has(name))
      .map(themeInfo)
      .filter((t): t is ThemeInfo => t !== undefined);
    const s: Session = { saved, configuration, themes, filter: "all", query: "", selected: undefined, previewed: saved[0] };
    s.selected = saved.find((t) => themes.some((i) => i.name === t)) ?? shown(s)[0]?.name;
    session = s;
    for (const [name, mode] of [[LIST, listMode], [SAMPLE, sampleMode]] as const) {
      e8.getBufferCreate(name);
      e8.withCurrentBuffer(name, () => {
        e8.call(mode);
        // A global-visual-line-mode turns wrapping on after the mode is set
        // up; the list and the sample are laid out unwrapped.
        if (e8.variable("visual-line-mode") === true) e8.callWithPrefix(-1, "visual-line-mode");
        e8.setVariable("truncate-lines", true);
      });
    }
    e8.call("delete-other-windows");
    const list = e8.selectedWindow();
    e8.setWindowBuffer(list, LIST);
    // As wide as the rows, the strip and the longest name, up to half the frame.
    const width = 3 + 4 + SWATCH_FACES.length + 1 + 2 + Math.max(16, ...themes.map((t) => t.name.length)) + 5;
    const sample = e8.splitWindow(list, "right", Math.min(width, Math.floor(e8.frameWidth() / 2)));
    e8.setWindowBuffer(sample, SAMPLE);
    e8.selectWindow(list);
    renderList(s);
    renderSample(themes.find((t) => t.name === s.selected));
  },
});
