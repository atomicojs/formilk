import { c, css } from "atomico";
import { tokensSpace, tokenColors } from "../tokens";

/**
 *
 * @param {import("atomico").Props<navigation.props>}  props
 */
function navigation({ columns }) {
    return (
        <host shadowDom>
            <div class="navigation-nav" style={{ "--columns": columns }}>
                <slot></slot>
            </div>
        </host>
    );
}

navigation.props = {
    theme: String,
    position: String,
    columns: Number,
};

navigation.styles = [
    tokensSpace,
    tokenColors,
    css`
        :host {
            display: grid;
            background: white;
            padding: var(--space-y÷2) 0;
        }
        .navigation-nav {
        }
        :host([columns]) .navigation-nav {
            display: grid;
            grid-template-columns: repeat(var(--columns), 1fr);
        }
    `,
];

export const Navigation = c(navigation);
