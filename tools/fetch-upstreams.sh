#!/bin/sh
# Checks out each upstream in tools/upstreams.tsv at its pinned commit or
# tag, in DIR (default .upstream), for tools/port-themes.el to port from. An
# upstream with paths named, such as GNU Emacs's etc/themes/ and etc/rgb.txt,
# is checked out at its tag with only those.
set -eu
cd "$(dirname "$0")/.."
dir=${1:-.upstream}
mkdir -p "$dir"
grep -v '^#' tools/upstreams.tsv | while IFS='	' read -r name url ref only; do
  [ -n "$name" ] || continue
  if [ -n "${only:-}" ]; then
    if [ "$(git -C "$dir/$name" describe --tags 2>/dev/null || true)" != "$ref" ]; then
      rm -rf "$dir/$name"
      git clone --quiet --depth 1 --filter=blob:none --sparse --branch "$ref" "$url" "$dir/$name"
    fi
    # shellcheck disable=SC2086
    git -C "$dir/$name" sparse-checkout set --no-cone $only
  else
    if [ ! -d "$dir/$name/.git" ]; then
      git clone --quiet --filter=blob:none "$url" "$dir/$name"
    fi
    git -C "$dir/$name" fetch --quiet --tags origin
    git -C "$dir/$name" -c advice.detachedHead=false checkout --quiet "$ref"
  fi
  echo "$name $(git -C "$dir/$name" rev-parse --short HEAD) $(git -C "$dir/$name" describe --tags 2>/dev/null || echo untagged)"
done
