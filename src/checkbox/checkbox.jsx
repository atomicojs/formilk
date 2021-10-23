import { c, css, useHost } from "atomico";
import { useCheckbox } from "../hooks/use-checkbox";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { inputGenericProps } from "../props";
import {
    tokensSpace,
    tokensSize,
    tokensBorder,
    tokensOpacity,
    tokensColor,
    tokensShadow,
} from "../tokens";

function checkbox({ tabIndex }) {
    const host = useHost();
    const refInput = useCheckbox("checkbox");
    const disabled = useDisabled();

    useReflectEvent(host, refInput, "click");

    return (
        <host shadowDom>
            <button
                class="checkbox"
                disabled={disabled}
                tabIndex={disabled ? -1 : tabIndex}
            >
                <div class="checkbox-state">
                    <slot name="icon">
                        <svg width=".7rem" viewBox="0 0 11.192 8.364">
                            <path
                                d="M-1530.757,8.778a1,1,0,0,1-.67-.257l-.037-.035-2.829-2.829a1,1,0,0,1,0-1.414,1,1,0,0,1,1.415,0l2.121,2.122L-1525.1.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-6.364,6.364a1,1,0,0,1-.707.293Z"
                                transform="translate(1534.586 -0.414)"
                                fill="currentColor"
                            />
                        </svg>
                    </slot>
                </div>
            </button>
        </host>
    );
}

checkbox.props = {
    ...inputGenericProps,
    value: {
        type: null,
        value: "on",
    },
    checked: { type: Boolean, reflect: true },
};

checkbox.styles = [
    tokensSpace,
    tokensSize,
    tokensBorder,
    tokensOpacity,
    tokensColor,
    tokensShadow,
    css`
        :host {
            --color-fill: var(--color-checkbox-fill);
            --color-divide: var(--color-checkbox-divide);
            --color-contrast: var(--color-checkbox-contrast);
            --shadow: var(--shadow-action);
            align-items: center;
        }

        :host([shadow]) {
            box-shadow: var(--shadow);
        }

        :host([disabled]) {
            opacity: var(--opacity-disabled);
            pointer-events: none;
        }

        :host([checked]) .checkbox-state {
            opacity: 1;
        }

        .checkbox {
            --size: calc(var(--size-min) * 0.75);
            width: var(--size);
            height: var(--size);
            padding: 0px;
            background: var(--color-fill);
            border-radius: var(--border-radius);
            backdrop-filter: var(--backdrop);
            border: var(--border-width) solid var(--color-divide);
            cursor: unset;
        }

        ::slotted([slot="icon"]),
        svg {
            color: var(--color-contrast);
        }

        slot[name="icon"] {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
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
            border-radius: calc(var(--border-radius) * 0.75);
            background: var(--color-divide);
            opacity: 0;
        }

        .checkbox,
        .checkbox-state {
            transition: 0.3s ease all;
        }
    `,
];

export const Checkbox = c(checkbox);