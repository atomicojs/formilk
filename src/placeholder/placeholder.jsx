import { c, css, useProp, useRef, useEffect } from "atomico";
import { tokensColor, tokensTransition } from "../tokens";
import { Icon } from "../icon/icon";
import { useSlot } from "@atomico/hooks/use-slot";
import { addListener } from "@atomico/hooks/use-listener";
import { useResponsiveState } from "@atomico/hooks/use-responsive-state";

/**
 *
 * @param {import("atomico").Props<placeholder.props>} props
 */
function placeholder({ type, scale }) {
    const [, setLoad] = useProp("load");
    const refSlot = useRef();
    const slots = useSlot(refSlot);
    useEffect(() => {
        const unlisteners = slots.map((el) =>
            addListener(el, "load", () => {
                setLoad(true);
            })
        );
        return () => unlisteners.forEach((unlistener) => unlistener());
    }, slots);

    const currentScale = useResponsiveState(scale);

    return (
        <host shadowDom>
            {["audio", "video", "image", "media"].includes(type) ? (
                <div class="placeholder-fill placeholder-media">
                    {currentScale && (
                        <svg
                            viewBox={`0 0 ${currentScale.split(":").join(" ")}`}
                        ></svg>
                    )}
                    <div class="placeholder-layer">
                        <slot name="icon">
                            <Icon type={type} size="1.5rem"></Icon>
                        </slot>
                    </div>
                    <div class="placeholder-layer placeholder-hidden">
                        <slot ref={refSlot}></slot>
                    </div>
                </div>
            ) : (
                <span class="placeholder-fill placeholder-text">
                    <span class="placeholder-hidden">
                        <slot></slot>
                    </span>
                </span>
            )}
        </host>
    );
}

placeholder.props = {
    type: {
        type: String,
        reflect: true,
    },
    scale: {
        type: String,
        reflect: true,
    },
    load: {
        type: Boolean,
        reflect: true,
    },
};

placeholder.styles = [
    tokensColor,
    tokensTransition,
    css`
        :host {
            --color-fill: var(--color-current-layer, var(--color-box-layer));
        }
        svg {
            display: block;
        }
        .placeholder-fill {
            background: var(--color-fill);
        }
        .placeholder-media {
            display: grid;
            position: relative;
            overflow: hidden;
        }
        .placeholder-layer {
            width: 100%;
            height: 100%;
            display: grid;
            position: absolute;
            top: 0px;
        }
        .placeholder-text {
            display: inline-flex;
            align-items: center;
        }
        .placeholder-hidden {
            opacity: 0;
            transition: var(--transition-x1);
        }
        ::slotted(*) {
            margin: 0px;
        }
        ::slotted(img),
        ::slotted(iframe),
        ::slotted(video) {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        :host([load]) .placeholder-fill {
            background: transparent;
        }
        :host([load]) .placeholder-hidden {
            opacity: 1;
        }
    `,
];

export const Placeholder = c(placeholder);
