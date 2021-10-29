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

export const size = ([w, h = w]) => width([w]) + height([h]);

export const width = ([value]) => `width:${value};`;

export const height = ([value]) => `height:${value};`;

export const grid = () => `display: grid;`;

export const none = () => `display: none!important;`;

export const inline = () => `display: inline-grid;`;

export const content = ([y, x]) =>
    (y ? `align-items:${gridPosition[y]};` : "") +
    (x ? `justify-content:${gridPosition[x]};` : "");

export const repeat = ([length, type]) =>
    `grid-template-columns:repeat(${length},${type});`;

export const autoFill = ([min, max = "1fr"]) =>
    repeat(["auto-fill", `minmax(${min},${max})`]);

export const autoFit = ([min, max = "1fr"]) =>
    repeat(["auto-fit", `minmax(${min},${max})`]);

export const margin = (params) =>
    padding(params).replace("padding:", "margin:");

export const padding = ([top = 1, right, bottom = top, left = right]) =>
    `padding:${[top, right, bottom, left]
        .map((value, i) =>
            value === "between"
                ? "var(--space-between)"
                : value === "around"
                ? "var(--space-around)"
                : /\d/.test(value)
                ? `calc(var(--space-${i % 2 ? "x" : "y"}) * ${value || 1})`
                : value
        )
        .join(" ")} ;`;

export const gap = ([y = 1, x = y]) =>
    `grid-gap : calc(var(--space-between) * ${y}) calc(var(--space-between) * ${x}) !important;`;

export const radius = ([value = 1]) =>
    `border-radius:calc(var(--border-radius) * ${value});`;

export const cols = ([columns]) => `grid-template-columns:${columns};`;

export const rows = ([rows]) => `grid-template-rows:${rows};`;

export const overflow = ([overflow = "auto"]) => `overflow:${overflow};`;
