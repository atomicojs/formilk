import { Label } from "./label";
import { InputSwitch } from "../input-switch/input-switch";
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
                    <InputSwitch slot="action" />
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
<fm-label>
    Checkbox
    <fm-input-checkbox slot="action"></fm-input-checkbox>
</fm-label>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-label>
            Checkbox
            <fm-input-checkbox slot="action"></fm-input-checkbox>
        </fm-label>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { Label, InputCheckbox } from "formilk";

function component() {
    return (
        <host>
            <Label>
                Checkbox
                <InputCheckbox slot="action"/>
            </Label>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { Label, InputCheckbox } from "formilk/react";

function component() {
    return (
        <>
            <Label>
                Checkbox
                <InputCheckbox slot="action"/>
            </Label>
        </>
    );
}
~~~

~~~tsx tab(usage,Preact)
import { Label, InputCheckbox } from "formilk/preact";

function component() {
    return (
        <>
            <Label>
                Checkbox
                <InputCheckbox slot="action"/>
            </Label>
        </>
    );
}
~~~
`;
