import { css } from "atomico";
import tokens from "../tokens";
export const inputBaseStyle = [
    tokens,
    css`
        :host {
            width: 100%;

            display: block;
            ---line-opacity: var(--input-opacity-unfocus);
            --space-x: var(--size-s);
        }

        .input-row {
            width: 100%;
            height: 100%;
            display: grid;
            align-items: center;
            grid-template-columns: var(--columns);
            position: relative;
            box-sizing: border-box;
            gap: var(--size-xs);
            min-height: var(--size-xl);
        }

        .input-line {
            width: 100%;
            height: var(--input-border-width);
            position: absolute;
            bottom: calc(var(--input-border-width) * -1);
            left: 0px;
            background: var(--color-input-10);
            opacity: var(---line-opacity);
            transition: var(--transition-action);
        }

        .input {
            width: 100%;
            height: 100%;
            border: var(--input-border-width) var(--input-border-style)
                var(--color-input-30);
            border-radius: var(--border-radius);
            padding: 0 var(--space-x);
            background: var(--color-input-60);
            box-sizing: border-box;
            position: relative;
            min-height: var(--size-xl);
        }

        :host([focused]) {
            ---line-opacity: 1;
        }

        ::slotted([slot="input"]) {
            width: 100%;
            height: 100%;
            font: unset;
            background: transparent;
            border: none;
            letter-spacing: unset;
            color: unset;
            outline: none;
            position: relative;
            z-index: 1;
            line-height: unset;
            text-align: var(--text-align);
            border: none;
            padding: 0;
        }
    `,
];
