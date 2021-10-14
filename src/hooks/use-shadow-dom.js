import { useHost, useRef, useLayoutEffect } from "atomico";

export function useShadowDom() {
    /**
     * @type {import("atomico").Ref<ShadowRoot>}
     */
    const ref = useRef();
    const host = useHost();
    useLayoutEffect(() => {
        ref.current = host.current.shadowRoot;
    }, []);
    return ref;
}
