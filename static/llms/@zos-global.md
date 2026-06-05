# @zos/global

## App

### Import

```js
import { App } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register the Mini Program, specifying the Mini Program's lifecycle callbacks, etc. `App()` must be called in `app.js`, and can only be called once.

## Type

```ts
function App(option: Option): Result
```

## Parameters

### Option

| Property   | Type                                       | Required | DefaultValue | Description                                                                                          | API_LEVEL |
| ---------- | ------------------------------------------ | -------- | ------------ | ---------------------------------------------------------------------------------------------------- | --------- |
| globalData | `object`                        | N        | -            | Mounted data objects on App instances that can be used to store the global state of the Mini Program | 2.0       |
| onCreate   | `(params?: string) => void` | N        | -            | Mounted data objects on App instances that can be used to store the global state of the Mini Program | 2.0       |
| onDestroy  | `() => void`                | N        | -            | The `onDestroy` lifecycle function is triggered when the Mini Program is destroyed                   | 2.0       |

### Result

| Type                 | Description  |
| -------------------- | ------------ |
| `unknown` | App instance |

## Example

```js title="app.js"
App({
  globalData: {
    text: 'Hello Zepp OS',
  },
  onCreate() {
    console.log('onCreate')
    console.log(this.globalData.text)
  },
  onDestroy() {
    console.log('onDestroy')
  },
})
```

---

## AppService

### Import

```js
import { AppService } from '@zos/global'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register an App Service in the Mini Program, specify the lifecycle callback for the current App Service, etc. Each App Service file must call the `AppService()` constructor only once.

> **ℹ️ Info**
>
> permission code: `device:os.bg_service`

## Type

```ts
function AppService(option: Option): Result
```

## Parameters

### Option

| Property  | Type                                       | Required | DefaultValue | Description                                                                                                                                           | API_LEVEL |
| --------- | ------------------------------------------ | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| state     | `object`                        | N        | -            | A data object mounted on the appService instance that can be used to store the current state of the service                                           | 3.0       |
| onInit    | `(params?: string) => void` | N        | -            | This function is triggered when the service is started. If the service is started with params, the params string can be obtained in the onInit method | 3.0       |
| onDestroy | `() => void`                | N        | -            | The `onDestroy` lifecycle function is triggered when the service is destroyed                                                                         | 3.0       |

### Result

| Type                 | Description         |
| -------------------- | ------------------- |
| `unknown` | AppService instance |

## Example

```js title="appService.js"
AppService({
  state: {
    text: 'Hello Zepp OS',
  },
  onInit() {
    console.log('onInit')
  },
})
```

---

## AppWidget

### Import

```js
import { AppWidget } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register AppWidget, specify the lifecycle callback for the current AppWidget, etc. Each AppWidget file must call the `AppWidget()` constructor only once.

## Type

```ts
function AppWidget(option: Option): Result
```

## Parameters

### Option

| Property  | Type                                       | Required | DefaultValue | Description                                                                                                | API_LEVEL |
| --------- | ------------------------------------------ | -------- | ------------ | ---------------------------------------------------------------------------------------------------------- | --------- |
| state     | `object`                        | N        | -            | A data object mounted on a AppWidget instance that can be used to store the state of the current AppWidget | 2.0       |
| onInit    | `(params?: string) => void` | N        | -            | It is triggered once per AppWidget and can be used to initialize the AppWidget state                       | 2.0       |
| build     | `(params?: string) => void` | N        | -            | Triggered after `onInit` execution completes, recommended for UI drawing in the `build` lifecycle          | 2.0       |
| onResume  | `() => void`                | N        | -            | Triggered when the screen focus is on this AppWidget                                                       | 2.0       |
| onPause   | `() => void`                | N        | -            | Triggered when the screen focus leaves this AppWidget                                                      | 2.0       |
| onDestroy | `() => void`                | N        | -            | The `onDestroy` lifecycle function is triggered when the AppWidget is destroyed                            | 2.0       |

### Result

| Type                 | Description        |
| -------------------- | ------------------ |
| `unknown` | AppWidget instance |

## Example

```js title="appWidget.js"
AppWidget({
  state: {
    text: 'Hello Zepp OS',
  },
  onInit() {
    console.log('onInit')
  },
  build() {
    console.log('build')
    console.log(this.state.text)
  },
})
```

---

## Buffer

### Import

```js
import { Buffer } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Buffer, Reference Node.js https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html.

## Example

```js
Buffer.from('Hello Zepp OS')
```

---

## DataWidget

### Import

```js
import { DataWidget } from '@zos/global'
```

> Start from API_LEVEL `3.6` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register DataWidget, specify the lifecycle callback for the current DataWidget, etc. Each DataWidget file must call the `DataWidget()` constructor only once.

## Type

```ts
function DataWidget(option: Option): Result
```

## Parameters

### Option

| Property  | Type                                       | Required | DefaultValue | Description                                                                                                  | API_LEVEL |
| --------- | ------------------------------------------ | -------- | ------------ | ------------------------------------------------------------------------------------------------------------ | --------- |
| state     | `object`                        | N        | -            | A data object mounted on a DataWidget instance that can be used to store the state of the current DataWidget | 3.6       |
| onInit    | `(params?: string) => void` | N        | -            | It is triggered once per DataWidget and can be used to initialize the DataWidget state                       | 3.6       |
| build     | `(params?: string) => void` | N        | -            | Triggered after `onInit` execution completes, recommended for UI drawing in the `build` lifecycle            | 3.6       |
| onResume  | `() => void`                | N        | -            | Triggered when the screen focus is on this DataWidget                                                        | 3.6       |
| onPause   | `() => void`                | N        | -            | Triggered when the screen focus leaves this DataWidget                                                       | 3.6       |
| onDestroy | `() => void`                | N        | -            | The `onDestroy` lifecycle function is triggered when the DataWidget is destroyed                             | 3.6       |

### Result

| Type                | Description         |
| ------------------- | ------------------- |
| `object` | DataWidget instance |

## Example

```js title="DataWidget.js"
DataWidget({
  state: {
    text: 'Hello Zepp OS',
  },
  onInit() {
    console.log('onInit')
  },
  build() {
    console.log('build')
    console.log(this.state.text)
  },
})
```

---

## Page

### Import

```js
import { Page } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register a page in the Mini Program, specify the lifecycle callback for the current page, etc. Each page file must call the `Page()` constructor only once.

## Type

```ts
function Page(option: Option): Result
```

## Parameters

### Option

| Property  | Type                                       | Required | DefaultValue | Description                                                                                                                                                                                                                   | API_LEVEL |
| --------- | ------------------------------------------ | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| state     | `object`                        | N        | -            | A data object mounted on a page instance that can be used to store the state of the current page                                                                                                                              | 2.0       |
| onInit    | `(params?: string) => void` | N        | -            | It is triggered once per page and can be used to initialize the page state. If the page is opened by the relevant method in the router module with params parameters, the params string can be retrieved in the onInit method | 2.0       |
| build     | `(params?: string) => void` | N        | -            | Triggered after `onInit` execution completes, recommended for UI drawing in the `build` lifecycle                                                                                                                             | 2.0       |
| onDestroy | `() => void`                | N        | -            | The `onDestroy` lifecycle function is triggered when the page is destroyed                                                                                                                                                    | 2.0       |

### Result

| Type                 | Description   |
| -------------------- | ------------- |
| `unknown` | Page instance |

## Example

```js title="page.js"
Page({
  state: {
    text: 'Hello Zepp OS',
  },
  onInit() {
    console.log('onInit')
  },
  build() {
    console.log('build')
    console.log(this.state.text)
  },
})
```

---

## SecondaryWidget

### Import

```js
import { SecondaryWidget } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register SecondaryWidget, specify the lifecycle callback for the current SecondaryWidget, etc. Each SecondaryWidget file must call the `SecondaryWidget()` constructor only once.

## Type

```ts
function SecondaryWidget(option: Option): Result
```

## Parameters

### Option

| Property  | Type                                       | Required | DefaultValue | Description                                                                                                            | API_LEVEL |
| --------- | ------------------------------------------ | -------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- | --------- |
| state     | `object`                        | N        | -            | A data object mounted on a SecondaryWidget instance that can be used to store the state of the current SecondaryWidget | 2.0       |
| onInit    | `(params?: string) => void` | N        | -            | It is triggered once per SecondaryWidget and can be used to initialize the SecondaryWidget state                       | 2.0       |
| build     | `(params?: string) => void` | N        | -            | Triggered after `onInit` execution completes, recommended for UI drawing in the `build` lifecycle                      | 2.0       |
| onResume  | `() => void`                | N        | -            | Triggered when the screen focus is on this SecondaryWidget                                                             | 2.0       |
| onPause   | `() => void`                | N        | -            | Triggered when the screen focus leaves this SecondaryWidget                                                            | 2.0       |
| onDestroy | `() => void`                | N        | -            | The `onDestroy` lifecycle function is triggered when the SecondaryWidget is destroyed                                  | 2.0       |

### Result

| Type                 | Description              |
| -------------------- | ------------------------ |
| `unknown` | SecondaryWidget instance |

## Example

```js title="secondaryWidget.js"
SecondaryWidget({
  state: {
    text: 'Hello Zepp OS',
  },
  onInit() {
    console.log('onInit')
  },
  build() {
    console.log('build')
    console.log(this.state.text)
  },
})
```

---

## clearInterval

### Import

```js
import { clearInterval } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Cancel the timer registered by `setInterval`.

## Type

```ts
function clearInterval(intervalID: IntervalID): void
```

## Parameters

### IntervalID

| Type                | Description  |
| ------------------- | ------------ |
| `number` | Timer number |

## Example

```js
const intervalID = setInterval(() => {
  console.log('Hello Zepp OS')
}, 1000)

clearInterval(intervalID)
```

---

## clearTimeout

### Import

```js
import { clearTimeout } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Cancel the timer registered by `setTimeout`.

## Type

```ts
function clearTimeout(timeoutID: TimeoutID): void
```

## Parameters

### TimeoutID

| Type                | Description  |
| ------------------- | ------------ |
| `number` | Timer number |

## Example

```js
const timeoutID = setTimeout(() => {
  console.log('Hello Zepp OS')
}, 1000)

clearTimeout(timeoutID)
```

---

## console

### Import

```js
import { console } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Console Print Log.

## Methods

### log

Print log level logs with any number of parameters. Each log is limited in length and will be truncated if it is exceeded. To print the full content, the developer needs to print the content in multiple times

```ts
log(...data: any[]): void
```

## Example

```js
console.log('Hello Zepp OS')
```

---

## getApp

### Import

```js
import { getApp } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the app instance object.

## Type

```ts
function getApp(): Result
```

## Parameters

### Result

| Property  | Type                 | Description           | API_LEVEL |
| --------- | -------------------- | --------------------- | --------- |
| \_options | `Options` | app instance property | 2.0       |

### Options

| Property   | Type                | Description                           | API_LEVEL |
| ---------- | ------------------- | ------------------------------------- | --------- |
| globalData | `object` | mounted data objects on app instances | 2.0       |

## Example

```js
App({
  globalData: {
    text: 'Hello Zepp OS',
  },
  onCreate() {
    console.log('onCreate')
    console.log(this.globalData.text)
  },
  onDestroy() {
    console.log('onDestroy')
  },
})

const app = getApp()
console.log(app._options.globalData.text)
```

---

## getCurrentPage

### Import

```js
import { getCurrentPage } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the page instance object.

## Type

```ts
function getCurrentPage(): Result
```

## Parameters

### Result

| Property  | Type                 | Description            | API_LEVEL |
| --------- | -------------------- | ---------------------- | --------- |
| \_options | `Options` | page instance property | 2.0       |

### Options

| Property | Type                | Required | DefaultValue | Description                            | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | -------------------------------------- | --------- |
| state    | `object` | N        | -            | mounted data objects on page instances | 2.0       |

## Example

```js title="page.js"
Page({
  state: {
    text: 'Hello Zepp OS',
  },
  onInit() {
    console.log('onInit')
  },
  build() {
    console.log('build')
    console.log(this.state.text)
  },
})

const page = getCurrentPage()
console.log(page._options.state.text)
```

---

## setInterval

### Import

```js
import { setInterval } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Repeatedly call a function with a fixed time interval between each call.

## Type

```ts
function setInterval(callback: Callback, delay: Delay): IntervalID
```

## Parameters

### Callback

| Type                           | Description                          |
| ------------------------------ | ------------------------------------ |
| `() => unknown` | Repeatedly called callback functions |

### Delay

| Type                | Description                                       |
| ------------------- | ------------------------------------------------- |
| `number` | Time interval between each callback function call |

### IntervalID

| Type                | Description  |
| ------------------- | ------------ |
| `number` | Timer number |

## Example

```js
setInterval(() => {
  console.log('Hello Zepp OS')
}, 1000)
```

---

## setTimeout

### Import

```js
import { setTimeout } from '@zos/global'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set a timer and execute the registered callback function after the timer expires.

## Type

```ts
function setTimeout(callback: Callback, delay?: Delay): TimeoutID
```

## Parameters

### Callback

| Type                           | Description                                         |
| ------------------------------ | --------------------------------------------------- |
| `() => unknown` | Callback functions executed after the timer expires |

### Delay

| Type                | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `number` | The number of milliseconds to delay the function, default 1ms |

### TimeoutID

| Type                | Description  |
| ------------------- | ------------ |
| `number` | Timer number |

## Example

```js
setTimeout(() => {
  console.log('Hello Zepp OS')
}, 1000)
```

---

