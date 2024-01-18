---
title: 2.0 API Introduction
sidebar_label: 2.0 API Introduction
---

## Introduction

In the year that Zepp OS 1.0 Mini Program API has been serving developers around the world, we've taken a lot of suggestions from the community and compiled a list of the main problems with the 1.0 API.

To solve these problems and create a better development experience, the Zepp OS team refactored the Mini Program API and launched the new version 2.0.

![api_feature](/img/docs/guides/version_info/api_feature.jpg)

:::caution
Mini Program developed using the Zepp OS 2.0 API will not run on devices with Zepp OS version 1.0.

To develop a Mini Program for Zepp OS version 1.0 devices, please switch to v1.0 by clicking the version switch button in the upper right corner of the document.

- To check the Zepp OS version on your device, please refer to [List of Devices with Zepp OS](../../reference/related-resources/device-list.mdx)
- Please refer to [API_LEVEL (Compatibility)](../framework/device/compatibility.md) for more information about compatibility
:::

## Get Started Quickly

### Module division

The Zepp OS 2.0 API provides a more granular view of the system's open capabilities, breaking down the API into more than a dozen modules.

- UI
- Frame Interface
- Sensor
- Mini Program related
- Page related
- Router
- Interaction
- System Settings
- Display
- Device
- User
- File System
- Storage
- I18n
- Utils
- BLE

Developers can quickly find the APIs they need in the relevant modules as needed.

### Introduction via ESM

We design the API in line with the ECMAScript standard, except for the Frame Interface module, all use the ECMAScript modules way to introduce.

Take [push](../../reference/device-app-api/newAPI/router/push.mdx) for example

```js
import { push } from '@zos/router'

push({
  url: 'page/index',
  params: 'type=1'
})
```

### Unified naming rules and more flexible calling methods

Zepp OS 2.0 API naming is consistent to the greatest extent possible, follows camel naming rules, and has good semantics.

The parameter passing has also been standardized, with most methods accepting an object of type `object` as a parameter.

Take [scrollTo](../../reference/device-app-api/newAPI/page/scrollTo.mdx) for example.

```js
import { scrollTo } from '@zos/page'

scrollTo({
  y: 200
})
```

Some APIs support simplified calls, which are marked in the API documentation under the type heading, `scrollTo` supports the following simplified call.

![scrollTo](/img/docs/guides/version_info/scrollTo.jpg)

Call based on the type signature of the simplified call method.

```js
import { scrollTo } from '@zos/page'

scrollTo(200)
```

### New series of easy-to-use APIs

Zepp OS 1.0 Mini Programs implement some technical scenarios that are more cumbersome, such as file reading and writing, and often require a larger amount of code.

Compare the two pieces of code.

```js title="1.0 API"
const fileName = 'TEST.txt'

const [fsStat, err] = hmFS.stat(fileName)
if (err === 0) {
  const fileContentUnit = new Uint8Array(fsStat.size)
  const file = hmFS.open(fileName, hmFS.O_RDWR)
  hmFS.seek(file, 0, hmFS.SEEK_SET)
  hmFS.read(file, fileContentUnit.buffer, 0, fileContentUnit.length)
  hmFS.close(file)

  const content = JSON.parse(String.fromCharCode.apply(null, fileContentUnit))
}
```

```js title="2.0 API"
const fileName = 'TEST.txt'
const result = readFileSync({
  path: fileName,
  options: {
    encoding: 'utf8'
  }
})

if (result) {
  const content = JSON.parse(result)
}
```

2.0 The [`readFileSync`](../../reference/device-app-api/newAPI/fs/readFileSync.mdx) API is significantly less code intensive, more readable and maintainable, and can be implemented with [`LocalStorage`](../../reference/device-app-api/newAPI/storage/localStorage.mdx) if the purpose is to implement a persistent key-value pair storage.

```js title="page.js"
import { localStorage } from '@zos/storage'

localStorage.setItem('test', 'test value')
const val = localStorage.getItem('test')
const defaultValue = localStorage.getItem('none_key', 'defaultValue')
```

In addition to file reading and writing scenarios, APIs such as [EventBus](../../reference/device-app-api/newAPI/utils/EventBus.mdx), a tool class for managing event publishing subscriptions, and a more powerful logging tool [log](../../reference/device-app-api/newAPI/utils/log.mdx) are provided.

### New documentation and type declaration files

The new 2.0 API is accompanied by a new API documentation with simple layout, clear types, complete code examples and diagrams, and a significantly improved documentation experience.

We also provide a very complete type declaration file, which is distributed as an npm package, with very friendly and complete hints in the editor.

```sh
npm i @zeppos/device-types

or

yarn add @zeppos/device-types
```

![declaration_demo](/img/docs/guides/version_info/declaration.gif)

### Migration from 1.0

In Zepp OS 2.0, we introduced the concept of `API_LEVEL`, a complete JS API compatibility scheme, refer to [API_LEVEL #Compatibility Assurance](../framework/device/compatibility.md#compatibility-guarantee).

Please refer to [Upgrade from version 1.0](migration-guide.md) for detailed migration steps.
