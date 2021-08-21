---
title: fm-input-checkbox
---

Create a checkbox with effect on the form.

```html preview
<fm-input-checkbox>slot</fm-input-checkbox>
<fm-input-checkbox checked>slot</fm-input-checkbox>
<style>
    fm-input-checkbox {
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

## Slots

| Slot | Type    | Description                                        |
| ---- | ------- | -------------------------------------------------- |
| icon | Element | Icon to associate with the space reserved for icon |

## Custom properties

| Custom property                     | Type   | Description                               |
| ----------------------------------- | ------ | ----------------------------------------- |
| `--fm-input-checkbox--bg`           | color  | default background for component          |
| `--fm-input-checkbox--border`       | color  | deafult color for component               |
| `--fm-input-checkbox--on-checked`   | color  | default background for component[checked] |
| `--fm-input-checkbox--on-unchecked` | color  | default background for component          |
| `--fm-input-checkbox--shadow`       | shadow | default padding for component             |
| `--fm-input-checkbox--radius`       | size   | default border-radius for component       |
