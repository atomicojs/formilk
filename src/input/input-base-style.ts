import { css } from "atomico";
import {
    tokensSpace,
    tokensFont,
    tokensSize,
    tokensBorder,
    tokensColor,
    tokensShadow,
    tokensOpacity,
    tokensTransition,
} from "../tokens";

export const inputBaseStyle = [
    tokensSpace,
    tokensFont,
    tokensSize,
    tokensBorder,
    tokensColor,
    tokensShadow,
    tokensOpacity,
    tokensTransition,
    css`
        :host {
            --color-fill: var(--color-current-layer, var(--color-input-fill));
            --color-divide: var(--color-input-divide);
            --color-contrast: var(
                --color-current-contrast,
                var(--color-input-contrast)
            );
            --color-status: var(--color-input-status);
            --line-opacity: var(--opacity-disabled);
            --shadow: none;
            ---space-x: var(--space-x);
            ---padding: 0 var(---space-x);
            ---height: var(--size-min);
            ---font-size: var(--font-size);
            font-size: var(---font-size);
            display: inline-flex;
        }
        :host([shadow]) {
            --shadow: var(--shadow-action);
        }
        .input {
            display: grid;
            min-width: 100%;
            background: var(--color-fill);
            color: var(--color-contrast);
            position: relative;
            border-radius: var(--border-radius);
            border: var(--border-width) solid var(--color-divide);
            box-sizing: border-box;
            box-shadow: var(--shadow);
        }
        .input-content {
            display: grid;
            min-height: var(---height);
            align-items: center;
            padding: var(---padding);
            grid-gap: var(--space-between);
            grid-template-columns: var(--columns);
            position: relative;
        }
        .input-line {
            width: 100%;
            height: var(--border-width);
            padding: 0 var(---space-x);
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 3;
            transform: translateY(100%);
            opacity: var(--line-opacity);
            transition: var(--transition-x0);
        }
        .input-line-fill {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background: var(--color-status);
        }

        :host([size="small"]) {
            ---font-size: var(--font-size-small);
            ---height: calc(var(--size-min) * var(--size-small));
            ---space-x: calc(var(--space-x) * var(--size-small));
        }
        :host([narrow]) {
            --space-x: 0;
        }
        :host([focused]) {
            --line-opacity: 1;
        }
        :host([ghost]) {
            --color-fill: transparent;
        }
    `,
];
