import { c, css, useHost } from "atomico";

function icon({ type, size }) {
    const {
        current: { constructor },
    } = useHost();

    return (
        <host shadowDom>
            {constructor[type]}
            <style>
                {size &&
                    /*css*/ `
                :host{
                    --size: ${size};
                }
            `}
            </style>
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
};

icon.styles = css`
    :host {
        display: inline-flex;
        align-items: center;
        justify-items: center;
    }
    svg {
        width: var(--size, 1rem);
        margin: auto;
    }
    path {
        fill: currentColor;
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
    }
);
