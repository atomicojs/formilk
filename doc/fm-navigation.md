---
title: fm-navigation
---

```html preview
<fm-navigation>
    <strong slot="brand">Brand</strong>
    <fm-navigation-item for="dropdown-1">
        <fm-button size="small" ghost>GITHUB</fm-button>
    </fm-navigation-item>
    <fm-navigation-item>
        <fm-button size="small" ghost>TWITTER</fm-button>
    </fm-navigation-item>
    <fm-navigation-dropdown slot="dropdown-1">
        <fm-navigation-item for="dropdown-2">
            <fm-button size="small" ghost>1</fm-button>
        </fm-navigation-item>
        <fm-navigation-item for="dropdown-3">
            <fm-button size="small" ghost>2</fm-button>
        </fm-navigation-item>
    </fm-navigation-dropdown>
    <fm-navigation-dropdown slot="dropdown-2">
        <fm-navigation-item for="dropdown-3">
            <fm-button size="small" ghost>1.1</fm-button>
        </fm-navigation-item>
        <fm-navigation-item>
            <fm-button size="small" ghost>1.2</fm-button>
        </fm-navigation-item>
    </fm-navigation-dropdown>
    <fm-navigation-dropdown slot="dropdown-3">
        <img
            src="http://cdn.mos.cms.futurecdn.net/eC6Q4Civ8TurCZbYA5wNmm.jpg"
            width="100%"
        />
    </fm-navigation-dropdown>
</fm-navigation>

<style>
    fm-navigation {
        width: 320px;
    }
</style>
```
