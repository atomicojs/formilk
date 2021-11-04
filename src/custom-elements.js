import options from "./options";

export default {
    define(tagName, Element, opts) {
        customElements.define(`${options.prefix}-${tagName}`, Element, opts);
    },
};
