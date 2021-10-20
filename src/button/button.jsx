import { c, css, useRef, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { tokensInput } from "../tokens";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { inputGenericProps } from "../props";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";

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
    const [active, setActive] = useProp("active");

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
            ref={refButtonShadowDom}
        >
            <button
                disabled={disabled}
                tabIndex={tabIndex}
                class="button"
                onmousedown={() => setActive(true)}
                onmouseup={() => setActive(false)}
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
                        --background: var(--color-${theme});
                        --color: var(--color-${theme}-contrast, var(--color-primary-contrast));
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
    active: {
        type: Boolean,
        reflect: true,
    },
    align: {
        type: String,
        reflect: true,
    },
};

button.styles = [
    tokensInput,
    css`
        :host {
            --size: var(--min-size);
            --background: var(
                --color-current-layer,
                var(--color-container-layer)
            );
            --color: var(
                --color-current-contrast,
                var(--color-container-contrast)
            );
        }
        .button {
            font: unset;
            min-width: 100%;
            display: grid;
            grid-gap: var(--space-between);
            align-items: center;
            justify-content: center;
            min-height: var(--size);
            grid-template-columns: repeat(var(--columns), auto);
            line-height: 1em;
            position: relative;
            background: var(--background);
            color: var(--color);
            border-radius: calc(var(--border-radius) / 2);
            backdrop-filter: var(--backdrop);
            padding: var(--space-y) var(--space-x);
            box-sizing: border-box;
            border: var(--border-width) solid var(--color-current-divide);
            cursor: pointer;
            box-shadow: var(--shadow-size) var(--shadow-color);
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
        :host([align="left"]) .button {
            justify-content: flex-start;
        }
        :host([align="right"]) .button {
            justify-content: flex-end;
        }
    `,
];

export const Button = c(button);
