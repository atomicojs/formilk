import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useRender } from "@atomico/hooks/use-render";

const style = /*css */ `
  :host{
    display: inline-block;
  }
  .button{
    min-width: 2.5rem;
    min-height: 2.5rem;
    display: inline-grid;
    align-items: center;
    background: var(--c);
    grid-gap: .5rem;
    color: var(--cc);
    box-sizing: border-box;
    justify-content: center;
    padding: 0px;
    border:none;
    font-size: .875rem;
    border-radius: var(--button_radius);
    position:relative;

  }
  .button-label{
    padding-left: 1rem;
    padding-right: 1rem;
  }
  :host(:not(outline)) .button{
    box-shadow: var(--sh);
  }
`;

function button({ type, name, value, theme }) {
  const slotIconRef = useRef();
  const buttonRef = useRef();
  const buttonOutRef = useRef();
  const slotIcon = useSlot(slotIconRef);

  useRender(
    () => (
      <button
        type="submit"
        name={name}
        value={value}
        ref={buttonOutRef}
        slot="button"
        tabindex="-1"
      ></button>
    ),
    [type, name, value]
  );

  return (
    <host shadowDom>
      <style>{style}</style>
      <button
        ref={buttonRef}
        onclick={() => buttonOutRef.current.click()}
        class={`button ${slotIcon.length ? "" : "button-label"}`}
        style={`--c: var(--button_${theme});--cc: var(--button_${theme}-color, var(--button_color) );--sh:var(--button_${theme}-shadow, var(--button_shadow))`}
      >
        <slot ref={slotIconRef} name="icon"></slot>
        <slot></slot>
      </button>
      <my-element onclick={console.log}></my-element>
    </host>
  );
}

button.props = {
  name: String,
  value: String,
  type: {
    type: String,
    value: "submit",
  },
  theme: {
    type: String,
    value: "contrast",
  },
  outline: {
    type: Boolean,
    reflect: true,
  },
};

export const Button = c(button);
