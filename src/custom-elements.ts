import options from "./options";

export default {
    define(
        tagName: string,
        Element: CustomElementConstructor,
        opts?: ElementDefinitionOptions
    ) {
        customElements.define(`${options.prefix}-${tagName}`, Element, opts);
    },
};
