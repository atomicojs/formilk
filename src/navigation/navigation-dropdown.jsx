import { c, css } from "atomico";
import { tokensNavigation } from "../tokens";

function navigationDropdown() {
    return (
        <host shadowDom>
            <div class="navigation-box">
                <slot></slot>
            </div>
        </host>
    );
}

navigationDropdown.styles = [
    tokensNavigation,
    css`
        .navigation-box {
            padding: 0 var(--space-x);
        }
    `,
];

export const NavigationDropdown = c(navigationDropdown);
