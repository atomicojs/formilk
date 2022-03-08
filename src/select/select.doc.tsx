import { Select, SelectOption } from "./select";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Select",
};

export default md`
# Select

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
            shadow: {
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
            <Select placeholder="Select item">
                <SelectOption value="1" label="Item 1"></SelectOption>
                <SelectOption value="2" label="Item 2"></SelectOption>
                <SelectOption value="3" label="Item 3"></SelectOption>
            </Select>
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
