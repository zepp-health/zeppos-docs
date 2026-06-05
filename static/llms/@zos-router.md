# @zos/router

## Constants

| Constant | Description | API_LEVEL |
|----------|-------------|-----------|
| `SYSTEM_APP_STATUS` | Activity | 3.0 |
| `SYSTEM_APP_HR` | Heart Rate | 3.0 |
| `SYSTEM_APP_SPORT` | Workout | 3.0 |
| `SYSTEM_APP_WEATHER` | Weather | 3.0 |
| `SYSTEM_APP_ALARM` | Alarm | 3.0 |
| `SYSTEM_APP_CAMERA` | Camera Remote | 3.0 |
| `SYSTEM_APP_MUSIC` | Music | 3.0 |
| `SYSTEM_APP_STOPWATCH` | Stopwatch | 3.0 |
| `SYSTEM_APP_COUNTDOWN` | Timer | 3.0 |
| `SYSTEM_APP_FINE_PHONE` | Find My Phone | 3.0 |
| `SYSTEM_APP_CARD` | Cards | 3.0 |
| `SYSTEM_APP_ALIPAY` | Alipay | 3.0 |
| `SYSTEM_APP_SETTING` | Settings | 3.0 |
| `SYSTEM_APP_SPORT_HISTORY` | Workout History | 3.0 |
| `SYSTEM_APP_COMPASS` | Compass | 3.0 |
| `SYSTEM_APP_PAI` | PAI | 3.0 |
| `SYSTEM_APP_WORLD_CLOCK` | World Clock | 3.0 |
| `SYSTEM_APP_PRESSURE` | Stress | 3.0 |
| `SYSTEM_APP_MENSTRUAL` | Cycle Tracking | 3.0 |
| `SYSTEM_APP_SPORT_STATUS` | Workout Status | 3.0 |
| `SYSTEM_APP_CALENDAR` | Calendar | 3.0 |
| `SYSTEM_APP_SLEEP` | Sleep | 3.0 |
| `SYSTEM_APP_SPO2` | Blood Oxygen | 3.0 |
| `SYSTEM_APP_PHONE` | Phone | 3.0 |
| `SYSTEM_APP_NETEASE_MUSIC` | NetEase Music | 3.0 |
| `SYSTEM_APP_WEPAY` | Weixin Pay | 3.0 |
| `SYSTEM_APP_BREATH` | Breathe | 3.0 |
| `SYSTEM_APP_POMODORO` | Pomodoro Timer | 3.0 |
| `SYSTEM_APP_ALEAX` | Alexa | 3.0 |
| `SYSTEM_APP_THERMOMETER` | Thermometer | 3.0 |
| `SYSTEM_APP_TODO_LIST` | To Do | 3.0 |
| `SYSTEM_APP_ALTIMETER` | Barometer | 3.0 |
| `SYSTEM_APP_VOICE_MEMO` | Voice Memos | 3.0 |
| `SYSTEM_APP_SUN_AND_MOON` | Sun & Moon | 3.0 |
| `SYSTEM_APP_MEASUREMENT` | One-tap Measuring | 3.0 |
| `SYSTEM_APP_ZEPP_COACH` | Zepp Coach | 3.0 |
| `SYSTEM_APP_CLUB_CARD` | Membership Card | 3.0 |
| `SYSTEM_APP_BODY_COMPOSITION` | Body Composition | 3.0 |
| `SYSTEM_APP_READINESS` | Readiness | 3.0 |

## back

### Import

```js
import { back } from '@zos/router'
```

### Typings

- Description: Closes the current page to return to the previous page
- Example:

```js
import { back } from '@zos/router'

back()
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Closes the current page to return to the previous page.

## Type

```ts
function back(): void
```

## Example

```js

back()
```

---

## checkSystemApp

### Import

```js
import { checkSystemApp } from '@zos/router'
```

### Typings

- Description: Check if the system application supports jumping
- API_LEVEL: 3.0
- Constants: `system_app`
- Example:

```js
import { checkSystemApp, SYSTEM_APP_STATUS } from '@zos/router'

checkSystemApp({
  appId: SYSTEM_APP_STATUS
})
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Check if the system application supports jumping.

## Type

```ts
function checkSystemApp(option: Option): void
```

### Simplified calling method

```ts
function checkSystemApp(appId: number): void
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description                                                                      | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | -------------------------------------------------------------------------------- | --------- |
| appId    | `number` | Y        | -            | ID of the system App to be jumped to, value refers to the system App ID constant | 3.0       |

## Constants

### System App ID constants

| Constant                      | Description       | API_LEVEL |
| ----------------------------- | ----------------- | --------- |
| `SYSTEM_APP_STATUS`           | Activity          | 3.0       |
| `SYSTEM_APP_HR`               | Heart Rate        | 3.0       |
| `SYSTEM_APP_SPORT`            | Workout           | 3.0       |
| `SYSTEM_APP_WEATHER`          | Weather           | 3.0       |
| `SYSTEM_APP_ALARM`            | Alarm             | 3.0       |
| `SYSTEM_APP_CAMERA`           | Camera Remote     | 3.0       |
| `SYSTEM_APP_MUSIC`            | Music             | 3.0       |
| `SYSTEM_APP_STOPWATCH`        | Stopwatch         | 3.0       |
| `SYSTEM_APP_COUNTDOWN`        | Timer             | 3.0       |
| `SYSTEM_APP_FINE_PHONE`       | Find My Phone     | 3.0       |
| `SYSTEM_APP_CARD`             | Cards             | 3.0       |
| `SYSTEM_APP_ALIPAY`           | Alipay            | 3.0       |
| `SYSTEM_APP_SETTING`          | Settings          | 3.0       |
| `SYSTEM_APP_SPORT_HISTORY`    | Workout History   | 3.0       |
| `SYSTEM_APP_COMPASS`          | Compass           | 3.0       |
| `SYSTEM_APP_PAI`              | PAI               | 3.0       |
| `SYSTEM_APP_WORLD_CLOCK`      | World Clock       | 3.0       |
| `SYSTEM_APP_PRESSURE`         | Stress            | 3.0       |
| `SYSTEM_APP_MENSTRUAL`        | Cycle Tracking    | 3.0       |
| `SYSTEM_APP_SPORT_STATUS`     | Workout Status    | 3.0       |
| `SYSTEM_APP_CALENDAR`         | Calendar          | 3.0       |
| `SYSTEM_APP_SLEEP`            | Sleep             | 3.0       |
| `SYSTEM_APP_SPO2`             | Blood Oxygen      | 3.0       |
| `SYSTEM_APP_PHONE`            | Phone             | 3.0       |
| `SYSTEM_APP_NETEASE_MUSIC`    | NetEase Music     | 3.0       |
| `SYSTEM_APP_WEPAY`            | Weixin Pay        | 3.0       |
| `SYSTEM_APP_BREATH`           | Breathe           | 3.0       |
| `SYSTEM_APP_POMODORO`         | Pomodoro Timer    | 3.0       |
| `SYSTEM_APP_ALEAX`            | Alexa             | 3.0       |
| `SYSTEM_APP_THERMOMETER`      | Thermometer       | 3.0       |
| `SYSTEM_APP_TODO_LIST`        | To Do             | 3.0       |
| `SYSTEM_APP_ALTIMETER`        | Barometer         | 3.0       |
| `SYSTEM_APP_VOICE_MEMO`       | Voice Memos       | 3.0       |
| `SYSTEM_APP_SUN_AND_MOON`     | Sun & Moon        | 3.0       |
| `SYSTEM_APP_MEASUREMENT`      | One-tap Measuring | 3.0       |
| `SYSTEM_APP_ZEPP_COACH`       | Zepp Coach        | 3.0       |
| `SYSTEM_APP_CLUB_CARD`        | Membership Card   | 3.0       |
| `SYSTEM_APP_BODY_COMPOSITION` | Body Composition  | 3.0       |
| `SYSTEM_APP_READINESS`        | Readiness         | 3.0       |

## Example

```js

checkSystemApp({
  appId: SYSTEM_APP_STATUS,
})
```

---

## clearLaunchAppTimeout

### Import

```js
import { clearLaunchAppTimeout } from '@zos/router'
```

### Typings

- Description: Cancel the wakeup Mini Program timer created by `setLaunchAppTimeout`
- Example:

```js
import { setLaunchAppTimeout, clearLaunchAppTimeout } from '@zos/router'

const timeoutId = setLaunchAppTimeout({
  url: 'pages/js_widget_sample',
  appId: 1000001,
  delay: 10000
})

clearLaunchAppTimeout({
  timeoutId
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Cancel the wakeup Mini Program timer created by `setLaunchAppTimeout`.

## Type

```ts
function clearLaunchAppTimeout(option: Option): void
```

### Simplified calling method

```ts
function clearLaunchAppTimeout(timeoutId: number): void
```

## Parameters

### Option

| Property  | Type                | Required | DefaultValue | Description                                                                                                                 | API_LEVEL |
| --------- | ------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------- | --------- |
| timeoutId | `number` | Y        | -            | The identifier of the timeout you want to cancel. This ID was returned by the corresponding call to `setLaunchAppTimeout`() | 2.0       |

### Result

| Type                | Description                                                                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number` | The returned value is a positive integer value which identifies the timer created by the call to `setLaunchAppTimeout`. This value can be passed to `clearLaunchAppTimeout` to cancel the timeout |

## Example

```js

const timeoutId = setLaunchAppTimeout({
  url: 'pages/js_widget_sample',
  appId: 1000001,
  delay: 10000,
})

clearLaunchAppTimeout({
  timeoutId,
})
```

---

## exit

### Import

```js
import { exit } from '@zos/router'
```

### Typings

- Description: Exit the Mini Program and return to the applist page
- Example:

```js
import { exit } from '@zos/router'

exit()
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Exit the Mini Program and return to the applist page.

## Type

```ts
function exit(): void
```

## Example

```js

exit()
```

---

## getAppIdByName

### Import

```js
import { getAppIdByName } from '@zos/router'
```

> Start from API_LEVEL `3.6` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Fuzzy match the English name of installed Mini Programs on the device by name.

## Type

```ts
function getAppIdByName(name: string): Result
```

## Parameters

### Result

| Type                | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `number` | Matched Mini Program ID, returns invalid ID when match fails |

## Example

```js

const appId = getAppIdByName('calculator')
console.log(appId)
```

---

## home

### Import

```js
import { home } from '@zos/router'
```

### Typings

- Description: Exit the Mini Program and return to the watchface page
- Example:

```js
import { home } from '@zos/router'

home()
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Exit the Mini Program and return to the watchface page.

## Type

```ts
function home(): void
```

## Example

```js

home()
```

---

## launchApp

### Import

```js
import { launchApp } from '@zos/router'
```

### Typings

- Description: Open Mini Program
- Constants: `system_app`
- Example:

```js
import { launchApp, SYSTEM_APP_HR } from '@zos/router'

// Jump to Mini Program
launchApp({
   appId: 1000001,
   url: 'pages/js_widget_sample',
   params: {
     type: 1
  }
})

// Jump to system App Heart Rate
launchApp({
   appId: SYSTEM_APP_HR,
   native: true
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Open Mini Program.

## Type

```ts
function launchApp(option: Option): void
```

## Parameters

### Option

| Property | Type                            | Required | DefaultValue | Description                                                                                                                                                                                   | API_LEVEL |
| -------- | ------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| appId    | `number`             | Y        | -            | Mini Program ID or System App ID (API_LEVEL 3.0 support, value reference System App ID constant)                                                                                              | 2.0       |
| url      | `string`             | Y        | -            | path                                                                                                                                                                                          | 2.0       |
| native   | `boolean`            | Y        | -            | Whether to jump to the system App                                                                                                                                                             | 3.0       |
| params   | `string&#124;object` | N        | -            | The argument passed to the app.js lifecycle `onCreate` supports either a string or a standard JSON object. If a standard JSON object is passed, the method internally converts it to a string | 2.0       |

## Constants

### System App ID constants

| Constant                      | Description       | API_LEVEL |
| ----------------------------- | ----------------- | --------- |
| `SYSTEM_APP_STATUS`           | Activity          | 3.0       |
| `SYSTEM_APP_HR`               | Heart Rate        | 3.0       |
| `SYSTEM_APP_SPORT`            | Workout           | 3.0       |
| `SYSTEM_APP_WEATHER`          | Weather           | 3.0       |
| `SYSTEM_APP_ALARM`            | Alarm             | 3.0       |
| `SYSTEM_APP_CAMERA`           | Camera Remote     | 3.0       |
| `SYSTEM_APP_MUSIC`            | Music             | 3.0       |
| `SYSTEM_APP_STOPWATCH`        | Stopwatch         | 3.0       |
| `SYSTEM_APP_COUNTDOWN`        | Timer             | 3.0       |
| `SYSTEM_APP_FINE_PHONE`       | Find My Phone     | 3.0       |
| `SYSTEM_APP_CARD`             | Cards             | 3.0       |
| `SYSTEM_APP_ALIPAY`           | Alipay            | 3.0       |
| `SYSTEM_APP_SETTING`          | Settings          | 3.0       |
| `SYSTEM_APP_SPORT_HISTORY`    | Workout History   | 3.0       |
| `SYSTEM_APP_COMPASS`          | Compass           | 3.0       |
| `SYSTEM_APP_PAI`              | PAI               | 3.0       |
| `SYSTEM_APP_WORLD_CLOCK`      | World Clock       | 3.0       |
| `SYSTEM_APP_PRESSURE`         | Stress            | 3.0       |
| `SYSTEM_APP_MENSTRUAL`        | Cycle Tracking    | 3.0       |
| `SYSTEM_APP_SPORT_STATUS`     | Workout Status    | 3.0       |
| `SYSTEM_APP_CALENDAR`         | Calendar          | 3.0       |
| `SYSTEM_APP_SLEEP`            | Sleep             | 3.0       |
| `SYSTEM_APP_SPO2`             | Blood Oxygen      | 3.0       |
| `SYSTEM_APP_PHONE`            | Phone             | 3.0       |
| `SYSTEM_APP_NETEASE_MUSIC`    | NetEase Music     | 3.0       |
| `SYSTEM_APP_WEPAY`            | Weixin Pay        | 3.0       |
| `SYSTEM_APP_BREATH`           | Breathe           | 3.0       |
| `SYSTEM_APP_POMODORO`         | Pomodoro Timer    | 3.0       |
| `SYSTEM_APP_ALEAX`            | Alexa             | 3.0       |
| `SYSTEM_APP_THERMOMETER`      | Thermometer       | 3.0       |
| `SYSTEM_APP_TODO_LIST`        | To Do             | 3.0       |
| `SYSTEM_APP_ALTIMETER`        | Barometer         | 3.0       |
| `SYSTEM_APP_VOICE_MEMO`       | Voice Memos       | 3.0       |
| `SYSTEM_APP_SUN_AND_MOON`     | Sun & Moon        | 3.0       |
| `SYSTEM_APP_MEASUREMENT`      | One-tap Measuring | 3.0       |
| `SYSTEM_APP_ZEPP_COACH`       | Zepp Coach        | 3.0       |
| `SYSTEM_APP_CLUB_CARD`        | Membership Card   | 3.0       |
| `SYSTEM_APP_BODY_COMPOSITION` | Body Composition  | 3.0       |
| `SYSTEM_APP_READINESS`        | Readiness         | 3.0       |

## Example

```js

// Jump to Mini Program
launchApp({
  appId: 1000001,
  url: 'pages/js_widget_sample',
  params: {
    type: 1,
  },
})

// Jump to system App Heart Rate
launchApp({
  appId: SYSTEM_APP_HR,
  native: true,
})
```

---

## push

### Import

```js
import { push } from '@zos/router'
```

### Typings

- Description: Navigate to a page within the Mini Program. Use the `back` method to go back to the original page
- Example:

```js
import { push } from '@zos/router'

push({
   url: 'page/index',
   params: 'type=1'
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Navigate to a page within the Mini Program. Use the `back` method to go back to the original page.

## Type

```ts
function push(option: Option): void
```

## Parameters

### Option

| Property | Type                            | Required | DefaultValue | Description                                                                                                                                                                      | API_LEVEL |
| -------- | ------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| url      | `string`             | Y        | -            | path                                                                                                                                                                             | 2.0       |
| params   | `string&#124;object` | N        | -            | Parameters passed to the page `onInit` lifecycle, supporting strings or standard JSON object. If a standard JSON object is passed, the method internally converts it to a string | 2.0       |

## Example

```js

push({
  url: 'page/index',
  params: 'type=1',
})
```

---

## replace

### Import

```js
import { replace } from '@zos/router'
```

### Typings

- Description: Close the current page and jump to a page within the app
- Example:

```js
import { replace } from '@zos/router'

replace({
   url: 'page/index',
   params: 'type=1'
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Close the current page and jump to a page within the app.

## Type

```ts
function replace(option: Option): void
```

## Parameters

### Option

| Property | Type                            | Required | DefaultValue | Description                                                                                                                                                                         | API_LEVEL |
| -------- | ------------------------------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| url      | `string`             | Y        | -            | path                                                                                                                                                                                | 2.0       |
| params   | `string&#124;object` | N        | -            | Parameters passed to the page `onCreate` lifecycle, supporting strings or standard JSON objects. If a standard JSON object is passed, the method internally converts it to a string | 2.0       |

## Example

```js

replace({
  url: 'page/index',
  params: 'type=1',
})
```

---

## setLaunchAppTimeout

### Import

```js
import { setLaunchAppTimeout } from '@zos/router'
```

### Typings

- Description: Register a timer to launch the Mini Program at a given time
- Example:

```js
import { setLaunchAppTimeout, clearLaunchAppTimeout } from '@zos/router'

const timeoutId = setLaunchAppTimeout({
  url: 'pages/js_widget_sample',
  appId: 1000001,
  delay: 1000
})

clearLaunchAppTimeout({
  timeoutId
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register a timer to launch the Mini Program at a given time.

## Type

```ts
function setLaunchAppTimeout(option: Option): Result
```

## Parameters

### Option

| Property | Type                            | Required | DefaultValue   | Description                                                                                                                                                                                   | API_LEVEL |
| -------- | ------------------------------- | -------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| appId    | `number`             | Y        | -              | Mini Program ID                                                                                                                                                                               | 2.0       |
| url      | `string`             | Y        | -              | path                                                                                                                                                                                          | 2.0       |
| utc      | `number`             | N        | -              | utc timestamp(milliseconds)，the priority is higher than `delay`, and when set at the same time as the `delay` field, only the `utc` field takes effect                                       | 2.0       |
| delay    | `number`             | N        | `0` | The time, in milliseconds that the timer should wait before the Mini Program is waked.                                                                                                        | 3.0       |
| params   | `string&#124;object` | N        | -              | The argument passed to the app.js lifecycle `onCreate` supports either a string or a standard JSON object. If a standard JSON object is passed, the method internally converts it to a string | 2.0       |

### Result

| Type                | Description                                                                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number` | The returned value is a positive integer value which identifies the timer created by the call to `setLaunchAppTimeout`. This value can be passed to `clearLaunchAppTimeout` to cancel the timeout. |

## Example

```js

const timeoutId = setLaunchAppTimeout({
  url: 'pages/js_widget_sample',
  appId: 1000001,
  delay: 1000,
})

clearLaunchAppTimeout({
  timeoutId,
})
```

---

