#!/usr/bin/env python3
# SPDX-License-Identifier: GPL-3.0-or-later
#
# Says which upstreams have changed since their themes were ported, as
# sources.json records them: for each repository, how many commits its
# default branch is past the commit ported from, its newest tag, which of
# this repository's themes have a file that changed, and which other Emacs
# Lisp files changed, such as the faces a family shares (modus-themes.el,
# doom-themes-base.el), which can change every theme built on them. For the
# themes from GNU Emacs, whether there is a newer Emacs. It reads the
# repositories with git, without checking any of them out:
#
#   tools/check-upstreams.py
#
# To take an update: set the commit in tools/upstreams.tsv, run
# tools/fetch-upstreams.sh and `make port`, and look at the diff.

import json
import os
import re
import subprocess
import sys
import tempfile
from collections import defaultdict


def git(*args, cwd=None):
    return subprocess.run(["git", *args], cwd=cwd, check=True, capture_output=True, text=True).stdout.strip()


def newest_tag(url, pattern=r".*"):
    tags = [line.split("refs/tags/")[1] for line in git("ls-remote", "--tags", "--refs", url).splitlines()]
    tags = [t for t in tags if re.fullmatch(pattern, t)]
    key = lambda t: [int(n) if n.isdigit() else n for n in re.split(r"(\d+)", t)]
    return max(tags, key=key) if tags else None


def main():
    root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
    with open(os.path.join(root, "sources.json")) as f:
        sources = json.load(f)
    by_repo = defaultdict(list)
    for s in sources:
        by_repo[s["repository"]].append(s)
    behind = 0
    for url, themes in sorted(by_repo.items()):
        commits = {s["commit"] for s in themes}
        package = themes[0]["package"]
        if url.endswith("emacs.git"):
            ported = sorted(commits)[0]
            tag = newest_tag(url, r"emacs-\d+\.\d+")
            state = "up to date" if tag == ported else f"{tag} is out"
            print(f"{package} ({', '.join(sorted(s['theme'] for s in themes))}): ported from {ported}; {state}")
            behind += tag != ported
            continue
        head = git("ls-remote", url, "HEAD").split()[0]
        ported = sorted(commits)[0]
        if len(commits) > 1:
            print(f"{package}: themes ported from {len(commits)} commits; port them again together")
        if head == ported:
            print(f"{package}: up to date at {ported[:12]}")
            continue
        behind += 1
        with tempfile.TemporaryDirectory() as tmp:
            git("clone", "--quiet", "--bare", "--filter=blob:none", url, tmp)
            count = git("rev-list", "--count", f"{ported}..{head}", cwd=tmp)
            changed = set(git("diff", "--name-only", ported, head, cwd=tmp).splitlines())
            files = {s["file"]: s["theme"] for s in themes}
            themes_changed = sorted(files[f] for f in files if f in changed)
            gone = sorted(files[f] for f in files if not git("ls-tree", head, "--", f, cwd=tmp))
            shared = sorted(f for f in changed if f.endswith(".el") and f not in files and not f.startswith("test"))
            new = sorted(
                f for f in changed
                if f.endswith("-theme.el") and f not in files
                and git("ls-tree", head, "--", f, cwd=tmp)
            )
        tag = newest_tag(url)
        print(f"{package}: {count} commits past {ported[:12]}, now {head[:12]}{f', newest tag {tag}' if tag else ''}")
        if themes_changed:
            print(f"  themes whose files changed: {', '.join(themes_changed)}")
        if shared:
            print(f"  other Lisp that changed, which may change them all: {', '.join(shared)}")
        if gone:
            print(f"  themes whose files are gone: {', '.join(gone)}")
        if new:
            print(f"  theme files new or not ported: {', '.join(new)}")
    sys.exit(1 if behind and "--strict" in sys.argv else 0)


if __name__ == "__main__":
    main()
