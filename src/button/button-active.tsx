import { Host, c, css, useState } from "atomico";
import { getCoordinates } from "@atomico/hooks/use-click-coordinates";
import customElements from "../system";

function buttonActive(): Host<{ setEvent(event: MouseEvent): void }> {
    const [state, setState] = useState<{
        pending?: boolean;
        offset?: { x: number; y: number };
    }>();

    return (
        <host
            shadowDom
            setEvent={(event: PointerEvent) => {
                const { offset } = getCoordinates(event);
                setState((state) =>
                    state?.pending ? state : { offset, pending: true }
                );
            }}
        >
            <div
                style={
                    state?.offset
                        ? `--x:${state?.offset?.x}px; --y:${state?.offset?.y}px`
                        : ""
                }
                class={state?.pending ? "show" : ""}
                onanimationend={() => setState({})}
            ></div>
        </host>
    );
}

buttonActive.styles = css`
    :host {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        display: block;
        overflow: hidden;
        --background: rgba(0, 0, 0, 0.05);
    }
    div {
        width: 10px;
        height: 10px;
        position: absolute;
        top: calc(var(--y) - 5px);
        left: calc(var(--x) - 5px);
        opacity: 0;
        background: var(--background);
        border-radius: 100%;
    }
    .show {
        transform: scale(2);
        opacity: 1;
        animation: scale 0.5s ease 1;
    }
    @keyframes scale {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: scale(10);
            opacity: 0;
        }
    }
`;

export const ButtonActive = c(buttonActive);

customElements.define("button-active", ButtonActive);
