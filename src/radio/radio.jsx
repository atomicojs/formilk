import { c, css, useHost } from "atomico";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { Checkbox } from "../checkbox/checkbox";
import { useCheckbox } from "../hooks/use-checkbox";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import customElements from "../custom-elements";

function radio() {
    const host = useHost();
    const refInput = useCheckbox("radio");
    const disabled = useDisabled();

    useReflectEvent(host, refInput, "click");

    return (
        <host shadowDom>
            <button class="checkbox" disabled={disabled}>
                <div class="checkbox-state"></div>
            </button>
        </host>
    );
}

radio.styles = css`
    .checkbox,
    .checkbox-state {
        border-radius: 100%;
    }

    .checkbox-state {
        --state-scale: 0.6;
    }
`;

export const Radio = c(radio, Checkbox);

customElements.define("radio", Radio);
