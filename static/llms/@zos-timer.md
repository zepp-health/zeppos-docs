# @zos/timer

## createSysTimer

### Import

```js
import { createSysTimer } from '@zos/timer'
```

### Typings

- Description: A system-level timer that can be registered in device app services and runs regardless of watch screen state
- API_LEVEL: 4.0
- Example:

```js
import { createSysTimer } from '@zos/timer'

// Create a non-periodic timer that executes after 5 seconds
const timerId = createSysTimer(false, 5000, (param) => {
  console.log('timer callback with param:', param)
}, 'customParam')

// Create a periodic timer that executes every 10 seconds
const intervalId = createSysTimer(true, 10000, () => {
  console.log('interval timer callback')
})
```

> Start from API_LEVEL `4.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

A system-level timer that can be registered in device app services and runs regardless of watch screen state.

## Type

```ts
function createSysTimer(periodic: Periodic, period: Period, callback: Callback, arg?: Arg): Result
```

## Parameters

### Periodic

| Type                 | Description                        |
| -------------------- | ---------------------------------- |
| `boolean` | Whether to create a periodic timer |

### Period

| Type                | Description                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| `number` | Timer period (ms). For non-periodic timers, it represents delay duration, 0 means immediate execution |

### Callback

| Type                                     | Description       |
| ---------------------------------------- | ----------------- |
| `(arg?: unknown) => void` | Callback function |

### Arg

| Type                 | Description                               |
| -------------------- | ----------------------------------------- |
| `unknown` | Parameter passed to the callback function |

### Result

| Type                | Description                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| `number` | The ID returned by creating a system timer, used to stop the timer later |

## Example

```js

// Create a non-periodic timer that executes after 5 seconds
const timerId = createSysTimer(
  false,
  5000,
  (param) => {
    console.log('timer callback with param:', param)
  },
  'customParam',
)

// Create a periodic timer that executes every 10 seconds
const intervalId = createSysTimer(true, 10000, () => {
  console.log('interval timer callback')
})
```

---

## stopTimer

### Import

```js
import { stopTimer } from '@zos/timer'
```

> Start from API_LEVEL `4.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Stop the timer created by `createSysTimer` method.

## Type

```ts
function stopTimer(timerId: TimerId): void
```

## Parameters

### TimerId

| Type                | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| `number` | Timer ID to be stopped, returned by `createSysTimer` method |

## Example

```js

// Create a periodic timer that executes every 10 seconds
const timerId = createSysTimer(true, 10000, () => {
  console.log('Execute every 10 seconds')
})

// Stop the timer after 5 seconds
createSysTimer(false, 5000, () => {
  stopTimer(timerId)
  console.log('Timer stopped')
})
```

---

