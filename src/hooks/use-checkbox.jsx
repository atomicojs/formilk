import { useProp, useRef } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { useFormListener } from "@atomico/hooks/use-form";

/**
 *
 * @param {string} type
 */
export function useCheckbox(type) {
    /**
     * @type {import("atomico").UseProp<string>}
     */
    const [name] = useProp("name");
    /**
     * @type {import("atomico").UseProp<string>}
     */
    const [value] = useProp("value");
    /**
     * @type {import("atomico").UseProp<boolean>}
     */
    const [checked, setChecked] = useProp("checked");

    /**
     * @type {import("atomico").Ref<HTMLInputElement>}
     */
    const refInput = useRef();

    useFormListener("reset", () => setChecked(false));

    useRender(() => {
        return (
            <input
                type={type}
                name={name}
                value={value}
                ref={refInput}
                checked={checked}
                onchange={(event) => {
                    setChecked(event.target.checked);
                }}
            />
        );
    }, [checked, name, type]);

    return refInput;
}
