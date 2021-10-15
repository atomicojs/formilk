import { c, useProp, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
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
            <div class="input" onclick={() => refInput.current.focus()}>
                <div class="input-icon">
                    <slot ref={refSlotIcon} name="icon"></slot>
                </div>
                <div
                    class={`input-label ${
                        slotLabel.filter((tag) => tag.localName != "datalist")
                            .length
                            ? ""
                            : "hidden"
                    }`}
                >
                    <slot ref={refSlotLabel}></slot>
                </div>
                <div class="input-slot">
                    <slot name="input"></slot>
                    <div class="input-line">
                        <div class="input-line-fill"></div>
                    </div>
                </div>
            </div>
            <style>{
                /*css*/ `:host([theme]){--line-background: var(--theme-${theme});}`
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
        .input {
            display: grid;
            align-items: center;
            grid-template-columns: 0 0 auto;
            min-width: 100%;
            min-height: var(--min-size);
            padding: 0;
            position: relative;
            background: var(--background);
            color: var(--color);
            border-radius: calc(var(--border-radius) / 2);
            backdrop-filter: var(--backdrop);
            box-shadow: var(--shadow-size) var(--shadow-color);
            border: var(--border-width) solid var(--theme-borderline);
            box-sizing: border-box;
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
            padding: calc(var(--space-y) / 2) var(--space-x);
        }

        :host([withlabel]) .input {
            grid-template-columns: 0 auto auto;
        }
        :host([withicon]) .input {
            grid-template-columns: auto auto auto;
        }

        :host([withicon][withlabel]) .input-label {
            padding-left: 0.5em;
        }

        :host([withicon]:not([withlabel])) .input {
            grid-template-columns: auto 0 auto;
        }

        :host([withlabel]) .input,
        :host([withicon]) .input {
            padding-left: var(--space-x);
        }

        ::slotted(input[withicon]),
        ::slotted(input[withlabel]) {
            padding-left: 0.5em;
        }

        .input-slot {
            height: 100%;
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

        .input-icon {
            display: flex;
        }
    `,
];

export const InputBasic = c(inputBasic);
