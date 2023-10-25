---
title: Zeus CLI 命令行工具
sidebar_label: 使用说明
---

## 介绍

Zeus CLI 是一个命令行工具集，主要有如下功能：

- `zeus create` 创建 Zepp OS 小程序或表盘项目
  - 命令行交互式问答的形式，体验更友好
  - 多种项目模版可以选择
- `zeus dev` 编译预览
  - 连接模拟器，预览项目
  - 监听项目代码改动，自动刷新
- `zeus preview` 生成二维码，可通过 Zepp APP 扫码安装到设备
- `zeus build` 构建应用 zab 包

## 环境准备

Zeus CLI 依赖 Node.js >= 14.0.0，Node.js 的安装请参考 [基础环境搭建 - 安装 Node.js](../../best-practice/Basic-environment-construction.mdx#安装-nodejs)。

## 安装 Zeus CLI

通过 npm 进行全局安装 [`@zeppos/zeus-cli`](https://www.npmjs.com/package/@zeppos/zeus-cli)。

```sh
npm i @zeppos/zeus-cli -g

// or

yarn global @zeppos/zeus-cli
```

## `zeus create` 创建项目

创建项目：

```sh
zeus create hello-world
```

:::tip
`hello-world` 为创建的项目名称，可以自行修改
:::

按照如下选择，生成项目：

```sh
? Which kind of template application need to created? Empty
? What type of application should be created? APP
? Should this application contain a app-side component? Yes
? Should this application contain a settings component? Yes
? Which platforms should this application be built for? GTR3 Pro, GTR3
```

完成项目创建，`hello-world` 项目目录结构如下：

```tree
└── hello-world
    ├── app-side
    │   ├── i18n
    │   │   └── en-US.po
    │   └── index.js
    ├── app.js
    ├── app.json
    ├── assets
    │   ├── 436x436-gtr-3
    │   └── 480x480-gtr-3-pro
    ├── pages
    │   ├── example
    │   │   └── index.js
    │   ├── i18n
    │   │   └── en-US.po
    │   └── index.js
    └── setting
        ├── i18n
        │   └── en-US.po
        └── index.js
```

## `zeus dev` 编译预览（模拟器）

在项目根目录执行 `zeus dev` 即可进行编译预览。

预览需要启动模拟器，并开启「设备模拟器」：

- 模拟器安装与启动请参考 [模拟器安装与启动](../simulator/setup.md)
- 「设备模拟器」下载与开启请参考 [安装并开启「设备模拟器」](../simulator/index.md#安装并开启设备模拟器)

Zeus CLI 连接模拟器，自动预览项目，同时监听项目代码改动，自动编译并预览最新内容。

```sh
# 进入项目根目录
cd hello-world

# 启动编译预览
zeus dev
```

## `zeus login` 登录

执行 `zeus login`，自动跳转登录界面，输入开放平台账户/密码即可登录，登录后可使用部分与账户关联的功能，如 `zeus preview`。

:::caution
部分需要登录的命令执行前会进行登录检查，如果未登录状态则会强制进行登录
:::

## `zeus preview` 编译预览（真机）

在项目根目录执行 `zeus preview` 进行编译预览（真机）。

```sh
# 编译预览（真机）
zeus preview
```

根据命令行提示选择编译选项。

```sh
? Which target would like you to build?
> 480x480-gtr-3-pro
  454x454-gtr-3


? Which target would like you to build? 480x480-gtr-3-pro
begin generate qrcode
```

编译成功后，会在终端显示二维码，使用 Zepp App 「开发者模式」扫一扫功能扫描此二维码即可将小程序或表盘安装至设备中。

:::tip
此步骤需要开启 Zepp App 的开发者模式，参考 [开发者模式](../zepp-app.md)

Zepp App 开发者模式扫一扫操作路径

我的 => 绑定的设备页并下拉至最底部 => 开发者模式
:::

![developMode](/img/zh-cn/docs/guides/tools/studio/developMode.png)

## `zeus build` 构建应用安装包

执行 `zeus build` 构建应用安装包。

```sh
# 启动项目包构建
zeus build
```

构建完成后，在项目 `dist/` 目录中可获取应用的安装包。

## `zeus config` 配置相关

- `zeus config list`
  - 查看当前所有配置
- `zeus config set <key>=<value>`
  - 新增配置
  - 多个配置间用空格分隔
- `zeus config get <key>`
  - 查看 `key` 对应的配置
- `zeus config delete <key>`
  - 删除 `key` 对应的配置

## `zeus bridge` 开启 Developer Bridge 模式

在项目根目录执行 `zeus bridge`，进入 Developer Bridge 模式。

通过 Developer Bridge 模式可与运行环境建立连接。详细信息请查看 [Developer Bridge 模式](guides/faq/developer-bridge-mode.md)。

## `zeus status` 查看相关状态

运行 `zeus status` 即可查看当前登录状态及用户信息（昵称/userID）、模拟器连接状态等信息。

:::info
只有在已登录状态下才可以查看用户信息
:::
