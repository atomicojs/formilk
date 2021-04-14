import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";

const style = /*css*/ `
  button{
    background: none;
    padding: 0;
    border: 0;
    text-align: left;
    max-width: 100%;
    display: flex;
    align-items: center;
  }
  slot{
    display: grid;
    grid-gap: var(--label_gap, 1rem);
    grid-template-columns: repeat(var(--c), auto);
    align-items: center;
  }
`;

function label() {
  const refSlot = useRef();
  const refInput = useRef();
  const slot = useSlot(refSlot);

  return (
    <host
      shadowDom
      onPreventLabel={(ev) => {
        ev.stopPropagation();
        refInput.delegateFocus = ev.detail;
        ev.preventDefault();
      }}
    >
      <style>{style}</style>
      <button
        onclick={(ev) => {
          ev.stopPropagation();
          refInput.delegateFocus && refInput.delegateFocus();
        }}
      >
        <slot ref={refSlot} style={`--c:${slot.length}`}></slot>
      </button>
    </host>
  );
}

export const Label = c(label);
