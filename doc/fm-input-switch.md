---
title: fm-input-checkbox
---

Creates an `input[type=checkbox]` with effect on forms that adapts according to the definition of the slot.

```html preview
<fm-input-switch></fm-input-switch>
<fm-input-switch checked></fm-input-switch>
<style>
    fm-input-switch {
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
