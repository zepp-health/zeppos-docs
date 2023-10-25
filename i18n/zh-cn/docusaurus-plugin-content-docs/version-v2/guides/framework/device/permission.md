---
title: API 权限控制
sidebar_label: API 权限控制
---

## 介绍

Zepp OS 在保持开放态度的同时，始终将对用户信息、隐私数据的保护放在第一位。

Zepp OS 2.0 引入了 API 权限控制功能，如果小程序使用了部分需要授权 API，用户安装小程序时会弹出对话框请求用户同意，在用户同意后小程序才能安装成功。

## 如何使用需要授权 API

所有需要授权 API 都会在文档中注明所需权限，如 [getProfile](../../../reference/device-app-api/newAPI/user/getProfile.mdx)：

![getProfile](/img/docs/guides/framework/getProfile.jpg)

图中标注了权限代码 `data:user.info`。

在小程序中运行如下代码片段：

```js title="page.js"
import { getProfile } from '@zos/user'

Page({
  build() {
    const { age } = getProfile()
    console.log(age)
  }
})
```

会得到如下图的报错，提示没有获取相关授权，并且给出了需要授权 API 的权限码。

![permission_error](/img/docs/guides/framework/permission_error.jpg)

需要在 [小程序配置 app.json](../../../reference/app-json.mdx) 中的 `permissions` 权限数组中加入对应的权限代码 `data:user.info`。

```json title="app.json"
{
  "permissions": ["data:user.info"]
}
```

完成 `app.json` 的配置即完成了权限的申请。
