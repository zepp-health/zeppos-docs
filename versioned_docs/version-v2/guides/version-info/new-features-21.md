---
title: Zepp OS 2.1 New Features
sidebar_label: Zepp OS 2.1 New Features
---

In Zepp OS 2.1, the highly requested community APIs for geolocation and barometric have been opened up and a number of bug fixes have been made to improve system stability. Here are the full updates to the JS API section.

- [Geolocation](../../reference/device-app-api/newAPI/sensor/Geolocation.mdx)
  - Geolocation sensor for obtaining positioning information position
- [Barometer](../../reference/device-app-api/newAPI/sensor/Barometer.mdx)
  - Barometric sensor for acquiring height and air pressure
- [BloodOxygen](../../reference/device-app-api/newAPI/sensor/BloodOxygen.mdx)
  - Add `start` method for blood oxygen sensor to enable blood oxygen measurement
- [HeartRate](../../reference/device-app-api/newAPI/sensor/HeartRate.mdx)
  - Heart rate sensor support measurement
- [Time](../../reference/device-app-api/newAPI/sensor/Time.mdx)
  - Add `is24Hour`、`format_hour` property，`onPerMinute`、`onPerDay` event
- [setScrollMode](../../reference/device-app-api/newAPI/page/setScrollMode.mdx)
  - Add scrolling mode `SCROLL_MODE_SWIPER_HORIZONTAL`，page support horizontal scrolling
- Add drop wrist screen off and pause palm screen off control API
  - [pauseDropWristScreenOff](../../reference/device-app-api/newAPI/display/pauseDropWristScreenOff.mdx)
  - [resetDropWristScreenOff](../../reference/device-app-api/newAPI/display/resetDropWristScreenOff.mdx)
  - [pausePalmScreenOff](../../reference/device-app-api/newAPI/display/pausePalmScreenOff.mdx)
  - [resetPalmScreenOff](../../reference/device-app-api/newAPI/display/resetPalmScreenOff.mdx)
- [getSystemInfo](../../reference/device-app-api/newAPI/settings/getSystemInfo.mdx)
  - For querying Zepp OS version, device firmware version, API_LEVEL version
- [getTemperatureUnit](../../reference/device-app-api/newAPI/settings/getTemperatureUnit.mdx)
  - Get temperature units
- [getTimeFormat](../../reference/device-app-api/newAPI/settings/getTimeFormat.mdx)
  - Get hour format
