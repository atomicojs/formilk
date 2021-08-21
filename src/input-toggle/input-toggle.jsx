import { c } from "atomico";
import { useSwitch } from "../hooks/use-switch.js";
import style from "./input-toggle.css";
import tokenBox from "../token/box.css";
import styleBase from "../input-checkbox/input-checkbox.css";

function inputToggle({ name, value }) {
    const [, refContainer, toggle] = useSwitch("checkbox", name, value);

    return (
        <host onclick shadowDom toggle={toggle}>
            <button ref={refContainer} class="box">
                <div class="checkbox-state">
                    <slot name="icon"></slot>
                </div>
            </button>
        </host>
    );
}

inputToggle.props = {
    checked: { type: Boolean, reflect: true },
    name: String,
    value: {
        type: null,
        value: "on",
    },
    disabled: { type: Boolean, reflect: true },
};

inputToggle.styles = [tokenBox, styleBase, style];

export const InputToggle = c(inputToggle);
