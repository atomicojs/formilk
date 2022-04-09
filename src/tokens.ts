import { css } from "atomico";
import { composed, tokens } from "@atomico/design-tokens";
import * as options from "./options";

export default composed(tokens(options.tokens, options.prefix))(css`
    :host {
        font-size: var(--font-size);
        font-family: var(--font-family);
    }
    :host([disabled]) {
        opacity: var(--opacity-disabled);
        pointer-events: none;
    }
`);
