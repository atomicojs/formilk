/**
 * @typedef {Object} Tokens
 * @property {string} title
 * @property {string} [type]
 * @property {[string,string][]} children
 */

/**
 * @type {Object<string,Tokens>}
 */
export const tokens = {};
/**
 *
 * @param {TemplateStringsArray}
 */
export function tokenize({ raw }) {
    let id;
    return raw
        .join("")
        .replace(/\s+([^:]+) *: *([^;]+);/g, (all, prop, value) => {
            if (prop[0] == "@") {
                let meta = prop.slice(1);
                if (meta == "title") id = value;
                if (id) {
                    tokens[id] = tokens[id] || {
                        children: [],
                    };
                    tokens[id][meta] = value;
                }
                return "";
            }
            const global = `--fm--${prop}`;
            const serialize = `--${prop}: var(${global}, ${value});\n`;
            if (id) {
                tokens[id].children.push([global, value]);
            }
            return serialize;
        });
}
