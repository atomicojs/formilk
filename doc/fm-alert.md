---
title: fm-alert
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<fm-alert>
    <p>Laute duis ipsum velit id tempor duis ut velit.</p>
    <fm-button slot="action" theme="primary" size="small">
        <fm-icon slot="icon" type="closed" size=".75rem">closed</fm-icon>
    </fm-button>
</fm-alert>
<fm-alert theme="warning">
    <p>Laute duis ipsum velit id tempor duis ut velit.</p>
    <fm-button slot="action" theme="warning" size="small">
        <fm-icon slot="icon" type="closed" size=".75rem">closed</fm-icon>
    </fm-button>
</fm-alert>
<fm-alert theme="danger">
    <p>Laute duis ipsum velit id tempor duis ut velit.</p>
    <fm-button slot="action" theme="danger" size="small">
        <fm-icon slot="icon" type="closed" size=".75rem">closed</fm-icon>
    </fm-button>
</fm-alert>
<fm-alert theme="info">
    <p>Laute duis ipsum velit id tempor duis ut velit.</p>
    <fm-button slot="action" theme="info" size="small">
        <fm-icon slot="icon" type="check" size=".75rem">closed</fm-icon>
    </fm-button>
</fm-alert>

<style>
    fm-alert {
        width: 100%;
        display: inline-flex;
        margin-bottom: 1rem;
        font-size: 14px;
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
