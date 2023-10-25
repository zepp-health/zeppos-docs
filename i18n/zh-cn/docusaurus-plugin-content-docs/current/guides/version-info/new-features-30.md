---
title: Zepp OS 3.0 新特性
sidebar_label: Zepp OS 3.0 新特性
---

Zepp OS 3.0 带来了非常多丰富的新特性。

## 设备应用服务

「设备应用服务」以无 UI 的方式运行，在用户退出小程序页面后，仍然可以运行。

详情参考 [设备应用服务](../framework/device/app-service.md)。

## 全新屏幕适配方案

我们推出了全新的屏幕适配方案，将屏幕特征进行了抽象，分为方屏、圆屏和手环条状屏幕。

按照屏幕适配规范编码，针对每一种屏幕类型维护一份资源文件，代码就可以在同类型所有屏幕的设备上运行，无需针对某款设备进行单独适配。

详情参考 [屏幕适配](../framework/device/screen-adaption.md)

## Canvas 控件

![canvas_demo.jpg](/img/docs/guides/version_info/canvas_demo.jpg)

Canvas 可以带来更灵活的视图呈现，为构建复杂 UI 提供了基础能力。

详情参考 [Canvas](../../reference/device-app-api/newAPI/ui/widget/CANVAS.mdx)

## 多媒体接口

支持播放和录制音频，基于文件系统，支持 `MP3` 格式。

详细参考 [@zos/media](../../reference/device-app-api/newAPI/media.mdx)。

## BLE 主机模式

手表设备可以作为 BLE 的主机设备，连接其他蓝牙设备，如心率带、踏频计、运动相机等。

![BLE](/img/docs/guides/version_info/BLE.svg)

详细参考 [蓝牙主机模式](../framework/device/ble-central.md)。

## 文件传输

「设备应用」和「伴生服务」可以进行双向文件传输。

「设备应用」端用法参考 [@zos/ble/TransferFile](../../reference/device-app-api/newAPI/transfer-file/TransferFile.mdx)

「伴生服务」端用法参考 [TransferFile](../../reference/side-service-api/transfer-file.mdx)

## 伴生服务能力增强

除了「文件传输」功能外，「伴生服务」还新增了「文件下载」和「图片转换」的功能。

小程序可以实现以下功能场景：

- 使用「文件下载」功能下载图片资源，经过「图片转换」功能将图片转换为手表设备支持的图片格式，通过「文件传输」至手表设备，在手表设备通过 `IMG` 控件展示图片。
- 下载音频文件，传输至手表设备，使用 [@zos/media](../../reference/device-app-api/newAPI/media.mdx) 音频接口进行音乐播放。

## 系统事件

系统状态变更以「系统事件」的形式通知到 [设备应用服务](../framework/device/app-service.md)。

## 系统通知

![notification_demo.jpg](/img/docs/guides/version_info/notification_demo.jpg)

新增系统通知中心 API，小程序可以发送系统通知，以更友好的方式触达用户。

系统通知 API 提供了高度可定制性，按钮数量内容，震动效果都可以通过参数定制。

用户通过点击按钮可以打开小程序页面，或者唤起「设备应用服务」。

详情参考 [@zos/notification](../../reference/device-app-api/newAPI/notification/notify.mdx)

## 更多传感器能力

- [Geolocation 定位](../../reference/device-app-api/newAPI/sensor/Geolocation.mdx)
- [Gyroscope 陀螺仪](../../reference/device-app-api/newAPI/sensor/Gyroscope.mdx)
- [Compass 指南针](../../reference/device-app-api/newAPI/sensor/Compass.mdx)
- [Stress 压力](../../reference/device-app-api/newAPI/sensor/Stress.mdx)
- [Sleep 睡眠](../../reference/device-app-api/newAPI/sensor/Sleep.mdx)
- [BloodOxygen 血氧](../../reference/device-app-api/newAPI/sensor/BloodOxygen.mdx)
- [HeartRate 心率](../../reference/device-app-api/newAPI/sensor/HeartRate.mdx)
- [Screen 屏幕状态](../../reference/device-app-api/newAPI/sensor/Screen.mdx)

## 全新设计规范

参考 [Zepp OS 系统设计规范](../../designs/index.md)

## 完整示例

我们在 Github Sample 仓库中提供了展示 Zepp OS v3 能力的多个小程序，请参考

- [3.0-feature](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/3.0-feature)
- [notification](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/notification)
- [download](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/download)
