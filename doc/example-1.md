---
title: fm-accordion
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<fm-grid model="width(320px)">
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
    </fm-box>
    <fm-box>
        <fm-tabs>
            <fm-button slot="tab" ghost value="config" active>Config</fm-button>
            <fm-button slot="tab" ghost value="users">Users</fm-button>
            <fm-grid slot="config" model="padding">
                <fm-label>
                    Option one
                    <fm-switch slot="action"></fm-switch>
                </fm-label>
                <fm-label>
                    Option two
                    <fm-switch slot="action"></fm-switch>
                </fm-label>
                <fm-label>
                    Option three
                    <fm-switch slot="action"></fm-switch>
                </fm-label>
                <fm-label>
                    Option four
                    <fm-switch slot="action"></fm-switch>
                </fm-label>
                <fm-accordion-group>
                    <fm-accordion>
                        <strong slot="header">More options</strong>
                        <fm-label>
                            Option five
                            <fm-switch slot="action"></fm-switch>
                        </fm-label>
                    </fm-accordion>
                </fm-accordion-group>
            </fm-grid>
            <fm-grid slot="users" model="padding ">
                <fm-label>
                    <fm-icon slot="prefix" type="alert"></fm-icon>
                    nulla tempor laboris eu proident eiusmod anim fugiat dolore
                    non excepteur qui adipisicing est cillum eiusmod irure enim
                    sunt velit
                </fm-label>
                <fm-grid model="cols(1fr 1fr)">
                    <fm-button>Logout</fm-button>
                    <fm-button status="danger">Delete</fm-button>
                </fm-grid>
            </fm-grid>
        </fm-tabs>
    </fm-box>
</fm-grid>
```
