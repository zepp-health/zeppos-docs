---
title: 生命周期
sidebar_label: 生命周期
---

如图所示：

![生命周期](/img/docs/guides/framework/life-cycle.jpg)

## 说明

- App onCreate
  - 初始化 app 全局数据，供所有 page 使用。（注：这里不能绘制 UI, 还没有 load page）
  - 函数签名 `(param: string) => void`，此处的 `param` 由 `hmApp.startApp` 中的 `param` 参数传递
- Page onInit
  - page 初始化
  - 函数签名 `(param: string) => void`，此处的 `param` 由 `hmApp.gotoPage` 或 `hmApp.reloadPage` 中的 `param` 参数传递
- Page build
  - 绘制 UI
  - 函数签名 `() => void`
- Page onDestroy
  - 销毁 page
  - 函数签名 `() => void`
- App onDestroy
  - 销毁 app
  - 函数签名 `() => void`
