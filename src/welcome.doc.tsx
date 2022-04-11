import { md } from "@atomico/stories";
import { Icon, Theme } from "./components";
import { App } from "./_doc/examples/app";

export const meta = {
    title: "Welcome",
    icon: <Icon type="home"></Icon>,
    path: "/",
};

export default md`
# Welcome

Formilk is a system of configurable **webcomponents** created by [UpperCod](https://twitter.com/uppercod), with formilk you can speed up your design system creation process, associating your design tokens to formilk using custom-properties.

${(
    <Theme>
        <style>
            {`
            .row{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: var(--size-xl);
            }
            .row > *{
                padding: var(--size-s);
                box-sizing: border-box;
                background: white;
                border-radius: var(--border-radius);
            }
            `}
        </style>
        <div class="row">
            <div>
                <h3>Form friendly</h3>
                <p>
                    There are no limits to its use, our webcomponents work
                    inside any form tag
                </p>
            </div>
            <div>
                <h3>Fully configurable</h3>
                <p>
                    thanks to a highly scalable{" "}
                    <a
                        target="_blank"
                        href="https://github.com/atomicojs/formilk/blob/master/src/options.ts"
                    >
                        token system
                    </a>{" "}
                    you can completely modify the appearance of formilk
                </p>
            </div>
        </div>
    </Theme>
)}

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
