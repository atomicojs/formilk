import { c, useProp, useRef } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { useEventLabel } from "../hooks/use-event-label.js";
import style from "./input-color.css";

function color({ disabled, name }) {
    const [value, setValue] = useProp("value");
    const refInput = useRef();
    useRender(
        () => (
            <input
                ref={refInput}
                oninput={({ target }) => setValue(target.value)}
                name={name}
                type="color"
                value={value}
                disabled={disabled}
                tabindex="-1"
            />
        ),
        [name, value]
    );
    useEventLabel(() => refInput.current.click());
    return (
        <host shadowDom>
            <button style={`--value: ${value}`}>
                <slot></slot>
            </button>
        </host>
    );
}

color.props = {
    name: String,
    value: {
        type: String,
        value: "#000",
    },
    disabled: { type: Boolean, reflect: true },
};

color.styles = style;

export const InputColor = c(color);
