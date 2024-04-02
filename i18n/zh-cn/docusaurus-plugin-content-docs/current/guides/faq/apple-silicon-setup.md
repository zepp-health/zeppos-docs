---
title: Apple Silicon 机型环境安装 Zepp OS 开发环境
---

## 介绍

在 Apple Silicon 机型上搭建 Zepp OS 开发环境步骤较为特殊，请参考本文档进行环境配置。

:::info
如何确定 Mac 是否搭载 Apple 芯片？

1. 点击桌面左上角 Apple 图标
2. 点击「关于本机」
3. 在「概览」Tab 浏览处理器信息，如果显示 Apple 则为搭载 Apple 芯片的 Mac

:::

如果您的 Mac 符合上述条件，请按照以下步骤进行操作。否则参考 [快速上手-环境准备](../../guides/quick-start/environment.mdx)。

## 操作流程

### 1.开启系统扩展

参考 [Apple Silicon 机型开启系统扩展](./apple-silicon.md)

### 2.安装 Node.js

参考 [Node.js 官方网站](https://nodejs.org/en)，推荐使用 `nvm(Node Version Manager)` 的方式进行安装。

以下安装脚本摘自 Node.js 官网，仅供参考。

建议使用 Terminal 终端执行命令。

```js
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.12.0`

# verifies the right NPM version is in the environment
npm -v # should print `10.5.0`
```

### 3.安装 zeus-cli

参考 [Zeus CLI 命令行工具](../tools/cli/index.md) 安装 `zeus-cli`。

### 4.安装 Zepp OS 模拟器

前往 [模拟器下载](../tools/simulator/download.md) 页面下载最新版本的模拟器，并完成安装。

### 5.安装 `tun/tap` 系统扩展

模拟器的正常运行需要 `tun/tap` 系统扩展，我们借助 `Tunnelblick` 工具安装 `tun/tap` 系统扩展。

完整步骤参考 [安装虚拟网卡](../tools/simulator/setup.md#1-安装虚拟网卡)。

至此，恭喜你完成了 Apple Silicon 机型下的 Zepp OS 开发环境安装。
