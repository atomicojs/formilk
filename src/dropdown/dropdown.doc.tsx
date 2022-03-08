import { Dropdown } from "./dropdown";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Dropdown",
};

export default md`
# Dropdown

${(
    <Stories
        props={{
            showWithOver: {
                type: "toggle",
            },
        }}
    >
        <Story label="Default" content="center">
            <Dropdown width="200px">
                <Button slot="action">Click</Button>
                <Button ghost align="left">
                    <Icon size=".8rem" slot="prefix"></Icon> Add
                </Button>
                <Button ghost align="left">
                    <Icon size=".8rem" slot="prefix"></Icon> Add
                </Button>
                <Button ghost align="left">
                    <Icon size=".8rem" slot="prefix"></Icon> Add
                </Button>
            </Dropdown>
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
