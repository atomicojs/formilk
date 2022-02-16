module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-controls",
        "@storybook/addon-storysource",
    ],
    framework: "@storybook/html",
    core: {
        builder: "webpack5",
    },
};
