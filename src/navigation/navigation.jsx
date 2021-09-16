import { c, css, useEffect, useRef, useProp, useState } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { tokensNavigation } from "../tokens";
import { NavigationItem } from "./navigation-item";
export { NavigationItem } from "./navigation-item";
export { NavigationDropdown } from "./navigation-dropdown";

const resetStatus = (item) => {
    if (item) item.status = null;
};
/**
 *
 * @param {import("atomico").Props<navigation.props>}  props
 */
function navigation({ columns }) {
    const refBrand = useRef();
    const refSlots = useRef();
    const slotBrand = useSlot(refBrand);
    const slots = useSlot(refSlots);
    const [item, setItem] = useState();
    const [dropdown, setDropdown] = useProp("dropdown");

    useEffect(() => {
        const dropdown = slots.filter((node) => node.hasAttribute("for"));
    }, slots);

    return (
        <host
            shadowDom
            onmouseleave={() => {
                setItem(resetStatus);
                setDropdown(null);
            }}
        >
            <div class="navigation-box">
                <slot name="brand" ref={refBrand}></slot>
                <div
                    class="navigation-nav"
                    style={{ "--columns": columns }}
                    onmouseover={(event) => {
                        let nextItem = event.target;

                        while (
                            nextItem &&
                            !(nextItem instanceof NavigationItem) &&
                            (nextItem = nextItem.parentElement)
                        );
                        let showSlot = null;
                        if (nextItem) {
                            nextItem.status = "hover";
                            showSlot = nextItem.getAttribute("for");
                        }

                        if (item === nextItem) return;

                        setItem(resetStatus);
                        setItem(nextItem);
                        setDropdown(showSlot);
                    }}
                >
                    <slot name="item" ref={refSlots}></slot>
                </div>
                {dropdown && <div class="navigation-line"></div>}
            </div>
            <div class="navigation-dropdown" part="dropdown">
                <slot name={dropdown}></slot>
            </div>
        </host>
    );
}

navigation.props = {
    theme: String,
    position: String,
    columns: Number,
    dropdown: {
        type: String,
        reflect: true,
    },
};

navigation.styles = [
    tokensNavigation,
    css`
        :host {
            display: block;
            max-width: 100%;
        }
        .navigation-box {
            padding: 0 var(--space-x);
        }
        .navigation-nav {
            display: flex;
            position: relative;
            z-index: 2;
        }
        .navigation-dropdown {
            position: relative;
        }
        .navigation-line {
            bottom: 0;
            background: var(--split);
        }
    `,
];

export const Navigation = c(navigation);
