---
title: API_LEVEL 4.0 新特性
sidebar_label: API_LEVEL 4.0 新特性
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# API_LEVEL 4.0 新特性

API_LEVEL 4.0 带来了多项重要更新和新功能，为开发者提供更强大的工具和更灵活的开发体验。本文将介绍主要的新特性和改进。

## 控件 layout 属性实现 Flex 布局

详情参考 [控件 layout 属性实现 Flex 布局](../../guides/framework/device/layout.md)。

API_LEVEL 4.0 引入了对 Flex 布局的支持，使开发者能够使用与 Web 开发类似的方式来构建智能手表应用的界面，大大提高了布局的灵活性和开发效率。

<img src={useBaseUrl('/img/docs/guides/framework/layout_effect.jpg')} width="50%" title="layout_effect" />

## UI 控件的属性读写

详情参考 [控件 getter/setter 特性](../../reference/device-app-api/newAPI/ui/gettersetter.mdx)。

从 API_LEVEL 4.0 开始，通过 `getter/setter` 特性直接访问和设置控件属性，使得控件属性的读写更加简洁和直观。

并且在 UI 控件的文档中，会标注属性访问的支持情况。

```js
import { createWidget, widget, prop } from '@zos/ui'

Page({
  build() {
    // 创建 TEXT 控件
    const textWidget = createWidget(widget.TEXT, {
      // ...
    })

    // 使用 getter 读取属性
    console.log('Text content:', textWidget.text)
    console.log('Text color:', textWidget.color)
    console.log('Text position:', textWidget.x, textWidget.y)

    // 使用 setter 设置属性
    textWidget.text = 'Updated Text'
    textWidget.color = 0xff0000
    textWidget.x = 120
  }
})
```

与 `getProperty` 和 `setProperty` 方法对比

```js
// 读取属性
const oldText = textWidget.getProperty(prop.TEXT)
console.log('Old way - Text content:', oldText)

// 设置属性
textWidget.setProperty(prop.TEXT, 'Set by old method')
textWidget.setProperty(prop.MORE, {
  color: 0x00ff00,
  x: 150
})
```

## 新增 UI 控件/方法

- 智能键盘 [SMART_KEYBOARD](../../reference/device-app-api/newAPI/ui/widget/SMART_KEYBOARD.mdx)

<img src={useBaseUrl('/img/api/smart_keyboard.jpg')} width="50%" title="smart_keyboard" />

- [CHECKBOX](../../reference/device-app-api/newAPI/ui/widget/CHECKBOX_GROUP.mdx) 和 [RADIO](../../reference/device-app-api/newAPI/ui/widget/RADIO_GROUP.mdx) 支持使用颜色填充

## 传感器模块

- [`Compass`](../../reference/device-app-api/newAPI/sensor/Compass.mdx) 支持设置传感器上报频率
- [`Geolocation`](../../reference/device-app-api/newAPI/sensor/Geolocation.mdx) 可以获取用户设置隐私定位权限保护状态

## @zos/app 模块

获取小程序性能统计信息，包括内存占用和加载性能等指标。

- [getPerformance](../../reference/device-app-api/newAPI/app/getPerformance.mdx)

## @zos/util 模块

新增了一些工具方法，支持 `ArrayBuffer` 和 `String` 类型互相转换，便于处理数据

- [bufferToString](../../reference/device-app-api/newAPI/utils/bufferToString.mdx)
- [stringToBuffer](../../reference/device-app-api/newAPI/utils/stringToBuffer.mdx)
