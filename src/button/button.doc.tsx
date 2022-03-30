import { Button } from "./button";
import { Icon } from "../icon/icon";
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
            justify: {
                type: "radio-groups",
                options: ["left", "right", "center", "space-between"],
                description:
                    "define a width of 100% and a justify-content according to the justify prop",
            },
            href: {
                type: "text",
                description: "associate the link functionality to the button",
            },
            color: {
                type: "radio-groups",
                options: ["primary", "success", "warning", "danger", "info"],
            },
            rounded: {
                type: "toggle",
            },
        }}
    >
        <Story label="Default" content="center">
            <Button>
                <span>Button</span>
            </Button>
        </Story>
        <Story label="Prefix" content="center">
            <Button>
                <Icon slot="prefix"></Icon>
                <span>Button</span>
            </Button>
        </Story>
        <Story label="Suffix" content="center">
            <Button>
                <Icon slot="suffix"></Icon>
                <span>Button</span>
            </Button>
        </Story>
        <Story label="Square" content="center">
            <Button>
                <Icon slot="prefix"></Icon>
            </Button>
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

~~~tsx tab(usage,Preact)
import { Button } from "formilk/preact";

function component() {
    return (
        <>
            <Button>Button</Button>
        </>
    );
}
~~~
`;
