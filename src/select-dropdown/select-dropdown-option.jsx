import { c, css, useProp, useRef, useEvent } from "atomico";
import { Checkbox } from "../checkbox/checkbox";
import { Label } from "../label/label";
import customElements from "../custom-elements";
import { useSlot } from "@atomico/hooks/use-slot";

/**
 *
 * @param {import("atomico").Props<selectDropdownOption.props>} props
 */
function selectDropdownOption({ selected }) {
    const refSelected = useRef();
    const slotSelected = useSlot(refSelected);
    const [, setSelect] = useProp("selected");
    const dispatchChange = useEvent("change", { bubbles: true });
    return (
        <host shadowDom refSelected={slotSelected.at(0)}>
            <Label>
                <slot></slot>
                <slot ref={refSelected} name="selected"></slot>
                <Checkbox
                    slot="action"
                    size="small"
                    checked={selected}
                    onchange={(event) => {
                        setSelect(event.target.checked);
                        dispatchChange();
                    }}
                ></Checkbox>
            </Label>
        </host>
    );
}

selectDropdownOption.props = {
    value: {
        type: String,
    },
    label: {
        type: String,
    },
    slot: {
        type: String,
        reflect: true,
        value: "option",
    },
    selected: {
        type: Boolean,
        reflect: true,
    },
    refSelected: null,
};

selectDropdownOption.styles = css`
    :host {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    slot[name="selected"] {
        display: none;
    }
`;

export const SelectDropdownOption = c(selectDropdownOption);

customElements.define("select-dropdown-option", SelectDropdownOption);
