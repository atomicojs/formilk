import { css } from "atomico";
import customElements from "../system";
import { Grid } from "../grid/grid";
import { cssShadow } from "../tokens";

export class Box extends Grid {
    /**
     * @todo check in Atomico the type Sheets to allow these declarations in Typescript
     */
    static get styles() {
        return [
            super.styles,
            cssShadow,
            css`
                :host {
                    --color-fill: var(--color-box-fill);
                    --color-contrast: var(--color-box-contrast);
                    --color-divide: var(--color-box-divide);
                    --color-layer: var(--color-box-layer);
                    --color-current-fill: var(--color-fill);
                    --color-current-layer: var(--color-layer);
                    --color-current-contrast: var(--color-contrast);
                    --color-current-divide: var(--color-divide);
                    --shadow: var(--shadow-box);
                    background: var(--color-fill);
                    color: var(--color-contrast);
                    border: var(--border-width) solid var(--color-divide);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow);
                    display: grid;
                    grid-gap: var(--space-between);
                }
            `,
        ];
    }
}

customElements.define("box", Box);
