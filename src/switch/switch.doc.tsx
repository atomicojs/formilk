import { Switch } from "./switch";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Swtich",
};

export default md`
# Switch

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
            <Switch></Switch>
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
