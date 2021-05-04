/**
 *
 * @param {string} label
 * @param {import("./source/source").Source} source
 * @returns
 */
export const getSourcePath = (label, source) =>
    source.path || encodeURI(`/${label}/${source.label}`.toLowerCase());
/**
 * @param {Group[]} groups
 * @param {(path:string)=>any} match
 */
export const getPagination = (groups, match) => {
    const sources = groups
        .map(({ label, sources }) =>
            sources
                .filter((source) => !source.href)
                .map((source) => ({
                    href: getSourcePath(label, source),
                    label: source.label,
                }))
        )
        .flat();

    for (let i = 0; i < sources.length; i++) {
        if (match(sources[i].href)) {
            const prev = sources[i - 1];
            const next = sources[i + 1];
            return [prev, next];
        }
    }
    return [];
};
