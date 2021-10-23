import { css } from "atomico";
import { tokenize } from "./tokenize";
export { tokens } from "./tokenize";

export const tokensSize = css`
    :host {
        ${tokenize`
        size-min: 2.5rem;
        `}
    }
`;

export const tokensShadow = css`
    :host {
        ${tokenize`
        @title: box-shadow;
        @type: shadow;
        shadow-box: 0px 22px 44px -22px rgb(0, 0, 0, 0.33);
        shadow-action: 0px 12px 12px -12px black;
        shadow-layer: 0px 12px 40px -20px black;
        `}
    }
`;

export const tokensBorder = css`
    :host {
        ${tokenize`
        border-radius: 0.5rem;
        border-width: 1px;
        border-divide-width: 2px;
        `}
    }
`;

export const tokensSpace = css`
    :host {
        ${tokenize`
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
        color-box-fill: #e7f3f1;
        color-box-contrast: #2c3a41;
        color-box-divide: rgba(255, 255, 255, 0.5);
        color-box-layer: #f3f9f8;
        `}

        ${tokenize`
        color-button-fill: #2c3a41;
        color-button-active: rgba(0, 0, 0, 0.25);
        color-button-hover: rgba(255, 255, 255, 0.25);
        color-button-contrast: #fff;
        color-button-divide: transparent;
        `}
        /**
         * components with input format, eg
         * input and select
         */
        ${tokenize`
        color-input-fill: var(--color-box-layer);
        color-input-contrast: currentColor;
        color-input-divide: transparent;
        color-input-status: currentColor;
        `}
        /**
         *
         */
        ${tokenize`
        color-checkbox-fill: var(--color-input-fill);
        color-checkbox-divide: var(--color-button-fill);
        color-checkbox-contrast: var(--color-button-contrast);
        `}
        /**
         *
         */
        ${tokenize`
        color-divide-fill: rgba(0, 0, 0, 0.1);
        color-divide-contrast: currentColor;
        `}

        ${tokenize`
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
        opacity-disabled: 0.5;
        `}
    }
`;
