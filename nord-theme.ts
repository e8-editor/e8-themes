// SPDX-License-Identifier: MIT
//
// The nord theme for E8.
//
// A port to E8 of nord-theme.el from nord-theme 0.6.0 (https://github.com/nordtheme/emacs), at commit 551b2b8a0751, v0.6.0. Written by tools/port-themes.el from the faces Emacs gives the theme; sources.json says more. It is not the upstream authors' work as they published it, and they do not endorse it.
//
// Author: Sven Greb
// Copyright (c) 2016-present Sven Greb <development@svengreb.de> (https://www.svengreb.de)
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

import { customThemeSetFaces, deftheme, provideTheme } from "custom";

deftheme("nord", "An arctic, north-bluish clean and elegant theme");

customThemeSetFaces("nord", [
  ["default", { foreground: "#d8dee9", background: "#2e3440" }],
  ["bold", { weight: "bold" }],
  ["bold-italic", { weight: "bold", slant: "italic" }],
  ["error", { foreground: "#bf616a", weight: "bold" }],
  ["escape-glyph", { foreground: "#d08770" }],
  ["font-lock-builtin-face", { foreground: "#81a1c1" }],
  ["font-lock-comment-face", { foreground: "#616e88" }],
  ["font-lock-comment-delimiter-face", { foreground: "#616e88" }],
  ["font-lock-constant-face", { foreground: "#81a1c1" }],
  ["font-lock-doc-face", { foreground: "#616e88" }],
  ["font-lock-function-name-face", { foreground: "#88c0d0" }],
  ["font-lock-keyword-face", { foreground: "#81a1c1" }],
  ["font-lock-negation-char-face", { foreground: "#81a1c1" }],
  ["font-lock-preprocessor-face", { foreground: "#5e81ac", weight: "bold" }],
  ["font-lock-reference-face", { foreground: "#81a1c1" }],
  ["font-lock-regexp-grouping-backslash", { foreground: "#ebcb8b" }],
  ["font-lock-regexp-grouping-construct", { foreground: "#ebcb8b" }],
  ["font-lock-string-face", { foreground: "#a3be8c" }],
  ["font-lock-type-face", { foreground: "#8fbcbb" }],
  ["font-lock-variable-name-face", { foreground: "#d8dee9" }],
  ["font-lock-warning-face", { foreground: "#ebcb8b" }],
  ["italic", { slant: "italic" }],
  ["shadow", { foreground: "#4c566a" }],
  ["underline", { underline: true }],
  ["warning", { foreground: "#ebcb8b", weight: "bold" }],
  ["diff-added", { foreground: "#a3be8c" }],
  ["diff-changed", { foreground: "#ebcb8b" }],
  ["diff-context", { inherit: "default" }],
  ["diff-file-header", { foreground: "#88c0d0" }],
  ["diff-function", { foreground: "#8fbcbb" }],
  ["diff-header", { foreground: "#81a1c1", weight: "bold" }],
  ["diff-hunk-header", { foreground: "#81a1c1", background: "#2e3440" }],
  ["diff-indicator-added", { foreground: "#a3be8c" }],
  ["diff-indicator-changed", { foreground: "#ebcb8b" }],
  ["diff-indicator-removed", { foreground: "#bf616a" }],
  ["diff-nonexistent", { foreground: "#bf616a" }],
  ["diff-refine-added", { foreground: "#a3be8c" }],
  ["diff-refine-changed", { foreground: "#ebcb8b" }],
  ["diff-refine-removed", { foreground: "#bf616a" }],
  ["diff-removed", { foreground: "#bf616a" }],
  ["border", { foreground: "#d8dee9" }],
  ["buffer-menu-buffer", { foreground: "#d8dee9", weight: "bold" }],
  ["button", { background: "#2e3440", foreground: "#88c0d0", box: { lineWidth: 2, color: "#d8dee9", style: "pressed-button" } }],
  ["completions-annotations", { foreground: "#81a1c1" }],
  ["completions-common-part", { foreground: "#88c0d0", weight: "bold" }],
  ["completions-first-difference", { foreground: "#bf616a" }],
  ["cursor", { background: "#d8dee9" }],
  ["fringe", { foreground: "#d8dee9", background: "#2e3440" }],
  ["file-name-shadow", { inherit: "shadow" }],
  ["header-line", { foreground: "#d8dee9", background: "#434c5e" }],
  ["help-argument-name", { foreground: "#88c0d0" }],
  ["highlight", { foreground: "#88c0d0", background: "#434c5e" }],
  ["hl-line", { background: "#3b4252" }],
  ["isearch", { foreground: "#2e3440", background: "#88c0d0" }],
  ["isearch-fail", { foreground: "#bf616a" }],
  ["link", { underline: true }],
  ["link-visited", { underline: true }],
  ["match", { inherit: "isearch" }],
  ["minibuffer-prompt", { foreground: "#88c0d0", weight: "bold" }],
  ["mode-line", { foreground: "#88c0d0", background: "#4c566a" }],
  ["mode-line-buffer-id", { weight: "bold" }],
  ["mode-line-highlight", { inherit: "highlight" }],
  ["mode-line-inactive", { foreground: "#d8dee9", background: "#3b4252" }],
  ["next-error", { inherit: "error" }],
  ["nobreak-space", { foreground: "#4c566a" }],
  ["outline-1", { foreground: "#88c0d0", weight: "bold" }],
  ["outline-2", { inherit: "outline-1" }],
  ["outline-3", { inherit: "outline-1" }],
  ["outline-4", { inherit: "outline-1" }],
  ["outline-5", { inherit: "outline-1" }],
  ["outline-6", { inherit: "outline-1" }],
  ["outline-7", { inherit: "outline-1" }],
  ["outline-8", { inherit: "outline-1" }],
  ["query-replace", { foreground: "#88c0d0", background: "#434c5e" }],
  ["region", { background: "#434c5e" }],
  ["secondary-selection", { background: "#434c5e" }],
  ["show-paren-match", { foreground: "#2e3440", background: "#88c0d0" }],
  ["show-paren-mismatch", { background: "#bf616a" }],
  ["success", { foreground: "#a3be8c" }],
  ["tooltip", { foreground: "#2e3440", background: "#d8dee9" }],
  ["trailing-whitespace", { foreground: "#4c566a" }],
  ["vertical-border", { foreground: "#434c5e" }],
  ["whitespace-line", { background: "#2e3440" }],
  ["whitespace-trailing", { inherit: "trailing-whitespace" }],
  ["window-divider", { background: "#4c566a" }],
  ["window-divider-first-pixel", { background: "#4c566a" }],
  ["window-divider-last-pixel", { background: "#4c566a" }],
  ["markdown-blockquote-face", { foreground: "#616e88" }],
  ["markdown-inline-code-face", { foreground: "#8fbcbb" }],
  ["markdown-link-face", { foreground: "#88c0d0" }],
  ["markdown-url-face", { foreground: "#d8dee9", underline: true }],
  ["magit-diff-context-highlight", { background: "#434c5e" }],
  ["magit-diffstat-added", { foreground: "#a3be8c" }],
  ["magit-diffstat-removed", { foreground: "#bf616a" }],
  ["magit-hash", { foreground: "#88c0d0" }],
  ["magit-log-author", { foreground: "#8fbcbb" }],
  ["magit-process-ng", { foreground: "#ebcb8b", weight: "bold" }],
  ["magit-process-ok", { foreground: "#a3be8c", weight: "bold" }],
  ["magit-section-heading", { foreground: "#8fbcbb", weight: "bold" }],
  ["magit-section-highlight", { background: "#434c5e" }],
  ["org-level-1", { foreground: "#8fbcbb", weight: "extra-bold" }],
  ["org-level-2", { foreground: "#88c0d0", weight: "bold" }],
  ["org-level-3", { foreground: "#81a1c1", weight: "semi-bold" }],
  ["org-level-4", { foreground: "#5e81ac", weight: "normal" }],
  ["org-level-5", { inherit: "org-level-4" }],
  ["org-level-6", { inherit: "org-level-4" }],
  ["org-level-7", { inherit: "org-level-4" }],
  ["org-level-8", { inherit: "org-level-4" }],
  ["org-agenda-structure", { foreground: "#81a1c1" }],
  ["org-agenda-date", { foreground: "#88c0d0", underline: false }],
  ["org-agenda-done", { foreground: "#a3be8c" }],
  ["org-agenda-dimmed-todo-face", { background: "#ebcb8b" }],
  ["org-block", { foreground: "#d8dee9" }],
  ["org-block-begin-line", { foreground: "#8fbcbb" }],
  ["org-block-end-line", { foreground: "#8fbcbb" }],
  ["org-checkbox", { foreground: "#81a1c1" }],
  ["org-checkbox-statistics-done", { foreground: "#a3be8c" }],
  ["org-checkbox-statistics-todo", { foreground: "#ebcb8b" }],
  ["org-code", { foreground: "#8fbcbb" }],
  ["org-column", { background: "#434c5e" }],
  ["org-column-title", { inherit: "org-column", weight: "bold", underline: true }],
  ["org-date", { foreground: "#88c0d0" }],
  ["org-document-info", { foreground: "#d8dee9" }],
  ["org-document-info-keyword", { foreground: "#4c566a", weight: "bold" }],
  ["org-document-title", { foreground: "#88c0d0", weight: "bold" }],
  ["org-done", { foreground: "#a3be8c", weight: "bold" }],
  ["org-ellipsis", { foreground: "#4c566a" }],
  ["org-footnote", { foreground: "#88c0d0" }],
  ["org-formula", { foreground: "#81a1c1" }],
  ["org-hide", { foreground: "#2e3440", background: "#2e3440" }],
  ["org-link", { underline: true }],
  ["org-scheduled", { foreground: "#a3be8c" }],
  ["org-scheduled-previously", { foreground: "#ebcb8b" }],
  ["org-scheduled-today", { foreground: "#88c0d0" }],
  ["org-special-keyword", { foreground: "#81a1c1" }],
  ["org-table", { foreground: "#81a1c1" }],
  ["org-todo", { foreground: "#ebcb8b", weight: "bold" }],
  ["org-upcoming-deadline", { foreground: "#d08770" }],
  ["org-warning", { foreground: "#ebcb8b", weight: "bold" }],
  ["org-sexp-date", { foreground: "#8fbcbb" }],
  ["org-quote", { inherit: "org-block", slant: "italic" }],
  ["org-verse", { inherit: "org-block", slant: "italic" }],
  ["org-verbatim", { foreground: "#8fbcbb" }],
]);

// Nord's options, as nord-theme.el gives them: tools/port-themes.el ports
// the theme with them unset and appends this, which gives region and
// mode-line-inactive the faces the options choose. Set them before
// load-theme.

e8.defineVariable({
  name: "nord-region-highlight",
  doc: 'How the region shows: nil for nord2, "snowstorm" for nord0 on nord4, or "frost" for nord0 on nord8. Reload the theme after changing it.',
  value: null,
});
e8.defineVariable({
  name: "nord-uniform-mode-lines",
  doc: "Whether the inactive mode lines look like the active one, on nord3. Reload the theme after changing it.",
  value: false,
});

const nordRegion = e8.variable("nord-region-highlight");
if (nordRegion === "frost" || nordRegion === "snowstorm") {
  customThemeSetFaces("nord", [["region", { foreground: "#2E3440", background: nordRegion === "frost" ? "#88C0D0" : "#D8DEE9" }]]);
}
if (e8.variable("nord-uniform-mode-lines") === true) {
  customThemeSetFaces("nord", [["mode-line-inactive", { foreground: "#D8DEE9", background: "#4C566A" }]]);
}

provideTheme("nord");
