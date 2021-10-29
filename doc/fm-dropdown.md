---
title: fm-dropdown
---

Create a dropdown

## Default

```html preview
<fm-dropdown width="200px">
    <fm-button slot="action">
        <fm-icon type="menu" size=".8rem" slot="icon"></fm-icon> Menu
    </fm-button>
    <fm-button ghost align="left">
        <fm-icon size=".8rem" slot="prefix"></fm-icon> Add
    </fm-button>
    <fm-button ghost align="left">
        <fm-icon size=".8rem" slot="prefix"></fm-icon> Edit
    </fm-button>
    <fm-dropdown>
        <fm-button slot="action" ghost align="left">
            <fm-icon type="avatar" size=".8rem" slot="prefix"></fm-icon>
            More options
        </fm-button>
        <fm-button ghost align="left"
            ><fm-icon size=".8rem" slot="prefix"></fm-icon> Move
        </fm-button>
        <fm-button ghost align="left">
            <fm-icon size=".8rem" slot="prefix"></fm-icon> Transfer
        </fm-button>
        <fm-button ghost align="left">
            <fm-icon size=".8rem" slot="prefix"></fm-icon> Remove
        </fm-button>
    </fm-dropdown>
</fm-dropdown>
```

## Properties

| Property     | Type    | Description                                                                 |
| ------------ | ------- | --------------------------------------------------------------------------- |
| show         | boolean | defines the position divide of the tabs                                     |
| showWithOver | boolean | defines the position of the tabs                                            |
| position     | string  | the value is defined automatically, according to the window space           |
| width        | string  | defines the width of the dropbox, this is inherited to all nested dropboxes |

## Custom properties

```html inject
<fm-theme select="#colors-box, shadow-layer, space-around"></fm-theme>
```

## [show-with-over]

```html preview
<fm-dropdown width="200px" show-with-over>
    <fm-button slot="action">
        <fm-icon type="menu" size=".8rem" slot="icon"></fm-icon> Menu
    </fm-button>
    <fm-button ghost align="left">
        <fm-icon size=".8rem" slot="prefix"></fm-icon> Add
    </fm-button>
    <fm-button ghost align="left">
        <fm-icon size=".8rem" slot="prefix"></fm-icon> Edit
    </fm-button>
    <fm-dropdown>
        <fm-button slot="action" ghost align="left">
            <fm-icon type="avatar" size=".8rem" slot="prefix"></fm-icon>
            More options
        </fm-button>
        <fm-button ghost align="left"
            ><fm-icon size=".8rem" slot="prefix"></fm-icon> Move
        </fm-button>
        <fm-button ghost align="left">
            <fm-icon size=".8rem" slot="prefix"></fm-icon> Transfer
        </fm-button>
        <fm-button ghost align="left">
            <fm-icon size=".8rem" slot="prefix"></fm-icon> Remove
        </fm-button>
    </fm-dropdown>
</fm-dropdown>
```
