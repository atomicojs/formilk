import { useProp, useRef } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { useFormListener } from "@atomico/hooks/use-form";

export function useCheckbox(type: "checkbox" | "radio") {
    const [name] = useProp<string>("name");

    const [value] = useProp<string>("value");

    const [checked, setChecked] = useProp<boolean>("checked");

    const refInput = useRef<HTMLInputElement>();

    useFormListener("reset", () => setChecked(false));

    useRender(() => {
        return (
            <input
                type={type}
                name={name}
                value={value}
                ref={refInput}
                checked={checked}
                onchange={({ currentTarget: { checked } }) =>
                    setChecked(checked)
                }
            />
        );
    }, [checked, name, type]);

    return refInput;
}
