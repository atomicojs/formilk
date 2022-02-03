import { c, css, Props, useProp, useRef } from "atomico";
import customElements from "../custom-elements";
import { useRender } from "@atomico/hooks/use-render";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { inputBaseStyle } from "../input/input-base-style";
import { useSlot } from "@atomico/hooks/use-slot";
import { InputFilePreview } from "./input-file-preview";
import { InputGenericProps } from "../props";
import { useDisabled } from "@atomico/hooks/use-disabled";

function inputFile({ multiple, accept }: Props<typeof inputFile>) {
    const refInput = useRef();
    const refLabel = useRef();
    const refSlotPreview = useRef();
    const [SlotPreview] = useSlot<typeof InputFilePreview>(refSlotPreview);
    const [files, setFiles] =
        useProp<Props<typeof inputFile>["files"]>("files");

    const disabled = useDisabled();

    useRender(() => (
        <input
            slot="input"
            type="file"
            ref={refInput}
            multiple={multiple}
            disabled={disabled}
            accept={accept}
            onchange={(event) => {
                if (event.currentTarget.files?.length) {
                    const files = Array.from(event.currentTarget.files);
                    setFiles(files);
                }
            }}
        />
    ));

    useReflectEvent(refLabel, refInput, "click");

    return (
        <host shadowDom>
            <slot name="preview" ref={refSlotPreview} class="hidden"></slot>
            <div class="input">
                <div class="input-file-header">
                    <div class="input-file-item" ref={refLabel}>
                        <div>
                            <slot></slot>
                        </div>
                        <Button size="small" ghost>
                            <Icon
                                slot="prefix"
                                size="var(--icon-size)"
                                type="plus"
                            ></Icon>
                        </Button>
                    </div>
                    {!!files?.length && (
                        <div class="input-line">
                            <div class="input-line-fill"></div>
                        </div>
                    )}
                </div>
                {files?.map((file) => {
                    return (
                        <div class="input-file-row">
                            <div class="input-file-item">
                                <span class="input-file-name">{file.name}</span>
                                <Button
                                    size="small"
                                    ghost
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
                                    <Icon
                                        slot="prefix"
                                        size="var(--icon-size)"
                                        type="closed"
                                    ></Icon>
                                </Button>
                            </div>
                            {SlotPreview && (
                                <SlotPreview
                                    cloneNode
                                    file={file}
                                ></SlotPreview>
                            )}
                        </div>
                    );
                })}
            </div>
        </host>
    );
}

inputFile.props = {
    ...InputGenericProps,
    files: {
        type: Array,
        value: (): File[] => [],
    },
    accept: String,
    multiple: {
        type: Boolean,
        reflect: true,
    },
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
            --icon-size: calc(1em * var(--scale-small));
        }
        .input-file-header {
            display: grid;
            position: relative;
            min-height: var(--size--min);
        }
        .input-file-item {
            display: grid;
            justify-content: space-between;
            grid-template-columns: auto 30px;
            grid-gap: var(--space--between);
            padding: 0px calc(var(--space--x) / 2) 0px var(--space--x);
            align-items: center;
        }
        .input-file-name {
            font-size: var(--font-size-small);
            overflow: hidden;
        }
        .input-file-header + .input-file-row {
            margin-top: calc(var(--space--y) / 2);
        }
        .hidden {
            display: none;
        }
        .input {
            overflow: hidden;
        }
    `,
];

export const InputFile = c(inputFile);

customElements.define("input-file", InputFile);
