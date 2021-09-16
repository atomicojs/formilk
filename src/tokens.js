import { css } from "atomico";

export const tokensSpace = css`
    :host {
        --space-y: var(--fm--space-y, 0.625rem);
        --space-x: var(--fm--space-x, 1.25rem);
        --space-between: var(--fm--space-inset, 1rem);
        --space-y÷2: calc(var(--space-y) / 2);
        --space-x÷2: calc(var(--space-x) / 2);
    }
`;

export const tokensColor = css`
    :host {
        --primary: var(--fm--primary, #2c3a41);
        --primary-contrast: var(--fm--primary, #fff);
        --secondary: var(--fm--secondary, black);
        --split: var(--fm--split, #e0f1ee);
        --split-contrast: var(--fm--split-contrast, var(--primary));
        --success: var(--fm--warning, rgb(24, 212, 124));
        --warning: var(--fm--warning, #f9aa33);
        --danger: var(--fm--warning, rgb(255, 91, 91));
        --info: var(--fm--warning, #0080ff);
        --checked: var(--primary);
        --checked-contrast: var(--primary-contrast);
        --disabled: var(--fm--disabled, #d5d8d9);
    }
`;

export const tokensCard = [
    tokensSpace,
    css`
        :host {
            --border-width: var(--fm-card--border-width, 1px);
            --border-color: var(
                --fm-card--border-color,
                rgba(255, 255, 255, 0.5)
            );
            --min-height: var(--fm-card--min-height, 2.5rem);
            --radius: var(--fm-card--radius, 1rem);
            --padding-y: var(--space-y);
            --padding-x: var(--space-x);
            --background: var(
                --fm-card--background,
                linear-gradient(
                    45deg,
                    rgba(255, 255, 255, 0.5),
                    rgba(255, 255, 255, 0.25)
                )
            );
            --shadow-size: var(--fm-card--shadow-size, 0px 6px 22px);
            --shadow-color: var(--fm-card--shadow-color, rgba(0, 0, 0, 0.05));
            --font-size: var(--fm-card--font-size, 1rem);
            --gap: var(--space-between);
        }

        .card-box {
            background: var(--background);
            color: var(--color);
            border-radius: var(--radius);
            backdrop-filter: var(--backdrop);
            padding: var(--padding-y) var(--padding-x);
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
    css`
        :host {
            --border-width: var(--fm-input--border-width, 1px);
            --border-color: var(
                --fm-input--border-color,
                rgba(255, 255, 255, 0.5)
            );
            --min-height: var(--fm-input--min-height, 2.5rem);
            --radius: var(--fm-input--radius, 0.5rem);
            --padding-y: var(--space-y);
            --padding-x: var(--space-x);
            --background: var(--fm-input--background, rgba(255, 255, 255, 0.5));
            --shadow-size: var(--fm-input--shadow-size, 0px 6px 22px);
            --shadow-color: var(--fm-input--shadow-color, rgba(0, 0, 0, 0.05));
            --font-size: var(--fm-input--font-size, 1rem);
            display: inline-flex;
            font-size: var(--font-size);
            min-height: var(--min-height);
        }

        :host([disabled]) {
            opacity: 0.5;
            cursor: unset;
        }

        :host([disabled]) .input-box--pointer {
            cursor: unset;
        }

        .input-box {
            background: var(--background);
            color: var(--color);
            border-radius: var(--radius);
            backdrop-filter: var(--backdrop);
            box-shadow: var(--shadow-size) var(--shadow-color);
            padding: var(--padding-y) var(--padding-x);
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
        .navigation-box {
            display: flex;
            background: var(--background);
            align-items: center;
            justify-content: space-between;
            position: relative;
        }
        .navigation-line {
            width: 100%;
            height: var(--line-height);
            position: absolute;
            left: 0;
        }
    `,
];
