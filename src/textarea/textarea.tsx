import { Props, c, css, useProp, MetaEvents, DOMEvent } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import customElements from "../system";
import { inputBaseStyle } from "../input/input-base-style";
import { InputGenericProps } from "../props";
import { useDisabled } from "@atomico/hooks/use-disabled";

function textarea(
    props: Props<typeof textarea>
): MetaEvents<DOMEvent<"change"> & DOMEvent<"input">> {
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
                <div class="input-group">
                    <div class="input-line">
                        <div class="input-line-fill"></div>
                    </div>
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
            --space-top: 0.25em;
            min-width: 100%;
        }
        :host([size="small"]) {
            --space-top: 0;
        }
        .input-content {
            overflow: hidden;
            grid-gap: 0;
            padding-top: var(--space-top);
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
            resize: var(--resize);
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
            z-index: 1;
            padding-left: var(--space-x);
            padding-right: var(--space-x);
        }

        .input-group {
            width: 100%;
            position: bottom;
            padding: 0 var(--space-x);
            box-sizing: border-box;
            bottom: 0;
            left: 0;
            position: absolute;
        }

        .input-line {
            position: relative;
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
