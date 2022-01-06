---
title: fm-icon
---

Exclusive icons from formilk code.

```html preview
<fm-grid>
    <fm-icon type="search"></fm-icon>
    <fm-icon type="eye"></fm-icon>
    <fm-icon type="check"></fm-icon>
    <fm-icon type="up"></fm-icon>
    <fm-icon type="right"></fm-icon>
    <fm-icon type="down"></fm-icon>
    <fm-icon type="left"></fm-icon>
    <fm-icon type="closed"></fm-icon>
    <fm-icon type="plus"></fm-icon>
    <fm-icon type="dash"></fm-icon>
    <fm-icon type="menu"></fm-icon>
    <fm-icon type="asterisk"></fm-icon>
    <fm-icon type="options"></fm-icon>
    <fm-icon type="copy"></fm-icon>
    <fm-icon type="config"></fm-icon>
    <fm-icon type="alert"></fm-icon>
    <fm-icon type="avatar"></fm-icon>
    <fm-icon type="lock"></fm-icon>
    <fm-icon type="image"></fm-icon>
    <fm-icon type="video"></fm-icon>
    <fm-icon type="audio"></fm-icon>
</fm-grid>
```

## Replace formilk icons

```js
import { html } from "atomico";
import { Icon } from "formilk";

Icon.avatar = html`<svg height="100" width="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>`;
```
