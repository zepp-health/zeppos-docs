---
title: 模拟器使用说明
sidebar_label: 使用说明
---

## 介绍

Zepp OS 模拟器可以帮助开发者模拟小程序的运行表现。同时可以查看小程序的日志，方便开发者调试，极大提高开发效率。

![desk.png](/img/simulator/workspace.jpg)

以 [TodoList](../../../samples/app/toDoList.md) 小程序在模拟器上的运行效果为例。

共有以下窗口：

- 设备端模拟器
- 模拟器主界面（选中了设备端日志页面）
- 设置应用模拟器和日志
- 伴生服务的日志

## 使用说明

### 顶部功能介绍

![desk.png](/img/simulator/interface.png)

1. 用户头像，点击即可登录
2. 「设备模拟器」开启按钮
3. 「设置应用模拟器」开启按钮
4. Bridge 模式开启按钮
5. 截图
6. 「设备模拟器」机型选择框
7. 「设备模拟器」下载管理

### 安装并开启「设备模拟器」

Zepp OS 模拟器没有内置「设备模拟器」，需要在「设备模拟器」下载管理中进行下载。

![download.jpg](/img/simulator/download.jpg)

:::info
开发者可根据需要下载对应的机型，无需全部下载
:::

完成下载之后，「设备模拟器」机型选择框中就出现了可用的机型，选中对应机型后，点击「设备模拟器」开启按钮，就可以成功弹出「设备模拟器」。

![device_simulator.jpg](/img/simulator/device_simulator.jpg)

成功开启「设备模拟器」后，[Zeus CLI `dev` 编译预览](../cli/index.md#zeus-dev-编译预览模拟器) 命令就可以与模拟器成功连接，自动预览项目。

:::caution
如果点击「设备模拟器」开启按钮后没有成功弹出「设备模拟器」，请仔细检查安装过程是否有遗漏，参考 [模拟器 - 安装与启动](./setup.md)

通常来说在 Windows 和 MacOS 平台下出现此现象是由于虚拟网卡没有成功安装与正确配置
:::

#### 键盘模拟真机实体按键

当窗口聚焦「设备模拟器」时，键盘上的按键可以模拟真机实体按键。

手表键名|键盘按键|说明
---|---|---
`HOME`|`Home`，Mac 上使用 `fn` + `←` 组合按键|进入应用列表/回到表盘
`SHORTCUT`|`End`，Mac 上使用 `fn` + `→` 组合按键|-
`SELECT`|`enter` 回车键|-
`BACK`|`delete` 删除键|-
`UP`|`↑`|-
`DOWN`|`↓`|-

数字表冠旋转使用鼠标滚轮来模拟。

### Apps

小程序开发历史，管理已连接过的小程序

![applist.png](/img/simulator/1.png)

### Sensors

传感器设置，可以 mock 传感器的数值

![applist.png](/img/simulator/2.png)

### Display

自定义设置

![applist.png](/img/simulator/3.png)

### User

模拟用户设置

![applist.png](/img/simulator/4.png)

### Console

可以查看设备应用的日志，并提供了筛选功能

![applist.png](/img/simulator/5.png)
