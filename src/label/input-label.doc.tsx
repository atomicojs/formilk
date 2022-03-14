import { Label } from "./label";
import { Switch } from "../switch/switch";
import { Input } from "../input/input";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Label",
};

export default md`
# Dropdown

${(
    <Stories
        props={{
            reverse: {
                type: "toggle",
            },
        }}
    >
        <Story label="Default" content="center">
            <div>
                <Label>
                    <span>Click me</span>
                    <Switch slot="action"></Switch>
                </Label>
            </div>
        </Story>
        <Story label="Vertical" content="center">
            <div>
                <Label vertical>
                    <span>Click me</span>
                    <Input placeholder="write..." slot="action"></Input>
                </Label>
            </div>
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
