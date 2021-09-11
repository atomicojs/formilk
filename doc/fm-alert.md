---
title: fm-alert
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<fm-alert>
    <p>
        Laute duis ipsum velit id tempor duis ut velit ea officia laboris duis
        fugiat reprehenderit adipisicing ut Lorem esse exercitation minim aliqua
    </p>
</fm-alert>
<fm-alert theme="warning">
    <p>
        Laute duis ipsum velit id tempor duis ut velit ea officia laboris duis
        fugiat reprehenderit adipisicing ut Lorem esse exercitation minim aliqua
    </p>
</fm-alert>
<fm-alert theme="danger">
    <p>
        Laute duis ipsum velit id tempor duis ut velit ea officia laboris duis
        fugiat reprehenderit adipisicing ut Lorem esse exercitation minim aliqua
    </p>
</fm-alert>
<fm-alert theme="info">
    <p>
        Laute duis ipsum velit id tempor duis ut velit ea officia laboris duis
        fugiat reprehenderit adipisicing ut Lorem esse exercitation minim aliqua
    </p>
</fm-alert>

<style>
    fm-alert {
        display: inline-flex;
        margin-bottom: 1rem;
        font-size: 14px;
    }
    p {
        margin: 0px;
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
