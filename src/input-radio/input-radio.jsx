import { c } from "atomico";
import { useSwitch } from "../hooks/use-switch.js";
import style from "./input-radio.css";
import tokenBox from "../tokens.css";
import styleBase from "../input-checkbox/input-checkbox.css";

function radio({ name, value }) {
    const [, refContainer] = useSwitch("radio", name, value);
    return (
        <host shadowDom>
            <button class="box use-border" ref={refContainer}>
                <div class="checkbox-state"></div>
            </button>
        </host>
    );
}

radio.props = {
    checked: {
        type: Boolean,
        reflect: true,
    },
    name: String,
    value: null,
    disabled: { type: Boolean, reflect: true },
};

radio.styles = [tokenBox, styleBase, style];

export const InputRadio = c(radio);
