---
title: Custumization
---

## Tokens

Formilk uses a technique designed by [UpperCod](https://twitter.com/uppercod) to contain instance and global tokens.

### Global tokens

These tokens allow to sustain changes at the global level of the design system, they are identified or defined by prefixing `--fm--<token>`.

### Instance Token

These global tokens without the use of the prefix and namespace and can be associated by a selector or the use of the style attribute, example:

```html preview
<fm-button style="--border-radius: 100px">I am rounded</fm-button>
```
