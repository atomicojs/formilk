import { Props, c, css, useRef, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { InputGenericProps } from "../props";
import customElements from "../system";
import { cssButton } from "../tokens";

const add = (value: any) => (value ? 1 : 0);

function button({ type, name, value, href, tabIndex }: Props<typeof button>) {
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
                <div class="button-bg">
                    <slot name="background"></slot>
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
        </host>
    );
}

button.props = {
    ...InputGenericProps,
    ghost: { type: Boolean, reflect: true },
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
    rounded: { type: Boolean, reflect: true },
    tabIndex: {
        type: Number,
        value: 0,
    },
    between: { type: Boolean, reflect: true },
};

button.styles = [
    cssButton,
    css`
        :host {
            --width: auto;
            --padding: 0 var(--size-s);
            display: inline-flex;
            min-height: var(--size-xl);
            color: var(--color-button-10);
        }

        :host([disabled]) {
            opacity: var(--input-opacity-disabled);
            pointer-events: none;
        }

        :host([rounded]) {
            --radius: 100px;
        }

        :host([shape="square"]) {
            --padding: 0;
            --width: var(--size-xl);
        }

        :host([ghost]) {
            --color-button-60: transparent;
        }

        .button {
            width: var(--width);
            border-radius: var(--radius);
            display: grid;
            place-content: center;
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
            place-content: center;
            grid-template-columns: repeat(var(--columns), auto);
            gap: var(--size-xs);
            position: relative;
            z-index: 1;
        }
        .button-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border: var(--button-border);
            border-radius: var(--radius);
            box-sizing: border-box;
            transition: var(--input-transition);
            background: var(--color-button-60);
        }
    `,
];

export const Button = c(button);

customElements.define("button", Button);
