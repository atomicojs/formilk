import { css } from "atomico";
import {
    tokensBox,
    tokensFont,
    tokensColor,
    tokensShadow,
    tokensBorder,
    tokensOpacity,
    tokensTransition,
} from "../tokens";

export const inputBaseStyle = [
    tokensBox,
    tokensFont,
    tokensColor,
    tokensShadow,
    tokensBorder,
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
            --gap: var(--space--between);
            font-size: var(--font-size);
            line-height: var(--size-line);
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
            min-height: var(--size--min);
            align-items: center;
            padding: 0 var(--space--x);
            grid-gap: var(--gap);
            grid-template-columns: var(--columns);
            position: relative;
        }
        .input-line {
            width: 100%;
            height: var(--border-width);
            padding: 0 var(--space--x);
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
            --scale: var(--scale-small);
            --font-size: var(--font-size-small);
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
        :host([disabled]) {
            opacity: var(--opacity-disabled);
            pointer-events: none;
        }
        ::slotted([slot="input"].reset) {
            width: 100%;
            height: var(--size--line);
            padding: var(--space--y) 0;
            font-family: unset;
            font-size: unset;
            background: transparent;
            border: none;
            letter-spacing: unset;
            color: unset;
            outline: none;
            position: relative;
            z-index: 2;
            line-height: unset;
        }
    `,
];
