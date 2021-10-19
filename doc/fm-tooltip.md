---
title: fm-tooltip
---

Create a container as an alert that adapts according to the definition of the slot

## Default

```html preview
<fm-tooltip width="200px">
    <fm-button>
        <fm-icon type="menu" size=".8rem" slot="icon"></fm-icon> Menu
    </fm-button>
    <fm-button slot="tooltip" ghost align="left">
        <fm-icon size=".8rem" slot="prefix"></fm-icon> Add
    </fm-button>
    <fm-button slot="tooltip" ghost align="left">
        <fm-icon size=".8rem" slot="prefix"></fm-icon> Edit
    </fm-button>
    <fm-tooltip slot="tooltip">
        <fm-button ghost align="left">
            <fm-icon type="avatar" size=".8rem" slot="prefix"></fm-icon>
            More options
        </fm-button>
        <fm-button slot="tooltip" ghost align="left"
            ><fm-icon size=".8rem" slot="prefix"></fm-icon> Move
        </fm-button>
        <fm-button slot="tooltip" ghost align="left">
            <fm-icon size=".8rem" slot="prefix"></fm-icon> Transfer
        </fm-button>
        <fm-button slot="tooltip" ghost align="left">
            <fm-icon size=".8rem" slot="prefix"></fm-icon> Remove
        </fm-button>
    </fm-tooltip>
</fm-tooltip>
```

## Show with over

```html preview
<fm-tooltip width="200px" show-with-over>
    <fm-button>
        <fm-icon type="menu" size=".8rem" slot="icon"></fm-icon> Menu
    </fm-button>
    <fm-button slot="tooltip" ghost align="left">
        <fm-icon size=".8rem" slot="prefix"></fm-icon> Add
    </fm-button>
    <fm-button slot="tooltip" ghost align="left">
        <fm-icon size=".8rem" slot="prefix"></fm-icon> Edit
    </fm-button>
    <fm-tooltip slot="tooltip">
        <fm-button ghost align="left">
            <fm-icon type="avatar" size=".8rem" slot="prefix"></fm-icon>
            More options
        </fm-button>
        <fm-button slot="tooltip" ghost align="left"
            ><fm-icon size=".8rem" slot="prefix"></fm-icon> Move
        </fm-button>
        <fm-button slot="tooltip" ghost align="left">
            <fm-icon size=".8rem" slot="prefix"></fm-icon> Transfer
        </fm-button>
        <fm-button slot="tooltip" ghost align="left">
            <fm-icon size=".8rem" slot="prefix"></fm-icon> Remove
        </fm-button>
    </fm-tooltip>
</fm-tooltip>
```
