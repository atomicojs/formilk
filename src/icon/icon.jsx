//@ts-check
import { c, css, useHost } from "atomico";
import customElements from "../custom-elements";
import { tokensColor } from "../tokens";
import icons from "./icons";

/**
 *
 * @param {import("atomico").Props<typeof icon.props>} props
 * @returns
 */
function icon({ type, size, status }) {
    const {
        //@ts-ignore
        current: { constructor },
    } = useHost();

    const Icon = constructor[type];

    return (
        <host shadowDom>
            {<Icon cloneNode />}
            <style>
                {size && `:host{--size: ${size};}`}
                {status &&
                    `:host{--color-status: var(--color-status-${status});}`}
            </style>
        </host>
    );
}

icon.props = {
    type: {
        type: String,
        reflect: true,
        value:
            /**
             * @returns {keyof icons}
             */
            () => "check",
    },
    size: {
        type: String,
        reflect: true,
    },
    define: {
        type: String,
        reflect: true,
    },
    status: {
        type: String,
        reflect: true,
    },
};

icon.styles = [
    tokensColor,
    css`
        :host {
            display: inline-flex;
            align-items: center;
            justify-items: center;
        }
        svg {
            width: var(--size, 1em);
            margin: auto;
        }
        path {
            fill: var(
                --color-status,
                var(--color-current-contrast, currentColor)
            );
        }
        :host([define]) {
            display: none;
        }
    `,
];

export const Icon = Object.assign(c(icon), icons);

customElements.define("icon", Icon);
