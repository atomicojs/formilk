---
title: fm-textarea(Experimental)
---

create a container to group content based on tabs

```html preview
<fm-grid model="width(580px)">
    <strong>Default</strong>
    <fm-grid model="cols(1fr 1fr) content(center,)">
        <fm-textarea placeholder="random..." max-length="30">
            <strong>no editable!</strong>
        </fm-textarea>
        <fm-input value="random..."></fm-input>
    </fm-grid>
</fm-grid>
```
