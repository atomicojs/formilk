import { c } from "atomico";
import customElements from "../custom-elements";
import tokens from "../tokens";

function theme() {
    return (
        <host shadowDom>
            <slot />
        </host>
    );
}

theme.styles = tokens;

export const Theme = c(theme);

customElements.define("theme", Theme);
