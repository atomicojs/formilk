import "./disable-hmr";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    previewTabs: {
        canvas: {
            hidden: true,
        },
    },
    viewMode: "docs",
};
