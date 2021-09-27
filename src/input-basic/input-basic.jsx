import { c, useProp, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "../hooks/use-disabled";
import { tokensInput } from "../tokens";
import { inputGenericProps } from "../props";

/**
 *
 * @param {import("atomico").Props<inputBasic.props>} props
 * @returns
 */
function inputBasic({ type, theme, ...props }) {
    /**
     * @type {import("atomico").UseProp<string>}
     */
    const [, setValue] = useProp("value");
    const refSlotLabel = useRef();
    const refSlotIcon = useRef();
    const refInput = useRef();
    const slotLabel = useSlot(refSlotLabel);
    const slotIcon = useSlot(refSlotIcon);
    const withicon = !!slotIcon.length || null;
    const withlabel = !!slotLabel.length || null;

    useRender(() => (
        <input
            type={type}
            {...props}
            slot="input"
            ref={refInput}
            withicon={withicon}
            withlabel={withlabel}
        />
    ));

    useDisabled();

    return (
        <host
            shadowDom
            checkValidity={() => refInput.current.checkValidity()}
            oninput={() => setValue(refInput.current.value)}
            withicon={withicon}
            withlabel={withlabel}
        >
            <div
                class="input-box input-box--border input-box--full-width"
                onclick={() => refInput.current.focus()}
            >
                <div class="icon">
                    <slot ref={refSlotIcon} name="icon"></slot>
                </div>
                <div
                    class={`label ${
                        slotLabel.filter((tag) => tag.localName != "datalist")
                            .length
                            ? ""
                            : "hidden"
                    }`}
                >
                    <slot ref={refSlotLabel}></slot>
                </div>
                <div class="input">
                    <slot name="input"></slot>
                    <div class="line">
                        <div class="line-fill"></div>
                    </div>
                </div>
            </div>
            {theme && (
                <style>{
                    /*css*/ `:host{--line-background: var(--${theme});}`
                }</style>
            )}
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
    withicon: {
        type: Boolean,
        reflect: true,
    },
    withlabel: {
        type: Boolean,
        reflect: true,
    },
};

inputBasic.styles = [
    tokensInput,
    css`
        .input-box {
            padding: 0;
            position: relative;
            min-height: var(--min-size);
        }

        ::slotted(input) {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            font-family: unset;
            font-size: unset;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            padding: calc(var(--space-y) / 2) var(--space-x);
        }

        .input-box {
            display: grid;
            align-items: center;
            grid-template-columns: 0 0 auto;
        }

        :host([withlabel]) .input-box {
            grid-template-columns: 0 auto auto;
        }
        :host([withicon]) .input-box {
            grid-template-columns: auto auto auto;
        }

        :host([withicon][withlabel]) .label {
            padding-left: 0.5em;
        }

        :host([withicon]:not([withlabel])) .input-box {
            grid-template-columns: auto 0 auto;
        }

        :host([withlabel]) .input-box,
        :host([withicon]) .input-box {
            padding-left: var(--space-x);
        }

        ::slotted(input[withicon]),
        ::slotted(input[withlabel]) {
            padding-left: 0.5em;
        }

        .line {
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
        .line-fill {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background: var(--line-background);
        }

        .icon {
            display: flex;
        }
    `,
];

export const InputBasic = c(inputBasic);
