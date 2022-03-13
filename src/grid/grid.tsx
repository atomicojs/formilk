import { Props, c, css, useRef } from "atomico";
import { cssBase, tokensColor, tokensBorder } from "../tokens";
import { useSlot } from "@atomico/hooks/use-slot";
import { getUtils } from "./utils";
import customElements from "../system";

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
    cssBase,
    tokensColor,
    tokensBorder,
    css`
        :host {
            display: grid;
            grid-gap: var(--space-between);
        }
        :host(:not([model*="gap"])) {
            --grid-gap: var(--space-between);
        }

        ::slotted(*) {
            margin: 0px;
        }
    `,
];

export const Grid = c(grid);

customElements.define("grid", Grid);
