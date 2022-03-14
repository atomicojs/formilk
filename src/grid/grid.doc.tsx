import { Grid } from "./grid";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Grid",
};

export default md`
# Grid

${(
    <Grid model="gap">
        <button>1</button>
        <Grid model="hidden, visible cols(1fr 1fr) gap 320px">
            <button>1</button>
            <button>1</button>
        </Grid>
        <button>1</button>
        <button>1</button>
        <button>1</button>
    </Grid>
)}

~~~js
width(width, minWidth, maxWidth);
~~~

~~~js
height(height, minHeight, maxHeight);
~~~

~~~js
content(alignItems, justifyContent);
~~~

~~~js
columns(1fr);
~~~

~~~js
template(
    "header" 50px
    "content" 1fr
    "foooter" 50px / 1fr
);
~~~

~~~js
gap(xl);
~~~

~~~js
radius;
~~~

~~~js
overflow(scroll auto);
~~~

~~~js
position(fixed, 50%, 50%);
~~~

~~~js
hover(scale(1.1));
~~~

~~~js
transition(1);
~~~

~~~html
<style id="card">
    :host {
        width: 200px;
        grid-template: "header" 1rem / auto;
    }
    @media (max-width: 320px) {
        :host {
            width: 100%;
        }
    }
</style>

<fm-layout import="card">
    <header slot="header"></header>
</fm-layout>
~~~
`;
