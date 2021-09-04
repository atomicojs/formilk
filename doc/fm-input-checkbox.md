---
title: fm-input-checkbox
---

Creates an `input[type=checkbox]` with effect on forms that adapts according to the definition of the slot.

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

Use the [input token system](../tokens/input)
