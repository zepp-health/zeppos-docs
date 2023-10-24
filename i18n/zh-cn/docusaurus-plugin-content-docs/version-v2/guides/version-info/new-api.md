---
title: 2.0 API 介绍
sidebar_label: 2.0 API 介绍
---

## 介绍

在 Zepp OS 1.0 小程序 API 服务全球开发者一年多的时间里，我们吸取了非常多来自社区的建议，整理了 1.0 API 主要存在的问题。

为了解决这些问题，打造更优的开发体验，Zepp OS 团队对小程序 API 重构，推出 2.0 全新版本。

![api_feature](/img/docs/guides/version_info/api_feature_zh.jpg)

:::caution
使用 Zepp OS 2.0 API 开发的小程序无法在搭载 Zepp OS 1.0 版本的设备上运行。

如果要为 Zepp OS 1.0 版本的设备开发小程序，请点击文档右上角版本切换按钮切换至 v1.0 版本。

- 查询设备搭载的 Zepp OS 版本，请参考 [《搭载 Zepp OS 设备列表》](../../reference/related-resources/device-list.mdx)。
- 更多关于兼容性的信息请参考 [《API_LEVEL（兼容性）》](../framework/device/compatibility.md)。
:::

## 快速上手

### 模块划分

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

开发者可以根据需要，在相关模块中快速查找所需要的 API。

### 通过 ESM 方式引入

我们在 API 设计上向 ECMAScript 标准看齐，除了框架接口模块外，全部使用 ECMAScript modules 的方式引入。

以 [push](../../reference/device-app-api/newAPI/router/push.mdx) 举例：

```js
import { push } from '@zos/router'

push({
  url: 'page/index',
  params: 'type=1'
})
```

### 命名规则统一，调用方式更加灵活

Zepp OS 2.0 API 的命名方式在最大程度上保持一致，遵循驼峰命名规则，并具有良好的语义。

在参数传递上也进行了统一，大多数方法都是接受一个类型为 `object` 的对象作为参数。

如 [scrollTo](../../reference/device-app-api/newAPI/page/scrollTo.mdx)：

```js
import { scrollTo } from '@zos/page'

scrollTo({
  y: 200
})
```

部分 API 支持简化的调用方式，会在 API 文档的类型标题下进行标注，`scrollTo` 就支持简化调用：

![scrollTo](/img/docs/guides/version_info/scrollTo.jpg)

根据简化调用方式的类型签名进行调用：

```js
import { scrollTo } from '@zos/page'

scrollTo(200)
```

### 新增一系列易用 API

Zepp OS 1.0 小程序中实现部分技术场景较为繁琐，如文件读写，往往需要较多代码量。

对比两段代码：

```js title="1.0 API"
const fileName = 'TEST.txt'

const [fsStat, err] = hmFS.stat(fileName)
if (err === 0) {
  const fileContentUnit = new Uint8Array(fsStat.size)
  const file = hmFS.open(fileName, hmFS.O_RDWR)
  hmFS.seek(file, 0, hmFS.SEEK_SET)
  hmFS.read(file, fileContentUnit.buffer, 0, fileContentUnit.length)
  hmFS.close(file)

  const content = JSON.parse(String.fromCharCode.apply(null, fileContentUnit))
}
```

```js title="2.0 API"
const fileName = 'TEST.txt'
const result = readFileSync({
  path: fileName,
  options: {
    encoding: 'utf8'
  }
})

if (result) {
  const content = JSON.parse(result)
}
```

2.0 [`readFileSync`](../../reference/device-app-api/newAPI/fs/readFileSync.mdx) API 代码量明显减少，代码的可读性和维护性增强，如果用途是实现一个持久化键值对存储，还可以借助 [`LocalStorage`](../../reference/device-app-api/newAPI/storage/localStorage.mdx) 实现。

```js title="page.js"
import { localStorage } from '@zos/storage'

localStorage.setItem('test', 'test value')
const val = localStorage.getItem('test')
const defaultValue = localStorage.getItem('none_key', 'defaultValue')
```

除了文件读写场景，还提供了管理事件发布订阅的工具类 [EventBus](../../reference/device-app-api/newAPI/utils/EventBus.mdx)，更强大的日志工具 [log](../../reference/device-app-api/newAPI/utils/log.mdx) 等 API。

### 全新文档和类型声明文件

全新 2.0 API 配套全新 API 文档，排版简洁，类型一目了然，并配有完整代码示例和图示，文档浏览体验显著提高。

同时我们提供了非常完整的类型声明文件，通过 npm 包的形式发布，编辑器中会得到非常友好且完善的提示。

```sh
npm i @zeppos/device-types

or

yarn add @zeppos/device-types
```

![declaration_demo](/img/docs/guides/version_info/declaration.gif)

### 从 1.0 迁移

Zepp OS 2.0 中，我们推出了 `API_LEVEL` 的概念，是一套完整的 JS API 兼容性方案，参考 [API_LEVEL #兼容性保证](../framework/device/compatibility.md#兼容性保证)。

详细迁移步骤请参考 [《从 1.0 版本升级》](migration-guide.md)。
