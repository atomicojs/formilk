import { css } from "atomico";

export const tokensSize = css`
    :host {
        --min-size: var(--fm--min-size, 2.5rem);
        --shadow-container: var(--fm--shadow-container, 0px 22px 44px -22px);
        --shadow-action: var(--fm--shadow-action, 0px 12px 12px -12px);
        --shadow-layer: var(--fm--shadow-layer);
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

export const tokensColor = css`
    :host {
        --color-primary: var(--fm--color-primary, #2c3a41);
        --color-primary-contrast: var(--fm--color-primary-contrast, #fff);
        --color-primary-layer: var(--fm--color-primary-layer, #435761);
        --color-primary-divide: var(--fm--color-primary-divide, #2c3a4180);
        --color-secondary: var(--fm--color-secondary, #000000);
        --color-success: var(--fm--color-success, #18d47c);
        --color-success-divide: var(--fm--color-success, #18d47c80);
        --color-warning: var(--fm--color-warning, #f9aa33);
        --color-warning-divide: var(--fm--color-warning-divide, #f9aa3380);
        --color-danger: var(--fm--color-danger, #ff5b5b);
        --color-danger-divide: var(--fm--color-danger-divide, #ff5b5b80);
        --color-info: var(--fm--color-info, #0080ff);
        --color-info-divide: var(--fm--color-info-divide, #0080ff80);
        --color-checked: var(--fm--checked, var(--color-container));
        --color-checked-contrast: var(
            --fm--checked-contrast,
            var(--color-primary)
        );
        --color-checked-layer: var(
            --fm--color-checked-layer,
            var(--color-primary-contrast)
        );
        --color-checked-divide: var(
            --fm--color-checked-divide,
            var(--color-checked-contrast)
        );
        --color-disabled: var(--fm--color-disabled, #d5d8d9);
        --color-divide: var(--fm--color-divide, rgba(0, 0, 0, 0.08));
        --color-divide-contrast: var(--fm--color-divide, var(--color-primary));
        --color-container: var(--fm--color-container, #f8fcfc);
        --color-container-contrast: var(
            --fm--color-container-contrast,
            var(--color-primary)
        );
        --color-container-divide: var(--fm--color-container-divide, #fff);
        --color-container-layer: var(--fm--color-container-layer, #fff);
        --color-container-shadow: var(--fm--color-container-shadow, #000);
    }
`;

export const tokensContainer = [
    tokensSpace,
    tokensColor,
    tokensSize,
    tokensBorder,
    css`
        :host {
            --background: var(
                --fm-container--background,
                var(--color-container)
            );
            --shadow-size: var(
                --fm-container--shadow-size,
                0px 22px 44px -22px
            );
            --shadow-color: var(
                --fm-container--shadow-color,
                rgba(0, 0, 0, 0.25)
            );
            --font-size: var(--fm-container--font-size, 1em);
        }
    `,
];

export const tokensInput = [
    tokensSpace,
    tokensColor,
    tokensSize,
    tokensBorder,
    css`
        :host {
            --background: var(--color-container-layer);
            --shadow-size: var(--fm-input--shadow-size, 0px 12px 12px -12px);
            --shadow-color: var(--fm-input--shadow-color, rgba(0, 0, 0, 0.33));
            --font-size: var(--fm-input--font-size, 1em);
            display: inline-flex;
            font-size: var(--font-size);
            min-height: var(--min-size);
        }
        :host([disabled]) {
            opacity: 0.5;
            pointer-events: none;
        }
    `,
];

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
