import { h, useEvent, useEffect, useRef, useProp } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { useParent } from "@atomico/hooks/use-parent";
import { useEventLabel } from "./use-event-label.js";

/**
 *
 * @param {string} type
 * @param {string} name
 * @param {string} value
 */
export function useSwitch(type, name, value) {
  const refInput = useRef();
  const refContainer = useRef();
  const refForm = useParent("form");
  const [checked, setChecked] = useProp("checked");

  useRender(
    () =>
      h("input", { type, name, value, ref: refInput, checked, slot: "input" }),
    [type, name, value, checked]
  );

  const toggle = () => {
    refInput.current.dispatchEvent(new MouseEvent("click"));
    setChecked(refInput.current.checked);
  };

  /**
   * Try to establish a connection with a label tag
   */

  useEventLabel(toggle, () => {
    refContainer.current.addEventListener("click", toggle);
    return () => refContainer.current.removeEventListener("click", toggle);
  });

  /**
   * listens the state changes associated with the radio input
   * to reflect them to the webcomponent
   */
  useEffect(() => {
    if (type != "radio" || !refForm.current) return;
    const handler = () => setChecked(refForm.current[name].value == value);
    refForm.current.addEventListener("change", handler);
    return () => refForm.current.removeEventListener("change", handler);
  }, [type, name, value]);

  return [refInput, refContainer];
}
