import { Props, c, css, useRef, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { InputGenericProps } from "../props";
import {
    tokensBox,
    tokensFont,
    tokensColor,
    tokensShadow,
    tokensBorder,
    tokensOpacity,
} from "../tokens";
import customElements from "../custom-elements";

const add = (value: any) => (value ? 1 : 0);

function button({
    type,
    name,
    value,
    status,
    href,
    tabIndex,
    color,
}: Props<typeof button>) {
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
        el instanceof Text ? el.textContent?.trim() : true
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
                        add(slotPrefixOutBox.length) +
                        1 +
                        add(slotSuffixOutBox.length)
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
                            add(slotPrefix.length) +
                            add(slotContent.length) +
                            add(slotSuffix.length)
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
                {`:host([color]:not([color="input"])){
                    --color-fill: var(--color-${color});
                    --color-contrast: var(--color-${color}-contrast);
                }`}
            </style>
        </host>
    );
}

button.props = {
    ...InputGenericProps,
    ghost: { type: Boolean, reflect: true },
    circle: { type: Boolean, reflect: true },
    active: { type: Boolean, reflect: true },
    type: {
        type: String,
        reflect: true,
        value: "submit",
    },
    align: { type: String, reflect: true },
    status: { type: String, reflect: true },
    shape: { type: String, reflect: true },
    href: { type: String, reflect: true },
    color: { type: String, reflect: true },
    outline: { type: Boolean, reflect: true },
    rounded: { type: Boolean, reflect: true },
    tabIndex: {
        type: Number,
        value: 0,
    },
    between: { type: Boolean, reflect: true },
};

button.styles = [
    tokensBox,
    tokensFont,
    tokensColor,
    tokensShadow,
    tokensBorder,
    tokensOpacity,
    css`
        :host {
            --color-fill: var(--color-button-fill);
            --color-divide: var(--color-button-divide);
            --color-contrast: var(--color-button-contrast);
            --color-active: var(--color-button-active);
            --color-hover: var(--color-button-hover);
            --shadow: var(--shadow-action);
            --space-outbox: calc(var(--space-x) / -2);
            --justify-container: center;
            --jusfify-content: center;
            --size: var(--size--min);
            --color: var(--color-contrast, var(--color-box-contrast));
            --color-bg: var(--color-fill);
            --padding: var(--space--y) var(--space--x);
            --gap: var(--space--between);
            ---border-width: var(--border-width);
            --border-style: solid;
            --border-style-disabled: dashed;
            ---min-width: 100%;
            ---min-height: var(--size);
            font-size: var(--font-size);
            line-height: var(--size-line);
            display: inline-flex;
        }

        :host([color="input"]) {
            --color-fill: var(--color-current-layer, var(--color-input-fill));
            --color-divide: var(--color-input-divide);
            --color-contrast: var(
                --color-current-contrast,
                var(--color-input-contrast)
            );
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
            min-width: var(---min-width);
            min-height: var(---min-height);
            line-height: 1em;
            position: relative;
            color: var(--color);
            padding: var(--padding);
            box-sizing: border-box;
            cursor: pointer;
            letter-spacing: unset;
            background: transparent;
            border: none;
        }

        .button-layer-bg {
            background: var(--color-bg);
            backdrop-filter: var(--backdrop);
            border: var(---border-width) var(--border-style) var(--color-divide);
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
            grid-gap: var(--gap);
            grid-template-columns: repeat(var(--columns), auto);
            align-items: center;
            justify-content: var(--justify-container);
            position: relative;
        }

        .button-row .button-row {
            justify-content: var(--justify-content);
        }

        :host(:hover:not([ghost])) .button-layer-fx {
            background: var(--color-hover);
        }

        :host([active]:not([ghost])) .button-layer-fx {
            background: var(--color-active);
        }

        :host([shape="square"]) {
            --padding: 0px;
            ---min-width: var(--size--min);
        }

        :host([size="small"]:not([shape="square"])) {
        }

        :host([size="small"]) {
            --scale: var(--scale-small);
            ---min-width: var(--size);
        }

        :host([ghost]) {
            --color-bg: transparent;
            --border-width: 0;
            --shadow: none;
            --color: currentColor;
        }
        :host([size="small"]) {
            --font-size: var(--font-size-small);
        }
        :host([outline]) {
            --color-divide: var(--color-fill);
            --color-active: transparent;
            --color-bg: transparent;
            --color: var(--color-fill);
        }
        :host([outline][active]) {
            ---border-width: calc(var(--border-width) * 2);
        }
        :host([outline][disabled]) {
            --border-style: var(--border-style-disabled);
        }
        :host([rounded]) {
            --border-radius: 100vh;
        }
        :host([between]) {
            ---min-width: 100%;
            --justify-container: none;
            --justify-content: space-between;
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
