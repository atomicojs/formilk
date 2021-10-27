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

export const padding = (params) => {
    params = !params.length ? [1, 1] : params;
    return `padding:${params
        .map((value, i) =>
            value === "between"
                ? "var(--gap, var(--space-between))"
                : value === "around"
                ? "var(--space-around)"
                : /\d/.test(value)
                ? `calc(var(--space-${i % 2 ? "x" : "y"}) * ${value || 1})`
                : value
        )
        .join(" ")} ;`;
};

export const gap = ([y = 1, x = y]) =>
    `--gap-rows : calc(var(--space-between) * ${y});
    --gap-cols: calc(var(--space-between) * ${x});`;

export const radius = ([value = 1]) =>
    `border-radius:calc(var(--border-radius) * ${value});`;

export const cols = ([columns]) => `grid-template-columns:${columns};`;

export const rows = ([rows]) => `grid-template-rows:${rows};`;

export const overflow = ([overflow = "auto"]) => `overflow:${overflow};`;
