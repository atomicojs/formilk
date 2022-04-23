import {
    Ref,
    useHost,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "atomico";
import { useListener } from "@atomico/hooks/use-listener";
import { useCurrentValue } from "@atomico/hooks/use-current-value";

export function usePropProxy(
    prop: string,
    config: {
        set?: (value: any) => any;
        get?: () => any;
    }
) {
    const host = useHost();
    const value = useCurrentValue(config);

    useState(() => {
        const { current } = host;

        const descriptor = Object.getOwnPropertyDescriptor(
            current.constructor.prototype,
            prop
        );

        Object.defineProperty(current, prop, {
            get() {
                if (value.current?.get) {
                    return value.current?.get();
                }
                return descriptor?.get?.call(current);
            },
            set(value) {
                value.current?.set(value);
                return descriptor?.set?.call(current, value);
            },
        });
    });
}
