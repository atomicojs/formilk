import { md } from "@atomico/stories";
import { Button, Input, Icon, Grid, InputSwitch, Label } from "./components";

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
    <Grid model="width(100%) height(500px) content(center) radius">
        <form>
            <Grid model="width(200px) gap">
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
                <Grid model="gap cols(auto auto)">
                    <Button color="primary">Login</Button>
                    <Button ghost>Register</Button>
                </Grid>
            </Grid>
        </form>
    </Grid>
)}
`;
