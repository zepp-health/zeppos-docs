---
title: API_LEVEL（兼容性）
sidebar_label: API_LEVEL（兼容性）
---

## 介绍

Zepp OS 的开放能力（JS API）会不断扩充，同时能力也会不断增强，但在一些旧版本固件上并不会立即更新这些新的开放能力，此时就会出现 API 与固件版本不兼容的问题。

如何让程序兼容尽可能多的固件版本，简化开发者的适配工作，是 Zepp OS 团队的目标。

在 Zepp OS 2.0 中，我们推出了 `API_LEVEL` 的概念，是一套完整的 JS API 兼容性方案。

### 什么是 `API_LEVEL`

`API_LEVEL` 代表了某一固件版本对于 JS API 可用性的保证，其取值是 `[主版本].[次版本]` 这样的字符串，如 `2.0`。

下文会涉及 `API_LEVEL` 版本高低比较的情况，此处简单介绍 API_LEVEL 版本比较规则。

:::info
从左到右依次比较主版本号、次版本号的数值大小

例如 `3.1` > `3.0` > `2.98` > `2.1` > `2.0`
:::

从 Zepp OS 2.0 开始，所有 JS API 都会在文档顶部标注 `API_LEVEL`，如 [`showToast`](../../../reference/device-app-api/newAPI/interaction/showToast.mdx) 方法：

![showToast](/img/docs/guides/framework/showToast.jpg)

`API_LEVEL` 可以支持到具体参数或字段，如 API [`push`](../../../reference/device-app-api/newAPI/router/push.mdx) 的参数标明了版本字段。

![push](/img/docs/guides/framework/push.jpg)

举一个例子，GTR4 这款设备升级了固件版本 `3.10.11`，此固件版本的 `API_LEVEL` 为 `2.0`，代表 `API_LEVEL` 小于等于 `2.0` 的 JS API 在此固件上都可以使用。

:::tip
`API_LEVEL` 对开发者最大的好处在于，无需关心固件版本号、Zepp OS 版本号，只需要对 `API_LEVEL` 做出兼容性适配，这极大地简化了兼容性适配工作量。
:::

### 如何指定小程序最小支持的 `API_LEVEL`

对 [小程序配置 app.json](../../../reference/app-json.mdx) 中的 `apiVersion` 字段中的 `minVersion` 属性进行配置，即小程序最小支持的 `API_LEVEL`。

指定某一小程序的 `minVersion` 为 `2.0`，意味着此小程序可以运行在 `API_LEVEL` 大于等于 `2.0` 的固件版本上。

### 如何查看当前固件版本的 `API_LEVEL`

截至目前，所有搭载 Zepp OS 2.0 设备的固件版本的 `API_LEVEL` 都是 `2.0`，后续 `API_LEVEL` 更新，会提供相关查询接口。

查询设备的 Zepp OS 版本，请参考 [搭载 Zepp OS 设备列表](../../../reference/related-resources/device-list.mdx)

:::caution
搭载 Zepp OS 1.0 版本的设备不支持 `API_LEVEL`。
:::

### 兼容性保证

自从 Zepp OS 2.0 JS API 发布，Zepp OS 1.0 JS API 将进入维护阶段，原则上只做 bug 修复，不再提供新的能力。

使用 Zepp OS 1.0 JS API 开发的小程序仍然可以在搭载 Zepp OS 2.0 版本的固件上正常运行。

:::tip
如果在后续某一 Zepp OS 版本出现对 Zepp OS 1.0 JS API 不兼容的情况，会提前告知开发者。

为了能够用到 Zepp OS 不断开放的最新能力，我们鼓励开发者进行 1.0 -> 2.0 的 API 迁移，详情参考 [《从 1.0 版本升级》](https://docs.zepp.com/zh-cn/docs/v2/guides/version-info/migration-guide/)
:::

:::caution
由于 Zepp OS 1.0 版本的固件不支持 `API_LEVEL`，所以使用 Zepp OS 2.0 JS API 开发的小程序无法在 Zepp OS 1.0 设备上运行。应用市场也不向搭载 Zepp OS 1.0 的设备上分发指定 `API_LEVEL` 的小程序。
:::

Zepp OS 2.0 版本 JS API 在设计之初就规划了版本兼容性方案 `API_LEVEL`，后续推出的固件版本都会支持 `API_LEVEL`，并保证向下兼容性，即新版本 `API_LEVEL` 兼容老版本 `API_LEVEL`。
