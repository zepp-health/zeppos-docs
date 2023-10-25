---
title: Registration Page
sidebar_label: Registration Page
---

For each page in the Mini Program, you need to use the `Page` constructor in the corresponding js file of the page to register the page instance, specify the page lifecycle callbacks, event handling functions, and mount the properties on the page instance.

:::caution
For each page in the Mini Program, you need to configure the path in the `targets` object of `app.json`.
:::

```js title="page.js"
Page({
  state: {
    title: 'hello world'
  },
  onInit() {},
  build() {},
  onDestroy() {}
})
```
