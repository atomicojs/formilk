import { c, useProp, useRef, css, useHost } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import {
    tokensSpace,
    tokensSize,
    tokensBorder,
    tokensColor,
    tokensShadow,
    tokensOpacity,
    tokensTransition,
} from "../tokens";
import { inputGenericProps } from "../props";
import customElements from "../custom-elements";
import { serialize } from "../utils";

/**
 *
 * @param {import("atomico").Props<input.props>} props
 * @returns
 */
function input({ type, status, ...props }) {
    const [, setValue] = useProp("value");
    const [, setFocus] = useProp("focused");
    const refSlotLabel = useRef();
    const refSlotPrefix = useRef();
    const refSlotSuffix = useRef();
    const host = useHost();

    const refInput = useRef();
    const slotLabel = useSlot(refSlotLabel).filter((el) =>
        el instanceof Text ? el.textContent.trim() : true
    );
    const slotPrefix = useSlot(refSlotPrefix);
    const slotSuffix = useSlot(refSlotSuffix);

    useRender(() => (
        <input
            onfocus={() => setFocus(true)}
            onblur={() => setFocus(false)}
            type={type}
            {...props}
            slot="input"
            ref={refInput}
        />
    ));

    useDisabled();

    return (
        <host
            shadowDom
            oninput={() => setValue(refInput.current.value)}
            onclick={({ target }) => {
                while (target && target != host.current) {
                    if (target.hasAttribute("focusable")) return;
                    target = target.parentElement;
                }
                refInput.current.focus();
            }}
        >
            <div class="input">
                <slot
                    ref={refSlotPrefix}
                    name="prefix"
                    class={serialize(!slotPrefix.length && "hidden")}
                ></slot>
                <slot
                    ref={refSlotLabel}
                    class={serialize(!slotLabel.length && "hidden")}
                ></slot>
                <slot name="input"></slot>
                <slot
                    ref={refSlotSuffix}
                    name="suffix"
                    class={serialize(!slotSuffix.length && "hidden")}
                ></slot>
                <div class="input-line">
                    <div class="input-line-fill"></div>
                </div>
            </div>
            <style>{`
                :host {
                    --columns-label: ${slotLabel.length};
                    --columns: ${serialize(
                        slotPrefix.length && "auto",
                        slotLabel.length && "auto",
                        "1fr",
                        slotSuffix.length && "auto"
                    )};
                }
                :host([status]) {
                    --color-status: var(--color-status-${status});
                }
            `}</style>
        </host>
    );
}

input.props = {
    ...inputGenericProps,
    type: String,
    list: String,
    pattern: String,
    min: Number,
    max: Number,
    minLength: Number,
    maxLength: Number,
    placeholder: String,
    checked: Boolean,
    status: {
        type: String,
        reflect: true,
    },
    narrow: {
        type: Boolean,
        reflect: true,
    },
    ghost: {
        type: Boolean,
        reflect: true,
    },
};

input.styles = [
    tokensSpace,
    tokensSize,
    tokensBorder,
    tokensColor,
    tokensShadow,
    tokensOpacity,
    tokensTransition,
    css`
        :host {
            --color-fill: var(--color-current-layer, var(--color-input-fill));
            --color-divide: var(--color-input-divide);
            --color-contrast: var(
                --color-current-contrast,
                var(--color-input-contrast)
            );
            --line-opacity: var(--opacity-disabled);
            --color-status: var(--color-input-status);
            --shadow: var(--shadow-action);
            ---space-x: var(--space-x);
            ---padding: 0 var(---space-x);
            ---height: var(--size-min);
            ---font-size: var(--size-font);
            font-size: var(---font-size);
        }
        :host([shadow]) {
            box-shadow: var(--shadow);
        }
        .input {
            display: grid;
            min-width: 100%;
            min-height: var(---height);
            align-items: center;
            padding: var(---padding);
            position: relative;
            background: var(--color-fill);
            color: var(--color-contrast);
            border-radius: var(--border-radius);
            border: var(--border-width) solid var(--color-divide);
            box-sizing: border-box;
            grid-gap: var(--space-between);
            grid-template-columns: var(--columns);
        }
        ::slotted([slot="input"]) {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            font-family: unset;
            font-size: unset;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            color: unset;
            outline: none;
            padding: 0px;
            letter-spacing: unset;
        }
        .input-line {
            width: 100%;
            height: var(--border-width);
            padding: 0 var(---space-x);
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 3;
            transform: translateY(100%);
            opacity: var(--line-opacity);
            transition: var(--transition-x0);
        }
        .input-line-fill {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background: var(--color-status);
        }
        .hidden {
            display: none;
        }
        :host([size="small"]) {
            ---font-size: var(--size-font-small);
            ---height: calc(var(--size-min) * var(--size-small));
            ---space-x: calc(var(--space-x) * var(--size-small));
        }
        :host([narrow]) {
            --space-x: 0;
        }
        :host([focused]) {
            --line-opacity: 1;
        }
        :host([ghost]) {
            --color-fill: transparent;
        }
    `,
];

export const Input = c(input);

customElements.define("input", Input);
