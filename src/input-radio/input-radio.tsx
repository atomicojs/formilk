import { c, css, Props, useHost } from "atomico";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { InputCheckbox } from "../input-checkbox/input-checkbox";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { useFormInputRadio } from "@atomico/hooks/use-form";
import customElements from "../system";

function radio({ value }: Props<typeof InputCheckbox>) {
    const host = useHost();
    const disabled = useDisabled();
    const refInput = useFormInputRadio(<input value={value} />);

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
    :host {
        --border-radius: 100%;
        ---state-size: var(--size-s);
        ---state-radius: 100%;
    }
`;

export const InputRadio = c(radio, InputCheckbox);

customElements.define("input-radio", InputRadio);
