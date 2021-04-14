import { c, useProp, useRef } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { useEventLabel } from "../../hooks/use-event-label.js";

const style = /*css*/ `
  :host{
    display: inline-block;
  }
  ::slotted(input){
    width: 100%;
    height: 100%;
    padding: 0px;
    border: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  button{
    width: 2rem;
    height: 2rem;
    padding: 0px;
    background: var(--v);
    border: .1rem solid var(--input-color_border);
    display: inline-block;
    border-radius: var(--input-color_radius);
    position: relative;
  }
`;

function color({ disabled }) {
  const [value, setValue] = useProp("value");
  const refInput = useRef();
  useRender(
    () => (
      <input
        ref={refInput}
        oninput={({ target }) => setValue(target.value)}
        type="color"
        value={value}
        disabled={disabled}
        tabindex="-1"
      />
    ),
    [value]
  );
  useEventLabel(() => refInput.current.click());
  return (
    <host shadowDom>
      <style>{style}</style>
      <button style={`--v: ${value}`}>
        <slot></slot>
      </button>
    </host>
  );
}

color.props = {
  value: {
    type: String,
    value: "#000",
  },
  disabled: { type: Boolean, reflect: true },
};

export const InputColor = c(color);
