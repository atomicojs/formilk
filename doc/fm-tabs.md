---
title: fm-tab
---

Create a container as an alert that adapts according to the definition of the slot

```html preview
<fm-box>
    <fm-tabs>
        <fm-button slot="tab" ghost value="home" active>Home</fm-button>
        <fm-button slot="tab" ghost value="config">Config</fm-button>
        <fm-button slot="tab" ghost value="users">Users</fm-button>
        <fm-grid slot="home" model="padding"> Content home </fm-grid>
        <fm-grid slot="config" model="padding"> Content config </fm-grid>
        <fm-grid slot="users" model="padding"> Content users </fm-grid>
    </fm-tabs>
</fm-box>
```
