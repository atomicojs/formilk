import { c, css, useHost } from "atomico";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { useCheckbox } from "../hooks/use-checkbox";
import { Checkbox } from "../checkbox/checkbox";

function inputSwitch() {
    const host = useHost();
    const refInput = useCheckbox("checkbox");
    const disabled = useDisabled();

    useReflectEvent(host, refInput, "click");

    return (
        <host shadowDom>
            <button class="checkbox" disabled={disabled}>
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
        opacity: var(--opacity-switch-off);
        transform-origin: left center;
    }

    :host([checked]) .checkbox {
        background: var(--color-divide);
    }

    :host([checked]) .checkbox-state {
        opacity: 1;
        transform: translateX(var(--x));
        transform-origin: right center;
        background: var(--color-contrast);
    }
`;

export const Switch = c(inputSwitch, Checkbox);
