import { c, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useResponsiveState } from "@atomico/hooks/use-responsive-state";
import { tokensCard } from "../tokens";

function card({ width, height }) {
    const refHeader = useRef();
    const refFooter = useRef();
    const refActions = useRef();
    const refContent = useRef();
    const refMedia = useRef();
    const slotHeader = useSlot(refHeader);
    const slotMedia = useSlot(refMedia);
    const slotFooter = useSlot(refFooter);
    const slotAction = useSlot(refActions);
    const slotContent = useSlot(refContent);

    const w = useResponsiveState(width);
    const h = useResponsiveState(height);

    return (
        <host shadowDom>
            <div class="card-actions">
                <slot name="action" ref={refActions}></slot>
            </div>
            <header class={`card-header ${slotHeader.length ? "" : "hidden"}`}>
                <slot ref={refHeader} name="header"></slot>
            </header>
            <div class="card-media">
                <slot name="media" ref={slotMedia}></slot>
            </div>
            <slot
                ref={refContent}
                class={`card-content ${slotContent.length ? "" : "hidden"} ${
                    slotFooter.length ? "" : "card--space-down"
                }`}
            ></slot>
            <footer class={`card-footer ${slotFooter.length ? "" : "hidden"}`}>
                <slot ref={refFooter} name="footer"></slot>
            </footer>
            <style>{
                /*css*/ `
                        :host{
                            width: ${w};
                            height: ${h};
                        }
                        ::slotted([slot="media"]){
                            border-radius: ${
                                slotHeader.length && slotContent.length
                                    ? `0`
                                    : slotHeader.length
                                    ? `0px 0px var(--radius) var(--radius)`
                                    : slotContent.length
                                    ? `var(--radius) var(--radius) 0px 0px`
                                    : `var(--radius)`
                            }
                        }
                    `
            }</style>
        </host>
    );
}

card.props = {
    width: { type: String, value: "100%" },
    height: { type: String, value: "auto" },
};

card.styles = [
    tokensCard,
    css`
        :host {
            display: flex;
            position: relative;
            display: grid;
            grid-gap: var(--gap);
            background: var(--background);
            color: var(--color);
            border-radius: var(--radius);
            backdrop-filter: var(--backdrop);
            box-sizing: border-box;
            border: var(--border-width) solid var(--borderline);
            box-shadow: var(--shadow-size) var(--shadow-color);
        }

        ::slotted([slot="media"]) {
            display: block;
            object-fit: cover;
        }
        .card-actions {
            position: absolute;
            top: var(--space-x);
            right: var(--space-x);
        }
        .card-content {
            display: grid;
            padding: 0px var(--space-x);
            grid-gap: var(--gap);
        }
        .card-header {
            padding: var(--space-y) var(--space-x) 0px;
        }
        .hidden {
            display: none;
        }
        .card-footer {
            padding: 0px var(--space-x);
        }
        .card--space-down {
            padding-bottom: var(--space-y);
        }
    `,
];

export const Card = c(card);
