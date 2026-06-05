# @zos/alarm

## Constants

| Constant | Description | API_LEVEL |
|----------|-------------|-----------|
| `REPEAT_ONCE` | Repeat once | 3.0 |
| `REPEAT_MINUTE` | Specify the repetition period as minute | 3.0 |
| `REPEAT_HOUR` | Specify the repetition period as hour | 3.0 |
| `REPEAT_DAY` | Specify the repetition period as day | 3.0 |
| `REPEAT_WEEK` | Specify the repetition period as week | 3.0 |
| `REPEAT_MONTH` | Specify the repetition period as month | 3.0 |
| `REPEAT_YEAR` | Specify the repetition period as year | 3.0 |
| `WEEK_MON` | Monday | 3.0 |
| `WEEK_TUE` | Tuesday | 3.0 |
| `WEEK_WED` | Wednesday | 3.0 |
| `WEEK_THU` | Thursday | 3.0 |
| `WEEK_FRI` | Friday | 3.0 |
| `WEEK_SAT` | Saturday | 3.0 |
| `WEEK_SUN` | Sunday | 3.0 |

## cancel

### Import

```js
import { cancel } from '@zos/alarm'
```

### Typings

- Description: Cancels the set timer, if the timer is set to persist and also cancels the persistence
- API_LEVEL: 3.0
- Permission: `device:os.alarm`
- Example:

```js
import { cancel } from '@zos/alarm'

cancel(id)
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Cancels the set timer, if the timer is set to persist and also cancels the persistence.

> **ℹ️ Info**
>
> permission code: `device:os.alarm`

## Type

```ts
function cancel(option: Option): Result
```

### Simplified calling method

```ts
function cancel(id: number): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description                           | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ------------------------------------- | --------- |
| id       | `number` | Y        | -            | Vertical axis coordinates of the page | 3.0       |

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

cancel(id)
```

---

## getAllAlarms

### Import

```js
import { getAllAlarms } from '@zos/alarm'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get an array of all created timers alarmId for the current Mini Program, including timers that support persistence.

> **ℹ️ Info**
>
> permission code: `device:os.alarm`

## Type

```ts
function getAllAlarms(): Array<number>
```

## Example

```js

getAllAlarms()
```

---

## set

### Import

```js
import { set } from '@zos/alarm'
```

### Typings

- Description: Support for persistent timers to wake up pages of Mini Program
- API_LEVEL: 3.0
- Permission: `device:os.alarm`
- Constants: `alarm_repeat`, `alarm_week`
- Example:

```js
// At a certain time each day
import { set, REPEAT_DAY } from '@zos/alarm'

const option = {
  url: 'pages/index.js',
  time: 12345678,
  repeat_type: REPEAT_DAY
}
const id = set(option)

// Every Monday and Wednesday
import { set, REPEAT_WEEK, WEEK_MON, WEEK_WED } from '@zos/alarm'

const option = {
  url: 'pages/index.js',
  time: 12345678,
  repeat_type: REPEAT_WEEK,
  week_days: WEEK_MON| WEEK_WED
}
const id = set(option)

// Reminder every 21 days
import { set, REPEAT_DAY } from '@zos/alarm'

const option = {
  url: 'pages/index.js',
  time: 12345678,
  repeat_type: REPEAT_DAY,
  repeat_period: 20,
  repeat_duration: 1,
}
const id = set(option)
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Support for persistent timers to wake up pages of Mini Program.

> **ℹ️ Info**
>
> permission code: `device:os.alarm`

## Type

```ts
function set(option: Option): Result
```

## Parameters

### Option

| Property        | Type                 | Required | DefaultValue               | Description                                                                                                                                                                                                                                                                             | API_LEVEL |
| --------------- | -------------------- | -------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| appid           | `number`  | N        | -                          | App ID of the Mini Program, default current Mini Program ID                                                                                                                                                                                                                             | 3.0       |
| url             | `string`  | Y        | -                          | File path to wake up Mini Program, supporting App Service                                                                                                                                                                                                                               | 3.0       |
| time            | `number`  | N        | -                          | Timer execution time, UTC timestamp, in seconds, this field has higher priority than `delay`, each call must pass one of the `time` and `delay` parameter                                                                                                                               | 3.0       |
| delay           | `number`  | N        | -                          | How many seconds of delay based on the current time after the execution, in seconds. Each call must pass one of the `time` and `delay` parameter                                                                                                                                        | 3.0       |
| param           | `string`  | N        | -                          | The argument passed to the app.js lifecycle `onCreate`                                                                                                                                                                                                                                  | 3.0       |
| store           | `boolean` | N        | `false`         | Does the timer need persistent storage (can still be executed successfully after device reboot)                                                                                                                                                                                         | 3.0       |
| repeat_type     | `number`  | N        | -                          | Timer repetition type, refer to timer periodic repetition constants                                                                                                                                                                                                                     | 3.0       |
| repeat_period   | `number`  | N        | `REPEAT_MINUTE` | Effective when `repeat_type` is set to `REPEAT_MINUTE`, `REPEAT_HOUR`, `REPEAT_DAY`, used in conjunction with repeat_duration to set a repeat period, one repeat period in the current `repeat_type`, containing `repeat_period` times, and `repeat_duration` times before the reminder | 3.0       |
| repeat_duration | `number`  | N        | `1`             | When `repeat_type` is set to `REPEAT_MINUTE`, `REPEAT_HOUR`, `REPEAT_DAY`, the number of reminders in a period of the timer, used with `repeat_duration`, a period of the current `repeat_type`, including repeat_period times, `repeat_duration` times before the reminder             | 3.0       |
| week_days       | `number`  | N        | -                          | Effective when `repeat_type` is `REPEAT_WEEK`, you can customize which days of the week are repeated, refer to the timer week constants                                                                                                                                                 | 3.0       |
| start_time      | `number`  | N        | -                          | The time when the repeat reminder starts, in UTC seconds, and the repeat reminder only takes effect during the repeat time period                                                                                                                                                       | 3.0       |
| end_time        | `number`  | N        | -                          | The time when the repeat reminder ends, in UTC seconds, and the repeat reminder only takes effect during the repeat time period                                                                                                                                                         | 3.0       |

### Result

| Type                | Description                                                                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number` | The id returned by the timer creation, `0` is an invalid ID, which means the timer creation failed, and the ID remains the same after the system restart for timers that support persistence |

## Constants

### Timer repeats constants

| Constant        | Description                             | API_LEVEL |
| --------------- | --------------------------------------- | --------- |
| `REPEAT_ONCE`   | Repeat once                             | 3.0       |
| `REPEAT_MINUTE` | Specify the repetition period as minute | 3.0       |
| `REPEAT_HOUR`   | Specify the repetition period as hour   | 3.0       |
| `REPEAT_DAY`    | Specify the repetition period as day    | 3.0       |
| `REPEAT_WEEK`   | Specify the repetition period as week   | 3.0       |
| `REPEAT_MONTH`  | Specify the repetition period as month  | 3.0       |
| `REPEAT_YEAR`   | Specify the repetition period as year   | 3.0       |

### Timer weekly constants

| Constant   | Description | API_LEVEL |
| ---------- | ----------- | --------- |
| `WEEK_MON` | Monday      | 3.0       |
| `WEEK_TUE` | Tuesday     | 3.0       |
| `WEEK_WED` | Wednesday   | 3.0       |
| `WEEK_THU` | Thursday    | 3.0       |
| `WEEK_FRI` | Friday      | 3.0       |
| `WEEK_SAT` | Saturday    | 3.0       |
| `WEEK_SUN` | Sunday      | 3.0       |

## Example

```js
// At a certain time each day

const option = {
  url: 'pages/index.js',
  time: 12345678,
  repeat_type: REPEAT_DAY,
}
const id = set(option)

// Every Monday and Wednesday

const option = {
  url: 'pages/index.js',
  time: 12345678,
  repeat_type: REPEAT_WEEK,
  week_days: WEEK_MON | WEEK_WED,
}
const id = set(option)

// Reminder every 21 days

const option = {
  url: 'pages/index.js',
  time: 12345678,
  repeat_type: REPEAT_DAY,
  repeat_period: 20,
  repeat_duration: 1,
}
const id = set(option)
```

---

