import { c, css, useHost, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { usePromise } from "@atomico/hooks/use-promise";
import customElements from "../custom-elements";

const globalIcon = {};

function icon({ type, size, define }) {
    const {
        current: { constructor },
    } = useHost();

    const refDefine = useRef();

    const slotDefine = useSlot(refDefine).filter(
        (el) => el instanceof SVGElement
    );

    const [icon] = usePromise(
        async () => {
            const alias = define || type;
            if (alias && !globalIcon[alias]) {
                let resolve;
                globalIcon[alias] = new Promise((r) => (resolve = r));
                globalIcon[alias].resolve = resolve;
            }

            if (define && slotDefine.length) {
                const [Icon] = slotDefine;
                globalIcon[alias].resolve(<Icon />);
            }

            return globalIcon[alias];
        },
        !constructor[type] || define,
        slotDefine
    );

    return (
        <host shadowDom>
            {constructor[type] || icon}
            <style>
                {size &&
                    /*css*/ `
                :host{
                    --size: ${size};
                }
            `}
            </style>
            {define && <slot ref={refDefine}></slot>}
        </host>
    );
}

icon.props = {
    type: {
        type: String,
        reflect: true,
        value: "check",
    },
    size: {
        type: String,
        reflect: true,
    },
    define: {
        type: String,
        reflect: true,
    },
};

icon.styles = css`
    :host {
        display: inline-flex;
        align-items: center;
        justify-items: center;
    }
    svg {
        width: var(--size, 1em);
        margin: auto;
    }
    path {
        fill: var(--color-status, var(--color-current-contrast, currentColor));
    }
    :host([define]) {
        display: none;
    }
`;

export const Icon = c(
    icon,
    class extends HTMLElement {
        static check = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-74.05-527.28l-4.243-4.243a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0l3.536,3.536,8.486-8.486a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.415l-9.193,9.192a1,1,0,0,1-.707.293A1,1,0,0,1-74.05-527.28Z"
                    transform="translate(79 540.594)"
                />
            </svg>
        );
        static down = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-77.757-523.514a1,1,0,0,1,0-1.414l5.657-5.657-5.657-5.657a1,1,0,0,1,0-1.415,1,1,0,0,1,1.415,0l6.364,6.364a1,1,0,0,1,.293.707,1,1,0,0,1-.293.707l-6.364,6.364a1,1,0,0,1-.707.293A1,1,0,0,1-77.757-523.514Z"
                    transform="translate(-522.439 81.898) rotate(90)"
                />
            </svg>
        );
        static up = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M.293.293a1,1,0,0,0,0,1.414L5.949,7.364.293,13.021a1,1,0,0,0,1.415,1.415L8.072,8.072a1,1,0,0,0,0-1.415L1.708.293a1,1,0,0,0-1.415,0Z"
                    transform="translate(0.782 12.212) rotate(-90)"
                />
            </svg>
        );

        static left = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-69.979-523.514a1,1,0,0,0,0-1.414l-5.657-5.657,5.657-5.657a1,1,0,0,0,0-1.415,1,1,0,0,0-1.415,0l-6.364,6.364a1,1,0,0,0-.293.707,1,1,0,0,0,.293.707l6.364,6.364a1,1,0,0,0,.707.293A1,1,0,0,0-69.979-523.514Z"
                    transform="translate(82.014 538.615)"
                />
            </svg>
        );
        static right = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-77.757-523.514a1,1,0,0,1,0-1.414l5.657-5.657-5.657-5.657a1,1,0,0,1,0-1.415,1,1,0,0,1,1.415,0l6.364,6.364a1,1,0,0,1,.293.707,1,1,0,0,1-.293.707l-6.364,6.364a1,1,0,0,1-.707.293A1,1,0,0,1-77.757-523.514Z"
                    transform="translate(82.014 538.615)"
                />
            </svg>
        );

        static alert = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-3363.46-72.913h-10.972a2.478,2.478,0,0,1-2.2-1.3,2.48,2.48,0,0,1,.075-2.55l5.487-8.7a2.5,2.5,0,0,1,2.122-1.17,2.5,2.5,0,0,1,2.122,1.17l5.486,8.7a2.477,2.477,0,0,1,.075,2.55A2.477,2.477,0,0,1-3363.46-72.913Zm-5.486-6.591a.933.933,0,0,0-.932.932v2.485a.933.933,0,0,0,.932.932.933.933,0,0,0,.932-.932v-2.485a.933.933,0,0,0-.936-.928Zm0-3.106a.933.933,0,0,0-.932.932.933.933,0,0,0,.932.932.933.933,0,0,0,.932-.932.932.932,0,0,0-.275-.66.933.933,0,0,0-.661-.272Z"
                    transform="translate(3376.948 87.773)"
                />
            </svg>
        );
        static closed = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-60.443-518.378l-4.243-4.243-4.243,4.243a1,1,0,0,1-1.414,0,1,1,0,0,1,0-1.414l4.243-4.243-4.243-4.243a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0l4.243,4.243,4.243-4.243a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-4.243,4.243,4.243,4.243a1,1,0,0,1,0,1.414,1,1,0,0,1-.707.293A1,1,0,0,1-60.443-518.378Z"
                    transform="translate(72.636 531.984)"
                />
            </svg>
        );

        static avatar = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-29.9,246.564A6.006,6.006,0,0,1-31.918,243h11.835a6,6,0,0,1-2.022,3.564A6,6,0,0,1-26,248,6,6,0,0,1-29.9,246.564ZM-22,236a2,2,0,0,1,2-2,2,2,0,0,1,2,2,2,2,0,0,1-2,2A2,2,0,0,1-22,236Zm-12,0a2,2,0,0,1,2-2,2,2,0,0,1,2,2,2,2,0,0,1-2,2A2,2,0,0,1-34,236Z"
                    transform="translate(34 -233)"
                />
            </svg>
        );
        static menu = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-34,246a1,1,0,0,1-1-1,1,1,0,0,1,1-1h14a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm0-5a1,1,0,0,1-1-1,1,1,0,0,1,1-1h14a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm0-5a1,1,0,0,1-1-1,1,1,0,0,1,1-1h14a1,1,0,0,1,1,1,1,1,0,0,1-1,1Z"
                    transform="translate(35 -232)"
                />
            </svg>
        );
        static lock = (
            <svg viewBox="0 0 16 16">
                <g transform="translate(-280 -1823)">
                    <path
                        d="M-34,250a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1h2v-2a4,4,0,0,1,4-4,4,4,0,0,1,4,4v2h2a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1Zm4-6a2.009,2.009,0,0,0,1,1.732V247a1,1,0,0,0,1,1,1,1,0,0,0,1-1v-1.268A2.005,2.005,0,0,0-26,244a2,2,0,0,0-2-2A2,2,0,0,0-30,244Zm4-4v-2a2,2,0,0,0-2-2,2,2,0,0,0-2,2v2Z"
                        transform="translate(316 1589)"
                    />
                </g>
            </svg>
        );
        static video = (
            <svg viewBox="0 0 16 16">
                <g transform="translate(-208 -1856)">
                    <path
                        d="M-17,248a1,1,0,0,1-1-1V235a1,1,0,0,1,1-1H-3a1,1,0,0,1,1,1v12a1,1,0,0,1-1,1Zm13-2V236H-16v10Z"
                        transform="translate(226 1623)"
                    />
                    <path
                        d="M2.636,1.481a1,1,0,0,1,1.728,0L6.123,4.5A1,1,0,0,1,5.259,6H1.741A1,1,0,0,1,.877,4.5Z"
                        transform="translate(219.5 1860.5) rotate(90)"
                    />
                </g>
            </svg>
        );
        static image = (
            <svg viewBox="0 0 16 16">
                <g transform="translate(-208 -1856)">
                    <path
                        d="M-14.1,245a1,1,0,0,1-.823-1.566l3.6-5.235a1,1,0,0,1,1.648,0l3.6,5.235A1,1,0,0,1-6.9,245Zm-2.9-9.5a1.5,1.5,0,0,1,1.5-1.5,1.5,1.5,0,0,1,1.5,1.5,1.5,1.5,0,0,1-1.5,1.5A1.5,1.5,0,0,1-17,235.5Z"
                        transform="translate(229 1626)"
                        opacity="0.75"
                    />
                    <path
                        d="M-10.164,242H-15a.994.994,0,0,1-.894-.553A1,1,0,0,1-15.8,240.4l2.5-3.334a.993.993,0,0,1,.8-.4.991.991,0,0,1,.8.4l1.613,2.151-.836,1.216a.985.985,0,0,0-.061,1.033.977.977,0,0,0,.82.532Z"
                        transform="translate(225 1629)"
                        opacity="0.5"
                    />
                    <path
                        d="M-17,248a1,1,0,0,1-1-1V235a1,1,0,0,1,1-1H-3a1,1,0,0,1,1,1v12a1,1,0,0,1-1,1Zm13-2V236H-16v10Z"
                        transform="translate(226 1623)"
                    />
                </g>
            </svg>
        );
        static audio = (
            <svg viewBox="0 0 16 16">
                <g transform="translate(-208 -1856)">
                    <rect
                        width="4"
                        height="9"
                        rx="2"
                        transform="translate(214 1857)"
                    />
                    <path
                        d="M-13,241v-1.1a5.009,5.009,0,0,1-4-4.9,1,1,0,0,1,1-1,1,1,0,0,1,1,1c0,.012,0,.023,0,.034a2.985,2.985,0,0,0,.88,2.086A2.98,2.98,0,0,0-12,238a3,3,0,0,0,3-3,1,1,0,0,1,1-1,1,1,0,0,1,1,1,5.008,5.008,0,0,1-4,4.9V241a1,1,0,0,1-1,1A1,1,0,0,1-13,241Z"
                        transform="translate(228 1629)"
                        opacity="0.75"
                    />
                </g>
            </svg>
        );
        static asterisk = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-74.3-527v-3.267l-2.83,1.634A1,1,0,0,1-78.5-529a1,1,0,0,1,.365-1.366L-75.3-532l-2.83-1.634A1,1,0,0,1-78.5-535a1,1,0,0,1,1.366-.365l2.83,1.634V-537a1,1,0,0,1,1-1,1,1,0,0,1,1,1v3.268l2.83-1.633a1,1,0,0,1,1.366.365,1,1,0,0,1-.366,1.366L-71.3-532l2.83,1.634A1,1,0,0,1-68.107-529a1,1,0,0,1-1.366.366l-2.83-1.634V-527a1,1,0,0,1-1,1A1,1,0,0,1-74.3-527Z"
                    transform="translate(81.634 540)"
                />
            </svg>
        );
        static plus = (
            <svg viewBox="0 0 16 16.001">
                <path
                    d="M-2032.95,115.051v-6h-6a1,1,0,0,1-1-1,1,1,0,0,1,1-1h6v-6a1,1,0,0,1,1-1,1,1,0,0,1,1,1v6h6a1,1,0,0,1,1,1,1,1,0,0,1-1,1h-6v6a1,1,0,0,1-1,1A1,1,0,0,1-2032.95,115.051Z"
                    transform="translate(116.051 2039.95) rotate(90)"
                />
            </svg>
        );
        static dash = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M1,0H13a1,1,0,0,1,0,2H1A1,1,0,0,1,1,0Z"
                    transform="translate(1 6.952)"
                />
            </svg>
        );
        static copy = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-75-525a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1Zm1-2h6v-6h-6Zm-5-2v-8a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1,1,1,0,0,1-1,1h-7v7a1,1,0,0,1-1,1A1,1,0,0,1-79-529Z"
                    transform="translate(81 540)"
                />
            </svg>
        );
        static options = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-69-536.5a1.5,1.5,0,0,1,1.5-1.5,1.5,1.5,0,0,1,1.5,1.5,1.5,1.5,0,0,1-1.5,1.5A1.5,1.5,0,0,1-69-536.5Zm-5,0a1.5,1.5,0,0,1,1.5-1.5,1.5,1.5,0,0,1,1.5,1.5,1.5,1.5,0,0,1-1.5,1.5A1.5,1.5,0,0,1-74-536.5Zm-5,0a1.5,1.5,0,0,1,1.5-1.5,1.5,1.5,0,0,1,1.5,1.5,1.5,1.5,0,0,1-1.5,1.5A1.5,1.5,0,0,1-79-536.5Z"
                    transform="translate(80.5 544.5)"
                />
            </svg>
        );
        static config = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-72-524.8c-.1,0-.2,0-.3-.008a8.585,8.585,0,0,0-2.2-1.716,8.73,8.73,0,0,0-2.553-1.041,6.022,6.022,0,0,1-.319-.564A8.732,8.732,0,0,0-77-530.852a8.727,8.727,0,0,0-.372-2.724,6.026,6.026,0,0,1,.319-.564,8.694,8.694,0,0,0,2.553-1.042,8.6,8.6,0,0,0,2.2-1.715c.1-.005.2-.008.3-.008s.2,0,.3.007a8.587,8.587,0,0,0,2.2,1.715,8.692,8.692,0,0,0,2.553,1.042,6.025,6.025,0,0,1,.32.564A8.716,8.716,0,0,0-67-530.852a8.734,8.734,0,0,0,.372,2.726,6.024,6.024,0,0,1-.32.564,8.7,8.7,0,0,0-2.553,1.041,8.6,8.6,0,0,0-2.2,1.716C-71.8-524.8-71.9-524.8-72-524.8Zm0-8.054a2,2,0,0,0-2,2,2,2,0,0,0,2,2,2,2,0,0,0,2-2A2,2,0,0,0-72-532.851Z"
                    transform="translate(80 538.851)"
                />
            </svg>
        );
    }
);

customElements.define("icon", Icon);
