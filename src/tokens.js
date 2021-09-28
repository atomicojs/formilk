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
        --split: var(--fm--split, #e0f1ee);
        --split-contrast: var(--fm--split-contrast, var(--primary));
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
    }
`;

export const tokensCard = [
    tokensSpace,
    tokensColor,
    tokensSize,
    tokensBorder,
    css`
        :host {
            --border-color: var(
                --fm-card--border-color,
                rgba(255, 255, 255, 0.5)
            );
            --background: var(--fm-card--background, rgba(255, 255, 255, 0.25));
            --shadow-size: var(--fm-card--shadow-size, 0px 22px 44px -22px);
            --shadow-color: var(--fm-card--shadow-color, rgba(0, 0, 0, 0.25));
            --font-size: var(--fm-card--font-size, 1rem);
            --gap: var(--space-between);
        }

        .card-box {
            background: var(--background);
            color: var(--color);
            border-radius: var(--radius);
            backdrop-filter: var(--backdrop);
            padding: var(--space-y) var(--space-x);
            box-sizing: border-box;
        }

        .card-box--border {
            border: var(--border-width) solid var(--border-color);
        }

        .card-box--shadow {
            box-shadow: var(--shadow-size) var(--shadow-color);
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
            --border-color: var(
                --fm-input--border-color,
                rgba(255, 255, 255, 0.5)
            );
            --background: var(--fm-input--background, rgba(255, 255, 255, 0.5));
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

        .input-box {
            background: var(--background);
            color: var(--color);
            border-radius: calc(var(--radius) / 2);
            backdrop-filter: var(--backdrop);
            box-shadow: var(--shadow-size) var(--shadow-color);
            padding: var(--space-y) var(--space-x);
            box-sizing: border-box;
        }

        .input-box--border {
            border: var(--border-width) solid var(--border-color);
        }

        .input-box--full-width {
            min-width: 100%;
        }

        .input-box--pointer {
            cursor: pointer;
        }
    `,
];

export const tokensNavigation = [
    tokensSpace,
    tokensColor,
    css`
        :host {
            --line-height: var(--fm-navigation--line-height, 2px);
            --background: var(--fm-navigation--background, white);
        }
        .navigation-line {
            width: 100%;
            height: var(--line-height);
            position: absolute;
            bottom: 0;
            background: var(--split);
            left: 0;
        }
    `,
];
