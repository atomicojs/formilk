import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import style from "./button.css";
import tokenBox from "../token/box.css";

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
                class={`box use-border ${slotIcon.length ? " box-icon" : ""}${
                    slotContent.length ? " box-label" : ""
                }`}
            >
                <slot ref={refSlotIcon} name="icon"></slot>
                <slot ref={refSlotContent}></slot>
            </button>
            {theme && (
                <style>{
                    /*css*/ `:host{
                    --background: var(--fm-theme--${theme});
                    --color: var(--fm-theme--${theme}-contrast, var(--fm-theme--primary-contrast));
                    --shadow: var(--fm-theme--${theme}-shadow);
                    --border: var(--fm-theme--${theme}-border);
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
        value: "primary",
    },
    disabled: {
        type: Boolean,
        reflect: true,
    },
};

button.styles = [tokenBox, style];

export const Button = c(button);
