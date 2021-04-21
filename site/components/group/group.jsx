import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { Source } from "../source/source.jsx";

function group() {
  const ref = useRef();
  const slots = useSlot(ref);
  /**
   * @type {Source[]}
   */
  const sources = slots.filter((child) => child instanceof Source);

  return (
    <host shadowDom sources={sources}>
      <slot ref={ref}></slot>
    </host>
  );
}

group.props = {
  label: String,
  sources: {
    type: Array,
    event: {
      type: "ChangeSources",
      bubbles: true,
    },
  },
};

export const Group = c(group);
