import { c, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { tokensInput, tokenColors } from "../tokens.js";

/**
 *
 * @param {import("atomico").Props<button.props>} props
 * @returns
 */
function button({ type, name, value, theme, disabled }) {
    const refSlotIcon = useRef();
    const refSlotContent = useRef();
    const buttonOutRef = useRef();
    const slotIcon = useSlot(refSlotIcon);
    const slotContent = useSlot(refSlotContent);

    useRender(
        () => (
            <button
                type="submit"
                name={name}
                value={value}
                ref={buttonOutRef}
                slot="button"
                tabindex="-1"
            ></button>
        ),
        [type, name, value]
    );

    return (
        <host shadowDom>
            <button
                onclick={() => buttonOutRef.current.click()}
                disabled={disabled}
                class={`input-box input-box--use-border ${
                    slotIcon.length ? " box-icon" : ""
                }${slotContent.length ? " box-label" : ""}`}
                style={
                    theme && {
                        "--background": `var(--${theme})`,
                        "--color": `var(--${theme}-contrast, var(--primary-contrast))`,
                    }
                }
            >
                <slot ref={refSlotIcon} name="icon"></slot>
                <slot ref={refSlotContent}></slot>
            </button>
        </host>
    );
}

button.props = {
    name: String,
    value: String,
    type: {
        type: String,
        value: "submit",
    },
    theme: {
        type: String,
        reflect: true,
    },
    disabled: {
        type: Boolean,
        reflect: true,
    },
    size: {
        type: String,
        reflect: true,
    },
};

button.styles = [
    tokensInput,
    tokenColors,
    css`
        button {
            font-size: unset;
            font-weight: unset;
        }

        button:not(:disabled) {
            cursor: pointer;
        }

        button:disabled {
            opacity: 0.25;
        }

        .input-box {
            display: grid;
            grid-gap: 0.5em;
            align-items: center;
            justify-content: center;
            min-width: var(--min-height);
            min-height: var(--min-height);
        }

        :host([size="small"]) .input-box {
            --size: calc(var(--min-height) * 0.75);
            min-height: var(--size);
            min-width: var(--size);
            padding: 0 var(--padding-x);
        }

        :host([size="small"]) {
            font-size: 0.75em;
        }

        ::slotted([slot="icon"]) {
            display: block;
        }

        .box-icon:not(.box-label) {
            padding: 0;
        }

        .box-icon.box-label {
            grid-template-columns: auto auto;
        }
    `,
];

export const Button = c(button);
