import { c, css, useRef, useProp } from "atomico";
import { useResizeObserverState } from "@atomico/hooks/use-resize-observer";
import { tokensColor, tokensSpace } from "../tokens";
export { AccordionGroup } from "./accordion-group";

/**
 *
 * @param {import("atomico").Props<accordion.props>} props
 * @returns
 */
function accordion() {
    const refSlot = useRef();
    const rect = useResizeObserverState(refSlot);
    const [show, setShow] = useProp("show");
    return (
        <host shadowDom>
            <div class="accordion-header" renderOnce>
                <button
                    class="accordion-toggle"
                    onclick={() => setShow((show) => !show)}
                >
                    <div class="accordion-icon">
                        <slot name={show ? "icon-show" : "icon-hide"}></slot>
                    </div>
                    <div>
                        <slot name="header"></slot>
                    </div>
                </button>
                <div class="accordion-split"></div>
            </div>
            <div
                class="accordion-mask"
                style={`height:${show ? rect?.height || "auto" : 0}px`}
            >
                <div class="accordion-content" ref={refSlot}>
                    <slot></slot>
                </div>
            </div>
        </host>
    );
}

accordion.props = {
    show: {
        type: Boolean,
        reflect: true,
        event: {
            type: "Show",
            bubbles: true,
        },
    },
    iconPosition: {
        type: String,
        reflect: true,
    },
    split: {
        type: Boolean,
        reflect: true,
    },
};

accordion.styles = [
    tokensSpace,
    tokensColor,
    css`
        :host {
            width: 100%;
            display: block;
        }
        .accordion-toggle {
            width: 100%;
            background: transparent;
            border: none;
            text-align: left;
            padding: 0px;
            cursor: pointer;
            display: flex;
            align-items: center;
            padding: var(--space-y) 0;
            position: relative;
        }
        .accordion-split {
            width: 100%;
            height: 2px;
            transform-origin: center left;
            background: var(--theme-divide);
            transition: 0.6s ease all;
        }
        .accordion-mask {
            width: 100%;
            overflow: hidden;
            transition: 0.3s ease all;
        }

        ::slotted(*) {
            margin: 0px;
        }
        ::slotted([slot="header"]) {
            width: 100%;
        }
        :host([icon-position="end"]) .accordion-icon {
            order: 1;
            margin-left: auto;
        }
        :host([show]) .accordion-split,
        :host(:not([split])) .accordion-split {
            transform: scaleX(0);
            opacity: 0;
        }
    `,
];

export const Accordion = c(accordion);
