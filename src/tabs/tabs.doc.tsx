import { Tabs } from "./tabs";
import { Button } from "../button/button";
import { Grid } from "../grid/grid";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Tabs",
};

export default md`
# Dropdown

${(
    <Stories
        props={{
            showWithOver: {
                type: "toggle",
            },
        }}
    >
        <Story label="Default" content="center">
            <Tabs>
                <Button slot="tab" ghost value="home" active>
                    Home
                </Button>
                <Button slot="tab" ghost value="config">
                    Config
                </Button>
                <Grid slot="home" model="padding ">
                    est consectetur aliqua nostrud fugiat et in consequat
                    exercitation reprehenderit commodo occaecat velit amet
                    commodo occaecat ullamco nisi magna ex reprehenderit ullamco
                    consequat laboris proident non exercitation culpa occaecat
                    dolore tempor qui tempor fugiat pariatur nulla eu in eiusmod
                    anim voluptate velit ut elit sint dolor cupidatat elit
                    pariatur sint non et elit do et
                </Grid>
                <Grid slot="config" model="padding">
                    Content config
                </Grid>
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
