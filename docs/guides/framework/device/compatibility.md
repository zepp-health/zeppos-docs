---
title: API_LEVEL Compatibility
sidebar_label: API_LEVEL Compatibility
---

## Introduction

Zepp OS's open capabilities (JS API) are constantly being expanded and enhanced, but these new open capabilities are not immediately updated on some older firmware versions, which can lead to incompatibility between the API and the firmware version.

It is the goal of the Zepp OS team to make the program compatible with as many firmware versions as possible and to simplify the adaptation work for developers.

In Zepp OS 2.0, we introduced the concept of `API_LEVEL`, a complete JS API compatibility scheme.

### What is `API_LEVEL`?

`API_LEVEL` represents the guarantee of JS API availability for a given firmware version and takes the value `[primary version]. [secondary version]` as a string such as `2.0`.

The following section will cover the case of `API_LEVEL` version comparison, so here is a brief description of the API_LEVEL version comparison rules.

:::info
Compare the magnitude of the values of the primary and secondary version numbers from left to right

For example `3.1` > `3.0` > `2.98` > `2.1` > `2.0`
:::

Starting with Zepp OS 2.0, all JS APIs are marked with `API_LEVEL` at the top of the document, such as the [`showToast`](../../../reference/device-app-api/newAPI/interaction/showToast.mdx) method.

![showToast](/img/docs/guides/framework/showToast.jpg)

`API_LEVEL` can be supported to specific parameters or fields, such as API [`push`](../../../reference/device-app-api/newAPI/router/push.mdx) with parameters marked with version fields

![push](/img/docs/guides/framework/push.jpg)

For example, the GTR4 device is upgraded with firmware version `3.10.11`, the `API_LEVEL` of this firmware version is `2.0`, which means that JS APIs with `API_LEVEL` less than or equal to `2.0` can be used on this firmware.

:::tip
The biggest advantage of `API_LEVEL` for developers is that they don't need to care about firmware version number or Zepp OS version number, but only need to make compatibility adaptations to `API_LEVEL`, which greatly simplifies the workload of compatibility adaptations.
:::

### How to specify the minimum supported `API_LEVEL` for a Mini Program

Configure the `minVersion` property in the `apiVersion` field in [Mini Program Configuration](../../../reference/app-json.mdx), which is the minimum supported `API_LEVEL` for the Mini Program.

Specifying that the `minVersion` of a Mini Program is `2.0` means that the Mini Program can run on firmware versions with `API_LEVEL` greater than or equal to `2.0`.

### How to check the `API_LEVEL` of the current firmware version

As of now, the `API_LEVEL` of all firmware versions with Zepp OS 2.0 devices is `2.0`, and subsequent `API_LEVEL` updates will provide the relevant query interface.

To check the Zepp OS version of your device, please refer to [List of devices with Zepp OS](../../../reference/related-resources/device-list.mdx).

:::caution
Devices with Zepp OS version 1.0 do not support `API_LEVEL`.
:::

### Compatibility Guarantee

Since the release of Zepp OS 2.0 JS API, Zepp OS 1.0 JS API will enter the maintenance phase and in principle only bug fixes will be done and no new capabilities will be provided.

Mini Programs developed using the Zepp OS 1.0 JS API will still work fine on firmware with Zepp OS version 2.0.

:::tip
If there is an incompatibility with the Zepp OS 1.0 JS API in a subsequent Zepp OS release, developers will be notified in advance.

Developers are encouraged to migrate the 1.0 -> 2.0 API in order to take advantage of the latest capabilities that Zepp OS is opening up, see [Migration from version 1.0](https://docs.zepp.com/zh-cn/docs/v2/guides/version-info/migration-guide/) for details.
:::

:::caution
Since Zepp OS version 1.0 firmware does not support `API_LEVEL`, Mini Program developed using Zepp OS 2.0 JS API will not run on Zepp OS 1.0 devices. The App Marketplace also does not distribute Mini Programs with the specified `API_LEVEL` on devices with Zepp OS 1.0.
:::

Zepp OS version 2.0 JS API is designed with a version compatibility scheme `API_LEVEL`, subsequent firmware versions will support `API_LEVEL` and ensure backward compatibility, i.e. the new version `API_LEVEL` is compatible with the old version `API_LEVEL`.
