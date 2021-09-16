import { c, css } from "atomico";
import { tokensCard } from "../tokens";

/**
 *
 * @param {import("atomico").Props<alert.props>} props
 */
function alert({ theme }) {
    return (
        <host shadowDom>
            <div
                class="card-box card-box--border"
                style={
                    theme && {
                        "--border-color": `var(--theme)`,
                    }
                }
            >
                <div class="icon">
                    <slot name="icon">
                        <svg
                            width="31.89"
                            height="27.336"
                            viewBox="0 0 31.89 27.336"
                        >
                            <path
                                d="M-3350.066-59.292h-21.869a4.937,4.937,0,0,1-4.378-2.585,4.939,4.939,0,0,1,.149-5.083l10.935-17.335A4.973,4.973,0,0,1-3361-86.628a4.975,4.975,0,0,1,4.229,2.333l10.934,17.335a4.937,4.937,0,0,1,.15,5.083A4.937,4.937,0,0,1-3350.066-59.292ZM-3361-72.428a1.86,1.86,0,0,0-1.857,1.858v4.952A1.86,1.86,0,0,0-3361-63.761a1.859,1.859,0,0,0,1.857-1.858v-4.952A1.859,1.859,0,0,0-3361-72.428Zm0-6.19a1.859,1.859,0,0,0-1.857,1.857A1.86,1.86,0,0,0-3361-74.9a1.859,1.859,0,0,0,1.857-1.858A1.859,1.859,0,0,0-3361-78.619Z"
                                transform="translate(3376.945 86.628)"
                                fill="var(--theme)"
                            />
                        </svg>
                    </slot>
                </div>
                <slot></slot>
            </div>
            <style>{
                /*css*/ `:host{--theme: var(--${theme}, currentColor)}`
            }</style>
        </host>
    );
}

alert.props = {
    theme: {
        type: String,
        reflect: true,
        value: "primary",
    },
};

alert.styles = [
    tokensCard,
    css`
        .card-box {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1em;
        }
        .icon {
            padding-top: 0.5em;
        }
    `,
];

export const Alert = c(alert);
