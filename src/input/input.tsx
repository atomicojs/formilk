import { Props, c, useProp, useRef, css, useHost } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { InputGenericProps } from "../props";
import customElements from "../custom-elements";
import { serialize } from "../utils";
import { inputBaseStyle } from "./input-base-style";

function input({ type, status, ...props }: Props<typeof input>) {
    const [, setValue] = useProp("value");
    const [, setFocus] = useProp("focused");
    const refSlotLabel = useRef();
    const refSlotPrefix = useRef();
    const refSlotSuffix = useRef();
    const host = useHost();

    const refInput = useRef();
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
            ref={refInput}
            {...(props as any)}
        />
    ));

    useDisabled();

    return (
        <host
            shadowDom
            oninput={() => setValue(refInput.current.value)}
            onclick={(event) => {
                let { target } = event as { target: Element | null };
                while (target && target != host.current) {
                    if (target?.hasAttribute("focusable")) return;
                    target = target.parentElement;
                }
                refInput.current.focus();
            }}
        >
            <div class="input">
                <div class="input-content">
                    <slot
                        ref={refSlotPrefix}
                        name="prefix"
                        class={serialize(!slotPrefix.length && "hidden")}
                    ></slot>
                    <slot
                        ref={refSlotLabel}
                        class={serialize(!slotLabel.length && "hidden")}
                    ></slot>
                    <slot name="input"></slot>
                    <slot
                        ref={refSlotSuffix}
                        name="suffix"
                        class={serialize(!slotSuffix.length && "hidden")}
                    ></slot>
                    <div class="input-line">
                        <div class="input-line-fill"></div>
                    </div>
                </div>
            </div>
            <style>{`
                :host {
                    --columns-label: ${slotLabel.length};
                    --columns: ${serialize(
                        slotPrefix.length && "auto",
                        slotLabel.length && "auto",
                        "1fr",
                        slotSuffix.length && "auto"
                    )};
                }
                :host([status]) {
                    --color-status: var(--color-status-${status});
                }
            `}</style>
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
};

input.styles = [
    inputBaseStyle,
    css`
        ::slotted([slot="input"]) {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            font-family: unset;
            font-size: unset;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            color: unset;
            outline: none;
            padding: 0px;
            letter-spacing: unset;
        }
        .hidden {
            display: none;
        }
    `,
];

export const Input = c(input);

customElements.define("input", Input);
