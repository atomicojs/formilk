---
title: fm-label
---

reflects the click event to the component defined as slot action

```html preview
<fm-grid>
    <fm-label>
        Horizontal label
        <fm-checkbox slot="action"></fm-checkbox>
    </fm-label>
    <fm-label vertical>
        Vertical label
        <fm-input slot="action"></fm-input>
    </fm-label>
</fm-grid>
```

## Properties

| Property       | Type    | Description                      |
| -------------- | ------- | -------------------------------- |
| disableReflect | boolean | avoid reflecting the click event |
| reverse        | boolean | reverse the order of the content |

## Custom properties

```html inject
<fm-theme select="space-between, size-min"></fm-theme>
```

## Example

### fm-label[reverse]

```html preview
<fm-label reverse>
    Label
    <fm-checkbox slot="action"></fm-checkbox>
</fm-label>
<style>
    fm-label {
        width: 200px;
    }
</style>
```
