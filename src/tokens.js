import { css } from "atomico";

export const tokensCard = css`
    :host {
        --border-width: var(--fm-card--border-width, 1px);
        --border-color: var(--fm-card--border-color, rgba(255, 255, 255, 0.5));
        --min-height: var(--fm-card--min-height, 2.5rem);
        --radius: var(--fm-card--radius, 1rem);
        --padding-y: var(--fm-card--padding-y, 1rem);
        --padding-x: var(--fm-card--padding--x, 1rem);
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
        --gap: var(--fm-card--gap, 1rem);
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
`;

export const tokensInput = css`
    :host {
        --border-width: var(--fm-input--border-width, 1px);
        --border-color: var(--fm-input--border-color, rgba(255, 255, 255, 0.5));
        --min-height: var(--fm-input--min-height, 2.5rem);
        --radius: var(--fm-input--radius, 0.5rem);
        --padding-y: var(--fm-input--padding-y, 0.5rem);
        --padding-x: var(--fm-input--padding--x, 1rem);
        --background: var(--fm-input--background, rgba(255, 255, 255, 0.5));
        --shadow-size: var(--fm-input--shadow-size, 0px 6px 22px);
        --shadow-color: var(--fm-input--shadow-color, rgba(0, 0, 0, 0.05));
        --font-size: var(--fm-input--font-size, 1rem);
        display: inline-flex;
        font-size: var(--font-size);
        min-height: var(--min-height);
        align-items: center;
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
`;

export const tokenColors = css`
    :host {
        --primary: var(--fm--primary, #2c3a41);
        --primary-contrast: var(--fm--primary, #fff);
        --secondary: var(--fm--secondary, black);
        --success: var(--fm--warning, rgb(24, 212, 124));
        --warning: var(--fm--warning, #f9aa33);
        --danger: var(--fm--warning, rgb(255, 91, 91));
        --info: var(--fm--warning, #0080ff);
        --checked: var(--primary);
        --checked-contrast: var(--primary-contrast);
        --disabled: var(--fm--disabled, #d5d8d9);
    }
`;
