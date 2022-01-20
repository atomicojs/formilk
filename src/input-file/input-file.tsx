import { c, css, Props, useProp, useRef } from "atomico";
import customElements from "../custom-elements";
import { useRender } from "@atomico/hooks/use-render";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { Select } from "../select/select";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { inputBaseStyle } from "../input/input-base-style";

function inputFile() {
    const refInput = useRef();
    const refLabel = useRef();
    const [files, setFiles] =
        useProp<Props<typeof inputFile>["files"]>("files");

    useRender(() => (
        <input
            slot="input"
            type="file"
            ref={refInput}
            multiple
            onchange={(event) => {
                if (event.currentTarget.files) {
                    const files = Array.from(event.currentTarget.files);
                    setFiles(files);
                }
            }}
        />
    ));

    useReflectEvent(refLabel, refInput, "click");

    return (
        <host shadowDom>
            <div class="input">
                <div ref={refLabel}>
                    <Button class="input-file-button" ghost between>
                        <slot></slot>
                        <Icon
                            slot="suffix"
                            size="var(--icon-size)"
                            type="plus"
                        ></Icon>
                    </Button>
                </div>
                {files?.map((file) => {
                    return (
                        <div>
                            {file.name}
                            <Button size="small" ghost>
                                <Icon
                                    slot="prefix"
                                    type="closed"
                                    onclick={() => {
                                        const data = new DataTransfer();

                                        files
                                            .filter((item) => item != file)
                                            .map((file) =>
                                                data.items.add(file)
                                            );

                                        refInput.current.files = data.files;

                                        setFiles(Array.from(data.files));
                                    }}
                                >
                                    Remove
                                </Icon>
                            </Button>
                        </div>
                    );
                })}
            </div>
        </host>
    );
}

inputFile.props = {
    files: {
        type: Array,
        value: (): File[] => [],
    },
    placeholder: String,
};

inputFile.styles = [
    inputBaseStyle,
    css`
        :host {
            --color-fill: var(--color-current-layer, var(--color-input-fill));
            --color-divide: var(--color-input-divide);
            --color-contrast: var(
                --color-current-contrast,
                var(--color-input-contrast)
            );
            --icon-size: calc(1em * var(--size-small));
        }
        .input-file-header {
            position: relative;
            align-items: center;
        }
        .input {
            font-size: unset;
            align-items: center;
        }
        .input-file-button {
            width: 100%;
        }
    `,
];

export const InputFile = c(inputFile);

customElements.define("input-file", InputFile);
