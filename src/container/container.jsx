import { c, css } from "atomico";
import { tokensContainer } from "../tokens";

/**
 *  @param {import("atomico").Props<container.props>} props
 */
function container({ theme }) {
    return (
        <host shadowDom>
            <slot />
            <style>{
                /*css*/ `:host([theme]){
                --theme-borderline: var(--${theme}-light);
                --theme-status: var(--${theme}, var(--theme-primary));
            }`
            }</style>
        </host>
    );
}

container.props = {
    theme: {
        type: String,
        reflect: true,
    },
};

container.styles = [
    tokensContainer,
    css`
        :host {
            display: grid;
            position: relative;
            grid-gap: var(--gap);
            background: var(--background);
            color: var(--color);
            border-radius: var(--border-radius);
            backdrop-filter: var(--backdrop);
            box-sizing: border-box;
            border: var(--border-width) solid var(--theme-borderline);
            box-shadow: var(--shadow-size) var(--shadow-color);
        }
        ::slotted([apply-space]) {
            padding: var(--space-y) var(--space-x);
        }
    `,
];

export const Container = c(container);
