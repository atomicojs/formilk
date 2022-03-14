import { Tabs } from "./tabs";
import { Button } from "../button/button";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Tabs",
};

export default md`
# Dropdown

${(
    <Stories
        props={{
            position: {
                type: "radio-groups",
                options: ["top", "bottom", "left", "right"],
            },
        }}
    >
        <Story label="Default" content="center">
            <Tabs value="1">
                <Button size="small" ghost value="1" active>
                    Home
                </Button>
                <Button size="small" ghost value="2" active>
                    Profile
                </Button>
                <Button size="small" ghost value="3">
                    Config
                </Button>
                <Button size="small" ghost value="4">
                    Logout
                </Button>
                <style slot="out"></style>
            </Tabs>
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
