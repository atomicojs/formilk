import { c, css } from "atomico";
import {
    tokensBorder,
    tokensColor,
    tokensOpacity,
    tokensTransition,
} from "../tokens";

function divide() {
    return (
        <host shadowDom>
            <div class="divide-layer divide-fill"></div>
            <div class="divide-layer divide-mark"></div>
        </host>
    );
}

divide.styles = [
    tokensBorder,
    tokensColor,
    tokensOpacity,
    tokensTransition,
    css`
        :host {
            --color-fill: var(--color-divide-fill);
            --color-contrast: var(--color-divide-contrast);
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
