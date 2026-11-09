# e8-themes

Themes for [E8](https://github.com/e8-editor/e8), and `e8-themes-select`, which shows every one of them as you move through the list.

| Dark | Light |
| --- | --- |
| `modus-vivendi`, `modus-vivendi-tinted` | `modus-operandi`, `modus-operandi-tinted` |
| `nord` | `leuven` |
| `gruvbox-dark-medium` | `gruvbox-light-medium` |
| `solarized-dark` | `solarized-light` |
| `sanityinc-tomorrow-night`, `sanityinc-tomorrow-eighties` | `sanityinc-tomorrow-day` |
| `doom-one`, `doom-tokyo-night` | `doom-one-light` |
| `catppuccin` (Mocha, Macchiato, Frappé; Latte is light) | |
| `dracula`, `zenburn`, `wombat` | |

## Installing

In `~/.config/e8/init.ts`:

```ts
e8.usePackage("e8-editor/e8-themes");
e8.call("load-theme", "modus-vivendi", true);
```

`usePackage` installs the package at its newest version tag into `repos/` beside `init.ts`, records the commit in `e8-lock.json`, and loads `e8-themes`, which defines the chooser. The themes load only when `load-theme` asks for one; `true` says not to ask before running its code. `M-x package-vc-upgrade` brings the package up to date. It needs E8 0.5.0 or newer, and 0.5.2 or newer for the chooser's colour strips.

## Choosing a theme

`M-x e8-themes-select` lists every theme along `load-path`, these and any of your own, dark ones and then light, each with an "Aa" in its own colours and a dot for each of its keywords, functions, strings, types, constants and comments. Beside the list is a sample of TypeScript, Org, a diff and the editor's highlights.

Moving with `n` and `p` (or `C-n`, `C-p`, the arrows, `<` and `>`, or a click) enables each theme as the selection lands on it, so the whole frame shows it. `RET` keeps it; `q` or `C-g` goes back to the themes enabled before. `TAB` shows only the dark themes, then only the light, then all. To keep a theme for the next session, add its `load-theme` line to `init.ts`, as the message after `RET` says.

## Options

- Nord: `nord-region-highlight` (`null`, `"snowstorm"` or `"frost"`) and `nord-uniform-mode-lines`, set before `load-theme`.
- Catppuccin: `catppuccin-flavor` (`"mocha"`, `"macchiato"`, `"frappe"` or `"latte"`), set before `load-theme`; afterwards `M-x catppuccin-load-flavor`, or `M-x catppuccin-reload` after setting it.

## How the themes are ported

Nord is a port by hand of nord-theme.el 0.6.0. The others are written by `tools/port-themes.el` from their upstreams: it loads each theme in Emacs without enabling it, takes the attributes Emacs would give each face on a graphical frame in millions of colours, keeps the faces E8 and its ports draw and the ones they inherit from, and writes each colour by its name in the upstream's palette. Themes that share their faces, as the Modus themes do, are one module of faces and a file per theme holding its palette. `make port UPSTREAM=dir` writes them again from upstreams checked out in `dir`.

The themes carry the colours a graphical frame gets; in a terminal with fewer colours E8 picks the nearest. Each theme styles the faces E8 has, so a face E8 does not draw yet is left out, and running the script again after E8 gains faces adds them.

## Credit

Each theme is a port to E8 of its upstream, under the upstream's licence, with its authors' copyright in the file. The ports are not the upstream authors' work as published, and they do not endorse them: report problems here, not upstream.

- Modus themes, by Protesilaos Stavrou, as GNU Emacs 30 ships them (modus-themes 4.4.0): GPL-3.0-or-later.
- Leuven, by Fabrice Niessen, and Wombat, by Kristoffer Grönlund, as GNU Emacs 30 ships them: GPL-3.0-or-later.
- [Nord](https://github.com/nordtheme/emacs) 0.6.0, by Sven Greb and the Nord contributors: MIT.
- [Gruvbox](https://github.com/greduan/emacs-theme-gruvbox) 1.30.3, by Lee Machin, Eduardo Lavaque and Jason Milkins: MIT.
- [Solarized](https://github.com/bbatsov/solarized-emacs) 2.2.0, by Bozhidar Batsov: GPL-3.0-or-later.
- [Tomorrow](https://github.com/purcell/color-theme-sanityinc-tomorrow) 1.19, by Steve Purcell: GPL-3.0-or-later.
- [Catppuccin](https://github.com/catppuccin/emacs) 1.0.0, by Catppuccin: MIT.
- [Zenburn](https://github.com/bbatsov/zenburn-emacs) 2.11.0, by Bozhidar Batsov and Jani Nurminen: GPL-3.0-or-later.
- [Dracula](https://github.com/dracula/emacs) 1.8.3, by Dracula Theme: MIT.
- [Doom One, One Light and Tokyo Night](https://github.com/doomemacs/themes), by Henrik Lissner and the doom-themes contributors: MIT.

`e8-themes.ts`, the chooser, and `tools/port-themes.el` are E8's own.

## Developing

With an E8 on your PATH (a [release](https://github.com/e8-editor/e8/releases), or built from source) and TypeScript 5.8 or newer:

```bash
make test
make types
```

## Licence

GPL-3.0-or-later as a whole: see `LICENSE`. Each theme's file says its own licence, MIT or GPL-3.0-or-later, both of which combine with it.
