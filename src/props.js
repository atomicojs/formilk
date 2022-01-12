export const GenericBoolean = { type: Boolean, reflect: true };

export const GenericString = { type: String, reflect: true };

export const InputGenericProps = {
    name: GenericString,
    required: GenericBoolean,
    disabled: GenericBoolean,
    value: null,
    shadow: GenericBoolean,
    size: GenericString,
    focused: GenericBoolean,
    focusable: {
        ...GenericBoolean,
        value: true,
    },
};
