---
title: API_LEVEL 4.2 New Features
sidebar_label: API_LEVEL 4.2 New Features
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# API_LEVEL 4.2 New Features

API_LEVEL 4.2 enhances existing API capabilities, with new features mainly focused on custom keyboards and Workout sports

:::info
Still being organized and improved, frequent updates expected in the near future, stay tuned
:::

## Custom Keyboard

For details, refer to [Custom Keyboard - Introduction](../../guides/keyboard/intro.mdx)

<img src={useBaseUrl('/img/docs/keyboard/t9.png')} width="50%" title="t9" />

## [Media Multimedia](../../reference/device-app-api/newAPI/media.mdx)

Player now supports seek, with new events and a state transition diagram

<img
  src={useBaseUrl('/img/api/media_player_state.jpg')}
  width="100%"
  title="media_player_state"
/>

## [Workout Sports](../../reference/device-app-api/newAPI/sensor/Workout.mdx)

- Added `getWorkoutTrackNavInfo` to obtain track navigation information during workouts
- Added `getUserHrZoneSettings` to obtain heart rate zones

## [@zos/device/getDeviceInfo](../../reference/device-app-api/newAPI/device/getDeviceInfo.mdx)

- Added `uuid` return value to obtain the device's unique identifier
