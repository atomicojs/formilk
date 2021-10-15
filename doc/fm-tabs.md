---
title: fm-tab
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<fm-tabs>
    <fm-button slot="tab" ghost value="home" active>Home</fm-button>
    <fm-button slot="tab" ghost value="config">Config</fm-button>
    <fm-button slot="tab" ghost value="users">Users</fm-button>
    <section slot="home" apply-space>Content home</section>
    <section slot="config" apply-space>Content config</section>
    <section slot="users" apply-space>Content users</section>
</fm-tabs>
```
