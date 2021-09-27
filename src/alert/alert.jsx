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
                class="card-box card-box--border"
                style={
                    theme && {
                        "--border-color": `var(--${theme}-light, var(--theme))`,
                    }
                }
            >
                <div class="icon">
                    <slot name="icon">
                        <Icon
                            type="alert"
                            size="1.5rem"
                            style="color:var(--theme)"
                        ></Icon>
                    </slot>
                </div>
                <slot></slot>
                <slot name="action" ref={refAction}></slot>
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
        .card-box {
            min-width: 100%;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1em;
            align-items: center;
        }
        .icon {
            display: flex;
            align-items: center;
        }
        ::slotted(*) {
            margin: 0px;
        }
        :host([with-action]) .card-box {
            grid-template-columns: auto 1fr auto;
        }
    `,
];

export const Alert = c(alert);
