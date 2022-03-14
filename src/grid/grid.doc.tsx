import { Grid } from "./grid";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Grid",
};

export default md`
# Grid

Greates a grid that accesses the tokens defined by formilk through expressions

#### width

~~~ts tab(width, Syntax)
width( width: size, minWidth?: size, maxWidth?: size )
~~~

~~~ts tab(width, Example)
width(100%,, 200px );
~~~

~~~css tab(width, CSS output)
:host {
    width: 100%;
    max-width: 200px;
}
~~~

#### height

~~~ts tab(height, Syntax)
height( width: size, minHeight?: size, maxHeight?: size )
~~~

~~~ts tab(height, Example)
height(100%,, 200px );
~~~

~~~css tab(height, CSS output)
:host {
    height: 100%;
    max-height: 200px;
}
~~~

#### gap

~~~ts tab(gap, Syntax)
gap( size?: xxs | xs | s | m | xl )
~~~

~~~ts tab(gap, Example)
gap(xxs);
~~~

~~~css tab(gap, CSS output)
:host {
    gap: var(--size-xxs);
}
~~~

#### radius

~~~ts tab(radius, Example)
radius;
~~~

~~~css tab(radius, CSS output)
:host {
    border-radius: var(--border-radius);
}
~~~

#### position

~~~ts tab(position, Syntax)
position(position, top, right, bottom, left);
~~~

~~~ts tab(position, Example)
position(absolute, 0);
~~~

~~~css tab(position, CSS output)
:host {
    position: absolute;
    top: 0;
}
~~~

#### hide and show

~~~ts tab(hide, Example)
hide, show 320px
~~~

~~~css tab(hide, CSS output)
:host {
    display: none;
}

@media (min-width: 320px) {
    display: grid;
}
~~~

#### slot

~~~ts tab(slot, Syntax)
slot(selector, cssText);
~~~

~~~ts tab(slot, Example)
slot( *, margin: auto );
~~~

~~~css tab(slot, CSS output)
::slotted(*) {
    margin: auto;
}
~~~

#### content

~~~ts tab(content, Syntax)
content(place - content);
~~~

~~~ts tab(content, Example)
content(center);
~~~

~~~css tab(content, CSS output)
:host {
    place-content: center;
}
~~~

#### cols

~~~ts tab(cols, Syntax)
cols(grid - template - columns);
~~~

~~~ts tab(cols, Example)
cols( 1fr 1fr 1fr )
~~~

~~~css tab(cols, CSS output)
:host {
    grid-template-columns: 1fr 1fr 1fr;
}
~~~

#### rows

~~~ts tab(rows, Syntax)
rows(grid - template - rows);
~~~

~~~ts tab(rows, Example)
rows( 50px 50px )
~~~

~~~css tab(rows, CSS output)
:host {
    grid-template-rows: 50px 50px;
}
~~~

#### padding

~~~ts tab(padding, Syntax)
padding(
    paddingY: xxs | xs | s | m | xl,
    paddingX?: xxs | xs | s | m | xl
)
~~~

~~~ts tab(padding, Example)
padding(xxs);
~~~

~~~css tab(padding, CSS output)
:host {
    padding: var(--size-xxs);
}
~~~
`;
