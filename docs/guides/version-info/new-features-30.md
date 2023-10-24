---
title: Zepp OS 3.0 New Features
sidebar_label: Zepp OS 3.0 New Features
---

Zepp OS 3.0 brings a wealth of new features!

## App Service

The "App Service" runs in a no-UI manner and can still run after the user exits the Mini Program page.

For details on this new feature, refer to [App Service](../framework/device/app-service.md)

## New Screen Adaptation Scheme

We introduced a new screen adaptation scheme that abstracts screen characteristics into square, round, and band screens.

By coding according to the screen adaptation specification and maintaining a resource file for each screen type, the code can run on all devices with the same type of screen, without having to be adapted separately for a particular device.

For details, refer to [Screen adaptation](../framework/device/screen-adaption.md)

## Canvas Widget

![canvas_demo.jpg](/img/docs/guides/version_info/canvas_demo.jpg)

Canvas enables more flexible view rendering and provides a fundamental capability for building complex UI.

For details, refer to [Canvas](../../reference/device-app-api/newAPI/ui/widget/CANVAS.mdx)

## Multimedia interface

Supports playback and recording of audio, based on file system, in `MP3` format.

For details, refer to [@zos/media](../../reference/device-app-api/newAPI/media.mdx)。

## BLE Master Mode

The watch device can be used as a BLE Master device to connect to other Bluetooth devices such as heart rate bands, pedometers, sport cameras, etc.

![BLE](/img/docs/guides/version_info/BLE.svg)

For details, refer to [BLE Central](../framework/device/ble-central.md)。

## File Transfer

Two-way file transfer is possible between "Device App" and "Side Service".

Usage Reference for "Device App" [@zos/ble/TransferFile](../../reference/device-app-api/newAPI/transfer-file/TransferFile.mdx)

Usage Reference for "Side Service" [TransferFile](../../reference/side-service-api/transfer-file.mdx)

## Enhanced capacity for Side Service

In addition to the "File Transfer" function, "Side Service" also adds the functions of "File Download" and "Image Conversion".

The Mini Program enables the following functional scenarios:

- Use the "File Download" function to download the image resources, convert the image to the image format supported by the watch device through the "Image Conversion" function, transfer the image to the watch device through "File Transfer", and display the image on the watch device through the IMG widget.
- Download the audio file and transfer it to your watch device using [@zos/media](../../reference/device-app-api/newAPI/media.mdx) audio interface for music playback.

## System Event

System status changes are notified to [App Service](../framework/device/app-service.md) in the form of "system events".

## System Notification

![notification_demo.jpg](/img/docs/guides/version_info/notification_demo.jpg)

Add System Notification Center API, the Mini Program can send system notifications to reach users in a more friendly way.

The system notification API provides a high degree of customizability, and the number of buttons, content, and vibration effect can be customized by parameters.

Users can click the button to open the Mini Program page or evoke the "App Service".

For details, refer to [@zos/notification](../../reference/device-app-api/newAPI/notification/notify.mdx)

## More Sensor Capabilities

- [Geolocation](../../reference/device-app-api/newAPI/sensor/Geolocation.mdx)
- [Gyroscope](../../reference/device-app-api/newAPI/sensor/Gyroscope.mdx)
- [Compass](../../reference/device-app-api/newAPI/sensor/Compass.mdx)
- [Stress](../../reference/device-app-api/newAPI/sensor/Stress.mdx)
- [Sleep](../../reference/device-app-api/newAPI/sensor/Sleep.mdx)
- [BloodOxygen](../../reference/device-app-api/newAPI/sensor/BloodOxygen.mdx)
- [HeartRate](../../reference/device-app-api/newAPI/sensor/HeartRate.mdx)
- [Screen](../../reference/device-app-api/newAPI/sensor/Screen.mdx)

## New design specifications

Refer to [Zepp OS Design Specifications](../../designs/index.md)

## Full Examples

Two Mini Programs demonstrating the capabilities of Zepp OS v3 are available in our Github Sample repository at

- [3.0-feature](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/3.0-feature)
- [notification](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/notification)
- [download](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/download)
