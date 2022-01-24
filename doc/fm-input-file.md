---
title: fm-input-file
---

create a container to group content based on tabs

```html preview
<fm-grid model="width(280px)">
    <strong>Default</strong>
    <fm-input-file>
        <span>Add file</span>
    </fm-input-file>
    <strong>multiple</strong>
    <fm-input-file multiple>
        <span>Add file</span>
    </fm-input-file>
    <strong>multiple with slot preview</strong>
    <fm-input-file multiple>
        <span>Add file</span>
        <fm-input-file-preview></fm-input-file-preview>
    </fm-input-file>
    <strong>Small</strong>
    <fm-input-file size="small">
        <span>Add file</span>
    </fm-input-file>
</fm-grid>
```
