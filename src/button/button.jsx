import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import style from "./button.css";

function button({ type, name, value, theme }) {
    const slotIconRef = useRef();
    const buttonRef = useRef();
    const buttonOutRef = useRef();
    const slotIcon = useSlot(slotIconRef);

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
                ref={buttonRef}
                onclick={() => buttonOutRef.current.click()}
                class={`button ${slotIcon.length ? "" : "button-label"}`}
                style={
                    theme && {
                        "--fm-button--bgcolor": `var(--fm-color--${theme})`,
                        "--fm-button--color": `var(--fm-color--${theme}-contrast, var(--fm-color--contrast))`,
                        "--fm-button--shadow": `var(--fm-shadow--${theme}, var(--fm-shadow--primary))`,
                    }
                }
            >
                <slot ref={slotIconRef} name="icon"></slot>
                <slot></slot>
            </button>
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
    outline: {
        type: Boolean,
        reflect: true,
    },
};

button.styles = style;

export const Button = c(button);
