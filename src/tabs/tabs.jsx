import { c, css, useRef, useUpdate } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useResizeObserverState } from "@atomico/hooks/use-resize-observer";
import { tokensBorder, tokensColor, tokensSpace } from "../tokens";
import { Divide } from "../divide/divide";

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
    divide: {
        type: String,
        reflect: true,
    },
    active: {
        type: String,
        reflect: true,
    },
};

tabs.styles = [
    tokensSpace,
    tokensBorder,
    tokensColor,
    css`
        :host([divide="top"]) .tabs-divide {
            order: -1;
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
            overflow: hidden;
        }
    `,
];

export const Tabs = c(tabs);
