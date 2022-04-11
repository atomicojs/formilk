import { md } from "@atomico/stories";
import { Icon } from "./components";

export const meta = {
    title: "Welcome",
    icon: <Icon type="home"></Icon>,
    path: "/",
};

export default md`
# Welcome

Formilk is a system of configurable components created by [UpperCod](https://twitter.com/uppercod), with formilk you can speed up your design system creation process, associating your design tokens to formilk using custom-properties.



## Example

${(
    <iframe
        width="100%"
        height="820px"
        loading="lazy"
        src="https://stackblitz.com/edit/formilk-example-contact-app?embed=1&file=src/app.tsx&hideExplorer=1&view=preview"
        frameborder="0"
    ></iframe>
)}


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
