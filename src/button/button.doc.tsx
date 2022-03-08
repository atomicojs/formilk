import { Button } from "./button";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Button",
};

export default md`
# Button

${(
    <Stories
        props={{
            size: {
                type: "radio-groups",
                options: ["normal", "small"],
            },
            ghost: {
                type: "toggle",
            },
            shadow: {
                type: "toggle",
            },
            status: {
                type: "radio-groups",
                options: ["normal", "success", "warning", "danger", "info"],
            },
            rounded: {
                type: "toggle",
            },
        }}
    >
        <Story label="Default" content="center">
            <Button>Button</Button>
        </Story>
        <Story label="Outline" content="center">
            <Button outline>Button</Button>
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
