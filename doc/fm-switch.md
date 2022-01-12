---
title: fm-switch
---

Creates an `input[type=checkbox]` with effect on forms that adapts according to the definition of the slot.

```html preview
<fm-grid>
    <h3>Normal radios</h3>
    <fm-grid model="cols(auto auto auto)">
        <fm-switch>slot</fm-switch>
        <fm-switch checked>slot</fm-switch>
        <fm-switch disabled checked>slot</fm-switch>
    </fm-grid>
    <h3>Small radios</h3>
    <fm-grid model="cols(auto auto auto)">
        <fm-switch size="small">slot</fm-switch>
        <fm-switch size="small" checked>slot</fm-switch>
        <fm-switch size="small" disabled>slot</fm-switch>
    </fm-grid>
</fm-grid>
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
