---
title: Zepp OS 3.5 New Features
sidebar_label: Zepp OS 3.5 New Features
---

import useBaseUrl from '@docusaurus/useBaseUrl'

Zepp OS 3.5 brings a lot of exciting new features.

## Workout Extension

"Workout Extension" is a new feature of Zepp OS 3.5, which extends the functionality of the "Workout" system application in the form of a plug-in, aiming to enhance the user experience in workouts.

This feature allows developers to use the Zepp OS JS API to create "Workout Extension" plugins, providing users with more features in "Workout" system applications, including but not limited to workout data, workout charts, Compass, GoPro, and other applications.

<img src={useBaseUrl('/img/docs/workout-extension/sample_both.jpeg')} width="80%" title="download_zepp" />

:::info
Currently, the "Workout Extension" feature can be experienced on Amazfit T-Rex 3, Amazfit Cheetah Pro, Amazfit Cheetah (Round), Amazfit Cheetah Square, Amazfit T-Rex Ultra, and Amazfit Falcon devices.
:::

Workout Extension has the following core values:

1. **Customizability**

- **Personalized UI design** : Developers can take advantage of the powerful widget capabilities of Zepp OS to draw and customize views with complete freedom.
- **Exclusive sports data combination** : Developers can design and choose the displayed data combination according to their personal sports type and preferences, making the interface more tailored to the needs of specific sports.
- **Instant feature expansion** : Users can add new workout features to the device without the need for over-the-air (OTA) technology.

2. **Real-time and rich sports data**

- **Real-time key indicator monitoring** : During exercise or training, users can monitor key indicators such as heart rate, speed, and distance in real-time, which helps them adjust exercise intensity and strategy in a timely manner to optimize training effectiveness.
- **In-depth high-level Data Analysis** : Provide higher-level and multi-dimensional sports data to help users deeply understand their sports performance and further improve sports skills and performance.

3. **Functional scalability**

- **Bluetooth connectivity capability** : Smartwatches can connect with external devices such as cadence sensors to obtain more comprehensive data, thereby enhancing the accuracy and depth of motion analysis.
- **Network Function** : Smartwatches will be able to use network connections to synchronize data in real time to the cloud for more complex data processing and analysis.

Refer to [Workout Extension](../workout-extension/intro.mdx) for details.

## Interface capability added

### UI and user interaction related

- [Button widget](../../reference/device-app-api/newAPI/ui/widget/BUTTON.mdx)
  - Setting custom fonts is supported
- [createModal](../../reference/device-app-api/newAPI/interaction/createModal.mdx)
  - Enhance the form of pop-up windows and enrich parameters to achieve multiple styles
- [scrollTo](../../reference/device-app-api/newAPI/page/scrollTo.mdx)
  - Add animation configuration
- [setScrollMode](../../reference/device-app-api/newAPI/page/setScrollMode.mdx)
  - Added bounce effect for page rebound
- [Widget Animation](../../reference/device-app-api/newAPI/ui/widgetAnimations.mdx)
  - Added `anim_repeat_func` callback function, allowing developers to respond more accurately to animations

### Sensor related

- [SCREEN](../../reference/device-app-api/newAPI/sensor/Screen.mdx)
  - Added the `getLight` method to measure light intensity
- [BUZZ](../../reference/device-app-api/newAPI/sensor/Buzzer.mdx)
- [VIBRATOR](../../reference/device-app-api/newAPI/sensor/Vibrator.mdx)
  - New vibration scenes were added, and multiple scenes can be set to achieve continuous vibration.
- [SystemSounds](../../reference/device-app-api/newAPI/sensor/SystemSounds.mdx)
  - Play system ringtone
- [Time](../../reference/device-app-api/newAPI/sensor/Time.mdx)
  - Added `onPerHourEnd` event, triggered at the end of every hour

### Bluetooth related

- [mstStartScan](../../reference/device-app-api/newAPI/ble/mstStartScan.mdx)
  - Added scanning timeout parameter to better control scanning time

### Workout Extension related

- [SPORT_DATA](../../reference/device-app-api/newAPI/ui/widget/SPORT_DATA.mdx)
  - Display real-time workout data in motion expansion applications
- [getSportData](../../reference/device-app-api/newAPI/app-access/getSportData.mdx)
  - Added an interface to obtain sports data
