---
title: 文件系统
sidebar_label: 文件系统
---

## 介绍

Zepp OS 小程序文件系统目录分为两个部分，`/assets` 资源目录和 `/data` 数据目录。

其中 `/assets` 目录存放小程序的资源，此目录下只可以执行可读操作。

:::info
`hmFS.stat_asset` 和 `hmFS.open_asset` 两个 API 以 `/assets` 资源目录为根目录
:::

每一个小程序都会有自己的 `/data` 数据文件目录，此目录可以读取和写入，每个小程序之间的数据相互隔离。

:::info
除了 `hmFS.stat_asset` 和 `hmFS.open_asset` 两个 API，其余文件系统操作 API 都是以 `/data` 为根目录
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
Page({
  build() {
    const fileId = hmFS.open_asset('raw/data.txt', hmFS.O_RDONLY)
  }
})
```

:::tip
`/raw` 是一个约定的目录名，`/raw` 目录在编译打包的时候会复制到 `/assets` 目录下
:::

## 文件系统 API 说明

:::caution
所有文件系统 API 都需要在 App 或者 Page 的生命周期内调用，否则会出现错误
:::

### 错误代码

| 错误代码 | 说明             |
| -------- | ---------------- |
| 0        | 操作成功         |
| -1        | 磁盘错误         |
| -2        | 内部错误         |
| -3        | 磁盘错误         |
| -4        | 无法找到路径     |
| -5        | 无法找到路径     |
| -6        | 路径格式不正确   |
| -7        | 无访问权限       |
| -8        | 无访问权限       |
| -9        | 无效的文件句柄   |
| -10       | 磁盘写入保护     |
| -11       | 磁盘错误         |
| -12       | 磁盘空间不足     |
| -13       | 磁盘空间不足     |
| -14       | 执行失败         |
| -15       | 无访问权限       |
| -16       | 磁盘错误         |
| -17       | 同时打开过多文件 |
| -18       | 传入参数无效     |
