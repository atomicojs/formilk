---
title: fm-input-checkbox
---

Create a radio input with effect on form.

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

| Custom property                     | Type   | Description                               |
| ----------------------------------- | ------ | ----------------------------------------- |
| `--fm-input-checkbox--bg`           | color  | default background for component          |
| `--fm-input-checkbox--border`       | color  | deafult color for component               |
| `--fm-input-checkbox--on-checked`   | color  | default background for component[checked] |
| `--fm-input-checkbox--on-unchecked` | color  | default background for component          |
| `--fm-input-checkbox--shadow`       | shadow | default padding for component             |
| `--fm-input-checkbox--radius`       | size   | default border-radius for component       |
