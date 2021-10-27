---
title: fm-avatar
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<fm-box model="cols(1fr) overflow content(center), cols(100px 200px) 420px">
    <img
        src="https://images.unsplash.com/photo-1537420327992-d6e192287183"
        height="100%"
        width="100%"
    />
    <fm-grid
        model="content(center) padding(0,1,between), padding(,unset) 420px"
        format-content
    >
        <fm-grid model="gap(.5)">
            <h1>My card</h1>
            <p>Subtitle</p>
        </fm-grid>
        <p>Content....</p>
    </fm-grid>
</fm-box>
```
