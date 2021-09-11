import { c, useProp, useRef, css } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { tokensInput, tokenColors } from "../tokens";
import { useDisabled } from "../hooks/use-disabled";
import { inputGenericProps } from "../props";

function color({ name }) {
    const [value, setValue] = useProp("value");
    const refInput = useRef();
    const disabled = useDisabled();

    useRender(
        () => (
            <input
                ref={refInput}
                oninput={({ target }) => setValue(target.value)}
                name={name}
                type="color"
                value={value}
                disabled={disabled}
                tabindex="-1"
            />
        ),
        [name, value]
    );
    return (
        <host shadowDom>
            <button
                class="input-box input-box--border input-box--pointer "
                style={`--background: ${value}`}
                disabled={disabled}
            >
                <slot></slot>
            </button>
        </host>
    );
}

color.props = {
    ...inputGenericProps,
    value: {
        type: String,
        value: "#000",
    },
};

color.styles = [
    tokensInput,
    tokenColors,
    css`
        ::slotted(input) {
            width: 100%;
            height: 100%;
            padding: 0px;
            border: 0px;
            opacity: 0;
            position: absolute;
            top: 0px;
            left: 0px;
        }

        .input-box {
            --size: calc(var(--min-height) * 0.75);
            width: var(--size);
            height: var(--size);
            position: relative;
            padding: 0;
        }

        .input-box--border {
            --border-color: currentColor;
        }
    `,
];

export const InputColor = c(color);
