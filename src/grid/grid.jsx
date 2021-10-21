import { c, css, useRef } from "atomico";
import { tokensBorder, tokensColor, tokensSpace } from "../tokens";
import { useSlot } from "@atomico/hooks/use-slot";
import { getUtils } from "./utils";

/**
 *  @param {import("atomico").Props<grid.props>} props
 */
function grid({ model, forNested }) {
    const refSlot = useRef();
    const slot = useSlot(refSlot).filter((el) => el instanceof Element);
    const selector = forNested ? "::slotted(*)" : ":host";
    return (
        <host shadowDom>
            <slot ref={refSlot} />
            <style>
                {
                    /*css */ `${selector}{
                    display: grid;
                    grid-gap: var(--space-between);
                    --items: ${slot.length}
                }`
                }
                {model && getUtils(model, selector)}
            </style>
        </host>
    );
}

grid.props = {
    model: {
        type: String,
        reflect: true,
    },
    forNested: {
        type: Boolean,
        reflect: true,
    },
};

grid.styles = [tokensColor, tokensSpace, tokensBorder];

export const Grid = c(grid);
