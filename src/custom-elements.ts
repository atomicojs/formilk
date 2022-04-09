import * as options from "./options";

export default {
    define(
        name: string,
        constructor: CustomElementConstructor,
        opt?: ElementDefinitionOptions
    ) {
        customElements.define(`${options.prefix}-${name}`, constructor, opt);
    },
};
