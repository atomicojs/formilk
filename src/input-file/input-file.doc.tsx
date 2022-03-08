import { InputFile, InputFilePreview } from "./input-file";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Input file",
};

export default md`
# Dropdown

${(
    <Stories
        props={{
            showWithOver: {
                type: "toggle",
            },
        }}
    >
        <Story label="Default" content="center">
            <InputFile>Add file</InputFile>
        </Story>
        <Story label="Multiple" content="center">
            <InputFile multiple>Add file</InputFile>
        </Story>
        <Story label="Preview" content="center">
            <InputFile>
                Add file
                <InputFilePreview></InputFilePreview>
            </InputFile>
        </Story>
    </Stories>
)}

## Usage

~~~html tab(usage,HTML)
<fm-button>Button</fm-button>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-button>Button</fm-button>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { Button } from "formilk";

function component() {
    return (
        <host>
            <Button>Button</Button>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { Button } from "formilk/react";

function component() {
    return (
        <>
            <Button>Button</Button>
        </>
    );
}
~~~
`;
