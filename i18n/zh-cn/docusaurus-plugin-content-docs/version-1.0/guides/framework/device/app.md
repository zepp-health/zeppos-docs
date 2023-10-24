---
title: 注册小程序
sidebar_label: 注册小程序
---

每个小程序都需要在 `app.js` 中使用 `App` 构造函数注册小程序实例，绑定生命周期回调函数以及在实例上挂载属性。

```js title="app.js"
App({
  globalData: {
    title: 'hello world!'
  },
  onCreate(options) {},
  onDestroy(options) {},
})
```

## 获取 app 实例

使用 `getApp` 方法获取 `app` 实例

```js
const globalData = getApp()._options.globalData

// 通过赋值修改数据
globalData.title = 'hello Zepp OS!'
```
