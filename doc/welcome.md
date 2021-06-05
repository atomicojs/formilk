---
title: Formilk
---

> Design system created with Atomico and with a predefined aesthetic that can be easily modified by using Custom Properties or extending the component.

## Installation

```bash
# NPM
npm install formilk

# CDN, to start directly in the HTML
http://jspm.dev/formilk
```

## Usage

### 1. Import css theme

First you must load the file `formilk/theme.css` this preloads all the custom properties that by default are shared between the components.

```css
@import "formilk/theme.css";
```

### 2. Import components

```js
import "formilk"; // Import all components

import { Button } from "formilk"; // Import the customElement Button constructor to be extended

import { Button } from "formilk/components.react"; // Import the wrapper for react
```

## 3. Ready for HTML and JS

```html preview
<fm-button>My button</fm-button>
```
