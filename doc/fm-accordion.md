---
title: fm-accordion
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<fm-box model="padding(2,1)">
    <h1 style="margin: 0px">Accordion</h1>
    <fm-accordion-group>
        <fm-accordion show>
            <strong slot="header">Content 1</strong>
            <p>
                Laute duis ipsum velit id tempor duis ut velit ea officia
                laboris duis fugiat reprehenderit adipisicing ut Lorem esse
                exercitation minim aliqua
            </p>
        </fm-accordion>
        <fm-accordion>
            <strong slot="header">Content 1</strong>
            <p>
                Laute duis ipsum velit id tempor duis ut velit ea officia
                laboris duis fugiat reprehenderit adipisicing ut Lorem esse
                exercitation minim aliqua
            </p>
        </fm-accordion>
        <fm-accordion>
            <strong slot="header">Content 1</strong>
            <p>
                Laute duis ipsum velit id tempor duis ut velit ea officia
                laboris duis fugiat reprehenderit adipisicing ut Lorem esse
                exercitation minim aliqua
            </p>
        </fm-accordion>
    </fm-accordion-group>
</fm-box>
```

## fm-accordion

### Properties

| Property     | Type             | Description                                                     |
| ------------ | ---------------- | --------------------------------------------------------------- |
| show         | boolean          | avoid reflecting the click event                                |
| iconPosition | "start" or "end" | default "start", associates an icon according to the show state |
