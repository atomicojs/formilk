import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import style from "./label.css";

function label() {
    const refSlot = useRef();
    const refInput = useRef();
    const slot = useSlot(refSlot);

    return (
        <host
            shadowDom
            onPreventLabel={(ev) => {
                ev.stopPropagation();
                refInput.delegateFocus = ev.detail;
                ev.preventDefault();
            }}
        >
            <button
                onclick={(ev) => {
                    ev.stopPropagation();
                    refInput.delegateFocus && refInput.delegateFocus();
                }}
            >
                <slot ref={refSlot} style={`--cols:${slot.length}`}></slot>
            </button>
        </host>
    );
}

label.styles = style;

export const Label = c(label);
