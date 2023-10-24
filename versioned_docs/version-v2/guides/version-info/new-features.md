---
title: Zepp OS 2.0 New Features
sidebar_label: Zepp OS 2.0 New Features
---

Zepp OS 2.0 brings a very rich set of new features in the form of mind maps for one presentation.

![v2_feature](/img/docs/guides/version_info/v2_feature.jpg)

The following is a brief introduction to the new features.

## New Mini Program API

:::caution
Mini Program developed using the Zepp OS 2.0 API will not run on devices with Zepp OS version 1.0.

To develop a Mini Program for Zepp OS version 1.0 devices, please switch to v1.0 by clicking the version switch button in the upper right corner of the document.

- To check the Zepp OS version on your device, please refer to [List of Devices with Zepp OS](../../reference/related-resources/device-list.mdx)
- Please refer to [API_LEVEL (Compatibility)](../framework/device/compatibility.md) for more information about compatibility
:::

In the more than one year that Zepp OS 1.0 Mini Program API has been serving developers worldwide, the Zepp OS team has collected a very large number of questions, feedback and suggestions.

In order to create a better development experience and improve development efficiency, we have launched a new set of APIs that fully embrace the ESM modularity standard and plan API compatibility, permission management and other related capabilities.

![api_feature](/img/docs/guides/version_info/api_feature.jpg)

For details, please refer to [2.0 API Introduction](new-api.md).

### New Abilities

Opened up new scenarios for SecondaryWidget and Shortcut Cards. For details, please refer to [Register SecondaryWidget and Shortcut Cards](../framework/device/secondary-widget.md).

UI widgets capabilities are enhanced：

- [IMG](../../reference/device-app-api/newAPI/ui/widget/IMG.mdx) The widget supports scaling, see the `auto_scale` property for details
- [TEXT](../../reference/device-app-api/newAPI/ui/widget/TEXT.mdx) The widget supports custom fonts, as detailed in the `font` property
- Add [VIEW_CONTAINER](../../reference/device-app-api/newAPI/ui/widget/VIEW_CONTAINER.mdx) layout widget to allow stacking of controls, greatly enhancing control layout flexibility
- Add [Widget Animation](../../reference/device-app-api/newAPI/ui/widgetAnimations.mdx), more convenient to implement animation

There are more new capabilities coming soon, so stay tuned!

### Permission Control

Zepp OS always puts the protection of user information and private data in the first place while maintaining an open attitude.

For details, please refer to [API Permission Control](../framework/device/permission.md).

### API_LEVEL Compatibility

The Zepp OS open capabilities (JS API) are constantly expanding and providing enhanced capabilities, but these new open capabilities are not immediately updated on some older firmware versions, at which point there is a problem of incompatibility between the API and the firmware version.

In Zepp OS 2.0, we introduced the concept of `API_LEVEL`, a complete JS API compatibility scheme.

For details, please refer to [API_LEVEL Compatibility](../framework/device/compatibility.md).

## Tool Chain

In addition to the Mini Program framework, the supporting tool chain has also introduced a series of heavyweight new features.

### CLI

- Provides full support for Zepp OS 2.0 Mini Programs
- Bridge mode device screenshot function

### Simulator

The simulator supports cross-platform, supporting Windows, Mac OS and Linux.

### Documentation Platform

- The new 2.0 API is accompanied by a new API documentation, with simple layout, clear types, complete code examples and diagrams, and a significantly improved documentation experience
- Added the ability to switch document versions to facilitate switching document versions

### API Declaration File

Get code hints in the editor with the [declaration file](https://www.npmjs.com/package/@zeppos/device-types).

![declaration_demo](/img/docs/guides/version_info/declaration.gif)

## Zepp OS Design Specifications

Published [Zepp OS Design Specifications](../../designs/index.md).

To help businesses build applications that offer excellent quality and consistent experience, this guide combines design and technology to provide necessary guidance and resources as a means to reduce redundant production costs, improve design and development efficiency, and create an intelligent health management system that enables value symbiosis.

We provide complete design guidelines and best practices that cover concepts, structure, interaction, vision, elements, customization, internationalization, and design self-checklists to help businesses produce high-quality product design solutions in an efficient manner.
