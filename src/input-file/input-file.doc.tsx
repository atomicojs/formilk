import { InputFile, InputFilePreview } from "./input-file";
import { Grid } from "../grid/grid";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Input file",
};

export default md`
# Dropdown

${(
    <Stories
        props={{
            size: {
                type: "radio-groups",
                options: ["normal", "small"],
            },
        }}
    >
        <Story
            label="Default"
            content="center"
            render={(props) => (
                <Grid model="width(280px)">
                    <InputFile {...props}>Add file</InputFile>
                </Grid>
            )}
        ></Story>
        <Story
            label="Multiple"
            content="center"
            render={(props) => (
                <Grid model="width(280px)">
                    <InputFile {...props} multiple>
                        Add file
                    </InputFile>
                </Grid>
            )}
        ></Story>
        <Story
            label="Preview"
            content="center"
            render={(props) => (
                <Grid model="width(280px)">
                    <InputFile {...props}>
                        Add file
                        <InputFilePreview></InputFilePreview>
                    </InputFile>
                </Grid>
            )}
        ></Story>
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
