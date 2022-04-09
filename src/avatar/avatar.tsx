import { Type, Props, c, css } from "atomico";
import customElements from "../system";
import { Icon } from "../icon/icon";
// import { cssBase, cssBaseColors } from "../tokens";
import tokens from "../tokens";

function avatar({ src, size, transform }: Props<typeof avatar>) {
    return (
        <host shadowDom>
            <button class="avatar-mask" part="avatar-mask">
                <div class="avatar-inner" part="avatar-inner">
                    <slot>
                        {src ? (
                            <img class="avatar-img" src={src} />
                        ) : (
                            <Icon type="avatar" />
                        )}
                    </slot>
                </div>
            </button>
            <style>
                {!!size && `:host{--size:var(--size-${size});}`}
                {!!transform && `:host{--transform:${transform};}`}
            </style>
        </host>
    );
}

avatar.props = {
    src: String,
    size: {
        type: String as Type<"small">,
        reflect: true,
    },
    transform: {
        type: String,
        reflect: true,
    },
};

avatar.styles = [
    tokens,
    css`
        .avatar-mask {
            width: var(--size-xl);
            height: var(--size-xl);
            overflow: hidden;
            border-radius: var(--border-radius);
            background: var(--color-layer-60);
            border: none;
            padding: 0px;
            cursor: unset;
            margin: auto;
        }
        .avatar-inner {
            width: 100%;
            height: 100%;
            transform: var(--transform);
            place-content: center;
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
