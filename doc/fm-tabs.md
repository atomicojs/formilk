---
title: fm-tab
---

create a container to group content based on tabs

```html preview
<fm-box model="size(280px, 200px)">
    <fm-tabs>
        <fm-button slot="tab" ghost value="home" active>Home</fm-button>
        <fm-button slot="tab" ghost value="config">Config</fm-button>
        <fm-grid slot="home" model="padding ">
            est consectetur aliqua nostrud fugiat et in consequat exercitation
            reprehenderit commodo occaecat velit amet commodo occaecat ullamco
            nisi magna ex reprehenderit ullamco consequat laboris proident non
            exercitation culpa occaecat dolore tempor qui tempor fugiat pariatur
            nulla eu in eiusmod anim voluptate velit ut elit sint dolor
            cupidatat elit pariatur sint non et elit do et
        </fm-grid>
        <fm-grid slot="config" model="padding"> Content config </fm-grid>
    </fm-tabs>
</fm-box>
```

## Properties

| Property       | Type              | Description                             |
| -------------- | ----------------- | --------------------------------------- |
| positionDivide | "top" or "bottom" | defines the position divide of the tabs |
| position       | "top" or "bottom" | defines the position of the tabs        |
| active         | string            | active slot to show                     |

## Example [position] and [position-divide]

```html preview
<fm-box model="size(280px, 200px)">
    <fm-tabs position-divide="top" position="bottom">
        <fm-button slot="tab" ghost value="home" active>Home</fm-button>
        <fm-button slot="tab" ghost value="config">Config</fm-button>
        <fm-grid slot="home" model="padding ">
            est consectetur aliqua nostrud fugiat et in consequat exercitation
            reprehenderit commodo occaecat velit amet commodo occaecat ullamco
            nisi magna ex reprehenderit ullamco consequat laboris proident non
            exercitation culpa occaecat dolore tempor qui tempor fugiat pariatur
            nulla eu in eiusmod anim voluptate velit ut elit sint dolor
            cupidatat elit pariatur sint non et elit do et
        </fm-grid>
        <fm-grid slot="config" model="padding"> Content config </fm-grid>
    </fm-tabs>
</fm-box>
```
