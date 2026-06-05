# @zos/utils

## EventBus

### Import

```js
import { EventBus } from '@zos/utils'
```

### Typings

- Description: EventBus is a utility class that provides event publishing/subscribing, an implementation of the publish-subscribe pattern
- Example:

```js
import { EventBus } from '@zos/utils'

const eventBus = new EventBus()

eventBus.on('data', (data) => {
 console.log(data)
})

eventBus.emit('data', 'Hello Zepp OS!')
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

EventBus is a utility class that provides event publishing/subscribing, an implementation of the publish-subscribe pattern.

## Methods

### on

Adds the listener function to the end of the listeners array for the event named eventName

```ts
on(eventName: string, listener: (...args: any[]) => void): void
```

### off

Removes the specified listener from the listener array for the event named eventName

```ts
off(eventName: string, listener: (...args: any[]) => void): void
```

### emit

Triggers the listener functions for the event named eventName

```ts
emit(eventName: string, ...args: any[]): void
```

### once

Adds a one-time listener function for the event named eventName

```ts
once(eventName: string, listener: (...args: any[]) => void): void
```

### clear

Removes all listeners, or those of the specified eventName

```ts
clear(): void
```

### count

Gets the number of registered event listeners corresponding to `eventName`. If `eventName` is not passed, get the number of registered `eventName` types

```ts
count(eventName?: string): number
```

## Example

```js

const eventBus = new EventBus()

eventBus.on('data', (data) => {
  console.log(data)
})

eventBus.emit('data', 'Hello Zepp OS!')
```

---

## assets

### Import

```js
import { assets } from '@zos/utils'
```

### Typings

- Description: Used to handle resource file paths, splice `basePath`. and can pass in parameters for rtl path conversion of images, for RTL adaptation of Mini Program
- Example:

```js
import { assets } from '@zos/utils'

const imagePath = 'zeppos-logo.png'
const assetsPathFunc = assets('img')

console.log(assetsPathFunc(imagePath)) // img/zeppos-logo.png
console.log(assetsPathFunc(imagePath, true)) // img/zeppos-logo@rtl.png
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Used to handle resource file paths, splice `basePath`. and can pass in parameters for rtl path conversion of images, for RTL adaptation of Mini Program.

## Type

```ts
function assets(basePath: BasePath): AssetsPathFunc
```

## Parameters

### BasePath

| Type                | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| `string` | The base path, which will be spliced before the resource file path |

### AssetsPathFunc

| Type                                                       | Description                    |
| ---------------------------------------------------------- | ------------------------------ |
| `(path: Path, isRtl?: IsRtl) => ResultPath` | Resource file path constructor |

### Path

| Type                | Description        |
| ------------------- | ------------------ |
| `string` | Resource file path |

### IsRtl

| Type                 | Description                    |
| -------------------- | ------------------------------ |
| `boolean` | Whether to splice the rtl path |

### ResultPath

| Type                | Description     |
| ------------------- | --------------- |
| `string` | Final file path |

## Example

```js

const imagePath = 'zeppos-logo.png'
const assetsPathFunc = assets('img')

console.log(assetsPathFunc(imagePath)) // img/zeppos-logo.png
console.log(assetsPathFunc(imagePath, true)) // img/zeppos-logo@rtl.png
```

---

## bufferToString

### Import

```js
import { bufferToString } from '@zos/utils'
```

> Start from API_LEVEL `4.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Convert `ArrayBuffer` type to string type.

## Type

```ts
function bufferToString(buffer: InputBuffer): Result
```

## Parameters

### InputBuffer

| Type                     | Description                       |
| ------------------------ | --------------------------------- |
| `ArrayBuffer` | The `ArrayBuffer` to be converted |

### Result

| Type                | Description          |
| ------------------- | -------------------- |
| `string` | The converted string |

## Example

```js

const str = bufferToString(buffer)
```

---

## log

### Import

```js
import { log } from '@zos/utils'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

The `log` instance is used for log printing and has multiple levels of logging methods for easy filtering in the console.

## Methods

### getLogger

Returns a new `log` instance with the `name` tag, which is added when the print log method is executed to make it easier to distinguish

```ts
getLogger(name: string): log
```

### log

Print log level logs

```ts
log(...args: string[]): void
```

### warn

Print warn level logs

```ts
warn(...args: string[]): void
```

### debug

Print debug level logs

```ts
debug(...args: string[]): void
```

### error

Print error level logs

```ts
error(...args: string[]): void
```

### info

Print info level logs

```ts
info(...args: string[]): void
```

## Example

```js

const pageLogger = log.getLogger('page')

pageLogger.log('page created')
pageLogger.error('page error')
```

---

## px

### Import

```js
import { px } from '@zos/utils'
```

### Typings

- Description: Pixel scaling calculation. The `designWidth` of each model in the `targets` object in the `app.json` is used as the base.
- Example:

```js
import { px } from '@zos/utils'

px(480)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Pixel scaling calculation. The `designWidth` of each model in the `targets` object in the `app.json` is used as the base..

## Type

```ts
function px(value: PxValue): Result
```

## Parameters

### PxValue

| Type                | Description                         |
| ------------------- | ----------------------------------- |
| `number` | Pixel values based on `designWidth` |

### Result

| Type                | Description                            |
| ------------------- | -------------------------------------- |
| `number` | Pixel values after scaling calculation |

## Example

```js

px(480)
```

---

## stringToBuffer

### Import

```js
import { stringToBuffer } from '@zos/utils'
```

### Typings

- Description: Convert string type to `ArrayBuffer` type
- API_LEVEL: 4.0
- Example:

```js
import { stringToBuffer } from '@zos/utils'

const buffer = stringToBuffer('Hello Zepp OS')
```

> Start from API_LEVEL `4.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Convert string type to `ArrayBuffer` type.

## Type

```ts
function stringToBuffer(str: InputString): Result
```

## Parameters

### InputString

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | The string to be converted |

### Result

| Type                     | Description                 |
| ------------------------ | --------------------------- |
| `ArrayBuffer` | The converted `ArrayBuffer` |

## Example

```js

const buffer = stringToBuffer('Hello Zepp OS')
```

---

