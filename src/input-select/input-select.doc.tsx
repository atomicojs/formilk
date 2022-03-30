import { InputSelect, InputSelectOption } from "./input-select";
import { Grid } from "../grid/grid";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Input/Select",
};

export default md`
# InputSelect

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
            placeholder: {
                type: "text",
            },
        }}
    >
        <Story
            label="Default"
            content="center"
            render={(props) => (
                <Grid model="width(220px)">
                    <InputSelect placeholder="Select item" {...props}>
                        <InputSelectOption value="1" label="Item 1" />
                        <InputSelectOption value="2" label="Item 2" />
                        <InputSelectOption value="3" label="Item 3" />
                    </InputSelect>
                </Grid>
            )}
        ></Story>
    </Stories>
)}

## Usage

~~~html tab(usage,HTML)
<fm-input-select>
    <fm-input-select-option value="1" label="Item 1"></fm-input-select-option>
    <fm-input-select-option value="2" label="Item 2"></fm-input-select-option>
    <fm-input-select-option value="3" label="Item 3"></fm-input-select-option>
</fm-input-select>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-input-select>
            <fm-input-select-option value="1" label="Item 1"></fm-input-select-option>
            <fm-input-select-option value="2" label="Item 2"></fm-input-select-option>
            <fm-input-select-option value="3" label="Item 3"></fm-input-select-option>
        </fm-input-select>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { InputSelect, InputSelectOption } from "formilk";

function component() {
    return (
        <host>
            <InputSelect>
                <InputSelectOption value="1" label="Item 1"/>
                <InputSelectOption value="2" label="Item 2"/>
                <InputSelectOption value="3" label="Item 3"/>
            </InputSelect>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { InputSelect, InputSelectOption } from "formilk/react";

function component() {
    return (
        <>
            <InputSelect>
                <InputSelectOption value="1" label="Item 1"/>
                <InputSelectOption value="2" label="Item 2"/>
                <InputSelectOption value="3" label="Item 3"/>
            </InputSelect>
        </>
    );
}
~~~

~~~tsx tab(usage,Preact)
import { InputSelect, InputSelectOption } from "formilk/preact";

function component() {
    return (
        <>
            <InputSelect>
                <InputSelectOption value="1" label="Item 1"/>
                <InputSelectOption value="2" label="Item 2"/>
                <InputSelectOption value="3" label="Item 3"/>
            </InputSelect>
        </>
    );
}
~~~
`;
