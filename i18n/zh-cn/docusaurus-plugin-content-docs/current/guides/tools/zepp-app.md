---
title: Zepp App 开发者模式
sidebar_label: Zepp App 开发者模式
---

## 介绍

Zepp App 中的开发者模式，主要有如下功能：

- 扫一扫小程序或表盘预览二维码，在真机设备上预览小程序或表盘
- 查看真机日志
- 使用 Bridge 模式建立连接

## 开发者模式开启方式

- 开启
  - 前往「我的」 => 「设置」 => 「关于」，连续点击 Zepp 图标 7 次直至弹窗弹出
- 关闭
  - 前往「我的」 => 「设置」，取消开发者模式选项

![devInfo.png](/img/zh-cn/docs/watchface/lesson/dev_info.png)

## 「扫一扫」真机预览

「Zeus CLI」 `preview` 命令编译预览以及「表盘制作工具」的安装等功能都会生成二维码，使用「扫一扫」功能，扫描二维码即可安装至设备。

![installAppScanCode.png](/img/zh-cn/docs/watchface/lesson/install_app_scan_code.jpg)

## 查看真机日志

点击小程序图标，即可进入日志界面，可以查看到 「设备应用」和「伴生服务」的日志界面。

点击右下角按钮开始采集日志，随后在真机上运行小程序，就可以采集到相关日志。

![installAppScanCode.png](/img/docs/guides/tools/real_machine_log.jpg)

:::caution
「设置应用」真机日志暂时无法查看。
:::

## 开启 Bridge 模式

点击 Bridge 按钮开启 Develop Bridge Mode。

关于 Develop Bridge 模式请参考 [Developer Bridge 模式](../faq/developer-bridge-mode.md)。
