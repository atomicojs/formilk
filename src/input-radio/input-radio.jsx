import { c, css } from "atomico";
import { InputCheckbox } from "../input-checkbox/input-checkbox";
import { useCheckbox } from "../hooks/use-checkbox";
import { useDisabled } from "@atomico/hooks/use-disabled";

function radio() {
    const refInput = useCheckbox("radio");
    const disabled = useDisabled();

    return (
        <host shadowDom>
            <button
                class="input-box input-box--border input-box--pointer "
                onclick={(event) => {
                    refInput.current.click();
                }}
                disabled={disabled}
            >
                <div class="checkbox-state"></div>
            </button>
        </host>
    );
}

radio.styles = css`
    .input-box,
    .checkbox-state {
        border-radius: 100%;
    }

    .checkbox-state {
        --state-scale: 0.6;
    }
`;

export const InputRadio = c(radio, InputCheckbox);
