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

## Nested inputs

### Syntax

The input month offers a tab-based completion experience, you could associate a group association with independent datalists that sync to the tab and directional arrows:

```html
<fm-input>
    <fm-input type="number">
        <fm-datalist>
            <option value="1" />
            <option value="2" />
            <option value="3" />
        </fm-datalist>
    </fm-input>
</fm-input>
```

## Input file

```html
<fm-input-file>
    <fm-image slot="preview" />
</fm-input-file>
```

## Input calendar

```html
<fm-calendar
    date="2022-09"
    disable-days="0,6"
    disable-dates="2020-01-01...03, 2020-01...03"
    min="2020-01"
    max="2023-09"
></fm-calendar>
```

Analyze how to allow in range between 2 calendars

## Input schedule

```html
<fm-schedule
    steps="00:30"
    schedule="10:30...13:30,15:30...18:00"
    disable-schedules="10:30...15:00"
></fm-schedule>
```
