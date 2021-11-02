import { c, css } from "atomico";
import {
    tokensBorder,
    tokensColor,
    tokensOpacity,
    tokensSpace,
    tokensTransition,
} from "../tokens";

function divide() {
    return (
        <host shadowDom>
            <div class="divide">
                <div class="divide-layer divide-fill"></div>
                <div class="divide-layer divide-mark"></div>
            </div>
        </host>
    );
}

divide.props = {
    space: {
        type: String,
        reflect: true,
    },
};

divide.styles = [
    tokensSpace,
    tokensBorder,
    tokensColor,
    tokensOpacity,
    tokensTransition,
    css`
        :host {
            --color-fill: var(--color-divide-fill);
            --color-contrast: var(--color-divide-contrast);
            display: block;
        }

        :host([space="top"]) {
            padding-top: var(--space-between);
        }

        :host([space="bottom"]) {
            padding-bottom: var(--space-between);
        }
        :host([space]:not([space="bottom"]):not([space="top"])) {
            padding: var(--space-between) 0;
        }

        .divide {
            display: block;
            position: relative;
            height: var(--border-divide-width);
        }

        .divide-layer {
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
        }

        .divide-fill {
            width: 100%;
            background: var(--color-fill);
            opacity: var(--opacity-divide);
        }

        .divide-mark {
            width: var(--mark-width, 0px);
            transform: translateX(var(--mark-offset, 0px));
            background: var(--color-contrast);
            transition: var(--transition-x1);
        }
    `,
];

export const Divide = c(divide);
