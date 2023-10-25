---
title: Apple Silicon 机型开启系统扩展
---

## 介绍

在搭载 Apple 芯片的 Mac 上扩展第三方内核需要需要将安全启动配置为「降低安全性」。

## 操作流程

### 1. 进入 macOS Recovery

图片截取自 [Apple 官网 - Mac 的启动组合键](https://support.apple.com/zh-cn/HT201255)。

按照图片上步骤进行操作：

![CLI Bridge](/img/docs/guides/faq/apple-silicon/recovery_cn.jpg)

随后点击「选项」，可能会要求登录账户，完成登录后，进入 macOS Recovery。

### 2. 允许内核扩展

1. 点击菜单栏上「实用工具」
2. 进入「启动安全性实用工具」
3. 点击「安全策略」
4. 选择「降低安全性」，再勾选「允许用户管理来自被认可开发者的内核扩展」
5. 点击「好」

:::tip
过程中需要输入密码的步骤根据提示输入密码确认即可
:::

至此就完成了系统扩展配置，设置完成后，点击菜单栏 「启动磁盘」=> 「关机」。

重新开机即可生效此配置。

更多信息请参考 [Apple 官方 - macOS 中的系统和内核扩展](https://support.apple.com/zh-cn/guide/deployment/depa5fb8376f/web)。
