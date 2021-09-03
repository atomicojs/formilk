import { c, css } from "atomico";
import { useCheckbox } from "../input-checkbox/use-checkbox.jsx";
import { InputCheckbox } from "../input-checkbox/input-checkbox.jsx";

function inputSwitch() {
    const refInput = useCheckbox("checkbox");

    return (
        <host shadowDom>
            <button
                onclick={() => refInput.current.click()}
                class="input-box input-box--use-border"
            >
                <div class="checkbox-state">
                    <slot name="icon"></slot>
                </div>
            </button>
        </host>
    );
}

inputSwitch.styles = css`
    .input-box {
        --scale: 1.7;
        width: calc(var(--size) * var(--scale));
        border-radius: 10vh;
    }

    .checkbox-state {
        --state-scale: 0.6;
        --x: calc((var(--size) * var(--scale) - var(--size)) / 2);
        border-radius: 10vh;
        position: relative;
        transform: translateX(calc(var(--x) * -1));
        opacity: 0.25;
        transform-origin: left center;
    }

    :host([checked]) .input-box {
        background: currentColor;
    }

    :host([checked]) .checkbox-state {
        opacity: 1;
        transform: translateX(var(--x));
        transform-origin: right center;
        background: var(--checked-contrast);
    }
`;

export const InputSwitch = c(inputSwitch, InputCheckbox);
