import { c, css } from "atomico";
import { tokensNavigation } from "../tokens";

function navigationItem() {
    return (
        <host shadowDom>
            <div class="navigation-item">
                <slot></slot>
                <div class="navigation-line"></div>
            </div>
        </host>
    );
}

navigationItem.props = {
    slot: {
        type: String,
        reflect: true,
        value: "item",
    },
    for: {
        type: String,
        reflect: true,
    },
    status: {
        type: String,
        reflect: true,
        event: {
            type: "change",
            bubbles: true,
        },
    },
};

navigationItem.styles = [
    tokensNavigation,
    css`
        .navigation-item {
            padding: var(--space-y÷2) 0;
            position: relative;
        }
        .navigation-line {
            bottom: 0;
            background: var(--split-contrast);
            opacity: 0;
        }
        :host([status="hover"]) .navigation-line,
        :host([status="active"]) .navigation-line {
            opacity: 1;
        }
    `,
];

export const NavigationItem = c(navigationItem);
