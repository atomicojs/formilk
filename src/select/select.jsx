import { c, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { inputGenericProps } from "../props";
import { Input } from "../input/input";
import { Icon } from "../icon/icon";
import customElements from "../custom-elements";

/**
 *
 * @param {import("atomico").Props<select.props>} props
 */
function select({ name, placeholder }) {
    const refSlot = useRef();
    const childNodes = useSlot(refSlot);
    const disabled = useDisabled();
    /**
     * @type {(HTMLOptionElement|HTMLOptGroupElement)[]}
     */
    const options = childNodes.filter(
        (child) =>
            child instanceof HTMLOptionElement ||
            child instanceof HTMLOptGroupElement
    );

    useRender(
        () => (
            <select slot="input" name={name} disabled={disabled}>
                {placeholder && (
                    <option value="" disabled selected>
                        {placeholder}
                    </option>
                )}
                {options.map((child) => {
                    const Child = child.cloneNode(true);
                    return <Child />;
                })}
            </select>
        ),
        [disabled, name, placeholder, ...options]
    );

    return (
        <host shadowDom>
            <slot class="options" ref={refSlot}></slot>
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
