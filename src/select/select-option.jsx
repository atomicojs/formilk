import { useSlot } from "@atomico/hooks/use-slot";
import { c, useRef } from "atomico";
import customElements from "../custom-elements";

function selectOption() {
    const refSlotOption = useRef();
    const slotOption = useSlot(refSlotOption);
    return (
        <host shadowDom options={slotOption}>
            <slot ref={refSlotOption} name="option"></slot>
        </host>
    );
}

const eventOptionChange = { type: "OptionChange", bubbles: true };

selectOption.props = {
    slot: {
        type: String,
        reflect: true,
        value: "option",
    },
    value: {
        type: String,
        event: eventOptionChange,
    },
    label: {
        type: String,
        event: eventOptionChange,
    },
    options: {
        type: Array,
        event: eventOptionChange,
    },
    selected: Boolean,
};

export const SelectOption = c(selectOption);

customElements.define("select-option", SelectOption);
