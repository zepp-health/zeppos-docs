---
title: 路由
sidebar_label: 路由
---

提供了一系列路由相关的 API：

- `hmApp.gotoPage`
- `hmApp.goBack`
- `hmApp.reloadPage`
- `hmApp.gotoHome`

## 例子

现有两个页面 `pageA` 和 `pageB`。

当前在 `pageA`，调用 `hmApp.gotoPage`，前往 `pageB`，此时页面的生命周期执行顺序如下：

- pageA `onDestroy`
- pageB `onInit`
- pageB `build`

此时停留在 `pageB` 页面，调用 `hmApp.goBack`，返回 `pageA`，生命周期执行顺序如下：

- pageB `onDestroy`
- pageA `onInit`
- pageA `build`
