import { c, css, useRef } from "atomico";
import { tokensNavigation } from "../tokens";
import { useSlot } from "@atomico/hooks/use-slot";

function navigationDropdown({ content }) {
    const refSlot = useRef();
    const slot = useSlot(refSlot).filter((el) => el instanceof Element);
    return (
        <host shadowDom>
            <div class="navigation-box">
                <div class="navigation-row">
                    <slot ref={refSlot}></slot>
                </div>
            </div>
            <style>{
                /*css*/ `:host{
                --content:${content};
                --columns:${slot.length}
            }`
            }</style>
        </host>
    );
}

navigationDropdown.props = {
    content: {
        type: String,
        reflect: true,
        value: "space-between",
    },
};

navigationDropdown.styles = [
    tokensNavigation,
    css`
        .navigation-box {
            position: relative;
            background: var(--background);
        }
        .navigation-row {
            display: grid;
            width: 100%;
            justify-content: var(--content);
            grid-template-columns: repeat(var(--columns), 1fr);
            grid-gap: var(--space-between);
            padding: 0 var(--space-x);
            padding: 0 var(--space-x);
            position: relative;
            z-index: 2;
            box-sizing: border-box;
            overflow-x: auto;
        }
    `,
];

export const NavigationDropdown = c(navigationDropdown);
