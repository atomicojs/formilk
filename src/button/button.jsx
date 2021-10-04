import { c, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { tokensInput } from "../tokens";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { inputGenericProps } from "../props";

/**
 *
 * @param {import("atomico").Props<button.props>} props
 */
function button({ type, name, value, theme, href, tabindex }) {
    const refSlotIcon = useRef();
    const refSecundaryAction = useRef();
    const refSlotContent = useRef();
    const buttonOutRef = useRef();
    const slotSecundaryAction = useSlot(refSecundaryAction);
    const slotIcon = useSlot(refSlotIcon);
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
                    disabled={disabled}
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
                onclick={(event) => {
                    event.stopImmediatePropagation();
                    buttonOutRef.current.click();
                }}
                disabled={disabled}
                tabIndex={tabindex}
                class="button"
            >
                <slot ref={refSlotIcon} name="icon"></slot>
                <slot ref={refSlotContent}></slot>
                <slot ref={refSecundaryAction} name="action"></slot>
            </button>
            <style>
                {
                    /*css*/ `
                    :host{
                        --columns:${
                            !!slotIcon.length +
                            !!slotContent.length +
                            !!slotSecundaryAction.length
                        }
                    }
                    :host([theme]){
                        --background: var(--${theme});
                        --color: var(--${theme}-contrast, var(--primary-contrast));
                    }
                `
                }
            </style>
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
    tabindex: {
        type: Number,
        value: 0,
    },
};

button.styles = [
    tokensInput,
    css`
        .button {
            font-size: unset;
            font-weight: unset;
            font-family: unset;
            --size: var(--min-size);
            min-width: 100%;
            display: grid;
            grid-gap: 0.5em;
            align-items: center;
            justify-content: center;
            min-width: var(--size);
            min-height: var(--size);
            grid-template-columns: repeat(var(--columns), auto);
            line-height: 1em;
            position: relative;
            background: var(--background);
            color: var(--color);
            border-radius: calc(var(--radius) / 2);
            backdrop-filter: var(--backdrop);
            box-shadow: var(--shadow-size) var(--shadow-color);
            padding: var(--space-y) var(--space-x);
            box-sizing: border-box;
            border: var(--border-width) solid var(--borderline);
            cursor: pointer;
        }

        :host([size="small"]) .button {
            min-height: calc(var(--size) * 0.8);
            min-width: calc(var(--size) * 0.8);
            padding: 0 var(--space-x);
        }

        :host([ghost]) .button {
            background: transparent;
            border: none;
            box-shadow: none;
        }

        :host([size="small"]) {
            font-size: 0.75em;
            align-items: center;
        }

        :host([shape="square"]) .button {
            padding: 0px;
        }
    `,
];

export const Button = c(button);
