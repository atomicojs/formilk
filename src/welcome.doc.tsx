import { md } from "@atomico/stories";
import { Button, Input, Icon, InputSwitch, Label, Theme } from "./components";

export const meta = {
    title: "Welcome",
    path: "/",
};

export default md`
# Welcome

Formilk is a system of configurable components created by [UpperCod](https://twitter.com/uppercod), with formilk you can speed up your design system creation process, associating your design tokens to formilk using custom-properties.


## Installation

~~~text
npm install formilk
~~~

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

~~~tsx tab(usage, React)
import { Button } from "formilk/react";

function component() {
    return (
        <>
            <Button>Button</Button>
        </>
    );
}
~~~

~~~tsx tab(usage, Preact)
import { Button } from "formilk/preact";

function component() {
    return (
        <>
            <Button>Button</Button>
        </>
    );
}
~~~

## Example

${(
    <Theme>
        <style>
            {`
            .form{
                width: 100%;
                height: 500px;
                display: grid;
                gap: var(--size-s);
                padding: var(--size-s);
                place-content: center;
                background: lavender;
                border-radius:var(--border-radius);
            }
            `}
        </style>
        <form>
            <div class="form">
                <h3>Login</h3>
                <Input placeholder="User" required>
                    <Icon slot="prefix" type="avatar"></Icon>
                </Input>
                <Input placeholder="Password" required>
                    <Icon slot="prefix" type="lock"></Icon>
                </Input>
                <Label>
                    Remember
                    <InputSwitch size="small" slot="action" />
                </Label>
                <div>
                    <Button color="primary">Login</Button>
                    <Button ghost>Register</Button>
                </div>
            </div>
        </form>
    </Theme>
)}
`;
