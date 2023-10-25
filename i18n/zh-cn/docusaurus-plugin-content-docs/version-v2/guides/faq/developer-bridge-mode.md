---
title: Developer Bridge模式
---

为了便于开发者高效地使用 Zepp OS 开发工具，我们骄傲的宣布 Developer Bridge 功能。
通过该功能可以方便地将开发工具（Zepp CLI / 表盘制作工具）与运行环境（Zepp OS Simulator / Zepp APP）建立连接，免去了繁杂参数和网络的配置。

> 使用 Developer Bridge 您需要了解有关 Zepp OS 工具使用上的一些基础知识，同时需保证您所使用的工具版本满足最低的版本要求。<br/>
> Zepp CLI: `>= 1.1.0` <br/>
> Zepp Simulator: `>= 1.0.8` <br/>
> Zepp APP：`>= 6.9.0`

## 整体结构
Developer Bridge 由三部分组成（开发工具、运行环境、Developer Bridge服务），Developer Bridge服务作为桥梁将开发工具与运行环境建立连接，实现端与端的通信。
![Developer Bridge Main](/img/docs/guides/faq/bridge/main.png)

## 使用步骤
1. 开启运行环境 Developer Bridge 模式
2. 开启开发工具 Developer Bridge 模式
3. 开发工具与运行环境建立链接
4. 执行相关指令

## Developer Bridge 模式开启方式

### Zepp APP
打开 Zepp APP 的开发者模式，点击右上角 + 按钮展开折叠菜单，点击 Bridge 菜单即可开启 Developer Bridge 模式。

![App Bridge](/img/docs/guides/faq/bridge/zepp-zh.gif)

### Zepp OS Simulator
首先，需要登录Zepp账号。点击左上角头像打开登录弹窗，输入您的账号密码，登录完成后左上角会展示您的头像图片。

![Simulator Login](/img/docs/guides/faq/bridge/simulator-login.png)

登录完成后即可用使用 Developer Bridge 功能，点击顶栏Bridge按钮，按钮点亮表示 Developer Bridge 模式开启成功。

![Simulator Bridge](/img/docs/guides/faq/bridge/simulator-bridge.png)

### Zepp CLI
打开终端，进入项目根目录，在命令行中输入zeus bridge命令进入 Developer Bridge 模式。
> 注意
> 使用zeus bridge之前需通过zeus login命令登录与运行环境相同的Zepp账号。

![CLI Bridge](/img/docs/guides/faq/bridge/cli-bridge.png)

输入connect命令，建立与运行环境设备的连接。连接成功后终端会显示成功提示。

![CLI Bridge](/img/docs/guides/faq/bridge/cli-bridge-connect.png)

与运行环境建立连接后，输入install命令，可构建当前目录的项目，并安装至已连接的运行环境。

![CLI Bridge Install](/img/docs/guides/faq/bridge/cli-bridge-install.png)

输入uninstall命令，可从运行环境中卸载当前目录的应用。

![CLI Bridge Uninstall](/img/docs/guides/faq/bridge/cli-bridge-uninstall.png)

### 表盘制作工具

访问[表盘制作工具](https://watchface.zepp.com/)，进入表盘编辑页，点击”Bridge“按钮，会弹出 Bridge 界面

![Bridge Button](/img/docs/guides/faq/bridge/wf-bridge-zh-btn.png)

Bridge 界面会显示当前可连接的设备或者模拟器

![Bridge Can Connect Devices](/img/docs/guides/faq/bridge/wf-bridge-can-connect-devices-zh.png)

点击”连接”按钮，状态会变为“已连接”

![Bridge-connected](/img/docs/guides/faq/bridge/wf-bridge-connected-zh.png)

连接上设备或者模拟器后，选择要执行的“动作”，比如“安装表盘”，点击“执行”按钮即可将当前正在制作的表盘安装到手表或者模拟器上
