import { c, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { tokensInput } from "../tokens";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { inputGenericProps } from "../props";
import { useReflectEvent } from "../hooks/use-reflect-event";

/**
 *
 * @param {import("atomico").Props<button.props>} props
 */
function button({ type, name, value, theme, href, tabIndex }) {
    const refSlotPrefix = useRef();
    const refSlotSuffix = useRef();
    const refSlotContent = useRef();
    const refButtonLightDom = useRef();
    const refButtonShadowDom = useRef();
    const slotSuffix = useSlot(refSlotSuffix);
    const slotPrefix = useSlot(refSlotPrefix);
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
                    ref={refButtonLightDom}
                ></a>
            ) : (
                <button
                    type="submit"
                    name={name}
                    value={value}
                    ref={refButtonLightDom}
                    slot="button"
                    tabindex="-1"
                    disabled={disabled}
                ></button>
            ),
        [type, name, value]
    );

    useReflectEvent(refButtonShadowDom, refButtonLightDom, "click");

    return (
        <host
            shadowDom
            shape={slotPrefix.length && !slotContent.length ? "square" : null}
        >
            <button
                disabled={disabled}
                tabIndex={tabIndex}
                ref={refButtonShadowDom}
                class="button"
            >
                <slot ref={refSlotPrefix} name="prefix"></slot>
                <slot ref={refSlotContent}></slot>
                <slot ref={refSlotSuffix} name="suffix"></slot>
            </button>
            <style>
                {
                    /*css*/ `
                    :host{
                        --columns:${
                            !!slotPrefix.length +
                            !!slotContent.length +
                            !!slotSuffix.length
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
    tabIndex: {
        type: Number,
        value: 0,
    },
};

button.styles = [
    tokensInput,
    css`
        :host {
            --size: var(--min-size);
        }
        .button {
            font: unset;
            min-width: 100%;
            display: grid;
            grid-gap: 0.5em;
            align-items: center;
            justify-content: center;
            min-height: var(--size);
            grid-template-columns: repeat(var(--columns), auto);
            line-height: 1em;
            position: relative;
            background: var(--background);
            color: var(--color);
            border-radius: calc(var(--radius) / 2);
            backdrop-filter: var(--backdrop);
            padding: var(--space-y) var(--space-x);
            box-sizing: border-box;
            border: var(--border-width) solid var(--borderline);
            cursor: pointer;
        }

        :host([shape="square"]) .button {
            padding: 0px;
            min-width: var(--size);
        }

        :host([size="small"]) .button {
            min-height: calc(var(--size) * 0.8);
            min-width: calc(var(--size) * 0.8);
        }

        :host([size="small"]::not([shape="square"])) {
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
    `,
];

export const Button = c(button);
