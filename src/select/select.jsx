import { c, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { inputGenericProps } from "../props";
import { Input } from "../input/input";

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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10.486"
                            height="6.242"
                            viewBox="0 0 10.486 6.242"
                        >
                            <path
                                d="M-7.051,242.364l-4.243-4.243a1,1,0,0,1,0-1.414,1,1,0,0,1,1.415,0l3.535,3.535,3.535-3.535a1,1,0,0,1,1.415,0,1,1,0,0,1,0,1.414l-4.243,4.243a1,1,0,0,1-.707.293A1,1,0,0,1-7.051,242.364Z"
                                transform="translate(11.586 -236.414)"
                                fill="var(--color-primary)"
                            />
                        </svg>
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
