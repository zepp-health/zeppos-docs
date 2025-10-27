---
title: API_LEVEL 4.0 New Features
sidebar_label: API_LEVEL 4.0 New Features
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# API_LEVEL 4.0 New Features

API_LEVEL 4.0 brings several important updates and new features, providing developers with more powerful tools and a more flexible development experience. This article will introduce the main new features and improvements.

## Widget Layout Properties for Flex Layout

For more details, refer to [Widget Layout Properties for Flex Layout](../../guides/framework/device/layout.md).

API_LEVEL 4.0 introduces support for Flex layout, allowing developers to build smartwatch application interfaces in a way similar to Web development, greatly improving layout flexibility and development efficiency.

<img src={useBaseUrl('/img/docs/guides/framework/layout_effect.jpg')} width="50%" title="layout_effect" />

## Widget Property Read/Write

For more details, refer to [Widget Getter/Setter Feature](../../reference/device-app-api/newAPI/ui/gettersetter.mdx).

Starting from API_LEVEL 4.0, widget properties can be directly accessed and set through the `getter/setter` feature, making property reading and writing more concise and intuitive.

The widget documentation will indicate property access support status.

```js
import { createWidget, widget, prop } from '@zos/ui'

Page({
  build() {
    // Create TEXT widget
    const textWidget = createWidget(widget.TEXT, {
      // ...
    })

    // Using getter to read properties
    console.log('Text content:', textWidget.text)
    console.log('Text color:', textWidget.color)
    console.log('Text position:', textWidget.x, textWidget.y)

    // Using setter to set properties
    textWidget.text = 'Updated Text'
    textWidget.color = 0xff0000
    textWidget.x = 120
  }
})
```

Comparison with `getProperty` and `setProperty` methods

```js
// Reading properties
const oldText = textWidget.getProperty(prop.TEXT)
console.log('Old way - Text content:', oldText)

// Setting properties
textWidget.setProperty(prop.TEXT, 'Set by old method')
textWidget.setProperty(prop.MORE, {
  color: 0x00ff00,
  x: 150
})
```

## New UI Widgets/Methods

- System Keyboard [SYSTEM_KEYBOARD](../../reference/device-app-api/newAPI/ui/widget/SYSTEM_KEYBOARD.mdx)

<img src={useBaseUrl('/img/api/smart_keyboard.jpg')} width="50%" title="smart_keyboard" />

- [CHECKBOX](../../reference/device-app-api/newAPI/ui/widget/CHECKBOX_GROUP.mdx) and [RADIO](../../reference/device-app-api/newAPI/ui/widget/RADIO_GROUP.mdx) support color filling

## Sensor Module

- [`Compass`](../../reference/device-app-api/newAPI/sensor/Compass.mdx) supports setting sensor reporting frequency
- [`Geolocation`](../../reference/device-app-api/newAPI/sensor/Geolocation.mdx) can retrieve the user's privacy location permission protection status

## @zos/app Module

Get mini app performance statistics, including memory usage and loading performance metrics.

- [getPerformance](../../reference/device-app-api/newAPI/app/getPerformance.mdx)

## @zos/util Module

Added new utility methods that support conversion between `ArrayBuffer` and `String` types, making data processing easier

- [bufferToString](../../reference/device-app-api/newAPI/utils/bufferToString.mdx)
- [stringToBuffer](../../reference/device-app-api/newAPI/utils/stringToBuffer.mdx)
