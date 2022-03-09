import { css } from "atomico";
import {
    tokensBox,
    tokensFont,
    tokensColor,
    tokensShadow,
    tokensBorder,
    tokensOpacity,
    tokensTransition,
    tokensInput,
} from "../tokens";

export const inputBaseStyle = [
    tokensBox,
    tokensFont,
    tokensColor,
    tokensInput,
    tokensShadow,
    tokensBorder,
    tokensOpacity,
    tokensTransition,
    css`
        :host {
            width: 100%;
            height: var(--size-xl);
            display: block;
            ---line-opacity: var(--input-opacity-unselect);
            ---space-x: var(--size-s);
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
        }

        .input-line {
            width: 100%;
            height: var(--input-border);
            position: absolute;
            bottom: calc(var(--input-border) * -1);
            left: 0px;
            background: var(--input-color-contrast);
            opacity: var(---line-opacity);
            transition: var(--input-transition);
        }

        .input {
            width: 100%;
            height: 100%;
            border: var(--input-border) solid var(--input-color-divide);
            border-radius: var(--radius);
            padding: 0 var(---space-x);
            background: var(--input-color-fill);
        }

        :host([narrow]) {
            ---space-x: 0;
        }

        :host([focused]) {
            ---line-opacity: 1;
        }

        :host([ghost]) {
            --input-color-fill: transparent;
        }

        :host([disabled]) {
            opacity: var(--input-opacity-disabled);
            pointer-events: none;
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
