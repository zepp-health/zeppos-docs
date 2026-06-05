# @zos/transfer-file

## TransferFile

### Import

```js
import { TransferFile } from '@zos/transfer-file'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

File Transfer.

## Methods

### getInbox

Get the receiving file object

```ts
getInbox(): Inbox
```

#### Inbox

| Property    | Type                                                                           | Description                                            | API_LEVEL |
| ----------- | ------------------------------------------------------------------------------ | ------------------------------------------------------ | --------- |
| getNextFile | `() => FileObject`                                              | Return `FileObject` to receive the file object         | 3.0       |
| on          | `(eventName: InboxEventName, callback: () => void) => void` | Listening event, event name reference `InboxEventName` | 3.0       |

#### FileObject

| Property   | Type                                                                                                | Description                                                                  | API_LEVEL |
| ---------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------- |
| sessionId  | `number`                                                                                 | Session identifier for transferring files                                    | 3.0       |
| fileName   | `string`                                                                                 | File name                                                                    | 3.0       |
| filePath   | `string`                                                                                 | File path                                                                    | 3.0       |
| params     | `object`                                                                                 | User passed parameters                                                       | 3.0       |
| fileSize   | `number`                                                                                 | File size                                                                    | 3.0       |
| readyState | `ReceiveFileState`                                                                       | For the status value of the received file, see 'ReceiveFileState'            | 3.0       |
| cancel     | `() => void`                                                                         | Cancel a file transfer task                                                  | 3.0       |
| on         | `(eventName: FileEventName, callback: ChangeCallback&#124;ProgressCallback) => void` | Listen to the file transfer task event, event name reference `FileEventName` | 3.0       |

#### InboxEventName

| Value   | Type                | Description                                 | API_LEVEL |
| ------- | ------------------- | ------------------------------------------- | --------- |
| NEWFILE | `string` | The event that just received the file       | 3.0       |
| FILE    | `string` | The event that completed receiving the file | 3.0       |

#### ReceiveFileState

| Value        | Type                | Description  | API_LEVEL |
| ------------ | ------------------- | ------------ | --------- |
| pending      | `string` | Pending      | 3.0       |
| transferring | `string` | Transferring | 3.0       |
| transferred  | `string` | Transferred  | 3.0       |
| error        | `string` | Error        | 3.0       |
| canceled     | `string` | Canceled     | 3.0       |

#### FileEventName

| Value    | Type                | Description                                                                                                         | API_LEVEL |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- |
| change   | `string` | The event name that occurs when `readyState` changes state, corresponding to the `ChangeCallback` callback function | 3.0       |
| progress | `string` | The event name when the file transfer progress changes, corresponding to the `ProgressCallback` callback function   | 3.0       |

#### ChangeCallback

| Type                                          | Description                                              |
| --------------------------------------------- | -------------------------------------------------------- |
| `(event: ChangeEvent) => void` | The callback that occurs when `readyState` changes state |

#### ChangeEvent

| Property  | Type                             | Description                                       | API_LEVEL |
| --------- | -------------------------------- | ------------------------------------------------- | --------- |
| type      | `'readyStateChanged'` | Event type, value is ` readyStateChanged` string  | 3.0       |
| date      | `ChangeEventData`     | Event data object, see `ChangeEventData` for type | 3.0       |
| timestamp | `number`              | UTC timestamp of the event, in milliseconds       | 3.0       |

#### ChangeEventData

| Property   | Type                | Description               | API_LEVEL |
| ---------- | ------------------- | ------------------------- | --------- |
| readyState | `string` | File transfer task status | 3.0       |

#### ProgressCallback

| Type                                            | Description                                                 |
| ----------------------------------------------- | ----------------------------------------------------------- |
| `(event: ProgressEvent) => void` | Event callback function when file transfer progress changes |

#### ProgressEvent

| Property  | Type                           | Description                                         | API_LEVEL |
| --------- | ------------------------------ | --------------------------------------------------- | --------- |
| type      | `'progress'`        | Event type, value is `progress` string              | 3.0       |
| date      | `ProgressEventData` | Event data object, see `ProgressEventData` for type | 3.0       |
| timestamp | `number`            | UTC timestamp at the time of the event              | 3.0       |

#### ProgressEventData

| Property   | Type                | Description                               | API_LEVEL |
| ---------- | ------------------- | ----------------------------------------- | --------- |
| fileSize   | `number` | File size in bytes                        | 3.0       |
| loadedSize | `number` | The size of the transferred file in bytes | 3.0       |

### getOutbox

Get the sending file object

```ts
getOutbox(): Outbox
```

#### Outbox

| Property    | Type                                                                        | Description                                                                                                                                                                                                       | API_LEVEL |
| ----------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| enqueueFile | `(fileName: string, params?: object) => getInbox.FileObject` | Returns `FileObject`, `fileName` is the path to the file, and `params` is a customized file transfer object, retrieved from `FileObject` on the receiving end. The `getInbox.FileObject` type is referenced above | 3.0       |

## Example

```js
// Receiving File

const transferFile = new TransferFile()
const inbox = transferFile.getInbox()

Page({
  onInit() {
    inbox.on('NEWFILE', function() {
      const fileObject = inbox.getNextFile()
      fileObject.on('progress', (event) => {
        console.log("progress total size",  event.data.fileSize)
        console.log("progress total size",  event.data.loadedSize)
      })

      fileObject.on('change', (event) => {
        if (event.data.readyState === 'transferred') {
          console.log('transfered file success')
        } else (event.data.readyState === 'error') {
          console.log('error')
        }
      })
    })
  }
})

// Send File

const transferFile = new TransferFile()
const outbox = transferFile.getOutbox()

Page({
  onInit() {
    const fileObject = outbox.enqueueFile("assets://logo.png", { test: 1})

    fileObject.on('progress', (event) => {
      console.log("progress total size",  event.data.fileSize)
      console.log("progress total size",  event.data.loadedSize)
    })

    file.on('change', (event) => {
      if (event.data.readyState === 'transferred') {
        console.log('transfered file success')
      } else (event.data.readyState === 'error') {
        console.log('error')
      }
    })
  }
})
```

---

