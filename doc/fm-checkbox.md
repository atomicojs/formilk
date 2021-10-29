---
title: fm-checkbox
---

Creates an `input[type=checkbox]` with effect on forms that adapts according to the definition of the slot.

```html preview
<fm-checkbox>slot</fm-checkbox>
<fm-checkbox checked>slot</fm-checkbox>
<style>
    fm-checkbox {
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

```html inject
<fm-theme
    select="size-min, shadow-action, border-radius, opacity-disabled, #colors-checkbox"
></fm-theme>
```
