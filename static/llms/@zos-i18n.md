# @zos/i18n

## getText

### Import

```js
import { getText } from '@zos/i18n'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the corresponding string from the internationalization resource file (.po) based on the internationalization key.

## Type

```ts
function getText(key: Key): Result
```

## Parameters

### Key

| Type                | Description              |
| ------------------- | ------------------------ |
| `string` | Internationalization key |

### Result

| Type                | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `string` | The string corresponding to the internationalized key |

## Example

```js

getText('name')
```

---

