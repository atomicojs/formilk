import { Props, c, useRef, DOMEvent } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import customElements from "../custom-elements";
import { Accordion } from "./accordion";

function accordionGroup({ disableAutoToggle }: Props<typeof accordionGroup>) {
    const refSlot = useRef();
    const slot = useSlot(refSlot).filter(
        (el) => el instanceof HTMLElement
    ) as InstanceType<typeof Accordion>[];

    slot.forEach((el, index) => (el.split = index != slot.length - 1));

    return (
        <host
            shadowDom
            onShow={({ target }: DOMEvent<"Show", typeof Accordion>) =>
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

customElements.define("accordion-group", AccordionGroup);
