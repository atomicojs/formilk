import { c, useProp, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { tokensInput } from "../tokens";
import { inputGenericProps } from "../props";
import { useResizeObserverState } from "@atomico/hooks/use-resize-observer";

/**
 *
 * @param {import("atomico").Props<inputBasic.props>} props
 * @returns
 */
function inputBasic({ type, theme, ...props }) {
    const [, setValue] = useProp("value");
    const refSlotLabel = useRef();
    const refSlotPrefix = useRef();
    const refSlotSuffix = useRef();
    const refLayerLeft = useRef();
    const refLayerRight = useRef();
    const refInput = useRef();
    const slotLabel = useSlot(refSlotLabel);
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
            <style>{
                /*css*/ `
                :host{
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
                }
                :host([theme]){--line-background: var(--color-${theme});}
                `
            }</style>
        </host>
    );
}

inputBasic.props = {
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
    theme: {
        type: String,
        reflect: true,
        value: "primary",
    },
};

inputBasic.styles = [
    tokensInput,
    css`
        .input {
            display: grid;
            min-width: 100%;
            min-height: var(--min-size);
            align-items: stretch;
            padding: 0;
            position: relative;
            background: var(--color-container-layer);
            color: var(--color-container-contrast);
            border-radius: calc(var(--border-radius) / 2);
            backdrop-filter: var(--backdrop);
            box-shadow: var(--shadow-size) var(--shadow-color);
            border: var(--border-width) solid var(--color-container-divide);
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
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .input-line {
            width: 100%;
            height: 0.125rem;
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
            background: var(--line-background);
        }

        .hidden {
            display: none;
        }
    `,
];

export const InputBasic = c(inputBasic);
