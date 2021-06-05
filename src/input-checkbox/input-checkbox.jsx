import { c } from "atomico";
import { useSwitch } from "../hooks/use-switch.js";
import styleBase from "./input-checkbox-base.css";
import style from "./input-checkbox.css";

function checkbox({ name, value }) {
    const [, refContainer] = useSwitch("checkbox", name, value);
    return (
        <host shadowDom>
            <button ref={refContainer} class="checkbox">
                <div class="checkbox-state">
                    <slot name="icon">
                        <svg
                            class="icon"
                            width=".7rem"
                            viewBox="0 0 11.192 8.364"
                        >
                            <path
                                d="M-1530.757,8.778a1,1,0,0,1-.67-.257l-.037-.035-2.829-2.829a1,1,0,0,1,0-1.414,1,1,0,0,1,1.415,0l2.121,2.122L-1525.1.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-6.364,6.364a1,1,0,0,1-.707.293Z"
                                transform="translate(1534.586 -0.414)"
                                style="fill: var(--fm-checkbox--icon-color, #fff)"
                            />
                        </svg>
                    </slot>
                </div>
            </button>
        </host>
    );
}

checkbox.props = {
    name: String,
    value: {
        type: null,
        value: "on",
    },
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
};

checkbox.styles = [styleBase, style];

export const InputCheckbox = c(checkbox);
