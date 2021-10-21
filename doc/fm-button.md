---
title: fm-button
---

Create a `button` with effect on forms that adapts according to the definition of the slot.

```html preview
<fm-grid>
    <fm-button href="#" ghost> button </fm-button>
    <fm-button>button</fm-button>
    <fm-button status="info">button</fm-button>
    <fm-button status="success">button</fm-button>
    <fm-button status="warning">button</fm-button>
    <fm-button status="danger">button</fm-button>
    <fm-button disabled>button</fm-button>
</fm-grid>
```

## Properties

| Property | Type                         | Description                                                    |
| -------- | ---------------------------- | -------------------------------------------------------------- |
| name     | string                       | Define `button[name]`                                          |
| value    | string                       | Define `button[value]`                                         |
| type     | string                       | Define `button[type]`                                          |
| disabled | boolean                      | Define `button[disabled]`                                      |
| theme    | string                       | Import a color theme from the formilk custom properties system |
| size     | "small", "large" or "normal" | Change representation size                                     |

## Slots

| Slot       | Type    | Description                 |
| ---------- | ------- | --------------------------- |
| icon       | Element | Space reserved for the icon |
| Unassigned | Element | General content             |

## Custom properties

Use the [input token system](/tokens/input)

## Examples

### fm-button with icon

This slot improves the space of the associated content as an icon

```html preview
<fm-button>
    <svg slot="prefix" height="1.5rem" viewBox="0 0 22 22">
        <circle
            cx="11"
            cy="11"
            r="8"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
        ></circle>
    </svg>
</fm-button>
```

### fm-button with icon and text

This slot improves the space of the associated content as an icon

```html preview
<fm-button>
    <svg slot="suffix" height="1.5rem" viewBox="0 0 22 22">
        <circle
            cx="11"
            cy="11"
            r="8"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
        ></circle>
    </svg>
    <span>Button</span>
</fm-button>
```
