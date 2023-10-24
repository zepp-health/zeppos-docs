---
title: 从 1.0 版本升级
sidebar_label: 从 1.0 版本升级
---

## 介绍

本文档是小程序 API 从 Zepp OS 1.0 至 Zepp OS 2.0 的升级指南。

:::tip
在阅读本文档前，建议先完成 [2.0 API 介绍](new-api.md) 的阅读。尤其是 `API_LEVEL` 兼容性部分！
:::

:::info
为了方便开发者进行快速迁移，Zepp OS 团队提供了提高迁移效率的命令行工具 [`@zeppos/zmt`](#迁移工具)。
:::

## 升级 2.0 API 的优势

- 可以用到 Zepp OS 最新的开放能力
- Zepp OS 团队通过 `API_LEVEL` 对 API 兼容性进行保证，在后续版本升级中保证 `API_LEVEL` 的向下兼容性
- 开发者无需关心固件版本号、Zepp OS 版本号，只需要对 `API_LEVEL` 做出兼容性适配，极大地简化了兼容性适配工作量

## 开始迁移

### 影响范围

首先明确升级 Zepp OS 2.0 JS API 所影响的的范围。

此次升级的小程序 API 仅适用于设备应用，即设置应用和伴生服务的开发模式与 1.0 版本相同，无需修改。

设备应用的开发语言是遵循 ES6 标准的 JavaScript，只有需要改动使用 Zepp OS 系统能力相关的代码。

举个例子，在 1.0 中，Zepp OS 系统能力通过全局变量如 `hmUI`、`hmApp` 等对外暴露，凡是使用了系统能力的地方，均需要进行改动。

### 迁移思路

2.0 JS API 的能力是 1.0 JS API 的超集，所有的 1.0 JS API 的能力都可以在 2.0 JS API 中找到对应的方式，针对不同类型的 1.0 JS API，有不同的升级方式，下文将分为几类，分别用不同的方式进行处理。

#### 情况 1：引用方式替换（仅适用于 `hmUI` 和 `hmBle` 模块）

`hmUI` 和 `hmBle` 模块，目前只是对引用方式进行了变换，在文件头部替换引用方式即可。

举个例子：

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

在头部加入一句 ESM 形式的引用即可。

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

#### 情况 2：方法名称替换

一部分方法功能保持不变，仅仅是方法名称的修改，添加相关方法引用语句之后，修改调用方法名和参数即可。

| 1.0 API                           | 2.0 API                 | 2.0 API 所在模块   |
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

举个例子：

```js title="v1.0page.js"
hmApp.setLayerY(100)
const result = hmSetting.getUserData()
hmApp.gotoHome()
```

对照上文表格，以及 2.0 API 文档，很快就可以完成替换。

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

#### 情况 3:API 能力升级，替换时需要注意参数

一些方法的能力进行增强，加入了新的参数，根据 2.0 API 的功能进行等价调用即可。

| 1.0 API                 | 2.0 更强能力 API        | 2.0 API 所在模块   |
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

#### 情况 4：模块常量

类似情况 2 中的方法名称变换，部分常量也需要进行相似替换。

| 1.0 常量                          | 2.0 常量                 | 2.0 常量所在模块   |
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

举个例子：

```js title="v1.0page.js"
const fd = hmFS.open('test_file.txt', hmFS.O_RDWR | hmFS.O_CREAT)
```

对照上文表格，以及 2.0 API 文档，快速完成替换。

```js title="v2.0page.js"
import { openSync, O_RDWR, O_CREAT } from '@zos/fs'

const fd = openSync({
  path: 'test.txt',
  flag: O_RDWR | O_CREAT
})
```

#### 情况 5：传感器模块

ZeppOS 2.0 的传感器模块全部是 `Class` 类型，调用方式发生了较大变化，去除了属性访问，全部改为方法调用，此处参考传感器的文档即可，简单举个例子：

```js title="v1.0page.js"
const battery = hmSensor.createSensor(hmSensor.id.BATTERY)

console.log(battery.current)
```

```js title="v2.0page.js"
import { Battery } from '@zos/sensor'

const battery = new Battery()
console.log(battery.getCurrent())
```

#### 情况 6: `i18n` 模块

直接参考替换示例：

```js title="v1.0page.js"
import { gettext } from 'i18n'

gettext('i18n_key')
```

```js title="v2.0page.js"
import { getText } from '@zos/i18n'

getText('i18n_key')
```

#### 情况 7：从 DeviceRuntimeCore 上调用的日志方法

直接参考替换示例：

```js title="v1.0page.js"
const logger = DeviceRuntimeCore.HmLogger.getLogger('app.js')

logger.log('app.js onCreate')
```

```js title="v2.0page.js"
import { log } from '@zos/utils'

const logger = log.getLogger('app.js')
logger.log('app.js onCreate')
```

#### 情况 8: 全局使用的 `px` 和 `assets` 工具函数

在 Zepp OS 2.0 中这两个方法需要从 `utils` 模块引入。

```js title="v1.0page.js"
px(480)

const assetsPathFunc = assets('img')
```

```js title="v2.0page.js"
import { px, assets } from '@zos/utils'

px(480)

const assetsPathFunc = assets('img')
```

#### 情况 9：1.0 定时器 timer 模块废除，需要替换为 JS 定时器 API

参考 [setTimeout](../../reference/device-app-api/newAPI/global/setTimeout.mdx)。

#### 情况 10：使用了 `hmFS.seek`

为了方便开发者文件系统操作，2.0 API 极大增强了文件系统相关 API 易用性。

建议使用新 API 对文件逻辑进行重写。

- [`readFileSync`](../../reference/device-app-api/newAPI/fs/readFileSync.mdx)
- [`writeFileSync`](../../reference/device-app-api/newAPI/fs/writeFileSync.mdx)
- [`readSync`](../../reference/device-app-api/newAPI/fs/readSync.mdx)
- [`writeSync`](../../reference/device-app-api/newAPI/fs/writeSync.mdx)

或者直接使用 [`LocalStorage`](../../reference/device-app-api/newAPI/storage/localStorage.mdx) 的能力，来实现持久化键值对存储，支持标准 JSON 对象。

#### 情况 11：使用了 message.js 蓝牙通信能力

在 Zepp OS 1.0 的示例代码中，我们通过 `/shared/message.js` 提供了蓝牙通信的能力。

在 Zepp OS 2.0 中，设备应用需要将 `/shared/message.js` 进行更新，伴生服务仍使用 `/shared/message-side.js`。

具体请参考 [Sample - ToDoList](../../samples/app/toDoList.md)。

## 迁移工具

为了方便开发者进行迁移工作，提供了一个命令行迁移工具 [`@zeppos/zmt`](https://www.npmjs.com/package/@zeppos/zmt)。

可以自动地完成以上大部分替换工作，部分需要开发者手动处理的逻辑会在命令行给出提示。

```sh
npm i @zeppos/zmt -g

or

yarn global add @zeppos/zmt
```

执行迁移工具脚本

```sh
zmt -p /path/to/1.0 -o /path/to/2.0
```

更多信息请参考 [npm - @zeppos/zmt](https://www.npmjs.com/package/@zeppos/zmt)。
