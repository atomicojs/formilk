import { css } from "atomico";
import { createParseCssTokens } from "@uppercod/parse/parse-css-tokens";
import options from "./options";

const cssTokens = createParseCssTokens(options);

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
        size-small: 0.85;
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
        @title: Colors box;
        color-box-fill: #e7f3f1;
        color-box-contrast: #2c3a41;
        color-box-divide: rgba(255, 255, 255, 0.5);
        color-box-layer: #f3f9f8;
        `}

        ${tokenize`
        @title: Colors button;
        color-button-fill: #2c3a41;
        color-button-active: rgba(0, 0, 0, 0.25);
        color-button-hover: rgba(255, 255, 255, 0.25);
        color-button-contrast: #fff;
        color-button-divide: transparent;
        `}

        ${tokenize`
        @title: Colors input;
        color-input-fill: var(--color-box-layer);
        color-input-contrast: currentColor;
        color-input-divide: transparent;
        color-input-status: currentColor;
        `}

        ${tokenize`
        @title: Colors checkbox, radio and switch;
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
        `}
    }
`;

export const tokensTransition = css`
    :host {
        ${tokenize`
        @title: Transitions;
        transition-x1: .3s ease all;
        transition-x2: .6s ease all;
        `}
    }
`;
