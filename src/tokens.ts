import { css } from "atomico";
import { createParseCssTokens } from "@uppercod/parse/parse-css-tokens";
import options from "./options";
import system from "./system";

const cssTokens = createParseCssTokens({
    ...options,
    prefix: options.prefix + "--",
});

export const tokens = cssTokens.tokens;

export const tokenize = cssTokens.tokenize;

export const cssBase = css`
    :host {
        ${system.cssProps(`
            scale: .25rem;
            border-radius: .5em;
            border-width: 1px;
            scale-small: .75;
        `)}
        font-size: 1rem;
        --size-xl: calc(var(--scale) * 10);
        --size-l: calc(var(--scale) * 8);
        --size-m: calc(var(--scale) * 7);
        --size-s: calc(var(--scale) * 5);
        --size-xs: calc(var(--scale) * 4);
        --size-xxs: calc(var(--scale) * 3);
    }
    :host([size="small"]) {
        font-size: 0.875rem;
        --size-xl: calc(var(--scale) * 8);
        --size-l: calc(var(--scale) * 7);
        --size-m: calc(var(--scale) * 5);
        --size-s: calc(var(--scale) * 3.5);
    }
`;

export const cssBaseColors = css`
    :host {
        ${system.cssProps(`
        color-primary-60: #404040;
        color-primary-30: transparent;
        color-primary-10: white;

        color-action-60: #fff;
        color-action-30: transparent;
        color-action-10: #2C3A41;

        color-toggle-60: var(--color-primary-60);
        color-toggle-30: var(--color-primary-30);
        color-toggle-10: var(--color-primary-10);

        color-layer-60: #fff;
        color-layer-30: transparent;
        color-layer-10: #2C3A41;
        `)}
    }
`;

export const cssStatusColors = css`
    :host {
        ${system.cssProps(`
        color-success-60: teal;
        color-success-30: transparent;
        color-success-10: white;

        color-info-60: teal;
        color-info-30: transparent;
        color-info-10: white;

        color-warning-60: teal;
        color-warning-30: transparent;
        color-warning-10: white;

        color-danger-60: teal;
        color-danger-30: transparent;
        color-danger-10: white;
        `)}
    }
`;

export const cssInput = [
    cssBase,
    cssBaseColors,
    cssStatusColors,
    css`
        :host {
            ${system.cssProps(`
            input-border-width: var(--border-width);
            input-border-style: solid;
            input-border: var(--input-border-width) var(--input-border-style) var(--color-input-30);
            input-opacity-unselect: .25;
            input-opacity-unfocus: .5;
            input-opacity-disabled: .5;
            input-transition: .2s ease all;
            color-input-60: var(--color-action-60);
            color-input-30: var(--color-action-30);
            color-input-10: var(--color-action-10);
            `)}
        }
    `,
];

export const cssButton = [
    cssInput,
    css`
        :host {
            ${system.cssProps(`
            button-border: var(--input-border-width) var(--input-border-style) var(--color-button-30);
            color-button-60: var(--color-action-60);
            color-button-30: var(--color-action-30);
            color-button-10: var(--color-action-10);
            `)}
        }
    `,
];

export const tokensFont = css`
    :host {
        ${tokenize`
            @title: Font;
            @type: size;
            font-size: 1rem;
            font-size-small: 0.885rem;
            font-weight-regular: 400;
            font-weight-light: 300;
            font-weight-medium: 600;
            font-weight-bold: 700;
            font-line-height-heading: 1;
            font-line-height-text: 1.6;
            font-size-heading: 2rem;
        `}
    }
`;

export const cssShadow = css`
    :host {
        ${system.cssProps(`
        shadow-layer: 0px 12px 22px rgba(0,0,0 ,.05);
        `)}
    }
`;

export const tokensBorder = css`
    :host {
        ${tokenize`
        @title: Border & Radius;
        border-radius: 0.5rem;
        border-width: 1px;
        border-divide-width: 2px;
        `}
    }
`;

export const tokensOpacity = css`
    :host {
        ${tokenize`
        @title: Opacity;
        opacity-disabled: 0.5;
        opacity-divide: 0.15;
        opacity-switch-off: 0.25;
        `}
    }
`;

export const tokensTransition = css`
    :host {
        ${tokenize`
        @title: Transitions;
        transition-ease: ease;
        transition-s0: .2s;
        transition-s1: .3s;
        transition-s2: .6s;
        transition-x0: var(--transition-s0) var(--transition-ease) all;
        transition-x1: var(--transition-s1) var(--transition-ease) all;
        transition-x2: var(--transition-s2) var(--transition-ease) all;
        `}
    }
`;
