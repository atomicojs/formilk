import { Props, c, css, useRef } from "atomico";
import tokens from "../tokens";
import { useSlot } from "@atomico/hooks/use-slot";
import { getUtils } from "./utils";
import customElements from "../custom-elements";

function grid({ model }: Props<typeof grid>) {
    const refSlot = useRef();
    const slot = useSlot(refSlot).filter((el) => el instanceof Element);

    return (
        <host shadowDom>
            <slot ref={refSlot} />
            <style>
                {`:host{--items: ${slot.length}}`}
                {model && getUtils(model, ":host")}
            </style>
        </host>
    );
}

grid.props = {
    model: {
        type: String,
        reflect: true,
    },
};

grid.styles = [
    tokens,
    css`
        :host {
            display: var(----display, grid);
            box-sizing: border-box;
        }
    `,
];

export const Grid = c(grid);

customElements.define("grid", Grid);
