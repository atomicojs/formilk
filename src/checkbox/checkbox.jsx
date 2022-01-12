import { c, css, useHost } from "atomico";
import { useCheckbox } from "../hooks/use-checkbox";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { InputGenericProps } from "../props";
import {
    tokensSize,
    tokensBorder,
    tokensOpacity,
    tokensColor,
    tokensShadow,
} from "../tokens";
import customElements from "../custom-elements";
import { Icon } from "../icon/icon";

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
                        <Icon size="1em" type="check"></Icon>
                    </slot>
                </div>
            </button>
        </host>
    );
}

checkbox.props = {
    ...InputGenericProps,
    value: {
        type: null,
        value: "on",
    },
    checked: { type: Boolean, reflect: true },
};

checkbox.styles = [
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
            --color-current-contrast: var(--color-contrast);
            --shadow: var(--shadow-action);
            --scale: var(--size-small);
            --scale-state: 0.8;
            --size: calc(var(--size-min) * var(--scale));
            align-items: center;
            display: inline-flex;
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
            --state-size: calc((var(--size) * var(--scale-state)));
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

        :host([size="small"]) {
            --scale: var(--size-small) * var(--size-small);
            --scale-state: 1;
        }
    `,
];

export const Checkbox = c(checkbox);

customElements.define("checkbox", Checkbox);
