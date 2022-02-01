import { c, css, Props, Ref, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useCurrentValue } from "@atomico/hooks/use-current-value";
import { tokensSize, tokensSpace } from "../tokens";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import customElements from "../custom-elements";

const RefEmpty: Ref = { current: null };

function label({ disableReflect }: Props<typeof label>) {
    const refPrefix = useRef();
    const refAction = useRef();
    const refContent = useRef();
    const refContentAction = useRef();
    const slotPrefix = useSlot(refPrefix);
    const slotAction = useSlot(refAction);

    const refFirstAction = useCurrentValue(slotAction[0]);

    useReflectEvent(
        refContent,
        disableReflect ? RefEmpty : refFirstAction,
        "click"
    );

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
    vertical: {
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
            --gap: var(--space-between);
            grid-template-columns: var(--columns);
            grid-gap: var(--gap);
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
            min-height: var(--size-min);
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
        ::slotted([slot="action"]) {
            cursor: pointer;
        }
        :host([vertical]) {
            --columns: 1fr;
            --gap: var(--space-y);
        }
    `,
];

export const Label = c(label);

customElements.define("label", Label);
