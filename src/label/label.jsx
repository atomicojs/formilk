import { c, css, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useCurrentValue } from "@atomico/hooks/use-current-value";
import { tokensSize, tokensSpace } from "../tokens";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";

/**
 *
 * @param {import("atomico").Props< label.props>} props
 */
function label({ disableReflect }) {
    const refPrefix = useRef();
    const refAction = useRef();
    const refContent = useRef();
    const refContentAction = useRef();
    const slotPrefix = useSlot(refPrefix);
    const slotAction = useSlot(refAction);

    const refFirstAction = useCurrentValue(slotAction[0]);

    useReflectEvent(refContent, !disableReflect && refFirstAction, "click");

    return (
        <host shadowDom>
            <div class={`label-prefix ${slotPrefix.length ? "" : "hidden"}`}>
                <slot ref={refPrefix} name="prefix"></slot>
            </div>
            <div ref={refContent} class="label-content">
                <slot></slot>
            </div>
            <div
                ref={refContentAction}
                class={`label-action ${slotAction.length ? "" : "hidden"}`}
            >
                <slot ref={refAction} name="action"></slot>
            </div>
            <style>{
                /*css */ `:host{--columns: ${
                    slotPrefix.length ? "auto" : ""
                } 1fr ${slotAction.length ? "auto" : ""} }`
            }</style>
        </host>
    );
}

label.props = {
    disableReflect: {
        type: Boolean,
    },
    reverse: {
        type: Boolean,
        reflect: true,
    },
};

label.styles = [
    tokensSpace,
    tokensSize,
    css`
        :host {
            width: 100%;
            display: grid;
            grid-template-columns: var(--columns);
            grid-gap: var(--space-between);
        }

        :host([reverse]) .label-action {
            order: -1;
        }

        :host([reverse]) .label-prefix {
            order: 1;
        }

        .label-prefix {
            display: flex;
            align-items: center;
            min-height: var(--min-size);
            margin: 0px 0px auto;
        }
        .label-content {
            display: flex;
            align-items: center;
        }
        .label-action {
            display: flex;
            align-items: flex-start;
        }
        .hidden {
            display: none;
        }
    `,
];

export const Label = c(label);
