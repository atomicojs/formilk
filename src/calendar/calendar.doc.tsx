import { Calendar } from "./calendar";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Input/Calendar",
};

export default md`
# InputCalendar(working...)

${(
    <Stories props={{}}>
        <Story label="Default" content="center">
            <Calendar></Calendar>
        </Story>
    </Stories>
)}

## Usage

~~~html tab(usage,HTML)
<fm-calendar></fm-calendar>
~~~

~~~tsx tab(usage,Atomico JS)
import { html } from "atomico";
import "formilk";

function component() {
    return html\`<host>
        <fm-calendar></fm-calendar>
    </host>\`;
}
~~~

~~~tsx tab(usage,Atomico Jsx)
import { Calendar } from "formilk";

function component() {
    return (
        <host>
            <Calendar></Calendar>
        </host>
    );
}
~~~

~~~tsx tab(usage,React)
import { Calendar } from "formilk/react";

function component() {
    return (
        <>
            <Calendar></Calendar>
        </>
    );
}
~~~

~~~tsx tab(usage,Preact)
import { Calendar } from "formilk/preact";

function component() {
    return (
        <>
            <Calendar></Calendar>
        </>
    );
}
~~~
`;
