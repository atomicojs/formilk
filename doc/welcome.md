---
title: Formilk
---

> Design system created by [UpperCod](https://twitter.com/uppercod) with the aim of achieving a unique aesthetic that subtly mixes gradients, solids and shadows. formilk was created to be used without complexity and interaction limitations.

## Installation

```bash
# NPM
npm install formilk
```

## Usage

First import the components from NPM.

```js
import "formilk";
```

Finally only instance the components to use from formilk from your HTML or JS.

```html preview
<fm-box model="padding(2,1) radius gap(1.5)" for-nested>
    <form>
        <h1 style="margin:0px">Login</h1>
        <fm-input>
            <fm-icon type="avatar" slot="icon"></fm-icon>User:
        </fm-input>
        <fm-input> <fm-icon type="lock" slot="icon"></fm-icon>Pass: </fm-input>
        <fm-button theme="primary" id="button">
            <span>submit</span>
        </fm-button>
    </form>
</fm-box>
```
