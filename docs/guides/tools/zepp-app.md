---
title: Zepp App Developer Mode
sidebar_label: Zepp App Developer Mode
---

## Introduction

The developer mode in Zepp App has the following main functions.

- Sacn the Mini Program or Watchface preview QR code to preview the Mini Program or Watchface on the real device
- View real device logs
- Use Bridge mode to establish a connection

## Developer mode opening method

- Turn on
  - Go to "Profile" => "Settings" => "About" and click the Zepp icon 7 times in a row until a pop-up window appears
- Turn off
  - Go to"Profile" => "Settings" and remove the Developer Mode option

![devInfo.png](/img/docs/watchface/lesson/dev_info.png)

## "Scan" real machine preview

The "Zeus CLI" `preview` command compiles a preview and the "Watchface Maker" installation generates a QR code, which can be scanned and installed on the device using the "Scan" function.

![installAppScanCode.png](/img/docs/watchface/lesson/install_app_scan_code.jpg)

## View real machine logs

Click the Mini Program icon to enter the log screen, you can view the log screen of "Device App" and "Side Service".

Click the button at the bottom right to start collecting logs, and then run the Mini Program on the real machine to collect the relevant logs.

![installAppScanCode.png](/img/docs/guides/tools/real_machine_log.jpg)

:::caution
The "Settings app" real machine log is temporarily unavailable for viewing.
:::

## Turn on Bridge mode

Click the Bridge button to enable Develop Bridge Mode.

Please refer to [Developer Bridge Mode](../faq/developer-bridge-mode.md) for more information about the Develop Bridge mode.
