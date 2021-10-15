import { c, css } from "atomico";
import { Icon } from "../icon/icon";
import { tokensContainer } from "../tokens";
import { Label } from "../label/label";

/**
 *
 * @param {import("atomico").Props<alert.props>} props
 */
function alert({ theme }) {
    return (
        <host shadowDom>
            <Label>
                <slot
                    name="prefix"
                    slot="prefix"
                    style="color: var(--theme-status, currentColor)"
                >
                    <Icon size="1.5rem" type="alert"></Icon>
                </slot>
                <slot></slot>
                <slot name="action" slot="action"></slot>
            </Label>
            <style>{
                /*css*/ `:host([theme]){
                --theme-status: var(--theme-${theme}, var(--theme-primary));
                --theme-borderline: var(--theme-${theme}-light);
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
    tokensContainer,
    css`
        :host {
            display: grid;
            position: relative;
            background: var(--background);
            color: var(--color);
            padding: var(--space-y) var(--space-x);
            border-radius: var(--border-radius);
            backdrop-filter: var(--backdrop);
            border: var(--border-width) solid var(--theme-borderline);
            box-shadow: var(--shadow-size) var(--shadow-color);
            box-sizing: border-box;
        }
    `,
];

export const Alert = c(alert);
