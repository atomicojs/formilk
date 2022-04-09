import { Type, Props, c, css, useRef, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { InputGenericProps } from "../props";
import customElements from "../system";
import tokens from "../tokens";
import { ButtonActive } from "./button-active";

const add = (value: any) => (value ? 1 : 0);

function button({
    type,
    name,
    value,
    href,
    tabIndex,
    justify,
    color,
}: Props<typeof button>) {
    const refButtonActive = useRef<typeof ButtonActive>();
    const refSlotPrefix = useRef();
    const refSlotSuffix = useRef();
    const refSlotContent = useRef();
    const refButtonLightDom = useRef();
    const refButtonShadowDom = useRef();
    const slotPrefix = useSlot(refSlotPrefix);
    const slotSuffix = useSlot(refSlotSuffix);
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
                    type={type || "submit"}
                    name={name}
                    value={value}
                    ref={refButtonLightDom}
                    slot="button"
                    tabindex="-1"
                    disabled={disabled}
                ></button>
            ),
        [type, name, value, href]
    );

    useReflectEvent(refButtonShadowDom, refButtonLightDom, "click");

    return (
        <host
            shadowDom
            shape={slotPrefix.length && !slotContent.length ? "square" : null}
            ref={refButtonShadowDom}
            onclick={(event) => {
                if (refButtonActive.current?.setEvent) {
                    refButtonActive.current.setEvent(event);
                }
            }}
        >
            <button
                disabled={disabled}
                tabIndex={tabIndex}
                class="button"
                onmousedown={() => setActive(true)}
                onmouseup={() => setActive(false)}
                style={justify ? `--justify:${justify}` : ""}
            >
                <div class="button-bg">
                    <slot name="background">
                        <ButtonActive
                            class="button-fx"
                            ref={refButtonActive}
                        ></ButtonActive>
                    </slot>
                </div>
                <div
                    class="button-row"
                    style={`--columns:${
                        add(slotSuffix.length) +
                        add(slotPrefix.length) +
                        add(slotContent.length)
                    }`}
                >
                    <slot ref={refSlotPrefix} name="prefix"></slot>
                    <slot ref={refSlotContent}></slot>
                    <slot ref={refSlotSuffix} name="suffix"></slot>
                </div>
            </button>
            <style>
                {color &&
                    `
                    :host{
                        --color-button-60: ${customElements.cssProp(
                            `color-${color}-60`,
                            `var(--color-${color}-60)`
                        )}!important;
                        --color-button-30: ${customElements.cssProp(
                            `color-${color}-30`,
                            `var(--color-${color}-30)`
                        )}!important;
                        --color-button-10: ${customElements.cssProp(
                            `color-${color}-10`,
                            `var(--color-${color}-10)`
                        )}!important;
                    }
                `}
            </style>
        </host>
    );
}

button.props = {
    ...InputGenericProps,
    ghost: { type: Boolean, reflect: true },
    active: { type: Boolean, reflect: true },
    type: {
        type: String as Type<"submit" | "button" | "reset">,
        reflect: true,
        value: "submit",
    },
    justify: {
        type: String as Type<"left" | "right" | "center" | "space-between">,
        reflect: true,
    },
    status: { type: String, reflect: true },
    shape: { type: String, reflect: true },
    href: { type: String, reflect: true },
    rounded: { type: Boolean, reflect: true },
    tabIndex: {
        type: Number,
        value: 0,
    },
    color: {
        type: String,
        reflect: true,
    },
};

button.styles = [
    tokens,
    css`
        :host {
            --width: auto;
            --min-width: auto;
            --padding: 0 var(--size-s);
            --justify: center;
            width: var(--width);
            display: inline-flex;
            min-height: var(--size-xl);
            color: var(--color-button-10);
        }

        :host([disabled]) {
            opacity: var(--input-opacity-disabled);
            pointer-events: none;
        }

        :host([rounded]) {
            --border-radius: 100px;
        }

        :host([shape="square"]) {
            --padding: 0;
            --width: var(--size-xl);
        }

        :host([ghost]:not([color])) {
            --color-button-60: transparent;
        }

        :host([justify]) {
            --width: 100%;
            --min-width: 100%;
        }

        .button {
            width: var(--width);
            min-width: var(--min-width);
            border-radius: var(--border-radius);
            padding: var(--padding);
            box-sizing: border-box;
            font: unset;
            border: none;
            position: relative;
            background: none;
            cursor: pointer;
            color: unset;
        }
        .button-row {
            display: grid;
            place-content: center var(--justify);
            grid-template-columns: repeat(var(--columns), auto);
            gap: var(--size-xs);
            position: relative;
            z-index: 1;
            min-height: 100%;
        }
        .button-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border: var(--button-border);
            border-radius: var(--border-radius);
            box-sizing: border-box;
            transition: var(--transition-action);
            background: var(--color-button-60);
        }
        .button-fx {
            border-radius: var(--border-radius);
        }
    `,
];

export const Button = c(button);

customElements.define("button", Button);
