---
title: 注册小程序
sidebar_label: 注册小程序
---

每个小程序都需要在 `app.js` 中使用 [`App` 构造函数](../../../reference/device-app-api/newAPI/global/App.mdx) 注册小程序实例，绑定生命周期回调函数以及在实例上挂载属性。

使用 [`getApp` 方法](../../../reference/device-app-api/newAPI/global/getApp.mdx) 获取 `app` 实例

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
