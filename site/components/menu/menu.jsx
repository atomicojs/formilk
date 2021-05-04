import { c, useEffect, useRef, useUpdate, useState } from "atomico";
import { useChildNodes } from "@atomico/hooks/use-child-nodes";
import { useMutationObserver } from "@atomico/hooks/use-mutation-observer";
import { MenuItem } from "./menu-item";
import style from "./menu.css";

function menu() {
    const update = useUpdate();
    const refHost = useRef();
    const refContainer = useRef();

    const [childNodes, updateChildNodes] = useChildNodes();

    useMutationObserver(refHost, updateChildNodes, { childList: true });

    const items = childNodes.filter((child) => child instanceof MenuItem);
    const active = items.find((child) => child.active);

    const [top, height] = useOffsetTop(refContainer, items, active);

    return (
        <host shadowDom ref={refHost} onMenuItemChange={update}>
            <style>{style}</style>
            <div class="items">
                <div class="items-line" style={`--y:${top}px;--h:${height}px;`}>
                    <div></div>
                </div>
                <div class="items-slots" ref={refContainer}>
                    {items.map((element, index) => {
                        element.slot = index;
                        return (
                            <div class="items-item">
                                <slot name={index}></slot>
                            </div>
                        );
                    })}
                </div>
            </div>
        </host>
    );
}

menu.props = {};

function useOffsetTop(refContainer, items, active) {
    const [state, setState] = useState([0, 0]);
    useEffect(() => {
        if (!active) return;
        const children = [...refContainer.current.children];
        const index = items.indexOf(active);
        const offsetTop = children
            .slice(0, index)
            .reduce((offsetTop, child) => offsetTop + child.clientHeight, 0);
        setState([offsetTop, children[index]?.clientHeight || 0]);
    }, [active]);
    return active ? state : [0, 0];
}

export const Menu = c(menu);
