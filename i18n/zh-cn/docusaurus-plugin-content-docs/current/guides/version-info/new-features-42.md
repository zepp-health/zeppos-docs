---
title: API_LEVEL 4.2 新特性
sidebar_label: API_LEVEL 4.2 新特性
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# API_LEVEL 4.2 新特性

API_LEVEL 4.2 对完善了现有 API 能力，新功能主要集中在自定义键盘和 Workout 运动

:::info
仍在整理完善中，近期会有高频更新，敬请期待
:::

## 自定义键盘

详情参考 [自定义键盘 - 介绍](../../guides/keyboard/intro.mdx)

<img src={useBaseUrl('/img/docs/keyboard/t9.png')} width="50%" title="t9" />

## [Media 多媒体](../../reference/device-app-api/newAPI/media.mdx)

Player 新增 `seek()` 功能，新增事件与状态流转图

<img
  src={useBaseUrl('/img/api/media_player_state.jpg')}
  width="100%"
  title="media_player_state"
/>

## [Workout 运动](../../reference/device-app-api/newAPI/sensor/Workout.mdx)

- 新增 `getWorkoutTrackNavInfo`，可以获取运动中轨迹导航的相关信息
- 新增 `getUserHrZoneSettings`，可以获取心率区间

## [@zos/device/getDeviceInfo](../../reference/device-app-api/newAPI/device/getDeviceInfo.mdx)

- 新增 `uuid` 返回值，获取设备的唯一标识
