---
title: fm-checkbox
---

Creates an `input[type=checkbox]` with effect on forms that adapts according to the definition of the slot.

```html preview
<fm-grid>
    <h3>Normal checkboxes</h3>
    <fm-grid model="cols(auto auto auto)">
        <fm-checkbox>slot</fm-checkbox>
        <fm-checkbox checked>slot</fm-checkbox>
        <fm-checkbox disabled checked>slot</fm-checkbox>
    </fm-grid>
    <h3>Small checkboxes</h3>
    <fm-grid model="cols(auto auto auto)">
        <fm-checkbox size="small">slot</fm-checkbox>
        <fm-checkbox size="small" checked>slot</fm-checkbox>
        <fm-checkbox size="small" disabled>slot</fm-checkbox>
    </fm-grid>
</fm-grid>
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
