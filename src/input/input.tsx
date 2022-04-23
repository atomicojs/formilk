import { Props, c, useProp, useRef, css, useHost } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { usePropProxy } from "@atomico/hooks/use-prop-proxy";
import { InputGenericProps } from "../props";
import { serialize } from "atomico/utils";
import { inputBaseStyle } from "./input-base-style";
import customElements from "../custom-elements";

function input({ type, status, ...props }: Props<typeof input>) {
    const [, setValue] = useProp<string>("value");
    const [, setFocus] = useProp("focused");

    const host = useHost();
    const refSlotLabel = useRef();
    const refSlotPrefix = useRef();
    const refSlotSuffix = useRef();
    const refInput = useRef<HTMLInputElement>();

    const slotLabel = useSlot(refSlotLabel).filter((el) =>
        el instanceof Text ? el.textContent?.trim() : true
    );
    const slotPrefix = useSlot(refSlotPrefix);
    const slotSuffix = useSlot(refSlotSuffix);

    useRender(() => (
        <input
            onfocus={() => setFocus(true)}
            onblur={() => setFocus(false)}
            type={type}
            slot="input"
            class="reset"
            ref={refInput}
            {...(props as any)}
        />
    ));

    useDisabled();

    usePropProxy("value", {
        get() {
            return refInput.current?.value;
        },
    });

    return (
        <host
            shadowDom
            oninput={() => setValue(refInput.current?.value)}
            onclick={(event) => {
                let { target } = event as { target: Element | null };
                while (target && target != host.current) {
                    if (target?.hasAttribute("focusable")) return;
                    target = target.parentElement;
                }
                refInput.current?.focus();
            }}
        >
            <div class="input-row input">
                <div
                    class="input-row"
                    style={`--columns:${serialize(
                        slotPrefix.length && "auto",
                        slotLabel.length && "auto",
                        "1fr",
                        slotSuffix.length && "auto",
                        props.required && "auto"
                    )}`}
                >
                    <slot
                        ref={refSlotPrefix}
                        name="prefix"
                        class={serialize(!slotPrefix.length && "hidden")}
                    ></slot>
                    <div class={serialize(!slotLabel.length && "hidden")}>
                        <slot ref={refSlotLabel}></slot>
                    </div>
                    <slot name="input"></slot>
                    <slot
                        ref={refSlotSuffix}
                        name="suffix"
                        class={serialize(!slotSuffix.length && "hidden")}
                    ></slot>
                    {/* {props.required && <Icon type="asterisk"></Icon>} */}
                    <div class="input-line">
                        <div class="input-line-fill"></div>
                    </div>
                </div>
            </div>
            <style></style>
        </host>
    );
}

input.props = {
    ...InputGenericProps,
    type: String,
    list: String,
    pattern: String,
    min: Number,
    max: Number,
    minLength: Number,
    maxLength: Number,
    placeholder: String,
    checked: Boolean,
    status: {
        type: String,
        reflect: true,
    },
    narrow: {
        type: Boolean,
        reflect: true,
    },
    ghost: {
        type: Boolean,
        reflect: true,
    },
    step: Number,
    color: {
        type: String,
    },
};

input.styles = [
    inputBaseStyle,
    css`
        .hidden {
            display: none;
        }
    `,
];

export const Input = c(input);

customElements.define("input", Input);
