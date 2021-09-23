import { c, css, useRef } from "atomico";
import { tokensNavigation } from "../tokens";
import { useSlot } from "@atomico/hooks/use-slot";

function navigationDropdown() {
    const refSlot = useRef();
    const slot = useSlot(refSlot);
    return (
        <host shadowDom>
            <div class="navigation-box">
                <div class="navigation-row">
                    <slot ref={refSlot}></slot>
                </div>
                {slot
                    .filter((el) => el instanceof Element)
                    .some((el) => el.hasAttribute("for")) && (
                    <div class="navigation-line"></div>
                )}
            </div>
        </host>
    );
}

navigationDropdown.styles = [
    tokensNavigation,
    css`
        .navigation-box {
            position: relative;
            background: var(--background);
        }
        .navigation-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 var(--space-x);
            padding: 0 var(--space-x);
            position: relative;
            z-index: 2;
        }
    `,
];

export const NavigationDropdown = c(navigationDropdown);
