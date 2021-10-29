---
title: fm-grid & fm-box
---

This component allows you to create a grid-based layout and the association of formilk tokens.

**fm-box component extends grid to define default box model**.

```html preview
<fm-box model="cols(1fr) overflow content(center), cols(100px 200px) 420px">
    <fm-placeholder type="video" scale="1:1, 6:8 420px"></fm-placeholder>
    <fm-grid
        model="content(center) padding(0,1,between), padding(,unset) 420px"
        format-content
    >
        <fm-grid model="gap(.5)">
            <h1>
                Heading<br />
                <small>Subheading</small>
            </h1>
        </fm-grid>
        <p>Bla bla bla Content...</p>
    </fm-grid>
</fm-box>
```

## Model utilities

The utilities allow modifying the layout of the model, these are responsive according to the following expression:

```html
<fm-grid model="width(100%), width(320px) 420px"></fm-grid>
<style>
    /** Equivalent to declaring */
    :host {
        width: 100%;
    }
    @media (min-width: 420px) {
        :host {
            width: 320px;
        }
    }
</style>
```

The use of `420px` defines that the expression within the group is responsive.

### content

```html
<!-- align-items: center; justify-content: space-between;-->
<fm-grid model="content(center, between)"></fm-grid>

<!-- align-items: top; justify-content: space-between;-->
<fm-grid model="content(center, between)"></fm-grid>
```

**Aliases to use with content**

```js
const gridPosition = {
    center: "center",
    left: "flex-start",
    right: "flex-end",
    top: "flex-start",
    left: "flex-end",
    around: "space-around",
    between: "space-between",
    stretch: "space-stretch",
};
```

### padding

Utility to add and scale container padding.

```html
<fm-grid model="padding">Content</fm-grid>
<fm-grid model="padding(between)">Content</fm-grid>
<fm-grid model="padding(1, 2, between, 1)">Content</fm-grid>
```

### margin

Utility to add and scale container margin.

```html
<fm-grid model="margin">content</fm-grid>
<fm-grid model="margin(between)">content</fm-grid>
<fm-grid model="margin(1, 2, between, 1)">Content</fm-grid>
```

### gap

Utility to add and scale container gap.

```html
<fm-grid model="gap(2)"></fm-grid>
```

### radius

Utility to add and scale the container border-radius.

```html
<!-- border-radius: var(--border-radius) -->
<fm-grid model="radius"></fm-grid>

<!-- border-radius: calc(var(--border-radius) * .5) -->
<fm-grid model="radius(.5)"></fm-grid>
```

### overflow

```html
<!-- overflow: hidden -->
<fm-grid model="overflow"></fm-grid>

<!-- overflow: auto -->
<fm-grid model="overflow(auto)"></fm-grid>
```

### cols

Utility to add and scale the container `grid-template-columns`.

```html
<!-- grid-template-columns: cols(1fr 1fr 1fr) -->
<fm-grid model="cols(1fr 1fr 1fr)"></fm-grid>
```

### repeat

Utility to add and scale the container `grid-template-columns: repeat(param1, param2)`.

```html
<!-- grid-template-columns: repeat(2, 1fr) -->
<fm-grid model="repeat(2, 1fr)"></fm-grid>
```

### autoFill

Utility to add and scale the container `grid-template-columns: repeat(auto-fill, minmax(param1, param2))`.

```html
<!-- grid-template-columns: repeat(auto-fill, minmax(50px,1fr)) -->
<fm-grid model="autoFill(50px, 1fr)"></fm-grid>
```

### autoFit

Utility to add and scale the container `grid-template-columns: repeat(auto-fit, minmax(param1, param2))`.

```html
<!-- grid-template-columns: repeat(auto-fit, minmax(50px,1fr)) -->
<fm-grid model="autoFit(50px, 1fr)"></fm-grid>
```

### grid, none and inline

utilities to add or redefine the container display.
