import { c, css } from "atomico";
import { Icon } from "../icon/icon";
import { tokensSize, tokensBorder } from "../tokens";

/**
 *
 * @param {import("atomico").Props<avatar.props>} props
 */
function avatar({ src, size, transform }) {
    return (
        <host shadowDom>
            <div class="avatar-mask">
                <div class="avatar-effect">
                    <slot>
                        {src ? (
                            <img class="avatar-img" src={src} />
                        ) : (
                            <Icon type="avatar" size="50%" />
                        )}
                    </slot>
                </div>
            </div>
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
        value: "var(--min-size)",
    },
    transform: {
        type: String,
        reflect: true,
    },
};

avatar.styles = [
    tokensSize,
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
            border: calc(var(--border-width) * 2) solid rgba(255, 255, 255, 0.5);
            background: hsl(0deg 0% 100% / 50%);
        }
        .avatar-effect {
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
