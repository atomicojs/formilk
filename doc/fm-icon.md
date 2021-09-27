---
title: fm-icon
---

Exclusive icons from formilk code.

```html preview
<fm-icon type="check"></fm-icon>
<fm-icon type="down"></fm-icon>
<fm-icon type="alert"></fm-icon>
<fm-icon type="closed"></fm-icon>
<fm-icon type="avatar"></fm-icon>
<style>
    fm-icon {
        margin: 1rem;
    }
</style>
```

## Replace formilk icons

```js
import { html } from "atomico";
import { Icon } from "formilk";

Icon.avatar = html`<svg height="100" width="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>`;
```
