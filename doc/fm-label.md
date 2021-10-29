---
title: fm-label
---

reflects the click event to the component defined as slot action

```html preview
<fm-label>
    Label
    <fm-checkbox slot="action"></fm-checkbox>
</fm-label>
<style>
    fm-label {
        width: 200px;
    }
</style>
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
