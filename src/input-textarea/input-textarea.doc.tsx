import { Textarea } from "./input-textarea";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Input/Textarea",
};

export default md`
# InputTextarea

Create an input textarea whose size and height changes as the text scales.

${(
    <Stories
        props={{
            size: {
                type: "radio-groups",
                options: ["normal", "small"],
            },
            required: {
                type: "toggle",
            },
            disabled: {
                type: "toggle",
            },
            name: {
                type: "text",
            },
            value: {
                type: "text",
            },
            placeholder: {
                type: "text",
            },
            minLength: {
                type: "number",
            },
            maxLength: {
                type: "number",
            },
            rows: {
                type: "number",
            },
            cols: {
                type: "number",
            },
        }}
    >
        <Story label="Default" content="center">
            <Textarea placeholder="Write content..."></Textarea>
        </Story>
    </Stories>
)}

## Usage

~~~html tab(usage,HTML)
<fm-input-textarea
    name="field"
    value="content..."
></fm-input-textarea>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-input-textarea
            name="field"
            value="content..."
        ></fm-input-textarea>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { InputTextarea } from "formilk";

function component() {
    return (
        <host>
            <InputTextarea
                name="field"
                value="content..."
            />
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { InputTextarea } from "formilk/react";

function component() {
    return (
        <>
            <InputTextarea
                name="field"
                value="content..."
            />
        </>
    );
}
~~~

~~~tsx tab(usage,Preact)
import { InputTextarea } from "formilk/preact";

function component() {
    return (
        <>
            <InputTextarea
                name="field"
                value="content..."
            />
        </>
    );
}
~~~
`;
