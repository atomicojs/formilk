import { Button } from "../../src/components";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    title: "Button",
    path: "/components/button",
};

export default md`
# Button

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

## Example


${(
    <Stories
        props={{
            size: {
                type: "select",
                options: ["normal", "small"],
            },
            ghost: {
                type: "switch",
            },
            shadow: {
                type: "switch",
            },
            status: {
                type: "select",
                options: ["normal", "success", "warning", "danger", "info"],
            },
            rounded: {
                type: "switch",
            },
        }}
    >
        <Story label="Default">
            <Button>Button</Button>
        </Story>
        <Story label="Outline">
            <Button outline>Button</Button>
        </Story>
    </Stories>
)}
`;
