---
title: fm-button
---

Create a `button` with effect on forms that adapts according to the definition of the slot.

```html preview
<fm-grid model="width(auto), width(420px) 420px">
    <h3>Normal buttons</h3>
    <fm-grid model="autoFill(120px, 1fr)">
        <fm-button>button</fm-button>
        <fm-button status="info">button</fm-button>
        <fm-button status="success">button</fm-button>
        <fm-button status="warning">button</fm-button>
        <fm-button status="danger">button</fm-button>
        <fm-button disabled>button</fm-button>
    </fm-grid>
    <h3>Small buttons</h3>
    <fm-grid model="autoFill(80px, 1fr)">
        <fm-button size="small">button</fm-button>
        <fm-button size="small" status="info">button</fm-button>
        <fm-button size="small" status="success">button</fm-button>
        <fm-button size="small" status="warning">button</fm-button>
        <fm-button size="small" status="danger">button</fm-button>
        <fm-button size="small" disabled>button</fm-button>
    </fm-grid>
    <h3>Prefix and Suffix with label</h3>
    <fm-grid model="autoFill(120px, 1fr)">
        <fm-button>
            <fm-icon slot="prefix" type="plus"></fm-icon>
            button
        </fm-button>
        <fm-button>
            <fm-icon slot="suffix" type="plus"></fm-icon>
            button
        </fm-button>
    </fm-grid>
    <h3>Only prefix</h3>
    <fm-grid model="autoFill(120px, 1fr)">
        <fm-button>
            <fm-icon slot="prefix" type="plus"></fm-icon>
        </fm-button>
    </fm-grid>
</fm-grid>
```

## Properties

| Property | Type                                      | Description                                                    |
| -------- | ----------------------------------------- | -------------------------------------------------------------- |
| name     | string                                    | Define `button[name]`                                          |
| value    | string                                    | Define `button[value]`                                         |
| type     | string                                    | Define `button[type]`                                          |
| disabled | boolean                                   | Define `button[disabled]`                                      |
| status   | "info", "success", "warning" or ""danger" | Import a color theme from the formilk custom properties system |
| size     | "small" or "normal"                       | Change representation size                                     |

## Slots

| Slot       | Type    | Description                      |
| ---------- | ------- | -------------------------------- |
| prefix     | Element | reserved space before content    |
| Unassigned | Element | General content                  |
| suffix     | Element | space reserved for after content |

## Custom properties

```html inject
<fm-theme
    select="size-min, size-small, shadow-action, border-radius, space-x, space-y, #colors-button, #colors-status"
></fm-theme>
```

## Examples

### fm-button with icon

This slot improves the space of the associated content as an icon

```html preview
<fm-button>
    <fm-icon slot="prefix" type="avatar"></fm-icon>
</fm-button>
```

### fm-button with icon and text

This slot improves the space of the associated content as an icon

```html preview
<fm-button>
    <fm-icon slot="prefix" type="avatar"></fm-icon>
    <span>Button</span>
</fm-button>
```
