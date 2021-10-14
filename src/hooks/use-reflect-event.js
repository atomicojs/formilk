import { useListener } from "@atomico/hooks/use-listener";

const symbolId = Symbol("");

/**
 * This hook reflects an event and cancels its propagation
 * @param {string} type
 * @param {import("atomico").Ref<Element>} refFrom
 * @param {import("atomico").Ref<Element>} refTo
 * @param {(ev:Event)=>boolean} [filter]
 */
export function useReflectEvent(refFrom, refTo, type, filter) {
    useListener(refFrom, type, (event) => {
        if (!event[symbolId]) {
            if (filter && !filter(event)) return;
            event.preventDefault();
            event.stopPropagation();
            const nextEvent = new event.constructor(event.type, event);
            nextEvent[symbolId] = true;
            refTo.current.dispatchEvent(nextEvent);
        }
    });
}
