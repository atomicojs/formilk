---
title: fm-alert
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<fm-alert theme="info">
    Laute duis ipsum velit id tempor duis ut velit.
    <fm-button slot="action" theme="info" size="small">
        <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
    </fm-button>
</fm-alert>

<fm-alert theme="success">
    Laute duis ipsum velit id tempor duis ut velit.
    <fm-button slot="action" theme="success" size="small">
        <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
    </fm-button>
</fm-alert>

<fm-alert theme="warning">
    Laute duis ipsum velit id tempor duis ut velit.
    <fm-button slot="action" theme="warning" size="small">
        <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
    </fm-button>
</fm-alert>

<fm-alert theme="danger">
    Laute duis ipsum velit id tempor duis ut velit.
    <fm-button slot="action" theme="danger" size="small">
        <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
    </fm-button>
</fm-alert>

<style>
    fm-alert {
        margin-bottom: 1rem;
    }
</style>
```

## Slots

| Slot       | Type    | Description                                                                                                                  |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| icon       | Element | Icon element that replaces the default icon, the color of the state can be inherited thanks to the custom property `--theme` |
| Unassigned | Element | Content                                                                                                                      |

## Custom properties

Use the [card token system](/tokens/card)
