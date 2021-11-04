import { c, useProp, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import {
    tokensSpace,
    tokensSize,
    tokensBorder,
    tokensColor,
    tokensShadow,
} from "../tokens";
import { inputGenericProps } from "../props";
import { useResizeObserverState } from "@atomico/hooks/use-resize-observer";
import customElements from "../custom-elements";

/**
 *
 * @param {import("atomico").Props<input.props>} props
 * @returns
 */
function input({ type, status, ...props }) {
    const [, setValue] = useProp("value");
    const refSlotLabel = useRef();
    const refSlotPrefix = useRef();
    const refSlotSuffix = useRef();
    const refLayerLeft = useRef();
    const refLayerRight = useRef();
    const refInput = useRef();
    const slotLabel = useSlot(refSlotLabel).filter((el) =>
        el instanceof Text ? el.textContent.trim() : true
    );
    const slotPrefix = useSlot(refSlotPrefix);
    const slotSuffix = useSlot(refSlotSuffix);

    useResizeObserverState(refLayerLeft);
    useResizeObserverState(refLayerRight);

    useRender(() => (
        <input type={type} {...props} slot="input" ref={refInput} />
    ));

    useDisabled();

    return (
        <host shadowDom oninput={() => setValue(refInput.current.value)}>
            <div class="input">
                <div class="input-layer input-layer-left" ref={refLayerLeft}>
                    <div
                        class={`input-prefix ${
                            slotPrefix.length ? "" : "hidden"
                        }`}
                    >
                        <slot ref={refSlotPrefix} name="prefix"></slot>
                    </div>
                    <div
                        class={`input-label ${
                            slotLabel.length ? "" : "hidden"
                        }`}
                    >
                        <slot ref={refSlotLabel}></slot>
                    </div>
                </div>
                <div class="input-slot">
                    <slot name="input"></slot>
                    <div class="input-line">
                        <div class="input-line-fill"></div>
                    </div>
                </div>
                <div class="input-layer input-layer-right" ref={refLayerRight}>
                    <div
                        class={`input-suffix ${
                            slotSuffix.length ? "" : "hidden"
                        }`}
                    >
                        <slot ref={refSlotSuffix} name="suffix"></slot>
                    </div>
                </div>
            </div>
            <style>{`
                :host {
                    --input-layer-left: ${
                        refLayerLeft.current?.clientWidth
                            ? `calc(${refLayerLeft.current?.clientWidth}px + var(--space-between) )`
                            : "0px"
                    };
                    --input-layer-right: ${
                        refLayerRight.current?.clientWidth
                            ? `calc(${refLayerRight.current?.clientWidth}px + var(--space-between) )`
                            : "0px"
                    };
                    --columns-label: ${slotLabel.length};
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
    disabled: { type: Boolean, reflect: true },
    status: {
        type: String,
        reflect: true,
    },
};

input.styles = [
    tokensSpace,
    tokensSize,
    tokensBorder,
    tokensColor,
    tokensShadow,
    css`
        :host {
            --color-fill: var(--color-current-layer, var(--color-input-fill));
            --color-divide: var(--color-input-divide);
            --color-contrast: var(
                --color-current-contrast,
                var(--color-input-contrast)
            );
            --color-status: var(--color-input-status);
            --shadow: var(--shadow-action);
        }

        :host([shadow]) {
            box-shadow: var(--shadow);
        }

        .input {
            display: grid;
            min-width: 100%;
            min-height: var(--size-min);
            align-items: stretch;
            padding: 0;
            position: relative;
            background: var(--color-fill);
            color: var(--color-contrast);
            border-radius: var(--border-radius);
            border: var(--border-width) solid var(--color-divide);
            box-sizing: border-box;
            grid-gap: var(--space-between);
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
            padding: calc(var(--space-y) / 2)
                calc(var(--space-x) + var(--input-layer-right, 0px))
                calc(var(--space-y) / 2)
                calc(var(--space-x) + var(--input-layer-left, 0px));
        }

        .input-layer {
            height: 100%;
            position: absolute;
            display: flex;
            align-items: center;
        }

        .input-layer-left {
            left: var(--space-x);
        }

        .input-layer-right {
            right: var(--space-x);
        }

        .input-prefix,
        .input-suffix,
        .input-label {
            display: grid;
            align-items: center;
            justify-content: center;
            grid-gap: var(--space-between);
        }

        .input-label {
            grid-template-columns: repeat(var(--columns-label), auto);
        }

        .input-line {
            width: 100%;
            height: var(--border-width);
            padding: 0 var(--space-x);
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 3;
            transform: translateY(100%);
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
    `,
];

export const Input = c(input);

customElements.define("input", Input);
