import { c, useRef, css, useUpdate, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { inputGenericProps } from "../props";
import {
    tokensSpace,
    tokensSize,
    tokensBorder,
    tokensColor,
    tokensShadow,
    tokensOpacity,
    tokensTransition,
} from "../tokens";
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
    const [, setFocus] = useProp("focused");

    useRender(() => (
        <select
            slot="input"
            name={name}
            disabled={disabled}
            onchange={({ target: { value } }) => setValue(value)}
            onfocus={() => setFocus(true)}
            onblur={() => setFocus(false)}
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
        </host>
    );
}

select.props = {
    ...inputGenericProps,
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
    tokensSpace,
    tokensSize,
    tokensBorder,
    tokensColor,
    tokensShadow,
    tokensOpacity,
    tokensTransition,
    css`
        :host {
            --color-fill: var(--color-current-layer, var(--color-input-fill));
            --color-divide: var(--color-input-divide);
            --color-contrast: var(
                --color-current-contrast,
                var(--color-input-contrast)
            );
            --color-status: var(--color-input-status);
            --shadow: var(--shadow-action);
            --icon-size: calc(1em * var(--size-small));
            --line-opacity: var(--opacity-disabled);
            --line-opacity: 0;
            ---height: var(--size-min);
            ---space-x: var(--space-x);
            ---space-between: var(--space-between);
            ---padding: 0
                calc(var(---space-x) + var(--icon-size) + var(---space-between))
                0px var(---space-x);
            ---size-font: var(--size-font);
            font-size: var(---size-font);
            display: inline-flex;
        }
        :host([shadow]) {
            box-shadow: var(--shadow);
        }
        .input {
            display: grid;
            min-width: 100%;
            min-height: var(---height);
            align-items: center;
            position: relative;
            background: var(--color-fill);
            color: var(--color-contrast);
            border-radius: var(--border-radius);
            border: var(--border-width) solid var(--color-divide);
            box-sizing: border-box;
            grid-gap: var(--space-between);
        }
        ::slotted([slot="input"]) {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            font-family: unset;
            font-size: unset;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            color: unset;
            outline: none;
            padding: 0px;
            appearance: none;
            padding: var(---padding);
            letter-spacing: unset;
        }
        .input-line {
            width: 100%;
            height: var(--border-width);
            padding: 0 var(---space-x);
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 3;
            transform: translateY(100%);
            opacity: var(--line-opacity);
            transition: var(--transition-x0);
        }
        .input-line-fill {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background: var(--color-status);
        }
        .input-icon {
            position: absolute;
            right: var(---space-x);
            top: 50%;
            transform: translateY(-50%);
        }
        .hidden {
            display: none;
        }
        :host([size="small"]) {
            ---size-font: var(--size-font-small);
            ---height: calc(var(--size-min) * var(--size-small));
            ---space-x: calc(var(--space-x) * var(--size-small));
            ---space-between: calc(var(--space-between) * var(--size-small));
        }
        :host([narrow]) {
            ---space-x: 0px;
        }
        :host([ghost]) {
            --color-fill: transparent;
        }
        :host([focused]) {
            --line-opacity: 1;
        }
    `,
];

export const Select = c(select);

customElements.define("select", Select);
