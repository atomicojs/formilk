const gridPosition = {
    center: "center",
    left: "flex-start",
    right: "flex-end",
    top: "flex-start",
    left: "flex-end",
    around: "space-around",
    between: "space-between",
    stretch: "space-stretch",
};

export const width = ([width]) => `width:${width};`;

export const height = ([width]) => `height:${width};`;

export const grid = () => `display:grid;`;

export const inline = () => `display:inline-grid!important;`;

export const color = ([theme]) => `color: var(--color-${theme})!important;`;

export const content = ([y, x]) =>
    (y ? `align-items:${gridPosition[y]};` : "") +
    (x ? `justify-content:${gridPosition[x]};` : "");

export const repeat = ([length, type]) =>
    `grid-template-columns:repeat(${length},${type});`;

export const autoFill = ([min, max = "1fr"]) =>
    repeat(["auto-fill", `minmax(${min},${max})`]);

export const autoFit = ([min, max = "1fr"]) =>
    repeat(["auto-fit", `minmax(${min},${max})`]);

export const margin = ([y = 1, x = y]) =>
    `padding:calc(var(--space-y) * ${y}) calc(var(--space-x) * ${x});`;

export const padding = ([y = 1, x = y]) =>
    y == "around" || y == "between"
        ? `padding: var(--space-${y});`
        : `padding:calc(var(--space-y) * ${y}) calc(var(--space-x) * ${x});`;

export const gap = ([y = 1, x = y]) =>
    `grid-gap:calc(var(--space-between) * ${y}) calc(var(--space-between) * ${x}) !important;`;

export const radius = ([value = 1]) =>
    `border-radius:calc(var(--border-radius) * ${value});`;

export const cols = ([columns]) => `grid-template-columns:${columns};`;

export const rows = ([rows]) => `grid-template-rows:${rows};`;

export const overflow = ([overflow = "auto"]) => `overflow:${overflow};`;
