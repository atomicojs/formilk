import { css } from "atomico";

export default css`
    @import "./tokens.json" (prefix: "fm");
    :host {
        font-size: var(--font-size);
        font-family: var(--font-family);
    }
    :host([disabled]) {
        opacity: var(--opacity-disabled);
        pointer-events: none;
    }
`;
