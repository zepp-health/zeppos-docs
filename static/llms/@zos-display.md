# @zos/display

## getAutoBrightness

### Import

```js
import { getAutoBrightness } from '@zos/display'
```

### Typings

- Description: Get whether to turn on the screen auto brightness setting
- Example:

```js
import { getAutoBrightness } from '@zos/display'

const result = getAutoBrightness()

if (result) {
  console.log('Auto brightness setting is turned on')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get whether to turn on the screen auto brightness setting.

## Type

```ts
function getAutoBrightness(): Result
```

## Parameters

### Result

| Type                 | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `boolean` | `true` - auto-brightness is set to on, `false` - auto-brightness is set to off |

## Example

```js

const result = getAutoBrightness()

if (result) {
  console.log('Auto brightness setting is turned on')
}
```

---

## getBrightness

### Import

```js
import { getBrightness } from '@zos/display'
```

### Typings

- Description: Get the screen brightness of the current device
- Example:

```js
import { getBrightness } from '@zos/display'

const result = getBrightness()
console.log(`current brightness ${result}`)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the screen brightness of the current device.

## Type

```ts
function getBrightness(): Result
```

## Parameters

### Result

| Type                | Description                            |
| ------------------- | -------------------------------------- |
| `number` | Screen brightness value, range 0 - 100 |

## Example

```js

const result = getBrightness()
console.log(`current brightness ${result}`)
```

---

## getSettings

### Import

```js
import { getSettings } from '@zos/display'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get system display related information.

## Type

```ts
function getSettings(): Result
```

## Parameters

### Result

| Property | Type                    | Required | DefaultValue | Description                     | API_LEVEL |
| -------- | ----------------------- | -------- | ------------ | ------------------------------- | --------- |
| screen   | `ScreenObj`  | Y        | -            | Screen Status                   | 3.0       |
| wrist    | `WristObj`   | Y        | -            | Lift wrist to view info setting | 3.0       |
| standby  | `StandbyObj` | Y        | -            | Rest screen display settings    | 3.0       |

### ScreenObj

| Property | Type                | Required | DefaultValue | Description                              | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ---------------------------------------- | --------- |
| status   | `number` | Y        | -            | Current screen status, `1`: On, `2`: Off | 3.0       |
| duration | `number` | Y        | -            | Screen light-up time, in seconds         | 3.0       |

### WristObj

| Property  | Type                | Required | DefaultValue | Description                                                   | API_LEVEL |
| --------- | ------------------- | -------- | ------------ | ------------------------------------------------------------- | --------- |
| speed     | `number` | Y        | -            | Response speed                                                | 3.0       |
| model     | `number` | Y        | -            | Mode, see `model` for value                                   | 3.0       |
| startTime | `number` | Y        | -            | Start time, based on the number of minutes at 0:00 of the day | 3.0       |
| endTime   | `number` | Y        | -            | End time, based on the number of minutes at 0:00 of the day   | 3.0       |

### StandbyObj

| Property  | Type                | Required | DefaultValue | Description                                                                    | API_LEVEL |
| --------- | ------------------- | -------- | ------------ | ------------------------------------------------------------------------------ | --------- |
| style     | `number` | Y        | -            | Rest screen Watchface style, `0`: system default, `1`: follow the current dial | 3.0       |
| model     | `number` | Y        | -            | Mode, see `model` for value                                                    | 3.0       |
| startTime | `number` | Y        | -            | Start time, based on the number of minutes at 0:00 of the day                  | 3.0       |
| endTime   | `number` | Y        | -            | End time, based on the number of minutes at 0:00 of the day                    | 3.0       |

### mode

| Value | Type                | Description         | API_LEVEL |
| ----- | ------------------- | ------------------- | --------- |
| 0     | `number` | Measurement invalid | 3.0       |
| 1     | `number` | Measurement invalid | 3.0       |
| 2     | `number` | Measurement invalid | 3.0       |
| 3     | `number` | Measurement invalid | 3.0       |

## Example

```js

console.log(getSettings())
```

---

## pauseDropWristScreenOff

### Import

```js
import { pauseDropWristScreenOff } from '@zos/display'
```

### Typings

- Description: Suspension of wrist resting behavior
- API_LEVEL: 2.1
- Example:

```js
import { pauseDropWristScreenOff } from '@zos/display'

pauseDropWristScreenOff({
  duration: 60000
})
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Suspension of wrist resting behavior.

## Type

```ts
function pauseDropWristScreenOff(option: Option): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue       | Description                                                                                                               | API_LEVEL |
| -------- | ------------------- | -------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- | --------- |
| duration | `number` | N        | `30000` | Duration (milliseconds), if `0` is passed, the wrist rest behavior will be suspended until `resetPalmScreenOff` is called | 2.1       |

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

pauseDropWristScreenOff({
  duration: 60000,
})
```

---

## pausePalmScreenOff

### Import

```js
import { pausePalmScreenOff } from '@zos/display'
```

### Typings

- Description: Suspension of overlapping palm resting screen behavior
- API_LEVEL: 2.1
- Example:

```js
import { pausePalmScreenOff } from '@zos/display'

pausePalmScreenOff({
  duration: 60000
})
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Suspension of overlapping palm resting screen behavior.

## Type

```ts
function pausePalmScreenOff(option: Option): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue       | Description                                                                                                         | API_LEVEL |
| -------- | ------------------- | -------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- | --------- |
| duration | `number` | N        | `30000` | Duration (milliseconds), if `0` is passed, the palm rest behavior is suspended until `resetPalmScreenOff` is called | 2.1       |

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

pausePalmScreenOff({
  duration: 60000,
})
```

---

## resetDropWristScreenOff

### Import

```js
import { resetDropWristScreenOff } from '@zos/display'
```

### Typings

- Description: Resume wrist drop resting behavior
- API_LEVEL: 2.1
- Example:

```js
import { pauseDropWristScreenOff, resetDropWristScreenOff } from '@zos/display'

pauseDropWristScreenOff({
  duration: 0
})

setTimeout(() => {
  resetDropWristScreenOff()
}, 3000)
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Resume wrist drop resting behavior.

## Type

```ts
function resetDropWristScreenOff(): Result
```

## Parameters

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

pauseDropWristScreenOff({
  duration: 0,
})

setTimeout(() => {
  resetDropWristScreenOff()
}, 3000)
```

---

## resetPageBrightTime

### Import

```js
import { resetPageBrightTime } from '@zos/display'
```

### Typings

- Description: Cancel the bright time set by `setPageBrightTime`
- Example:

```js
import { setPageBrightTime, resetPageBrightTime } from '@zos/display'

setPageBrightTime({
  brightTime: 60000
})

const result = resetPageBrightTime()
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Cancel the bright time set by `setPageBrightTime`.

## Type

```ts
function resetPageBrightTime(): Result
```

## Parameters

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

setPageBrightTime({
  brightTime: 60000,
})

const result = resetPageBrightTime()
```

---

## resetPalmScreenOff

### Import

```js
import { resetPalmScreenOff } from '@zos/display'
```

### Typings

- Description: Recovery of overlapping palm resting screen behavior
- API_LEVEL: 2.1
- Example:

```js
import { pausePalmScreenOff, resetPalmScreenOff } from '@zos/display'

pausePalmScreenOff({
  duration: 0
})

setTimeout(() => {
  resetPalmScreenOff()
}, 3000)
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Recovery of overlapping palm resting screen behavior.

## Type

```ts
function resetPalmScreenOff(): Result
```

## Parameters

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

pausePalmScreenOff({
  duration: 0,
})

setTimeout(() => {
  resetPalmScreenOff()
}, 3000)
```

---

## setAutoBrightness

### Import

```js
import { setAutoBrightness } from '@zos/display'
```

### Typings

- Description: Set whether to turn on auto-brightness, if it is on, then the screen brightness will be controlled by the light sensor and the `setBrightness` will be disabled
- Example:

```js
import { setAutoBrightness } from '@zos/display'

setAutoBrightness({
  autoBright: true
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set whether to turn on auto-brightness, if it is on, then the screen brightness will be controlled by the light sensor and the `setBrightness` will be disabled.

## Type

```ts
function setAutoBrightness(option: Option): void
```

### Simplified calling method

```ts
function setAutoBrightness(autoBright: boolean): void
```

## Parameters

### Option

| Property   | Type                 | Required | DefaultValue | Description                              | API_LEVEL |
| ---------- | -------------------- | -------- | ------------ | ---------------------------------------- | --------- |
| autoBright | `boolean` | Y        | -            | Whether to open the automatic brightness | 2.0       |

## Example

```js

setAutoBrightness({
  autoBright: true,
})
```

---

## setBrightness

### Import

```js
import { setBrightness } from '@zos/display'
```

### Typings

- Description: Set the screen brightness of the current device. If the auto brightness setting is currently turned on, the brightness is automatically adjusted by the light sensor, calling `setBrightness` will not take effect at this time, you need to use `setAutoBrightness` to turn off the auto brightness and then set it again. Note: If you exit the current page, you need to consider whether you need to set the brightness back to the original brightness
- Example:

```js
import { setBrightness } from '@zos/display'

const result = setBrightness({
  brightness: 50
})

if (result === 0) {
  console.log('setBrightness success')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set the screen brightness of the current device. If the auto brightness setting is currently turned on, the brightness is automatically adjusted by the light sensor, calling `setBrightness` will not take effect at this time, you need to use `setAutoBrightness` to turn off the auto brightness and then set it again. Note: If you exit the current page, you need to consider whether you need to set the brightness back to the original brightness.

## Type

```ts
function setBrightness(option: Option): Result
```

### Simplified calling method

```ts
function setBrightness(brightness: number): Result
```

## Parameters

### Option

| Property   | Type                | Required | DefaultValue | Description                            | API_LEVEL |
| ---------- | ------------------- | -------- | ------------ | -------------------------------------- | --------- |
| brightness | `number` | Y        | -            | Screen brightness value, range 0 - 100 | 2.0       |

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

const result = setBrightness({
  brightness: 50,
})

if (result === 0) {
  console.log('setBrightness success')
}
```

---

## setPageBrightTime

### Import

```js
import { setPageBrightTime } from '@zos/display'
```

### Typings

- Description: Set the current page screen lighting time, this setting will follow the page destruction to do reset
- Example:

```js
import { setPageBrightTime } from '@zos/display'

const result = setPageBrightTime({
  brightTime: 60000
})

if (result === 0) {
  console.log('setPageBrightTime success')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set the current page screen lighting time, this setting will follow the page destruction to do reset.

## Type

```ts
function setPageBrightTime(option: Option): Result
```

## Parameters

### Option

| Property   | Type                | Required | DefaultValue       | Description                                                    | API_LEVEL |
| ---------- | ------------------- | -------- | ------------------ | -------------------------------------------------------------- | --------- |
| brightTime | `number` | N        | `10000` | Screen lighting time (milliseconds), range [1000 - 2147483000] | 2.0       |

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

const result = setPageBrightTime({
  brightTime: 60000,
})

if (result === 0) {
  console.log('setPageBrightTime success')
}
```

---

## setScreenOff

### Import

```js
import { setScreenOff } from '@zos/display'
```

### Typings

- Description: Set the screen to rest
- Example:

```js
import { setScreenOff } from '@zos/display'

const result = setScreenOff()

if (result === 0) {
  console.log('setScreenOff success')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set the screen to rest.

## Type

```ts
function setScreenOff(): Result
```

## Parameters

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

const result = setScreenOff()

if (result === 0) {
  console.log('setScreenOff success')
}
```

---

## setWakeUpRelaunch

### Import

```js
import { setWakeUpRelaunch } from '@zos/display'
```

### Typings

- Description: By default, the system will off the screen in one page of the Mini Program, and the system will exit the Mini Program after 10s, and enter the dial page when the watch is woken up again. If `relaunch` is set to `true`, the Mini Program will reopen and enter the corresponding page when the watch is woken up again
- Example:

```js
import { setWakeUpRelaunch } from '@zos/display'

setWakeUpRelaunch({
  relaunch: true
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

By default, the system will off the screen in one page of the Mini Program, and the system will exit the Mini Program after 10s, and enter the dial page when the watch is woken up again. If `relaunch` is set to `true`, the Mini Program will reopen and enter the corresponding page when the watch is woken up again.

## Type

```ts
function setWakeUpRelaunch(option: Option): void
```

### Simplified calling method

```ts
function setWakeUpRelaunch(relaunch: boolean): void
```

## Parameters

### Option

| Type                              | Description                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------ |
| `Options&#124;boolean` | `true` - auto-brightness is set to on, `false` - auto-brightness is set to off |

### Options

| Property | Type                 | Required | DefaultValue | Description                                                                             | API_LEVEL |
| -------- | -------------------- | -------- | ------------ | --------------------------------------------------------------------------------------- | --------- |
| relaunch | `boolean` | Y        | -            | Whether to reopen the Mini Program after waking up the watch again after a screen break | 2.0       |

## Example

```js

setWakeUpRelaunch({
  relaunch: true,
})
```

---

