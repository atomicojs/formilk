---
title: fm-radio
---

Creates an `input[type=radio]` with effect on forms.

```html preview
<fm-grid>
    <h3>Normal radios</h3>
    <fm-grid model="cols(auto auto auto)">
        <fm-radio>slot</fm-radio>
        <fm-radio checked>slot</fm-radio>
        <fm-radio disabled checked>slot</fm-radio>
    </fm-grid>
    <h3>Small radios</h3>
    <fm-grid model="cols(auto auto auto)">
        <fm-radio size="small">slot</fm-radio>
        <fm-radio size="small" checked>slot</fm-radio>
        <fm-radio size="small" disabled>slot</fm-radio>
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

## Custom properties

```html inject
<fm-theme
    select="size-min, shadow-action, border-radius, opacity-disabled, #colors-checkbox"
></fm-theme>
```
