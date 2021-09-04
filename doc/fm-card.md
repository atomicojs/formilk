---
title: fm-card
---

Create a container that adapts according to the definition of the slot

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
    <h2 slot="header" style="margin: 0px">Elit irure elit labore proident</h2>
    <p style="margin: 0px">
        exercitation culpa fugiat occaecat mollit duis nulla laborum
        exercitation et consectetur id aliquip aliqua occaecat
    </p>
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

Use the [card token system](../tokens/card)
