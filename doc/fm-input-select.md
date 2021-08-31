---
title: fm-input-checkbox
---

Crea un input toggle con efecto sobre formulario.

```html preview
<fm-input-select>
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

| Custom property                     | Type   | Description                               |
| ----------------------------------- | ------ | ----------------------------------------- |
| `--fm-input-checkbox--bg`           | color  | default background for component          |
| `--fm-input-checkbox--border`       | color  | deafult color for component               |
| `--fm-input-checkbox--on-checked`   | color  | default background for component[checked] |
| `--fm-input-checkbox--on-unchecked` | color  | default background for component          |
| `--fm-input-checkbox--shadow`       | shadow | default padding for component             |
| `--fm-input-checkbox--radius`       | size   | default border-radius for component       |
