import { InputSwitch } from "./input-switch";
import { Icon } from "../icon/icon";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    icon: <Icon type="switch"></Icon>,
    path: "/Components/Input/Switch",
};

export default md`
# InputSwitch

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
            <InputSwitch></InputSwitch>
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
