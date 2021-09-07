---
title: Inheritance
---

Thanks to Atomico you can extend the customElements to exceed the limits of the custom properties or part, creating a new version of the component, example:

```js
import { css } from "atomico";
import { Button } from "formilk";

class MyButton extends Button {
    static styles() {
        return [
            ...super.styles,
            css`
                :host {
                    --border: none;
                    --radius: 100px;
                }
                .input-box:hover {
                    transform: scale(1.5);
                }
            `,
        ];
    }
}

customElements.define("my-button", MyButton);
```
