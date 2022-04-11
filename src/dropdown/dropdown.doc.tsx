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
            <Dropdown width="100px" style="margin: auto">
                <Button justify="left" slot="action">
                    Click
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="copy"></Icon> Copy
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="drag"></Icon> Move
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="config"></Icon> Config
                </Button>
            </Dropdown>
        </Story>
    </Stories>
)}

## Usage

~~~html tab(usage,HTML)
<fm-dropdown>
    <fm-button slot="action">Button</fm-button>
    <fm-button size="small" justify="space-between" ghost>
        <fm-icon slot="suffix" type="copy"></fm-icon> Copy
    </fm-button>
    <fm-button size="small" justify="space-between" ghost>
        <fm-icon slot="suffix" type="drag"></fm-icon> Move
    </fm-button>
</fm-dropdown>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-dropdown>
            <fm-button slot="action">Button</fm-button>
            <fm-button size="small" justify="space-between" ghost>
                <fm-icon slot="suffix" type="copy"></fm-icon> Copy
            </fm-button>
            <fm-button size="small" justify="space-between" ghost>
                <fm-icon slot="suffix" type="drag"></fm-icon> Move
            </fm-button>
        </fm-dropdown>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { Dropdown, Button, Icon } from "formilk";

function component() {
    return (
        <host>
            <Dropdown width="100px" style="margin: auto">
                <Button justify="left" slot="action">
                    Click
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="copy"></Icon> Copy
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="drag"></Icon> Move
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="config"></Icon> Config
                </Button>
            </Dropdown>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { Dropdown, Button, Icon } from "formilk/react";

export function App() {
    return (
        <>
            <Dropdown width="100px" style="margin: auto">
                <Button justify="left" slot="action">
                    Click
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="copy"></Icon> Copy
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="drag"></Icon> Move
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="config"></Icon> Config
                </Button>
            </Dropdown>
        </>
    );
}
~~~


~~~tsx tab(usage,Preact)
import { Dropdown, Button, Icon } from "formilk/preact";

export function App() {
    return (
        <>
            <Dropdown width="100px" style="margin: auto">
                <Button justify="left" slot="action">
                    Click
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="copy"></Icon> Copy
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="drag"></Icon> Move
                </Button>
                <Button size="small" justify="space-between" ghost>
                    <Icon slot="suffix" type="config"></Icon> Config
                </Button>
            </Dropdown>
        </>
    );
}
~~~
`;
