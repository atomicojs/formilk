import { c, css } from "atomico";
import { useCheckbox } from "../hooks/use-checkbox";
import { InputCheckbox } from "../input-checkbox/input-checkbox";
import { useDisabled } from "@atomico/hooks/use-disabled";

function inputSwitch() {
    const refInput = useCheckbox("checkbox");
    const disabled = useDisabled();

    return (
        <host shadowDom>
            <button
                onclick={() => refInput.current.click()}
                class="checkbox"
                disabled={disabled}
            >
                <div class="checkbox-state">
                    <slot name="icon"></slot>
                </div>
            </button>
        </host>
    );
}

inputSwitch.styles = css`
    .checkbox {
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

    :host([checked]) .checkbox {
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
