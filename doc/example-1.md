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
        width(320px) 
        content(center,between) 
        padding 
        radius 
        theme(primary) 
        shadow(1),
        
        width(520px)
        520px
        "
>
    <div>
        <strong>Brand</strong>
    </div>
    <fm-box model=" repeat(var(--items), auto) ">
        <fm-button ghost>Item</fm-button>
        <fm-tooltip width="200px">
            <fm-avatar></fm-avatar>
            <fm-button slot="tooltip" ghost align="left">
                <fm-icon size=".8rem" slot="prefix"></fm-icon> Edit profile
            </fm-button>
            <fm-button slot="tooltip" ghost align="left">
                <fm-icon size=".8rem" slot="prefix"></fm-icon> Disconnect
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
                    <fm-icon size=".8rem" slot="prefix"></fm-icon>
                    Transfer
                </fm-button>
                <fm-button slot="tooltip" ghost align="left">
                    <fm-icon size=".8rem" slot="prefix"></fm-icon>
                    Remove
                </fm-button>
            </fm-tooltip>
        </fm-tooltip>
    </fm-box>
</fm-box>
```
