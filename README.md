# Welcome

## Steps

```bash
# 1
npm install
# 2
npm start
# Enjoy!
```

## Directory

```bash
/src
    /components # Directory for webcomponents
        /atomico-counter # Example of component with Atomico
            atomico-counter.js
            atomico-counter.css
            atomico-counter.md  # component documentation
    index.html # Html file to serve on the server
```

> files exported from html are stored processed in `/docs`(Friendly with github pages 😎), you can change this effect by modifying the`scripts` of `package.json`.

## Scripts

### npm start

Create a development server on the `src` directory.

### npm run build

```bash
npm install -D @devserver/build
```

**This command only works if the package `@devserver/build` is previously installed**. Export all content associated with the expression `src/**/*.html`.

> If you export your project to a subfolder, be sure to use the `--href [path]` flag to declare that directory.

```js
useResizeObserver(
  ref,
  ({ width, height, x, y, top, right, bottom, left }) => {}
);
```
