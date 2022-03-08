import { Alert } from "./alert";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Alert",
};

export default md`
# Avatar

${(
    <Stories
        props={{
            status: {
                type: "radio-groups",
                options: ["success", "warning", "danger", "info"],
            },
            shadow: {
                type: "toggle",
            },
            outline: {
                type: "toggle",
            },
        }}
    >
        <Story
            label="Default"
            content="center"
            render={(props) => (
                <Alert status={props.status} outline={props.outline}>
                    Content...
                    <Button
                        slot="action"
                        status={props.outline ? props.status : null}
                        size="small"
                    >
                        <Icon slot="prefix" type="closed"></Icon>
                    </Button>
                </Alert>
            )}
        ></Story>
    </Stories>
)}


## Usage

~~~html tab(usage,HTML)
<fm-avatar></fm-avatar>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-avatar></fm-avatar>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { Avatar } from "formilk";

function component() {
    return (
        <host>
            <Avatar></Avatar>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { Avatar } from "formilk/react";

function component() {
    return (
        <host>
            <Avatar></Avatar>
        </host>
    );
}
~~~
`;
