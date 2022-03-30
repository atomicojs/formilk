import { Avatar } from "./avatar";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Avatar",
};

export default md`
# Avatar

${(
    <Stories
        props={{
            size: {
                type: "text",
                description: "Size in units of measure for CSS",
            },
            transform: {
                type: "text",
                description:
                    "CSS transform property for the content inside the mask",
            },
        }}
    >
        <Story label="Default" content="center">
            <Avatar></Avatar>
        </Story>
        <Story label="With image" content="center">
            <Avatar>
                <img src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
            </Avatar>
        </Story>
        <Story label="With video" content="center">
            <Avatar>
                <video
                    src="https://media.istockphoto.com/videos/smiling-confident-young-indian-ethnic-business-woman-professional-video-id1216650957"
                    playsinline
                    loop
                    muted
                    autoplay
                    preload=""
                ></video>
            </Avatar>
        </Story>
    </Stories>
)}


## Usage

~~~html tab(usage,HTML)
<fm-avatar></fm-avatar>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-avatar></fm-avatar>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { Avatar } from "formilk";

function component() {
    return (
        <host>
            <Avatar></Avatar>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { Avatar } from "formilk/react";

function component() {
    return (
        <host>
            <Avatar></Avatar>
        </host>
    );
}
~~~
`;
