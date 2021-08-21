---
title: fm-button
---

Create an input with effect on form.

```html preview
<fm-input-basic placeholder="User or Email"></fm-input-basic>
<fm-input-basic placeholder="User or Email" theme="warning"></fm-input-basic>
<fm-input-basic placeholder="User or Email" theme="danger"></fm-input-basic>
<fm-input-basic placeholder="User or Email" theme="success"></fm-input-basic>
<style>
    fm-input-basic {
        margin: 0.25rem;
    }
</style>
```

## Properties

| Property  | Type   | Description               |
| --------- | ------ | ------------------------- |
| name      | string | Define `input[name]`      |
| value     | string | Define `input[value]`     |
| list      | string | Define `input[list]`      |
| type      | string | Define `input[type]`      |
| pattern   | string | Define `input[pattern]`   |
| min       | string | Define `input[min]`       |
| max       | string | Define `input[max]`       |
| minLength | string | Define `input[minLength]` |
| maxLength | string | Define `input[maxLength]` |
| required  | string | Define `input[required]`  |
| disabled  | string | Define `input[disabled]`  |

## Slots

| Slot       | Type    | Description                                     |
| ---------- | ------- | ----------------------------------------------- |
| icon       | Element | Icono a asociar al espacio reservado para icono |
| Unassigned | Element | Label de texto al lateral izquierdo del input   |

## Custom properties

| Custom property      | Type   | Description                         |
| -------------------- | ------ | ----------------------------------- |
| `--fm-input--bg`     | color  | default background for component    |
| `--fm-input--radius` | size   | default border-radius for component |
| `--fm-input--shadow` | shadow | default shadow for component        |
| `--fm-input--line`   | color  | default color for component         |

## Examples

### fm-input-basic with label

```html preview
<div style="display:flex; gap:1rem">
    <fm-input-basic>
        <span>Label:</span>
    </fm-input-basic>
    <fm-button>
        <span>Submit</span>
    </fm-button>
</div>
```

### fm-input-basic with icon

Adjust the spaces in the layout to improve the visual of the icon.

```html preview
<fm-input-basic>
    <svg slot="icon" height="1.5rem" viewBox="0 0 22 22">
        <circle
            cx="11"
            cy="11"
            r="8"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
        ></circle>
    </svg>
</fm-input-basic>
```

### fm-input-basic with icon and label

Adjust the spaces in the layout to improve the visual of the icon.

```html preview
<fm-input-basic>
    <svg slot="icon" height="1.5rem" viewBox="0 0 22 22">
        <circle
            cx="11"
            cy="11"
            r="8"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
        ></circle>
    </svg>
    <span>Label</span>
</fm-input-basic>
```

### fm-input-basic[list]

Allows the use of lists

```html preview
<fm-input-basic list="browsers">
    <span>Browser?</span>
    <datalist id="browsers">
        <option value="Edge"></option>
        <option value="Firefox"></option>
        <option value="Chrome"></option>
        <option value="Opera"></option>
        <option value="Safari"></option>
    </datalist>
</fm-input-basic>
```
