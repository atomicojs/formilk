import { useEvent, useEffect } from "atomico";
/**
 *
 * @param {()=>void} fromLabel
 * @param {()=>void} [ignore]
 */
export function useEventLabel(fromLabel, ignore) {
  const dispatchPreventLabel = useEvent("PreventLabel", {
    bubbles: true,
    composed: true,
    cancelable: true,
  });

  useEffect(() => {
    dispatchPreventLabel(fromLabel) && ignore && ignore();
  }, []);
}
