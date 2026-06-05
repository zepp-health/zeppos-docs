# @zos/notification

## cancel

### Import

```js
import { cancel } from '@zos/notification'
```

### Typings

- Description: Delete the notification message identified by the specified ID in the notification center
- API_LEVEL: 3.0
- Permission: `device:os.notification`
- Example:

```js
import { cancel } from '@zos/notification'

cancel(alarmID)
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Delete the notification message identified by the specified ID in the notification center.

> **ℹ️ Info**
>
> permission code: `device:os.notification`

## Type

```ts
function cancel(alarmId: number | Array<number>): void
```

## Example

```js

cancel(alarmID)
```

---

## getAllNotifications

### Import

```js
import { getAllNotifications } from '@zos/notification'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the notification IDs that have been sent by the current app and are still in the notification center.

> **ℹ️ Info**
>
> permission code: `device:os.notification`

## Type

```ts
function getAllNotifications(): Array<number>
```

## Example

```js

getAllNotifications()
```

---

## notify

### Import

```js
import { notify } from '@zos/notification'
```

### Typings

- Description: Send notifications to the Watch Notification Center
- API_LEVEL: 3.0
- Permission: `device:os.notification`
- Example:

```js
import { notify } from '@zos/notification'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Send notifications to the Watch Notification Center.

> **ℹ️ Info**
>
> permission code: `device:os.notification`

## Type

```ts
function notify(option: Option): Result
```

## Parameters

### Option

| Property | Type                               | Required | DefaultValue   | Description                                                                                                                                                                  | API_LEVEL |
| -------- | ---------------------------------- | -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| title    | `string`                | Y        | -              | Notice title text                                                                                                                                                            | 3.0       |
| content  | `string`                | Y        | -              | Text of the notice                                                                                                                                                           | 3.0       |
| actions  | `Array<Action>` | Y        | -              | Custom button arrays                                                                                                                                                         | 3.0       |
| vibrate  | `number`                | N        | `0` | Specify the vibration effect when the notification center pops up, 0 - default, 1 - beep, 2 - birdsong, 3 - drumbeat, 4 - gentle, 5 - buzz, Only effective for linear motors | 3.0       |

### Action

| Property | Type                | Required | DefaultValue | Description                              | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ---------------------------------------- | --------- |
| text     | `string` | Y        | -            | Button Text                              | 3.0       |
| file     | `string` | Y        | -            | The App Service file to be started       | 3.0       |
| param    | `string` | N        | -            | Parameters passed in during file loading | 3.0       |

### Result

| Type                | Description                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `number` | The result of the notification delivery, returns `0` for delivery failure, the rest of the result indicates the ID of the notification |

## Example

```js

```

---

