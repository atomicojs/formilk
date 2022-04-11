import { InputCheckbox } from "./input-checkbox";
import { Icon } from "../icon/icon";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    icon: <Icon type="checkbox"></Icon>,
    path: "/Components/Input/Checkbox",
};

export default md`
# InputCheckbox

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
            <InputCheckbox />
        </Story>
    </Stories>
)}

## Usage

~~~html tab(usage,HTML)
<fm-input-checkbox></fm-input-checkbox>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-input-checkbox></fm-input-checkbox>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { InputCheckbox } from "formilk";

function component() {
    return (
        <host>
            <InputCheckbox/>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { InputCheckbox } from "formilk/react";

function component() {
    return (
        <>
            <InputCheckbox/>
        </>
    );
}
~~~

~~~tsx tab(usage,Preact)
import { InputCheckbox } from "formilk/preact";

function component() {
    return (
        <>
            <InputCheckbox/>
        </>
    );
}
~~~
`;
