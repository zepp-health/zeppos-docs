---
title: Registration Page
sidebar_label: Registration Page
---

For each page in the Mini Program, you need to use [`Page` constructor](../../../reference/device-app-api/newAPI/global/Page.mdx) in the corresponding js file of the page to register the page instance, specify the page lifecycle callbacks, event handling functions, and mount properties on the page instance.

:::caution
For each page in the Mini Program, you need to configure the path in the `targets` object of `app.json`.
:::

Use the [`getCurrentPage` method](../../../reference/device-app-api/newAPI/global/getCurrentPage.mdx) to get the `page` instance.

```js title="page.js"
Page({
  state: {
    text: 'Hello Zepp OS'
  },
  onInit() {
    console.log('onInit')
  },
  build() {
    console.log('build')
    console.log(this.state.text)
  }
})

const page = getCurrentPage()
console.log(page._options.state.text)
```
