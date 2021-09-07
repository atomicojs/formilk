---
title: fm-button
---

Creates an `input` with effect on forms that adapts according to the definition of the slot.

```html preview
<div>
    <fm-input-basic placeholder="Placeholder"></fm-input-basic>
    <fm-input-basic placeholder="Placeholder" theme="warning"></fm-input-basic>
    <fm-input-basic placeholder="Placeholder" theme="danger"></fm-input-basic>
    <fm-input-basic placeholder="Placeholder" theme="success"></fm-input-basic>
</div>
<style>
    fm-input-basic {
        margin: 1rem;
    }
    div {
        display: flex;
        flex-flow: column nowrap;
    }
</style>
```

## Properties

| Property  | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| name      | string | Define `input[name]`               |
| type      | string | Define `input[type]`               |
| value     | string | Define `input[value]`              |
| list      | string | Define `input[list]`               |
| pattern   | string | Define `input[pattern]`            |
| min       | string | Define `input[min]`                |
| max       | string | Define `input[max]`                |
| minLength | string | Define `input[minLength]`          |
| maxLength | string | Define `input[maxLength]`          |
| required  | string | Define `input[required]`           |
| disabled  | string | Define `input[disabled]`           |
| theme     | string | Import a global color from formilk |

## Slots

| Slot       | Type    | Description                                        |
| ---------- | ------- | -------------------------------------------------- |
| icon       | Element | Icon to associate with the space reserved for icon |
| Unassigned | Element | Text label on the left side of the input           |

## Custom properties

Use the [input token system](/tokens/input)

## Examples

### fm-input-basic with label

```html preview
<fm-input-basic>
    <span>Label:</span>
</fm-input-basic>
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
