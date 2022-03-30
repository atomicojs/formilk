import { c, useRef, css, useUpdate, useProp, Props, DOMEvent } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { InputGenericProps } from "../props";
import { Icon } from "../icon/icon";
import customElements from "../system";
import { InputSelectOption } from "./input-select-option";
export { InputSelectOption } from "./input-select-option";
import { inputBaseStyle } from "../input/input-base-style";

function select({ name, placeholder }: Props<typeof select>) {
    const refSlotOption = useRef();
    const slotOption = useSlot(refSlotOption) as InstanceType<
        typeof InputSelectOption
    >[];
    const disabled = useDisabled();
    const update = useUpdate();
    const [value, setValue] = useProp("value");
    const [, setFocus] = useProp("focused");

    useRender(() => (
        <select
            slot="input"
            class="reset"
            name={name}
            disabled={disabled}
            onchange={({ currentTarget: { value } }) => setValue(value)}
            onfocus={() => setFocus(true)}
            onblur={() => setFocus(false)}
        >
            {placeholder && (
                <option value="" disabled selected>
                    {placeholder}
                </option>
            )}
            {slotOption.map(function option(child) {
                return child?.options?.length ? (
                    <optgroup label={child.label}>
                        {child?.options.map(option)}
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
                <slot name="input"></slot>
                <div class="input-space">
                    <div className="input-row">
                        <Icon type="down"></Icon>
                        <div class="input-line">
                            <div class="input-line-fill"></div>
                        </div>
                    </div>
                </div>
            </div>
        </host>
    );
}

select.props = {
    ...InputGenericProps,
    placeholder: String,
    narrow: {
        type: Boolean,
        reflect: true,
    },
    ghost: {
        type: Boolean,
        reflect: true,
    },
};

select.styles = [
    inputBaseStyle,
    css`
        ::slotted([slot="input"]) {
            height: var(--size-xl);
            position: relative;
            padding: 0 calc(var(--space-x) + var(--size-xxs) + var(--size-xs)) 0
                var(--space-x);
            appearance: none;
            z-index: 1;
        }
        .input-space {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            padding: 0 var(--size-s);
            box-sizing: border-box;
            z-index: 0;
        }
        .input-row {
            justify-content: end;
        }
        .input {
            padding: 0;
        }
    `,
];

export const InputSelect = c(select);

customElements.define("input-select", InputSelect);
