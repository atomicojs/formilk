import { InputFile, InputFilePreview } from "./input-file";
import { Icon } from "../icon/icon";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    icon: <Icon type="file"></Icon>,
    path: "/Components/Input/File",
};

export default md`
# InputFile

${(
    <Stories
        props={{
            size: {
                type: "radio-groups",
                options: ["normal", "small"],
            },
        }}
    >
        <Story label="Default" content="center">
            <InputFile style="width: 220px">Add file</InputFile>
        </Story>
        <Story label="Multiple" content="center">
            <InputFile multiple style="width: 220px">
                Add file
            </InputFile>
        </Story>
        <Story label="Preview" content="center">
            <InputFile style="width: 220px">
                Add file
                <InputFilePreview></InputFilePreview>
            </InputFile>
        </Story>
    </Stories>
)}

## Usage

~~~html tab(usage,HTML)
<fm-input-file></fm-input-file>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-input-file></fm-input-file>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { InputFile } from "formilk";

function component() {
    return (
        <host>
            <InputFile/>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { InputFile } from "formilk/react";

function component() {
    return (
        <>
            <InputFile/>
        </>
    );
}
~~~

~~~tsx tab(usage,Preact)
import { InputFile } from "formilk/preact";

function component() {
    return (
        <>
            <InputFile/>
        </>
    );
}
~~~
`;
