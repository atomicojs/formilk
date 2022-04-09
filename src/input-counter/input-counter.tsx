import { Props, c, css, useProp, useRef, useEvent } from "atomico";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { Icon } from "../icon/icon";
import customElements from "../custom-elements";
import { useCssLightDom } from "@atomico/hooks/use-css-light-dom";
import { useClickPress } from "@atomico/hooks/use-click-press";
import { InputGenericProps } from "../props";
import { useDisabled } from "@atomico/hooks/use-disabled";

const sheet = css`
    :host {
        display: block;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
`;

function counter({
    name,
    ghost,
    narrow,
    min,
    max,
    step,
    size,
}: Props<typeof counter>) {
    useCssLightDom(sheet);

    const dispatch = useEvent("input", { bubbles: true });
    const currentStep = step || 1;

    const [value, setValue] = useProp<number>("value");
    const refIncrement = useRef();
    const refDecrement = useRef();

    let calc = (mode: 1 | -1) => {
        setValue((value) => {
            let next = (value || 0) + currentStep * mode;
            next = min != null ? (next > min ? next : min) : next;
            next = max != null ? (next > max ? max : next) : next;
            return next;
        });
        dispatch();
    };

    useClickPress(refDecrement, () => calc(-1));
    useClickPress(refIncrement, () => calc(1));

    const disabled = useDisabled();

    return (
        <host>
            <Input
                name={name}
                type="number"
                style="--text-align: center; --gap: 0px;"
                value={value}
                oninput={({ currentTarget }) => {
                    setValue(Number(currentTarget.value));
                }}
                disabled={disabled}
                ghost={ghost}
                narrow={narrow}
                min={min}
                max={max}
                step={step}
                size={size}
            >
                <Button
                    disabled={disabled}
                    slot="prefix"
                    ghost
                    ref={refDecrement}
                    onclick={(event) => event.preventDefault()}
                    size="small"
                >
                    <Icon slot="prefix" type="dash"></Icon>
                </Button>
                <Button
                    disabled={disabled}
                    slot="suffix"
                    ghost
                    ref={refIncrement}
                    onclick={(event) => event.preventDefault()}
                    size="small"
                >
                    <Icon slot="prefix" type="plus"></Icon>
                </Button>
            </Input>
        </host>
    );
}

counter.props = {
    ...InputGenericProps,
    value: {
        type: Number,
        value: 0,
    },
    ghost: {
        type: Boolean,
        reflect: true,
    },
    narrow: {
        type: Boolean,
        reflect: true,
    },
    min: Number,
    max: Number,
    step: Number,
};

export const InputCounter = c(counter);

customElements.define("input-counter", InputCounter);
