import { c, css, useHost } from "atomico";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { useCheckbox } from "../hooks/use-checkbox";
import { InputCheckbox } from "../input-checkbox/input-checkbox";
import customElements from "../custom-elements";

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
    :host {
        --border-radius: 100px;
        ---state-opacity: 0.25;
        ---width: calc((var(--size-s) * 2) + (var(--size-m) - var(--size-s)));
        ---state-size: var(--size-s);
        ---state-radius: 100%;
        ---state-transform: translateX(-50%);
    }
    :host([checked]) {
        ---state-transform: translateX(50%);
    }
    .checkbox {
        width: var(---width);
    }
`;

export const InputSwitch = c(inputSwitch, InputCheckbox);

customElements.define("input-switch", InputSwitch);
