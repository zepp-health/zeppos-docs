---
title: Zepp OS 2.0 新特性
sidebar_label: Zepp OS 2.0 新特性
---

Zepp OS 2.0 带来了非常丰富的新特性。

![v2_feature](/img/docs/guides/version_info/v2_feature_zh.jpg)

## 全新小程序 API

:::caution
使用 Zepp OS 2.0 API 开发的小程序无法在搭载 Zepp OS 1.0 版本的设备上运行。

如果要为 Zepp OS 1.0 版本的设备开发小程序，请点击文档右上角版本切换按钮切换至 v1.0 版本。

- 查询设备搭载的 Zepp OS 版本，请参考 [《搭载 Zepp OS 设备列表》](../../reference/related-resources/device-list.mdx)。
- 更多关于兼容性的信息请参考 [《API_LEVEL（兼容性）》](../framework/device/compatibility.md)。
:::

在 Zepp OS 1.0 小程序 API 服务全球开发者一年多的时间里，Zepp OS 团队收集到非常多的问题、反馈和建议。

为了打造更好的开发体验，提高开发效率，我们推出了一套全新 API，全面拥抱 ESM 模块化标准，并且规划了 API 兼容性、权限管理等相关能力。

![api_feature](/img/docs/guides/version_info/api_feature_zh.jpg)

详情参考 [《2.0 API 介绍》](new-api.md)。

### 新增能力

开放了副屏应用和快捷卡片应用的新场景，详情参考 [《注册副屏应用和快捷卡片》](../framework/device/secondary-widget.md)。

UI 控件能力得到增强：

- [IMG](../../reference/device-app-api/newAPI/ui/widget/IMG.mdx) 控件支持缩放，详见 `auto_scale` 属性
- [TEXT](../../reference/device-app-api/newAPI/ui/widget/TEXT.mdx) 控件支持自定义字体，详见 `font` 属性
- 新增 [VIEW_CONTAINER](../../reference/device-app-api/newAPI/ui/widget/VIEW_CONTAINER.mdx) 布局控件，可以让控件产生堆叠，极大增强控件布局灵活度
- 新增 [控件动画](../../reference/device-app-api/newAPI/ui/widgetAnimations.mdx)，更方便地实现动画

还有更多新能力即将开放，敬请期待。

### 权限控制

Zepp OS 在保持开放态度的同时，始终将对用户信息、隐私数据的保护放在第一位。

详情参考 [《API 权限控制》](../framework/device/permission.md)。

### API_LEVEL 兼容性

Zepp OS 的开放能力（JS API）在不断扩充，提供的能力也不断增强，但一些旧版本固件上不会立即更新这些新的开放能力，此时就会出现 API 与固件版本不兼容的问题。

在 Zepp OS 2.0 中，我们推出了 `API_LEVEL` 的概念，是一套完整的 JS API 兼容性方案。

详情参考 [《API_LEVEL（兼容性）》](../framework/device/compatibility.md)。

## 工具链

除了小程序框架外，配套工具链也推出了一系列重磅新特性。

### CLI

- 提供了对 Zepp OS 2.0 小程序的全面支持
- Bridge 模式设备截图功能

### 模拟器

模拟器支持跨平台，支持 Windows、Mac OS 和 Linux。

### 文档平台

- 全新 2.0 API 配套全新 API 文档，排版简洁，类型一目了然，并配有完整代码示例和图示，文档浏览体验显著提高
- 新增了文档版本切换的能力，方便切换文档版本

### 声明文件

在编辑器中配合 [`@zeppos/device-types` 声明文件](https://www.npmjs.com/package/@zeppos/device-types) 获取代码提示。

![declaration_demo](/img/docs/guides/version_info/declaration.gif)

## 设计规范

发布了 [《Zepp OS 系统设计规范》](../../designs/index.md)：提供完善的设计指引和最佳实践，涵盖理念、结构、交互、视觉、元素、定制化、国际化和设计自查表，帮助开发者高效高质量产出产品设计方案。

结合设计与技术，提供所需的指导、资源，旨在降低冗余的生产成本，有效提升设计开发效率，共同打造智能健康管理系统，实现价值共生。
