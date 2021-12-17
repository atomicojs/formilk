---
title: fm-input
---

Creates an `input` with effect on forms that adapts according to the definition of the slot.

```html preview
<div>
    <strong>Default</strong>
    <fm-input placeholder="Placeholder"> </fm-input>
    <strong>Status</strong>
    <fm-input placeholder="Placeholder" status="info">
        <fm-icon size="10px" slot="suffix" type="asterisk"></fm-icon>
    </fm-input>
    <fm-input placeholder="Placeholder" status="warning">
        <fm-icon size="10px" slot="suffix" type="asterisk"></fm-icon>
    </fm-input>
    <fm-input placeholder="Placeholder" status="danger">
        <fm-icon size="10px" slot="suffix" type="asterisk"></fm-icon>
    </fm-input>
    <fm-input placeholder="Placeholder" status="success">
        <fm-icon size="10px" slot="suffix" type="asterisk"></fm-icon>
    </fm-input>
    <strong>Composition with other inputs</strong>
    <fm-input placeholder="Size" type="number">
        <fm-select
            size="small"
            slot="suffix"
            placeholder="px"
            narrow
            style="height:100%"
        >
            <fm-select-option value="px"></fm-select-option>
            <fm-select-option value="%"></fm-select-option>
            <fm-select-option value="em"></fm-select-option>
            <fm-select-option value="rem"></fm-select-option>
        </fm-select>
    </fm-input>
    <fm-input placeholder="Size" type="number">
        <fm-button size="small" slot="suffix">
            <fm-icon slot="prefix" type="config"></fm-icon>
        </fm-button>
    </fm-input>
    <strong>Ghost and narrow style</strong>
    <fm-input placeholder="Placeholder" ghost narrow></fm-input>
</div>
<style>
    fm-input {
        margin: 1rem 0rem;
    }
    div {
        display: flex;
        flex-flow: column nowrap;
    }
</style>
```

## Properties

| Property  | Type                                      | Description                        |
| --------- | ----------------------------------------- | ---------------------------------- |
| name      | string                                    | Define `input[name]`               |
| type      | string                                    | Define `input[type]`               |
| value     | string                                    | Define `input[value]`              |
| list      | string                                    | Define `input[list]`               |
| pattern   | string                                    | Define `input[pattern]`            |
| min       | string                                    | Define `input[min]`                |
| max       | string                                    | Define `input[max]`                |
| minLength | string                                    | Define `input[minLength]`          |
| maxLength | string                                    | Define `input[maxLength]`          |
| required  | string                                    | Define `input[required]`           |
| disabled  | string                                    | Define `input[disabled]`           |
| status    | "info", "success", "warning" or ""danger" | Import a global color from formilk |

## Slots

| Slot       | Type    | Description                    |
| ---------- | ------- | ------------------------------ |
| prefix     | Element | reserved space before label    |
| Unassigned | Element | General label                  |
| suffix     | Element | space reserved for after input |

## Custom properties

```html inject
<fm-theme
    select="size-min, size-small, shadow-action, border-radius, space-x, space-y, #colors-input, #colors-status"
></fm-theme>
```

## Examples

### fm-input with label

```html preview
<fm-input>
    <span>Label:</span>
</fm-input>
```

### fm-input with icon

Adjust the spaces in the layout to improve the visual of the icon.

```html preview
<fm-input>
    <fm-icon type="avatar" slot="prefix"> </fm-icon>
</fm-input>
```

### fm-input with icon and label

Adjust the spaces in the layout to improve the visual of the icon.

```html preview
<fm-input>
    <fm-icon type="avatar"> </fm-icon>
    <span>Label</span>
</fm-input>
```

### fm-input[list]

Allows the use of lists

```html preview
<fm-input list="browsers">
    <span>Browser?</span>
    <datalist id="browsers">
        <option value="Edge"></option>
        <option value="Firefox"></option>
        <option value="Chrome"></option>
        <option value="Opera"></option>
        <option value="Safari"></option>
    </datalist>
</fm-input>
```
