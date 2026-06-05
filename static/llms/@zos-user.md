# @zos/user

## Constants

| Constant | Description | API_LEVEL |
|----------|-------------|-----------|
| `GENDER_MALE` | Male | — |
| `GENDER_FEMALE` | Female | — |
| `GENDER_UNSPECIFIED` | User not specified | — |

## addHealthData

### Import

```js
import { addHealthData } from '@zos/user'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set user health data information.

> **ℹ️ Info**
>
> permission code: `data:user.health`

## Type

```ts
function addHealthData(option: Option): Result
```

## Parameters

### Option

| Property | Type                | Required | DefaultValue | Description                | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | -------------------------- | --------- |
| weight   | `number` | Y        | -            | Weight, in g               | 3.0       |
| bmi      | `number` | Y        | -            | 100 times the value of BMI | 3.0       |

### Result

| Type                 | Description |
| -------------------- | ----------- |
| `boolean` | undefined   |

## Example

```js

addHealthData({
  weight: 65,
  bmi: 1900,
})
```

---

## getProfile

### Import

```js
import { getProfile } from '@zos/user'
```

### Typings

- Description: Get user information
- Permission: `data:user.info`
- Constants: `gender`
- Example:

```js
import { getProfile, GENDER_MALE } from '@zos/user'

const { age, gender } = getProfile()
console.log(age)

if (gender === GENDER_MALE) {
  console.log('male')
}
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get user information.

> **ℹ️ Info**
>
> permission code: `data:user.info`

## Type

```ts
function getProfile(): Result
```

## Parameters

### Result

| Property | Type                | Description                                                            | API_LEVEL |
| -------- | ------------------- | ---------------------------------------------------------------------- | --------- |
| age      | `number` | User age, `0` if no data                                               | 2.0       |
| height   | `number` | User height, `0` if no data                                            | 2.0       |
| weight   | `number` | User weight, `0` if no data                                            | 2.0       |
| gender   | `number` | User gender, value refer to user gender constants                      | 2.0       |
| nickName | `string` | User's nickname                                                        | 2.0       |
| region   | `string` | ISO code of the country or region where the user account is registered | 2.0       |

## Constants

### User gender constants

| Constant             | Description        | API_LEVEL |
| -------------------- | ------------------ | --------- |
| `GENDER_MALE`        | Male               | 2.0       |
| `GENDER_FEMALE`      | Female             | 2.0       |
| `GENDER_UNSPECIFIED` | User not specified | 2.0       |

## Example

```js

const { age, gender } = getProfile()
console.log(age)

if (gender === GENDER_MALE) {
  console.log('male')
}
```

---

