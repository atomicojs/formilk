import { c, css } from "atomico";
import { Icon } from "../icon/icon";
import { tokensSize, tokensBorder, tokensColor } from "../tokens";

/**
 *
 * @param {import("atomico").Props<avatar.props>} props
 */
function avatar({ src, size, transform }) {
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
        value: "var(--size-min)",
    },
    transform: {
        type: String,
        reflect: true,
    },
};

avatar.styles = [
    tokensSize,
    tokensColor,
    tokensBorder,
    css`
        :host {
            display: inline-flex;
            align-items: center;
            justify-items: center;
        }
        .avatar-mask {
            width: var(--size);
            height: var(--size);
            overflow: hidden;
            border-radius: calc(var(--border-radius) / 2);
            border: calc(var(--border-width) * 2) solid
                var(--color-divide, var(--color-box-divide));
            background: var(--color-layer, var(--color-box-layer));
            padding: 0px;
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
