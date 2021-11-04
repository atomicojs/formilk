import { c, css, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import customElements from "../custom-elements";

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
    css`
        .navigation-box {
            position: relative;
        }
        .navigation-row {
            width: 100%;
            display: grid;
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

customElements.define("navigation-dropdown", NavigationDropdown);
