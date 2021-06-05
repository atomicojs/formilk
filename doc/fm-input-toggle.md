---
title: fm-input-checkbox
---

Crea un input toggle con efecto sobre formulario.

```html preview
<fm-input-toggle></fm-input-toggle>
<fm-input-toggle checked></fm-input-toggle>
<style>
    fm-input-toggle {
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

| Custom property                     | Type   | Description                                     |
| ----------------------------------- | ------ | ----------------------------------------------- |
| `--fm-input-checkbox--bgcolor`      | color  | default background-color for component          |
| `--fm-input-checkbox--border`       | color  | deafult color for component                     |
| `--fm-input-checkbox--on-checked`   | color  | default background-color for component[checked] |
| `--fm-input-checkbox--on-unchecked` | color  | default background-color for component          |
| `--fm-input-checkbox--shadow`       | shadow | default padding for component                   |
| `--fm-input-checkbox--radius`       | size   | default border-radius for component             |
