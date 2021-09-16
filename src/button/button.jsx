import { c, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { tokensInput } from "../tokens";
import { useDisabled } from "../hooks/use-disabled";
import { inputGenericProps } from "../props";

/**
 *
 * @param {import("atomico").Props<button.props>} props
 */
function button({ type, name, value, theme, href }) {
    const refSlotIcon = useRef();
    const refSecundaryAction = useRef();
    const refSlotContent = useRef();
    const buttonOutRef = useRef();
    const slotIcon = useSlot(refSlotIcon);
    const slotSecundaryAction = useSlot(refSecundaryAction);
    const slotContent = useSlot(refSlotContent);
    const disabled = useDisabled();

    useRender(
        () =>
            href ? (
                <a
                    slot="button"
                    tabindex="-1"
                    href={href}
                    ref={buttonOutRef}
                ></a>
            ) : (
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
                class={`input-box input-box--border input-box--full-width ${
                    slotIcon.length && !slotContent.length
                        ? "input-box--square"
                        : ""
                }`}
                style={{
                    ...(theme && {
                        "--background": `var(--${theme})`,
                        "--color": `var(--${theme}-contrast, var(--primary-contrast))`,
                    }),
                    "--cols":
                        !!slotIcon.length +
                        !!slotContent.length +
                        !!slotSecundaryAction.length,
                }}
            >
                <slot ref={refSlotIcon} name="icon"></slot>
                <slot ref={refSlotContent}></slot>
                <slot ref={refSecundaryAction} name="action"></slot>
            </button>
        </host>
    );
}

button.props = {
    ...inputGenericProps,
    ghost: {
        type: Boolean,
        reflect: true,
    },
    type: {
        type: String,
        value: "submit",
    },
    theme: {
        type: String,
        reflect: true,
    },
    size: {
        type: String,
        reflect: true,
    },
    href: String,
};

button.styles = [
    tokensInput,
    css`
        button {
            font-size: unset;
            font-weight: unset;
        }

        button:not(:disabled) {
            cursor: pointer;
        }

        .input-box {
            display: grid;
            grid-gap: 0.5em;
            align-items: center;
            justify-content: center;
            min-width: var(--min-height);
            min-height: var(--min-height);
            grid-template-columns: repeat(var(--cols), auto);
            line-height: 1em;
            position: relative;
        }

        :host([size="small"]) .input-box {
            --size: calc(var(--min-height) * 0.8);
            min-height: var(--size);
            min-width: var(--size);
            padding: 0 var(--padding-x);
        }

        :host([ghost]) .input-box {
            background: transparent;
            border: none;
            box-shadow: none;
        }

        :host([size="small"]) {
            font-size: 0.75em;
        }

        ::slotted([slot="icon"]) {
            display: block;
        }
        .input-box--square {
            padding: 0px;
        }
    `,
];

export const Button = c(button);
