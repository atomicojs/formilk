import { useListener } from "@atomico/hooks/use-listener";

/**
 * This hook reflects an event and cancels its propagation
 * @param {string} type
 * @param {import("atomico").Ref<Element>} refFrom - event source reference
 * @param {import("atomico").Ref<Element>} refTo - event destination reference
 * @param {(ev:Event)=>boolean} [filter] - Defines if the event should continue the reflection
 */
export function useReflectEvent(refFrom, refTo, type, filter) {
    useListener(
        refFrom,
        type,
        /**
         * @param {Event} event
         */
        (event) => {
            const { current } = refTo;
            if (!current) return;
            if (!event.composedPath().includes(current)) {
                if (filter && !filter(event)) return;
                event.preventDefault();
                event.stopPropagation();
                current.dispatchEvent(new event.constructor(event.type, event));
            }
        }
    );
}
