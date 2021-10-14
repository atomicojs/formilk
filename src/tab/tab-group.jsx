import { c, css, useRef, useMemo, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { useParentPath } from "@atomico/hooks/use-parent";
import { tokensCard } from "../tokens";

function tabGroup(props) {
    const refTab = useRef();
    const slotTab = useSlot(refTab);
    const [show, setShow] = useProp("show");
    const currentTab = slotTab.find((el) => el.show);

    const path = useParentPath();
    const forElement = useMemo(() => {
        if (props.for instanceof Element) {
            return props.for;
        } else if (typeof props.for === "string") {
            for (let i = 0; i < path.length; i++) {
                let query = path[i].querySelector(`#${props.for}`);
                if (query) return query;
            }
        }
    }, [props.for]);

    if (forElement) forElement.show = currentTab?.for || show;

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
    tokensCard,
    css`
        :host {
            display: grid;
            position: relative;
            grid-gap: var(--gap);
            background: var(--background);
            color: var(--color);
            border-radius: var(--radius);
            backdrop-filter: var(--backdrop);
            box-sizing: border-box;
            border: var(--border-width) solid var(--borderline);
            box-shadow: var(--shadow-size) var(--shadow-color);
        }
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
