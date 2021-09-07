import path from "path";
import { copyFile, mkdir } from "fs/promises";
import { Liquid } from "liquidjs";
import tag from "easy-tag-for-liquidjs";

const cwd = process.cwd();

const files = {};

export const copy = (from, to) =>
    (files[from] =
        files[from] ||
        Promise.resolve(to)
            .then(prepareDir)
            .then(() => copyFile(from, to)));

export function prepareDir(to) {
    const dir = path.dirname(to);
    files[dir] =
        files[dir] || mkdir(dir, { recursive: true }).catch(() => true);
    return files[dir];
}

/**
 * @param {{dev:object,build:object,config:object,}} data
 * @returns {import("vite").Plugin}
 */
export const plugin = ({ dev, build, config, ...data } = {}) => {
    let isServer;
    let vite = {};
    const engine = new Liquid({
        cache: true,
        dynamicPartials: false,
    });
    engine.registerTag(
        "copy",
        tag({
            async render(context, file) {
                if (isServer) return file;
                const id = path.join(
                    path.relative(
                        cwd,
                        path.join(path.dirname(context.__filename), file)
                    )
                );

                await copy(id, vite.outDir + "/" + id);

                return vite.base + id.replace(/\\/g, "/");
            },
        })
    );
    return {
        name: "plugin",
        configResolved({ base, root, build }) {
            const outDir = path.resolve(cwd, root) + "/" + build.outDir;
            Object.assign(vite, { base, root, outDir });
            return config;
        },
        configureServer() {
            isServer = true;
        },
        transformIndexHtml(html, chunk) {
            return engine.parseAndRender(
                html,
                {
                    ...data,
                    ...(isServer ? dev : build),
                    vite,
                    __path: chunk.path,
                    __filename: chunk.filename,
                },
                {
                    root: vite.root,
                }
            );
        },
    };
};
