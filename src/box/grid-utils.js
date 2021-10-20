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

export const margin = ([y = 1, x = y]) =>
    `padding:calc(var(--space-y) * ${y}) calc(var(--space-x) * ${x});`;

export const padding = ([y = 1, x = y]) =>
    `padding:calc(var(--space-y) * ${y}) calc(var(--space-x) * ${x});`;

export const gap = ([y = 1, x = y]) =>
    `grid-gap:calc(var(--space-between) * ${y}) calc(var(--space-between) * ${x}) !important;`;

export const radius = ([value = 1]) =>
    `border-radius:calc(var(--border-radius) * ${value});`;

export const themeFill = ([theme]) =>
    `--color-fill: var(--color-${theme}-fill);`;

export const themeContrast = ([theme]) =>
    `--color-contrast: var(--color-${theme}-contrast);`;

export const themeDivide = ([theme]) =>
    `--color-divide: var(--color-${theme}-divide);`;

export const themeLayer = ([theme]) =>
    `--color-layer: var(--color-${theme}-layer);`;

export const themeShadow = ([theme]) =>
    `--color-shadow: var(--color-${theme}-shadow);`;

export const theme = (theme) =>
    themeFill(theme) +
    themeContrast(theme) +
    themeDivide(theme) +
    themeLayer(theme) +
    themeShadow(theme);

export const cols = ([columns]) => `grid-template-columns:${columns};`;
