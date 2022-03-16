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
        }}
    >
        <Story label="Default" content="center">
            <Textarea placeholder="Write content..."></Textarea>
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
