---
title: fm-checkbox
---

Creates a `select` with effect on forms that adapts according to the definition of the slot.

```html preview
<fm-input-select placeholder="Select item">
    <option value="1">Item 1</option>
    <option value="1">Item 2</option>
    <option value="1">Item 3</option>
</fm-input-select>
<fm-input-select>
    <optgroup label="Swedish Cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </optgroup>
</fm-input-select>
<style>
    fm-input-select {
        margin: 0.25rem;
    }
</style>
```

## Properties

| Property | Type    | Description              |
| -------- | ------- | ------------------------ |
| name     | string  | Define `input[name]`     |
| value    | string  | Define `input[value]`    |
| checked  | boolean | Define `input[checked]`  |
| disabled | boolean | Define `input[disabled]` |

## Custom properties

Use the [input token system](/tokens/input)
