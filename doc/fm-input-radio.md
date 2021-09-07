---
title: fm-input-checkbox
---

Creates an `input[type=radio]` with effect on forms.

```html preview
<form>
    <fm-input-radio name="radio" value="1">slot</fm-input-radio>
    <fm-input-radio name="radio" value="2" checked>slot</fm-input-radio>
</form>
<style>
    fm-input-radio {
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
