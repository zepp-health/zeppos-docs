---
title: Windows 终端 Zeus Preview 二维码显示异常
---

## 问题描述

在 Windows 终端执行 zeus preview 命令，二维码无法扫码安装

![win cli](/img/docs/guides/faq/win-cli/1.png)

## 解决步骤

### 1. 搜索 `intl.cpl` 打开控制面板项

![win cli](/img/docs/guides/faq/win-cli/2.png)

### 2. 进入控制面板项，点击管理 Tab，点击更改系统区域设置

![win cli](/img/docs/guides/faq/win-cli/3.png)

### 3. 勾选使用 Unicode UTF-8 提供全球语言支持，点击确认

![win cli](/img/docs/guides/faq/win-cli/4.png)

### 4. 重新启动，再次运行 zeus preview 即可查看二维码
