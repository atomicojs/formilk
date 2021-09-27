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
    const slotContent = useSlot(refSlotContent).filter((el) =>
        el.textContent.trim()
    );
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
        <host
            shadowDom
            shape={slotIcon.length && !slotContent.length ? "square" : null}
        >
            <button
                onclick={() => buttonOutRef.current.click()}
                disabled={disabled}
                class="input-box input-box--border input-box--full-width "
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
    shape: {
        type: String,
        reflect: true,
    },
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
            --size: var(--min-size);
            display: grid;
            grid-gap: 0.5em;
            align-items: center;
            justify-content: center;
            min-width: var(--size);
            min-height: var(--size);
            grid-template-columns: repeat(var(--cols), auto);
            line-height: 1em;
            position: relative;
        }

        :host([size="small"]) .input-box {
            min-height: calc(var(--size) * 0.8);
            min-width: calc(var(--size) * 0.8);
            padding: 0 var(--space-x);
        }

        :host([ghost]) .input-box {
            background: transparent;
            border: none;
            box-shadow: none;
        }

        :host([size="small"]) {
            font-size: 0.75em;
            align-items: center;
        }

        :host([shape="square"]) .input-box {
            padding: 0px;
        }
    `,
];

export const Button = c(button);
