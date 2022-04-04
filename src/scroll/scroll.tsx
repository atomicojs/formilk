import { Props, c, css } from "atomico";
import { ScrollableComponentElement } from "scrollable-component";
import { cssBase, cssBaseColors } from "../tokens";
import customElements from "../system";

function scroll({ width, height }: Props<typeof scroll>) {
    return (
        <host shadowDom>
            <style>{`:host{
            ${width ? `--width: ${width}` : ""}
            ${height ? `--height: ${height}` : ""}
        }`}</style>
        </host>
    );
}

scroll.props = {
    width: {
        type: String,
    },
    height: {
        type: String,
    },
};

scroll.styles = [
    cssBase,
    cssBaseColors,
    css`
        :host {
            width: var(--width, 100%);
            height: var(--height, 100%);
            --scrollbar-width: calc(var(--size) * 2);
        }
    `,
];

export const Scroll = c(scroll, ScrollableComponentElement);

customElements.define("scroll", Scroll);
