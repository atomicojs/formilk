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
import { computePosition, flip, shift } from "@floating-ui/dom";
import tokens from "../tokens";
import customElements from "../system";

function dropdown({ width, showWithOver }: Props<typeof dropdown>) {
    const host = useHost();
    const refSlot = useRef();
    const refMask = useRef();
    const refSlotTooptip = useRef();
    const [show, setShow] = useProp("show");
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

        computePosition(host.current, refMask.current, {
            middleware: [
                flip({
                    fallbackPlacements: ["top", "bottom"],
                }),
                shift(),
            ],
        }).then(({ x, y }) => {
            refMask.current.style = `--left: ${x}px; --top:${y}px`;
        });

        setShow(true);
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
            <div class="dropdown-mask" ref={refMask}>
                <div class="dropdown" ref={refSlotTooptip}>
                    <slot></slot>
                </div>
            </div>
            <style>
                {width &&
                    `:host{--tooptip-width:var(--tooptip-parent-width,${width})};`}
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
    width: String,
    widthFull: {
        type: Boolean,
        reflect: true,
    },
};

dropdown.styles = [
    tokens,
    css`
        :host {
            --transform: none;
            --left: auto;
            --top: auto;
            --bottom: auto;
            --visibility: hidden;
            --transition: 0.25s ease all;
            position: relative;
            z-index: 2;
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
            padding: var(--size-xxs) 0;
            box-sizing: border-box;
        }
        .dropdown {
            --tooptip-parent-width: var(--tooptip-width);
            width: var(--tooptip-width);
            display: grid;
            background: var(--color-layer-60);
            border-radius: var(--border-radius);
            padding: var(--size) 0;
            box-sizing: border-box;
            transform: translateY(calc(var(--size-xxs) * var(--dir)));
            transition: var(--transition);
            opacity: 0;
            border: var(--border-width) solid var(--color-layer-30);
            box-shadow: var(--shadow-layer);
        }
        :host([show]) .dropdown {
            transform: translateY(0px);
            opacity: 1;
        }
    `,
];

export const Dropdown = c(dropdown);

customElements.define("dropdown", Dropdown);
