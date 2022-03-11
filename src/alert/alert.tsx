import { Props, c, css, Component } from "atomico";
import customElements from "../custom-elements";
import { Icon } from "../icon/icon";
import { Label } from "../label/label";
import { cssBase, tokensColor, tokensBorder } from "../tokens";

const a: Component<{ name: string; reference: HTMLElement }> = (props) => {
    return <host shadowDom></host>;
};

a.props = {
    name: String,
    reference: HTMLElement,
};

a.styles = css`
    :host {
        width: 200px;
    }
`;

const A = c(a);

function alert({ status }: Props<typeof alert>) {
    return (
        <host shadowDom>
            <Label disableReflect class="label">
                <slot name="prefix" slot="prefix">
                    <Icon type="alert"></Icon>
                </slot>
                <slot></slot>
                <slot name="action" slot="action"></slot>
            </Label>
            <style>{
                /*css*/ `:host([status]){
                    --color-fill: var(--color-status-${status});
                    --color-contrast: var(--color-status-contrast);
                }`
            }</style>
        </host>
    );
}

alert.props = {
    status: {
        type: String,
        reflect: true,
        value: "info",
    },
    shadow: {
        type: Boolean,
        reflect: true,
    },
    outline: {
        type: Boolean,
        reflect: true,
    },
};

alert.styles = [
    cssBase,
    tokensColor,
    tokensBorder,
    css`
        :host {
            --shadow: var(--shadow-layer);
            --color-divide: var(
                --color-current-divide,
                var(--color-box-divide)
            );
            display: grid;
            position: relative;
            padding: var(--space-y) var(--space-x);
            border-radius: var(--border-radius);
            border: var(--border-width) solid var(--color-divide);
            box-sizing: border-box;
            background: var(--color-fill);
            color: var(--color-contrast);
        }

        :host([shadow]) {
            box-shadow: var(--shadow);
        }

        :host([outline]) {
            background: var(--color-current-layer, var(--color-box-layer));
            color: var(--color-current-contrast, var(--color-box-contrast));
            border-color: var(--color-fill);
        }

        :host([outline]) [name="prefix"] {
            color: var(--color-fill);
        }
        .label {
            --space-y: 0;
        }
    `,
];

export const Alert = c(alert);

customElements.define("alert", Alert);
