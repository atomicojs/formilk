import { Props, c, css, useHost } from "atomico";
import customElements from "../custom-elements";
import tokens from "../tokens";
import { Icons, IconsKeys } from "./icons";

function icon({ type, size, status }: Props<typeof icon>) {
    const {
        current: { constructor },
    } = useHost();

    // @ts-ignore
    const Icon = constructor[type] as any;

    return (
        <host shadowDom>
            <Icon cloneNode />
            <style>
                {size && `:host{--width: var(--size-${size});}`}
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
        value: (): IconsKeys => "check",
    },
    size: {
        type: String,
        reflect: true,
        value: "xs",
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
    tokens,
    css`
        :host {
            width: var(--width);
            display: inline-flex;
            align-items: center;
            justify-items: center;
        }
        svg {
            width: 100%;
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

export const Icon = Object.assign(c(icon), Icons);

customElements.define("icon", Icon);
