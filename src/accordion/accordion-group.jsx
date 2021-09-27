import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";

/**
 *
 * @param {import("atomico").Props<accordionGroup.props>} props
 */
function accordionGroup({ disableAutoToggle }) {
    const refSlot = useRef();
    const slot = useSlot(refSlot).filter((el) => el instanceof HTMLElement);
    slot.forEach((el, index) => (el.split = index != slot.length - 1));
    return (
        <host
            shadowDom
            onShow={({ target }) =>
                !disableAutoToggle &&
                target?.show &&
                slot
                    .filter((el) => el != target)
                    .forEach((el) => {
                        el.show = false;
                    })
            }
        >
            <slot ref={refSlot}></slot>
        </host>
    );
}

accordionGroup.props = {
    disableAutoToggle: Boolean,
};

export const AccordionGroup = c(accordionGroup);
