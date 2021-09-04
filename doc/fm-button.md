---
title: fm-button
---

Create a button with an effect on the form.

```html preview
<fm-button ghost>button</fm-button>
<fm-button>button</fm-button>
<fm-button theme="primary">button</fm-button>
<fm-button theme="info">button</fm-button>
<fm-button theme="success">button</fm-button>
<fm-button theme="warning">button</fm-button>
<fm-button theme="danger">button</fm-button>
<fm-button disabled>button</fm-button>
<hr />

<fm-button ghost size="small">button</fm-button>
<fm-button size="small">button</fm-button>
<fm-button size="small" theme="primary">button</fm-button>
<fm-button size="small" theme="info">button</fm-button>
<fm-button size="small" theme="success">button</fm-button>
<fm-button size="small" theme="warning">button</fm-button>
<fm-button size="small" theme="danger">button</fm-button>
<fm-button size="small" disabled>button</fm-button>

<style>
    fm-button {
        margin: 0.5rem;
    }
</style>
```

## Properties

| Property | Type    | Description                                                            |
| -------- | ------- | ---------------------------------------------------------------------- |
| name     | string  | Define `button[name]`                                                  |
| value    | string  | Define `button[value]`                                                 |
| type     | string  | Define `button[type]`                                                  |
| theme    | string  | Import a color theme from the formilk custom properties system         |
| outline  | boolean | Reverse the use of the background to the use of border-color and color |

## Slots

| Slot       | Type    | Description                     |
| ---------- | ------- | ------------------------------- |
| icon       | Element | Espacio reservado para el icono |
| Unassigned | Element | General content                 |

## Custom properties

| Custom property        | Type   | Description                         |
| ---------------------- | ------ | ----------------------------------- |
| `--fm-button--bg`      | color  | default background for component    |
| `--fm-button--color`   | color  | default color for component         |
| `--fm-button--radius`  | size   | default border-radius for component |
| `--fm-button--padding` | size   | default padding for component       |
| `--fm-button--shadow`  | shadow | default padding for component       |

## Examples

### fm-button with icon

This slot improves the space of the associated content as an icon

```html preview
<fm-button>
    <svg slot="icon" height="1.5rem" viewBox="0 0 22 22">
        <circle
            cx="11"
            cy="11"
            r="8"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
        ></circle>
    </svg>
</fm-button>
```

### fm-button with icon and text

This slot improves the space of the associated content as an icon

```html preview
<fm-button>
    <svg slot="icon" height="1.5rem" viewBox="0 0 22 22">
        <circle
            cx="11"
            cy="11"
            r="8"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
        ></circle>
    </svg>
    <span>Button</span>
</fm-button>
```

### Custom themes with custom properties

```html preview
<style>
    fm-button {
        --fm-theme--my-theme: blueviolet;
    }
</style>
<fm-button theme="my-theme">my theme</fm-button>
```

The reference to the component can be `: root` for a global effect on the design system.
