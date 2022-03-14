import { parseCssParams } from "@uppercod/parse/parse-css-params";
import * as gridUtils from "./grid-utils";

const cache = {};

export function getUtils(utils, selector) {
    if (cache[utils]) return cache[utils];
    return (cache[utils] = parseCssParams(utils).reduce((css, utils) => {
        const [last] = utils.at(-1);
        const isMedia = /^(\d+)(px|rem|em)$/.test(last);
        utils = isMedia ? utils.slice(0, -1) : utils;
        let rootRules = "";
        const rule =
            selector +
            "{" +
            utils.reduce((rule, [util, params]) => {
                const nextStyle = gridUtils[util](...params);
                if (nextStyle.selector) {
                    rootRules += `${nextStyle.selector}{${nextStyle.cssText}}`;
                    return rule;
                }
                for (let prop in nextStyle) {
                    if (!nextStyle[prop]) continue;
                    rule +=
                        prop.replace(
                            /([A-Z])/g,
                            (all) => "-" + all.toLowerCase()
                        ) +
                        ":" +
                        nextStyle[prop] +
                        ";";
                }
                return rule;
            }, "") +
            "}" +
            rootRules;

        return css + (isMedia ? `@media (min-width: ${last}){${rule}}` : rule);
    }, ""));
}
