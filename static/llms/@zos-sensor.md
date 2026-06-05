# @zos/sensor

## Constants

| Constant | Description | API_LEVEL |
|----------|-------------|-----------|
| `VIBRATOR_SCENE_SHORT_LIGHT` | Light vibration intensity and short time (20ms) | — |
| `VIBRATOR_SCENE_SHORT_MIDDLE` | Medium vibration intensity, short time (20ms) | — |
| `VIBRATOR_SCENE_SHORT_STRONG` | High vibration intensity and short time (20ms) | — |
| `VIBRATOR_SCENE_DURATION` | High vibration intensity, lasting 600ms | — |
| `VIBRATOR_SCENE_DURATION_LONG` | High vibration intensity, lasting 1000ms | — |
| `VIBRATOR_SCENE_STRONG_REMINDER` | High vibration intensity, four vibrations in 1200ms, can be used for stronger reminders | — |
| `VIBRATOR_SCENE_NOTIFICATION` | Two short, continuous vibrations, consistent with the watch message notification vibration feedback | — |
| `VIBRATOR_SCENE_CALL` | High vibration intensity, single vibration twice in 500ms, continuous vibration, need to manually `stop`, consistent with the watch call vibration feedback | — |
| `VIBRATOR_SCENE_TIMER` | High vibration intensity, single long vibration 500ms, continuous vibration, need to manually `stop`, consistent with the watch alarm clock, countdown vibration feedback | — |
| `TIME_HOUR_FORMAT_12` | 12-hour format | 2.1 |
| `TIME_HOUR_FORMAT_24` | 24-hour format | 2.1 |
| `FREQ_MODE_LOW` | Low power mode with low trigger frequency | 3.0 |
| `FREQ_MODE_NORMAL` | Normal power consumption mode, medium trigger frequency | 3.0 |
| `FREQ_MODE_HIGH` | High power consumption mode with high trigger frequency | 3.0 |

## Accelerometer

### Import

```js
import { Accelerometer } from '@zos/sensor'
```

### Typings

- Description: accelerometer. Measure the acceleration of the device along three orthogonal axes (x, y, z). The x and y axes are parallel to the screen, with the positive direction referring to the diagram. The z-axis is perpendicular to the device's screen, with the positive direction pointing upward
- API_LEVEL: 3.0
- Permission: `device:os.accelerometer`
- Example:

```js
import { Accelerometer, FREQ_MODE_NORMAL } from '@zos/sensor'

const accelerometer = new Accelerometer()

const callback = () => {
  console.log(accelerometer.getCurrent())
}
accelerometer.onChange(callback)
accelerometer.setFreqMode(FREQ_MODE_NORMAL)
accelerometer.start()

// When not needed for use
accelerometer.offChange()
accelerometer.stop()
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: Accelerometer_image}]

accelerometer. Measure the acceleration of the device along three orthogonal axes (x, y, z). The x and y axes are parallel to the screen, with the positive direction referring to the diagram. The z-axis is perpendicular to the device's screen, with the positive direction pointing upward.

> **ℹ️ Info**
>
> permission code: `device:os.accelerometer`

## Methods

### start

Start listening to accelerometer data

```ts
start(): void
```

### stop

Stop listening to accelerometer data

```ts
stop(): void
```

### getCurrent

Get current accelerometer data

```ts
getCurrent(): Result
```

#### Result

| Property | Type                | Description                      | API_LEVEL |
| -------- | ------------------- | -------------------------------- | --------- |
| x        | `number` | Acceleration of x-axis in cm/s^2 | 3.0       |
| y        | `number` | Acceleration of y-axis in cm/s^2 | 3.0       |
| z        | `number` | Acceleration of z-axis in cm/s^2 | 3.0       |

### onChange

Register the accelerometer data change event listener callback function

```ts
onChange(callback: () => void): void
```

### offChange

Cancel the accelerometer data change event listener callback function

```ts
offChange(callback: () => void): void
```

### setFreqMode

> Start from API_LEVEL `3.0`

Set the mode of trigger frequency, `mode` value reference frequency mode constant

```ts
setFreqMode(mode: number): void
```

#### Constants

##### Frequency Mode

| Constant           | Description                                             | API_LEVEL |
| ------------------ | ------------------------------------------------------- | --------- |
| `FREQ_MODE_LOW`    | Low power mode with low trigger frequency               | 3.0       |
| `FREQ_MODE_NORMAL` | Normal power consumption mode, medium trigger frequency | 3.0       |
| `FREQ_MODE_HIGH`   | High power consumption mode with high trigger frequency | 3.0       |

### getFreqMode

> Start from API_LEVEL `3.0`

Get the mode of trigger frequency, result value reference frequency mode constant

```ts
getFreqMode(): number
```

#### Constants

##### Frequency Mode

| Constant           | Description                                             | API_LEVEL |
| ------------------ | ------------------------------------------------------- | --------- |
| `FREQ_MODE_LOW`    | Low power mode with low trigger frequency               | 3.0       |
| `FREQ_MODE_NORMAL` | Normal power consumption mode, medium trigger frequency | 3.0       |
| `FREQ_MODE_HIGH`   | High power consumption mode with high trigger frequency | 3.0       |

## Example

```js

const accelerometer = new Accelerometer()

const callback = () => {
  console.log(accelerometer.getCurrent())
}
accelerometer.onChange(callback)
accelerometer.setFreqMode(FREQ_MODE_NORMAL)
accelerometer.start()

// When not needed for use
accelerometer.offChange()
accelerometer.stop()
```

---

## Barometer

### Import

```js
import { Barometer } from '@zos/sensor'
```

### Typings

- Description: Barometer Sensor
- API_LEVEL: 2.1
- Permission: `device:os.barometer`
- Example:

```js
import { Barometer } from '@zos/sensor'

const barometer = new Barometer()
const airPressure = barometer.getAirPressure()
const altitude = barometer.getAltitude()

const callback = () => {
  console.log(barometer.getAltitude())
}

barometer.onChange(callback)

// When not needed for use
barometer.offChange(callback)
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Barometer Sensor.

> **ℹ️ Info**
>
> permission code: `device:os.barometer`

## Methods

### getAirPressure

Get air pressure value in hPa

```ts
getAirPressure(): number
```

### getAltitude

Get altitude value in meters

```ts
getAltitude(): number
```

### onChange

Register the air pressure and altitude change event callback function

```ts
onChange(callback: () => void): void
```

### offChange

Cancel the air pressure and altitude change event callback function

```ts
offChange(callback: () => void): void
```

## Example

```js

const barometer = new Barometer()
const airPressure = barometer.getAirPressure()
const altitude = barometer.getAltitude()

const callback = () => {
  console.log(barometer.getAltitude())
}

barometer.onChange(callback)

// When not needed for use
barometer.offChange(callback)
```

---

## Battery

### Import

```js
import { Battery } from '@zos/sensor'
```

### Typings

- Description: Battery Sensor
- Example:

```js
import { Battery } from '@zos/sensor'

const battery = new Battery()
const current = battery.getCurrent()

const callback = () => {
  console.log(battery.getCurrent())
}

battery.onChange(callback)

// When not needed for use
battery.offChange(callback)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Battery Sensor.

## Methods

### getCurrent

Get the current device power percentage, range 0 - 100

```ts
getCurrent(): number
```

### onChange

Register the power change event callback function

```ts
onChange(callback: () => void): void
```

### offChange

Cancel the power change event callback function

```ts
offChange(callback: () => void): void
```

## Example

```js

const battery = new Battery()
const current = battery.getCurrent()

const callback = () => {
  console.log(battery.getCurrent())
}

battery.onChange(callback)

// When not needed for use
battery.offChange(callback)
```

---

## BloodOxygen

### Import

```js
import { BloodOxygen } from '@zos/sensor'
```

### Typings

- Description: Blood oxygen Sensor
- Permission: `data:user.hd.spo2`
- Example:

```js
import { BloodOxygen } from '@zos/sensor'

const bloodOxygen = new BloodOxygen()
const { value } = bloodOxygen.getCurrent()
const lastDay = bloodOxygen.getLastDay()
const callback = () => {
  console.log(bloodOxygen.getCurrent())
}

bloodOxygen.onChange(callback)
bloodOxygen.stop()
bloodOxygen.start()
// When not needed for use
bloodOxygen.offChange(callback)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Blood oxygen Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.spo2`

## Methods

### getCurrent

Get the current measured blood oxygen result

```ts
getCurrent(): Result
```

#### Result

| Property | Type                | Description                               | API_LEVEL |
| -------- | ------------------- | ----------------------------------------- | --------- |
| value    | `number` | Blood oxygen measurement values           | 2.0       |
| time     | `number` | Measurement time                          | 2.0       |
| retCode  | `number` | Result code, refer to retCode description | 2.0       |

#### retCode

| Value | Type                | Description             | API_LEVEL |
| ----- | ------------------- | ----------------------- | --------- |
| 0     | `number` | Measurement invalid     | 2.0       |
| 1     | `number` | Continue measuring      | 2.0       |
| 2     | `number` | Measurement success     | 2.0       |
| 3     | `number` | Measurement failure     | 2.0       |
| 4     | `number` | Not wearing             | 2.0       |
| 5     | `number` | Measurement timeout     | 2.0       |
| 6     | `number` | Invalid wearing         | 2.0       |
| 7     | `number` | Invalid signal          | 2.0       |
| 8     | `number` | Low blood oxygen value  | 2.0       |
| 9     | `number` | High blood oxygen value | 2.0       |
| 10    | `number` | Measurement invalid     | 2.0       |

### getLastDay

Returns the average blood sample data for the past 24 hours, with an array length of 24

```ts
getLastDay(): Array<number>
```

### start

> Start from API_LEVEL `2.1`

Start blood oxygen measurement, it is recommended to call `stop` to stop the last measurement before calling the `start` method

```ts
start(): void
```

### stop

> Start from API_LEVEL `2.1`

Cancel blood oxygen measurement

```ts
stop(): void
```

### onChange

Register a callback function to listen for blood oxygen measurement change events

```ts
onChange(callback: () => void): void
```

### offChange

Cancel a callback function to listen for blood oxygen measurement change events

```ts
offChange(callback: () => void): void
```

### getLastFewHour

> Start from API_LEVEL `3.0`

Obtain blood oxygen measurements for the last `hour` and sort the results in chronological order

```ts
getLastFewHour(hour: number): Array<Data>
```

#### Data

| Property | Type                | Description                                                           | API_LEVEL |
| -------- | ------------------- | --------------------------------------------------------------------- | --------- |
| spo2     | `number` | Blood oxygen measurement value                                        | 3.0       |
| time     | `number` | Time of measurement of blood oxygen values, UTC time stamp in seconds | 3.0       |

## Example

```js

const bloodOxygen = new BloodOxygen()
const { value } = bloodOxygen.getCurrent()
const lastDay = bloodOxygen.getLastDay()
const callback = () => {
  console.log(bloodOxygen.getCurrent())
}

bloodOxygen.onChange(callback)
bloodOxygen.stop()
bloodOxygen.start()
// When not needed for use
bloodOxygen.offChange(callback)
```

---

## BodyTemperature

### Import

```js
import { BodyTemperature } from '@zos/sensor'
```

### Typings

- Description: Body surface temperature sensor
- API_LEVEL: 3.0
- Permission: `data:user.hd.body_temp`
- Example:

```js
import { BodyTemperature } from '@zos/sensor'

const bodyTemperature = new BodyTemperature()

bodyTemperature.getCurrent()
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Body surface temperature sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.body_temp`

## Methods

### getCurrent

Get the latest measurement of body surface temperature

```ts
getCurrent(): Result
```

#### Result

| Property     | Type                | Description                                                                                             | API_LEVEL |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------------------- | --------- |
| current      | `number` | Sleep stage type, refer to the constants returned by `getStageConstantObj` for the meaning of the value | 3.0       |
| timeinterval | `number` | Sleep stage type, refer to the constants returned by `getStageConstantObj` for the meaning of the value | 3.0       |

### getToday

Get the body surface temperature measurement values for 24 hours a day. The array length is 24 \* 60 / 5 = 288, with an average measurement value every five minutes. The unit is Celsius, such as `35.2`. Data without measurement values is `-1000`

```ts
getToday(): Array<number>
```

## Example

```js

const bodyTemperature = new BodyTemperature()

bodyTemperature.getCurrent()
```

---

## Buzzer

### Import

```js
import { Buzzer } from '@zos/sensor'
```

### Typings

- Description: Buzzer
- API_LEVEL: 3.6
- Example:

```js
import { createWidget, widget, prop, align, text_style } from "@zos/ui";
import { Buzzer } from "@zos/sensor";
import { px } from "@zos/utils";

const sceneList = ['ALARM', 'REMIND_1', 'REMIND_2', 'OPERATE', 'SUCCESS', 'FAILURE']

Page({
  state: {
    pageName: "BUZZER",
    currentIndex: 0
  },
  build() {
    const buzzer = new Buzzer();
    const sceneText = createWidget(widget.TEXT, {
      x: px(0),
      y: px(120),
      w: px(480),
      h: px(46),
      color: 0xffffff,
      text_size: px(20),
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: `${sceneList[this.state.currentIndex]}`,
    });

    const startBuzzer = () => {
      const alarmType = buzzer.getSourceType()[sceneList[this.state.currentIndex]];

      if (buzzer.isEnabled()) {
        buzzer.start(alarmType);
      }

      this.state.currentIndex = (this.state.currentIndex + 1) % sceneList.length
      sceneText.setProperty(prop.MORE, {
        text: `BUZZER: ${sceneList[this.state.currentIndex]}`,
      });
    };

    createWidget(widget.BUTTON, {
      x: px(80),
      y: px(300),
      w: px(300),
      h: px(60),
      radius: px(12),
      normal_color: 0xfc6950,
      press_color: 0xfeb4a8,
      text: "START BUZZER",
      click_func: startBuzzer,
    });
  },
});

> Start from API_LEVEL `3.6` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Buzzer.

## Methods

### isEnabled

Get whether other options in the system buzzer scene settings are turned on, Settings - > Sound & Vibration - > Buzzer Scene - > Other

```ts
isEnabled(): boolean
```

### getSourceType

Get buzzer mode

```ts
getSourceType(): Type
```

#### Type

| Value    | Type                | Description | API_LEVEL |
| -------- | ------------------- | ----------- | --------- |
| ALARM    | `number` | Alarm clock | 3.6       |
| REMIND_1 | `number` | Reminder 1  | 3.6       |
| REMIND_2 | `number` | Reminder 2  | 3.6       |
| OPERATE  | `number` | Operation   | 3.6       |
| SUCCESS  | `number` | Success     | 3.6       |
| FAILURE  | `number` | Failure     | 3.6       |

### getStrength

Get buzzer strength, '0' - weak, '1' - medium, '2' - high

```ts
getStrength(): number
```

### start

Start beeping, you can pass in `type` to specify the built-in beeping mode of the system,`repeatCount` is the number of repetitions, default `0`, do not repeat

```ts
start(type: number, repeatCount: 0): void
```

### stop

Stop buzzer

```ts
stop(): void
```

## Example

```js

const sceneList = ['ALARM', 'REMIND_1', 'REMIND_2', 'OPERATE', 'SUCCESS', 'FAILURE']

Page({
  state: {
    pageName: 'BUZZER',
    currentIndex: 0,
  },
  build() {
    const buzzer = new Buzzer()
    const sceneText = createWidget(widget.TEXT, {
      x: px(0),
      y: px(120),
      w: px(480),
      h: px(46),
      color: 0xffffff,
      text_size: px(20),
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: `${sceneList[this.state.currentIndex]}`,
    })

    const startBuzzer = () => {
      const alarmType = buzzer.getSourceType()[sceneList[this.state.currentIndex]]

      if (buzzer.isEnabled()) {
        buzzer.start(alarmType)
      }

      this.state.currentIndex = (this.state.currentIndex + 1) % sceneList.length
      sceneText.setProperty(prop.MORE, {
        text: `BUZZER: ${sceneList[this.state.currentIndex]}`,
      })
    }

    createWidget(widget.BUTTON, {
      x: px(80),
      y: px(300),
      w: px(300),
      h: px(60),
      radius: px(12),
      normal_color: 0xfc6950,
      press_color: 0xfeb4a8,
      text: 'START BUZZER',
      click_func: startBuzzer,
    })
  },
})
```

---

## Calorie

### Import

```js
import { Calorie } from '@zos/sensor'
```

### Typings

- Description: Calorie Sensor
- Permission: `data:user.hd.calorie`
- Example:

```js
import { Calorie } from '@zos/sensor'

const calorie = new Calorie()
const current = calorie.getCurrent()
const target = calorie.getTarget()
const callback = () => {
  console.log(calorie.getCurrent())
}

calorie.onChange(callback)

// When not needed for use
calorie.offChange(callback)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Calorie Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.calorie`

## Methods

### getCurrent

Get the current calorie consumption in kcal

```ts
getCurrent(): number
```

### getTarget

Get the target calorie consumption in kcal

```ts
getTarget(): number
```

### onChange

Register the calories change event callback function

```ts
onChange(callback: () => void): void
```

### offChange

Cancel the calories change event callback function

```ts
offChange(callback: () => void): void
```

## Example

```js

const calorie = new Calorie()
const current = calorie.getCurrent()
const target = calorie.getTarget()
const callback = () => {
  console.log(calorie.getCurrent())
}

calorie.onChange(callback)

// When not needed for use
calorie.offChange(callback)
```

---

## Compass

### Import

```js
import { Compass } from '@zos/sensor'
```

### Typings

- Description: compass
- API_LEVEL: 3.0
- Permission: `device:os.compass`
- Example:

```js
import { Compass } from '@zos/sensor'

const compass = new Compass()

const callback = () => {
  if (compass.getStatus()) {
    console.log(compass.getDirection())
    console.log(compass.getDirectionAngle())
  }
}
compass.onChange(callback)
compass.start()

// When not needed for use
compass.offChange()
compass.stop()
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

compass.

> **ℹ️ Info**
>
> permission code: `device:os.compass`

## Methods

### start

Start listening to compass data

```ts
start(): void
```

### stop

Stop listening to compass data

```ts
stop(): void
```

### getStatus

Get the compass calibration status, `true` means calibrated

```ts
getStatus(): boolean
```

### getDirection

Get the direction of the current watch's 12-point scale, divided into eight directions, refer to `direction`

```ts
getDirection(): string
```

#### direction

| Value | Type                | Description | API_LEVEL |
| ----- | ------------------- | ----------- | --------- |
| N     | `string` | North       | 3.0       |
| NE    | `string` | Northeast   | 3.0       |
| E     | `string` | East        | 3.0       |
| SE    | `string` | Southeast   | 3.0       |
| S     | `string` | South       | 3.0       |
| SW    | `string` | Southwest   | 3.0       |
| W     | `string` | West        | 3.0       |
| NW    | `string` | Northwest   | 3.0       |

### getDirectionAngle

Get the current direction angle, the clockwise rotation angle of the watch's 12 o'clock scale direction relative to due north, takes the values 0 - 360, if the compass is not calibrated, returns the `INVALID` string

```ts
getDirectionAngle(): number | 'INVALID'
```

### onChange

Register the compass direction change event listener callback function

```ts
onChange(callback: () => void): void
```

### offChange

Cancel the compass direction change event listener callback function

```ts
offChange(callback: () => void): void
```

### setFreqMode

> Start from API_LEVEL `4.0`

Set the mode of trigger frequency, `mode` value reference frequency mode constant

```ts
setFreqMode(mode: number): void
```

#### Constants

##### Frequency Mode

| Constant           | Description                                             | API_LEVEL |
| ------------------ | ------------------------------------------------------- | --------- |
| `FREQ_MODE_LOW`    | Low power mode with low trigger frequency               | 3.0       |
| `FREQ_MODE_NORMAL` | Normal power consumption mode, medium trigger frequency | 3.0       |
| `FREQ_MODE_HIGH`   | High power consumption mode with high trigger frequency | 3.0       |

### getFreqMode

> Start from API_LEVEL `4.0`

Get the mode of trigger frequency, result value reference frequency mode constant

```ts
getFreqMode(): number
```

#### Constants

##### Frequency Mode

| Constant           | Description                                             | API_LEVEL |
| ------------------ | ------------------------------------------------------- | --------- |
| `FREQ_MODE_LOW`    | Low power mode with low trigger frequency               | 3.0       |
| `FREQ_MODE_NORMAL` | Normal power consumption mode, medium trigger frequency | 3.0       |
| `FREQ_MODE_HIGH`   | High power consumption mode with high trigger frequency | 3.0       |

## Example

```js

const compass = new Compass()

const callback = () => {
  if (compass.getStatus()) {
    console.log(compass.getDirection())
    console.log(compass.getDirectionAngle())
  }
}
compass.onChange(callback)
compass.start()

// When not needed for use
compass.offChange()
compass.stop()
```

---

## Distance

### Import

```js
import { Distance } from '@zos/sensor'
```

### Typings

- Description: Distance Sensor
- Permission: `data:user.hd.distance`
- Example:

```js
import { Distance } from '@zos/sensor'

const distance = new Distance()
const current = distance.getCurrent()
const callback = () => {
  console.log(distance.getCurrent())
}

distance.onChange(callback)

// When not needed for use
distance.offChange(callback)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Distance Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.distance`

## Methods

### getCurrent

Get the current distance

```ts
getCurrent(): number
```

### onChange

Register the distance change event callback function

```ts
onChange(callback: () => void): void
```

### offChange

Cancel the distance change event callback function

```ts
offChange(callback: () => void): void
```

## Example

```js

const distance = new Distance()
const current = distance.getCurrent()
const callback = () => {
  console.log(distance.getCurrent())
}

distance.onChange(callback)

// When not needed for use
distance.offChange(callback)
```

---

## FatBurning

### Import

```js
import { FatBurning } from '@zos/sensor'
```

### Typings

- Description: FatBurning Sensor
- Permission: `data:user.hd.fat_burning`
- Example:

```js
import { FatBurning } from '@zos/sensor'

const fatBurning = new FatBurning()
const current = fatBurning.getCurrent()
const target = fatBurning.getTarget()
const callback = () => {
  console.log(fatBurning.getCurrent())
}

fatBurning.onChange(callback)

// When not needed for use
fatBurning.offChange(callback)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

FatBurning Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.fat_burning`

## Methods

### getCurrent

Get current fat burning minutes

```ts
getCurrent(): number
```

### getTarget

Get current fat burning target minutes

```ts
getTarget(): number
```

### onChange

Register a callback function to listen to the fat burning minutes change event

```ts
onChange(callback: () => void): void
```

### offChange

Cancel a callback function to listen to the fat burning minutes change event

```ts
offChange(callback: () => void): void
```

## Example

```js

const fatBurning = new FatBurning()
const current = fatBurning.getCurrent()
const target = fatBurning.getTarget()
const callback = () => {
  console.log(fatBurning.getCurrent())
}

fatBurning.onChange(callback)

// When not needed for use
fatBurning.offChange(callback)
```

---

## Geolocation

### Import

```js
import { Geolocation } from '@zos/sensor'
```

### Typings

- Description: Geolocation Sensor
- API_LEVEL: 2.1
- Permission: `device:os.geolocation`
- Example:

```js
import { Geolocation } from '@zos/sensor'

const geolocation = new Geolocation()

const callback = () => {
  if (geolocation.getStatus() === 'A') {
    console.log(geolocation.getLatitude())
    console.log(geolocation.getLongitude())
  }
}

geolocation.start()
geolocation.onChange(callback)

// When not needed for use
geolocation.offChange(callback)
geolocation.stop()
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Geolocation Sensor.

> **ℹ️ Info**
>
> permission code: `device:os.geolocation`

## Methods

### start

Start listening to location data

```ts
start(): void
```

### stop

Stop listening to location data

```ts
stop(): void
```

### getStatus

Get the positioning status, return `A` for positioning in progress, return `V` for invalid positioning

```ts
getStatus(): string
```

### getLatitude

Get Latitude

```ts
getLatitude(option: Option): Result
```

#### Option

| Property | Type                | Required | DefaultValue    | Description                                                                             | API_LEVEL |
| -------- | ------------------- | -------- | --------------- | --------------------------------------------------------------------------------------- | --------- |
| format   | `string` | N        | `DD` | Coordinate format, optionally `DD` for decimal or `DMS` in degrees, minutes and seconds | 2.1       |

#### Result

| Type                         | Description                                |
| ---------------------------- | ------------------------------------------ |
| `number&#124;DMS` | Coordinates, coordinate system type WGS-84 |

#### DMS

| Property  | Type                | Description                                               | API_LEVEL |
| --------- | ------------------- | --------------------------------------------------------- | --------- |
| direction | `string` | Direction, `N` for north latitude, `S` for south latitude | 2.1       |
| degrees   | `number` | degree                                                    | 2.1       |
| minutes   | `number` | minute                                                    | 2.1       |
| seconds   | `number` | second                                                    | 2.1       |

### getLongitude

Get Longitude

```ts
getLongitude(option: Option): Result
```

#### Option

| Property | Type                | Required | DefaultValue    | Description                                                                             | API_LEVEL |
| -------- | ------------------- | -------- | --------------- | --------------------------------------------------------------------------------------- | --------- |
| format   | `string` | N        | `DD` | Coordinate format, optionally `DD` for decimal or `DMS` in degrees, minutes and seconds | 2.1       |

#### Result

| Type                         | Description                                |
| ---------------------------- | ------------------------------------------ |
| `number&#124;DMS` | Coordinates, coordinate system type WGS-84 |

#### DMS

| Property  | Type                | Description                                               | API_LEVEL |
| --------- | ------------------- | --------------------------------------------------------- | --------- |
| direction | `string` | Direction, `E` for east longitude, `W` for west longitude | 2.1       |
| degrees   | `number` | degree                                                    | 2.1       |
| minutes   | `number` | minute                                                    | 2.1       |
| seconds   | `number` | second                                                    | 2.1       |

### getSetting

> Start from API_LEVEL `3.0`

Get the positioning settings

```ts
getSetting(): Result
```

#### Result

| Property | Type                | Description                                                   | API_LEVEL |
| -------- | ------------------- | ------------------------------------------------------------- | --------- |
| mode     | `number` | Positioning settings, see `mode` below for value descriptions | 3.0       |

#### mode

| Value | Type                | Description        | API_LEVEL |
| ----- | ------------------- | ------------------ | --------- |
| 0     | `number` | Accuracy           | 3.0       |
| 1     | `number` | Automation         | 3.0       |
| 2     | `number` | Balance            | 3.0       |
| 3     | `number` | Power Saving       | 3.0       |
| 4     | `number` | Super Power Saving | 3.0       |
| 5     | `number` | Custom             | 3.0       |

### onChange

Register a callback function to listen for location information change events

```ts
onChange(callback: () => void): void
```

### offChange

Cancel the callback function for listening to the location information change event

```ts
offChange(callback: () => void): void
```

### onGnssChange

> Start from API_LEVEL `3.0`

Register a callback function to listen for GNSS information change events

```ts
onGnssChange(callback: (info: Info) => void): void
```

#### Info

| Property           | Type                                        | Description                                                                            | API_LEVEL |
| ------------------ | ------------------------------------------- | -------------------------------------------------------------------------------------- | --------- |
| agps_inject_time   | `number`                         | AGPS update time UTC timestamp in milliseconds                                         | 3.0       |
| top4_cn_val        | `number`                         | Signal strength value of the positioning satellite                                     | 3.0       |
| is_dualband        | `number`                         | Whether dual-band                                                                      | 3.0       |
| nb_valid_satellite | `number`                         | Number of available satellites                                                         | 3.0       |
| nb_used_satellite  | `number`                         | Number of satellites used                                                              | 3.0       |
| elapsed_time       | `number`                         | Time consumed from the start of satellite search to successful positioning, in seconds | 3.0       |
| satellite_data     | `Array<SatelliteSystem>` | Satellite data arrays                                                                  | 3.0       |

#### SatelliteSystem

| Property           | Type                                  | Description                                              | API_LEVEL |
| ------------------ | ------------------------------------- | -------------------------------------------------------- | --------- |
| gnss_id            | `number`                   | Satellite ID, see `gnss_id` below for value descriptions | 3.0       |
| sub_top4_cn_val    | `number`                   | The strongest signal value of this satellite system      | 3.0       |
| nb_valid_satellite | `number`                   | Number of available satellites that can be searched      | 3.0       |
| gsv_data           | `Array<Satellite>` | Single satellite data array, maximum length 32           | 3.6       |

#### gnss_id

| Value | Type                | Description | API_LEVEL |
| ----- | ------------------- | ----------- | --------- |
| 0     | `number` | GPS         | 3.0       |
| 1     | `number` | BDS         | 3.0       |
| 2     | `number` | GLONASS     | 3.0       |
| 3     | `number` | GALILEO     | 3.0       |
| 4     | `number` | QZSS        | 3.0       |
| 5     | `number` | IRNSS       | 3.0       |

#### Satellite

| Property  | Type                | Description           | API_LEVEL |
| --------- | ------------------- | --------------------- | --------- |
| id        | `number` | Satellite ID          | 3.6       |
| elevation | `number` | Pitch angle           | 3.6       |
| azimuth   | `number` | Azimuth               | 3.6       |
| snr       | `number` | Signal-to-noise ratio | 3.6       |

### offGnssChange

> Start from API_LEVEL `3.0`

Cancel the callback function for listening to the GNSS information change event

```ts
offGnssChange(callback: (info: Geolocation.onGnssChange.Info) => void): void
```

### getEnabled

> Start from API_LEVEL `4.0`

Get whether the user allows the Mini Program to use location features

```ts
getEnabled(): boolean
```

### onEnableChange

> Start from API_LEVEL `4.0`

Register a callback function to listen for user location permission change events

```ts
onEnableChange(callback: () => void): void
```

### offEnableChange

> Start from API_LEVEL `4.0`

Cancel the callback function for listening to user location permission change events

```ts
offEnableChange(callback: () => void): void
```

## Example

```js

const geolocation = new Geolocation()

const callback = () => {
  if (geolocation.getStatus() === 'A') {
    console.log(geolocation.getLatitude())
    console.log(geolocation.getLongitude())
  }
}

geolocation.start()
geolocation.onChange(callback)

// When not needed for use
geolocation.offChange(callback)
geolocation.stop()
```

---

## Gyroscope

### Import

```js
import { Gyroscope } from '@zos/sensor'
```

### Typings

- Description: Gyroscope. Measuring the angular velocity of the device rotating along three orthogonal axes (x, y, z), the x and y axes are parallel to the screen, the positive direction refers to the figure, the z axis is perpendicular to the device's screen, the positive direction points upward, and the direction of the rotational angular velocity is determined using the [Right-hand rule](https://en.wikipedia.org/wiki/Right-hand_rule). The direction of the rotation arrow in the figure is the positive direction
- API_LEVEL: 3.0
- Permission: `device:os.gyroscope`
- Example:

```js
import { Gyroscope, FREQ_MODE_LOW } from '@zos/sensor'

const gyroscope = new Gyroscope()

const callback = () => {
  console.log(gyroscope.getCurrent())
}
gyroscope.onChange(callback)
gyroscope.setFreqMode(FREQ_MODE_LOW)
gyroscope.start()

// When not needed for use
gyroscope.offChange()
gyroscope.stop()
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: Gyroscope_image}]

Gyroscope. Measuring the angular velocity of the device rotating along three orthogonal axes (x, y, z), the x and y axes are parallel to the screen, the positive direction refers to the figure, the z axis is perpendicular to the device's screen, the positive direction points upward, and the direction of the rotational angular velocity is determined using the [Right-hand rule](https://en.wikipedia.org/wiki/Right-hand_rule). The direction of the rotation arrow in the figure is the positive direction.

> **ℹ️ Info**
>
> permission code: `device:os.gyroscope`

## Methods

### start

Start listening to gyroscope data

```ts
start(): void
```

### stop

Stop listening to gyroscope data

```ts
stop(): void
```

### getCurrent

Get current gyroscope data

```ts
getCurrent(): Result
```

#### Result

| Property | Type                | Description                                           | API_LEVEL |
| -------- | ------------------- | ----------------------------------------------------- | --------- |
| x        | `number` | Angular velocity of x-axis in DPS, degrees per second | 3.0       |
| y        | `number` | Angular velocity of y-axis in DPS, degrees per second | 3.0       |
| z        | `number` | Angular velocity of z-axis in DPS, degrees per second | 3.0       |

### onChange

Register the gyroscope data change event listener callback function

```ts
onChange(callback: () => void): void
```

### offChange

Cancel the gyroscope data change event listener callback function

```ts
offChange(callback: () => void): void
```

### setFreqMode

> Start from API_LEVEL `3.0`

Set the mode of trigger frequency, `mode` value reference frequency mode constant

```ts
setFreqMode(mode: number): void
```

#### Constants

##### Frequency Mode

| Constant           | Description                                             | API_LEVEL |
| ------------------ | ------------------------------------------------------- | --------- |
| `FREQ_MODE_LOW`    | Low power mode with low trigger frequency               | 3.0       |
| `FREQ_MODE_NORMAL` | Normal power consumption mode, medium trigger frequency | 3.0       |
| `FREQ_MODE_HIGH`   | High power consumption mode with high trigger frequency | 3.0       |

### getFreqMode

> Start from API_LEVEL `3.0`

Get the mode of trigger frequency, result value reference frequency mode constant

```ts
getFreqMode(): number
```

#### Constants

##### Frequency Mode

| Constant           | Description                                             | API_LEVEL |
| ------------------ | ------------------------------------------------------- | --------- |
| `FREQ_MODE_LOW`    | Low power mode with low trigger frequency               | 3.0       |
| `FREQ_MODE_NORMAL` | Normal power consumption mode, medium trigger frequency | 3.0       |
| `FREQ_MODE_HIGH`   | High power consumption mode with high trigger frequency | 3.0       |

## Example

```js

const gyroscope = new Gyroscope()

const callback = () => {
  console.log(gyroscope.getCurrent())
}
gyroscope.onChange(callback)
gyroscope.setFreqMode(FREQ_MODE_LOW)
gyroscope.start()

// When not needed for use
gyroscope.offChange()
gyroscope.stop()
```

---

## HeartRate

### Import

```js
import { HeartRate } from '@zos/sensor'
```

### Typings

- Description: HeartRate Sensor
- Permission: `data:user.hd.heart_rate`
- Example:

```js
import { HeartRate } from '@zos/sensor'

const heartRate = new HeartRate()
const lastValue = heartRate.getLast()

const callback = () => {
  console.log(heartRate.getCurrent())
}

heartRate.onCurrentChange(callback)

// When not needed for use
heartRate.offCurrentChange(callback)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

HeartRate Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.heart_rate`

## Methods

### getCurrent

Get the current heart rate measurement, this method needs to be used in the `onCurrentChange` callback function

```ts
getCurrent(): number
```

### getLast

Get the most recent heart rate measurement (single measurement or heart rate monitoring measurement, continuous heart rate measurement `onCurrentChange` results are not counted)

```ts
getLast(): number
```

### getToday

Get the heart rate measurement data in minutes from 0:00 to the current moment of the day, the longest array is 60\*24

```ts
getToday(): Array<number>
```

### onCurrentChange

> Start from API_LEVEL `2.1`

Call this method and start measuring heart rate continuously, call the callback function when there is a measurement result, call the `getCurrent` method in the callback function to get the heart rate measurement value, if you want to stop the heart rate measurement, you need to call the `offCurrentChange` method

```ts
onCurrentChange(callback: () => void): void
```

### offCurrentChange

> Start from API_LEVEL `2.1`

Cancel continuous heart rate measurement and cancel callback function listeners

```ts
offCurrentChange(callback: () => void): void
```

### onLastChange

> Start from API_LEVEL `2.1`

Register the heart rate single measurement change event callback function

```ts
onLastChange(callback: () => void): void
```

### offLastChange

> Start from API_LEVEL `2.1`

Cancel the heart rate single measurement change event callback function

```ts
offLastChange(callback: () => void): void
```

### getDailySummary

> Start from API_LEVEL `3.0`

Get daily heart rate statistics

```ts
getDailySummary(): Result
```

#### Result

| Property | Type                 | Description                    | API_LEVEL |
| -------- | -------------------- | ------------------------------ | --------- |
| maximum  | `Maximum` | Maximum heart rate information | 3.0       |

#### Maximum

| Property | Type                | Description                            | API_LEVEL |
| -------- | ------------------- | -------------------------------------- | --------- |
| hr_value | `number` | Maximum heart rate value               | 3.0       |
| time     | `number` | Measurement time of maximum heart rate | 3.0       |

### getResting

> Start from API_LEVEL `3.0`

Get current resting heart rate

```ts
getResting(): number
```

### getAFibRecord

> Start from API_LEVEL `3.0`

Get Atrial Fibrillation Data Array

```ts
getAFibRecord(): Result
```

#### Result

| Type                                 | Description                           |
| ------------------------------------ | ------------------------------------- |
| `Array<AfibInfo>` | Atrial Fibrillation Information Array |

#### AfibInfo

| Property | Type                | Description                                                                                                  | API_LEVEL |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------------ | --------- |
| flag     | `number` | Atrial fibrillation test results, `0` - normal, `1` - high alert, `2` - low alert, `3` - atrial fibrillation | 3.0       |
| val      | `number` | Atrial fibrillation data value, integer value 0 - 255                                                        | 3.0       |
| maxValue | `number` | Atrial fibrillation data maximum value, integer value 0 - 255                                                | 3.0       |
| minValue | `number` | Atrial fibrillation data minimum value, integer value 0 - 255                                                | 3.0       |
| time     | `number` | Time of Atrial fibrillation data acquisition, UTC seconds                                                    | 3.0       |
| duration | `number` | Duration in seconds                                                                                          | 3.0       |

### onRestingChange

> Start from API_LEVEL `3.0`

After calling this method, the device starts real-time resting heart rate measurement and registers a callback function, which is called when there is a measurement result, in which the `getResting` method can be called to get the resting heart rate measurement value, and if you need to stop the resting heart rate measurement, you need to call the `offRestingChange` method

```ts
onRestingChange(callback: () => void): void
```

### offRestingChange

> Start from API_LEVEL `3.0`

Cancel continuous resting heart rate measurement and cancel callback function listeners

```ts
offRestingChange(callback: () => void): void
```

## Example

```js

const heartRate = new HeartRate()
const lastValue = heartRate.getLast()

const callback = () => {
  console.log(heartRate.getCurrent())
}

heartRate.onCurrentChange(callback)

// When not needed for use
heartRate.offCurrentChange(callback)
```

---

## Pai

### Import

```js
import { Pai } from '@zos/sensor'
```

### Typings

- Description: PAI Sensor
- Permission: `data:user.hd.pai`
- Example:

```js
import { Pai } from '@zos/sensor'

const pai = new Pai()
const total = pai.getTotal()
const today = pai.getToday()
const lastWeek = pai.getLastWeek()
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

PAI Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.pai`

## Methods

### getTotal

Get the current cumulative PAI value

```ts
getTotal(): number
```

### getToday

Get the PAI values obtained today

```ts
getToday(): number
```

### getLastWeek

Get the PAI data for the past 7 days, the return value is an array of length `7`, the position of index `0` is the PAI value of today, the position of index `1` is the PAI value of the previous day, and so on

```ts
getLastWeek(): Array<number>
```

## Example

```js

const pai = new Pai()
const total = pai.getTotal()
const today = pai.getToday()
const lastWeek = pai.getLastWeek()
```

---

## Screen

### Import

```js
import { Screen } from '@zos/sensor'
```

### Typings

- Description: Screen Status Sensor
- API_LEVEL: 3.0
- Example:

```js
import { Screen } from '@zos/sensor'

const screen = new Screen()
const status = screen.getStatus()
const callback = () => {
  console.log(screen.getStatus())
}

screen.onChange(callback)

// When not needed for use
screen.offChange(callback)
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Screen Status Sensor.

## Methods

### getStatus

Get the screen status, `1`: On, `2`: Off

```ts
getStatus(): number
```

### getAodMode

Whether to turn on the AOD rest screen display function

```ts
getAodMode(): boolean
```

### getLight

> Start from API_LEVEL `3.6`

Light intensity, unit lux

```ts
getLight(): number
```

### onChange

Register a callback function to listen to screen display change events

```ts
onChange(callback: (status: number) => void): void
```

### offChange

Cancel a callback function to listen to screen display change events

```ts
offChange(callback: (status: number) => void): void
```

## Example

```js

const screen = new Screen()
const status = screen.getStatus()
const callback = () => {
  console.log(screen.getStatus())
}

screen.onChange(callback)

// When not needed for use
screen.offChange(callback)
```

---

## Sleep

### Import

```js
import { Sleep } from '@zos/sensor'
```

### Typings

- Description: Sleep Sensor
- Permission: `data:user.hd.sleep`
- Example:

```js
import { Sleep } from '@zos/sensor'

const sleep = new Sleep()
const { score } = sleep.getInfo()
const sleepStageConstants = sleep.getStageConstantObj()
const stage = sleep.getStage()

stage.forEach((i) => {
  const { model } = i

  if (model === sleepStageConstants.WAKE_STAGE) {
    console.log('This stage is awake stage')
  }
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Sleep Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.sleep`

## Methods

### updateInfo

By default, the system updates the sleep data every `30` minutes, the `updateInfo` method is used to actively trigger the update of the sleep data

```ts
updateInfo(): void
```

### getInfo

Get sleep information

```ts
getInfo(): SleepInfo
```

#### SleepInfo

| Property  | Type                | Description                                                         | API_LEVEL |
| --------- | ------------------- | ------------------------------------------------------------------- | --------- |
| score     | `number` | Sleep score                                                         | 2.0       |
| deepTime  | `number` | Deep sleep time (minutes)                                           | 2.0       |
| startTime | `number` | Sleep onset time, based on the number of minutes at 0:00 of the day | 2.0       |
| endTime   | `number` | Sleep end time, based on the number of minutes at 0:00 of the day   | 2.0       |
| totalTime | `number` | Get total sleep time (minutes)                                      | 2.0       |

### getStageConstantObj

Get the constant value of the sleep stage, used to determine the sleep stage in the `getStage` return value

```ts
getStageConstantObj(): StageConstants
```

#### StageConstants

| Property    | Type                | Description               | API_LEVEL |
| ----------- | ------------------- | ------------------------- | --------- |
| WAKE_STAGE  | `number` | Awake stage               | 2.0       |
| REM_STAGE   | `number` | Deep sleep time (minutes) | 2.0       |
| LIGHT_STAGE | `number` | Light Sleep stage         | 2.0       |
| DEEP_STAGE  | `number` | Deep Sleep stage          | 2.0       |

### getStage

Get Sleep Staging Data

```ts
getStage(): Array<StageInfo>
```

#### StageInfo

| Property | Type                | Description                                                                                             | API_LEVEL |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------- | --------- |
| model    | `number` | Sleep stage type, refer to the constants returned by `getStageConstantObj` for the meaning of the value | 2.0       |
| start    | `number` | Sleep stage onset time, based on the number of minutes at 0:00 of the day                               | 2.0       |
| stop     | `number` | Sleep stage end time, based on the number of minutes at 0:00 of the day                                 | 2.0       |

### getSleepingStatus

> Start from API_LEVEL `3.0`

Get the current sleep state, 0 'awake, 1' sleeping

```ts
getSleepingStatus(): number
```

### getNap

> Start from API_LEVEL `3.0`

Get nap data

```ts
getNap(): Array<NapInfo>
```

#### NapInfo

| Property | Type                | Description                                                       | API_LEVEL |
| -------- | ------------------- | ----------------------------------------------------------------- | --------- |
| length   | `number` | Nap duration (minutes)                                            | 3.0       |
| start    | `number` | Nap start time, based on the number of minutes at 0:00 of the day | 3.0       |
| stop     | `number` | Nap end time, based on the number of minutes at 0:00 of the day   | 3.0       |

## Example

```js

const sleep = new Sleep()
const { score } = sleep.getInfo()
const sleepStageConstants = sleep.getStageConstantObj()
const stage = sleep.getStage()

stage.forEach((i) => {
  const { model } = i

  if (model === sleepStageConstants.WAKE_STAGE) {
    console.log('This stage is awake stage')
  }
})
```

---

## Stand

### Import

```js
import { Stand } from '@zos/sensor'
```

### Typings

- Description: Standing behavior Sensor
- Permission: `data:user.hd.stand`
- Example:

```js
import { Stand } from '@zos/sensor'

const stand = new Stand()
const current = stand.getCurrent()
const target = stand.getTarget()
const callback = () => {
  console.log(stand.getCurrent())
}

stand.onChange(callback)

// When not needed for use
stand.offChange(callback)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Standing behavior Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.stand`

## Methods

### getCurrent

Get the current number of hours with standing behavior

```ts
getCurrent(): number
```

### getTarget

Get the number of hours with standing behavior targets

```ts
getTarget(): number
```

### onChange

Register a callback function to listen for changes in the number of hours of standing behavior

```ts
onChange(callback: () => void): void
```

### offChange

Cancel a callback function to listen for changes in the number of hours of standing behavior

```ts
offChange(callback: () => void): void
```

## Example

```js

const stand = new Stand()
const current = stand.getCurrent()
const target = stand.getTarget()
const callback = () => {
  console.log(stand.getCurrent())
}

stand.onChange(callback)

// When not needed for use
stand.offChange(callback)
```

---

## Step

### Import

```js
import { Step } from '@zos/sensor'
```

### Typings

- Description: Step Sensor
- Permission: `data:user.hd.step`
- Example:

```js
import { Step } from '@zos/sensor'

const step = new Step()
const current = step.getCurrent()
const target = step.getTarget()
const callback = () => {
  console.log(step.getCurrent())
}

step.onChange(callback)

// When not needed for use
step.offChange(callback)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Step Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.step`

## Methods

### getCurrent

Get the current step count

```ts
getCurrent(): number
```

### getTarget

Get step goal

```ts
getTarget(): number
```

### onChange

Register the step change event callback function

```ts
onChange(callback: () => void): void
```

### offChange

Cancel the step change event callback function

```ts
offChange(callback: () => void): void
```

## Example

```js

const step = new Step()
const current = step.getCurrent()
const target = step.getTarget()
const callback = () => {
  console.log(step.getCurrent())
}

step.onChange(callback)

// When not needed for use
step.offChange(callback)
```

---

## Stress

### Import

```js
import { Stress } from '@zos/sensor'
```

### Typings

- Description: Stress Sensor
- Permission: `data:user.hd.stress`
- Example:

```js
import { Stress } from '@zos/sensor'

const stress = new Stress()
const { value } = stress.getCurrent()

const callback = () => {
  console.log(stress.getCurrent())
}

stress.onChange(callback)

// When not needed for use
stress.offChange(callback)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Stress Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.stress`

## Methods

### getCurrent

Get the current pressure measurement

```ts
getCurrent(): Result
```

#### Result

| Property | Type                | Description                       | API_LEVEL |
| -------- | ------------------- | --------------------------------- | --------- |
| value    | `number` | Stress measurement values         | 2.0       |
| time     | `number` | Time to obtain the measured value | 2.0       |

### onChange

Register a callback function to listen for stress measurement change events

```ts
onChange(callback: () => void): void
```

### offChange

Cancel a callback function to listen for stress measurement change events

```ts
offChange(callback: () => void): void
```

### getToday

> Start from API_LEVEL `3.0`

Get the pressure measurements for the whole day, recorded every minute, the return value is an array of variable length, the maximum length of the array is 24 \* 60

```ts
getToday(): Array<number>
```

#### StressInfo

| Property | Type                | Description                                                 | API_LEVEL |
| -------- | ------------------- | ----------------------------------------------------------- | --------- |
| second   | `number` | Pressure value measurement time, UTC time stamp, in seconds | 3.0       |
| stress   | `number` | Pressure value, `0` means invalid                           | 3.0       |

### getTodayByHour

> Start from API_LEVEL `3.0`

Get the average pressure value for the whole day, the return value is a fixed-length array, the average pressure for each hour, the length of the array is 24

```ts
getTodayByHour(): Array<number>
```

### getLastWeek

> Start from API_LEVEL `3.0`

Get the average pressure value for each day of the past 7 days, the return value is a fixed-length array, the average pressure per day, the length of the array is 7, the position of index 0 represents six days ago, the position of index 6 represents today

```ts
getLastWeek(): Array<number>
```

### getLastWeekByHour

> Start from API_LEVEL `3.0`

Get the hourly pressure average for the past 7 days, the return value is a fixed-length array, the length of the array is 7 \* 24

```ts
getLastWeekByHour(): Array<StressInfo>
```

#### StressInfo

| Property | Type                | Description                                                 | API_LEVEL |
| -------- | ------------------- | ----------------------------------------------------------- | --------- |
| second   | `number` | Pressure value measurement time, UTC time stamp, in seconds | 3.0       |
| stress   | `number` | Pressure value, `0` means invalid                           | 3.0       |

## Example

```js

const stress = new Stress()
const { value } = stress.getCurrent()

const callback = () => {
  console.log(stress.getCurrent())
}

stress.onChange(callback)

// When not needed for use
stress.offChange(callback)
```

---

## SystemSounds

### Import

```js
import { SystemSounds } from '@zos/sensor'
```

### Typings

- Description: System Sounds
- API_LEVEL: 3.6
- Example:

```js
import { SystemSounds } from '@zos/sensor'

const systemSounds = new SystemSounds()
const alarmType = systemSounds.getSourceType().ALARM

if (systemSounds.getEnabled()) {
  systemSounds.start(alarmType)
}
```

> Start from API_LEVEL `3.6` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

System Sounds.

## Methods

### getEnabled

Get whether the system ringtone function is turned on, and it can only be played after it is turned on

```ts
getEnabled(): boolean
```

### getSourceType

Get built-in system ringtone type

```ts
getSourceType(): Type
```

#### Type

| Property | Type                | Required | DefaultValue | Description                                               | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | --------------------------------------------------------- | --------- |
| ALARM    | `number` | Y        | -            | Alarm clock reminder                                      | 3.6       |
| MESSAGE  | `number` | Y        | -            | Notification sound when receiving text messages or emails | 3.6       |
| REGULAR  | `number` | Y        | -            | TingTing sound                                            | 3.6       |
| ACHIEVE  | `number` | Y        | -            | Goals achieved                                            | 3.6       |
| CAMERA   | `number` | Y        | -            | Camera shutter                                            | 3.6       |
| ABN_HIGH | `number` | Y        | -            | Health data measurement abnormalities (high values)       | 3.6       |
| ABN_LOW  | `number` | Y        | -            | Health data measurement abnormalities (low values)        | 3.6       |
| SOS      | `number` | Y        | -            | SOS for help                                              | 3.6       |

### start

Start playing the sound, you can pass in `type` to specify the ringtone type, `repeatCount` is the number of audio repetitions, default is `0`, do not repeat playback

```ts
start(sourceType: number, repeatCount: 0): void
```

### stop

Stop sound playback

```ts
stop(): void
```

## Example

```js

const systemSounds = new SystemSounds()
const alarmType = systemSounds.getSourceType().ALARM

if (systemSounds.getEnabled()) {
  systemSounds.start(alarmType)
}
```

---

## Time

### Import

```js
import { Time } from '@zos/sensor'
```

### Typings

- Description: Time/Date Sensor
- Example:

```js
import { Time } from '@zos/sensor'

const time = new Time()
const currentTime = time.getTime()
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Time/Date Sensor.

## Methods

### getTime

Gets the UTC timestamp in milliseconds

```ts
getTime(): number
```

### getFullYear

Get the year of the current date

```ts
getFullYear(): number
```

### getMonth

Get the month of the current date, range 1 - 12, return `1` for January

```ts
getMonth(): number
```

### getDate

Get the number of days of the current date, i.e. the day of the month, in the range 1 - 31

```ts
getDate(): number
```

### getHours

Get the number of hours of the current time

```ts
getHours(): number
```

### getMinutes

Get the number of minutes of the current time

```ts
getMinutes(): number
```

### getSeconds

Get the number of seconds of the current time

```ts
getSeconds(): number
```

### getDay

Get the current time corresponding to the day of the week, range 1 - 7, return `1` for Monday

```ts
getDay(): number
```

### getHourFormat

> Start from API_LEVEL `2.1`

Get the current system time format, 12-hour format or 24-hour format，value reference hour format constants

```ts
getHourFormat(): number
```

#### Constants

##### Hour format constants

| Constant              | Description    | API_LEVEL |
| --------------------- | -------------- | --------- |
| `TIME_HOUR_FORMAT_12` | 12-hour format | 2.1       |
| `TIME_HOUR_FORMAT_24` | 24-hour format | 2.1       |

### getFormatHour

> Start from API_LEVEL `2.1`

Get the number of hours in the current time format (12-hour format or 24-hour format)

```ts
getFormatHour(): number
```

### onPerMinute

> Start from API_LEVEL `2.1`

Register end-of-minute event listener callback function

```ts
onPerMinute(callback: () => void): void
```

### onPerDay

> Start from API_LEVEL `2.1`

Register the end-of-day event listener callback function

```ts
onPerDay(callback: () => void): void
```

### onPerHourEnd

> Start from API_LEVEL `3.6`

Register the end-of-hour event listener callback function

```ts
onPerHourEnd(callback: () => void): void
```

### getFestival

Get gregorian holidays, or return the string `'INVALID'` if there is no holiday

```ts
getFestival(): string
```

### getLunarYear

Get Chinese lunar year, only works when system language is set to Chinese

```ts
getLunarYear(): number
```

### getLunarMonth

Get Chinese lunar month, only works when system language is set to Chinese

```ts
getLunarMonth(): number
```

### getLunarDay

Get Chinese lunar day, only works when system language is set to Chinese

```ts
getLunarDay(): number
```

### getLunarFestival

Get Chinese lunar holidays, only works when system language is set to Chinese, or return the string `'INVALID'` if there is no holiday

```ts
getLunarFestival(): string
```

### getSolarTerm

Get Traditional Chinese Solar Terms, only works when system language is set to Chinese, or return the string `'INVALID'` if there is no Solar Term

```ts
getSolarTerm(): string
```

### getShowFestival

Get the holiday strings displayed on that day, the priority is Gregorian holidays, Chinese lunar holidays, Chinese lunar festivals in that order, only when the system language is set to Chinese

```ts
getShowFestival(): string
```

### getLunarMonthCalendar

Get the monthly calendar information of the current month of Chinese lunar calendar, only works when the system language is set to Chinese

```ts
getLunarMonthCalendar(): LunarMonthCalendar
```

#### LunarMonthCalendar

| Property         | Type                               | Description                                                                                                         | API_LEVEL |
| ---------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- |
| day_count        | `number`                | Number of days in the current month                                                                                 | 2.0       |
| lunar_days_array | `Array<string>` | Array of display content for each day of the current month, display content priority for holidays, Solar Term, date | 2.0       |

### onSunrise

> Start from API_LEVEL `3.0`

Register the Sunrise event listener callback function to take effect only when the device weather information

```ts
onSunrise(callback: () => void): void
```

### onSunset

> Start from API_LEVEL `3.0`

Register the Sunset event listener callback function to take effect only when the device weather information

```ts
onSunset(callback: () => void): void
```

### onPhoneTimeSetting

> Start from API_LEVEL `3.0`

Register the phone modify time event listening callback function

```ts
onPhoneTimeSetting(callback: () => void): void
```

## Example

```js

const time = new Time()
const currentTime = time.getTime()
```

---

## Vibrator

### Import

```js
import { Vibrator } from '@zos/sensor'
```

### Typings

- Description: Vibrator
- Example:

```js
import { Vibrator, VIBRATOR_SCENE_DURATION } from '@zos/sensor'

const vibrator = new Vibrator()
vibrator.start()

// set scene
vibrator.setMode(VIBRATOR_SCENE_DURATION)
vibrator.start()
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Vibrator.

## Methods

### start

Start vibration, the'option 'parameter passed in only takes effect for this vibration, and supports passing in vibration scene arrays after API_LEVEL 3.6

```ts
start(option?: Option | Array<Action>): void
```

#### Option

| Property | Type                | Required | DefaultValue                             | Description                                                   | API_LEVEL |
| -------- | ------------------- | -------- | ---------------------------------------- | ------------------------------------------------------------- | --------- |
| mode     | `number` | N        | `VIBRATOR_SCENE_SHORT_MIDDLE` | Vibration mode, Value refer to Vibration motor mode constants | 2.0       |

#### Action

| Property | Type                | Required | DefaultValue | Description           | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | --------------------- | --------- |
| type     | `number` | Y        | -            | Vibration Scene Type  | 3.6       |
| duration | `number` | N        | -            | Duration of vibration | 3.6       |

#### Constants

##### Vibration motor mode constants

| Constant                         | Description                                                                                                                                                               | API_LEVEL |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `VIBRATOR_SCENE_SHORT_LIGHT`     | Light vibration intensity and short time (20ms)                                                                                                                           | 2.0       |
| `VIBRATOR_SCENE_SHORT_MIDDLE`    | Medium vibration intensity, short time (20ms)                                                                                                                             | 2.0       |
| `VIBRATOR_SCENE_SHORT_STRONG`    | High vibration intensity and short time (20ms)                                                                                                                            | 2.0       |
| `VIBRATOR_SCENE_DURATION`        | High vibration intensity, lasting 600ms                                                                                                                                   | 2.0       |
| `VIBRATOR_SCENE_DURATION_LONG`   | High vibration intensity, lasting 1000ms                                                                                                                                  | 2.0       |
| `VIBRATOR_SCENE_STRONG_REMINDER` | High vibration intensity, four vibrations in 1200ms, can be used for stronger reminders                                                                                   | 2.0       |
| `VIBRATOR_SCENE_NOTIFICATION`    | Two short, continuous vibrations, consistent with the watch message notification vibration feedback                                                                       | 2.0       |
| `VIBRATOR_SCENE_CALL`            | High vibration intensity, single vibration twice in 500ms, continuous vibration, need to manually `stop`, consistent with the watch call vibration feedback               | 2.0       |
| `VIBRATOR_SCENE_TIMER`           | High vibration intensity, single long vibration 500ms, continuous vibration, need to manually `stop`, consistent with the watch alarm clock, countdown vibration feedback | 2.0       |

### stop

Stop vibration

```ts
stop(): void
```

### setMode

Set the vibration mode, call `start()` after successful setting, it will vibrate according to the set mode

```ts
setMode(option: Option): void
```

#### Option

| Property | Type                | Required | DefaultValue | Description                                                   | API_LEVEL |
| -------- | ------------------- | -------- | ------------ | ------------------------------------------------------------- | --------- |
| mode     | `number` | Y        | -            | Vibration mode, Value refer to Vibration motor mode constants | 2.0       |

### getConfig

Get Vibration Motor Configuration

```ts
getConfig(): Option
```

#### Option

| Property | Type                | Description                                                   | API_LEVEL |
| -------- | ------------------- | ------------------------------------------------------------- | --------- |
| mode     | `number` | Vibration mode, Value refer to Vibration motor mode constants | 2.0       |

### getType

> Start from API_LEVEL `3.6`

Get Vibration Scene Type

```ts
getType(): Type
```

#### Type

| Property       | Type                | Description                                   | API_LEVEL |
| -------------- | ------------------- | --------------------------------------------- | --------- |
| GENTLE_SHORT   | `number` | Vibration scene, light short vibration        | 3.6       |
| STRONG_SHORT   | `number` | Vibration scene, strong and short vibration   | 3.6       |
| STANDARD_CROWN | `number` | Vibration scene, standard crown vibration     | 3.6       |
| STRONG_CROWN   | `number` | Vibration scene, strong crown vibration       | 3.6       |
| SPULSE_CROWN   | `number` | Vibration scene, single-pulse crown vibration | 3.6       |
| DIPULSE_CROWN  | `number` | Vibration scene, dual-pulse crown vibration   | 3.6       |
| KEYCODE_CLICK  | `number` | Vibration scene, password button vibration    | 3.6       |
| URGENT         | `number` | Vibration scene, urgent vibration             | 3.6       |
| CONTINUOUS     | `number` | Vibration scene, continuous vibration         | 3.6       |
| PAUSE          | `number` | Vibration scene, stop vibration               | 3.6       |

## Example

```js

const vibrator = new Vibrator()
vibrator.start()

// set scene
vibrator.setMode(VIBRATOR_SCENE_DURATION)
vibrator.start()
```

---

## Wear

### Import

```js
import { Wear } from '@zos/sensor'
```

### Typings

- Description: Wearing status sensor
- Example:

```js
import { Wear } from '@zos/sensor'

const wear = new Wear()
const status = wear.getStatus()
const callback = () => {
  console.log(wear.getStatus())
}

wear.onChange(callback)

// When not needed for use
wear.offChange(callback)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Wearing status sensor.

## Methods

### getStatus

Get the current device wearing status, `0`: not wearing, `1`: wearing, `2`: in motion, `3`: not sure

```ts
getStatus(): number
```

### onChange

Register the device wear status change event listening callback function

```ts
onChange(callback: () => void): void
```

### offChange

Cancel the device wear status change event listening callback function

```ts
offChange(callback: () => void): void
```

## Example

```js

const wear = new Wear()
const status = wear.getStatus()
const callback = () => {
  console.log(wear.getStatus())
}

wear.onChange(callback)

// When not needed for use
wear.offChange(callback)
```

---

## Weather

### Import

```js
import { Weather } from '@zos/sensor'
```

### Typings

- Description: Weather Forecasts sensor
- Example:

```js
import { Weather } from '@zos/sensor'

const weather = new Weather()
const { forecastData, tideData, cityName } = weather.getForecast()

console.log(cityName)

for (let i = 0; i < forecastData.count; i++) {
  const element = forecastData.data[i]
  console.log('Index' + element.index)
  console.log('Highest temperature' + element.high)
  console.log('Lowest temperature' + element.low)
}

for (let i = 0; i < tideData.count; i++) {
  const element = tideData.data[i]
  console.log('Sunrise' + element.sunrise.hour + element.sunrise.minute)
  console.log('Sunset' + element.sunset.hour + element.sunset.minute)
}
```

### Methods

| Method | Signature | Description | API_LEVEL | Permission |
|--------|-----------|-------------|-----------|------------|
| `getForecastWeather` | `getForecastWeather(): Weather.getForecastWeather.ForecastWeather` | Get weather forecast data | — | — |

### Method Details

#### getForecastWeather

- Signature: `getForecastWeather(): Weather.getForecastWeather.ForecastWeather`
- Description: Get weather forecast data
- Returns: `Weather.getForecastWeather.ForecastWeather`

> **⚠️ Warning**
>
> This interface has been deprecated, please refer to https://github.com/orgs/zepp-health/discussions/83

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Weather Forecasts sensor.

## Methods

### getForecastWeather

Get weather forecast data

```ts
getForecastWeather(): ForecastWeather
```

#### ForecastWeather

| Property     | Type                      | Description         | API_LEVEL |
| ------------ | ------------------------- | ------------------- | --------- |
| cityName     | `string`       | City Name           | 2.0       |
| forecastData | `ForecastData` | Weather Information | 2.0       |
| tideData     | `TideData`     | Tide Information    | 2.0       |

#### ForecastData

| Property | Type                                         | Description                                                    | API_LEVEL |
| -------- | -------------------------------------------- | -------------------------------------------------------------- | --------- |
| data     | `Array<ForecastDataItem>` | Weather Information Array, index 0 position represents the day | 2.0       |
| count    | `number`                          | The length of Weather Information Array                        | 2.0       |

#### ForecastDataItem

| Property | Type                | Description                                                                      | API_LEVEL |
| -------- | ------------------- | -------------------------------------------------------------------------------- | --------- |
| high     | `number` | Maximum temperature                                                              | 2.0       |
| low      | `number` | Lowest temperature                                                               | 2.0       |
| index    | `number` | The index value of the weather, see `index` below for a description of the value | 2.0       |

#### index

| Value | Type                | Description          | API_LEVEL |
| ----- | ------------------- | -------------------- | --------- |
| 0     | `number` | Cloudy               | 2.0       |
| 1     | `number` | Showers              | 2.0       |
| 2     | `number` | Snow Showers         | 2.0       |
| 3     | `number` | Sunny                | 2.0       |
| 4     | `number` | Overcast             | 2.0       |
| 5     | `number` | Light Rain           | 2.0       |
| 6     | `number` | Light Snow           | 2.0       |
| 7     | `number` | Moderate Rain        | 2.0       |
| 8     | `number` | Moderate Snow        | 2.0       |
| 9     | `number` | Heavy Snow           | 2.0       |
| 10    | `number` | Heavy Rain           | 2.0       |
| 11    | `number` | Sandstorm            | 2.0       |
| 12    | `number` | Rain and Snow        | 2.0       |
| 13    | `number` | Fog                  | 2.0       |
| 14    | `number` | Hazy                 | 2.0       |
| 15    | `number` | T-Storms             | 2.0       |
| 16    | `number` | Snowstorm            | 2.0       |
| 17    | `number` | Floating dust        | 2.0       |
| 18    | `number` | Very Heavy Rainstorm | 2.0       |
| 19    | `number` | Rain and Hail        | 2.0       |
| 20    | `number` | T-Storms and Hail    | 2.0       |
| 21    | `number` | Heavy Rainstorm      | 2.0       |
| 22    | `number` | Dust                 | 2.0       |
| 23    | `number` | Heavy sand storm     | 2.0       |
| 24    | `number` | Rainstorm            | 2.0       |
| 25    | `number` | Unknown              | 2.0       |
| 26    | `number` | Cloudy Nighttime     | 2.0       |
| 27    | `number` | Showers Nighttime    | 2.0       |
| 28    | `number` | Sunny Nighttime      | 2.0       |

#### TideData

| Property | Type                                     | Description                                                 | API_LEVEL |
| -------- | ---------------------------------------- | ----------------------------------------------------------- | --------- |
| data     | `Array<TideDataItem>` | Tide Information Array, index 0 position represents the day | 2.0       |
| count    | `number`                      | The length of Tide Information Array                        | 2.0       |

#### TideDataItem

| Property | Type                 | Description  | API_LEVEL |
| -------- | -------------------- | ------------ | --------- |
| sunrise  | `Sunrise` | Sunrise time | 2.0       |
| sunset   | `Sunset`  | Sunset time  | 2.0       |

#### Sunrise

| Property | Type                | Description           | API_LEVEL |
| -------- | ------------------- | --------------------- | --------- |
| hour     | `number` | Sunrise time - hour   | 2.0       |
| minute   | `number` | Sunrise time - minute | 2.0       |

#### Sunset

| Property | Type                | Description           | API_LEVEL |
| -------- | ------------------- | --------------------- | --------- |
| hour     | `number` | Sunrise time - hour   | 2.0       |
| minute   | `number` | Sunrise time - minute | 2.0       |

## Example

```js

const weather = new Weather()
const { forecastData, tideData, cityName } = weather.getForecast()

console.log(cityName)

for (let i = 0; i < forecastData.count; i++) {
  const element = forecastData.data[i]
  console.log('Index' + element.index)
  console.log('Highest temperature' + element.high)
  console.log('Lowest temperature' + element.low)
}

for (let i = 0; i < tideData.count; i++) {
  const element = tideData.data[i]
  console.log('Sunrise' + element.sunrise.hour + element.sunrise.minute)
  console.log('Sunset' + element.sunset.hour + element.sunset.minute)
}
```

---

## Workout

### Import

```js
import { Workout } from '@zos/sensor'
```

### Typings

- Description: Workout Sensor
- API_LEVEL: 3.0
- Permission: `data:user.hd.workout`
- Example:

```js
import { Workout } from '@zos/sensor'

const workout = new Workout()

const status = workout.getStatus()
const history = workout.getHistory()

const hrZoneSettings = workout.getUserHrZoneSettings()
// {"type":0,"rest":83,"range":[129,138,147,157,166,175]}
// {"type":1,"rest":70,"range":[90,108,126,144,162,181]}

const trackNavInfo = workout.getWorkoutTrackNavInfo()

```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Workout Sensor.

> **ℹ️ Info**
>
> permission code: `data:user.hd.workout`

## Methods

### getStatus

Get altitude value in meters

```ts
getStatus(): Status
```

#### Status

| Property         | Type                | Description        | API_LEVEL |
| ---------------- | ------------------- | ------------------ | --------- |
| vo2Max           | `number` | VO2 Max            | 3.0       |
| trainingLoad     | `number` | Training Load      | 3.0       |
| fullRecoveryTime | `number` | Full Recovery Time | 3.0       |

### getHistory

Get the duration of the workout record

```ts
getHistory(): Array<History>
```

#### History

| Property  | Type                | Description                    | API_LEVEL |
| --------- | ------------------- | ------------------------------ | --------- |
| startTime | `number` | Workout start time             | 3.0       |
| duration  | `number` | Duration of workout in seconds | 3.0       |

### getUserHrZoneSettings

> Start from API_LEVEL `4.2`

Get user heart rate zone settings

```ts
getUserHrZoneSettings(): HrZoneSettings
```

#### HrZoneSettings

| Property | Type                  | Description                                                                                                                       | API_LEVEL |
| -------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------- |
| type     | `number`   | Heart rate zone type, 0: by heart rate reserve, 1: by maximum heart rate                                                          | 4.2       |
| rest     | `number`   | Resting heart rate value                                                                                                          | 4.2       |
| range    | `number[]` | Heart rate zone value array with 6 values, corresponding to: Ligit, Intensive, Aerobic, Anaerobic, VO2 max and maximum heart rate | 4.2       |

### getWorkoutTrackNavInfo

> Start from API_LEVEL `4.2`

Get workout track navigation information, returns navigation info object when navigation is enabled, returns `undefined` when navigation is not enabled

```ts
getWorkoutTrackNavInfo(): WorkoutTrackNavInfo | undefined
```

#### WorkoutTrackNavInfo

| Property       | Type                | Description                                                             | API_LEVEL |
| -------------- | ------------------- | ----------------------------------------------------------------------- | --------- |
| isYaw          | `number` | Whether off course, true: off course, false: on course                  | 4.2       |
| yawAngle       | `number` | Yaw angle                                                               | 4.2       |
| yawDistance    | `number` | Yaw distance in meters                                                  | 4.2       |
| remainDistance | `number` | Remaining distance in meters                                            | 4.2       |
| turnDistance   | `number` | Distance to next turn in meters                                         | 4.2       |
| turnType       | `number` | The direction of the next turn, refer to `TURN_TYPE` for value meanings | 4.2       |

#### TURN_TYPE

| Value | Type                | Description         | API_LEVEL |
| ----- | ------------------- | ------------------- | --------- |
| 1     | `number` | Turn right forward  | 4.2       |
| 2     | `number` | Turn right          | 4.2       |
| 3     | `number` | Turn right backward | 4.2       |
| 4     | `number` | U-turn to the right | 4.2       |
| 5     | `number` | U-turn              | 4.2       |
| 6     | `number` | U-turn to the left  | 4.2       |
| 7     | `number` | Turn left backward  | 4.2       |
| 8     | `number` | Turn left           | 4.2       |
| 9     | `number` | Turn left forward   | 4.2       |

## Example

```js

const workout = new Workout()

const status = workout.getStatus()
const history = workout.getHistory()

const hrZoneSettings = workout.getUserHrZoneSettings()
// {"type":0,"rest":83,"range":[129,138,147,157,166,175]}
// {"type":1,"rest":70,"range":[90,108,126,144,162,181]}

const trackNavInfo = workout.getWorkoutTrackNavInfo()
```

---

## WorldClock

### Import

```js
import { WorldClock } from '@zos/sensor'
```

### Typings

- Description: World Clock Sensor
- API_LEVEL: 3.0
- Example:

```js
import { WorldClock } from '@zos/sensor'

const worldClock = new WorldClock()
const worldClockCount = worldClock.getCount()

for (let i = 0; i < worldClockCount; i++) {
  const worldClockInfo = worldClock.getInfo(i)
  console.log(worldClockInfo.city)
  console.log(worldClockInfo.cityCode)
  console.log(worldClockInfo.hour)
  console.log(worldClockInfo.minute)
  console.log(worldClockInfo.timeZoneHour)
  console.log(worldClockInfo.timeZoneMinute)
}

// When not needed for use
worldClock.destroy()
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

World Clock Sensor.

## Methods

### getCount

Get the number of configured world clocks

```ts
getCount(): number
```

### getInfo

Get the configured world clock information according to the index

```ts
getInfo(index: number): WorldClockInfo
```

#### WorldClockInfo

| Property       | Type                | Description                         | API_LEVEL |
| -------------- | ------------------- | ----------------------------------- | --------- |
| city           | `string` | City Name                           | 3.0       |
| cityCode       | `string` | City code, e.g. San Francisco `SFO` | 3.0       |
| hour           | `number` | Hour                                | 3.0       |
| minute         | `number` | Minute                              | 3.0       |
| timeZoneHour   | `number` | Time Zone hours                     | 3.0       |
| timeZoneMinute | `number` | Time zone minutes                   | 3.0       |

## Example

```js

const worldClock = new WorldClock()
const worldClockCount = worldClock.getCount()

for (let i = 0; i < worldClockCount; i++) {
  const worldClockInfo = worldClock.getInfo(i)
  console.log(worldClockInfo.city)
  console.log(worldClockInfo.cityCode)
  console.log(worldClockInfo.hour)
  console.log(worldClockInfo.minute)
  console.log(worldClockInfo.timeZoneHour)
  console.log(worldClockInfo.timeZoneMinute)
}

// When not needed for use
worldClock.destroy()
```

---

## checkSensor

### Import

```js
import { checkSensor } from '@zos/sensor'
```

> Start from API_LEVEL `3.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Check the availability of sensors on the current device.

## Type

```ts
function checkSensor(sensor: Sensor): Result
```

## Parameters

### Sensor

| Type                | Description                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `object` | Sensor, such as checking if the positioning sensor is available, pass in the `Geolocation` sensor construction function |

### Result

| Type                 | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `boolean` | `true` - auto-brightness is set to on, `false` - auto-brightness is set to off |

## Example

```js

const result = checkSensor(Geolocation)
let geolocation = null

if (result) {
  geolocation = new Geolocation()
}
```

---

