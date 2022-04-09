import { c, css, Props, Ref, useRef } from "atomico";
import { serialize } from "atomico/utils";
import { useSlot } from "@atomico/hooks/use-slot";
import { useCurrentValue } from "@atomico/hooks/use-current-value";
import tokens from "../tokens";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import customElements from "../custom-elements";

const RefEmpty: Ref = { current: null };

function label({ disableReflect }: Props<typeof label>) {
    const refPrefix = useRef();
    const refAction = useRef();
    const refContent = useRef();
    const refMessage = useRef();
    const refContentAction = useRef();
    const slotPrefix = useSlot(refPrefix);
    const slotAction = useSlot(refAction);
    const slotMessage = useSlot(refMessage);

    const refFirstAction = useCurrentValue(slotAction[0]);

    useReflectEvent(
        refContent,
        disableReflect ? RefEmpty : refFirstAction,
        "click"
    );

    return (
        <host shadowDom>
            <div className="label-header">
                <div class="label-row">
                    <div
                        class={`label-center label-prefix ${
                            slotPrefix.length ? "" : "hidden"
                        }`}
                    >
                        <slot ref={refPrefix} name="prefix"></slot>
                    </div>
                    <div ref={refContent} class="label-center label-content">
                        <slot></slot>
                    </div>
                </div>
                <div
                    ref={refContentAction}
                    class={serialize(
                        "label-center label-action",
                        !slotAction.length && "hidden"
                    )}
                >
                    <slot ref={refAction} name="action"></slot>
                </div>
                <style>{
                    /*css */ `:host{--columns-row: ${serialize(
                        slotPrefix.length && "auto",
                        "1fr"
                    )}`
                }</style>
            </div>
            <div
                class={serialize(
                    "label-footer",
                    !slotMessage.length && "hidden"
                )}
            >
                <slot name="message" ref={refMessage}></slot>
            </div>
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
    tokens,
    css`
        :host {
            width: 100%;
            display: grid;
            --columns: 1fr auto;
            --gap: var(--size-xs);
            min-height: var(--size-xl);
            box-sizing: border-box;
        }

        :host,
        .label-header,
        .label-row {
            display: grid;
            grid-gap: var(--gap);
        }

        .label-header {
            grid-template-columns: var(--columns);
            min-height: var(--size-min);
        }

        .label-row {
            grid-template-columns: var(--columns-row);
        }

        .label-center {
            display: flex;
            align-items: center;
            min-height: var(--size-min);
        }

        .label-prefix,
        .label-action {
            max-height: var(--size-min);
        }

        :host([reverse]) .label-action {
            order: -1;
        }

        :host([reverse]) .label-prefix {
            order: 1;
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
