---
title: 生命周期
sidebar_label: 生命周期
---

如图所示：

![生命周期](/img/docs/guides/framework/life-cycle.jpg)

## 说明

- App onCreate
  - 初始化 app 全局数据，供所有 page 使用。（注：这里不能绘制 UI, 还没有 load page）
  - 函数签名 `(params: string) => void`，此处的 `params` 由 [`launchApp`](../../../reference/device-app-api/newAPI/router/launchApp.mdx) 中的 `params` 参数传递
- Page onInit
  - page 初始化
  - 函数签名 `(params: string) => void`，此处的 `params` 由 [`push`](../../../reference/device-app-api/newAPI/router/push.mdx) 或 [`replace`](../../../reference/device-app-api/newAPI/router/replace.mdx) 中的 `params` 参数传递
- Page build
  - 绘制 UI
  - 函数签名 `() => void`
- Page onDestroy
  - 销毁 page
  - 函数签名 `() => void`
- App onDestroy
  - 销毁 app
  - 函数签名 `() => void`

:::info
副屏应用和快捷卡片的生命周期在 Page 的基础上扩展了 `onResume` 和 `onPause`，具体参考 [注册副屏应用和快捷卡片](secondary-widget.md)
:::
