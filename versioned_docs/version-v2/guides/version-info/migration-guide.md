---
title: Migration from version 1.0
sidebar_label: Migration from version 1.0
---

## Introduction

This document is an migration guide for the Mini Program API from Zepp OS 1.0 to Zepp OS 2.0.

:::tip
Before reading this document, it is recommended to finish reading [2.0 API Introduction](new-api.md). Especially the section on API_LEVEL compatibility!
:::

:::info
To facilitate quick migration for developers, the Zepp OS team provides command line tools to improve migration efficiency [`@zeppos/zmt`](#MigrationTools).
:::

## Benefits of the Migration 2.0 API

- Access to the latest open capabilities of Zepp OS
- The Zepp OS team guarantees API compatibility through `API_LEVEL` and ensures backward compatibility of `API_LEVEL` in subsequent version upgrades
- Developers do not need to care about the firmware version number and Zepp OS version number, they only need to make compatibility adaptations to `API_LEVEL`, which greatly simplifies the workload of compatibility adaptations

## Start migration

### Scope of influence

First, let's clarify the scope of the Zepp OS 2.0 JS API upgrade.

The upgraded Mini Program API only applies to Device App, i.e. the development mode for Settings App and Side Service is the same as in version 1.0 without modification.

The development language of the device application is JavaScript following the ES6 standard, and only code related to the ability to use the Zepp OS system needs to be changed.

As an example, in 1.0, Zepp OS system capabilities are exposed to the public through global variables such as `hmUI`, `hmApp`, etc. Anywhere system capabilities are used, changes need to be made.

### Migration ideas

The capabilities of the 2.0 JS API are a superset of the 1.0 JS API. All of the capabilities of the 1.0 JS API can be found in the 2.0 JS API in a corresponding way. There are different ways to upgrade the 1.0 JS API for different types of 1.0 JS APIs, which are divided into several categories below and handled in different ways.

#### Case 1: substitution by reference (only for `hmUI` and `hmBle` modules)

The `hmUI` and `hmBle` modules, for now, just transform the reference method and replace the reference method in the file header.

An example

```js title="v1.0page.js"
Page({
  build() {
    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'HELLO ZEPPOS'
    })
  }
})
```

Just add a quote in the form of an ESM in the header.

```js title="v2.0page.js"
import * as hmUI from '@zos/ui'

Page({
  build() {
    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'HELLO ZEPPOS'
    })
  }
})
```

#### Case 2: Method name substitution

A part of the method function remains unchanged, only the method name is modified, after adding the relevant method reference statement, the calling method name and parameters can be modified.

| 1.0 API                           | 2.0 API                 | 2.0 API Module     |
| --------------------------------- | ----------------------- | ------------------ |
| `hmApp.gotoHome`                  | `home`                  | `@zos/router`      |
| `hmApp.goBack`                    | `back`                  | `@zos/router`      |
| `hmApp.exit`                      | `exit`                  | `@zos/router`      |
| `hmApp.alarmCancel`               | `clearLaunchAppTimeout` | `@zos/router`      |
| `hmFS.open_asset`                 | `openAssetsSync`        | `@zos/fs`          |
| `hmFS.open`                       | `openSync`              | `@zos/fs`          |
| `hmFS.close`                      | `closeSync`             | `@zos/fs`          |
| `hmFS.remove`                     | `rmSync`                | `@zos/fs`          |
| `hmFS.rename`                     | `renameSync`            | `@zos/fs`          |
| `hmFS.mkdir`                      | `mkdirSync`             | `@zos/fs`          |
| `hmApp.setScreenKeep`             | `setWakeUpRelaunch`     | `@zos/display`     |
| `hmSetting.setScreenAutoBright`   | `setAutoBrightness`     | `@zos/display`     |
| `hmSetting.getScreenAutoBright`   | `getAutoBrightness`     | `@zos/display`     |
| `hmSetting.setBrightness`         | `setBrightness`         | `@zos/display`     |
| `hmSetting.getBrightness`         | `getBrightness`         | `@zos/display`     |
| `hmSetting.setScreenOff`          | `setScreenOff`          | `@zos/display`     |
| `hmSetting.setBrightScreenCancel` | `resetPageBrightTime`   | `@zos/display`     |
| `hmSetting.getUserData`           | `getProfile`            | `@zos/user`        |
| `hmSetting.getDiskInfo`           | `getDiskInfo`           | `@zos/device`      |
| `hmSetting.getDeviceInfo`         | `getDeviceInfo`         | `@zos/device`      |
| `hmSetting.getLanguage`           | `getLanguage`           | `@zos/settings`    |
| `hmSetting.getDateFormat`         | `getDateFormat`         | `@zos/settings`    |
| `hmSetting.getMileageUnit`        | `getDistanceUnit`       | `@zos/settings`    |
| `hmSetting.getWeightUnit`         | `getWeightUnit`         | `@zos/settings`    |
| `hmSetting.getWeightTarget`       | `getWeightTarget`       | `@zos/settings`    |
| `hmSetting.getSleepTarget`        | `getSleepTarget`        | `@zos/settings`    |
| `hmApp.registerGestureEvent`      | `onGesture`             | `@zos/interaction` |
| `hmApp.unregisterGestureEvent`    | `offGesture`            | `@zos/interaction` |
| `hmApp.registerKeyEvent`          | `onKey`                 | `@zos/interaction` |
| `hmApp.unregisterKeyEvent`        | `offKey`                | `@zos/interaction` |
| `hmApp.registerSpinEvent`         | `onDigitalCrown`        | `@zos/interaction` |
| `hmApp.unregisterSpinEvent`       | `offDigitalCrown`       | `@zos/interaction` |
| `hmApp.getPackageInfo`            | `getPackageInfo`        | `@zos/app`         |
| `hmSetting.getScreenType`         | `getScene`              | `@zos/app`         |
| `hmApp.setLayerY`                 | `scrollTo`              | `@zos/page`        |
| `hmApp.getLayerY`                 | `getScrollTop`          | `@zos/page`        |
| `hmUI.getScrollCurrentPage`       | `getSwiperIndex`        | `@zos/page`        |

An example

```js title="v1.0page.js"
hmApp.setLayerY(100)
const result = hmSetting.getUserData()
hmApp.gotoHome()
```

The replacement can be done quickly by comparing the table above, as well as the 2.0 API documentation.

```js title="v2.0page.js"
import { scrollTo } from '@zos/page'
import { home } from '@zos/router'
import { getProfile } from '@zos/user'

scrollTo({
  y: 100
})
const result = getProfile()
home()
```

#### Case 3: API capability upgrade, need to pay attention to parameters when replacing

Some methods have been enhanced with new parameters and can be called equivalently based on the functionality of the 2.0 API.

| 1.0 API                 | 2.0 Enhanced Capabilities API | 2.0 API Module     |
| ----------------------- | ----------------------- | ------------------ |
| `hmApp.setBrightScreen` | `setPageBrightTime`     | `@zos/display`     |
| `hmApp.stat`            | `statSync`              | `@zos/fs`          |
| `hmApp.open_asset`      | `openAssetsSync`        | `@zos/fs`          |
| `hmApp.open`            | `openSync`              | `@zos/fs`          |
| `hmApp.close`           | `closeSync`             | `@zos/fs`          |
| `hmApp.read`            | `readSync`              | `@zos/fs`          |
| `hmApp.write`           | `writeSync`             | `@zos/fs`          |
| `hmUI.showToast`        | `showToast`             | `@zos/interaction` |
| `hmUI.createDialog`     | `createModal`           | `@zos/interaction` |
| `hmUI.scrollToPage`     | `swipeToIndex`          | `@zos/page`        |
| `hmUI.setScrollView`    | `setScrollMode`         | `@zos/page`        |
| `hmApp.startApp`        | `launchApp`             | `@zos/router`      |
| `hmApp.gotoPage`        | `push`                  | `@zos/router`      |
| `hmApp.reloadPage`      | `replace`               | `@zos/router`      |
| `hmApp.gotoHome`        | `home`                  | `@zos/router`      |
| `hmApp.alarmNew`        | `setLaunchAppTimeout`   | `@zos/router`      |

#### Case 4: Module constants

Similar to the method name transformation in case 2, some constants need to be replaced similarly.

| 1.0 Constants                     | 2.0 Constants            | 2.0 Module         |
| --------------------------------- | ------------------------ | ------------------ |
| `hmSetting.screen_type.APP`       | `SCENE_APP`              | `@zos/app`         |
| `hmSetting.screen_type.WATCHFACE` | `SCENE_WATCHFACE`        | `@zos/app`         |
| `hmSetting.screen_type.SETTINGS`  | `SCENE_SETTINGS`         | `@zos/app`         |
| `hmSetting.screen_type.AOD`       | `SCENE_AOD`              | `@zos/app`         |
| `hmFS.O_RDONLY`                   | `O_RDONLY`               | `@zos/fs`          |
| `hmFS.O_WRONLY`                   | `O_WRONLY`               | `@zos/fs`          |
| `hmFS.O_RDWR`                     | `O_RDWR`                 | `@zos/fs`          |
| `hmFS.O_APPEND`                   | `O_APPEND`               | `@zos/fs`          |
| `hmFS.O_CREAT`                    | `O_CREAT`                | `@zos/fs`          |
| `hmFS.O_EXCL`                     | `O_EXCL`                 | `@zos/fs`          |
| `hmFS.O_TRUNC`                    | `O_TRUNC`                | `@zos/fs`          |
| `hmApp.gesture.UP`                | `GESTURE_UP`             | `@zos/interaction` |
| `hmApp.gesture.DOWN`              | `GESTURE_DOWN`           | `@zos/interaction` |
| `hmApp.gesture.LEFT`              | `GESTURE_LEFT`           | `@zos/interaction` |
| `hmApp.gesture.RIGHT`             | `GESTURE_RIGHT`          | `@zos/interaction` |
| `hmApp.key.BACK`                  | `KEY_BACK`               | `@zos/interaction` |
| `hmApp.key.SELECT`                | `KEY_SELECT`             | `@zos/interaction` |
| `hmApp.key.HOME`                  | `KEY_HOME`               | `@zos/interaction` |
| `hmApp.key.UP`                    | `KEY_UP`                 | `@zos/interaction` |
| `hmApp.key.DOWN`                  | `KEY_DOWN`               | `@zos/interaction` |
| `hmApp.key.SHORTCUT`              | `KEY_SHORTCUT`           | `@zos/interaction` |
| `hmApp.action.CLICK`              | `KEY_EVENT_CLICK`        | `@zos/interaction` |
| `hmApp.action.LONG_PRESS`         | `KEY_EVENT_LONG_PRESS`   | `@zos/interaction` |
| `hmApp.action.DOUBLE_CLICK`       | `KEY_EVENT_DOUBLE_CLICK` | `@zos/interaction` |
| `hmApp.action.RELEASE`            | `KEY_EVENT_RELEASE`      | `@zos/interaction` |
| `hmApp.action.PRESS`              | `KEY_EVENT_PRESS`        | `@zos/interaction` |

An example

```js title="v1.0page.js"
const fd = hmFS.open('test_file.txt', hmFS.O_RDWR | hmFS.O_CREAT)
```

Quickly complete the replacement against the table above, and against the 2.0 API documentation.

```js title="v2.0page.js"
import { openSync, O_RDWR, O_CREAT } from '@zos/fs'

const fd = openSync({
  path: 'test.txt',
  flag: O_RDWR | O_CREAT
})
```

#### Case 5: Sensor Module

ZeppOS 2.0 sensor module is all `Class` type, the call method has changed significantly, eliminating the attribute access, all changed to method calls, here refer to the sensor documentation can be, a simple example.

```js title="v1.0page.js"
const battery = hmSensor.createSensor(hmSensor.id.BATTERY)

console.log(battery.current)
```

```js title="v2.0page.js"
import { Battery } from '@zos/sensor'

const battery = new Battery()
console.log(battery.getCurrent())
```

#### Case 6: `i18n` module

Direct Reference Replacement Example

```js title="v1.0page.js"
import { gettext } from 'i18n'

gettext('i18n_key')
```

```js title="v2.0page.js"
import { getText } from '@zos/i18n'

getText('i18n_key')
```

#### Case 7: Logging methods called from DeviceRuntimeCore

Direct Reference Replacement Example

```js title="v1.0page.js"
const logger = DeviceRuntimeCore.HmLogger.getLogger('app.js')

logger.log('app.js onCreate')
```

```js title="v2.0page.js"
import { log } from '@zos/utils'

const logger = log.getLogger('app.js')
logger.log('app.js onCreate')
```

#### Case 8: Globally used `px` and `assets` utility functions

In Zepp OS 2.0 these two methods need to be introduced from the `utils` module.

```js title="v1.0page.js"
px(480)

const assetsPathFunc = assets('img')
```

```js title="v2.0page.js"
import { px, assets } from '@zos/utils'

px(480)

const assetsPathFunc = assets('img')
```

#### Case 9: 1.0 timer timer module is deprecated and needs to be replaced with JS timer API

Refer to [setTimeout](../../reference/device-app-api/newAPI/global/setTimeout.mdx).

#### Case 10: `hmFS.seek` is used

To facilitate developers' file system operations, the 2.0 API greatly enhances the ease of use of file system-related APIs.

It is recommended that the file logic be rewritten using the new API.

- [`readFileSync`](../../reference/device-app-api/newAPI/fs/readFileSync.mdx)
- [`writeFileSync`](../../reference/device-app-api/newAPI/fs/writeFileSync.mdx)
- [`readSync`](../../reference/device-app-api/newAPI/fs/readSync.mdx)
- [`writeSync`](../../reference/device-app-api/newAPI/fs/writeSync.mdx)

Or use the capabilities of [`LocalStorage`](../../reference/device-app-api/newAPI/storage/localStorage.mdx) directly to implement persistent key-value pair storage, supporting standard JSON objects.

#### Case 11: Message.js Bluetooth communication capability is used

In the Zepp OS 1.0 sample code, we provide the ability to communicate with Bluetooth via `/shared/message.js`.

In Zepp OS 2.0, the device app needs to update `/shared/message.js` and the companion service still uses `/shared/message-side.js`.

Please refer to [Sample - ToDoList](../../samples/app/toDoList.md) for details.

## Migration Tools

A command line migration tool [`@zeppos/zmt`](https://www.npmjs.com/package/@zeppos/zmt) is provided to facilitate the migration efforts of developers.

Most of the above replacement work can be done automatically, and some of the logic that needs to be handled manually by the developer will be prompted on the command line.

```sh
npm i @zeppos/zmt -g

or

yarn global add @zeppos/zmt
```

Execute the migration tool script.

```sh
zmt -p /path/to/1.0 -o /path/to/2.0
```

For more information, please refer to [npm - @zeppos/zmt](https://www.npmjs.com/package/@zeppos/zmt).
