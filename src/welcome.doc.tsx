import { md } from "@atomico/stories";
import { Button, Grid, Input, Icon } from "./components";

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

~~~js tab(setup, React)
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

## Example

${(
    <Grid model="width(280px)">
        <Input type="text" placeholder="Username">
            <Icon slot="prefix" type="avatar"></Icon>
        </Input>
        <Input type="text" placeholder="Password">
            <Icon slot="prefix" type="lock"></Icon>
        </Input>
        <Button>Login</Button>
    </Grid>
)}
`;
