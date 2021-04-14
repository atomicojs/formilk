export const inputStyle: "\n    :host{\n        display: block;\n        background: var(--input_background);\n        box-shadow: var(--input_shadow);\n        border-radius: var(--input_radius);   \n    }\n    .label,\n    .icon{\n        box-sizing: border-box;\n        display: flex;\n        align-items: center;\n    }\n    .label{\n      padding: 0px .5rem 0px 1.25rem ;\n    }\n    .icon{\n      padding: 0px .25rem 0px 1.25rem ;\n    }\n    .icon:not(.hidden) + .label:not(.hidden){\n      padding-left: .75rem;\n    }\n    .hidden{\n      display: none;\n    }\n    .row{\n        width: 100%;\n        min-height: 3.125rem;\n        display: flex;\n        position: relative;\n    }\n    .input {\n      flex: 0%;\n      min-height: 100%;\n      position: relative;\n    }\n    .line{\n        width: calc(100% - 2rem);\n        height: .1rem;\n        position: absolute;\n        background: var(--input_line);\n        left: 50%;\n        bottom: 0px;\n        transform: translateX(-50%);\n        z-index: 2;\n    }\n    ::slotted(input){\n      width: 100%;\n      height: 100%;\n      background: transparent;\n      border: none;\n      font-family: unset;\n      font-size: 1rem;\n      padding: 0px 1rem;\n      box-sizing: border-box;\n      position: relative;\n      z-index: 2;\n  }\n";
export namespace inputProps {
    const name: StringConstructor;
    const type: StringConstructor;
    const value: any;
    const list: StringConstructor;
    const pattern: StringConstructor;
    const min: NumberConstructor;
    const max: NumberConstructor;
    const minLength: NumberConstructor;
    const maxLength: NumberConstructor;
    const placeholder: StringConstructor;
    const required: BooleanConstructor;
    const checked: BooleanConstructor;
    namespace disabled {
        const type_1: BooleanConstructor;
        export { type_1 as type };
        export const reflect: boolean;
    }
}
export const InputBasic: import("atomico/types/dom").AtomicoElement<import("atomico").Props<{
    name: StringConstructor;
    type: StringConstructor;
    value: any;
    list: StringConstructor;
    pattern: StringConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    minLength: NumberConstructor;
    maxLength: NumberConstructor;
    placeholder: StringConstructor;
    required: BooleanConstructor;
    checked: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        reflect: boolean;
    };
}>, import("atomico").HostContext, {
    new (): HTMLElement;
    prototype: HTMLElement;
}>;
