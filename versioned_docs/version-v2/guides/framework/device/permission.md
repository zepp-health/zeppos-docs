---
title: API Permission Control
sidebar_label: API Permission Control
---

## Introduction

Zepp OS always puts the protection of user information and private data in the first place while maintaining an open attitude.

Zepp OS 2.0 introduces the API permission control function. If the Mini Program uses some APIs that require authorization, a dialog box will pop up when the user installs the Mini Program to request the user's consent, and the Mini Program will be installed successfully only after the user agrees.

:::caution
The production version of the firmware does not include the dynamic privileges section that requires user authorization at this time.
:::

## How to use the Authorization Required API

All APIs that require authorization are documented with the required permissions, e.g. [getProfile](../../../reference/device-app-api/newAPI/user/getProfile.mdx)：

![getProfile](/img/docs/guides/framework/getProfile.jpg)

The diagram is marked with the permission code `data:user.info`.

Run the following code snippet in the Mini Program.

```js title="page.js"
import { getProfile } from '@zos/user'

Page({
  build() {
    const { age } = getProfile()
    console.log(age)
  }
})
```

You will get the error as shown below, indicating that the relevant authorization has not been obtained and giving the permission code of the API that needs to be authorized.

![permission_error](/img/docs/guides/framework/permission_error.jpg)

You need to add the corresponding permissions code `data:user.info` to the `permissions` permissions array in [Mini Program Configuration app.json](../../../reference/app-json.mdx).

```json title="app.json"
{
  "permissions": ["data:user.info"]
}
```

After modifying the configuration of `app.json`, the permission request is completed at the same time.
