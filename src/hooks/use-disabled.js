import { useProp, useHost, useLayoutEffect } from "atomico";
import { useParent } from "@atomico/hooks/use-parent";
import { useMutationObserver } from "@atomico/hooks/use-mutation-observer";

export function useDisabled() {
    const fieldset = useParent("fieldset");
    const [disabled, setDisabled] = useProp("disabled");

    useMutationObserver(
        fieldset,
        (items) =>
            items
                .filter((item) => item.attributeName == "disabled")
                .map((el) => {
                    setDisabled(el.target.disabled);
                }),
        {
            attributes: true,
        }
    );

    useLayoutEffect(() => {
        const { current } = fieldset;
        if (current) {
            setDisabled(current.disabled);
        }
    }, []);

    return disabled;
}
