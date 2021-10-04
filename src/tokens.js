import { css } from "atomico";

export const tokensSize = css`
    :host {
        --min-size: var(--fm--min-size, 2.5rem);
    }
`;

export const tokensBorder = css`
    :host {
        --radius: var(--fm--radius, 1rem);
        --border-width: var(--fm--border-width, 1px);
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
        --primary: var(--fm--primary, #2c3a41);
        --primary-light: var(--fm--primary, #2c3a4180);
        --primary-contrast: var(--fm--primary, #fff);
        --secondary: var(--fm--secondary, #000000);
        --success: var(--fm--success, #18d47c);
        --success-light: var(--fm--success, #18d47c80);
        --warning: var(--fm--warning, #f9aa33);
        --warning-light: var(--fm--warning-light, #f9aa3380);
        --danger: var(--fm--danger, #ff5b5b);
        --danger-light: var(--fm--danger-light, #ff5b5b80);
        --info: var(--fm--info, #0080ff);
        --info-light: var(--fm--info-light, #0080ff80);
        --checked: var(--primary);
        --checked-contrast: var(--primary-contrast);
        --disabled: var(--fm--disabled, #d5d8d9);
        --divide: var(--fm--divide, rgba(0, 0, 0, 0.08));
        --borderline: var(--fm--borderline, rgba(255, 255, 255, 0.5));
        --layer-1: var(--fm--layer-1, rgba(255, 255, 255, 0.25));
        --layer-2: var(--fm--layer-2, rgba(255, 255, 255, 0.5));
    }
`;

export const tokensCard = [
    tokensSpace,
    tokensColor,
    tokensSize,
    tokensBorder,
    css`
        :host {
            --background: var(--fm-card--background, var(--layer-1));
            --shadow-size: var(--fm-card--shadow-size, 0px 22px 44px -22px);
            --shadow-color: var(--fm-card--shadow-color, rgba(0, 0, 0, 0.25));
            --font-size: var(--fm-card--font-size, 1rem);
            --gap: var(--space-between);
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
            --background: var(--fm-input--background, var(--layer-2));
            --shadow-size: var(--fm-input--shadow-size, 0px 12px 12px -12px);
            --shadow-color: var(--fm-input--shadow-color, rgba(0, 0, 0, 0.33));
            --font-size: var(--fm-input--font-size, 1rem);
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
