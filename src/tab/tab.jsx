import { c, css, useProp } from "atomico";
import { tokensColor, tokensSize, tokensSpace } from "../tokens";
export { TabGroup } from "./tab-group";

function tab() {
    const [show, setShow] = useProp("show");
    return (
        <host shadowDom onclick={() => setShow(true)}>
            <slot></slot>
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
    tokensSize,
    tokensColor,
    css`
        :host {
            padding: var(--space-y) var(--space-x);
        }
        :host([show]) {
            border-bottom: 2px solid black;
        }
    `,
];

export const Tab = c(tab);
