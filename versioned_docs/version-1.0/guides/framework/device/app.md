---
title: Register for the Mini Program
sidebar_label: Register for the Mini Program
---

Each Mini Program needs to use the `App` constructor Register for the Mini Program instance in `app.js`, bind the lifecycle callback function and mount properties on the instance.

```js title="app.js"
App({
  globalData: {
    title: 'hello world!'
  },
  onCreate(options) {},
  onDestroy(options) {},
})
```

## Get app instance

Use the `getApp` method to get an `app` instance

```js
const globalData = getApp()._options.globalData

// Modify data by assigning values
globalData.title = 'hello Zepp OS!'
```
