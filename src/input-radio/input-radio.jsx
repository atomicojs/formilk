import { c, useRef } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { useFormValue } from "@atomico/hooks/use-form";
import style from "./input-radio.css";
import tokensBox from "../tokens/box.css";
import styleBase from "../input-checkbox/input-checkbox.css";

function radio({ name, value }) {
    const refInput = useRef();

    const [formValue] = useFormValue(name);

    useRender(() => (
        <input type="radio" name={name} value={value} ref={refInput} />
    ));

    return (
        <host shadowDom checked={value === formValue}>
            <button
                class="token-box token-box--use-border"
                onclick={() => refInput.current.click()}
            >
                <div class="checkbox-state"></div>
            </button>
        </host>
    );
}

radio.props = {
    checked: {
        type: Boolean,
        reflect: true,
    },
    name: String,
    value: null,
    disabled: { type: Boolean, reflect: true },
};

radio.styles = [tokensBox, styleBase, style];

export const InputRadio = c(radio);
