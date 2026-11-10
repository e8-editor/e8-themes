# e8-themes

168 themes for [E8](https://github.com/e8-editor/e8), ported from the Emacs themes people use most, and `e8-themes-select`, which shows each one as you move through them.

| Collection | Themes | From |
| --- | --- | --- |
| Modus | 8, accessible to the highest standard, deuteranopia and tritanopia variants among them | [modus-themes](https://github.com/protesilaos/modus-themes) 5.3.0, Protesilaos Stavrou |
| Ef | 40, colourful and legible, built on Modus | [ef-themes](https://github.com/protesilaos/ef-themes) 2.2.1, Protesilaos Stavrou |
| Doom | 63: One, Tokyo Night, Palenight, Monokai Pro and the rest of Doom's own | [doom-themes](https://github.com/doomemacs/themes) 2.3.0, Henrik Lissner and contributors |
| Solarized | 25: Solarized, Selenized, Nightfox, Kanagawa, Everforest, Flexoki, Apple and IBM Carbon palettes | [solarized-emacs](https://github.com/bbatsov/solarized-emacs) 2.2.0, Bozhidar Batsov and contributors |
| Emacs | 14 of GNU Emacs's own: Leuven, Wombat, Tango, Adwaita, Misterioso and the rest | [GNU Emacs](https://www.gnu.org/software/emacs/) 31.1 |
| Gruvbox | 6: dark and light, hard, medium and soft | [emacs-theme-gruvbox](https://github.com/greduan/emacs-theme-gruvbox) 1.30, Jason Milkins and contributors |
| Tomorrow | 5: Night, Day, Eighties, Blue and Bright | [color-theme-sanityinc-tomorrow](https://github.com/purcell/color-theme-sanityinc-tomorrow) 1.19, Steve Purcell |
| Catppuccin | 4: Latte, Frappé, Macchiato and Mocha | [catppuccin/emacs](https://github.com/catppuccin/emacs) 1.0.0 |
| Nord, Dracula, Zenburn | 1 each | [nordtheme/emacs](https://github.com/nordtheme/emacs) 0.6.0, [dracula/emacs](https://github.com/dracula/emacs) 1.8.3, [zenburn-emacs](https://github.com/bbatsov/zenburn-emacs) 2.11.0 |

[THEMES.md](THEMES.md) lists every theme with its authors, the theme it is after, its contrast, and the commit it was ported from, and the themes left out and why.

## Installing

In `~/.config/e8/init.ts`:

```ts
e8.usePackage("e8-editor/e8-themes");
e8.call("load-theme", "modus-vivendi", true);
```

`usePackage` installs the package at its newest version tag into `repos/` beside `init.ts`, records the commit in `e8-lock.json`, and loads `e8-themes`, which defines the chooser. A theme loads only when `load-theme` asks for it; `true` says not to ask before running its code. `M-x package-vc-upgrade` brings the package up to date. It needs E8 0.5.0 or newer; with 0.5.2 or newer, `load-theme` completes over every theme before any is loaded; 0.5.3 draws each theme as Emacs does in a few more places: the `:distant-foreground` some themes give search matches and the region, and diff lines on dark themes that do not give them colours of their own.

## Choosing a theme

`M-x e8-themes-select` lists every theme along `load-path`, these and any of your own, dark ones and then light, each with an "Aa" in its own colours and a dot for each of its keywords, strings, functions, types, constants and comments. Beside the list is a sample of TypeScript, Org, a diff and the editor's highlights, under the theme's name, who made it, where it comes from and how readable it is.

- `n` and `p` (or `C-n`, `C-p`, the arrows, `<` and `>`, or a click) move the selection, and each theme shows in the whole frame as the selection lands on it.
- `/` narrows the list as you type: words match the start of a word in a theme's name, collection, description or authors, so `gruv` finds Gruvbox, `ef light` the light Ef themes and `tokyo` Tokyo Night; `dark` and `light` match the background. `C-g` takes the words back.
- `TAB` shows only the dark themes, then only the light, then all.
- `RET` keeps the theme; `q` or `C-g` goes back to the themes enabled before. To keep a theme for the next session, add its `load-theme` line to `init.ts`, as the message after `RET` says.

The list opens at once: what it shows of these themes comes from `e8-themes-index.ts`, written when they are ported, so none is loaded until it is shown.

## Options

- Nord: `nord-region-highlight` (`null`, `"snowstorm"` or `"frost"`) and `nord-uniform-mode-lines`, set before `load-theme`. From E8 0.5.3, `load-theme` loads the theme again, so they take effect after it has been loaded once too, as in Emacs.
- Catppuccin: each flavour is a theme, `catppuccin-latte` to `catppuccin-mocha`. `catppuccin` itself follows `catppuccin-flavor`, as upstream's does; `M-x catppuccin-load-flavor` changes it.

## How the themes are ported

Each theme is a port of an Emacs theme, made by `tools/port-themes.el`, which loads the upstream theme in Emacs without enabling it and writes, for each face E8 and its ports draw and those they inherit from, the attributes Emacs gives it on a graphical frame in millions of colours, each colour by its name in the upstream's palette. Themes that share their faces, as Ef shares Modus's and Doom's share doom-themes-base, are one module of faces and a file per theme holding its palette, as upstream has them. Nord is written the same way, its options added from `tools/nord-options.ts`.

**Where each comes from is recorded.** `tools/upstreams.tsv` pins each upstream to a commit or tag. `sources.json` records, for every theme, its repository, the commit it was ported at, the git object of its own file there, the version and authors its files declare, its copyright and licence, and the theme it is itself a port of. Each theme's file carries the same in its header.

**Checking for updates.** `tools/check-upstreams.py` asks each repository how far it has moved since, which themes' own files changed, and which shared code changed that can change them all, without checking anything out. To take an update, set the commit in `tools/upstreams.tsv`, then `make port`, and look at the diff.

**What is left out.**

- Repeats. A theme this repository has from its own authors or its long-standing Emacs port is not taken again from a collection that reworks it: doom-gruvbox, doom-nord, doom-dracula and the like have the same palette as the originals, with some colours given other roles. `tools/compare-repeats.el` measures how far each is from its original, so the call can be made again when one changes.
- Themes too hard to read. Every theme's ordinary text must reach 4.0:1 against its background, each colour of its code 2.0:1 and its comments 1.8:1, as WCAG measures contrast. These floors keep the themes people choose on purpose, Solarized Light's text at 4.1:1 and Catppuccin Latte's yellow at 2.3:1 among them, and leave out the few whose code or comments can hardly be read.
- Themes that give no background, which assume a frame already dark or light enough for them, and themes Emacs has made obsolete.

THEMES.md lists each one left out, with its reason.

## Credit

Each theme is a port to E8 of its upstream, under the upstream's licence, with its authors' copyright in its file. The ports are not the upstream authors' work as published, and they do not endorse them: report problems with a port here, not upstream. The authors of each theme are named in THEMES.md and in the theme's file.

`e8-themes.ts`, the chooser, and the tools in `tools/` are E8's own.

## Developing

With an E8 on your PATH (a [release](https://github.com/e8-editor/e8/releases), or built from source), TypeScript 5.8 or newer, GNU Emacs 30 or newer and git:

```bash
make test
make types
make port
make check-upstreams
```

`make port` fetches the upstreams at their pinned commits into `.upstream/` and writes the themes, `sources.json`, `e8-themes-index.ts` and `THEMES.md` again. `make check-upstreams` says which upstreams have moved on.

## Licence

GPL-3.0-or-later as a whole: see `LICENSE`. Each theme's file says its own licence, MIT or GPL-3.0-or-later, both of which combine with it.
