class System {
    prefix: string;
    constructor(prefix: string) {
        this.prefix = prefix;
    }
    define = (
        tagName: string,
        Element: CustomElementConstructor,
        opts?: ElementDefinitionOptions
    ) => {
        customElements.define(`${this.prefix}-${tagName}`, Element, opts);
    };
    cssProp = (prop: string, value?: string) =>
        `var(--${this.prefix}--${prop}${value ? ", " + value : ""})`;
    cssProps = (cssText: string) =>
        cssText
            .replace(
                /\s*([^:]+)\s*:\s*([^;]+);/g,
                (args, prop, value) =>
                    `--${prop}: ${this.cssProp(prop, value)};\n`
            )
            .trim();
}

const system = new System("fm");

export const { cssProp, cssProps } = system;

export default system;
