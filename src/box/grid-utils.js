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

export const themeBg = ([theme]) =>
    `--color-current: var(--color-${theme}, var(--color-primary));`;

export const themeContrast = ([theme]) =>
    `--color-current-contrast: var(--color-${theme}-contrast, var(--color-primary-contrast));`;

export const themeDivide = ([theme]) =>
    `--color-current-divide: var(--color-${theme}-divide, var(--color-primary-divide));`;

export const themeLayer = ([theme]) =>
    `--color-current-layer: var(--color-${theme}-layer, var(--color-primary-layer));`;

export const themeShadow = ([theme]) =>
    `--color-current-shadow: var(--color-${theme}-shadow, var(--color-primary-shadow));`;

export const theme = (theme) =>
    themeBg(theme) +
    themeContrast(theme) +
    themeDivide(theme) +
    themeLayer(theme) +
    themeShadow(theme);

export const cols = ([columns]) => `grid-template-columns:${columns};`;
