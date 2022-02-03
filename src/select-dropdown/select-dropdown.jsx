import { c, css, useRef, useUpdate } from "atomico";
import { Dropdown } from "../dropdown/dropdown";
import customElements from "../custom-elements";
import { useSlot } from "@atomico/hooks/use-slot";
import { tokensBox, tokensColor, tokensShadow } from "../tokens";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { InputGenericProps } from "../props";
export { SelectDropdownOption } from "./select-dropdown-option";

/**
 *
 * @param {import("atomico").Props<selectDropdown.props>} props
 */
function selectDropdown({ multiple, required }) {
    const refSlotOptions = useRef();
    const slotOptions = useSlot(refSlotOptions).filter(
        (el) => el instanceof Element
    );
    const update = useUpdate();

    const slotSelected = slotOptions.filter((el) => el.selected);

    return (
        <host shadowDom>
            <Dropdown widthFull offset="var(--space-y)">
                <div
                    class="select-dropbox-input"
                    slot="action"
                    style={`--columns: ${!!slotSelected.length + 2}`}
                >
                    <slot></slot>
                    <div
                        class={`select-dropbox-values ${
                            slotSelected.length ? "" : "hidden"
                        }`}
                    >
                        {slotSelected.map((option) => (
                            <Button
                                size="small"
                                key={option}
                                dropdown-ignore
                                onclick={() => {
                                    option.selected = false;
                                    update();
                                }}
                            >
                                <span>{option.label || option.value}</span>
                                {
                                    <Icon
                                        size="calc(1em * var(--size-small))"
                                        slot="suffix-outbox"
                                        type="closed"
                                        class="select-dropbox-option-closed"
                                    ></Icon>
                                }
                            </Button>
                        ))}
                    </div>
                    <Icon
                        type="down"
                        size="calc(1em * var(--size-small))"
                    ></Icon>
                </div>
                <div
                    class="select-dropdown-options"
                    onchange={({ target }) => {
                        if (!multiple)
                            slotOptions.forEach((el) => {
                                el.selected = el === target;
                            });
                        update();
                    }}
                >
                    <slot ref={refSlotOptions} name="option"></slot>
                </div>
            </Dropdown>
        </host>
    );
}

selectDropdown.props = {
    ...InputGenericProps,
    multiple: {
        type: Boolean,
        reflect: true,
    },
};

selectDropdown.styles = [
    tokensBox,
    tokensColor,
    tokensShadow,
    css`
        :host {
            --color-fill: var(--color-current-layer, var(--color-input-fill));
            --color-divide: var(--color-input-divide);
            --color-contrast: var(
                --color-current-contrast,
                var(--color-input-contrast)
            );
            --color-status: var(--color-input-status);
            --shadow: var(--shadow-action);
            --space-options: var(--space-y);
        }

        :host([shadow]) {
            box-shadow: var(--shadow);
        }

        .select-dropbox-input {
            display: grid;
            grid-template-columns: repeat(var(--columns), auto);
            border-radius: 8px;
            background: var(--color-fill);
            color: var(--color-contrast);
            border-radius: var(--border-radius);
            align-items: center;
            border: var(--border-width) solid var(--color-divide);
            padding: 0 var(--space-x);
            gap: var(--space-between);
            min-height: var(--size-min);
        }

        .select-dropdown-options {
            display: grid;
            grid-gap: var(--space-options);
        }

        .select-dropbox-values {
            display: flex;
            flex-flow: row wrap;
            gap: calc(var(--space-between) / 2);
        }

        .select-dropbox-option-closed {
            background: var(--color-button-layer);
            padding: 0.5em;
            border-radius: calc(var(--border-radius) * var(--size-small));
        }

        .hidden {
            display: none;
        }
    `,
];

export const SelectDropdown = c(selectDropdown);

customElements.define("select-dropdown", SelectDropdown);
