import { c, css } from "atomico";
import customElements from "../custom-elements";
import tokens from "../tokens";

function tab() {
    return (
        <host shadowDom>
            <span class="tab-action">
                <slot></slot>
            </span>
            <div class="tab-mark">
                <div part="mark" class="tab-mark-solid"></div>
            </div>
        </host>
    );
}

tab.props = {
    active: {
        type: Boolean,
        reflect: true,
    },
    position: {
        type: String,
        reflect: true,
        value: "bottom",
    },
};

tab.styles = [
    tokens,
    css`
        :host {
            --mark-opacity: 0;
            --template: "tab" auto "mark" 2px / auto;
            --padding: 0 var(--size-s);
            display: grid;
            align-items: center;
            position: relative;
            grid-template: var(--template);
        }
        :host([position="top"]),
        :host([position="bottom"]) {
        }
        :host([position="top"]) {
            --template: "mark" 2px "tab" auto / auto;
        }
        :host([position="right"]) {
            --template: "tab mark" auto/ auto 2px;
        }
        :host([position="left"]) {
            --template: "mark tab" auto/ 2px auto;
        }

        :host([position="left"]),
        :host([position="right"]) {
            --padding: calc(var(--size) * 2) 0;
        }

        :host([active]) {
            --mark-opacity: 1;
        }
        .tab-action {
            grid-area: tab;
        }
        .tab-mark {
            width: 100%;
            height: 100%;
            grid-area: mark;
            box-sizing: border-box;
            position: relative;
            padding: var(--padding);
            display: flex;
            place-content: center;
        }
        .tab-mark-solid {
            width: var(--tab-width);
            height: var(--tab-height);
            background: var(--color-primary-60);
            transition: 0.3s ease all;
            border-radius: var(--tab-radius);
            opacity: var(--mark-opacity);
        }
    `,
];

export const Tab = c(tab);

customElements.define("tab", Tab);
