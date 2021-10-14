import { c, css, useProp } from "atomico";
import { tokensColor, tokensSpace, tokensBorder } from "../tokens";
export { TabGroup } from "./tab-group";

function tab() {
    const [, setShow] = useProp("show");
    return (
        <host shadowDom>
            <button class="button" onclick={() => setShow(true)}>
                <slot></slot>
            </button>
        </host>
    );
}

tab.props = {
    slot: {
        type: String,
        reflect: true,
        value: "tab",
    },
    for: {
        type: String,
        reflect: true,
    },
    show: {
        type: Boolean,
        reflect: true,
        event: {
            type: "Show",
            bubbles: true,
        },
    },
};

tab.styles = [
    tokensSpace,
    tokensColor,
    tokensBorder,
    css`
        .button {
            padding: var(--space-y) var(--space-x);
            border: none;
            background: transparent;
            border-bottom: calc(var(--border-width) * 2) solid transparent;
            font: unset;
            line-height: 1em;
        }
        :host([show]) .button {
            border-color: var(--primary);
        }
    `,
];

export const Tab = c(tab);
