import { c } from "atomico";
import { useSwitch } from "../hooks/use-switch.js";
import styleBase from "../input-checkbox/input-checkbox-base.css";
import style from "./input-radio.css";

function radio({ name, value }) {
    const [, refContainer] = useSwitch("radio", name, value);
    return (
        <host shadowDom>
            <button class="checkbox" ref={refContainer}>
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

radio.styles = [styleBase, style];

export const InputRadio = c(radio);
