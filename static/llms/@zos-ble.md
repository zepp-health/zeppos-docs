# @zos/ble

## addListener

### Import

```js
import { addListener } from '@zos/ble'
```

### Typings

- Description: Registering connection status listening callback function
- Example:

```js
import { addListener } from '@zos/ble'

// ...
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Registering connection status listening callback function.

## Type

```ts
function addListener(callback: Callback): void
```

## Parameters

### Callback

| Type                                        | Description                                              |
| ------------------------------------------- | -------------------------------------------------------- |
| `(status?: boolean) => void` | Connection callback function, `status` Connection status |

## Example

```js

// ...
```

---

## connectStatus

### Import

```js
import { connectStatus } from '@zos/ble'
```

### Typings

- Description: Query connection status, `true` means connected, `false` means not connected
- Example:

```js
import { connectStatus } from '@zos/ble'

// ...
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Query connection status, `true` means connected, `false` means not connected.

## Type

```ts
function connectStatus(): boolean
```

## Example

```js

// ...
```

---

## createConnect

### Import

```js
import { createConnect } from '@zos/ble'
```

### Typings

- Description: Create connection
- Example:

```js
import { createConnect } from '@zos/ble'

// ...
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Create connection.

## Type

```ts
function createConnect(callback: Callback): void
```

## Parameters

### Callback

| Type                                                                    | Description                                                                          |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `(index?: number, data?: object, size?: number) => void` | Connection callback function, `index` packet number, `data` data, `size` data length |

## Example

```js

// ...
```

---

## disConnect

### Import

```js
import { disConnect } from '@zos/ble'
```

### Typings

- Description: Disconnect
- Example:

```js
import { disConnect } from '@zos/ble'

// ...
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Disconnect.

## Type

```ts
function disConnect(): void
```

## Example

```js

// ...
```

---

## mstBuildProfile

### Import

```js
import { mstBuildProfile } from '@zos/ble'
```

### Typings

- Description: Creating a Profile connection
- API_LEVEL: 3.0
- Example:

```js
import { mstGetConnIdByRemoteAddr } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Creating a Profile connection.

## Type

```ts
function mstBuildProfile(profile: ProfileObj): Result
```

## Parameters

### ProfileObj

| Property | Type                                    | Required | DefaultValue | Description                                                   | API_LEVEL |
| -------- | --------------------------------------- | -------- | ------------ | ------------------------------------------------------------- | --------- |
| pair     | `boolean`                    | Y        | -            | Whether to pair automatically                                 | 3.0       |
| id       | `number`                     | Y        | -            | Connection ID                                                 | 3.0       |
| profile  | `string`                     | Y        | -            | Profile Name                                                  | 3.0       |
| dev      | `ArrayBuffer`                | Y        | -            | Device MAC address, 6 bytes long, Uint8Array view recommended | 3.0       |
| len      | `number`                     | Y        | -            | `list` array length                                           | 3.0       |
| list     | `Array<ServicesObj>` | Y        | -            | Services list array                                           | 3.0       |

### ServicesObj

| Property | Type                                   | Required | DefaultValue | Description         | API_LEVEL |
| -------- | -------------------------------------- | -------- | ------------ | ------------------- | --------- |
| len      | `number`                    | Y        | -            | `list` array length | 3.0       |
| list     | `Array<ServiceObj>` | Y        | -            | Service array       | 3.0       |

### ServiceObj

| Property   | Type                                          | Required | DefaultValue   | Description                                | API_LEVEL |
| ---------- | --------------------------------------------- | -------- | -------------- | ------------------------------------------ | --------- |
| uuid       | `string`                           | Y        | -              | Service UUID                               | 3.0       |
| permission | `number`                           | N        | `0` | Permission control, default `0` No control | 3.0       |
| len1       | `number`                           | Y        | -              | Characteristic array length                | 3.0       |
| list       | `Array<CharacteristicObj>` | Y        | -              | Characteristic length                      | 3.0       |

### CharacteristicObj

| Property   | Type                                      | Required | DefaultValue   | Description                                | API_LEVEL |
| ---------- | ----------------------------------------- | -------- | -------------- | ------------------------------------------ | --------- |
| uuid       | `string`                       | Y        | -              | Characteristic UUID                        | 3.0       |
| permission | `number`                       | N        | `0` | Permission control, default `0` No control | 3.0       |
| len        | `number`                       | Y        | -              | Descriptor array length                    | 3.0       |
| list       | `Array<DescriptorObj>` | Y        | -              | Descriptor array                           | 3.0       |

### DescriptorObj

| Property   | Type                | Required | DefaultValue   | Description                                | API_LEVEL |
| ---------- | ------------------- | -------- | -------------- | ------------------------------------------ | --------- |
| uuid       | `string` | Y        | -              | Descriptor UUID                            | 3.0       |
| permission | `number` | N        | `0` | Permission control, default `0` No control | 3.0       |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstConnect

### Import

```js
import { mstConnect } from '@zos/ble'
```

### Typings

- Description: Connecting Devices
- API_LEVEL: 3.0
- Example:

```js
import { mstConnect } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Connecting Devices.

## Type

```ts
function mstConnect(deviceAddress: DeviceAddress, callback: Callback): Result
```

## Parameters

### DeviceAddress

| Type                     | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| `ArrayBuffer` | Device MAC address, 6 bytes long, Uint8Array view recommended |

### Callback

| Type                                             | Description                         |
| ------------------------------------------------ | ----------------------------------- |
| `(result: ConnectResult) => void` | Connection result callback function |

### ConnectResult

| Property   | Type                     | Description                                                                                 | API_LEVEL |
| ---------- | ------------------------ | ------------------------------------------------------------------------------------------- | --------- |
| connected  | `number`      | Connection status, `0` - successful connection, `1` - failed connection, `2` - disconnected | 3.0       |
| connect_id | `number`      | The ID of the connection is returned when the connection is successful                      | 3.0       |
| dev_addr   | `ArrayBuffer` | Device MAC address, 6 bytes long, Uint8Array view recommended                               | 3.0       |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstDestroyProfileInstance

### Import

```js
import { mstDestroyProfileInstance } from '@zos/ble'
```

### Typings

- Description: Destroy Profile
- API_LEVEL: 3.0
- Example:

```js
import { mstDestroyProfileInstance } from '@zos/ble'

mstDestroyProfileInstance()
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Destroy Profile.

## Type

```ts
function mstDestroyProfileInstance(profile: Profile): void
```

## Parameters

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

## Example

```js

mstDestroyProfileInstance()
```

---

## mstDisconnect

### Import

```js
import { mstDisconnect } from '@zos/ble'
```

### Typings

- Description: Disconnecting devices
- API_LEVEL: 3.0
- Example:

```js
import { mstDisconnect } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Disconnecting devices.

## Type

```ts
function mstDisconnect(connectId: ConnectId): Result
```

## Parameters

### ConnectId

| Type                | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| `number` | The connection ID returned when the connection is successful using the `mstConnect` API |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstGetConnIdByRemoteAddr

### Import

```js
import { mstGetConnIdByRemoteAddr } from '@zos/ble'
```

### Typings

- Description: Look up the connection Id based on the Peripheral MAC address
- API_LEVEL: 3.0
- Example:

```js
import { mstGetConnIdByRemoteAddr } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Look up the connection Id based on the Peripheral MAC address.

## Type

```ts
function mstGetConnIdByRemoteAddr(deviceAddress: DeviceAddress): Result
```

## Parameters

### DeviceAddress

| Type                     | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| `ArrayBuffer` | Device MAC address, 6 bytes long, Uint8Array view recommended |

### Result

| Type                               | Description                                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `number&#124;undefined` | The result of the function call returns `connectId` for a successful query and `undefined` for a failed query. |

## Example

```js

// ...
```

---

## mstGetProfileInstance

### Import

```js
import { mstGetProfileInstance } from '@zos/ble'
```

### Typings

- Description: Query Profile pointer based on Profile name and connection ID
- API_LEVEL: 3.0
- Example:

```js
import { mstGetProfileInstance } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Query Profile pointer based on Profile name and connection ID.

## Type

```ts
function mstGetProfileInstance(profileName: ProfileName, connectId: ConnectId): Result
```

## Parameters

### ProfileName

| Type                | Description  |
| ------------------- | ------------ |
| `string` | Profile name |

### ConnectId

| Type                | Description                                |
| ------------------- | ------------------------------------------ |
| `number` | The ID returned on a successful connection |

### Result

| Type                               | Description                                                                          |
| ---------------------------------- | ------------------------------------------------------------------------------------ |
| `number&#124;undefined` | A successful search returns the Profile pointer, a failed search returns `undefined` |

## Example

```js

// ...
```

---

## mstOffAllCb

### Import

```js
import { mstOffAllCb } from '@zos/ble'
```

### Typings

- Description: Unregister of all registered Bluetooth-related callback functions
- API_LEVEL: 3.0
- Example:

```js
import { mstOffAllCb } from '@zos/ble'

mstOffAllCb()
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Unregister of all registered Bluetooth-related callback functions.

## Type

```ts
function mstOffAllCb(): void
```

## Example

```js

mstOffAllCb()
```

---

## mstOnCharaNotification

### Import

```js
import { mstOnCharaNotification } from '@zos/ble'
```

### Typings

- Description: Register Characteristic Notification to reach the callback function
- API_LEVEL: 3.0
- Example:

```js
import { mstOnCharaNotification } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register Characteristic Notification to reach the callback function.

## Type

```ts
function mstOnCharaNotification(callback: Callback): Result
```

## Parameters

### Callback

| Type                                                                                | Description                                                  |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `(profile: Profile, uuid: UUID, data: Data, length: Length) => void` | Characteristic Notification arrives at the callback function |

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### UUID

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | Characteristic UUID string |

### Data

| Type                     | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| `ArrayBuffer` | It is recommended to use the Uint8Array view to read the data |

### Length

| Type                | Description |
| ------------------- | ----------- |
| `number` | Data length |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstOnCharaReadComplete

### Import

```js
import { mstOnCharaReadComplete } from '@zos/ble'
```

### Typings

- Description: Register the read Characteristic completion callback function
- API_LEVEL: 3.0
- Example:

```js
import { mstOnCharaReadComplete } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register the read Characteristic completion callback function.

## Type

```ts
function mstOnCharaReadComplete(callback: Callback): Result
```

## Parameters

### Callback

| Type                                                                    | Description                                      |
| ----------------------------------------------------------------------- | ------------------------------------------------ |
| `(profile: Profile, uuid: UUID, status: Status) => void` | Read Characteristic Completion Callback Function |

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### UUID

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | Characteristic UUID string |

### Status

| Type                | Description                   |
| ------------------- | ----------------------------- |
| `number` | Status, `0` indicates success |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstOnCharaValueArrived

### Import

```js
import { mstOnCharaValueArrived } from '@zos/ble'
```

### Typings

- Description: Register to read Characteristic data to the callback function
- API_LEVEL: 3.0
- Example:

```js
import { mstOnCharaValueArrived } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register to read Characteristic data to the callback function.

## Type

```ts
function mstOnCharaValueArrived(callback: Callback): Result
```

## Parameters

### Callback

| Type                                                                                | Description                                       |
| ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| `(profile: Profile, uuid: UUID, data: Data, status: Status) => void` | Read Characteristic data to the callback function |

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### UUID

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | Characteristic UUID string |

### Data

| Type                     | Description                              |
| ------------------------ | ---------------------------------------- |
| `ArrayBuffer` | Reads the data using the Uint8Array view |

### Status

| Type                | Description                   |
| ------------------- | ----------------------------- |
| `number` | Status, `0` indicates success |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstOnCharaWriteComplete

### Import

```js
import { mstOnCharaWriteComplete } from '@zos/ble'
```

### Typings

- Description: Register the Write Characteristic data completion callback function
- API_LEVEL: 3.0
- Example:

```js
import { mstOnCharaWriteComplete } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register the Write Characteristic data completion callback function.

## Type

```ts
function mstOnCharaWriteComplete(callback: Callback): Result
```

## Parameters

### Callback

| Type                                                                    | Description                                            |
| ----------------------------------------------------------------------- | ------------------------------------------------------ |
| `(profile: Profile, uuid: UUID, status: Status) => void` | Write Characteristic Data Completion Callback Function |

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### UUID

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | Characteristic UUID string |

### Status

| Type                | Description                   |
| ------------------- | ----------------------------- |
| `number` | Status, `0` indicates success |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstOnDescValueArrived

### Import

```js
import { mstOnDescValueArrived } from '@zos/ble'
```

### Typings

- Description: Register the Read Descriptor data arrival callback function
- API_LEVEL: 3.0
- Example:

```js
import { mstOnDescValueArrived } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register the Read Descriptor data arrival callback function.

## Type

```ts
function mstOnDescValueArrived(callback: Callback): Result
```

## Parameters

### Callback

| Type                                                                                                       | Description                                   |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `( profile: Profile, uuid: UUID, descUUID: DescUUID, data: Data, status: Status, ) => void` | Read Descriptor data to the callback function |

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### UUID

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | Characteristic UUID string |

### DescUUID

| Type                | Description            |
| ------------------- | ---------------------- |
| `string` | Descriptor UUID string |

### Data

| Type                     | Description                              |
| ------------------------ | ---------------------------------------- |
| `ArrayBuffer` | Reads the data using the Uint8Array view |

### Status

| Type                | Description                   |
| ------------------- | ----------------------------- |
| `number` | Status, `0` indicates success |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstOnDescWriteComplete

### Import

```js
import { mstOnDescWriteComplete } from '@zos/ble'
```

### Typings

- Description: Register Descriptor data write completion callback function
- API_LEVEL: 3.0
- Example:

```js
import { mstOnDescWriteComplete } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register Descriptor data write completion callback function.

## Type

```ts
function mstOnDescWriteComplete(callback: Callback): Result
```

## Parameters

### Callback

| Type                                                                                        | Description                                        |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `(profile: Profile, uuid: UUID, descUUID: DescUUID, status: Status) => void` | Descriptor Data write completion callback function |

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### UUID

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | Characteristic UUID string |

### DescUUID

| Type                | Description            |
| ------------------- | ---------------------- |
| `string` | Descriptor UUID string |

### Status

| Type                | Description                   |
| ------------------- | ----------------------------- |
| `number` | Status, `0` indicates success |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstOnPrepare

### Import

```js
import { mstOnPrepare } from '@zos/ble'
```

### Typings

- Description: Register the prepare operation callback function
- API_LEVEL: 3.0
- Example:

```js
import { mstOnPrepare } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register the prepare operation callback function.

## Type

```ts
function mstOnPrepare(callback: Callback): Result
```

## Parameters

### Callback

| Type                                                        | Description                                      |
| ----------------------------------------------------------- | ------------------------------------------------ |
| `(profile: Profile, status: Status) => void` | Listening to the prepare event callback function |

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### Status

| Type                | Description                   |
| ------------------- | ----------------------------- |
| `number` | Status, `0` indicates success |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstOnServiceChangeBegin

### Import

```js
import { mstOnServiceChangeBegin } from '@zos/ble'
```

### Typings

- Description: Register the Service start change callback function
- API_LEVEL: 3.0
- Example:

```js
import { mstOnServiceChangeBegin } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register the Service start change callback function.

## Type

```ts
function mstOnServiceChangeBegin(callback: Callback): Result
```

## Parameters

### Callback

| Type                                        | Description                            |
| ------------------------------------------- | -------------------------------------- |
| `(profile: Profile) => void` | Service start change callback function |

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstOnServiceChangeEnd

### Import

```js
import { mstOnServiceChangeEnd } from '@zos/ble'
```

### Typings

- Description: Register the Service change end callback function
- API_LEVEL: 3.0
- Example:

```js
import { mstOnServiceChangeEnd } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register the Service change end callback function.

## Type

```ts
function mstOnServiceChangeEnd(callback: Callback): Result
```

## Parameters

### Callback

| Type                                        | Description                          |
| ------------------------------------------- | ------------------------------------ |
| `(profile: Profile) => void` | Service change end callback function |

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstPair

### Import

```js
import { mstPair } from '@zos/ble'
```

### Typings

- Description: Pairing with devices via `connectId`
- API_LEVEL: 3.0
- Example:

```js
import { mstPair } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Pairing with devices via `connectId`.

## Type

```ts
function mstPair(connectId: ConnectId): Result
```

## Parameters

### ConnectId

| Type                | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| `number` | The connection ID returned when the connection is successful using the `mstConnect` API |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstPrepare

### Import

```js
import { mstPrepare } from '@zos/ble'
```

### Typings

- Description: prepare interface
- API_LEVEL: 3.0
- Example:

```js
import { mstPrepare } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

prepare interface.

## Type

```ts
function mstPrepare(profile: Profile): void
```

## Parameters

### Profile

| Type                | Description                                         |
| ------------------- | --------------------------------------------------- |
| `number` | The `profile` pointer returned by `mstBuildProfile` |

## Example

```js

// ...
```

---

## mstReadCharacteristic

### Import

```js
import { mstReadCharacteristic } from '@zos/ble'
```

### Typings

- Description: Read Characteristic information
- API_LEVEL: 3.0
- Example:

```js
import { mstReadCharacteristic } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Read Characteristic information.

## Type

```ts
function mstReadCharacteristic(profile: Profile, uuid: UUID): void
```

## Parameters

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### UUID

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | Characteristic UUID string |

## Example

```js

// ...
```

---

## mstReadDescriptor

### Import

```js
import { mstReadDescriptor } from '@zos/ble'
```

### Typings

- Description: Write characteristic information
- API_LEVEL: 3.0
- Example:

```js
import { mstReadDescriptor } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Write characteristic information.

## Type

```ts
function mstReadDescriptor(profile: Profile, uuid: UUID, descUUID: DescUUID): void
```

## Parameters

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### UUID

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | Characteristic UUID string |

### DescUUID

| Type                | Description            |
| ------------------- | ---------------------- |
| `string` | Descriptor UUID string |

## Example

```js

// ...
```

---

## mstStartScan

### Import

```js
import { mstStartScan } from '@zos/ble'
```

### Typings

- Description: Scan and discover Bluetooth peripherals, which can be filtered according to filter conditions
- API_LEVEL: 3.0
- Example:

```js
import { mstStartScan } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Scan and discover Bluetooth peripherals, which can be filtered according to filter conditions.

## Type

```ts
function mstStartScan(callback: Callback, filter?: Filter): Result
```

## Parameters

### Callback

| Type                                                                              | Description                                  |
| --------------------------------------------------------------------------------- | -------------------------------------------- |
| `(result: ScanResult, filter?: Filter, timeout?: Timeout) => void` | Callback function for receiving scan results |

### ScanResult

| Property           | Type                                    | Description                                                   | API_LEVEL |
| ------------------ | --------------------------------------- | ------------------------------------------------------------- | --------- |
| dev_name           | `string`                     | Device name                                                   | 3.0       |
| dev_addr           | `ArrayBuffer`                | Device MAC address, 6 bytes long, Uint8Array view recommended | 3.0       |
| rssi               | `number`                     | RSSI Signal Strength                                          | 3.0       |
| service_uuid_array | `Array<string>`      | Service UUID array in broadcast data                          | 3.0       |
| service_data_array | `Array<ServiceData>` | Array of Service Data Objects in Broadcast Data               | 3.0       |

### ServiceData

| Property     | Type                     | Description  | API_LEVEL |
| ------------ | ------------------------ | ------------ | --------- |
| uuid         | `string`      | Service UUID | 3.0       |
| service_data | `ArrayBuffer` | Service data | 3.0       |

### Filter

| Property          | Type                | Required | DefaultValue | Description                                        | API_LEVEL |
| ----------------- | ------------------- | -------- | ------------ | -------------------------------------------------- | --------- |
| device_name       | `string` | N        | -            | Device name                                        | 3.0       |
| fuzzy_mode        | `string` | N        | -            | Whether to use fuzzy mode for device name matching | 3.0       |
| service_uuid      | `string` | N        | -            | Service UUID                                       | 3.0       |
| service_data_uuid | `string` | N        | -            | Service data UUID                                  | 3.0       |
| manufacturer_id   | `number` | N        | -            | Manufacturer ID                                    | 3.0       |

### Timeout

| Property   | Type                        | Required | DefaultValue | Description                                                                                    | API_LEVEL |
| ---------- | --------------------------- | -------- | ------------ | ---------------------------------------------------------------------------------------------- | --------- |
| duration   | `number`         | N        | -            | Scanning duration, in seconds. Scanning automatically stops when the given duration is reached | 3.0       |
| on_timeout | `() => void` | N        | -            | Callback function after scanning stops                                                         | 3.0       |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## mstStopScan

### Import

```js
import { mstStopScan } from '@zos/ble'
```

### Typings

- Description: Stop device scanning, used in conjunction with `mstStartScan`
- API_LEVEL: 3.0
- Example:

```js
import { mstStopScan } from '@zos/ble'

mstStopScan()
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Stop device scanning, used in conjunction with `mstStartScan`.

## Type

```ts
function mstStopScan(): Result
```

## Parameters

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

mstStopScan()
```

---

## mstWriteCharacteristic

### Import

```js
import { mstWriteCharacteristic } from '@zos/ble'
```

### Typings

- Description: Write Characteristic information
- API_LEVEL: 3.0
- Example:

```js
import { mstWriteCharacteristic } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Write Characteristic information.

## Type

```ts
function mstWriteCharacteristic(profile: Profile, uuid: UUID, data: Data, length: Length): void
```

## Parameters

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### UUID

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | Characteristic UUID string |

### Data

| Type                     | Description                              |
| ------------------------ | ---------------------------------------- |
| `ArrayBuffer` | Reads the data using the Uint8Array view |

### Length

| Type                | Description |
| ------------------- | ----------- |
| `number` | Data length |

## Example

```js

// ...
```

---

## mstWriteDescriptor

### Import

```js
import { mstWriteDescriptor } from '@zos/ble'
```

### Typings

- Description: Register the Characteristic notification arrival callback function
- API_LEVEL: 3.0
- Example:

```js
import { mstOnCharaNotification } from '@zos/ble'

// ...
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register the Characteristic notification arrival callback function.

## Type

```ts
function mstWriteDescriptor(
  profile: Profile,
  uuid: UUID,
  descUUID: DescUUID,
  data: Data,
  length: Length,
): Result
```

## Parameters

### Profile

| Type                | Description     |
| ------------------- | --------------- |
| `number` | Profile pointer |

### UUID

| Type                | Description                |
| ------------------- | -------------------------- |
| `string` | Characteristic UUID string |

### DescUUID

| Type                | Description            |
| ------------------- | ---------------------- |
| `string` | Descriptor UUID string |

### Data

| Type                     | Description                              |
| ------------------------ | ---------------------------------------- |
| `ArrayBuffer` | Reads the data using the Uint8Array view |

### Length

| Type                | Description |
| ------------------- | ----------- |
| `number` | Data length |

### Result

| Type                 | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `boolean` | The result of the function call, `true` means success, `false` means failure |

## Example

```js

// ...
```

---

## removeListener

### Import

```js
import { removeListener } from '@zos/ble'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Cancel connection status listening callback function.

## Type

```ts
function removeListener(): void
```

## Example

```js

// ...
```

---

## send

### Import

```js
import { send } from '@zos/ble'
```

### Typings

- Description: Send message, `data` data to be sent, `size` length of data to be sent
- Example:

```js
import { send } from '@zos/ble'

// ...
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Send message, `data` data to be sent, `size` length of data to be sent.

## Type

```ts
function send(data: object, size: number): void
```

## Example

```js

// ...
```

---

