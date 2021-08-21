import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useResponsiveState } from "@atomico/hooks/use-responsive-state";
import style from "./card.css";

function card({ width, height }) {
    const refHeader = useRef();
    const refFooter = useRef();
    const refActions = useRef();
    const refContent = useRef();
    const slotHeader = useSlot(refHeader);
    const slotFooter = useSlot(refFooter);
    const slotAction = useSlot(refActions);
    const slotContent = useSlot(refContent);

    const w = useResponsiveState(width);
    const h = useResponsiveState(height);

    return (
        <host shadowDom>
            <style>{`:host{
                width: ${w};
                height: ${h};
                --action-cols: ${"auto ".repeat(slotAction.length)};
            }`}</style>
            <div class={`actions ${slotAction.length ? "" : "hidden"}`}>
                <slot name="action" ref={refActions}></slot>
            </div>
            <div class="media">
                <slot name="media"></slot>
            </div>
            <header
                class={`header ${
                    !slotContent.length
                        ? "hidden"
                        : slotHeader.length
                        ? ""
                        : "fill"
                } ${
                    !slotContent.length
                        ? "hidden"
                        : slotAction.length
                        ? ""
                        : "space"
                }`}
            >
                <slot ref={refHeader} name="header"></slot>
            </header>
            <slot ref={refContent} class="content"></slot>
            <footer
                class={`footer ${
                    !slotContent.length
                        ? "hidden"
                        : slotFooter.length
                        ? ""
                        : "fill"
                }`}
            >
                <slot ref={refFooter} name="footer"></slot>
            </footer>
        </host>
    );
}

card.props = {
    width: { type: String, value: "100%" },
    height: { type: String, value: "auto" },
};

card.styles = style;

export const Card = c(card);
