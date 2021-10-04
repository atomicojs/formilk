import { c, css, useRef, useMemo, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useParentPath } from "@atomico/hooks/use-parent";
import { tokensBorder, tokensColor } from "../tokens";

function tabGroup(props) {
    const refTab = useRef();
    const slotTab = useSlot(refTab);
    const [show, setShow] = useProp("show");
    const currentTab = slotTab.find((el) => el.show);

    const path = useParentPath();
    const forElements = useMemo(
        () =>
            Array.isArray(props.for)
                ? props.for
                : props.for
                ? [
                      ...new Set(
                          path.reduce(
                              (list, el) => [
                                  ...list,
                                  ...el.querySelectorAll(props.for),
                              ],
                              []
                          )
                      ),
                  ]
                : [],
        [props.for]
    );

    forElements.forEach((el) => (el.show = currentTab?.for || show));

    return (
        <host
            shadowDom
            onShow={(event) => {
                event.stopPropagation();
                const { target } = event;
                if (target.show) {
                    setShow(target.for);
                    slotTab
                        .filter((el) => el != target)
                        .forEach((el) => (el.show = false));
                }
            }}
        >
            <div class={`tabs ${slotTab.length ? "" : "hidden"}`}>
                <div class="tabs-items">
                    <slot name="tab" ref={refTab}></slot>
                </div>
            </div>
            <slot name={currentTab?.for || show}></slot>
        </host>
    );
}

tabGroup.props = {
    show: {
        type: String,
        reflect: true,
    },
    for: null,
};

tabGroup.styles = [
    tokensBorder,
    tokensColor,
    css`
        .tabs {
            border-bottom: calc(var(--border-width) * 2) solid var(--divide);
        }
        .tabs-items {
            display: flex;
            margin-bottom: calc(var(--border-width) * -2);
        }
        .hidden {
            display: none;
        }
    `,
];

export const TabGroup = c(tabGroup);
