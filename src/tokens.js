import { css } from "atomico";

export const tokensSize = css`
    :host {
        --size-min: var(--fm--size-min, 2.5rem);
    }
`;

export const tokensShadow = css`
    :host {
        --shadow-box: 0px 22px 44px -22px rgb(0, 0, 0, 0.33);
        --shadow-layer: 0px 12px 40px -20px black;
        --shadow-action: 0px 12px 12px -12px black;
    }
`;

export const tokensBorder = css`
    :host {
        --border-radius: var(--fm--border-radius, 0.5rem);
        --border-width: var(--fm--border-width, 1px);
        --border-divide-width: var(--fm--border-divide-width, 2px);
    }
`;

export const tokensSpace = css`
    :host {
        --space-y: var(--fm--space-y, 0.625rem);
        --space-x: var(--fm--space-x, 1.25rem);
        --space-around: var(--fm--space-around, 1rem);
        --space-between: var(--fm--space-inset, 1rem);
    }
`;

export const tokensColor = css`
    :host {
        --color-box-fill: #e7f3f1;
        --color-box-contrast: #2c3a41;
        --color-box-divide: rgba(255, 255, 255, 0.5);
        --color-box-layer: #f3f9f8;

        --color-button-fill: #2c3a41;
        --color-button-active: rgba(0, 0, 0, 0.25);
        --color-button-hover: rgba(255, 255, 255, 0.25);
        --color-button-contrast: #fff;
        --color-button-divide: transparent;
        /**
         * components with input format, eg
         * input and select
         */
        --color-input-fill: var(--color-box-layer);
        --color-input-contrast: currentColor;
        --color-input-divide: transparent;
        --color-input-status: currentColor;
        /**
         *
         */
        --color-checkbox-fill: var(--color-input-fill);
        --color-checkbox-divide: var(--color-button-fill);
        --color-checkbox-contrast: var(--color-button-contrast);
        /**
         *
         */
        --color-divide-fill: rgba(0, 0, 0, 0.1);
        --color-divide-contrast: currentColor;

        --color-status-contrast: white;
        --color-status-success: #18d47c;
        --color-status-info: #0080ff;
        --color-status-warning: #f9aa33;
        --color-status-danger: #ff5b5b;
    }
`;

// export const tokensColor = css`
//     :host {
//         --color-primary-fill: var(--fm--color-primary-fill, #2c3a41);
//         --color-primary-contrast: var(--fm--color-primary-contrast, #fff);
//         --color-primary-layer: var(--fm--color-primary-layer, #435761);
//         --color-primary-divide: var(--fm--color-primary-divide, #8c989a);

//         --color-secondary-fill: var(--fm--color-secondary-fill, #000000);

//         --color-success-fill: var(--fm--color-success-fill, #18d47c);
//         --color-success-contrast: var(--fm--color-success-contrast, #fff);
//         --color-success-divide: var(--fm--color-success-divide, #81e2b3);

//         --color-warning-fill: var(--fm--color-warning, #f9aa33);
//         --color-warning-contrast: var(--fm--color-warning-contrast, #fff);
//         --color-warning-divide: var(--fm--color-warning-divide, #f3d093);

//         --color-danger-fill: var(--fm--color-danger, #ff5b5b);
//         --color-danger-contrast: var(--fm--color-danger-contrast, #fff);
//         --color-danger-divide: var(--fm--color-danger-divide, #f6a8a7);

//         --color-info-fill: var(--fm--color-info, #0080ff);
//         --color-info-contrast: var(--fm--color-info-contrast, #fff);
//         --color-info-divide: var(--fm--color-info-divide, #76bbfa);

//         --color-checked-fill: var(
//             --fm--color-checked,
//             var(--color-primary-fill)
//         );
//         --color-checked-contrast: var(
//             --fm--checked-contrast,
//             var(--color-primary-contrast)
//         );

//         --color-disabled: var(--fm--color-disabled, #d5d8d9);

//         --color-divide-fill: var(--fm--color-divide, rgba(0, 0, 0, 0.08));
//         --color-divide-contrast: var(--fm--color-divide, currentColor);

//         --color-box-fill: var(--fm--color-box-fill, #f8fcfc);
//         --color-box-contrast: var(
//             --fm--color-box-contrast,
//             var(--color-primary-fill)
//         );

//         --color-box-divide: var(--fm--color-box-divide, #fff);
//         --color-box-layer: var(--fm--color-box-layer, #fff);
//         --color-box-shadow: var(--fm--color-box-shadow, #000);

//         --color-shadow: rgba(0, 0, 0, 0.33);
//     }
// `;

export const tokensOpacity = css`
    :host {
        --opacity-disabled: var(--fm--opacity-disabled, 0.5);
    }
`;

// export const tokensNavigation = [
//     tokensSpace,
//     tokensColor,
//     tokensBorder,
//     css`
//         :host {
//             --line-height: calc(var(--border-width) * 2);
//             --background: var(--fm-navigation--background, #fff);
//         }
//     `,
// ];
