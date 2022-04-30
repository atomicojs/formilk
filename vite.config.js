import atomico from "@atomico/plugin-vite";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        target: "esnext",
    },
    plugins: [atomico({ cssLiterals: { minify: true, postcss: true } })],
});
