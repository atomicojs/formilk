---
title: fm-alert
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<fm-alert>
    Laute duis ipsum velit id tempor duis ut velit ea officia laboris duis
    fugiat reprehenderit adipisicing ut Lorem esse exercitation minim aliqua
</fm-alert>

<fm-alert theme="warning">
    Laute duis ipsum velit id tempor duis ut velit ea officia laboris duis
    fugiat reprehenderit adipisicing ut Lorem esse exercitation minim aliqua
</fm-alert>

<fm-alert theme="danger">
    Laute duis ipsum velit id tempor duis ut velit ea officia laboris duis
    fugiat reprehenderit adipisicing ut Lorem esse exercitation minim aliqua
</fm-alert>

<fm-alert theme="info">
    Laute duis ipsum velit id tempor duis ut velit ea officia laboris duis
    fugiat reprehenderit adipisicing ut Lorem esse exercitation minim aliqua
</fm-alert>

<style>
    fm-alert {
        display: inline-flex;
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

Use the [card token system](../tokens/card)
