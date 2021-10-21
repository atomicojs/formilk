import { parseCssParams } from "@uppercod/parse/parse-css-params";
import * as gridUtils from "./grid-utils";

const cache = {};

export function getUtils(utils, selector) {
    if (cache[utils]) return cache[utils];
    return (cache[utils] = parseCssParams(utils).reduce((css, utils) => {
        const [last] = utils.at(-1);
        const isMedia = /^(\d+)(px|rem|em)$/.test(last);
        utils = isMedia ? utils.slice(0, -1) : utils;
        return (
            css +
            `${
                isMedia ? `@media (min-width: ${last}){` : ""
            }${selector}{${utils.reduce(
                (css, [util, params]) =>
                    css + (util in gridUtils ? gridUtils[util](params) : ""),
                ""
            )}}${isMedia ? "}" : ""}`
        );
    }, ""));
}
