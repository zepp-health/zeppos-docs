---
title: Guide to using the simulator
sidebar_label: Guide
---

## Intro

Zepp OS simulator can help developers simulate the running performance of Mini Programs. At the same time, you can view the log of the Mini Program, which is convenient for developers to debug and greatly improve the development efficiency.

![desk.png](/img/simulator/workspace.jpg)

Take the [TodoList](../../../samples/app/toDoList.md) Mini Program running on the simulator as an example.

There are the following windows.

- Device side simulator
- Simulator main interface
- Settings App simulator and logs
- Side Service logs

## Introduction for use

### Top Function Introduction

![desk.png](/img/simulator/interface.png)

1. User avatar, click to login
2. "Device Simulator" open button
3. "Settings App Simulator" open button
4. Bridge mode open button
5. Screenshot
6. "Device Simulator" model selection box
7. "Device Simulator" download management

### Install and open "Device Simulator"

Zepp OS simulator does not have a built-in "device simulator", you need to download it from the "device simulator" download manager.

![download.jpg](/img/simulator/download.jpg)

:::info
Developers can download the corresponding models as needed, no need to download all of them
:::

After completing the download, the available models will appear in the "Device Simulator" model selection box. After selecting the corresponding model, click the "Device Simulator" open button to successfully pop up the "Device Simulator".

![device_simulator.jpg](/img/simulator/device_simulator.jpg)

After successfully enabling the Device Simulator, the [Zeus CLI `dev` Compile Preview](../cli/index.md#zeus-dev-compilation-preview-simulator) command will be able to connect to the simulator successfully and preview the project automatically.

:::caution
If "Device Simulator" does not pop up successfully after clicking the "Device Simulator" open button, please check the installation process carefully for any omissions, refer to [Simulator - Installation and launch](./setup.md).

Typically, this phenomenon occurs on Windows and MacOS platforms because the virtual network card has not been successfully installed and configured correctly.
:::

#### Use the keyboard to simulate the physical keys of the real machine

When the window is focused on "Device Simulator", the keys on the keyboard can simulate the physical keys of the real machine.

Watch key name|Keyboard keys|Description
---|---|---
`HOME`|`Home`, use the `fn` + `←` key combination on a Mac|Go to app list/back to Watchface
`SHORTCUT`|`End`, use the `fn` + `→` key combination on a Mac|-
`SELECT`|`enter`|-
`BACK`|`delete`|-
`UP`|`↑`|-
`DOWN`|`↓`|-

Use the mouse wheel to simulate the rotation of the digital crown.

### Apps

Mini Program development history, manage connected Mini Programs.

![applist.png](/img/simulator/1.png)

### Sensors

Sensor settings, you can mock the value of the sensor.

![applist.png](/img/simulator/2.png)

### Display

Customized settings.

![applist.png](/img/simulator/3.png)

### User

Mock the value of user settings.

![applist.png](/img/simulator/4.png)

### Console

You can view the logs of device applications and provide filtering capabilities.

![applist.png](/img/simulator/5.png)
