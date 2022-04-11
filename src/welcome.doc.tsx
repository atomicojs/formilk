import { md } from "@atomico/stories";
import { Icon } from "./components";
import { App } from "./doc/examples/app";
export const meta = {
    title: "Welcome",
    icon: <Icon type="home"></Icon>,
    path: "/",
};

export default md`
# Welcome

Formilk is a system of configurable **webcomponents** created by [UpperCod](https://twitter.com/uppercod), with formilk you can speed up your design system creation process, associating your design tokens to formilk using custom-properties.



## Usage example

${(<App></App>)}


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
`;
