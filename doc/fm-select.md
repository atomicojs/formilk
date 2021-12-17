---
title: fm-select
---

Creates a `select` with effect on forms that adapts according to the definition of the slot.

```html preview
<div>
    <fm-select placeholder="Select item">
        <fm-select-option value="1" label="Item 1"></fm-select-option>
        <fm-select-option value="2" label="Item 2"></fm-select-option>
        <fm-select-option value="3" label="Item 3"></fm-select-option>
    </fm-select>
    <fm-select placeholder="Select item(I'm small)" size="small">
        <fm-select-option value="1" label="Item 1"></fm-select-option>
        <fm-select-option value="2" label="Item 2"></fm-select-option>
        <fm-select-option value="3" label="Item 3"></fm-select-option>
    </fm-select>
</div>
<style>
    fm-select {
        margin: 1rem 0rem;
    }
    div {
        display: flex;
        flex-flow: column nowrap;
    }
</style>
```

## Properties

| Property | Type    | Description               |
| -------- | ------- | ------------------------- |
| name     | string  | Define `select[name]`     |
| required | boolean | Define `select[value]`    |
| shadow   | boolean | add token shadow-action   |
| disabled | boolean | Define `select[disabled]` |

## Custom properties

```html inject
<fm-theme
    select="size-min, size-small, shadow-action, border-radius, space-x, space-y, #colors-input"
></fm-theme>
```
