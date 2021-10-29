---
title: fm-checkbox
---

Creates an `input[type=checkbox]` with effect on forms that adapts according to the definition of the slot.

```html preview
<fm-switch></fm-switch>
<fm-switch checked></fm-switch>
<style>
    fm-switch {
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

```html inject
<fm-theme
    select="size-min, shadow-action, border-radius, opacity-disabled, #colors-checkbox"
></fm-theme>
```
