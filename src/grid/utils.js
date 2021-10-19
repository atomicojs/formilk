const cache = {};

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

const gridUtils = {
    align: ([y, x]) =>
        (y ? `align-items:${gridPosition[y]};` : "") +
        (x ? `jusify-content:${gridPosition[x]};` : ""),
    repeat: ([length, type]) =>
        `grid-template-columns:repeat(${length},${type});`,
    space: ([y = 1, x = y]) =>
        `padding:calc(var(--space-y) * ${x}) calc(var(--space-x) * ${y});`,
    gap: ([y = 1, x = y]) =>
        `grid-gap:calc(var(--space-between) * ${y}) calc(var(--space-between) * ${x}) !important;`,
    radius: ([value = 1]) =>
        `border-radius:calc(var(--border-radius) * ${value});`,
    theme: ([theme]) =>
        `--theme-current:var(--theme-${theme});
         --theme-current-contrast:var(--theme-${theme}-contrast, var(--theme-primary-contrast));
         --theme-current-light: var(--border-width) solid var(--theme-${theme}-light, var(--theme-primary-light));`,
    cols: ([columns]) => `grid-template-columns:${columns};`,
};

function parse(template) {
    template = template.replace(/\s+/g, " ") + " ";

    let group = [];
    const capture = [group];
    let count = 0;
    let position = 0;
    let parentWord = "";
    let word = "";
    let params;

    const addParams = (param) => params && params.push(param.trim());

    const addUtil = (word, params) => group.push([word, params]);

    while (position < template.length) {
        const letter = template[position++];
        if (letter == "," && !count) {
            capture.push((group = []));
        } else if (letter == "," && count == 1) {
            addParams(word);
            word = "";
        } else if (letter == " " && !count && (parentWord || word)) {
            addUtil(parentWord || word, []);
            word = "";
            continue;
        } else if (letter == "(" && !count++) {
            parentWord = word;
            params = [];
            word = "";
            continue;
        } else if (letter == ")" && !--count) {
            addParams(word);
            addUtil(parentWord, params);
            parentWord = word = "";
            continue;
        } else {
            word += letter == " " && !count ? "" : letter;
        }
    }

    return capture;
}

export function getUtils(utils) {
    if (cache[utils]) return cache[utils];
    return (cache[utils] = parse(utils).reduce((css, utils) => {
        const [last] = utils.at(-1);
        const isMedia = /^(\d+)(px|rem|em)$/.test(last);
        utils = isMedia ? utils.slice(0, -1) : utils;
        return (
            css +
            `${
                isMedia ? `@media (min-width: ${last}){` : ""
            }:host{${utils.reduce(
                (css, [util, params]) =>
                    css + (util in gridUtils ? gridUtils[util](params) : ""),
                ""
            )}}${isMedia ? "}" : ""}`
        );
    }, ""));
}
