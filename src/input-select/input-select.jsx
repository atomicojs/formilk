import { c, useRef, css } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { tokensInput, tokenColors } from "../tokens.js";
import { useDisabled } from "../hooks/use-disabled.js";

function select() {
    const refSlot = useRef();
    const childNodes = useSlot(refSlot);
    useDisabled();
    /**
     * @type {(HTMLOptionElement|HTMLOptGroupElement)[]}
     */
    const options = childNodes.filter(
        (child) =>
            child instanceof HTMLOptionElement ||
            child instanceof HTMLOptGroupElement
    );

    useRender(
        () => (
            <select slot="input" name="" id="">
                {options.map((child) => {
                    const Child = child.cloneNode(true);
                    return <Child />;
                })}
            </select>
        ),
        options
    );

    return (
        <host shadowDom>
            <slot class="options" ref={refSlot}></slot>
            <div className="input-box input-box--use-border">
                <div class="icon">
                    <slot name="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10.486"
                            height="6.242"
                            viewBox="0 0 10.486 6.242"
                        >
                            <path
                                id="Trazado_6"
                                data-name="Trazado 6"
                                d="M-7.051,242.364l-4.243-4.243a1,1,0,0,1,0-1.414,1,1,0,0,1,1.415,0l3.535,3.535,3.535-3.535a1,1,0,0,1,1.415,0,1,1,0,0,1,0,1.414l-4.243,4.243a1,1,0,0,1-.707.293A1,1,0,0,1-7.051,242.364Z"
                                transform="translate(11.586 -236.414)"
                                fill="#2c3a41"
                            />
                        </svg>
                    </slot>
                </div>
                <slot name="input"></slot>
            </div>
        </host>
    );
}

select.props = {
    name: String,
    disabled: Boolean,
};

select.styles = [
    tokensInput,
    tokenColors,
    css`
        .input-box {
            padding: 0;
            position: relative;
        }

        ::slotted(select) {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            font-family: unset;
            font-size: unset;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            padding: var(--padding-y) calc(var(--padding-x) * 2)
                var(--padding-y) var(--padding-x);
            appearance: none;
            min-height: var(--min-height);
        }

        .options {
            display: none;
        }

        .icon {
            display: flex;
            position: absolute;
            top: 50%;
            right: var(--padding-x);
            transform: translateY(-50%);
        }
    `,
];

export const InputSelect = c(select);
