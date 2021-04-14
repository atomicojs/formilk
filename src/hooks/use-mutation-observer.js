import { useEffect, useHost } from "atomico";
/**
 * @param {MutationCallback} observe
 * @param {MutationObserverInit} [config]
 */
export function useMutationObserver(observe, config) {
  const host = useHost();
  useEffect(() => {
    const observer = new MutationObserver(observe);
    observer.observe(host.current, config);
    return () => observer.disconnect();
  }, []);
}
