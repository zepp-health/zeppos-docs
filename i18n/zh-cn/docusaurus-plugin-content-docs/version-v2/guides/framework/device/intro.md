---
title: 简介
sidebar_label: 简介
---

Zepp OS 小程序为开发者提供了 JavaScript 运行环境，来实现 UI 交互以及传感器调用等各种能力。

## 小程序形态

小程序的运行场景有：

- 小程序
- 副屏应用
- 快捷卡片

副屏应用和快捷卡片参考 [《注册副屏应用和快捷卡片》](secondary-widget.md)。

## Zepp OS 开放能力

:::caution
使用 Zepp OS 2.0 API 开发的小程序无法在搭载 Zepp OS 1.0 版本的设备上运行。

如果要为 Zepp OS 1.0 版本的设备开发小程序，请点击文档右上角版本切换按钮切换至 v1.0 版本。

- 查询设备搭载的 Zepp OS 版本，请参考 [《搭载 Zepp OS 设备列表》](../../../reference/related-resources/device-list.mdx)。
- 更多关于兼容性的信息请参考 [《API_LEVEL（兼容性）》](../device/compatibility.md)。
:::

Zepp OS 2.0 API 对系统的开放能力进行了更为细化的梳理，将 API 细分到十余个模块中：

- UI
- 框架接口
- 传感器
- 小程序相关
- 页面
- 路由
- 用户交互
- 系统设置
- 屏幕显示
- 设备
- 用户
- 文件系统
- 存储
- 国际化
- 工具
- BLE 通信

在设备端，开发者通过调用这些 API 来使用 Zepp OS 的开放能力。

`UI` 模块提供了非常丰富的 UI 控件，调用 `createWidget` API 即可进行 UI 控件创建。此外，UI 控件还包含了整套事件系统，方便开发者处理交互逻辑。

Zepp OS 是为智能穿戴设备打造的健康管理系统，生命体征相关运动数据通过传感器模块开放，最大程度支持开发者为用户创造健康价值。

「路由」模块可以做到多页面的交互效果，是小程序实现复杂功能的基础。

更多能力请参考详细 [API 文档](../../../reference/device-app-api/newAPI/ui/widget/TEXT.mdx)。
