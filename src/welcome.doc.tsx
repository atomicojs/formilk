import { md } from "@atomico/stories";
import { Button, Input, Icon, Grid, Switch, Label } from "./components";

export const meta = {
    title: "Welcome",
    path: "/",
};

export default md`
# Welcome

> Design system designed and created by [UpperCod](https://twitter.com/uppercod) with the aim of having a unique aesthetic, formilk was created to be used without complexity and interaction limitations.

Formilk does not leverage typography (titles and texts), it is a stack of utility components that are managed through custom-properties, so creating variations is really easy.

## Installation

~~~text tab(setup, Npm)
# NPM
npm install formilk
~~~

~~~js tab(setup, Js)
import "formilk";
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

## Example

${(
    <Grid model="width(100%) height(500px) content(center) radius  bgcolor(lavender)">
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
                    <Switch size="small" slot="action"></Switch>
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
