---
title: 文件系统
sidebar_label: 文件系统
---

## 介绍

Zepp OS 小程序文件系统目录分为两个部分，`/assets` 资源目录和 `/data` 数据目录。

其中 `/assets` 目录存放小程序的资源，此目录下只可以执行可读操作。

:::info
`statAssetsSync` 和 `openAssetsSync` 两个 API 以 `/assets` 资源目录为根目录
:::

每一个小程序都会有自己的 `/data` 数据文件目录，此目录可以读取和写入，每个小程序之间的数据相互隔离。

:::info
除了 `statAssetsSync` 和 `openAssetsSync` 两个 API，其余文件系统操作 API 都是以 `/data` 为根目录
:::

## `/assets` 资源目录

这里需要明确两个 `/assets` 目录概念

- 小程序开发时目录结构中的 `/assets` 目录
- 小程序文件系统 `/assets` 目录

两者存在非常紧密的联系，直接看一个例子。

下图是小程序开发时目录结构中的 `/assets` 目录

```tree
.
assets
├── gtr-3
│   ├── icon.png
│   └── image
│       └── logo.png
├── gtr-3-pro
│   ├── icon.png
│   └── image
│       └── logo.png
└── gts-3
│   ├── icon.png
│   └── image
│       └── logo.png
└── raw
    └── data.txt
```

小程序编译构建完之后，小程序文件系统 `/assets` 目录就对应如下。

```tree
.
assets
├── icon.png
└── image
│   └── logo.png
└── raw
    └── data.txt
```

相关 `assets` 目录操作的 API 路径参照上图写即可，比如需要访问 `raw/data.txt`。

```js title="page.js"
import { openAssetsSync, O_RDONLY } from '@zos/fs'

const fd = openAssetsSync({
  path: 'raw/data.txt',
  flag: O_RDONLY,
})
```

:::tip
`/raw` 是一个约定的目录名，`/raw` 目录在编译打包的时候会复制到小程序文件系统目录中
:::
