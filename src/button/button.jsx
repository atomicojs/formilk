import { c, css, useRef, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { InputGenericProps, GenericBoolean, GenericString } from "../props";
import {
    tokensBorder,
    tokensOpacity,
    tokensSize,
    tokensSpace,
    tokensColor,
    tokensShadow,
    tokensFont,
} from "../tokens";
import customElements from "../custom-elements";

/**
 *
 * @param {import("atomico").Props<button.props>} props
 */
function button({ type, name, value, status, href, tabIndex, color }) {
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
                <div class="button-layer button-layer-bg"></div>
                <div class="button-layer button-layer-fx"></div>
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
                {`:host([status]){
                    --color-fill: var(--color-status-${status});
                    --color-contrast: var(--color-status-contrast);
                }`}
                {`:host([color]){
                    --color-fill: var(--color-${color});
                    --color-contrast: var(--color-${color}-contrast);
                }`}
            </style>
        </host>
    );
}

button.props = {
    ...InputGenericProps,
    tokensColor,
    ghost: GenericBoolean,
    circle: GenericBoolean,
    active: GenericBoolean,
    type: {
        ...GenericString,
        value: "submit",
    },
    align: GenericString,
    status: GenericString,
    shape: GenericString,
    href: GenericString,
    color: GenericString,
    outline: GenericBoolean,
    rounded: GenericBoolean,
    tabIndex: {
        type: Number,
        value: 0,
    },
};

button.styles = [
    tokensSpace,
    tokensFont,
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
            ---color: var(--color-contrast, var(--color-box-contrast));
            ---color-bg: var(--color-fill);
            ---font-size: var(--font-size);
            ---border-width: var(--border-width);
            ---border-style: solid;
            ---border-style-disabled: dashed;
            font-size: var(---font-size);
            display: inline-flex;
            min-height: var(--size-min);
        }

        :host([disabled]) {
            opacity: var(--opacity-disabled);
            pointer-events: none;
        }

        :host([shadow]) {
            ---shadow: var(--shadow);
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
            color: var(---color);
            padding: var(--space-y) var(--space-x);
            box-sizing: border-box;
            cursor: pointer;
            letter-spacing: unset;
            background: transparent;
            border: none;
        }

        .button-layer-bg {
            background: var(---color-bg);
            backdrop-filter: var(--backdrop);
            border: var(---border-width) var(---border-style)
                var(--color-divide);
            box-shadow: var(---shadow);
        }

        .button-layer {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            border-radius: var(--border-radius);
        }

        .button-row {
            display: grid;
            grid-gap: var(--space-between);
            grid-template-columns: repeat(var(--columns), auto);
            align-items: center;
            justify-content: center;
            position: relative;
        }

        :host(:hover:not([ghost])) .button-layer-fx {
            background: var(--color-hover);
        }

        :host([active]:not([ghost])) .button-layer-fx {
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
            ---color-bg: transparent;
            --border-width: 0;
            box-shadow: none;
            color: currentColor;
        }

        :host([size="small"]) {
            ---font-size: var(--font-size-small);
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

        :host([outline]) {
            --color-divide: var(--color-fill);
            --color-active: transparent;
            ---color-bg: transparent;
            ---color: var(--color-fill);
        }
        :host([outline][active]) {
            ---border-width: calc(var(--border-width) * 2);
        }
        :host([outline][disabled]) {
            ---border-style: var(---border-style-disabled);
        }
        :host([rounded]) {
            --border-radius: 100vh;
        }
    `,
];

export const Button = c(button);

customElements.define("button", Button);
