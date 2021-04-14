import { c } from "atomico";
import { useSwitch } from "./hooks/use-switch.js";

const style = /*css */ `
    :host{
      display: inline-block;
      margin: .5rem 0px;
    }
    .checkbox{
        width: 1.75rem;
        height: 1.75rem;
        padding: 0.15rem;
        cursor: pointer;
        border: .1rem solid var(--input-checkbox_border);
        border-radius: var(--input-checkbox_radius);
        background: var(--input_background);
        box-shadow: var(--input_shadow);
        box-sizing: border-box;
    }
    .fill{
        width: 100%;
        height: 100%;
        background: var(--input-checkbox_fill);
        border-radius: calc( var(--input-checkbox_radius) * .75 );
        transform: scale(.75);
        transition: .25s ease all;
        
    }
    slot[name="icon"]{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg{
      display: block;
      opacity: 0;
    }
    :host([checked]) .fill{
      background: var(--input-checkbox_fill-active);
      transform: scale(1);
    }
    :host([checked]) .fill svg{
      opacity: 1;
    }
`;

function checkbox({ name, value }) {
  const [, refContainer] = useSwitch("checkbox", name, value);
  return (
    <host shadowDom>
      <style>{style}</style>
      <button ref={refContainer} class="checkbox">
        <div class="fill">
          <slot name="icon">
            <svg width=".7rem" viewBox="0 0 11.192 8.364">
              <path
                d="M-1530.757,8.778a1,1,0,0,1-.67-.257l-.037-.035-2.829-2.829a1,1,0,0,1,0-1.414,1,1,0,0,1,1.415,0l2.121,2.122L-1525.1.707a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-6.364,6.364a1,1,0,0,1-.707.293Z"
                transform="translate(1534.586 -0.414)"
                style="fill: var(--input-checkbox_icon, #fff)"
              />
            </svg>
          </slot>
        </div>
      </button>
    </host>
  );
}

checkbox.props = {
  name: String,
  value: {
    type: null,
    value: "on",
  },
  checked: { type: Boolean, reflect: true },
  disabled: { type: Boolean, reflect: true },
};

export const InputCheckbox = c(checkbox);
