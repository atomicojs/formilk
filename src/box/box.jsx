import { c, css, useRef } from "atomico";
import { tokensBorder, tokensColor, tokensSpace } from "../tokens";
import { useSlot } from "@atomico/hooks/use-slot";
import { getUtils } from "./utils";

/**
 *  @param {import("atomico").Props<grid.props>} props
 */
function box({ model }) {
    const refSlot = useRef();
    const slot = useSlot(refSlot).filter((el) => el instanceof Element);
    return (
        <host shadowDom>
            <slot ref={refSlot} />
            <style>
                {model && getUtils(model)}
                {/*css */ `:host{--items: ${slot.length}}`}
            </style>
        </host>
    );
}

box.props = {
    model: {
        type: String,
        reflect: true,
    },
};

box.styles = [
    tokensColor,
    tokensSpace,
    tokensBorder,
    css`
        :host {
            display: grid;
            grid-gap: var(--space-between);
        }
        :host([model*="theme"]) {
            background: var(--color-fill);
            color: var(--color-contrast);
            border: var(--border-width) solid var(--color-divide);
        }
    `,
];

export const Box = c(box);
