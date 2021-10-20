import { css } from "atomico";

export const tokensSize = css`
    :host {
        --size-min: var(--fm--size-min, 2.5rem);
        --size-shadow-container: var(
            --fm--size-shadow-container,
            0px 22px 44px -22px
        );
        --size-shadow-action: var(
            --fm--size-shadow-action,
            0px 12px 12px -12px
        );
        --size-shadow-layer: var(--fm--size-shadow-layer);
    }
`;

export const tokensBorder = css`
    :host {
        --border-radius: var(--fm--border-radius, 1rem);
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

export const tokensColors2 = css`
    :host {
        --color-box-fill: white;
        --color-box-contrast: black;
        --color-box-divide: transparent;

        --color-action-fill: black;
        --color-action-contrast: white;
        --color-action-divide: transparent;

        --color-input-fill: white;
        --color-input-contrast: white;
        --color-action-divide: transparent;

        --color-status-contrast: white;
        --color-status-warning: red;
        --color-status-danger: red;
        --color-status-info: red;
        --color-status-success: red;
    }
`;

export const tokensColor = css`
    :host {
        --color-primary-fill: var(--fm--color-primary-fill, #2c3a41);
        --color-primary-contrast: var(--fm--color-primary-contrast, #fff);
        --color-primary-layer: var(--fm--color-primary-layer, #435761);
        --color-primary-divide: var(--fm--color-primary-divide, #8c989a);

        --color-secondary-fill: var(--fm--color-secondary-fill, #000000);

        --color-success-fill: var(--fm--color-success-fill, #18d47c);
        --color-success-contrast: var(--fm--color-success-contrast, #fff);
        --color-success-divide: var(--fm--color-success-divide, #81e2b3);

        --color-warning-fill: var(--fm--color-warning, #f9aa33);
        --color-warning-contrast: var(--fm--color-warning-contrast, #fff);
        --color-warning-divide: var(--fm--color-warning-divide, #f3d093);

        --color-danger-fill: var(--fm--color-danger, #ff5b5b);
        --color-danger-contrast: var(--fm--color-danger-contrast, #fff);
        --color-danger-divide: var(--fm--color-danger-divide, #f6a8a7);

        --color-info-fill: var(--fm--color-info, #0080ff);
        --color-info-contrast: var(--fm--color-info-contrast, #fff);
        --color-info-divide: var(--fm--color-info-divide, #76bbfa);

        --color-checked-fill: var(
            --fm--color-checked,
            var(--color-primary-fill)
        );
        --color-checked-contrast: var(
            --fm--checked-contrast,
            var(--color-primary-contrast)
        );

        --color-disabled: var(--fm--color-disabled, #d5d8d9);

        --color-divide-fill: var(--fm--color-divide, rgba(0, 0, 0, 0.08));
        --color-divide-contrast: var(--fm--color-divide, currentColor);

        --color-box-fill: var(--fm--color-box-fill, #f8fcfc);
        --color-box-contrast: var(
            --fm--color-box-contrast,
            var(--color-primary-fill)
        );

        --color-box-divide: var(--fm--color-box-divide, #fff);
        --color-box-layer: var(--fm--color-box-layer, #fff);
        --color-box-shadow: var(--fm--color-box-shadow, #000);

        --color-shadow: rgba(0, 0, 0, 0.33);
    }
`;

export const tokensOpacity = css`
    :host {
        --opacity-disabled: var(--fm--opacity-disabled, 0.5);
    }
`;

export const tokensNavigation = [
    tokensSpace,
    tokensColor,
    tokensBorder,
    css`
        :host {
            --line-height: calc(var(--border-width) * 2);
            --background: var(--fm-navigation--background, #fff);
        }
    `,
];
