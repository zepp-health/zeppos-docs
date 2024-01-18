---
title: 屏幕适配规范
sidebar_label: 屏幕适配规范
---

## 介绍

在 Zepp OS v3 版本中，我们推出了全新的屏幕适配方案，将屏幕特征进行了抽象，分为方屏、圆屏和手环条状屏幕。

按照屏幕适配规范编码，针对每一种屏幕类型维护一份资源文件，代码就可以在同类型所有屏幕的设备上运行，无需针对某款设备进行单独适配。

:::info
此屏幕规范仅适用于 [小程序配置 app.json](./../../../reference/app-json.mdx) v3 及以上版本
:::

## UI 设计基准

我们建议开发者在不同类型屏幕上参考基准尺寸进行 UI 设计。

1. 圆屏设计基准：480 x 480 px
2. 方屏设计基准：390 x 450 px
3. 手环条状屏幕设计基准：194 x 368 px

## 屏幕适配规范

完整适配规范包括四个部分

- 小程序配置 app.json
- 资源文件目录规范
- px 工具函数
- 布局文件分发（可选）

### 小程序配置 app.json

在 V3 版本的小程序配置 `app.json` 文件中，新增一个单独的构建目标 `target`。

此 `target` 的 `platforms` 中包含了屏幕特性配置数组。

看一个例子：

```json
{
  "platforms": [
    {
      "st": "r"
    },
    {
      "st": "s"
    },
    {
      "st": "b"
    },
    {
      "st": "s",
      "sr": "w320"
    }
  ]
}
```

`st` 的全称 Screen Type 代表屏幕类型

| `st` 值 | 说明         |
| ------- | ------------ |
| r       | 圆形屏幕     |
| s       | 方形屏幕     |
| b       | 手环条状屏幕 |

`sr` 全称 Screen Resolution 代表屏幕分辨率，格式为 `w<width>`，其中 width 代表屏幕宽度，如 `w480`。

回到案例，该配置代表该小程序对 4 种屏幕特性做了适配，分别是圆形屏幕、方形屏幕、带状屏幕以及屏幕宽度为 320px 的方屏设备。

### 资源文件目录规范

每一种屏幕特性，对应一个独立的资源文件目录。

以 `index.js` 文件为例，这个页面的布局文件需要使用配置限定符 `config-qualifier` 修饰，同时，资源文件目录也使用 `config-qualifier` 修饰

直接看一个例子，假设 `app.json` 中 `target` 字段的值为 `common`

- 页面逻辑
  - index.js
- 布局文件
  - index.r.layout.js
    - 对应资源文件目录 `assets/common.r`
  - index.s.layout.js
    - 对应资源文件目录名称 `assets/common.s`
  - index.b.layout.js
    - 对应资源文件目录名称 `assets/common.b`
  - index.w320-s.layout.js
    - 对应资源文件目录名称 `assets/common.w320-s`

在完成 `app.json` 配置和资源文件目录配置后，小程序在构建时，图片资源会以 `app.json` 中配置的 `designWidth` 为基准自动进行缩放。

举一个例子说明图片的缩放策略，假设配置了 `designWidth` 为 `480`，资源目录下 `test.png` 的图片尺寸为 `50 x 50 px` ，小程序在构建到屏幕宽度为 `416 px` 的圆形设备时，会将这张图片宽度缩放至 `Math.ceil(50 x 416 / 480) = 43` px，且宽高比保持不变，缩放后的尺寸就是 `43 x 43 px`。

:::info
如果没有配置 `designWidth`，圆屏的基准默认 `480`，方屏 `390`，带状屏 `194`。
:::

### px 工具函数

`utils` 模块实现了一个工具函数 [utils - `px`](../../../reference/device-app-api/newAPI/utils/px.mdx)。

:::info
要求开发者在编码层面对所有控件的坐标、宽高、字体等位置和尺寸属性，使用 `px` 函数对设计稿的基准值进行包裹，做到自适应计算。
:::

举一个例子：

```js
import { createWidget, widget, text_style, align } from '@zos/ui'
import { px } from '@zos/utils'

const textStyle = {
  x: px(96),
  y: px(40),
  w: px(288),
  h: px(48),
  color: 0xffffff,
  text_size: px(36),
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
  text_style: text_style.WRAP,
  text: 'HELLO, Zepp OS'
}

const text = createWidget(widget.TEXT, textStyle)
```

我们在基准为 `480px` 的设计稿上设计了这行字体高度为 `48px`，使用 `px` 函数包裹后，在宽度为 `454px` 的设备上字体的实际高度为 `Math.ceil(48 / 480 * 454) = 46`。

:::info
有部分尺寸并非是基于设计基准的值，无需使用 `px` 函数包裹。如 `@zos/device` 模块 `getDeviceInfo` 方法获取的 `width` 和 `height` 属性，为当前机型的实际尺寸，对于这部分值，需要避免被 `px` 函数包裹使用，会再次计算，导致结果不准确。如果需要混用设计基准值与机型实际尺寸值，建议这样使用，`w: width + px(20)`
:::

### 布局文件规范（可选）

按照布局文件规范组织代码，无需在代码中屏幕形状的和尺寸的判断，在应用构建时自动引用屏幕特性对应的布局文件。

`app.json` `target` 中的每一种屏幕特性配置，需要一个独立的布局文件与其对应，文件命名规则 `[name].[config-qualifier].layout.js`，文件名后缀约定 `layout.js`

| 符号             | 说明       |
| ---------------- | ---------- |
| name             | 文件名     |
| config-qualifier | 配置限定符 |

:::info
配置限定符 `config-qualifier` 的命名规则:

`sr` 的值在前，随后是 `st` 的值，如果 `st` 和 `sr` 同时配置，使用 `-` 进行分隔
:::

还是上文的例子，假定页面的文件名为 `index.js`

| 配置                  | config-qualifier 的值 | layout 文件名            | 说明                                           |
| --------------------- | --------------------- | ------------------------ | ---------------------------------------------- |
| `{st: "r"}`             | `r`                   | `index.r.layout.js`      | 该布局文件对圆形屏幕设备生效                   |
| `{st: "s"}`             | `s`                   | `index.s.layout.js`      | 该布局文件对方形屏幕设备生效                   |
| `{st: "b"}`             | `b`                   | `index.b.layout.js`      | 该布局文件对手环条状屏幕设备生效               |
| `{st: "s", sr: "w320"}` | `w320-s`              | `index.w320-s.layout.js` | 该布局文件对方形且屏幕宽度为 320 px 的设备生效 |

在 `index.js` 中，约定使用 `zosLoader:` 的前缀来引入布局文件。

```js
// index.js
import { layout } from 'zosLoader:./[name].[pf].layout.js'
```

此语句在小程序构建过程中会根据机型屏幕特点自动引入对应的 layout 文件。

举个例子，小程序构建到方形屏幕设备时，此语句就会被解析为 `import { layout } from 'index.s.layout.js'`。从而省去了开发者判断屏幕形状和尺寸的工作，只需要按照约定组织文件和使用 `zosLoader:` 即可。

:::tip
页面文件对应的 layout 文件目录与页面文件存放目录一致
:::

## 完整示例

完整示例请参考小程序 [calories](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/calories)
