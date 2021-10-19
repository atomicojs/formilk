import { c, css, useRef } from "atomico";
import { tokensBorder, tokensColor, tokensSpace } from "../tokens";
import { useResponsiveState } from "@atomico/hooks/use-responsive-state";
import { useSlot } from "@atomico/hooks/use-slot";
import { getUtils } from "./utils";

/**
 *  @param {import("atomico").Props<grid.props>} props
 */
function grid({ grid }) {
    const refSlot = useRef();
    const slot = useSlot(refSlot).filter((el) => el instanceof Element);
    const currentGrid = useResponsiveState(grid);

    return (
        <host shadowDom>
            <slot ref={refSlot} />
            <style>
                {getUtils(grid)}
                {/*css */ `:host{--items: ${slot.length}}`}
            </style>
        </host>
    );
}

grid.props = {
    grid: {
        type: String,
        reflect: true,
    },
};

grid.styles = [
    tokensColor,
    tokensSpace,
    tokensBorder,
    css`
        :host {
            display: grid;
            grid-gap: var(--space-between);
            background: var(--theme-current, transparent);
            color: var(--theme-current-contrast, currentColor);
            border: var(--border-width) solid
                var(--theme-current-light, transparent);
        }
    `,
];

export const Grid = c(grid);
