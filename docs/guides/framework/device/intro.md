---
title: Introduction
sidebar_label: Introduction
---

Zepp OS Mini Program provide developers with a JavaScript runtime environment to implement various capabilities such as UI interactions and sensor calls.

## Mini Program Form

The operating scenarios of the Mini Program are

- Mini Program
- SecondaryWidget
- Shortcut Cards

SecondaryWidget and Shortcut Cards refer to [Register SecondaryWidget and Shortcut Cards](secondary-widget.md).

## Zepp OS Open Capabilities

:::caution
Mini Program developed using the Zepp OS 2.0 API will not run on devices with Zepp OS version 1.0.

To develop a Mini Program for Zepp OS version 1.0 devices, please switch to v1.0 by clicking the version switch button in the upper right corner of the document.

- To check the Zepp OS version on your device, please refer to [List of Devices with Zepp OS](../../../reference/related-resources/device-list.mdx)
- Please refer to [API_LEVEL (Compatibility)](../device/compatibility.md) for more information about compatibility
:::

The Zepp OS 2.0 API provides a more granular view of the system's open capabilities, breaking down the API into more than a dozen modules.

- UI
- Frame Interface
- Sensor
- Mini Program related
- Page related
- Router
- Interaction
- System Settings
- Display
- Device
- User
- File System
- Storage
- I18n
- Utils
- BLE

On the device side, developers use the open capabilities of Zepp OS by calling these APIs.

The `UI` module provides a very rich set of UI widgets that can be created by calling the `createWidget` API. In addition, the UI widgets include a full set of events for developers to handle the interaction logic.

Zepp OS is a health management system for smart wearable devices. Vital signs related movement data is opened through sensor modules to maximize support for developers to create health value for users.

The Router module allows for multi-page interaction and is the basis for complex functionality of the Mini Program.

Please refer to the detailed [API documentation](../../../reference/device-app-api/newAPI/ui/widget/TEXT.mdx) for more capabilities.
