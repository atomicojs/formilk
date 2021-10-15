import { h, c, css, useRef, useProp, useState } from "atomico";
import { useListener } from "@atomico/hooks/use-listener";

/**
 *
 * @param {import("atomico").Props<tooltip.props>} props
 */
function tooltip({ width }) {
    const refSlot = useRef();
    const refSlotTooptip = useRef();
    const [show, setShow] = useProp("show");
    const [, setPosition] = useProp("position");
    const [inside, setInside] = useState(false);

    useListener(
        { current: window },
        "click",
        show && !inside && (() => setShow(false))
    );

    return (
        <host
            shadowDom
            onmouseover={() => setInside(true)}
            onmouseleave={() => setInside(false)}
        >
            <div
                onclick={(event) => {
                    const { x, y } =
                        event.currentTarget.getBoundingClientRect();

                    const {
                        current: { clientWidth, clientHeight },
                    } = refSlotTooptip;

                    const { innerWidth, innerHeight } = window;

                    const w2 = clientWidth / 2;

                    setShow(true);

                    setPosition(
                        (clientWidth + x > innerWidth
                            ? "right"
                            : x - w2 > w2
                            ? "center"
                            : "left") +
                            " " +
                            (innerHeight > clientHeight + y ? "bottom" : "top")
                    );
                }}
            >
                <slot ref={refSlot}></slot>
            </div>
            <div class="tooltip">
                <div class="tooltip-mask" ref={refSlotTooptip}>
                    <slot name="tooltip"></slot>
                </div>
            </div>
            <style>{width && /*css*/ `:host{--tooptip-width:${width}};`}</style>
        </host>
    );
}

tooltip.props = {
    show: {
        type: Boolean,
        reflect: true,
    },
    position: {
        type: String,
        reflect: true,
    },
    width: String,
};

tooltip.styles = css`
    :host {
        position: relative;
        display: inline-block;
        min-width: 100%;
    }
    :host([show]) .tooltip {
        visibility: visible;
    }
    :host([position~="top"]) .tooltip {
        bottom: 100%;
    }
    :host([position~="center"]) .tooltip {
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
    :host([position~="right"]) .tooltip {
        right: 0px;
    }
    .tooltip {
        width: var(--tooptip-width, auto);
        position: absolute;
        visibility: hidden;
        z-index: 1;
        background: white;
        border-radius: 0.5rem;
        padding: 1rem;
        box-sizing: border-box;
        box-shadow: 0px 12px 40px -20px #000000;
    }
`;

export const Tooltip = c(tooltip);
