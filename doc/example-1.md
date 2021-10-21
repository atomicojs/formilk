---
title: fm-accordion
---

Create a container as an alert that adapts according to the definition of the slot

```
cols(1,minmax(auto,grid)) red centered(1fr)
```

```html preview
<fm-box
    model="
        repeat(2,auto)
        content(center,between)
        padding
        radius
        shadow(1)"
>
    <div>
        <strong>Brand</strong>
    </div>

    <fm-grid model="repeat(var(--items), auto)">
        <fm-button ghost>Item</fm-button>
        <fm-tooltip width="200px">
            <fm-avatar slot="trigger"></fm-avatar>
            <fm-button ghost align="left">
                <fm-icon size=".8rem" slot="prefix"></fm-icon> Edit profile
            </fm-button>
            <fm-button ghost align="left">
                <fm-icon size=".8rem" slot="prefix"></fm-icon> Disconnect
            </fm-button>
            <fm-tooltip>
                <fm-button slot="trigger" ghost align="left">
                    <fm-icon type="avatar" size=".8rem" slot="prefix"></fm-icon>
                    More options
                </fm-button>
                <fm-button ghost align="left"
                    ><fm-icon size=".8rem" slot="prefix"></fm-icon> Move
                </fm-button>
                <fm-button ghost align="left">
                    <fm-icon size=".8rem" slot="prefix"></fm-icon>
                    Transfer
                </fm-button>
                <fm-button ghost align="left">
                    <fm-icon size=".8rem" slot="prefix"></fm-icon>
                    Remove
                </fm-button>
            </fm-tooltip>
        </fm-tooltip>
    </fm-grid>
</fm-box>
```
