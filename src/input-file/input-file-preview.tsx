import { Props, c, css } from "atomico";
import customElements from "../custom-elements";

function inputFilePreview({ file }: Props<typeof inputFilePreview>) {
    const src = file && URL.createObjectURL(file);
    return (
        <host shadowDom>
            {file &&
                (/^video/.test(file.type) ? (
                    <video class="media" src={src} controls />
                ) : /^image/.test(file.type) ? (
                    <img class="media" src={src} />
                ) : /^audio/.test(file.type) ? (
                    <audio class="media" src={src} controls />
                ) : null)}
        </host>
    );
}

inputFilePreview.props = {
    slot: {
        type: String,
        reflect: true,
        value: "preview",
    },
    file: File,
};

inputFilePreview.styles = css`
    :host {
        display: flex;
        align-items: center;
    }
    .media {
        max-width: 100%;
        display: block;
        margin: auto;
    }
`;

export const InputFilePreview = c(inputFilePreview);

customElements.define("input-file-preview", InputFilePreview);
