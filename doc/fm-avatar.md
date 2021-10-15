---
title: fm-avatar
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<div style="display: flex; align-items: center; gap: 1rem">
    <fm-avatar></fm-avatar>
    <fm-avatar>
        <img
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        />
    </fm-avatar>
    <fm-avatar size="calc(var(--min-size) * 2)" transform="scale(1.8) translate(-8%,5%)">
        <video
            src="https://media.istockphoto.com/videos/smiling-confident-young-indian-ethnic-business-woman-professional-video-id1216650957"
            playsinline loop muted autoplay preload >
    </fm-avatar>
</div>
```
