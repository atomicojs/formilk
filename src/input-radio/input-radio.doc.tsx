import { InputRadio } from "./input-radio";
import { Icon } from "../icon/icon";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    icon: <Icon type="circle"></Icon>,
    path: "/Components/Input/Radio",
};

export default md`
# InputRadio

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
            <InputRadio></InputRadio>
        </Story>
    </Stories>
)}

## Usage

~~~html tab(usage,HTML)
<fm-input-radio></fm-input-radio>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-input-radio></fm-input-radio>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { InputRadio } from "formilk";

function component() {
    return (
        <host>
            <InputRadio/>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { Button } from "formilk/react";

function component() {
    return (
        <>
        <InputRadio/>
        </>
    );
}
~~~

~~~tsx tab(usage,preact)
import { Button } from "formilk/preact";

function component() {
    return (
        <>
        <InputRadio/>
        </>
    );
}
~~~
`;
