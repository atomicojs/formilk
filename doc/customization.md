---
title: Custumization
---

## Tokens

Formilk uses a technique created by [UpperCod](https://twitter.com/uppercod) to hold instance and global tokens.

### Global tokens

These tokens allow to sustain changes at the global level of the design system, they are identified or defined by prefixing `--fm-<namepsace>-<token>`.

### Instance Token

These global tokens without the use of the prefix and namespace and can be associated by a selector or the use of the style attribute, example:

```html preview
<fm-button style="--border-radius: 100px">I am rounded</fm-button>
```

## Custom properties

1. [Tokens colors](/tokens/colors): Group the color tokens.
2. [Tokens card](/tokens/card): Groups the card box model tokens.
3. [Tokens input](/tokens/input): Groups the tokens of the input box model.
