import { c, css } from "atomico";
import customElements from "../custom-elements";
import { tokensBorder, tokensFont } from "../tokens";
/**
 *
 * @param {import("atomico").Props<text.props>}
 */
function text({ size, color, contrast }) {
    return (
        <host shadowDom>
            <slot></slot>
            <style>
                {size && `:host{---font-scale: ${size};}`}
                {color &&
                    `:host{--color: var(--color-${color}${
                        contrast ? "-contrast" : ""
                    });}`}
            </style>
        </host>
    );
}

const boolean = { type: Boolean, reflect: true };
const string = { type: String, reflect: true };

text.props = {
    size: string,
    heading: boolean,
    bold: boolean,
    regular: boolean,
    light: boolean,
    medium: boolean,
    color: string,
    outline: boolean,
};

text.styles = [
    tokensFont,
    tokensBorder,
    css`
        :host {
            line-height: var(---line-height, var(--font-line-height-text));
            font-size: calc(
                var(---font-size, var(--font-size)) * var(---font-scale, 1)
            );
            font-weight: var(---weight, var(--font-weight-regular));
            color: var(--color, unset);
        }
        :host([heading]) {
            ---font-size: var(--font-size-heading);
            ---line-height: var(--font-line-height-heading);
        }
        :host([light]) {
            ---weight: var(--font-weight-light);
        }
        :host([medium]) {
            ---weight: var(--font-weight-medium);
        }
        :host([bold]) {
            ---weight: var(--font-weight-bold);
        }
        :host([color][outline]) {
            color: transparent;
            -webkit-text-stroke-width: var(--border-width);
            -webkit-text-stroke-color: var(--color);
        }
    `,
];

export const Text = c(text);

customElements.define("text", Text);
