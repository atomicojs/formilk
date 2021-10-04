import { c, css, useRef, useProp, useState } from "atomico";
import { useClickCoordinates } from "@atomico/hooks/use-click-coordinates";
import { useListener } from "@atomico/hooks/use-listener";

function tooltip() {
    const refSlot = useRef();
    const refSlotTooptip = useRef();
    const [, setPosition] = useProp("position");
    const [inside, setInside] = useState(false);

    useClickCoordinates(refSlot, ({ y, x }) => {
        const positionX = refSlotTooptip.current.clientWidth + x;
        const positionY = refSlotTooptip.current.clientHeight + y;
        setPosition(
            (window.innerWidth > positionX ? "center" : "right") +
                " " +
                (window.innerHeight > positionY ? "bottom" : "top")
        );
    });

    useListener(
        { current: window },
        "click",
        inside &&
            ((event) => {
                console.log(event);
                setPosition("");
            })
    );

    return (
        <host
            shadowDom
            onclick={() => setInside(true)}
            onmouseout={() => setInside(false)}
        >
            <slot ref={refSlot}></slot>
            <div class="tooltip">
                <div class="tooltip-mask" ref={refSlotTooptip}>
                    <slot name="tooltip"></slot>
                </div>
            </div>
        </host>
    );
}

tooltip.props = {
    position: {
        type: String,
        reflect: true,
    },
};

tooltip.styles = css`
    :host {
        position: relative;
        display: inline-block;
    }
    :host([position="center bottom"]) .tooltip {
        visibility: visible;
        top: 100%;
        transform: translateX(-50%);
        left: 50%;
    }
    :host([position="center top"]) .tooltip {
        visibility: visible;
        bottom: 100%;
        transform: translateX(-50%);
        left: 50%;
    }
    .tooltip {
        position: absolute;
        visibility: hidden;
        z-index: 1;
        background: white;
        border-radius: 0.5rem;
        padding: 1rem;
        box-sizing: border-box;
        box-shadow: 0px 22px 40px -20px #000000;
    }
`;

export const Tooltip = c(tooltip);
