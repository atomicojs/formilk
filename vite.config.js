import atomico from "@atomico/plugin-vite";
import { defineConfig } from "vite";
import { getFragments } from "@uppercod/str-fragment";
import esbuild from "esbuild";
import MagicString from "magic-string";

export default defineConfig({
    build: {
        target: "esnext",
    },
    plugins: [
        atomico(),
        {
            transform(code, id) {
                if (id.endsWith("tsx")) {
                    let fragments = getFragments(code, {
                        open: /css`/,
                        end: /`/,
                    });

                    const magicString = new MagicString(code);

                    fragments.map(
                        ({ open: { indexEnd }, end: { indexOpen } }) => {
                            const css = code.slice(indexEnd, indexOpen);
                            if (!css) return;
                            const cssminify = esbuild.transformSync(css, {
                                loader: "css",
                                minify: true,
                            });

                            magicString.overwrite(
                                indexEnd,
                                indexOpen,
                                cssminify.code
                            );
                        }
                    );

                    return {
                        map: magicString.generateMap({ hires: true }),
                        code: magicString.toString(),
                    };
                }
            },
        },
    ],
});
