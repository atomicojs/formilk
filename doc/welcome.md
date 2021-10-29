---
title: Formilk
---

> Design system designed and created by [UpperCod](https://twitter.com/uppercod) with the aim of having a unique aesthetic, formilk was created to be used without complexity and interaction limitations.

Formilk does not leverage typography (titles and texts), it is a stack of utility components that are managed through custom-properties, so creating variations is really easy.

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
<fm-box model="padding(2,1) radius" for-nested>
    <form>
        <fm-grid model="gap(1.5)">
            <h1 style="margin:0px">Login</h1>
            <fm-input>
                <fm-icon type="avatar" slot="icon"></fm-icon>User:
            </fm-input>
            <fm-input>
                <fm-icon type="lock" slot="icon"></fm-icon>Pass:
            </fm-input>
            <fm-button theme="primary" id="button">
                <span>submit</span>
            </fm-button>
        </fm-grid>
    </form>
</fm-box>
```
