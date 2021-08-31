import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import style from "./button.css";
import tokensBox from "../tokens/box.css";
import tokensInput from "../tokens/input.css";

function button({ type, name, value, theme, disabled }) {
    const refSlotIcon = useRef();
    const refSlotContent = useRef();
    const buttonOutRef = useRef();
    const slotIcon = useSlot(refSlotIcon);
    const slotContent = useSlot(refSlotContent);

    useRender(
        () => (
            <button
                type="submit"
                name={name}
                value={value}
                ref={buttonOutRef}
                slot="button"
                tabindex="-1"
            ></button>
        ),
        [type, name, value]
    );

    return (
        <host shadowDom>
            <button
                onclick={() => buttonOutRef.current.click()}
                disabled={disabled}
                class={`token-input token-box token-box--use-border ${
                    slotIcon.length ? " box-icon" : ""
                }${slotContent.length ? " box-label" : ""}`}
            >
                <slot ref={refSlotIcon} name="icon"></slot>
                <slot ref={refSlotContent}></slot>
            </button>
            {theme && (
                <style>{
                    /*css*/ `.token-box{
                    --box--background: var(--theme--${theme});
                    --box--color: var(--theme--${theme}-contrast, var(--theme--primary-contrast));
                    --box--shadow: var(--theme--${theme}-shadow);
                    --box--border: var(--theme--${theme}-border);
                }`
                }</style>
            )}
        </host>
    );
}

button.props = {
    name: String,
    value: String,
    type: {
        type: String,
        value: "submit",
    },
    theme: {
        type: String,
        reflect: true,
    },
    disabled: {
        type: Boolean,
        reflect: true,
    },
};

button.styles = [tokensBox, tokensInput, style];

export const Button = c(button);
