import { c, useProp, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useEventLabel } from "../hooks/use-event-label.js";
import style from "./input-basic.css";

function inputBasic({ type, ...props }) {
    const [, setValue] = useProp("value");
    const refLabel = useRef();
    const refIcon = useRef();
    const refInput = useRef();
    const slotLabel = useSlot(refLabel);
    const slotIcon = useSlot(refIcon);

    useRender(() => (
        <input type={type} {...props} slot="input" ref={refInput} />
    ));

    useEventLabel(() => refInput.current.click());

    return (
        <host
            shadowDom
            checkValidity={() => refInput.current.checkValidity()}
            oninput={() => setValue(refInput.current.value)}
        >
            <div class="row" onclick={() => refInput.current.focus()}>
                <div class={`icon ${slotIcon.length ? "" : "hidden"}`}>
                    <slot ref={refIcon} name="icon"></slot>
                </div>
                <div
                    class={`label ${
                        slotLabel.filter((tag) => tag.localName != "datalist")
                            .length
                            ? ""
                            : "hidden"
                    }`}
                >
                    <slot ref={refLabel}></slot>
                </div>
                <div class="input">
                    <slot name="input"></slot>
                    <div class="line"></div>
                </div>
            </div>
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
};

inputBasic.styles = style;

export const InputBasic = c(inputBasic);
