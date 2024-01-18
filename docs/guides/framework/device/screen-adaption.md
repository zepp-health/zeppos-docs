---
title: Screen adaptation Specification
sidebar_label: Screen adaptation Specification
---

## Introduction

In Zepp OS v3, we introduced a new screen adaptation scheme that abstracts screen features into square, round and band screens.

By coding according to the screen adaptation specification and maintaining a resource file for each screen type, the code can run on all devices with the same type of screen without having to be adapted individually for a particular device.

:::info
This screen specification only applies to [Mini Program configuration app.json](./../../../reference/app-json.mdx) v3 and above.
:::

## UI Design Benchmark

We recommend that developers refer to benchmark sizes for UI design on different types of screens.

1. Round screen design benchmark: 480 x 480 px
2. Square screen design benchmark: 390 x 450 px
3. Band screen design benchmark: 194 x 368 px

## Screen Adaptation Specification

The full adaptation specification consists of four parts

- Mini Program Configuration app.json
- Resource file directory specification
- px utility function
- Layout file distribution (optional)

### Mini Program Configuration app.json

In the V3 version of the Mini Program configuration `app.json` file, a separate build target `target` is added.

The `platforms` of this `target` contains an array of screen feature configurations.

An example:

```json
{
  "platforms": [
    {
      "st": "r"
    },
    {
      "st": "s"
    },
    {
      "st": "b"
    },
    {
      "st": "s",
      "sr": "w320"
    }
  ]
}
```

The full name of `st` Screen Type stands for Screen Type.

| `st` Value | Description          |
| ---------- | -------------------- |
| r          | Round screen         |
| s          | Square screen        |
| b          | Band screen |

The full name `sr` stands for Screen Resolution in the format `w<width>`, where width stands for the width of the screen, e.g. `w480`.

Back to the case, this configuration means that the Mini Program is adapted for 4 screen characteristics: round screen, square screen, band screen, and square screen devices with a screen width of 320px.

### Resource file directory specification

Each screen feature corresponds to a separate resource file directory.

Using the `index.js` file as an example, the layout file for this page needs to be qualified with the configuration qualifier `config-qualifier`, and the resource file directory needs to be qualified with `config-qualifier` as well.

As an example, suppose the value of the `target` field in `app.json` is `common`.

- Page Logic
  - index.js
- Page Layout
  - index.r.layout.js
    - Directory of corresponding resource files `assets/common.r`
  - index.s.layout.js
    - Directory of corresponding resource files `assets/common.s`
  - index.b.layout.js
    - Directory of corresponding resource files `assets/common.b`
  - index.w320-s.layout.js
    - Directory of corresponding resource files `assets/common.w320-s`

After completing the `app.json` configuration and resource file directory configuration, when the Mini Program is built, the image resources will be automatically scaled based on the `designWidth` configured in `app.json`.

To illustrate the scaling strategy for images, suppose `designWidth` is configured to `480` and the image size of `test.png` in the resource directory is `50 x 50 px`, the Mini Program builds to a round device with a screen width of `416 px` and scales the width of this image to `Math.ceil(50 x 416 / 480 ) = 43` px, and the aspect ratio stays the same, the scaled size is `43 x 43 px`.

:::info
If `designWidth` is not configured, the baseline defaults to `480` for round screens, `390` for square screens, and `194` for band screens.
:::

### `px` utility function

The `utils` module implements a utility function [utils - `px`](../../../reference/device-app-api/newAPI/utils/px.mdx).

:::caution
Requires developers to do adaptive calculations at the coding level for position and size properties such as coordinates, width and height, fonts, etc. for all widgets, using the `px` function to wrap the baseline values from the design draft.
:::

An example：

```js
import { createWidget, widget, text_style, align } from '@zos/ui'
import { px } from '@zos/utils'

const textStyle = {
  x: px(96),
  y: px(40),
  w: px(288),
  h: px(48),
  color: 0xffffff,
  text_size: px(36),
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
  text_style: text_style.WRAP,
  text: 'HELLO, Zepp OS'
}

const text = createWidget(widget.TEXT, textStyle)
```

We designed the line with a font height of `48px` on a design with a baseline of `480px`, and after wrapping it with the `px` function, the actual height of the font on a device with a width of `454px` is `Math.ceil(48 / 480 * 454) = 46`.

:::info
There are some dimensions that are not based on baseline values and do not need to be wrapped by the `px` function. For example, the `width` and `height` attributes obtained by `@zos/device` module `getDeviceInfo` method are the actual dimensions of the current device, for this part of the value, we need to avoid wrapping by `px` function, it will be calculated again, which will lead to inaccurate results. If you need to mix the design base value with the actual size of the model, it is recommended to use this, `w: width + px(20)`.
:::

### Layout file specification (optional)

Organize the code according to the layout file specification, no need to judge the screen shape and size in the code, automatically refer to the layout file corresponding to the screen characteristics when the application is built.

Each screen feature configuration in `app.json` `target` requires a separate layout file corresponding to it, with the naming convention `[name].[config-qualifier].layout.js`, with the filename suffix convention `layout.js`.

| Symbol           | Description             |
| ---------------- | ----------------------- |
| name             | File name               |
| config-qualifier | Configuration qualifier |

:::info
Naming convention for `config-qualifier`.

The value of `sr` comes first, followed by the value of `st`, separated by `-` if both `st` and `sr` are configured.
:::

Again, assuming the name of the page is `index.js`, as in the example above.

| Configuration         | Config-qualifier Value | Layout File Name         | Description                                                                     |
| --------------------- | ---------------------- | ------------------------ | ------------------------------------------------------------------------------- |
| `{st: "r"}`             | `r`                    | `index.r.layout.js`      | This layout file applies to round screen devices.                               |
| `{st: "s"}`             | `s`                    | `index.s.layout.js`      | This layout file applies to square screen devices.                              |
| `{st: "b"}`             | `b`                    | `index.b.layout.js`      | This layout file applies to band screen devices.                       |
| `{st: "s", sr: "w320"}` | `w320-s`              | `index.w320-s.layout.js` | This layout file applies to square screen devices with a screen width of 320 px. |

In `index.js`, the convention is to use the `zosLoader:` prefix to introduce layout files.

```js
// index.js
import { layout } from 'zosLoader:./[name].[pf].layout.js'
```

This statement is used to build the Mini Program to automatically import the layout file based on the screen characteristics of the model.

For example, if the Mini Program is built on a square screen device, this statement will be parsed as `import { layout } from 'index.s.layout.js'`. This eliminates the need for the developer to determine the shape and size of the screen and simply organizes the files according to the convention and uses `zosLoader:`.

:::tip
The layout file directory corresponding to the page file is the same as the directory where the page file is stored.
:::

## Full Example

For a full example, see Mini Program [calories](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/calories)
