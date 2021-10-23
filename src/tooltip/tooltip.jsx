import { c, css, useRef, useHost, useProp, useState, useEffect } from "atomico";
import { useListener } from "@atomico/hooks/use-listener";
import { useChannel } from "@atomico/hooks/use-channel";
import { tokensColor, tokensShadow, tokensSpace } from "../tokens";

/**
 *
 * @param {import("atomico").Props<tooltip.props>} props
 */
function tooltip({ width, showWithOver }) {
    const host = useHost();
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

    const [parentShowWithOver, setShowWithOver] = useChannel(
        "ToolTipShowWithOver"
    );

    showWithOver = parentShowWithOver || showWithOver;

    useEffect(() => setShowWithOver(showWithOver), [showWithOver]);

    const handlerShow = (event) => {
        event.stopPropagation();

        const { x, y } = host.current.getBoundingClientRect();

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
    };

    handlerShow.capture = true;

    return (
        <host
            shadowDom
            onmouseover={() => setInside(true)}
            onmouseleave={() => {
                setInside(false);
                showWithOver && setShow(false);
            }}
        >
            <slot
                onclick={handlerShow}
                onmouseover={showWithOver && handlerShow}
                ref={refSlot}
                name="action"
            ></slot>
            <div class="tooltip">
                <div class="tooltip-mask" ref={refSlotTooptip}>
                    <slot></slot>
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
    showWithOver: {
        type: Boolean,
        reflect: true,
    },
    position: {
        type: String,
        reflect: true,
    },
    width: String,
};

tooltip.styles = [
    tokensShadow,
    tokensColor,
    tokensSpace,
    css`
        :host {
            --color-fill: var(--color-current-layer, var(--color-box-layer));
            --color-contrast: var(
                --color-current-contrast,
                var(--color-box-contrast)
            );
            --shadow: var(--shadow-layer);
            position: relative;
            display: inline-flex;
        }

        :host([show]) .tooltip {
            visibility: visible;
        }

        :host([position~="top"]) .tooltip {
            bottom: 100%;
        }

        :host([position~="bottom"]) .tooltip {
            top: 100%;
        }

        :host([position~="center"]) .tooltip {
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
        }

        :host([position~="right"]) .tooltip {
            right: 0px;
        }

        ::slotted([slot="action"]:not([disabled])) {
            cursor: pointer;
        }

        ::slotted(*) {
            min-width: var(--tooltip-current-width);
        }

        ::slotted(:not([slot="action"])) {
            min-width: 100%;
        }

        .tooltip {
            width: var(--tooptip-width, auto);
            --tooltip-current-width: 100%;
            position: absolute;
            visibility: hidden;
            z-index: 1;
            background: var(--color-fill);
            border-radius: 0.5rem;
            padding: var(--space-around);
            box-sizing: border-box;
            box-shadow: var(--shadow);
        }
    `,
];

export const Tooltip = c(tooltip);
