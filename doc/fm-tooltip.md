---
title: fm-tooltip
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<div>
    <fm-tooltip width="200px">
        <fm-button>
            <fm-icon type="menu" size=".8rem" slot="icon"></fm-icon> Menu
        </fm-button>
        <div slot="tooltip">
            <fm-button ghost align="left">
                <fm-icon size=".8rem" slot="prefix"></fm-icon> Add
            </fm-button>
            <fm-button ghost align="left">
                <fm-icon size=".8rem" slot="prefix"></fm-icon> Edit
            </fm-button>
            <fm-tooltip>
                <fm-button ghost align="left">
                    <fm-icon type="avatar" size=".8rem" slot="prefix"></fm-icon>
                    More options
                </fm-button>
                <div slot="tooltip">
                    <fm-button ghost align="left"
                        ><fm-icon size=".8rem" slot="prefix"></fm-icon> Move
                    </fm-button>
                    <fm-button ghost align="left">
                        <fm-icon size=".8rem" slot="prefix"></fm-icon> Transfer
                    </fm-button>
                    <fm-button ghost align="left">
                        <fm-icon size=".8rem" slot="prefix"></fm-icon> Remove
                    </fm-button>
                </div>
            </fm-tooltip>
        </div>
    </fm-tooltip>
</div>

<style>
    fm-button {
        width: 100%;
    }
</style>
```
