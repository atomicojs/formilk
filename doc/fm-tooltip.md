---
title: fm-tooltip
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<div>
    <fm-tooltip>
        <fm-button>Options</fm-button>
        <div slot="tooltip">
            <fm-button ghost>
                <fm-icon size=".8rem" slot="icon"></fm-icon> Add
            </fm-button>
            <fm-button ghost>
                <fm-icon size=".8rem" slot="icon"></fm-icon> Edit
            </fm-button>
            <fm-tooltip>
                <fm-button>Options</fm-button>
                <div slot="tooltip">
                    <fm-button ghost
                        ><fm-icon size=".8rem" slot="icon"></fm-icon> Add
                    </fm-button>
                    <fm-button ghost>
                        <fm-icon size=".8rem" slot="icon"></fm-icon> Edit
                    </fm-button>
                    <fm-button ghost>
                        <fm-icon size=".8rem" slot="icon"></fm-icon> Remove
                    </fm-button>
                </div>
            </fm-tooltip>
        </div>
    </fm-tooltip>
</div>
```
