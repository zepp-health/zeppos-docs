# @zos/settings

## Constants

| Constant | Description | API_LEVEL |
|----------|-------------|-----------|
| `DATE_FORMAT_YMD` | year-month-day | — |
| `DATE_FORMAT_DMY` | day-month-year | — |
| `DATE_FORMAT_MDY` | month-day-year | — |
| `TIME_FORMAT_12` | 12-hour format | 2.1 |
| `TIME_FORMAT_24` | 24-hour format | 2.1 |
| `DISTANCE_UNIT_METRIC` | metric system | — |
| `DISTANCE_UNIT_IMPERIAL` | imperial system | — |
| `WEIGHT_UNIT_KILOGRAM` | Kilogram | — |
| `WEIGHT_UNIT_JIN` | Jin | — |
| `WEIGHT_UNIT_POUND` | Pound | — |
| `WEIGHT_UNIT_STONE` | Stone | — |
| `TEMPERATURE_UNIT_CENTIGRADE` | Celsius temperature | — |
| `TEMPERATURE_UNIT_FAHRENHEIT` | Fahrenheit temperature | — |

## getDateFormat

### Import

```js
import { getDateFormat } from '@zos/settings'
```

### Typings

- Description: Get the current system date format
- Constants: `dateFormat`
- Example:

```js
import { getDateFormat, DATE_FORMAT_YMD } from '@zos/settings'

const currentDateFormat = getDateFormat()

if (currentDateFormat === DATE_FORMAT_YMD) {
  console.log('date format is YYYY-MM-DD')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the current system date format.

## Type

```ts
function getDateFormat(): Result
```

## Parameters

### Result

| Type                | Description                                       |
| ------------------- | ------------------------------------------------- |
| `number` | Date format, value refer to date format constants |

## Constants

### Date format constants

| Constant          | Description    | API_LEVEL |
| ----------------- | -------------- | --------- |
| `DATE_FORMAT_YMD` | year-month-day | 2.0       |
| `DATE_FORMAT_DMY` | day-month-year | 2.0       |
| `DATE_FORMAT_MDY` | month-day-year | 2.0       |

## Example

```js

const currentDateFormat = getDateFormat()

if (currentDateFormat === DATE_FORMAT_YMD) {
  console.log('date format is YYYY-MM-DD')
}
```

---

## getDistanceUnit

### Import

```js
import { getDistanceUnit } from '@zos/settings'
```

### Typings

- Description: Returns whether the current distance unit is metric or imperial. This method is to get the units set by the user, not to represent the units of the data, the data units refer to the interface description of the corresponding data
- Constants: `distanceUnit`
- Example:

```js
import { getDistanceUnit, DISTANCE_UNIT_METRIC } from '@zos/settings'

const distanceUnit = getDistanceUnit()

if (distanceUnit === DISTANCE_UNIT_METRIC) {
  console.log('metric')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Returns whether the current distance unit is metric or imperial. This method is to get the units set by the user, not to represent the units of the data, the data units refer to the interface description of the corresponding data.

## Type

```ts
function getDistanceUnit(): Result
```

## Parameters

### Result

| Type                | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `number` | Distance units, value refer to distance unit constants |

## Constants

### Distance unit constants

| Constant                 | Description     | API_LEVEL |
| ------------------------ | --------------- | --------- |
| `DISTANCE_UNIT_METRIC`   | metric system   | 2.0       |
| `DISTANCE_UNIT_IMPERIAL` | imperial system | 2.0       |

## Example

```js

const distanceUnit = getDistanceUnit()

if (distanceUnit === DISTANCE_UNIT_METRIC) {
  console.log('metric')
}
```

---

## getLanguage

### Import

```js
import { getLanguage } from '@zos/settings'
```

### Typings

- Description: Get the current system language setting
- Example:

```js
import { getLanguage } from '@zos/settings'

const languageCode = getLanguage()
console.log(languageCode)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the current system language setting.

## Type

```ts
function getLanguage(): Result
```

## Parameters

### Result

| Type                | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `number` | Please see the Multilingual Mapping for more details |

## Example

```js

const languageCode = getLanguage()
console.log(languageCode)
```

---

## getSleepTarget

### Import

```js
import { getSleepTarget } from '@zos/settings'
```

### Typings

- Description: Get the sleep target set by the user
- Example:

```js
import { getSleepTarget } from '@zos/settings'

const sleepTarget = getSleepTarget()
console.log(sleepTarget)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the sleep target set by the user.

## Type

```ts
function getSleepTarget(): Result
```

## Parameters

### Result

| Type                | Description                                       |
| ------------------- | ------------------------------------------------- |
| `number` | User-set sleep target, default is `0`, in minutes |

## Example

```js

const sleepTarget = getSleepTarget()
console.log(sleepTarget)
```

---

## getSystemInfo

### Import

```js
import { getSystemInfo } from '@zos/settings'
```

### Typings

- Description: Get system related information
- API_LEVEL: 2.1
- Example:

```js
import { getSystemInfo } from '@zos/settings'

const { minAPI } = getSystemInfo()
console.log(minAPI)
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get system related information.

## Type

```ts
function getSystemInfo(): Result
```

## Parameters

### Result

| Property        | Type                | Description             | API_LEVEL |
| --------------- | ------------------- | ----------------------- | --------- |
| osVersion       | `string` | Zepp OS System Version  | 2.1       |
| firmwareVersion | `string` | Device firmware version | 2.1       |
| minAPI          | `string` | API_LEVEL               | 2.1       |

## Example

```js

const { minAPI } = getSystemInfo()
console.log(minAPI)
```

---

## getSystemMode

### Import

```js
import { getSystemMode } from '@zos/settings'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the system mode setting information.

## Type

```ts
function getSystemMode(): Result
```

## Parameters

### Result

| Property         | Type                 | Description                   | API_LEVEL |
| ---------------- | -------------------- | ----------------------------- | --------- |
| DND              | `boolean` | State of Do Not Disturb Mode  | 3.0       |
| sleep            | `boolean` | State of Sleep Mode           | 3.0       |
| theater          | `boolean` | State of Sleep Mode           | 3.0       |
| systemLock       | `boolean` | State of Screen Lock Mode     | 3.0       |
| lowTemperature   | `boolean` | State of Low Temperature Mode | 3.0       |
| powerSaving      | `boolean` | State of Power Saving Mode    | 3.0       |
| ultraPowerSaving | `boolean` | State of Clock Mode           | 3.0       |
| button           | `boolean` | State of Button Mode          | 3.0       |
| accessibleSwitch | `boolean` | State of Accessible           | 3.0       |

## Example

```js

const mode = getSystemMode()
console.log(mode)
```

---

## getTemperatureUnit

### Import

```js
import { getTemperatureUnit } from '@zos/settings'
```

### Typings

- Description: Get the temperature units set by the user
- API_LEVEL: 2.1
- Constants: `temperatureUnit`
- Example:

```js
import { getTemperatureUnit, TEMPERATURE_UNIT_CENTIGRADE } from '@zos/settings'

const temperatureUnit = getTemperatureUnit()

if (temperatureUnit === TEMPERATURE_UNIT_CENTIGRADE) {
  console.log('centigrade')
}
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the temperature units set by the user.

## Type

```ts
function getTemperatureUnit(): Result
```

## Parameters

### Result

| Type                | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `number` | Temperature units, value reference temperature unit constants |

## Constants

### Temperature unit constants

| Constant                      | Description            | API_LEVEL |
| ----------------------------- | ---------------------- | --------- |
| `TEMPERATURE_UNIT_CENTIGRADE` | Celsius temperature    | 2.0       |
| `TEMPERATURE_UNIT_FAHRENHEIT` | Fahrenheit temperature | 2.0       |

## Example

```js

const temperatureUnit = getTemperatureUnit()

if (temperatureUnit === TEMPERATURE_UNIT_CENTIGRADE) {
  console.log('centigrade')
}
```

---

## getTimeFormat

### Import

```js
import { getTimeFormat } from '@zos/settings'
```

### Typings

- Description: Get the current system time format, 12-hour format or 24-hour format
- API_LEVEL: 2.1
- Constants: `hourFormat`
- Example:

```js
import { getTimeFormat, TIME_FORMAT_24 } from '@zos/settings'

const timeFormat = getTimeFormat()

if (timeFormat === TIME_FORMAT_24) {
  console.log('time format is 24-hour format')
}
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the current system time format, 12-hour format or 24-hour format.

## Type

```ts
function getTimeFormat(): Result
```

## Parameters

### Result

| Type                | Description                                       |
| ------------------- | ------------------------------------------------- |
| `number` | Hour format, value refer to hour format constants |

## Constants

### Hour format constants

| Constant         | Description    | API_LEVEL |
| ---------------- | -------------- | --------- |
| `TIME_FORMAT_12` | 12-hour format | 2.1       |
| `TIME_FORMAT_24` | 24-hour format | 2.1       |

## Example

```js

const timeFormat = getTimeFormat()

if (timeFormat === TIME_FORMAT_24) {
  console.log('time format is 24-hour format')
}
```

---

## getWeightTarget

### Import

```js
import { getWeightTarget } from '@zos/settings'
```

### Typings

- Description: Get the weight target set by the user
- Example:

```js
import { getWeightTarget } from '@zos/settings'

const weightTarget = getWeightTarget()
console.log(weightTarget)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the weight target set by the user.

## Type

```ts
function getWeightTarget(): Result
```

## Parameters

### Result

| Type                | Description                            |
| ------------------- | -------------------------------------- |
| `number` | User-set weight target, default is `0` |

## Example

```js

const weightTarget = getWeightTarget()
console.log(weightTarget)
```

---

## getWeightUnit

### Import

```js
import { getWeightUnit } from '@zos/settings'
```

### Typings

- Description: Gets the weight unit set by the user
- Constants: `weightUnit`
- Example:

```js
import { getWeightUnit, WEIGHT_UNIT_KILOGRAM } from '@zos/settings'

const weightUnit = getWeightUnit()

if (weightUnit === WEIGHT_UNIT_KILOGRAM) {
  console.log('Kilogram')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Gets the weight unit set by the user.

## Type

```ts
function getWeightUnit(): Result
```

## Parameters

### Result

| Type                | Description                                        |
| ------------------- | -------------------------------------------------- |
| `number` | Weight units, value refer to weight unit constants |

## Constants

### Weight unit constants

| Constant               | Description | API_LEVEL |
| ---------------------- | ----------- | --------- |
| `WEIGHT_UNIT_KILOGRAM` | Kilogram    | 2.0       |
| `WEIGHT_UNIT_JIN`      | Jin         | 2.0       |
| `WEIGHT_UNIT_POUND`    | Pound       | 2.0       |
| `WEIGHT_UNIT_STONE`    | Stone       | 2.0       |

## Example

```js

const weightUnit = getWeightUnit()

if (weightUnit === WEIGHT_UNIT_KILOGRAM) {
  console.log('Kilogram')
}
```

---

