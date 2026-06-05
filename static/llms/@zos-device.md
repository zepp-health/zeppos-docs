# @zos/device

## Constants

| Constant | Description | API_LEVEL |
|----------|-------------|-----------|
| `SCREEN_SHAPE_SQUARE` | Square Screen | — |
| `SCREEN_SHAPE_ROUND` | Round Screen | — |

## getDeviceInfo

### Import

```js
import { getDeviceInfo } from '@zos/device'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Gets device information.

> **ℹ️ Info**
>
> permission code: `data:os.device.info`

## Type

```ts
function getDeviceInfo(): Result
```

## Parameters

### Result

| Property     | Type                 | Description                                         | API_LEVEL |
| ------------ | -------------------- | --------------------------------------------------- | --------- |
| width        | `number`  | Device screen width                                 | 2.0       |
| height       | `number`  | Device screen height                                | 2.0       |
| screenShape  | `number`  | Screen shape, value refer to screen shape constants | 2.0       |
| deviceName   | `number`  | Device name                                         | 2.0       |
| keyNumber    | `number`  | Number of keys                                      | 2.0       |
| deviceSource | `number`  | Device Plain Numeric Designators                    | 2.0       |
| keyType      | `string`  | Device physical button type                         | 2.0       |
| deviceColor  | `number`  | Device color identification                         | 2.0       |
| bleAddr      | `string`  | BLE address                                         | 3.6       |
| btAddr       | `string`  | Bluetooth address                                   | 3.6       |
| wifiAddr     | `string`  | Wi-Fi address                                       | 3.6       |
| barHeight    | `string`  | Status bar height of square screen devices          | 3.6       |
| hasNFC       | `boolean` | Whether NFC is supported                            | 4.0       |
| hasMic       | `boolean` | Whether microphone is supported                     | 4.0       |
| hasCrown     | `boolean` | Whether crown is supported                          | 4.0       |
| hasBuzzer    | `boolean` | Whether buzzer is supported                         | 4.0       |
| hasSpeaker   | `boolean` | Whether speaker is supported                        | 4.0       |
| uuid         | `string`  | Device unique identifier, 32 bytes in length        | 4.2       |

## Constants

### Screen shape

| Constant              | Description   | API_LEVEL |
| --------------------- | ------------- | --------- |
| `SCREEN_SHAPE_SQUARE` | Square Screen | 2.0       |
| `SCREEN_SHAPE_ROUND`  | Round Screen  | 2.0       |

## Example

```js

const { width, screenShape } = getDeviceInfo()
console.log(width)

if (screenShape === SCREEN_SHAPE_SQUARE) {
  console.log('Square Screen')
}
```

---

## getDiskInfo

### Import

```js
import { getDiskInfo } from '@zos/device'
```

### Typings

- Description: Gets disk information
- Example:

```js
import { getDiskInfo } from '@zos/device'

const { total } = getDiskInfo()
console.log(total)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Gets disk information.

## Type

```ts
function getDiskInfo(): Result
```

## Parameters

### Result

| Property  | Type                | Description                              | API_LEVEL |
| --------- | ------------------- | ---------------------------------------- | --------- |
| total     | `number` | Total Space in bytes                     | 2.0       |
| free      | `number` | Available Space in bytes                 | 2.0       |
| app       | `number` | Space occupied by Mini Programs in bytes | 2.0       |
| watchface | `number` | Space occupied by watchfaces in bytes    | 2.0       |
| music     | `number` | Space occupied by musics in bytes        | 2.0       |
| system    | `number` | Space occupied by system in bytes        | 2.0       |

## Example

```js

const { total } = getDiskInfo()
console.log(total)
```

---

