---
title: VS Code 拓展插件（Zepp OS Dev Tools）
sidebar_label: 使用说明
---

:::danger
此插件已废弃，不再提供文档和技术支持，请使用 [Zeus CLI 工具](../cli/index.md)
:::

## 介绍

Zepp OS Dev Tools 是 Visual Studio Code 编辑器插件。

可以对 [Zeus-CLI](../cli/index.md) 命令行工具集的命令进行可视化交互。

未来还会支持更多新的功能，敬请期待。

## 环境准备

- 需要 Visual Studio Code 版本在 1.67.0 及以上

## 安装插件

在 VS Code 插件市场检索 [Zepp OS Dev Tools](https://marketplace.visualstudio.com/items?itemName=Zepp.zeppos-dev-tools) ，然后点击安装。

![zeppos-dev-tools](/img/docs/guides/tools/vscode-extension/zeppos-dev-tools.gif)

## 插件配置

### 配置一（0.1.0 版本不支持）

运行模式可选基于 terminal，或基于 GUI

- terminal: 功能交互以终端命令行为主
- GUI: 功能交互以 GUI 为主

默认值为 GUI

![mode](/img/docs/guides/tools/vscode-extension/mode.png)

### 配置二

显示在底部状态栏中的快捷方式:

- dev: 与 CLI 对应的`zeus dev`命令。
- preview: 与 CLI 对应的`zeus preview`命令
- bridge: 与 CLI 对应的`zeus bridge`命令
- build: 与 CLI 对应的 `zeus build` 命令
- rocket: 完整的功能列表

默认值为[]

![set-statusbar](/img/docs/guides/tools/vscode-extension/set-statusbar.gif)

## 插件使用

### 方式一

增加 zepp-os-explorer 视图，用于显示 USER、STATUS、BUILD 相关信息并提供快捷功能按钮。

![zepp-os-explorer](/img/docs/guides/tools/vscode-extension/zepp-os-explorer.png)

### 方式二

在 VS Code 任意界面，使用快捷命令 `Command + P` 或者 `Ctrl + P` 唤出窗口输入 `>zeus`，即可出现所有支持的命令，点击你需要的进行下一步操作。

![command+p](/img/docs/guides/tools/vscode-extension/command+p.gif)

### 方式三

在编辑器页面，打开任意文件，可以在右上角的标题状态栏看见一个小 ZEPP OS 图标，点击它也可以召唤出所有命令的弹窗列表。

![right-corner-zepp-os](/img/docs/guides/tools/vscode-extension/right-corner-zepp-os.gif)

### 方式四

激活插件后（即执行过一次方案一、方案二或方案三，并且在插件配置二中被有效设置），在 VS Code 底部状态栏会出现 CLI 的常用命令，后续开发更快捷。

![statusbar](/img/docs/guides/tools/vscode-extension/statusbar.gif)

## 支持命令

- `zeus.commands` 全部功能列表
- `zeus.docs` 查看文档
- `zeus.check.install` 检查全局是否安装了`@zeppos/zeus-cli`依赖
- `zeus.create` 对应 CLI 的 `zeus create`命令
- `zeus.init` 对应 CLI 的 `zeus init`命令
- `zeus.login` 对应 CLI 的 `zeus login`命令
- `zeus.logout` 对应 CLI 的 `zeus logout`命令
- `zeus.status` 对应 CLI 的 `zeus status`命令
- `zeus.config` 对应 CLI 的 `zeus config`命令
- `zeus.dev` 对应 CLI 的 `zeus dev`命令
- `zeus.build` 对应 CLI 的 `zeus build`命令
- `zeus.preview` 对应 CLI 的 `zeus preview`命令
- `zeus.bridge` 对应 CLI 的 `zeus bridge`命令
- `zeus.simulator` 设置 simulator 的 `zeus config` 快捷命令

如果你对 CLI 及其命令还不够熟悉，可以查看 [CLI 文档](../cli/)。
