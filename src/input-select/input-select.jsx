import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useEventLabel } from "../hooks/use-event-label.js";
import style from "./input-select.css";
import tokensBox from "../tokens/box.css";
import tokensInput from "../tokens/input.css";

function select() {
    const refInput = useRef();
    const refSlot = useRef();
    const childNodes = useSlot(refSlot);

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
            <div className="token-box toke-use-border">
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

select.styles = [tokensBox, tokensInput, style];

export const InputSelect = c(select);
