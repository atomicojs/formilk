---
title: fm-checkbox
---

Creates a `select` with effect on forms that adapts according to the definition of the slot.

```html preview
<fm-select placeholder="Select item">
    <option value="1">Item 1</option>
    <option value="1">Item 2</option>
    <option value="1">Item 3</option>
</fm-select>
<fm-select>
    <optgroup label="Swedish Cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </optgroup>
</fm-select>
<style>
    fm-select {
        margin: 0.25rem;
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
