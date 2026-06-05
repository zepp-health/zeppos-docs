# @zos/app-service

## exit

### Import

```js
import { exit } from '@zos/app-service'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Called in The App Service, it will exit the service and will not affect the foreground page.

> **ℹ️ Info**
>
> permission code: `device:os.bg_service`

## Type

```ts
function exit(): void
```

## Example

```js

exit()
```

---

## getAllAppServices

### Import

```js
import { getAllAppServices } from '@zos/app-service'
```

### Typings

- Description: Get the list of running App services, used to query the service status
- API_LEVEL: 3.0
- Permission: `device:os.bg_service`
- Example:

```js
import { getAllAppServices } from '@zos/app-service'

const serviceList = getAllAppServices()
console.log(serviceList)
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the list of running App services, used to query the service status.

> **ℹ️ Info**
>
> permission code: `device:os.bg_service`

## Type

```ts
function getAllAppServices(): Result
```

## Parameters

### Result

| Type                               | Description                                    |
| ---------------------------------- | ---------------------------------------------- |
| `Array<string>` | Get the list of currently running App services |

## Example

```js

const serviceList = getAllAppServices()
console.log(serviceList)
```

---

## start

### Import

```js
import { start } from '@zos/app-service'
```

### Typings

- Description: Start the specified App service, return the result through the callback function
- API_LEVEL: 3.0
- Permission: `device:os.bg_service`
- Example:

```js
import { start } from '@zos/app-service'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Start the specified App service, return the result through the callback function.

> **ℹ️ Info**
>
> permission code: `device:os.bg_service`

## Type

```ts
function start(option: Option): Result
```

## Parameters

### Option

| Property      | Type                                                      | Required | DefaultValue      | Description                                                                                                                                                                                                          | API_LEVEL |
| ------------- | --------------------------------------------------------- | -------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| file          | `string`                                       | Y        | -                 | The App Service js file must be the one configured in the module app-service in app.json                                                                                                                             | 3.0       |
| param         | `string`                                       | N        | -                 | Parameters passed in when the js file is loaded by the backend service                                                                                                                                               | 3.0       |
| complete_func | `(callbackOption: CallbackOption) => void` | Y        | -                 | Callback function for the completion of the backend service start                                                                                                                                                    | 3.0       |
| reload        | `boolean`                                      | N        | `true` | Whether to persist and automatically restart following system running state changes. System state changes include: system restart, power saving mode entry/exit, system language changes, Mini Program updates, etc. | 4.0       |

### CallbackOption

| Property | Type                 | Description                                                           | API_LEVEL |
| -------- | -------------------- | --------------------------------------------------------------------- | --------- |
| file     | `string`  | App service js file, same as `start` incoming parameters              | 3.0       |
| result   | `boolean` | App service start result, `true` means success, `false` means failure | 3.0       |

### Result

| Type                 | Description                                                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `boolean` | If the return value is `0`, it indicates that the device application service has been successfully started; for the meanings of other values, refer to ERROR_CODE |

### ERROR_CODE

| Value | Type                | Description                                         | API_LEVEL |
| ----- | ------------------- | --------------------------------------------------- | --------- |
| 0     | `number` | Success                                             | 3.0       |
| 1     | `number` | Parameter error                                     | 3.0       |
| 2     | `number` | Service Status Error                                | 3.0       |
| 3     | `number` | No Permission                                       | 3.0       |
| 4     | `number` | Out Of Memory                                       | 3.0       |
| 5     | `number` | Not Supported                                       | 3.0       |
| 6     | `number` | Prohibited                                          | 3.0       |
| 7     | `number` | The number of services has reached the system limit | 3.0       |
| 255   | `number` | Unknown Error                                       | 3.0       |

## Example

```js

```

---

## stop

### Import

```js
import { stop } from '@zos/app-service'
```

### Typings

- Description: Shutdown the specified backend service, called asynchronously, with the shutdown result returned via a callback function
- API_LEVEL: 3.0
- Permission: `device:os.bg_service`
- Example:

```js
import { stop } from '@zos/app-service'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Shutdown the specified backend service, called asynchronously, with the shutdown result returned via a callback function.

> **ℹ️ Info**
>
> permission code: `device:os.bg_service`

## Type

```ts
function stop(option: Option): Result
```

## Parameters

### Option

| Property      | Type                                                      | Required | DefaultValue | Description                                                                          | API_LEVEL |
| ------------- | --------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------ | --------- |
| file          | `string`                                       | Y        | -            | The App Service js file must be the one configured in the service module in app.json | 3.0       |
| complete_func | `(callbackOption: CallbackOption) => void` | Y        | -            | Callback function for the completion of the backend service stop                     | 3.0       |

### CallbackOption

| Property | Type                 | Description                                                          | API_LEVEL |
| -------- | -------------------- | -------------------------------------------------------------------- | --------- |
| file     | `string`  | App service js file, same as `stop` incoming parameters              | 3.0       |
| result   | `boolean` | App service stop result, `true` means success, `false` means failure | 3.0       |

### Result

| Type                 | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `boolean` | If `0` is returned, The App Service is closed successfully |

## Example

```js

```

---

