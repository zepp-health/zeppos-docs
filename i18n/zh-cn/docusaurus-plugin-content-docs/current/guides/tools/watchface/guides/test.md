---
title: 表盘测试
sidebar_label: 表盘测试
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# 表盘测试

## 准备工作

1. 开启 Developer Bridge 模式，版本要求及开启步骤见 [Developer Bridge模式](guides/faq/developer-bridge-mode.md)
   
2. 表盘工具、模拟器、Zepp APP 内登录**相同账号**

3. 表盘工具内当前表盘支持的设备、模拟器选择的设备、Zepp APP 绑定的设备**相同**

## 进行测试

### 模拟器测试

打开[模拟器](guides/tools/simulator/index.md)，点击左上角“Simulator”按钮打开手表模拟器窗口，点击顶部“Bridge”按钮开启 Developer Bridge 模式

![bridgeSimulator.png](/img/docs/guides/tools/watchface/bridge_simulator.png)

在表盘工具中选择一个制作好的表盘，点击右上角“Bridge”按钮，会弹出 Bridge 界面

![bridgeToolBtn.png](/img/zh-cn/docs/watchface/lesson/bridge_tool_btn.png)

点击”连接”按钮，状态会变为“已连接”，即模拟器与表盘工具连接成功。选择要执行的“动作”，比如“安装表盘”，点击“执行”按钮，等待表盘安装至模拟器

![bridgeSimulatorConnect.png](/img/zh-cn/docs/watchface/lesson/bridge_simulator_connect.png)
![bridgeSimulatorConnectSuccess.png](/img/zh-cn/docs/watchface/lesson/bridge_simulator_connect_success.png)

安装完成后，即可在模拟器上看到自己创建的表盘

![simulatorRun.png](/img/docs/guides/tools/watchface/simulator_run.png)

在模拟器内，可参考[Debugger](../../../tools/simulator/index.md#sensors)进行心率、电量等参数的配置

### 设备测试

打开 Zepp APP 的开发者模式，点击右上角 + 按钮展开折叠菜单，点击“Bridge”即可开启 Developer Bridge 模式

<img src={useBaseUrl('/img/docs/guides/faq/bridge/zepp-zh.gif')} width="30%" />

在表盘工具中选择一个制作好的表盘，点击右上角“Bridge”按钮，会弹出 Bridge 界面

![bridgeToolBtn.png](/img/zh-cn/docs/watchface/lesson/bridge_tool_btn.png)

点击”连接”按钮，状态会变为“已连接”，即 APP 与表盘工具连接成功。选择要执行的“动作”，比如“安装表盘”，点击“执行”按钮，等待表盘传输至 APP

![bridgeAppConnect.png](/img/zh-cn/docs/watchface/lesson/bridge_app_connect.png)
![bridgeAppConnectSuccess.png](/img/zh-cn/docs/watchface/lesson/bridge_app_connect_success.png)

安装完成后，即可在手表上看到自己创建的表盘

<img src="/img/zh-cn/docs/watchface/lesson/app_install_success.png" width="30%" title="appInstallSuccess"/>
<img src="/img/docs/guides/tools/watchface/watch_install_success.png" width="40%" title="watchInstallSucess"/>


## 注意事项

1. 如模拟器或 APP 连接失败，或无设备、模拟器可供连接，请参考 [Developer Bridge模式](guides/faq/developer-bridge-mode.md) 配置

2. 更多模拟器相关可参考[模拟器](guides/tools/simulator/index.md)
