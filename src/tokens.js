import { css } from "atomico";
import { createParseCssTokens } from "@uppercod/parse/parse-css-tokens";
import options from "./options";

const cssTokens = createParseCssTokens({
    ...options,
    prefix: options.prefix + "--",
});

export const tokens = cssTokens.tokens;

export const tokenize = cssTokens.tokenize;

export const tokensSize = css`
    :host {
        ${tokenize`
        @title: Sizes;
        @type: size;
        @prop: Defines the minimum size for actions (input, button and others);
        size-min: 2.5rem;
        @prop: defines the scale to use when defining size as small;
        size-small: 0.75;
        `}
    }
`;

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

export const tokensSpace = css`
    :host {
        ${tokenize`
        @title: Spaces & Sizes;
        space-y: 0.625rem;
        space-x: 1.25rem;
        space-around: 1rem;
        space-between: 1rem;
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
