import { c, css } from "atomico";
import { tokensNavigation } from "../tokens";
/**
 *
 * @param {import("atomico").Props<navigationItem.props>} props
 */
function navigationItem(props) {
    return (
        <host shadowDom>
            <div class="navigation-item">
                <slot></slot>
                {!!props.for && (
                    <div class="navigation-dropbox-icon">
                        <slot name="icon-dropdown">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                viewBox="0 0 10.486 6.242"
                            >
                                <path
                                    d="M-7.051,242.364l-4.243-4.243a1,1,0,0,1,0-1.414,1,1,0,0,1,1.415,0l3.535,3.535,3.535-3.535a1,1,0,0,1,1.415,0,1,1,0,0,1,0,1.414l-4.243,4.243a1,1,0,0,1-.707.293A1,1,0,0,1-7.051,242.364Z"
                                    transform="translate(11.586 -236.414)"
                                    fill="var(--color-primary)"
                                />
                            </svg>
                        </slot>
                    </div>
                )}
            </div>
        </host>
    );
}

navigationItem.props = {
    for: {
        type: String,
        reflect: true,
    },
    displayed: {
        type: String,
        reflect: true,
    },
};

navigationItem.styles = [
    tokensNavigation,
    css`
        .navigation-item {
            display: flex;
            padding: calc(var(--space-y) / 2) 0;
            align-items: center;
            position: relative;
            justify-content: space-between;
            box-sizing: border-box;
        }
        .navigation-dropbox-icon {
            opacity: 0.25;
            transition: 0.3s ease all;
            display: flex;
            margin: auto 0px;
        }
        :host:hover .navigation-dropbox-icon,
        :host([displayed]) .navigation-dropbox-icon {
            opacity: 1;
        }
        :host([displayed]) {
            font-weight: bold;
        }
    `,
];

export const NavigationItem = c(navigationItem);
