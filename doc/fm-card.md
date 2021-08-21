---
title: fm-card
---

Create a container as a card

```html preview
<fm-card>
    <h2 style="margin: 0px;">Login</h2>

    <fm-input-basic><span>User:</span></fm-input-basic>
    <fm-input-basic><span>Password:</span></fm-input-basic>
    <fm-button>Login</fm-button>
</fm-card>
```

## Slots

| Slot       | Type    | Description                                |
| ---------- | ------- | ------------------------------------------ |
| action     | Element | Header Actions                             |
| media      | Element | Media type content, Example image or video |
| header     | Element | Header content                             |
| Unassigned | Element | Content                                    |
| footer     | Element | Footer content                             |

## Custom properties

| Custom property        | Type   | Description                         |
| ---------------------- | ------ | ----------------------------------- |
| `--fm-button--bg`      | color  | default background for component    |
| `--fm-button--color`   | color  | default color for component         |
| `--fm-button--radius`  | size   | default border-radius for component |
| `--fm-button--padding` | size   | default padding for component       |
| `--fm-button--shadow`  | shadow | default padding for component       |

## Example

### fm-card > img[slot=media]

```html preview
<fm-card>
    <fm-button slot="action">
        <svg slot="icon" width="12.728" height="12.728">
            <g transform="rotate(45 557.306 -573.844)" fill="#fff">
                <rect
                    width="16"
                    height="2"
                    rx="1"
                    transform="translate(570 225)"
                />
                <rect
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(90 180.5 398.5)"
                />
            </g>
        </svg>
    </fm-button>
    <img
        slot="media"
        src="https://images.unsplash.com/photo-1554797589-7241bb691973?w=376&q=80"
    />
</fm-card>
```

### fm-card > video[slot=media]

```html preview
<fm-card width="280px">
    <iframe
        width="280px"
        height="158px"
        slot="media"
        src="//player.vimeo.com/video/523970441?title=0&portrait=0&byline=0&autoplay=1&background=1"
        allowfullscreen="allowfullscreen"
        frameborder="0"
    />
    <h2 style="margin: 0px">Elit irure elit labore proident</h2>
    <p>
        exercitation culpa fugiat occaecat mollit duis nulla laborum
        exercitation et consectetur id aliquip aliqua occaecat
    </p>
</fm-card>
```
