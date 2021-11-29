import { c, useRef, css, useUpdate, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { inputGenericProps } from "../props";
import { Input } from "../input/input";
import { Icon } from "../icon/icon";
import customElements from "../custom-elements";
export { SelectOption } from "./select-option";

/**
 *
 * @param {import("atomico").Props<select.props>} props
 */
function select({ name, placeholder }) {
    const refSlotOption = useRef();
    const slotOption = useSlot(refSlotOption);
    const disabled = useDisabled();
    const update = useUpdate();
    const [value, setValue] = useProp("value");

    useRender(() => (
        <select
            slot="input"
            name={name}
            disabled={disabled}
            onchange={({ target: { value } }) => setValue(value)}
        >
            {placeholder && (
                <option value="" disabled selected>
                    {placeholder}
                </option>
            )}
            {slotOption.map(function option(child) {
                return child.options.length ? (
                    <optgroup label={child.label}>
                        {child.options.map(option)}
                    </optgroup>
                ) : (
                    <option
                        value={child.value}
                        selected={value === child.value || child.selected}
                    >
                        {child.label || child.value}
                    </option>
                );
            })}
        </select>
    ));

    return (
        <host shadowDom onOptionChange={update}>
            <slot name="option" ref={refSlotOption}></slot>
            <div class="input">
                <div class="input-icon">
                    <slot name="icon">
                        <Icon
                            type="down"
                            size="calc(1em * var(--size-small))"
                        ></Icon>
                    </slot>
                </div>
                <slot name="input"></slot>
            </div>
        </host>
    );
}

select.props = {
    ...inputGenericProps,
    placeholder: String,
};

select.styles = [
    Input.styles,
    css`
        :host {
            display: inline-flex;
        }
        .options {
            display: none;
        }
        .input {
            display: flex;
        }
        ::slotted([slot="input"]) {
            padding: 0 calc(var(--space-x) * 2) 0 var(--space-x);
            appearance: none;
        }
        .input-icon {
            display: flex;
            position: absolute;
            top: 50%;
            right: var(--space-x);
            transform: translateY(-50%);
        }
    `,
];

export const Select = c(select);

customElements.define("select", Select);
