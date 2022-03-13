import { c, css, useRef, useProp, Meta, DOMEvent } from "atomico";
import { useResizeObserverState } from "@atomico/hooks/use-resize-observer";
import { cssBaseColors, cssBase, tokensTransition } from "../tokens";
import { Divide } from "../divide/divide";
import customElements from "../system";

function accordion(): Meta<DOMEvent<"Show">> {
    const refSlot = useRef();
    const rect = useResizeObserverState(refSlot);
    const [show, setShow] = useProp<boolean>("show");

    return (
        <host shadowDom>
            <div class="accordion-header">
                <button
                    class="accordion-toggle"
                    onclick={() => setShow((show) => !show)}
                >
                    <div>
                        <slot name="header"></slot>
                    </div>
                </button>
                <Divide class="accordion-split"></Divide>
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
    cssBase,
    cssBaseColors,
    tokensTransition,
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
            color: currentColor;
            grid-gap: var(--space-between);
        }

        .accordion-split {
            transform-origin: left center;
            transition: var(--transition-x2);
        }

        .accordion-mask {
            width: 100%;
            overflow: hidden;
            transition: var(--transition-x1);
        }

        ::slotted(*) {
            margin: 0px;
        }

        ::slotted([slot="header"]) {
            width: 100%;
        }

        :host([icon-position="end"]) .accordion-prefix {
            order: 1;
            margin-left: auto;
        }

        :host([show]) .accordion-split,
        :host(:not([split])) .accordion-split {
            transform: scaleX(0);
            opacity: 0;
        }

        .hidden {
            display: none;
        }
    `,
];

export const Accordion = c(accordion);

customElements.define("accordion", Accordion);
