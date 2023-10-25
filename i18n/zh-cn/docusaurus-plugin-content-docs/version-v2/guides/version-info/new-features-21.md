---
title: Zepp OS 2.1 新特性
sidebar_label: Zepp OS 2.1 新特性
---

在 Zepp OS 2.1 版本中，开放社区呼声非常高的地理位置和气压高度计 API。并且进行一系列 bug 修复，提高系统稳定性。以下是 JS API 部分完整更新内容。

- [Geolocation](../../reference/device-app-api/newAPI/sensor/Geolocation.mdx)
  - 定位传感器，用于获取定位信息位置
- [Barometer](../../reference/device-app-api/newAPI/sensor/Barometer.mdx)
  - 气压高度传感器
- [BloodOxygen](../../reference/device-app-api/newAPI/sensor/BloodOxygen.mdx)
  - 血氧传感器新增 `start` 方法，可以开启血氧测量
- [HeartRate](../../reference/device-app-api/newAPI/sensor/HeartRate.mdx)
  - 心率传感器支持测量
- [Time](../../reference/device-app-api/newAPI/sensor/Time.mdx)
  - 新增 `is24Hour`、`format_hour` 属性，`onPerMinute`、`onPerday` 事件
- [setScrollMode](../../reference/device-app-api/newAPI/page/setScrollMode.mdx) 新增滚动模式 `SCROLL_MODE_SWIPER_HORIZONTAL`，页面支持横向滚动
- 新增覆盖手掌息屏与落腕息屏控制 API
  - [pauseDropWristScreenOff](../../reference/device-app-api/newAPI/display/pauseDropWristScreenOff.mdx)
  - [pausePalmScreenOff](../../reference/device-app-api/newAPI/display/pausePalmScreenOff.mdx)
  - [resetDropWristScreenOff](../../reference/device-app-api/newAPI/display/resetDropWristScreenOff.mdx)
  - [resetPalmScreenOff](../../reference/device-app-api/newAPI/display/resetPalmScreenOff.mdx)
- [getSystemInfo](../../reference/device-app-api/newAPI/settings/getSystemInfo.mdx)
  - 用于查询 Zepp OS 版本、设备固件版本、API_LEVEL 版本
- [getTemperatureUnit](../../reference/device-app-api/newAPI/settings/getTemperatureUnit.mdx)
  - 用于获取温度单位
- [getTimeFormat](../../reference/device-app-api/newAPI/settings/getTimeFormat.mdx)
  - 用于获取时间的小时制格式
