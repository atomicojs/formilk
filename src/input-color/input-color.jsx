import { c, useProp, useRef, css } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { inputGenericProps } from "../props";
import {
    tokensSpace,
    tokensSize,
    tokensBorder,
    tokensOpacity,
    tokensColor,
} from "../tokens";

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
                slot="input"
            />
        ),
        [name, value]
    );
    return (
        <host shadowDom>
            <button
                class="color"
                style={`--background: ${value}`}
                disabled={disabled}
            >
                <slot name="input"></slot>
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
    tokensSpace,
    tokensColor,
    tokensSize,
    tokensBorder,
    tokensOpacity,
    css`
        :host([disabled]) {
            opacity: var(--opacity-disabled);
            pointer-events: none;
        }

        ::slotted([slot="input"]) {
            width: 100%;
            height: 100%;
            padding: 0px;
            border: 0px;
            opacity: 0;
            position: absolute;
            top: 0px;
            left: 0px;
        }

        .color {
            background: var(--background);
            border: var(--border-width) solid var(--color-box-divide);
            border-radius: var(--border-radius);
            width: var(--size-min);
            height: var(--size-min);
            position: relative;
            box-shadow: var(--shadow-size) var(--shadow-color);
        }
    `,
];

export const InputColor = c(color);
