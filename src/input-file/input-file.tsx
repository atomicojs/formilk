import { c, css, Props, useProp, useRef } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { useSlot } from "@atomico/hooks/use-slot";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { inputBaseStyle } from "../input/input-base-style";
import { InputFilePreview } from "./input-file-preview";
export { InputFilePreview } from "./input-file-preview";
import { InputGenericProps } from "../props";
import customElements from "../system";

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
                                size="var(--size-xxs)"
                                type="plus"
                            ></Icon>
                        </Button>
                        {!!files?.length && (
                            <div class="input-line">
                                <div class="input-line-fill"></div>
                            </div>
                        )}
                    </div>
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
                                        size="var(--size-xxs)"
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
        .input {
            padding: 0;
        }

        .input-file-header,
        .input-file-row .input-file-item {
            padding: 0 var(--space-x);
        }

        .input-file-item {
            min-height: var(--size-xl);
            display: grid;
            grid-template-columns: auto auto;
            place-content: center space-between;
            position: relative;
        }
    `,
];

export const InputFile = c(inputFile);

customElements.define("input-file", InputFile);
