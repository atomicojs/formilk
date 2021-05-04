import { c, useProp, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";
import { useEventLabel } from "./hooks/use-event-label.js";

export const inputStyle = /*css*/ `
    :host{
        display: block;
        background: var(--input_background);
        box-shadow: var(--input_shadow);
        border-radius: var(--input_radius);   
    }
    .label,
    .icon{
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .label{
      padding: 0px .5rem 0px 1.25rem ;
    }
    .icon{
      padding: 0px .25rem 0px 1.25rem ;
    }
    .icon:not(.hidden) + .label:not(.hidden){
      padding-left: .75rem;
    }
    .hidden{
      display: none;
    }
    .row{
        width: 100%;
        min-height: 3.125rem;
        display: flex;
        position: relative;
    }
    .input {
      flex: 0%;
      min-height: 100%;
      position: relative;
    }
    .line{
        width: calc(100% - 2rem);
        height: .1rem;
        position: absolute;
        background: var(--input_line);
        left: 50%;
        bottom: 0px;
        transform: translateX(-50%);
        z-index: 2;
    }
    ::slotted(input){
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      font-family: unset;
      font-size: 1rem;
      padding: 0px 1rem;
      box-sizing: border-box;
      position: relative;
      z-index: 2;
  }
`;

function inputBasic({ type, ...props }) {
    const [, setValue] = useProp("value");
    const refLabel = useRef();
    const refIcon = useRef();
    const refInput = useRef();
    const slotLabel = useSlot(refLabel);
    const slotIcon = useSlot(refIcon);

    useRender(() => (
        <input type={type} {...props} slot="input" ref={refInput} />
    ));

    useEventLabel(() => refInput.current.click());

    return (
        <host
            shadowDom
            checkValidity={() => refInput.current.checkValidity()}
            oninput={() => setValue(refInput.current.value)}
        >
            <style>{inputStyle}</style>
            <div class="row" onclick={() => refInput.current.focus()}>
                <div class={`icon ${slotIcon.length ? "" : "hidden"}`}>
                    <slot ref={refIcon} name="icon"></slot>
                </div>
                <div
                    class={`label ${
                        slotLabel.filter((tag) => tag.localName != "datalist")
                            .length
                            ? ""
                            : "hidden"
                    }`}
                >
                    <slot ref={refLabel}></slot>
                </div>
                <div class="input">
                    <slot name="input"></slot>
                    <div class="line"></div>
                </div>
            </div>
        </host>
    );
}

export const inputProps = (inputBasic.props = {
    name: String,
    type: String,
    value: null,
    list: String,
    pattern: String,
    min: Number,
    max: Number,
    minLength: Number,
    maxLength: Number,
    placeholder: String,
    required: Boolean,
    checked: Boolean,
    disabled: { type: Boolean, reflect: true },
});

export const InputBasic = c(inputBasic);
