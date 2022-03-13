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
    DOMListener,
} from "atomico";
import { useListener } from "@atomico/hooks/use-listener";
import { useChannel } from "@atomico/hooks/use-channel";
import {
    cssBase,
    tokensColor,
    tokensShadow,
    tokensBorder,
    tokensTransition,
    cssBaseColors,
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
        { current: window },
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

    const listenerShow: DOMListener<DOMEvent> = (event) => {
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

    listenerShow.capture = true;

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
                onclick={listenerShow}
                onmouseover={showWithOver ? listenerShow : null}
                ref={refSlot}
                name="action"
            ></slot>
            <div class="dropdown-mask">
                <div class="dropdown" ref={refSlotTooptip}>
                    <slot></slot>
                </div>
            </div>
            <style>
                {width &&
                    `:host{--tooptip-width:var(--tooptip-parent-width,${width})};`}
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
    cssBase,
    cssBaseColors,
    css`
        :host {
            --transform: none;
            --left: auto;
            --top: auto;
            --bottom: auto;
            --visibility: hidden;
            --dir: 1;
            --transition: 0.25s ease all;
            position: relative;
        }
        :host([position*="center"]) {
            --left: 50%;
            --transform: translateX(-50%);
        }
        :host([position*="top"]) {
            --bottom: 100%;
            --dir: -1;
        }
        :host([position*="bottom"]) {
            --top: 100%;
        }
        :host([show]) {
            --visibility: visible;
        }
        .dropdown-mask {
            transform: var(--transform);
            left: var(--left);
            top: var(--top);
            bottom: var(--bottom);
            position: absolute;
            visibility: var(--visibility);
            padding: var(--scale) 0;
            box-sizing: border-box;
        }
        .dropdown {
            --tooptip-parent-width: var(--tooptip-width);
            width: var(--tooptip-width);
            display: grid;
            background: var(--color-layer-60);
            border-radius: var(--border-radius);
            padding: var(--scale) 0;
            box-sizing: border-box;
            transform: translateY(calc(var(--size-xxs) * var(--dir)));
            transition: var(--transition);
            opacity: 0;
            border: var(--border-width) solid var(--color-layer-30);
        }
        :host([show]) .dropdown {
            transform: translateY(0px);
            opacity: 1;
        }
    `,
];

export const Dropdown = c(dropdown);

customElements.define("dropdown", Dropdown);
