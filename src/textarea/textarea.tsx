import { Props, c, css, useProp, useRef } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import customElements from "../custom-elements";
import { inputBaseStyle } from "../input/input-base-style";
import { InputGenericProps } from "../props";
import { useDisabled } from "@atomico/hooks/use-disabled";

function textarea(props: Props<typeof textarea>) {
    const [value, setValue] = useProp<string>("value");
    const [, setFocus] = useProp("focused");

    useRender(() => (
        <input
            type="text"
            slot="input"
            maxLength={props.maxLength}
            minLength={props.minLength}
            required={props.required}
            value={props.value}
            name={props.name}
        />
    ));

    const disabled = useDisabled();

    return (
        <host shadowDom>
            <div class="input">
                <div
                    class="input-content input-proxy"
                    textContent={(value || "")
                        .split(/(\n)/)
                        .map((child) => (child === `\n` ? `${child} ` : child))
                        .join("")}
                ></div>
                <slot name="input"></slot>
                <textarea
                    value={props.value}
                    rows={props.rows}
                    cols={props.cols}
                    placeholder={props.placeholder}
                    onfocus={() => setFocus(true)}
                    onblur={() => setFocus(false)}
                    maxLength={props.maxLength}
                    minLength={props.minLength}
                    class="input-content input-layer"
                    oninput={({ currentTarget }) =>
                        setValue(currentTarget.value)
                    }
                    onkeydown={(event) => disabled && event.preventDefault()}
                ></textarea>
                <div class="input-line">
                    <div class="input-line-fill"></div>
                </div>
            </div>
        </host>
    );
}

textarea.props = {
    ...InputGenericProps,
    cols: Number,
    placeholder: {
        type: String,
        reflect: true,
    },
    minLength: Number,
    maxLength: Number,
    rows: {
        type: Number,
        value: 1,
    },
};

textarea.styles = [
    inputBaseStyle,
    css`
        :host {
            --resize: vertical;
            min-width: 100%;
        }
        .input-content {
            overflow: hidden;
            grid-gap: 0;
        }

        .input-proxy {
            opacity: 0;
            white-space: pre-wrap;
            word-break: break-word;
        }

        .input-content {
            width: 100%;
            background: none;
            border: none;
            font: unset;
            line-height: var(--size-line);
            resize: var(--resize);
            padding-top: var(--space-y);
            padding-bottom: var(--space-y);
            box-sizing: border-box;
            margin: 0px;
            outline: none;
        }

        .input-layer {
            position: absolute;
            height: 100%;
            top: 0;
            left: 0;
            min-height: 100%;
            max-height: 100%;
        }

        ::slotted([slot="input"]) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            border: none;
        }
    `,
];

export const Textarea = c(textarea);

customElements.define("textarea", Textarea);
