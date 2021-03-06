import { Props, c, css, useHost } from "atomico";
import { useCheckbox } from "../hooks/use-checkbox";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { InputGenericProps } from "../props";
import tokens from "../tokens";
import customElements from "../custom-elements";
import { Icon } from "../icon/icon";

function checkbox({ tabIndex }: Props<typeof checkbox>) {
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
                    <Icon type="check"></Icon>
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
    tabIndex: { type: Number },
    checked: { type: Boolean, reflect: true },
    id: String,
};

checkbox.styles = [
    tokens,
    css`
        :host {
            --color-input-30: var(--color-input-10);
            ---state-opacity: 0;
            ---state-size: 100%;
            cursor: pointer;
        }

        :host([disabled]) {
            opacity: var(--opacity-disabled);
            pointer-events: none;
        }

        :host([checked]) {
            ---state-opacity: 1;
        }

        .checkbox {
            width: var(--size-m);
            height: var(--size-m);
            padding: 0;
            background: var(--color-input-60);
            border-radius: var(--border-radius);
            border: var(--input-border-width) var(--input-border-style)
                var(--color-input-30);
            overflow: hidden;
            cursor: unset;
            font: unset;
            display: flex;
        }

        .checkbox-state {
            width: var(---state-size);
            height: var(---state-size);
            background: var(--color-input-10);
            opacity: var(---state-opacity);
            margin: auto;
            border-radius: var(---state-radius);
            transform: var(---state-transform);
            display: flex;
            place-content: center;
        }

        .checkbox-state * {
            color: var(--color-input-60);
        }

        .checkbox,
        .checkbox-state {
            transition: var(--transition-action);
        }
    `,
];

export const InputCheckbox = c(checkbox);

customElements.define("input-checkbox", InputCheckbox);
