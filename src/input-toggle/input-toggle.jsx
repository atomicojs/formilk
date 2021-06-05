import { c } from "atomico";
import { useSwitch } from "../hooks/use-switch.js";
import styleBase from "../input-checkbox/input-checkbox-base.css";
import style from "./input-toggle.css";

function inputToggle({ name, value }) {
    const [, refContainer, toggle] = useSwitch("checkbox", name, value);

    return (
        <host shadowDom toggle={toggle}>
            <button class="checkbox" ref={refContainer}>
                <div class="checkbox-state">
                    <slot></slot>
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

inputToggle.styles = [styleBase, style];

export const InputToggle = c(inputToggle);
