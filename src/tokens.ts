import { css } from "atomico";
import { createParseCssTokens } from "@uppercod/parse/parse-css-tokens";
import options from "./options";
import system, { cssProps } from "./system";

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
            radius: .5em;
            scale-small: .75;
            size-xl: calc(var(--scale) * 10);
            size-l: calc(var(--scale) * 8);
            size-m: calc(var(--scale) * 7);
            size-s: calc(var(--scale) * 5);
            size-xs: calc(var(--scale) * 4);
            size-xxs: calc(var(--scale) * 3);
        `)}
    }
    :host([size="small"]) {
        --size-xl: calc(var(--scale) * 8);
        --size-l: calc(var(--scale) * 7);
        --size-m: calc(var(--scale) * 5);
        --size-s: calc(var(--scale) * 3.5);
    }
`;

export const cssBaseColors = css`
    :host {
        ${system.cssProps(`
        color-primary-60: white;
        color-primary-30: transparent;
        color-primary-10: black;

        color-layer-60: #f1f1f1;
        color-layer-30: transparent;
        color-layer-10: var(--color-primary-10);
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
            input-border-width: 1px;
            input-border-style: solid;
            input-border: var(--input-border-width) var(--input-border-style) var(--color-input-30);
            input-opacity-unselect: .25;
            input-opacity-unfocus: .5;
            input-opacity-disabled: .5;
            input-transition: .2s ease all;
            color-input-60: var(--color-layer-60);
            color-input-30: var(--color-layer-30);
            color-input-10: var(--color-layer-10);
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
            color-button-60: var(--color-layer-60);
            color-button-30: var(--color-layer-30);
            color-button-10: var(--color-layer-10);
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

export const tokensShadow = css`
    :host {
        ${tokenize`
        @title: Box shadow;
        @type: shadow;
        shadow-box: 0px 22px 44px -22px rgb(0, 0, 0, 0.33);
        shadow-action: 0px 12px 12px -12px rgb(0, 0, 0, 0.33);
        shadow-layer: 0px 12px 40px -20px rgb(0, 0, 0, 0.33);
        `}
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

export const tokensColor = css`
    :host {
        ${tokenize`
        @title: Colors palette;
        color-primary: rgb(44, 58, 65);
        color-primary-contrast: white;
        color-secondary: var(--color-primary);
        color-secondary-contrast: var(--color-primary-contrast);
        color-neutral: var(--color-primary);
        color-neutral-75: rgba(44, 58, 65, .75);
        color-neutral-50: rgba(44, 58, 65, .5);
        `}

        ${tokenize`
        @title: Colors box;
        color-box-fill: #e7f3f1;
        color-box-contrast: var(--color-primary);
        color-box-divide: rgba(255, 255, 255, 0.5);
        color-box-layer: #f3f9f8;
        `}

        ${tokenize`
        @title: Colors button;
        color-button-fill: var(--color-secondary);
        color-button-active: rgba(0, 0, 0, 0.25);
        color-button-hover: rgba(255, 255, 255, 0.25);
        color-button-contrast: var(--color-secondary-contrast);
        color-button-divide: transparent;
        color-button-layer: rgba(255, 255, 255, 0.25);
        `}

        ${tokenize`
        @title: Colors input;
        color-input-fill: var(--color-box-layer);
        color-input-contrast: currentColor;
        color-input-divide: transparent;
        color-input-status: currentColor;
        `}

        ${tokenize`
        @title: Colors checkbox;
        color-checkbox-fill: var(--color-input-fill);
        color-checkbox-divide: var(--color-button-fill);
        color-checkbox-contrast: var(--color-button-contrast);
        `}

        ${tokenize`
        @title: Colors divide;
        color-divide-fill: currentColor;
        color-divide-contrast: currentColor;
        `}

        ${tokenize`
        @title: Colors status;
        color-status-contrast: white;
        color-status-success: #18d47c;
        color-status-info: #0080ff;
        color-status-warning: #f9aa33;
        color-status-danger: #ff5b5b;
        `}

${cssProps(`
            color-primary-60: #f1f1f1;
            color-primary-30: currentColor;
            color-primary-10: currentColor;

            color-info-60: #0080ff;
            color-info-30: var(--color-info-60);
            color-info-10: white;

            color-success-60: #18d47c;
            color-success-30: var(--color-success-60);
            color-success-10: white;

            color-warning-60: #f9aa33;
            color-warning-30: var(--color-warning-60);
            color-warning-10: white;

            color-danger-60: #ff5b5b;
            color-danger-30: var(--color-danger-60);
            color-danger-10: white;
        `)}
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
