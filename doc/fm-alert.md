---
title: fm-alert
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<fm-grid model="cols(1fr), cols(1fr 1fr) 520px">
    <fm-alert status="info">
        Laute duis ipsum velit id tempor duis ut velit.
        <fm-button slot="action" status="info" size="small">
            <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
        </fm-button>
    </fm-alert>

    <fm-alert status="info" outline>
        Laute duis ipsum velit id tempor duis ut velit.
        <fm-button slot="action" status="info" size="small">
            <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
        </fm-button>
    </fm-alert>

    <fm-alert status="success">
        Laute duis ipsum velit id tempor duis ut velit.
        <fm-button slot="action" status="success" size="small">
            <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
        </fm-button>
    </fm-alert>

    <fm-alert status="success" outline>
        Laute duis ipsum velit id tempor duis ut velit.
        <fm-button slot="action" status="success" size="small">
            <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
        </fm-button>
    </fm-alert>

    <fm-alert status="warning">
        Laute duis ipsum velit id tempor duis ut velit.
        <fm-button slot="action" status="warning" size="small">
            <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
        </fm-button>
    </fm-alert>

    <fm-alert status="warning" outline>
        Laute duis ipsum velit id tempor duis ut velit.
        <fm-button slot="action" status="warning" size="small">
            <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
        </fm-button>
    </fm-alert>

    <fm-alert status="danger">
        Laute duis ipsum velit id tempor duis ut velit.
        <fm-button slot="action" status="danger" size="small">
            <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
        </fm-button>
    </fm-alert>

    <fm-alert status="danger" outline>
        Laute duis ipsum velit id tempor duis ut velit.
        <fm-button slot="action" status="danger" size="small">
            <fm-icon slot="prefix" type="closed" size=".75rem">closed</fm-icon>
        </fm-button>
    </fm-alert>
</fm-grid>
```

## Slots

| Slot       | Type    | Description                                                                                                                   |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| icon       | Element | Icon element that replaces the default icon, the color of the state can be inherited thanks to the custom property `--status` |
| Unassigned | Element | Content                                                                                                                       |

## Custom properties

Use the [card token system](/tokens/card)
