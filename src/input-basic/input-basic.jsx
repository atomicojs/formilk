import { c, useProp, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useEventLabel } from "../hooks/use-event-label.js";
import style from "./input-basic.css";
import tokenBox from "../token/box.css";

function inputBasic({ type, theme, ...props }) {
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

    useEventLabel(() => refInput.current.click());

    return (
        <host
            shadowDom
            checkValidity={() => refInput.current.checkValidity()}
            oninput={() => setValue(refInput.current.value)}
            withicon={withicon}
            withlabel={withlabel}
        >
            <div class="box" onclick={() => refInput.current.focus()}>
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
                    /*css*/ `:host{
                --shadow-color: var(--fm-theme--${theme}-shadow);
                --line-background: var(--fm-theme--${theme});
            }`
                }</style>
            )}
        </host>
    );
}

inputBasic.props = {
    name: String,
    type: String,
    value: null,
    list: String,
    pattern: String,
    min: Number,
    max: Number,
    minLength: Number,
    maxLength: Number,
    placeholder: String,
    required: Boolean,
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

inputBasic.styles = [tokenBox, style];

export const InputBasic = c(inputBasic);
