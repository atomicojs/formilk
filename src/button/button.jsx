import { c, css, useRef, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { inputGenericProps } from "../props";
import {
    tokensBorder,
    tokensOpacity,
    tokensSize,
    tokensSpace,
    tokensColor,
    tokensShadow,
} from "../tokens";
import customElements from "../custom-elements";

/**
 *
 * @param {import("atomico").Props<button.props>} props
 */
function button({ type, name, value, status, href, tabIndex }) {
    const refSlotPrefix = useRef();
    const refSlotSuffix = useRef();
    const refSlotPrefixOutBox = useRef();
    const refSlotSuffixOutBox = useRef();
    const refSlotContent = useRef();
    const refButtonLightDom = useRef();
    const refButtonShadowDom = useRef();
    const slotPrefix = useSlot(refSlotPrefix);
    const slotSuffix = useSlot(refSlotSuffix);
    const slotPrefixOutBox = useSlot(refSlotPrefixOutBox);
    const slotSuffixOutBox = useSlot(refSlotSuffixOutBox);
    const slotContent = useSlot(refSlotContent).filter((el) =>
        el.textContent.trim()
    );
    const disabled = useDisabled();
    const [, setActive] = useProp("active");

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
                <div class="button-layer"></div>
                <div
                    class="button-row"
                    style={`--columns:${
                        !!slotPrefixOutBox.length +
                        1 +
                        !!slotSuffixOutBox.length
                    };${
                        slotPrefixOutBox.length
                            ? "margin-left: var(--space-outbox);"
                            : ""
                    }${
                        slotSuffixOutBox.length
                            ? "margin-right: var(--space-outbox);"
                            : ""
                    }`}
                >
                    <slot ref={refSlotPrefixOutBox} name="prefix-outbox"></slot>
                    <div
                        class="button-row"
                        style={`--columns:${
                            !!slotPrefix.length +
                            !!slotContent.length +
                            !!slotSuffix.length
                        }`}
                    >
                        <slot ref={refSlotPrefix} name="prefix"></slot>
                        <slot ref={refSlotContent}></slot>
                        <slot ref={refSlotSuffix} name="suffix"></slot>
                    </div>
                    <slot ref={refSlotSuffixOutBox} name="suffix-outbox"></slot>
                </div>
            </button>
            <style>
                {
                    /*css*/ `

                    :host([status]){
                        --color-fill: var(--color-status-${status});
                        --color-contrast: var(--color-status-contrast);
                    }
                `
                }
            </style>
        </host>
    );
}

button.props = {
    ...inputGenericProps,
    tokensColor,
    ghost: {
        type: Boolean,
        reflect: true,
    },
    circle: {
        type: Boolean,
        reflect: true,
    },
    type: {
        type: String,
        value: "submit",
    },
    status: {
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
    tokensSpace,
    tokensSize,
    tokensBorder,
    tokensOpacity,
    tokensColor,
    tokensShadow,
    css`
        :host {
            --color-fill: var(--color-button-fill);
            --color-divide: var(--color-button-divide);
            --color-contrast: var(--color-button-contrast);
            --color-active: var(--color-button-active);
            --color-hover: var(--color-button-hover);
            --shadow: var(--shadow-action);
            --space-outbox: calc(var(--space-x) / -2);
            display: inline-flex;
            font-size: var(--size-font);
            min-height: var(--size-min);
        }

        :host([disabled]) {
            opacity: var(--opacity-disabled);
            pointer-events: none;
        }

        :host([shadow]) {
            box-shadow: var(--shadow);
        }

        :host([circle]) {
            --border-radius: 100px;
        }

        .button {
            font: unset;
            min-width: 100%;
            min-height: var(--size-min);
            line-height: 1em;
            position: relative;
            background: var(--color-fill);
            color: var(--color-contrast, var(--color-box-contrast));
            border-radius: var(--border-radius);
            backdrop-filter: var(--backdrop);
            padding: var(--space-y) var(--space-x);
            box-sizing: border-box;
            border: var(--border-width) solid var(--color-divide);
            cursor: pointer;
        }

        .button-layer {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: calc(var(--border-radius) * 0.85);
            background: transparent;
        }

        .button-row {
            display: grid;
            grid-gap: var(--space-between);
            grid-template-columns: repeat(var(--columns), auto);
            align-items: center;
            justify-content: center;
            position: relative;
        }

        :host(:hover:not([ghost])) .button-layer {
            background: var(--color-hover);
        }

        :host([active]:not([ghost])) .button-layer {
            background: var(--color-active);
        }

        :host([shape="square"]) .button {
            padding: 0px;
            min-width: var(--size-min);
        }

        :host([size="small"]) .button {
            --current-size-small: calc(var(--size-min) * var(--size-small));
            min-height: var(--current-size-small);
            min-width: var(--current-size-small);
        }

        :host([size="small"]:not([shape="square"])) .button {
            padding: 0 calc(var(--space-x) * var(--size-small));
        }

        :host([size="small"]) .button-row {
            grid-gap: calc(var(--space-between) * var(--size-small));
        }

        :host([ghost]) .button {
            background: transparent;
            border: none;
            box-shadow: none;
            color: currentColor;
        }

        :host([size="small"]) {
            font-size: calc(var(--size-font) * var(--size-small));
            align-items: center;
        }

        :host([align="left"]) .button-row {
            justify-content: flex-start;
            text-align: left;
        }

        :host([align="right"]) .button-row {
            justify-content: flex-end;
            text-align: right;
        }
    `,
];

export const Button = c(button);

customElements.define("button", Button);
