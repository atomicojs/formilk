---
title: fm-checkbox
---

Creates an `input[type=radio]` with effect on forms.

```html preview
<form>
    <fm-radio name="radio" value="1">slot</fm-radio>
    <fm-radio name="radio" value="2" checked>slot</fm-radio>
</form>
<style>
    fm-radio {
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

```html inject
<fm-theme
    select="size-min, shadow-action, border-radius, opacity-disabled, #colors-checkbox"
></fm-theme>
```
