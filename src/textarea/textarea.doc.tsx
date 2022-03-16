import { Textarea } from "./textarea";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Textarea",
};

export default md`
# Textarea

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
        }}
    >
        <Story label="Default" content="center">
            <Textarea placeholder="Write content..."></Textarea>
        </Story>
    </Stories>
)}

## Usage

~~~html tab(usage,HTML)
<fm-textarea
    name="field"
    value="content..."
></fm-textarea>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-textarea
            name="field"
            value="content..."
        ></fm-textarea>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { Textarea } from "formilk";

function component() {
    return (
        <host>
            <Textarea
                name="field"
                value="content..."
            ></Textarea>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { Textarea } from "formilk/react";

function component() {
    return (
        <>
            <Textarea
                name="field"
                value="content..."
            ></Textarea>
        </>
    );
}
~~~
`;
