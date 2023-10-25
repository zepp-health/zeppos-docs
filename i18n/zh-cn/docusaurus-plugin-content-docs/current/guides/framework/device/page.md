---
title: 注册页面
sidebar_label: 注册页面
---

每个小程序页面都需要在相应的 JS 文件中使用 [`Page` 构造函数](../../../reference/device-app-api/newAPI/global/Page.mdx) 注册页面实例，指定页面生命周期回调、事件处理函数，并在页面实例上挂载属性。

:::caution
小程序中的每个页面都需要在 `app.json` 的 `targets` 对象中配置文件路径。
:::

使用 [`getCurrentPage` 方法](../../../reference/device-app-api/newAPI/global/getCurrentPage.mdx) 获取 `page` 实例

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
