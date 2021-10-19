import { c, css, useRef } from "atomico";
import { tokensContainer } from "../tokens";
import { useResponsiveState } from "@atomico/hooks/use-responsive-state";
import { useSlot } from "@atomico/hooks/use-slot";

const gridPosition = {
    center: "center",
    left: "flex-start",
    right: "flex-end",
    top: "flex-start",
    left: "flex-end",
    around: "space-around",
    between: "space-between",
    stretch: "space-stretch",
};
const repeat = (repeat, size = "1fr") => `repeat(${repeat},${size})`;

/**
 *  @param {import("atomico").Props<container.props>} props
 */
function container({ theme, grid }) {
    const refSlot = useRef();
    const slot = useSlot(refSlot).filter((el) => el instanceof Element);
    const currentGrid = useResponsiveState(grid);

    const [justify, align, ...cols] = currentGrid.split(/\s+/).reverse();

    if (!gridPosition[justify]) cols.unshift(justify);

    if (!gridPosition[align]) cols.unshift(align);

    let [firstCol] = cols.reverse();

    firstCol = firstCol.replace(/slot/g, slot.length);

    console.log(firstCol);

    return (
        <host shadowDom>
            <slot ref={refSlot} />
            <style>{
                /*css*/ `
                :host([theme]){
                    --theme-borderline: var(--${theme}-light);
                    --theme-status: var(--${theme}, var(--theme-primary));
                }
                :host{
                    --items: ${slot.length};
                    --columns: ${
                        /\w+$/.test(firstCol) && !/:/.test(firstCol)
                            ? cols.join(" ")
                            : repeat(...firstCol.split(/\:/))
                    };
                    --align-items: ${gridPosition[align] || "center"};
                    --justify-content: ${gridPosition[justify] || "center"};
                }
                `
            }</style>
        </host>
    );
}

container.props = {
    theme: {
        type: String,
        reflect: true,
    },
    grid: {
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
        :host([grid]) {
            display: grid;
            grid-gap: var(--space-between);
            grid-template-columns: var(--columns);
            align-items: var(--align-items);
            justify-content: var(--justify-content);
        }
    `,
];

export const Container = c(container);
