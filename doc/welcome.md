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
<fm-container>
    <form apply-space>
        <h1 style="margin:0px">Login</h1>
        <fm-input-basic>
            <fm-icon type="avatar" slot="icon"></fm-icon>User:
        </fm-input-basic>
        <fm-input-basic>
            <fm-icon type="lock" slot="icon"></fm-icon>Pass:
        </fm-input-basic>
        <fm-button theme="primary" id="button">
            <span>submit</span>
        </fm-button>
    </form>
</fm-container>
<style>
    form {
        display: grid;
        grid-gap: var(--space-between);
        padding: calc(var(--space-y) * 2) var(--space-x);
    }
</style>
```

## Use in React

```js
import ReactDom from "react-dom";
import { Card, Button, InputBasic } from "formilk/components.react";

function App() {
    return (
        <form>
            <Card>
                <h1 style="margin:0px">Login</h1>
                <InputBasic>User:</InputBasic>
                <InputBasic>Pass:</InputBasic>
                <Button theme="primary">submit</Button>
            </Card>
        </form>
    );
}

ReactDom.render(<App />, document.querySelector("#app"));
```
