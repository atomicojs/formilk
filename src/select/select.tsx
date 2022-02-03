import { c, useRef, css, useUpdate, useProp, Props, DOMEvent } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { InputGenericProps } from "../props";
import { Icon } from "../icon/icon";
import customElements from "../custom-elements";
import { SelectOption } from "./select-option";
export { SelectOption } from "./select-option";
import { inputBaseStyle } from "../input/input-base-style";

function select({ name, placeholder }: Props<typeof select>) {
    const refSlotOption = useRef();
    const slotOption = useSlot(refSlotOption) as InstanceType<
        typeof SelectOption
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
                <div className="input-content">
                    <Icon
                        class="input-icon"
                        type="down"
                        size="var(--icon-size)"
                    ></Icon>

                    <slot name="input"></slot>
                    <div class="input-line">
                        <div class="input-line-fill"></div>
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
        :host {
            --icon-size: calc(1em * var(--scale-small));
            --line-opacity: var(--opacity-disabled);
            --line-opacity: 0;
            --space-right: calc(
                var(--space--x) + var(--gap) + var(--icon-size)
            );
            font-size: var(--font-size);
        }
        .input-content {
            padding: 0px;
        }
        ::slotted([slot="input"].reset) {
            width: 100%;
            height: 100%;
            appearance: none;
            padding: 0 var(--space-right) 0 var(--space--x);
        }
        .input-icon {
            position: absolute;
            right: var(--space-x);
            top: 50%;
            transform: translateY(-50%);
        }
        .hidden {
            display: none;
        }
        :host([narrow]) {
            ---space-x: 0px;
        }
    `,
];

export const Select = c(select);

customElements.define("select", Select);
