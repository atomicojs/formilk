import { Props, Meta, DOMEvent, c, css, useRef, useProp } from "atomico";
import { Button } from "../button/button";
import { useSlot, useProxySlot } from "@atomico/hooks/use-slot";
import customElements from "../system";
import { Tab } from "./tab";

function tabs({ position }: Props<typeof tabs>): Meta<DOMEvent<"ChangeTab">> {
    const [value, setValue] = useProp<string>("value");
    const refSlots = useRef();
    const slots = useProxySlot<InstanceType<typeof Button>>(refSlots);
    return (
        <host shadowDom>
            <slot ref={refSlots}></slot>
            <div class="tabs">
                {slots.map((el, index) => (
                    <Tab
                        active={el.value === value}
                        position={position}
                        onclick={() => setValue(el.value)}
                    >
                        <slot name={(el.slot = `tab-${index}`)}></slot>
                    </Tab>
                ))}
            </div>
        </host>
    );
}

tabs.props = {
    name: String,
    value: String,
    position: {
        type: String,
        reflect: true,
    },
};

tabs.styles = css`'
    :host{
        --flow: row nowrap;
    }
    :host([position="left"]),
    :host([position="right"]){
        --flow: column;
    }
    [name="mark"] {
        display: none;
    }
    .tabs {
        display: flex;
        flex-flow: var(--flow);
    }

`;

export const Tabs = c(tabs);

customElements.define("tabs", Tabs);
