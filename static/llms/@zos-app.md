# @zos/app

## Constants

| Constant | Description | API_LEVEL |
|----------|-------------|-----------|
| `SCENE_APP` | In Mini Program | — |
| `SCENE_WATCHFACE` | In watchface interface | — |
| `SCENE_SETTINGS` | In the Mini Program configuration or dial edit page | — |
| `SCENE_AOD` | In the rest screen screen | — |

## emitCustomSystemEvent

### Import

```js
import { emitCustomSystemEvent } from '@zos/app'
```

### Typings

- Description: The Mini Program can customize the system events and can actively dispatch the custom system events
- API_LEVEL: 3.0
- Example:

```js
import { emitCustomSystemEvent } from '@zos/app'

emitCustomSystemEvent({
  eventName: 'event:customize.test',
  eventParam: 'eventName=event:customize.test&type=0'
})
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

The Mini Program can customize the system events and can actively dispatch the custom system events.

## Type

```ts
function emitCustomSystemEvent(option: Option): void
```

## Parameters

### Option

| Property   | Type                | Required | DefaultValue | Description                                                                                                          | API_LEVEL |
| ---------- | ------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------- | --------- |
| eventName  | `string` | Y        | -            | Customize event names that meet the naming convention of `event:customize.${event}`                                  | 3.0       |
| eventParam | `string` | Y        | -            | Custom event parameters, this parameter is passed to the `onInit` lifecycle function of the `AppService` constructor | 3.0       |

## Example

```js

emitCustomSystemEvent({
  eventName: 'event:customize.test',
  eventParam: 'eventName=event:customize.test&type=0',
})
```

---

## getPackageInfo

### Import

```js
import { getPackageInfo } from '@zos/app'
```

### Typings

- Description: Get some of the fields in the Mini Program configuration `app.json`
- Example:

```js
import { getPackageInfo } from '@zos/app'

const packageInfo = getPackageInfo()
console.log(packageInfo.name)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get some of the fields in the Mini Program configuration `app.json`.

## Type

```ts
function getPackageInfo(): Result
```

## Parameters

### Result

| Type                | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `object` | Please see the fields in `app.json` for more details |

## Example

```js

const packageInfo = getPackageInfo()
console.log(packageInfo.name)
```

---

## getPackageInfoById

### Import

```js
import { getPackageInfoById } from '@zos/app'
```

### Typings

- Description: Get some of the fields in the Mini Program configuration `app.json` by app ID
- API_LEVEL: 4.0
- Example:

```js
import { getPackageInfoById } from '@zos/app'

const packageInfo = getPackageInfoById({ appId: 1001 })
console.log(packageInfo.name)
```

> Start from API_LEVEL `4.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get some of the fields in the Mini Program configuration `app.json` by app ID.

## Type

```ts
function getPackageInfoById(option: Option): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description     | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | --------------- | --------- |
| appId    | `number` | Y        | -            | Mini Program ID | 4.0       |

### Result

| Type                | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `object` | Please see the fields in `app.json` for more details |

## Example

```js

const packageInfo = getPackageInfoById({ appId: 1001 })
console.log(packageInfo.name)
```

---

## getPerformance

### Import

```js
import { getPerformance } from '@zos/app'
```

> Start from API_LEVEL `4.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get Mini Program performance statistics, including memory usage and loading performance metrics.

## Type

```ts
function getPerformance(...args: Array<'memory' | 'perf'>): Result
```

## Parameters

### Result

| Property | Type                | Description            | API_LEVEL |
| -------- | ------------------- | ---------------------- | --------- |
| memory   | `Memory` | Memory statistics      | 4.0       |
| perf     | `Perf`   | Performance statistics | 4.0       |

### Memory

| Property | Type                                      | Description                         | API_LEVEL |
| -------- | ----------------------------------------- | ----------------------------------- | --------- |
| system   | `SystemMemory`                 | system memory information           | 4.0       |
| app      | `Array<AppMemory>`     | Application memory information list | 4.0       |
| leaking  | `Array<LeakingMemory>` | Unreleased memory information list  | 4.0       |

### SystemMemory

| Property | Type                | Description          | API_LEVEL |
| -------- | ------------------- | -------------------- | --------- |
| used     | `number` | Used memory (bytes)  | 4.0       |
| total    | `number` | Total memory (bytes) | 4.0       |

### AppMemory

| Property | Type                                     | Description               | API_LEVEL |
| -------- | ---------------------------------------- | ------------------------- | --------- |
| appid    | `number`                      | Mini Program ID           | 4.0       |
| used     | `number`                      | Memory usage (bytes)      | 4.0       |
| peak     | `number`                      | Peak memory usage (bytes) | 4.0       |
| modules  | `Array<MemoryModule>` | Module memory information | 4.0       |

### LeakingMemory

| Property | Type                                     | Description               | API_LEVEL |
| -------- | ---------------------------------------- | ------------------------- | --------- |
| appid    | `number`                      | Mini Program ID           | 4.0       |
| used     | `number`                      | Memory usage (bytes)      | 4.0       |
| modules  | `Array<MemoryModule>` | Module memory information | 4.0       |

### MemoryModule

| Property | Type                | Description               | API_LEVEL |
| -------- | ------------------- | ------------------------- | --------- |
| file     | `string` | File path                 | 4.0       |
| used     | `number` | Memory usage (bytes)      | 4.0       |
| peak     | `number` | Peak memory usage (bytes) | 4.0       |

### Perf

| Property | Type                                   | Description                         | API_LEVEL |
| -------- | -------------------------------------- | ----------------------------------- | --------- |
| appid    | `number`                    | Mini Program ID                     | 4.0       |
| modules  | `Array<PerfModule>` | Module performance information list | 4.0       |

### PerfModule

| Property   | Type                | Description                                                        | API_LEVEL |
| ---------- | ------------------- | ------------------------------------------------------------------ | --------- |
| file       | `string` | File name                                                          | 4.0       |
| evalTime   | `number` | File reading and running time (excluding lifecycle execution time) | 4.0       |
| createTime | `number` | onCreate lifecycle execution time                                  | 4.0       |
| initTime   | `number` | onInit lifecycle execution time                                    | 4.0       |
| buildTime  | `number` | build lifecycle execution time                                     | 4.0       |

## Example

```js

// Get memory info only
const memoryProfile = getPerformance('memory')

// Get both memory and performance info
const fullProfile = getPerformance('memory', 'perf')
```

---

## getScene

### Import

```js
import { getScene } from '@zos/app'
```

### Typings

- Description: Get the current scene where the Mini Program is running
- Constants: `scene`
- Example:

```js
import { getScene, SCENE_APP } from '@zos/app'

const result = getScene()

if (result === SCENE_APP) {
  console.log('in Mini Program')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the current scene where the Mini Program is running.

## Type

```ts
function getScene(): Result
```

## Parameters

### Result

| Type                | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| `number` | The current scene in which the Mini Program is running, value reference scene constants |

## Constants

### Current scene running Mini Program constants

| Constant          | Description                                         | API_LEVEL |
| ----------------- | --------------------------------------------------- | --------- |
| `SCENE_APP`       | In Mini Program                                     | 2.0       |
| `SCENE_WATCHFACE` | In watchface interface                              | 2.0       |
| `SCENE_SETTINGS`  | In the Mini Program configuration or dial edit page | 2.0       |
| `SCENE_AOD`       | In the rest screen screen                           | 2.0       |

## Example

```js

const result = getScene()

if (result === SCENE_APP) {
  console.log('in Mini Program')
}
```

---

## queryPermission

### Import

```js
import { queryPermission } from '@zos/app'
```

### Typings

- Description: Check the authorization status of Mini Program permissions
- API_LEVEL: 3.0
- Example:

```js
import { queryPermission } from '@zos/app'

const result = queryPermission()
console.log(result)
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Check the authorization status of Mini Program permissions.

## Type

```ts
function queryPermission(option: Option): Result
```

## Parameters

### Option

| Property    | Type                               | Required | DefaultValue | Description                                                          | API_LEVEL |
| ----------- | ---------------------------------- | -------- | ------------ | -------------------------------------------------------------------- | --------- |
| permissions | `Array<string>` | Y        | -            | An array of permission strings, with an array length of at least `1` | 3.0       |

### Result

| Type                               | Description                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Array<number>` | Permissions query result array, corresponding to the order of `permissions` array, `0`: not authorized, `1`: unknown permissions, `2`: authorized |

## Example

```js

const result = queryPermission()
console.log(result)
```

---

## requestPermission

### Import

```js
import { requestPermission } from '@zos/app'
```

### Typings

- Description: Dynamic permission application, when querying a dynamic permission has not been authorized, you can use this interface to apply for the relevant permission. Generally, before using the system-related functional interface (such as the interface to enable app services), do the relevant permission check and application, otherwise the functional interface will not be allowed to execute due to the permission issue
- API_LEVEL: 3.0
- Example:

```js
import { requestPermission } from '@zos/app'

const result = requestPermission({
  permissions: ['device:os.bg_service'],
  callback: (result) => {
    console.log(result)
  }
})
console.log(result)
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Dynamic permission application, when querying a dynamic permission has not been authorized, you can use this interface to apply for the relevant permission. Generally, before using the system-related functional interface (such as the interface to enable app services), do the relevant permission check and application, otherwise the functional interface will not be allowed to execute due to the permission issue.

## Type

```ts
function requestPermission(option: Option): Result
```

## Parameters

### Option

| Property    | Type                                                     | Required | DefaultValue | Description                                                          | API_LEVEL |
| ----------- | -------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------- | --------- |
| permissions | `Array<string>`                       | Y        | -            | An array of permission strings, with an array length of at least `1` | 3.0       |
| callback    | `(result: Array<number>) => void` | Y        | -            | Permission request result callback function                          | 3.0       |

### Result

| Type                | Description                                         |
| ------------------- | --------------------------------------------------- |
| `number` | Method result value. See 'result' for a description |

### result

| Value | Type                | Description                                                                                                                                         | API_LEVEL |
| ----- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 0     | `number` | In authorization processing, user interaction will be triggered, and the user will be informed of the authorization result in the callback function | 3.0       |
| 1     | `number` | There are no authorization requests that can be made                                                                                                | 3.0       |
| 2     | `number` | The requested interface is authorized and can be called immediately                                                                                 | 3.0       |

## Example

```js

const result = requestPermission({
  permissions: ['device:os.bg_service'],
  callback: (result) => {
    console.log(result)
  },
})
console.log(result)
```

---

