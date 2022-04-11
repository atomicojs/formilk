import { Tabs } from "./tabs";
import { Button } from "../button/button";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Tabs",
};

export default md`
# Tabs

${(
    <Stories
        props={{
            position: {
                type: "radio-groups",
                options: ["top", "bottom", "left", "right"],
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
            <Tabs value="1">
                <Button value="1" active>
                    Home
                </Button>
                <Button value="2" active>
                    Profile
                </Button>
                <Button value="3">Config</Button>
                <Button value="4">Logout</Button>
            </Tabs>
        </Story>
    </Stories>
)}

## Events

**change**: This event is dispatched every time the value property is modified.

## Usage

~~~html tab(usage,HTML)
<fm-tabs value="1">
    <fm-buttons value="1" active>
        Home
    </fm-buttons>
    <fm-buttons value="2">
        Profile
    </fm-buttons>
    <fm-buttons value="3">
        Config
    </fm-buttons>
    <fm-buttons value="4">
        Logout
    </fm-buttons>
</fm-tabs>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-tabs value="1">
            <fm-buttons value="1" active>
                Home
            </fm-buttons>
            <fm-buttons value="2">
                Profile
            </fm-buttons>
            <fm-buttons value="3">
                Config
            </fm-buttons>
            <fm-buttons value="4">
                Logout
            </fm-buttons>
        </fm-tabs>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { Tabs, Button } from "formilk";

function component() {
    return (
        <host>
            <Tabs value="1">
                <Button value="1" active>
                    Home
                </Button>
                <Button value="2">
                    Profile
                </Button>
                <Button value="3">Config</Button>
                <Button value="4">Logout</Button>
            </Tabs>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { Tabs, Button } from "formilk/react";

function component() {
    return (
        <>
            <Tabs value="1">
                <Button value="1" active>
                    Home
                </Button>
                <Button value="2">
                    Profile
                </Button>
                <Button value="3">Config</Button>
                <Button value="4">Logout</Button>
            </Tabs>
        </>
    );
}
~~~

~~~tsx tab(usage,Preact)
import { Tabs, Button } from "formilk/preact";

function component() {
    return (
        <>
            <Tabs value="1">
                <Button value="1" active>
                    Home
                </Button>
                <Button value="2">
                    Profile
                </Button>
                <Button value="3">Config</Button>
                <Button value="4">Logout</Button>
            </Tabs>
        </>
    );
}
~~~
`;
