import {
    Props,
    c,
    css,
    useRef,
    useHost,
    useProp,
    useState,
    useEffect,
    DOMEvent,
} from "atomico";
import { useListener } from "@atomico/hooks/use-listener";
import { useChannel } from "@atomico/hooks/use-channel";
import {
    tokensBox,
    tokensColor,
    tokensShadow,
    tokensBorder,
    tokensTransition,
} from "../tokens";
import customElements from "../custom-elements";

function dropdown({ width, showWithOver, offset }: Props<typeof dropdown>) {
    const host = useHost();
    const refSlot = useRef();
    const refSlotTooptip = useRef();
    const [show, setShow] = useProp("show");
    const [, setPosition] = useProp("position");
    const [inside, setInside] = useState(false);

    useListener(
        { current: document.createElement("div") },
        "click",
        show && !inside && (() => setShow(false))
    );

    const [parentShowWithOver, setShowWithOver] = useChannel<boolean>(
        "DropdownShowWithOver"
    );

    showWithOver = parentShowWithOver || showWithOver;

    useEffect(() => {
        setShowWithOver(showWithOver);
    }, [showWithOver]);

    const handlerShow = (event: DOMEvent) => {
        let { target } = event as { target: Element | null };

        while (target) {
            if (target?.hasAttribute("dropdown-ignore")) {
                return;
            }
            if (target === host.current) break;
            target = target.parentElement;
        }

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
                onmouseover={showWithOver ? handlerShow : null}
                ref={refSlot}
                name="action"
            ></slot>
            <div class="dropdown-mask">
                <div class="dropdown" ref={refSlotTooptip}>
                    <slot></slot>
                </div>
            </div>
            <style>
                {width && `:host{--tooptip-width:${width}};`}
                {offset && `:host{--tooptip-offset:${offset}};`}
            </style>
        </host>
    );
}

dropdown.props = {
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
    widthFull: {
        type: Boolean,
        reflect: true,
    },
    offset: {
        type: String,
        value: "0px",
    },
};

dropdown.styles = [
    tokensBox,
    tokensColor,
    tokensShadow,
    tokensBorder,
    tokensTransition,
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

        .dropdown-mask {
            position: absolute;
            transform: scale(0);
            z-index: 1;
            transition-delay: var(--transition-s0);
            padding: var(--tooptip-offset) 0px;
        }

        :host([show]) .dropdown-mask {
            transform: scale(1);
            transition-delay: 0s;
        }

        :host([width-full]) .dropdown-mask {
            min-width: 100%;
        }

        :host([position~="top"]) .dropdown-mask {
            bottom: 100%;
        }

        :host([position~="bottom"]) .dropdown-mask {
            top: 100%;
        }

        :host([position~="center"]) .dropdown-mask {
            left: 50%;
            transform: translateX(-50%) scale(0);
        }

        :host([show][position~="center"]) .dropdown-mask {
            transform: translateX(-50%);
        }

        :host([position~="right"]) .dropdown-mask {
            right: 0px;
        }

        ::slotted([slot="action"]:not([disabled])) {
            cursor: pointer;
        }

        ::slotted(*) {
            min-width: var(--dropdown-current-width);
        }

        ::slotted(:not([slot="action"])) {
            min-width: 100%;
        }

        :host([position~="top"]) {
            --move-y: 10%;
        }

        :host([position~="bottom"]) {
            --move-y: -10%;
        }

        :host([show]) .dropdown {
            opacity: 1;
            transform: translateY(0);
        }

        .dropdown {
            --dropdown-current-width: 100%;
            width: var(--tooptip-width, auto);
            z-index: 1;
            background: var(--color-fill);
            border-radius: var(--border-radius);
            padding: var(--space-around);
            box-sizing: border-box;
            box-shadow: var(--shadow);
            opacity: 0;
            transition: var(--transition-x0);
            transform: translateY(var(--move-y));
        }
    `,
];

export const Dropdown = c(dropdown);

customElements.define("dropdown", Dropdown);
