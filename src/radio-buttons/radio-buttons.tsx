import {
    Props,
    Host,
    DOMEvent,
    c,
    css,
    useRef,
    useProp,
    useEffect,
} from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { addListener } from "@atomico/hooks/use-listener";
import customElements from "../system";
import { Button } from "../button/button";
import tokens from "../tokens";
import { useFormInputHidden } from "@atomico/hooks/use-form";

function radioButtons({
    name,
    vertical,
}: Props<typeof radioButtons>): Host<{ change: Event }> {
    const [value, setValue] = useProp<"string">("value");
    const refSlot = useRef();
    const slots = useSlot<InstanceType<typeof Button>>(refSlot).filter(
        (el) => el
    );

    useEffect(() => {
        const listeners = slots.map((el) => {
            el.size = "small";
            el.ghost = true;
            return addListener(el, "click", (event) =>
                setValue(event.currentTarget.value)
            );
        });

        return () => listeners.forEach((remove) => remove());
    }, slots);

    slots.forEach((el) => {
        el.color = value == el.value ? "primary" : null;
        if (!el.hasAttribute("data-justify")) {
            el.setAttribute("data-justify", el.justify || "start");
        }
        el.justify = vertical ? (el.getAttribute("data-justify") as any) : null;
    });

    useFormInputHidden(name || "", value || "");

    return (
        <host shadowDom>
            <slot ref={refSlot}></slot>
        </host>
    );
}

radioButtons.props = {
    name: String,
    value: {
        type: String,
        event: {
            type: "change",
        },
    },
    vertical: {
        type: Boolean,
        reflect: true,
    },
};

radioButtons.styles = [
    tokens,
    css`
        :host {
            --flow: row nowrap;
            max-width: 100%;
            background: var(--color-input-60);
            min-height: var(--size-xl);
            display: flex;
            align-items: center;
            flex-flow: var(--flow);
            border-radius: var(--border-radius);
            padding: var(--size);
            box-sizing: border-box;
            gap: var(--size);
            overflow: auto hidden;
        }
        :host([vertical]) {
            --flow: column;
        }
    `,
];

export const RadioButtons = c(radioButtons);

customElements.define("radio-buttons", RadioButtons);
