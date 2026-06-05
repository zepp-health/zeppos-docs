# @zos/fs

## Constants

| Constant | Description | API_LEVEL |
|----------|-------------|-----------|
| `O_RDONLY` | Flag indicating to open a file for read-only access | — |
| `O_WRONLY` | Flag indicating to open a file for write-only access | — |
| `O_RDWR` | Flag indicating to open a file for read-write access | — |
| `O_APPEND` | Flag indicating that data will be appended to the end of the file | — |
| `O_CREAT` | Flag indicating to create the file if it does not already exist | — |
| `O_EXCL` | Flag indicating that opening a file should fail if the `O_CREAT` flag is set and the file already exists | — |
| `O_TRUNC` | Flag indicating that if the file exists and the file is opened successfully for write access, its length shall be truncated to zero | — |

## closeSync

### Import

```js
import { closeSync } from '@zos/fs'
```

### Typings

- Description: Close the file handle synchronously
- Example:

```js
import { openSync, closeSync, O_RDONLY } from '@zos/fs'

const fd = openSync({
  path: 'test.txt',
  flag: O_RDONLY
})
const result = closeSync({
  fd
})

if (result === 0) {
  console.log('file descriptor closed')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Close the file handle synchronously.

## Type

```ts
function closeSync(option: Option): Result
```

### Simplified calling method

```ts
function closeSync(fd: number): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description                                                              | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ------------------------------------------------------------------------ | --------- |
| fd       | `number` | Y        | -            | File handle, returned by the `openSync`, `openAssetsSync` and other APIs | 2.0       |

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

const fd = openSync({
  path: 'test.txt',
  flag: O_RDONLY,
})
const result = closeSync({
  fd,
})

if (result === 0) {
  console.log('file descriptor closed')
}
```

---

## mkdirSync

### Import

```js
import { mkdirSync } from '@zos/fs'
```

### Typings

- Description: Synchronously create a directory in the `/data` directory of the Mini Program
- Example:

```js
import { mkdirSync } from '@zos/fs'

const result = mkdirSync({
  path: 'content',
})

if (result === 0) {
  console.log('mkdirSync success')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Synchronously create a directory in the `/data` directory of the Mini Program.

## Type

```ts
function mkdirSync(option: Option): Result
```

### Simplified calling method

```ts
function mkdirSync(path: string): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description    | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | -------------- | --------- |
| path     | `string` | Y        | -            | Directory path | 2.0       |

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

const result = mkdirSync({
  path: 'content',
})

if (result === 0) {
  console.log('mkdirSync success')
}
```

---

## openAssetsSync

### Import

```js
import { openAssetsSync } from '@zos/fs'
```

### Typings

- Description: Open the file in the `/assets` directory of the Mini Program synchronously and get the file handle
- Constants: `open`
- Example:

```js
import { openSync, O_RDONLY } from '@zos/fs'

const fd = openAssetsSync({
  path: 'test.txt',
  flag: O_RDONLY
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Open the file in the `/assets` directory of the Mini Program synchronously and get the file handle.

## Type

```ts
function openAssetsSync(option: Option): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue          | Description                        | API_LEVEL |
| -------- | ------------------- | -------- | --------------------- | ---------------------------------- | --------- |
| path     | `string` | Y        | -                     | path                               | 2.0       |
| flag     | `number` | N        | `O_RDONLY` | Value refer to file open constants | 2.0       |

### Result

| Type                | Description                 |
| ------------------- | --------------------------- |
| `number` | The numeric file descriptor |

## Constants

### file open constants

| Constant   | Description                                                                                                                         | API_LEVEL |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `O_RDONLY` | Flag indicating to open a file for read-only access                                                                                 | 2.0       |
| `O_WRONLY` | Flag indicating to open a file for write-only access                                                                                | 2.0       |
| `O_RDWR`   | Flag indicating to open a file for read-write access                                                                                | 2.0       |
| `O_APPEND` | Flag indicating that data will be appended to the end of the file                                                                   | 2.0       |
| `O_CREAT`  | Flag indicating to create the file if it does not already exist                                                                     | 2.0       |
| `O_EXCL`   | Flag indicating that opening a file should fail if the `O_CREAT` flag is set and the file already exists                            | 2.0       |
| `O_TRUNC`  | Flag indicating that if the file exists and the file is opened successfully for write access, its length shall be truncated to zero | 2.0       |

## Example

```js

const fd = openAssetsSync({
  path: 'test.txt',
  flag: O_RDONLY,
})
```

---

## openSync

### Import

```js
import { openSync } from '@zos/fs'
```

### Typings

- Description: Open the file in the `/data` directory of the Mini Program synchronously and get the file handle
- Constants: `open`
- Example:

```js
import { openSync, O_RDONLY } from '@zos/fs'

const fd = openSync({
  path: 'test.txt',
  flag: O_RDONLY
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Open the file in the `/data` directory of the Mini Program synchronously and get the file handle.

## Type

```ts
function openSync(option: Option): Result
```

## Parameters

### Option

| Property | Type                 | Required | DefaultValue          | Description                        | API_LEVEL |
| -------- | -------------------- | -------- | --------------------- | ---------------------------------- | --------- |
| path     | `string`  | Y        | -                     | path                               | 2.0       |
| flag     | `number`  | N        | `O_RDONLY` | Value refer to file open constants | 2.0       |
| options  | `Options` | N        | -                     | Other Options                      | 3.0       |

### Options

| Property | Type                | Required | DefaultValue | Description                                                                                                   | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------- | --------- |
| appId    | `number` | N        | -            | Mini Program ID, you can open the file in the `/data` directory of the Mini Program with the corresponding ID | 3.0       |

### Result

| Type                | Description                 |
| ------------------- | --------------------------- |
| `number` | The numeric file descriptor |

## Constants

### file open constants

| Constant   | Description                                                                                                                         | API_LEVEL |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `O_RDONLY` | Flag indicating to open a file for read-only access                                                                                 | 2.0       |
| `O_WRONLY` | Flag indicating to open a file for write-only access                                                                                | 2.0       |
| `O_RDWR`   | Flag indicating to open a file for read-write access                                                                                | 2.0       |
| `O_APPEND` | Flag indicating that data will be appended to the end of the file                                                                   | 2.0       |
| `O_CREAT`  | Flag indicating to create the file if it does not already exist                                                                     | 2.0       |
| `O_EXCL`   | Flag indicating that opening a file should fail if the `O_CREAT` flag is set and the file already exists                            | 2.0       |
| `O_TRUNC`  | Flag indicating that if the file exists and the file is opened successfully for write access, its length shall be truncated to zero | 2.0       |

## Example

```js

const fd = openSync({
  path: 'test.txt',
  flag: O_RDONLY,
})
```

---

## readFileSync

### Import

```js
import { readFileSync } from '@zos/fs'
```

### Typings

- Description: Returns the entire contents of the specified file in the `/data` directory of the Mini Program
- Example:

```js
import { readFileSync } from '@zos/fs'

const contentBuffer = readFileSync({
  path: 'test.txt',
})

const contentString = readFileSync({
  path: 'test.txt',
  options: {
    encoding: 'utf8'
  }
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Returns the entire contents of the specified file in the `/data` directory of the Mini Program.

## Type

```ts
function readFileSync(option: Option): Result
```

## Parameters

### Option

| Property | Type                 | Required | DefaultValue | Description   | API_LEVEL |
| -------- | -------------------- | -------- | ------------ | ------------- | --------- |
| path     | `string`  | Y        | -            | path          | 2.0       |
| options  | `Options` | N        | -            | Other Options | 2.0       |

### Options

| Property | Type                | Required | DefaultValue | Description                                                                   | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ----------------------------------------------------------------------------- | --------- |
| encoding | `string` | N        | -            | When the encoding method is specified, the API returns `string` as the result | 2.0       |

### Result

| Type                                                | Description                                                          |
| --------------------------------------------------- | -------------------------------------------------------------------- |
| `ArrayBuffer&#124;string&#124;undefined` | File content. If `undefined` is returned, the file failed to be read |

## Example

```js

const contentBuffer = readFileSync({
  path: 'test.txt',
})

const contentString = readFileSync({
  path: 'test.txt',
  options: {
    encoding: 'utf8',
  },
})
```

---

## readSync

### Import

```js
import { readSync } from '@zos/fs'
```

### Typings

- Description: Synchronously reads the content from the file specified by the file handle into the given `ArrayBuffer`.
- Example:

```js
import { openSync, readSync, O_RDONLY } from '@zos/fs'

const fd = openSync({
  path: 'test.txt',
  flag: O_RDONLY
})

const buffer = new ArrayBuffer(4)
const result = readSync({
  fd,
  buffer
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Synchronously reads the content from the file specified by the file handle into the given `ArrayBuffer`..

## Type

```ts
function readSync(option: Option): Result
```

## Parameters

### Option

| Property | Type                     | Required | DefaultValue | Description                                                              | API_LEVEL |
| -------- | ------------------------ | -------- | ------------ | ------------------------------------------------------------------------ | --------- |
| fd       | `number`      | Y        | -            | File handle, returned by the `openSync`, `openAssetsSync` and other APIs | 2.0       |
| buffer   | `ArrayBuffer` | Y        | -            | The ArrayBuffer that the data will be written to                         | 2.0       |
| options  | `Options`     | N        | -            | Other Options                                                            | 2.0       |

### Options

| Property | Type                          | Required | DefaultValue                   | Description                                                                                                                                                                           | API_LEVEL |
| -------- | ----------------------------- | -------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| offset   | `number`           | N        | `0`                 | The position in buffer to write the data to                                                                                                                                           | 2.0       |
| length   | `number`           | N        | `buffer.byteLength` | The number of bytes to read, the default is the number of bytes passed into the buffer                                                                                                | 2.0       |
| position | `number&#124;null` | N        | `null`              | Specifies the position from which to start reading from the file. If `position` is `null`, the data will be read from the current file position and the file position will be updated | 2.0       |

### Result

| Type                | Description              |
| ------------------- | ------------------------ |
| `number` | The number of bytes read |

## Example

```js

const fd = openSync({
  path: 'test.txt',
  flag: O_RDONLY,
})

const buffer = new ArrayBuffer(4)
const result = readSync({
  fd,
  buffer,
})
```

---

## readdirSync

### Import

```js
import { readdirSync } from '@zos/fs'
```

### Typings

- Description: Read the directory under the `/data` directory of the Mini Program synchronously
- Example:

```js
import { readdirSync } from '@zos/fs'

const result = readdirSync({
  path: 'content',
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Read the directory under the `/data` directory of the Mini Program synchronously.

## Type

```ts
function readdirSync(option: Option): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description    | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | -------------- | --------- |
| path     | `string` | Y        | -            | Directory path | 2.0       |

### Result

| Type                                              | Description                                                                                           |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Array<string>&#124;undefined` | If `undefined` is returned, the directory does not exist, otherwise an array of filenames is returned |

## Example

```js

const result = readdirSync({
  path: 'content',
})
```

---

## renameSync

### Import

```js
import { renameSync } from '@zos/fs'
```

### Typings

- Description: Rename the files in the `/data` directory of the Mini Program, renaming the files from `oldPath` to `newPath`
- Example:

```js
import { renameSync } from '@zos/fs'

const result = renameSync({
  oldPath: 'test.txt',
  newPath: 'new_test.txt'
})

if (result === 0) {
  console.log('renameSync success')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Rename the files in the `/data` directory of the Mini Program, renaming the files from `oldPath` to `newPath`.

## Type

```ts
function renameSync(option: Option): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ----------- | --------- |
| oldPath  | `string` | Y        | -            | Old path    | 2.0       |
| newPath  | `string` | Y        | -            | New path    | 2.0       |

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

const result = renameSync({
  oldPath: 'test.txt',
  newPath: 'new_test.txt',
})

if (result === 0) {
  console.log('renameSync success')
}
```

---

## rmSync

### Import

```js
import { rmSync } from '@zos/fs'
```

### Typings

- Description: Synchronously delete files in the `/data` directory of the Mini Program
- Example:

```js
import { rmSync } from '@zos/fs'

const result = rmSync({
  path: 'test.txt',
})

if (result === 0) {
  console.log('rmSync success')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Synchronously delete files in the `/data` directory of the Mini Program.

## Type

```ts
function rmSync(option: Option): Result
```

### Simplified calling method

```ts
function rmSync(path: string): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ----------- | --------- |
| path     | `string` | Y        | -            | path        | 2.0       |

### Result

| Type                | Description                              |
| ------------------- | ---------------------------------------- |
| `number` | If `0` is returned, success is indicated |

## Example

```js

const result = rmSync({
  path: 'test.txt',
})

if (result === 0) {
  console.log('rmSync success')
}
```

---

## statAssetsSync

### Import

```js
import { statAssetsSync } from '@zos/fs'
```

### Typings

- Description: Synchronously gets information about the files in the Mini Program `/assets` directory
- Example:

```js
import { statAssetsSync } from '@zos/fs'

const result = statAssetsSync({
  path: 'test.txt',
})

if (result) {
  const { size } = result
  console.log(size)
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Synchronously gets information about the files in the Mini Program `/assets` directory.

## Type

```ts
function statAssetsSync(option: Option): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ----------- | --------- |
| path     | `string` | Y        | -            | path        | 2.0       |

### Result

| Type                               | Description                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `FSStat&#124;undefined` | If `undefined` is returned, the target file does not exist, otherwise the file information object is returned |

### FSStat

| Property | Type                | Description                   | API_LEVEL |
| -------- | ------------------- | ----------------------------- | --------- |
| size     | `number` | The size of the file in bytes | 2.0       |

## Example

```js

const result = statAssetsSync({
  path: 'test.txt',
})

if (result) {
  const { size } = result
  console.log(size)
}
```

---

## statSync

### Import

```js
import { statSync } from '@zos/fs'
```

### Typings

- Description: Get information about the files in the `/data` directory of the Mini Program synchronously
- Example:

```js
import { statSync } from '@zos/fs'

const result = statSync({
  path: 'test.txt',
})

if (result) {
  const { size } = result
  console.log(size)
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get information about the files in the `/data` directory of the Mini Program synchronously.

## Type

```ts
function statSync(option: Option): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ----------- | --------- |
| path     | `string` | Y        | -            | path        | 2.0       |

### Result

| Type                               | Description                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `FSStat&#124;undefined` | If `undefined` is returned, the target file does not exist, otherwise the file information object is returned |

### FSStat

| Property | Type                | Description                   | API_LEVEL |
| -------- | ------------------- | ----------------------------- | --------- |
| size     | `number` | The size of the file in bytes | 2.0       |

## Example

```js

const result = statSync({
  path: 'test.txt',
})

if (result) {
  const { size } = result
  console.log(size)
}
```

---

## writeFileSync

### Import

```js
import { writeFileSync } from '@zos/fs'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Synchronously write data to a file in the `/data` directory of the Mini Program, replacing the file if it already exists, or creating a new file if it doesn't.

## Type

```ts
function writeFileSync(option: Option): void
```

## Parameters

### Option

| Property | Type                                               | Required | DefaultValue | Description                           | API_LEVEL |
| -------- | -------------------------------------------------- | -------- | ------------ | ------------------------------------- | --------- |
| path     | `string&#124;number`                    | Y        | -            | File path or file descriptor          | 2.0       |
| data     | `ArrayBuffer&#124;string&#124;DataView` | Y        | -            | Data to be written to the target file | 2.0       |
| options  | `Options`                               | N        | -            | Other Options                         | 2.0       |

### Options

| Property | Type                | Required | DefaultValue      | Description                                                               | API_LEVEL |
| -------- | ------------------- | -------- | ----------------- | ------------------------------------------------------------------------- | --------- |
| encoding | `string` | N        | `utf8` | If the `data` format is `string`, you need to specify the encoding method | 2.0       |

## Example

```js

const buffer = new ArrayBuffer(4)
writeFileSync({
  path: 'test.txt',
  data: buffer,
})

writeFileSync({
  path: 'content.txt',
  data: 'some content...',
  options: {
    encoding: 'utf8',
  },
})
```

---

## writeSync

### Import

```js
import { writeSync } from '@zos/fs'
```

### Typings

- Description: Synchronously write ArrayBuffer to the file specified by fd
- Example:

```js
import { openSync, writeSync, O_RDWR, O_CREAT } from '@zos/fs'

const fd = openSync({
  path: 'test.txt',
  flag: O_RDWR | O_CREAT
})

const buffer = new ArrayBuffer(4)
const result = writeSync({
  fd,
  buffer
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Synchronously write ArrayBuffer to the file specified by fd.

## Type

```ts
function writeSync(option: Option): Result
```

## Parameters

### Option

| Property | Type                     | Required | DefaultValue | Description                                                              | API_LEVEL |
| -------- | ------------------------ | -------- | ------------ | ------------------------------------------------------------------------ | --------- |
| fd       | `number`      | Y        | -            | File handle, returned by the `openSync`, `openAssetsSync` and other APIs | 2.0       |
| buffer   | `ArrayBuffer` | Y        | -            | The buffer that the data will be written to                              | 2.0       |
| options  | `Options`     | N        | -            | Other Options                                                            | 2.0       |

### Options

| Property | Type                          | Required | DefaultValue                   | Description                                                                                                                                                                                  | API_LEVEL |
| -------- | ----------------------------- | -------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| offset   | `number`           | N        | `0`                 | Based on first address offset in ArrayBuffer to write the data                                                                                                                               | 2.0       |
| length   | `number`           | N        | `buffer.byteLength` | The number of bytes to write, the default is the length of the incoming buffer                                                                                                               | 2.0       |
| position | `number&#124;null` | N        | `null`              | Position refers to the offset from the beginning of the file where this data should be written. If position is 'null', the data will be written at the and the file position will be updated | 2.0       |

### Result

| Type                | Description                 |
| ------------------- | --------------------------- |
| `number` | The number of bytes written |

## Example

```js

const fd = openSync({
  path: 'test.txt',
  flag: O_RDWR | O_CREAT,
})

const buffer = new ArrayBuffer(4)
const result = writeSync({
  fd,
  buffer,
})
```

---

