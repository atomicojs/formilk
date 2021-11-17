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
                    d="M-1529.11,12.371a1.424,1.424,0,0,1-.958-.368c-.018-.016-.036-.033-.053-.051l-4.044-4.044a1.429,1.429,0,0,1,0-2.021,1.431,1.431,0,0,1,2.023,0l3.032,3.033,8.087-8.087a1.429,1.429,0,0,1,2.021,0,1.429,1.429,0,0,1,0,2.021l-9.1,9.1a1.423,1.423,0,0,1-1.01.419Z"
                    transform="translate(1534.583 1.606)"
                />
            </svg>
        );
        static down = (
            <svg viewBox="0 0 16 16">
                <path
                    d="M-4.666,245.492l-6.474-6.474a1.525,1.525,0,0,1,0-2.157,1.527,1.527,0,0,1,2.159,0l5.394,5.394,5.394-5.394a1.526,1.526,0,1,1,2.159,2.157l-6.474,6.474a1.522,1.522,0,0,1-1.079.447,1.522,1.522,0,0,1-1.079-.447Z"
                    transform="translate(11.587 -232.414)"
                />
            </svg>
        );
        static up = (
            <svg viewBox="0 0 16 16">
                <g transform="translate(-208 -1856)">
                    <path
                        d="M-4.666,236.861l-6.474,6.474a1.525,1.525,0,0,0,0,2.157,1.527,1.527,0,0,0,2.159,0l5.394-5.394,5.394,5.394a1.526,1.526,0,1,0,2.159-2.157l-6.474-6.474a1.522,1.522,0,0,0-1.079-.447,1.522,1.522,0,0,0-1.079.447Z"
                        transform="translate(219.587 1622.824)"
                    />
                </g>
            </svg>
        );

        static left = (
            <svg viewBox="0 0 16 16">
                <g transform="translate(-208 -1856)">
                    <path
                        d="M-4.666,236.861l-6.474,6.474a1.525,1.525,0,0,0,0,2.157,1.527,1.527,0,0,0,2.159,0l5.394-5.394,5.394,5.394a1.526,1.526,0,1,0,2.159-2.157l-6.474-6.474a1.522,1.522,0,0,0-1.079-.447,1.522,1.522,0,0,0-1.079.447Z"
                        transform="translate(-25.176 1860.413) rotate(-90)"
                    />
                </g>
            </svg>
        );
        static right = (
            <svg viewBox="0 0 16 16">
                <g transform="translate(-208 -1856)">
                    <path
                        d="M6.921,9.078.447,2.6A1.526,1.526,0,0,1,2.606.447L8,5.841,13.394.447A1.526,1.526,0,1,1,15.553,2.6L9.079,9.078a1.526,1.526,0,0,1-2.158,0Z"
                        transform="translate(211.238 1872) rotate(-90)"
                    />
                </g>
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
                    d="M20.89,22.791l-5.7-5.7-5.705,5.7a1.344,1.344,0,1,1-1.9-1.9l5.7-5.705L7.579,9.48a1.345,1.345,0,1,1,1.9-1.9l5.705,5.705,5.705-5.7a1.344,1.344,0,1,1,1.9,1.9l-5.7,5.705,5.7,5.7a1.345,1.345,0,1,1-1.9,1.9Z"
                    transform="translate(-7.186 -7.185)"
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
    }
);

customElements.define("icon", Icon);
