## input-pattern

Group the inputs of the inputs into one, forming a synchronized input pattern, objectives:

1. join all the inputs in a value
2. chunk value to define the values of each input
3. centralize the onchange event

### Syntax

```html
<fm-input-pattern>
    <fm-input type="number" min="0" max="50"></fm-input>
    <fm-input-pattern-join>.</fm-input-pattern-join>
    <fm-input type="number" min="0" max="50"></fm-input>
    <fm-input-pattern-join>.</fm-input-pattern-join>
    <fm-input type="number" min="0" max="50"></fm-input>
    <fm-input-pattern-join>-</fm-input-pattern-join>
    <fm-input type="number" min="0" max="50"></fm-input>
</fm-input-pattern>
```
