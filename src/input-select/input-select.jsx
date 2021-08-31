import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useEventLabel } from "../hooks/use-event-label.js";
import tokenBox from "../tokens.css";
import style from "./input-select.css";

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
                <slot name="input"></slot>
            </div>
        </host>
    );
}

select.styles = [tokenBox, style];

export const InputSelect = c(select);
