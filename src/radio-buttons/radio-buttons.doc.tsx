import { RadioButtons } from "./radio-buttons";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Radio buttons",
};

export default md`
# RadioButtons

${(
    <Stories
        props={{
            vertical: {
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
            <RadioButtons name="left" value="left">
                <Button value="left">Left</Button>
                <Button value="center">Center</Button>
                <Button value="right">Right</Button>
            </RadioButtons>
        </Story>
    </Stories>
)}


~~~html tab(usage,HTML)
<fm-radio-buttons value="1">
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
</fm-radio-buttons>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-radio-buttons value="1">
            <fm-buttons value="1" active>
                Home
            </fm-buttons>
            <fm-buttons value="2" active>
                Profile
            </fm-buttons>
            <fm-buttons value="3">
                Config
            </fm-buttons>
            <fm-buttons value="4">
                Logout
            </fm-buttons>
        </fm-radio-buttons>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { RadioButtons, Button } from "formilk";

function component() {
    return (
        <host>
            <RadioButtons value="1">
                <Button value="1" active>
                    Home
                </Button>
                <Button value="2" active>
                    Profile
                </Button>
                <Button value="3">Config</Button>
                <Button value="4">Logout</Button>
            </RadioButtons>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { RadioButtons, Button } from "formilk/react";

function component() {
    return (
        <>
            <RadioButtons value="1">
                <Button value="1" active>
                    Home
                </Button>
                <Button value="2" active>
                    Profile
                </Button>
                <Button value="3">Config</Button>
                <Button value="4">Logout</Button>
            </RadioButtons>
        </>
    );
}
~~~

~~~tsx tab(usage,Preact)
import { RadioButtons, Button } from "formilk/preact";

function component() {
    return (
        <>
            <RadioButtons value="1">
                <Button value="1" active>
                    Home
                </Button>
                <Button value="2" active>
                    Profile
                </Button>
                <Button value="3">Config</Button>
                <Button value="4">Logout</Button>
            </RadioButtons>
        </>
    );
}
~~~
`;
