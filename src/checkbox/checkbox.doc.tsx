import { Checkbox } from "./checkbox";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Checkbox",
};

export default md`
# Checkbox

${(
    <Stories
        props={{
            size: {
                type: "radio-groups",
                options: ["normal", "small"],
            },
            checked: {
                type: "toggle",
            },
            name: {
                type: "text",
            },
            value: {
                type: "text",
            },
        }}
    >
        <Story label="Default" content="center">
            <Checkbox></Checkbox>
        </Story>
    </Stories>
)}

## Usage

~~~html tab(usage,HTML)
<fm-input-checkbox></fm-input-checkbox>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-input-checkbox></fm-input-checkbox>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { InputCheckbox } from "formilk";

function component() {
    return (
        <host>
            <InputCheckbox></InputCheckbox>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { InputCheckbox } from "formilk/react";

function component() {
    return (
        <>
            <InputCheckbox></InputCheckbox>
        </>
    );
}
~~~

~~~tsx tab(usage,Preact)
import { InputCheckbox } from "formilk/preact";

function component() {
    return (
        <>
            <InputCheckbox></InputCheckbox>
        </>
    );
}
~~~
`;
