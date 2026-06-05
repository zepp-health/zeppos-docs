# @zos/app-access

## getSportData

### Import

```js
import { getSportData } from '@zos/app-access'
```

### Typings

- Description: By default, the system will off the screen in one page of the Mini Program, and the system will exit the Mini Program after 10s, and enter the dial page when the watch is woken up again. If `relaunch` is set to `true`, the Mini Program will reopen and enter the corresponding page when the watch is woken up again
- API_LEVEL: 3.6
- Permission: `data:user.hd.workout`
- Example:

```js
import { getSportData } from '@zos/app-access'

const result = getSportData({
  type: 'distance',
}, (callbackResult) => {
  const { code, data } = callbackResult
  if (code === 0) {
    const [{ distance }] = JSON.parse(data)
    console.log(distance)
  }
})
```

> Start from API_LEVEL `3.6` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

By default, the system will off the screen in one page of the Mini Program, and the system will exit the Mini Program after 10s, and enter the dial page when the watch is woken up again. If `relaunch` is set to `true`, the Mini Program will reopen and enter the corresponding page when the watch is woken up again.

> **ℹ️ Info**
>
> permission code: `data:user.hd.workout`

## Type

```ts
function getSportData(options: Options, callback: (callbackResult: CallbackResult) => void): Result
```

## Parameters

### Options

| Property | Type                | Required | DefaultValue | Description                                    | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ---------------------------------------------- | --------- |
| type     | `string` | Y        | -            | Sports type, refer to the value of `SportType` | 3.6       |

### CallbackResult

| Property | Type                | Description                                                                                                                                                                                                                                                                  | API_LEVEL |
| -------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| code     | `number` | Result status code, `0` means success, non- `0` means failure                                                                                                                                                                                                                | 3.6       |
| data     | `string` | Sports data, return value type is string, needs to be parsed using `JSON.parse`, the parsed type is `Array<object>`, the specific type of `object` can be referred to the `SportType` type description below, and the return value corresponding to each `type` is different | 3.6       |

### Result

| Type                 | Description                                                                       |
| -------------------- | --------------------------------------------------------------------------------- |
| `Boolean` | If it returns `true`, it means the call was successful, otherwise the call failed |

### SportType

| Value                   | Type                | Description                                                                                                                 | API_LEVEL |
| ----------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------- |
| speed                   | `object` | Speed, example return value `{"speed": "9.99", "name": "Speed"}`                                                            | 3.6       |
| avg_speed               | `object` | Average speed, example return value `{"avg_speed": "9.99", "name": "Average Speed"}`                                        | 3.6       |
| pace                    | `object` | Pace, example return value `{"avg_pace": "1' 12" "," name ":" Average Pace "}`                                              | 3.6       |
| avg_pace                | `object` | Average pace, example return value `{"avg_pace": "1'12'", "name": "Average Pace"}`                                          | 3.6       |
| distance                | `object` | Distance, example return value `{"distance": "9.99", "name": "Distance"}`                                                   | 3.6       |
| duration                | `object` | Time duration of workout, example return value `{"duration":"1:15:15", "name": "Duration"}`                                 | 3.6       |
| calories                | `object` | Consumption, example return value `{"calories": "9.99", "name": "Calories"}`                                                | 3.6       |
| cadence                 | `object` | Cadence/cadence, example return value `{"cadence": "9.99", "name": "Cadence"}`                                              | 3.6       |
| avg_cadence             | `object` | Average cadence, example return value `{"avg_cadence": "9.99", "name": "Average Cadence"}`                                  | 3.6       |
| altitude                | `object` | Altitude, example return value `{"altitude": "9.99", "name": "Elevation"}`                                                  | 3.6       |
| total_up_altitude       | `object` | Accumulated elevation, example return value `{"total_up_altitude": "9.99", "name": "Total Ascent"}`                         | 3.6       |
| total_count             | `object` | Total count, example return value `{"total_count": "9.99", "name": "Total count"}`                                          | 3.6       |
| vertical_speed          | `object` | Vertical Speed, example return value `{"vertical_speed": "9.99", "name": "Vertical Speed"}`                                 | 3.6       |
| downhill_count          | `object` | Number of downhills, example return value `{"downhill_count": "9.99", "name": "Downhills"}`                                 | 3.6       |
| total_downhill_distance | `object` | Cumulative downhill distance, example return value `{"total_downhill_distance": "9.99", "name": "Total Downhill Distance"}` | 3.6       |

## Example

```js

const result = getSportData(
  {
    type: 'distance',
  },
  (callbackResult) => {
    const { code, data } = callbackResult
    if (code === 0) {
      const [{ distance }] = JSON.parse(data)
      console.log(distance)
    }
  },
)
```

---

