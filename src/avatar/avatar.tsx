import { Props, c, css } from "atomico";
import customElements from "../custom-elements";
import { Icon } from "../icon/icon";
import { tokensBox, tokensColor, tokensBorder } from "../tokens";

function avatar({ src, size, transform }: Props<typeof avatar>) {
    return (
        <host shadowDom>
            <button class="avatar-mask" part="avatar-mask">
                <div class="avatar-inner" part="avatar-inner">
                    <slot>
                        {src ? (
                            <img class="avatar-img" src={src} />
                        ) : (
                            <Icon type="avatar" size="50%" />
                        )}
                    </slot>
                </div>
            </button>
            <style>{
                /*css*/ `:host{--size:${size};${
                    transform ? `--transform:${transform}` : ""
                }}`
            }</style>
        </host>
    );
}

avatar.props = {
    src: String,
    size: {
        type: String,
        reflect: true,
    },
    transform: {
        type: String,
        reflect: true,
    },
};

avatar.styles = [
    tokensBox,
    tokensColor,
    tokensBorder,
    css`
        :host {
            --color-fill: var(--color-current-layer, var(--color-box-fill));
            --color-divide: var(
                --color-current-divide,
                var(--color-box-divide)
            );
            --color-contrast: var(
                --color-current-contrast,
                var(--color-box-contrast)
            );
            display: inline-flex;
            align-items: center;
            justify-items: center;
        }
        :host(:not([size])) {
            --size: var(--size-min);
        }
        .avatar-mask {
            width: var(--size);
            height: var(--size);
            overflow: hidden;
            border-radius: var(--border-radius);
            border: calc(var(--border-width) * 2) solid var(--color-divide);
            background: var(--color-fill);
            padding: 0px;
            cursor: unset;
            margin: auto;
        }
        .avatar-inner {
            width: 100%;
            height: 100%;
            transform: var(--transform);
            align-items: center;
            justify-items: center;
            display: flex;
        }
        ::slotted(*),
        .avatar-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
    `,
];

export const Avatar = c(avatar);

customElements.define("avatar", Avatar);
