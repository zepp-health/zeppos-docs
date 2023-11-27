---
title: 安装与启动
sidebar_label: 安装与启动
---

不同操作系统对应着不同的安装和启动方式，请开发者根据操作系统参考对应章节：

- [Windows 版本安装](#windows-版本安装)
  - [环境准备](#环境准备)
    - [1.安装虚拟网卡](#1安装虚拟网卡)
    - [2.配置虚拟网卡](#2配置虚拟网卡)
      - [2.1 虚拟网卡重命名](#21-虚拟网卡重命名)
      - [2.2 虚拟网卡 IPv4 配置更改](#22-虚拟网卡-ipv4-配置更改)
  - [安装并启动模拟器](#安装并启动模拟器)
- [MacOS 版本安装](#macos-版本安装)
  - [环境准备](#环境准备-1)
    - [1. 安装虚拟网卡](#1-安装虚拟网卡)
      - [方法一：通过 Homebrew 安装](#方法一通过-homebrew-安装)
      - [方法二：访问 Tunnelblick 官网下载安装包安装](#方法二访问-tunnelblick-官网下载安装包安装)
    - [2. 配置虚拟网卡](#2-配置虚拟网卡)
    - [3. 验证虚拟网卡](#3-验证虚拟网卡)
  - [安装并启动模拟器](#安装并启动模拟器-1)
- [Linux 版本安装](#linux-版本安装)
  - [环境准备](#环境准备-2)
  - [安装](#安装)
  - [启动](#启动)

## Windows 版本安装

:::tip
过程中执行安装包操作建议使用管理员权限运行。
:::

### 环境准备

模拟器通信依赖虚拟网卡，请开发者按照如下步骤进行安装和配置。

#### 1.安装虚拟网卡

下载并安装虚拟网卡 [Tap-Windows](https://upload-cdn.huami.com/zeppos/simulator/download/tap-windows-9.21.2.zip)，执行默认安装即可。

#### 2.配置虚拟网卡

##### 2.1 虚拟网卡重命名

打开「网络和共享中心 - 更改适配器设置」，将上一步骤安装的虚拟网卡（TAP-Windows Adapter）重命名为 `tun`。

![renametun2.png](/img/simulator/renametun2.png)

##### 2.2 虚拟网卡 IPv4 配置更改

右击打开 `tun` 的属性，选择修改 IPv4 属性。

![renametun.png](/img/simulator/renametun.png)

![tunchange.png](/img/simulator/tunchange.png)

修改为如下配置后，点击确定即可。

![tunchange2.png](/img/simulator/tunchange2.png)

### 安装并启动模拟器

下载 Windows 平台的模拟器安装包，[点击跳转下载](./download.md)。

安装完成后双击模拟器图标即可启动模拟器。

![simulator_icon.jpg](/img/simulator/simulator_icon.jpg)

## MacOS 版本安装

### 环境准备

模拟器通信依赖虚拟网卡，请开发者按照如下步骤进行安装和配置。

:::info
要求 macOS 版本在 10.12 Sierra 及以上。
:::

#### 1. 安装虚拟网卡

Tunnelblick 是一款 macOS 下的开源 VPN 软件，通过它来安装 `tun/tap` 系统扩展较为方便。

提供两种安装 Tunnelblick 虚拟网卡的方式。

##### 方法一：通过 [Homebrew](https://brew.sh/) 安装

在终端命令行执行如下命令即可。

```sh
brew install --cask tunnelblick
```

##### 方法二：访问 Tunnelblick 官网下载安装包安装

[官方下载地址](https://tunnelblick.net/downloads.html)

:::caution
安装或使用过程中遇到被 macOS 系统阻止的情况，可以在「系统偏好设置」 — 「安全性与隐私中」 — 「通用」界面下设置允许。

如果未看到提示，请尝试再次安装。
:::

#### 2. 配置虚拟网卡

:::caution
如果使用的是搭载 Apple 芯片的 Mac，在执行此步骤之前需要 [Apple Silicon 机型开启系统扩展](../../faq/apple-silicon.md)。

如何确定 Mac 是否搭载 Apple 芯片？

1. 点击桌面左上角 Apple 图标
2. 点击「关于本机」
3. 在「概览」Tab 浏览处理器信息，如果显示 Apple 则为搭载 Apple 芯片的 Mac
:::

运行 Tunnelblick，在界面中找到 `tun/tap` 安装选项，操作路径「工具集」=> 「安装 tun 和 tap 系统扩展」。

![tun.png](/img/simulator/tun.png)

#### 3. 验证虚拟网卡

在终端命令行执行以下命令。

```sh
ls /dev
```

查看结果列表里是否出现 `tap0` - `tap15`，如果出现，则说明安装成功。

:::tip
如果安装失败，请仔细检查上述步骤，可以尝试如下方法

重新执行 [步骤 2 配置虚拟网卡](#2-配置虚拟网卡) ，如果显示已安装 `tun/tap` 系统扩展 ，则先卸载后再重新安装，安装完成后重新启动操作系统
:::

### 安装并启动模拟器

下载 macOS 平台的模拟器安装包，[点击跳转下载](./download.md)。

:::caution
如果遇到系统阻止的情况，请按上文 [安装虚拟网卡](#1-安装虚拟网卡) 中提示，在「系统偏好设置」 — 「安全性与隐私中」 — 「通用」界面下设置允许
:::

安装完成后在终端执行如下命令，给模拟器启动脚本添加可执行权限。

```sh
cd /Applications/simulator.app/Contents/Resources/firmware && chmod +x ./start_qemu.sh
```

重新开启一个终端，运行如下命令，启动模拟器。

```sh
cd /Applications/simulator.app/Contents/MacOS && sudo -s ./simulator
```

输入密码后回车确定，控制栏出现模拟器图标，模拟器启动成功。

:::info

- 点击模拟器的 simulator 按钮，尝试打开手表模拟器，如果点击没有反应，建议查看系统偏好设置中的「安全性与隐私」是否有提示
- 如果终端需要输入密码，输入密码即可
- 退出模拟器，在终端按 control + c 或者右击控制栏图标退出
:::

## Linux 版本安装

### 环境准备

推荐使用 `Ubuntu 20.04+` 或者 `Debian 11+` 来运行模拟器。

### 安装

下载 [Linux 平台的模拟器安装包](download.md)，点击跳转下载，并安装。

在启动模拟器之前需要获取管理员权限。`$` 是普通权限， `#` 是管理员权限。

或者执行：

```bash
sudo chmod -R 777 /dir
```

- `-R` 是指级联应用到目录里的所有子目录和文件
- `777` 是所有用户都拥有最高权限
- `/dir` 是目标文件夹，这里可以是模拟器安装目录，一般为 `/opt/simulator`

如果你的安装目录在 `/opt` 接下来可以在终端执行，如果不是，需要你在自己的安装目录执行，来安装环境。

```sh
cd /opt/simulator/resources/firmware/ && sudo ./setup_for_linux.sh
```

### 启动

执行命令启动。

```sh
cd /opt/simulator/ && ./simulator
```
