import { Switch } from "./switch";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Switch",
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
<fm-input-switch></fm-input-switch>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-input-switch></fm-input-switch>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { InputSwitch } from "formilk";

function component() {
    return (
        <host>
            <InputSwitch></InputSwitch>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { InputSwitch } from "formilk/react";

function component() {
    return (
        <>
            <InputSwitch></InputSwitch>
        </>
    );
}
~~~

~~~tsx tab(usage,Preact)
import { InputSwitch } from "formilk/preact";

function component() {
    return (
        <>
            <InputSwitch></InputSwitch>
        </>
    );
}
~~~
`;
