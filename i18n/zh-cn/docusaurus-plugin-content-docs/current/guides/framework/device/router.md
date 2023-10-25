---
title: 路由
sidebar_label: 路由
---

路由功能可以通过 [路由模块 API](../../../reference/device-app-api/newAPI/router/push.mdx) 来实现，主要有如下方法：

- [`push`](../../../reference/device-app-api/newAPI/router/push.mdx)
- [`exit`](../../../reference/device-app-api/newAPI/router/exit.mdx)
- [`replace`](../../../reference/device-app-api/newAPI/router/replace.mdx)
- [`home`](../../../reference/device-app-api/newAPI/router/home.mdx)

## 例子

现有两个页面 `pageA` 和 `pageB`。

当前在 `pageA`，调用 `push` API，前往 `pageB`，此时页面的生命周期执行顺序如下：

- pageA `onDestroy`
- pageB `onInit`
- pageB `build`

此时停留在 `pageB` 页面，调用 `back` API，返回 `pageA`，生命周期执行顺序如下：

- pageB `onDestroy`
- pageA `onInit`
- pageA `build`
