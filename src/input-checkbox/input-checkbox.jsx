import { c, css } from "atomico";
import { tokensInput, tokenColors } from "../tokens.js";
import { useCheckbox } from "../hooks/use-checkbox.jsx";
import { useDisabled } from "../hooks/use-disabled.js";

function checkbox() {
    const refInput = useCheckbox("checkbox");
    useDisabled();

    return (
        <host shadowDom>
            <button
                onclick={() => {
                    refInput.current.click();
                }}
                class="input-box input-box--use-border"
            >
                <div class="checkbox-state">
                    <slot name="icon">
                        <svg
                            class="icon"
                            width=".7rem"
                            viewBox="0 0 11.192 8.364"
                        >
                            <path
                                d="M-1530.757,8.778a1,1,0,0,1-.67-.257l-.037-.035-2.829-2.829a1,1,0,0,1,0-1.414,1,1,0,0,1,1.415,0l2.121,2.122L-1525.1.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-6.364,6.364a1,1,0,0,1-.707.293Z"
                                fill="currentColor"
                                transform="translate(1534.586 -0.414)"
                            />
                        </svg>
                    </slot>
                </div>
            </button>
        </host>
    );
}

checkbox.props = {
    name: {
        type: String,
        reflect: true,
    },
    value: {
        type: null,
        value: "on",
    },
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
};

checkbox.styles = [
    tokensInput,
    tokenColors,
    css`
        :host {
            color: var(--theme--checked);
        }

        :host([checked]) .checkbox-state {
            opacity: 1;
        }

        ::slotted([slot="icon"]),
        svg {
            color: var(--checked-contrast);
        }

        slot[name="icon"] {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .input-box {
            --size: calc(var(--min-height) * 0.75);
            width: var(--size);
            height: var(--size);
            padding: 0px;
            cursor: pointer;
        }

        .input-box--use-border {
            --border-color: currentColor;
        }

        .checkbox-state {
            --state-scale: 0.8;
            --state-size: calc((var(--size) * var(--state-scale)));
            --state-max-size: calc(var(--size) - (var(--border-width) * 2));
            width: var(--state-size);
            height: var(--state-size);
            max-width: var(--state-max-size);
            max-height: var(--state-max-size);
            margin: auto;
            border-radius: calc(var(--radius) * var(--state-scale));
            background: currentColor;
            opacity: 0;
        }

        .input-box,
        .checkbox-state {
            transition: 0.3s ease all;
        }
    `,
];

export const InputCheckbox = c(checkbox);
