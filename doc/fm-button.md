---
title: fm-button
---

Create a button with an effect on the form.

```html preview
<fm-button>slot</fm-button>
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

| Custom property        | Type   | Description                            |
| ---------------------- | ------ | -------------------------------------- |
| `--fm-button--bgcolor` | color  | default background-color for component |
| `--fm-button--color`   | color  | default color for component            |
| `--fm-button--radius`  | size   | default border-radius for component    |
| `--fm-button--padding` | size   | default padding for component          |
| `--fm-button--shadow`  | shadow | default padding for component          |

## Examples

### fm-button > [slot=icon]

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

### fm-button[outline]

Reverse the use of the background to the use of border-color and color

```html preview
<fm-button outline>slot</fm-button>
```

### Theme

```html preview
<fm-button theme="primary">Primary</fm-button>
<fm-button theme="danger">Danger</fm-button>
<fm-button theme="success">Success</fm-button>
<fm-button outline theme="primary">Primary</fm-button>
<fm-button outline theme="danger">Danger</fm-button>
<fm-button outline theme="success">Success</fm-button>

<style>
    fm-button {
        margin: 0.25rem;
    }
</style>
```

### Custom themes with custom properties

```html preview
<style>
    fm-button {
        --fm-color--my-theme: black;
        --fm-shadow--my-theme: 5px -12px 44px #9349e9a1, -4px 12px 44px
                #e951499e;
    }
</style>
<fm-button theme="my-theme">my theme</fm-button>
```

The reference to the component can be `: root` for a global effect on the design system.
