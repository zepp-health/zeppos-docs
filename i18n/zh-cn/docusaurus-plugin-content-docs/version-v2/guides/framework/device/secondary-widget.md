---
title: 注册副屏应用和快捷卡片
sidebar_label: 注册副屏应用和快捷卡片
---

## 「副屏应用」和「快捷卡片」功能介绍

下图摘自 Zepp OS 系统设计规范，展示了 Zepp OS 部分主要界面，以及界面之间切换的逻辑。

![Design](/img/design/6666d8e9bc374b12669907e0b99e6656.png)

### 「副屏应用」

从表盘页面左滑，进入 Widget 1 页面，整个 Widget 1 页面就是一个「副屏应用」，在 Widget 1 页面左滑，进入 Widget 2 页面，Widget 2 页面同样是一个「副屏应用」，依此类推。

下图为「副屏应用」的运行效果：

![widget](/img/docs/guides/version_info/widget.gif)

在系统设置中可以对「副屏应用」进行添加、删除、排序等操作，具体操作路径为

:::info
设置 => 使用偏好 => 副屏应用 => 界面底部的添加 icon
:::

:::caution
部分设备不支持「副屏应用」，在 [设备基本信息](../../../reference/related-resources/device-list.mdx) 中查询副屏应用的支持情况
:::

### 「快捷卡片」

在表盘页面右滑，进入「Negative Screen」页面，页面为一个纵向长列表，包含一系列的「快捷卡片」

下图为「快捷卡片」的运行效果：

![cards](/img/docs/guides/version_info/cards.gif)

在快捷卡片设置中可以对「快捷卡片」进行添加、删除、排序等操作，具体操作路径为

:::info
快捷卡片页面下拉至最底部 => 点击设置 icon => 界面底部添加 icon
:::

### 两者功能简单对比

- 快捷卡片
  - 更侧重「快捷」，提供快速访问入口
  - 绘图区域更为紧凑，只能容纳核心信息
- 副屏应用
  - 更侧重「信息展示」，可以承载更多信息
  - 更适合做图表类展示

## 副屏应用和快捷卡片能力开放

自 Zepp OS 诞生以来一直延续这样的界面框架，「副屏应用」和「快捷卡片」快捷和美观的特点得到广大用户的好评。

拓展系统开放能力是 Zepp OS 团队的一个重要目标，在全新推出的 2.0 版本中，我们将小程序的运行场景拓展到了副屏应用和快捷卡片。

接下来的章节，会以「副屏应用」为例，进行一个快速上手，创建一个简单的「副屏应用」。

在开始之前，先介绍一些相关背景：

:::info

- 「副屏应用」和「快捷卡片」是小程序的一部分，类似「伴生应用」，他们都是可选的，一个小程序可以包含多个独立的「副屏应用」或「快捷卡片」，总上限为 5 个
- 「副屏应用」和「快捷卡片」必须在支持 API_LEVEL 2.0 及以上的设备才可以使用
- 「副屏应用」和「快捷卡片」的绘图区域有边界限制，只可以在给定的边界内，绘制 UI 控件，具体限制下文会展开说明
- 无法响应滑动、手势、按键事件，只响应屏幕点击事件，通常点击后会跳转到相应的主程序，比如点击「天气」副屏应用，跳转至「天气」应用
- 凡是涉及到滚动、滑动以及图层堆叠相关的 UI 控件，都无法使用，如 SCROLL_LIST、VIEW_CONTAINER
- 「快捷卡片」无法使用 GROUP 控件
:::

「副屏应用」的构造函数是 `SecondaryWidget`，「快捷卡片」的构造函数 `AppWidget`，下文中如果出现了 `SecondaryWidget`，代表「副屏应用」，`AppWidget` 代表「快捷卡片」。

## 快速起步：创建一个「副屏应用」

1. 使用 Zeus CLI 工具，创建模版项目

```sh
zeus create widget-demo
```

选择使用 OS 2.0 API，模版选择 Empty

![cards](/img/docs/guides/version_info/cli_template.png)

2. 创建「副屏应用」相关目录和文件

```tree
.
├── app-side
│   ├── i18n
│   │   └── en-US.po
│   └── index.js
├── app.js
├── app.json
├── assets
│   └── 466x466-gtr-4
│       └── icon.png
├── global.d.ts
├── jsconfig.json
├── package-lock.json
├── package.json
├── page
│   ├── i18n
│   │   └── en-US.po
│   └── index.js
├── secondary-widget // new directory
│   └── index.js
└── setting
    ├── i18n
    │   └── en-US.po
    └── index.js
```

index.js 文件内容见下文

```js
// index.js
import { createWidget, widget, align, text_style } from '@zos/ui'

SecondaryWidget({
  build() {
    const text = createWidget(widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: 'HELLO, Zepp OS'
    })
  }
})
```

3. 在 app.json 中加入「副屏应用」相关配置

```json
"targets": {
    "466x466-gtr-4": {
      "module": {
        "page": {
          "pages": [
            "page/index"
          ]
        },
        "app-side": {
          "path": "app-side/index"
        },
        "setting": {
          "path": "setting/index"
        },
        // widget related configuration
        "secondary-widget": {
          "widgets": [
            {
              // widget file path
              "path": "secondary-widget/index",
              "icon": "icon.png",
              "name": "widget-demo",
              "runtime": {
                "type": "js"
              }
            }
          ]
        }
      },
```

4. 打开模拟器到项目根目录运行 `zeus dev` 命令

在模拟器的设置中，就可以找到名为 `widget-demo` 的「副屏应用」，点击添加，返回表盘页面，向左滑动即可看到效果。

![widget](/img/docs/guides/version_info/widget_demo.png)

![widget](/img/docs/guides/version_info/widget_demo_real_machine.gif)

至此，就完成了「副屏应用」创建，除了文中提到的部分限制外，其余 API 都可正常使用，可以尽情发挥想象力。

## 相关要点

### 绘图区域

「副屏应用」和「快捷卡片」的绘图区域有边界限制，只可以在给定的边界内，绘制 UI 控件，在边界外的 UI 控件不会被渲染。

- 「副屏应用」
  - 绘图区域的边界与当前设备的屏幕边界保持一致
  - 举一个例子， Amazfit GTR 4 的屏幕分辨率为 466 x 466，「副屏应用」的绘图区域就是 466 x 466，占据一整个屏幕，这一点可以类比于表盘，表盘的绘图区域大小也为 466 x 466
- 「快捷卡片」
  - 绘图区域的边界与「快捷卡片」的尺寸保持一致，下图的标红区域就是绘图区域边界
  - 「快捷卡片」的尺寸与设备相关，通过 [getAppWidgetSize()](../../../reference/device-app-api/newAPI/ui/getAppWidgetSize.mdx) API 进行获取，拿到宽度、圆角、高度信息
  - 「快捷卡片」的尺寸可通过 [setAppWidgetSize()](../../../reference/device-app-api/newAPI/ui/setAppWidgetSize.mdx) API 进行设置，但只可设置高度，卡片默认高度是设备高度的 50%，可设置区间在设备高度的 20% - 60%
  - 「快捷卡片」的 UI 控件布局采用的都是相对坐标，坐标计算相对于卡片左上角

![widget](/img/docs/guides/version_info/boundary.png)

### 生命周期

小程序在加入了「副屏应用」和「快捷卡片」之后，生命周期发生一些变化。

在介绍生命周期之前，先引入一个概念，叫做「Pause」状态，在这个状态下代码的上下文信息会保留，但是无法响应注册的回调函数，注册的定时器会暂停。

在设置中添加「副屏应用」后回到表盘，或者在负一屏设置中添加完成「快捷卡片」后回到负一屏页面时，触发 `app.js` 的 `onCreate` 生命周期。

随后执行「副屏应用」或者「快捷卡片」的 `onInit` 和 `build` 生命周期。之后 `app.js` 进入「Pause」状态，直到打开小程序页面或者让「副屏应用」或「快捷卡片」获得焦点。

「副屏应用」和「快捷卡片」有获得焦点的特性，即页面聚焦到「副屏应用」或「快捷卡片」时，会触发 `onResume` 生命周期，当页面失去焦点时触发 `onPause` 生命周期。

:::info
当「副屏应用」和「快捷卡片」失去焦点后，会进入 「Pause」 状态。
:::

看一个完整的例子

![widget](/img/docs/guides/version_info/lifecycle.jpg)

### 跳转主程序

上文提到，「副屏应用」和「快捷卡片」只能响应点击事件，通常点击之后跳转相应的主程序，直接使用 [@router/push](../../../reference/device-app-api/newAPI/router/push.mdx) 方法跳转即可，并且可以携带跳转相关参数。

### 调试技巧

建议在「副屏应用」和「快捷卡片」的生命周期加入 `try catch` 语句，来捕获错误，避免模拟器调试时候 JS 错误导致模拟器卡死。

参考 [错误捕获](../../best-practice/error-catch.mdx)

### 与小程序页面通信

详细参考最佳实践，提到的几种方式均适用于「副屏应用」、「快捷卡片」和小程序页面间的通信。

参考 [跨页面通信](../../best-practice/cross-page-communications.mdx)

- @zos/router push 方法跳转页面并携带参数
- 全局 app 对象通信
- 借助 @zos/storage sessionStorage
- 借助 @zos/storage localStorage 或者 @zos/fs 文件系统模块来进行数据持久化存储

参考下方数据流图示

![widget](/img/docs/guides/version_info/data_flow.jpg)

:::caution
目前「副屏应用」和「快捷卡片」无法做到通过蓝牙连接展示一些实时数据，需要将 BLE 相关连接初始化如 MessageBuilder 在 Page 中进行初始化。
:::

### 国际化与图片资源

i18n 用法与小程序页面一致，多语言文件一并存放在 /page/i18n 目录下。

图片资源路径也与小程序页面保持一致。

「副屏应用」和「快捷卡片」名称的多语言在 app.json 中配置，以下是示例

「副屏应用」的名称在 `secondary-widget` 字段中进行配置。

```json
"secondary-widget": {
  "widgets": [
    {
      "path": "secondary-widget/index",
      "runtime": {
        "type": "js"
      },
      "name": "App Name",
      "i18n": {
        "en-US": {
          "name": "App Name"
        },
        "zh-CN": {
          "name": "应用名称"
        }
      }
    }
  ]
},
```

快捷卡片的名称在 app.json 的根 `i18n` 节点中配置。

```json
{
  "i18n": {
    "en-US": {
      "appName": "Calories"
    },
    "zh-CN": {
      "app-widget": {
        "widgets":[{
          "name": "卡路里"
        }]
      }
    }
  },
  "defaultLanguage": "en-US"
}
```

## 完整示例

「副屏应用」和「快捷卡片」提到的概念非常抽象，需要结合案例来理解。

我们在 calories 示例小程序基础上新增了「副屏应用」和「快捷卡片」，源码一并放在了 Github 仓库中，供大家参考。[示例小程序 - Calories](../../../samples/app/calories.md)

![widget](/img/docs/guides/version_info/calorie_1.png)

![widget](/img/docs/guides/version_info/calorie_2.png)
