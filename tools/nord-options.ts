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
