import { css } from "atomico";

export const tokensSize = css`
    :host {
        --min-size: var(--fm--min-size, 2.5rem);
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
        --space-between: var(--fm--space-inset, 1rem);
    }
`;

export const tokensColor = css`
    :host {
        --theme-primary: var(--fm--theme-primary, #2c3a41);
        --theme-primary-light: var(--fm--theme-primary, #2c3a4180);
        --theme-primary-contrast: var(--fm--theme-primary, #fff);
        --theme-secondary: var(--fm--theme-secondary, #000000);
        --theme-success: var(--fm--theme-success, #18d47c);
        --theme-success-light: var(--fm--theme-success, #18d47c80);
        --theme-warning: var(--fm--theme-warning, #f9aa33);
        --theme-warning-light: var(--fm--theme-warning-light, #f9aa3380);
        --theme-danger: var(--fm--theme-danger, #ff5b5b);
        --theme-danger-light: var(--fm--theme-danger-light, #ff5b5b80);
        --theme-info: var(--fm--theme-info, #0080ff);
        --theme-info-light: var(--fm--theme-info-light, #0080ff80);
        --theme-checked: var(--theme-primary);
        --theme-checked-contrast: var(--theme-primary-contrast);
        --theme-disabled: var(--fm--theme-disabled, #d5d8d9);
        --theme-divide: var(--fm--theme-divide, rgba(0, 0, 0, 0.08));
        --theme-divide-contrast: var(--fm--theme-divide, var(--theme-primary));
        --theme-borderline: var(
            --fm--theme-borderline,
            rgba(255, 255, 255, 0.5)
        );
        --theme-container: var(
            --fm--theme-container,
            rgba(255, 255, 255, 0.25)
        );
        --theme-container-contrast: var(--theme-primary);
        --theme-container-light: var(--theme-borderline);
        --theme-layer: var(--fm--theme-layer, rgba(255, 255, 255, 0.5));
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
                var(--theme-container)
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
            --background: var(--fm-input--background, var(--theme-layer));
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
