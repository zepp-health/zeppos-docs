---
title: Register for the Mini Program
sidebar_label: Register for the Mini Program
---

Each Mini Program needs to register the Mini Program instance in `app.js` using the [`App` constructor](../../../reference/device-app-api/newAPI/global/App.mdx), bind the lifecycle callback function and mount the properties on the instance.

Use the [`getApp` method](../../../reference/device-app-api/newAPI/global/getApp.mdx) to get an `app` instance.

```js
App({
  globalData: {
    text: 'Hello Zepp OS'
  },
  onCreate() {
    console.log('onCreate')
    console.log(this.globalData.text)
  },
  onDestroy() {
    console.log('onDestroy')
  }
})

const app = getApp()
console.log(app._options.globalData.text)
```
