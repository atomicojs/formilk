import { useSlot } from "@atomico/hooks/use-slot";
import { c, css, useRef } from "atomico";
import { Icon } from "../icon/icon";
import { tokensCard } from "../tokens";

/**
 *
 * @param {import("atomico").Props<alert.props>} props
 */
function alert({ theme }) {
    const refAction = useRef();
    const slotAction = useSlot(refAction);
    return (
        <host shadowDom withAction={!!slotAction.length}>
            <div
                class="alert"
                style={
                    theme && {
                        "--borderline": `var(--${theme}-light, var(--theme))`,
                    }
                }
            >
                <div class="alert-icon">
                    <slot name="icon">
                        <Icon
                            type="alert"
                            size="1.5rem"
                            style="color:var(--theme)"
                        ></Icon>
                    </slot>
                </div>
                <slot></slot>
                <div class="alert-actions">
                    <slot name="action" ref={refAction}></slot>
                </div>
            </div>
            <style>{
                /*css*/ `:host{--theme: var(--${theme}, currentColor)}`
            }</style>
        </host>
    );
}

alert.props = {
    theme: {
        type: String,
        reflect: true,
        value: "primary",
    },
    withAction: {
        type: Boolean,
        reflect: true,
    },
};

alert.styles = [
    tokensCard,
    css`
        .alert {
            background: var(--background);
            color: var(--color);
            border-radius: var(--radius);
            backdrop-filter: var(--backdrop);
            padding: var(--space-y) var(--space-x);
            box-sizing: border-box;
            border: var(--border-width) solid var(--borderline);
            box-shadow: var(--shadow-size) var(--shadow-color);
            min-width: 100%;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1em;
            align-items: center;
        }

        .alert-icon {
            display: flex;
            align-items: center;
        }
        .alert-actions {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        ::slotted(*) {
            margin: 0px;
        }
        :host([with-action]) .alert {
            grid-template-columns: auto 1fr auto;
        }
    `,
];

export const Alert = c(alert);
