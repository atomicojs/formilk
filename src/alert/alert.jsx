import { c, css } from "atomico";
import { Icon } from "../icon/icon";
import { Label } from "../label/label";
import { tokensBorder, tokensColor, tokensSpace } from "../tokens";

/**
 *
 * @param {import("atomico").Props<alert.props>} props
 */
function alert({ theme }) {
    return (
        <host shadowDom>
            <Label disableReflect>
                <slot
                    name="prefix"
                    slot="prefix"
                    style="color:var(--color-fill)"
                >
                    <Icon size="1.5rem" type="alert"></Icon>
                </slot>
                <slot></slot>
                <slot name="action" slot="action"></slot>
            </Label>
            <style>{
                /*css*/ `:host([theme]){
                    --color-fill: var(--color-${theme}-fill);
                    --color-divide: var(--color-${theme}-divide);
                }`
            }</style>
        </host>
    );
}

alert.props = {
    theme: {
        type: String,
        reflect: true,
    },
    applySpace: {
        type: Boolean,
        reflect: true,
        value: true,
    },
};

alert.styles = [
    tokensColor,
    tokensSpace,
    tokensBorder,
    css`
        :host {
            display: grid;
            position: relative;
            padding: var(--space-y) var(--space-x);
            border-radius: var(--border-radius);
            border: var(--border-width) solid
                var(--color-divide, var(--color-box-divide));
            box-shadow: var(--shadow-size) var(--shadow-color);
            box-sizing: border-box;
            background: var(--color-layer, var(--color-box-fill));
        }
    `,
];

export const Alert = c(alert);
