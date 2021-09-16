---
title: fm-navigation
---

```html preview
<fm-navigation>
    <strong slot="brand">Brand</strong>
    <fm-navigation-item for="dropdown-items">
        <fm-button size="small" ghost>GITHUB</fm-button>
    </fm-navigation-item>
    <fm-navigation-item>
        <fm-button size="small" ghost>TWITTER</fm-button>
    </fm-navigation-item>
    <fm-navigation-dropdown slot="dropdown-items">
        <fm-button size="small" ghost><span>1</span> </fm-button>
        <fm-button size="small" ghost>Item 2</fm-button>
        <fm-button size="small" ghost>Item 3</fm-button>
    </fm-navigation-dropdown>
</fm-navigation>

<style>
    fm-navigation {
        width: 320px;
    }
</style>
```
