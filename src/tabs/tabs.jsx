import { c, css, useRef, useUpdate } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useResizeObserverState } from "@atomico/hooks/use-resize-observer";
import { Divide } from "../divide/divide";
import customElements from "../custom-elements";

function tabs({ active }) {
    const refSlotTabs = useRef();
    const refTabs = useRef();
    const slotTabs = useSlot(refSlotTabs);
    const update = useUpdate();
    useResizeObserverState(refTabs);

    const [, ...tabs] = slotTabs.reduce(
        ([offset, ...tabs], target) => [
            target.clientWidth + offset,
            ...tabs,
            { offset, target },
        ],
        [0]
    );

    const currentTab = tabs.find(({ target }) => target.active);
    const currentActive = currentTab?.target?.value || active;

    return (
        <host shadowDom active={currentActive}>
            <div class="tabs-header">
                <div className="tabs-items" ref={refTabs}>
                    <slot
                        onclick={Object.assign(
                            /**
                             *
                             * @param {PointerEvent} event
                             */
                            (event) => {
                                event.stopPropagation();
                                slotTabs.map((slotTabs) => {
                                    slotTabs.active = slotTabs === event.target;
                                });
                                update();
                            },
                            {
                                capture: true,
                            }
                        )}
                        ref={refSlotTabs}
                        name="tab"
                    ></slot>
                </div>
                <Divide
                    class="tabs-divide  "
                    style={
                        currentTab
                            ? `--mark-width: ${currentTab.target.clientWidth}px; --mark-offset: ${currentTab.offset}px;`
                            : ""
                    }
                ></Divide>
            </div>
            {currentTab && <slot name={currentTab.target.value}></slot>}
        </host>
    );
}

tabs.props = {
    positionDivide: {
        type: String,
        reflect: true,
    },
    position: {
        type: String,
        reflect: true,
    },
    active: {
        type: String,
        reflect: true,
        event: {
            type: "ChangeTab",
        },
    },
};

tabs.styles = css`
    :host {
        display: flex;
        flex-flow: column nowrap;
        min-height: 100%;
    }

    :host([position-divide="top"]) .tabs-divide {
        order: -1;
    }

    :host([position="bottom"]) {
        flex-flow: column-reverse nowrap;
    }

    .tabs-items {
        display: flex;
        overflow-x: auto;
    }

    .tabs-header {
        width: 100%;
        position: relative;
        display: flex;
        flex-flow: column nowrap;
    }
    ::slotted(:not([slot="tab"])) {
        height: 100%;
        overflow: auto;
    }
`;

export const Tabs = c(tabs);

customElements.define("tabs", Tabs);
