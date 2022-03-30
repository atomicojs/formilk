import { Type } from "atomico";

export const InputGenericProps = {
    name: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    value: null,
    size: { type: String as Type<"small">, reflect: true },
    focused: { type: Boolean, reflect: true },
    focusable: {
        type: Boolean,
        reflect: true,
        value: true,
    },
};
