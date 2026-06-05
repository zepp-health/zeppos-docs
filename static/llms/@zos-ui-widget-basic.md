# @zos/ui-widget-basic

Basic widget APIs.

## TEXT

### Import

```js
import { TEXT } from '@zos/ui'
```

> Start from API_LEVEL `2.0`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: text_sample]

Text widget for displaying text. Support setting text size, color, alignment, font.

## Create UI widget

```js

const text = createWidget(widget.TEXT, Param)
```

## Type

## Param: object

| Properties  | Description                                                                                                                                                                                                                                    | Required | Type         |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------ |
| x           | The x-axis coordinate of the widget                                                                                                                                                                                                              | YES      | `number`     |
| y           | The y-axis coordinate of the widget                                                                                                                                                                                                              | YES      | `number`     |
| w           | The width of the widget                                                                                                                                                                                                                          | YES      | `number`     |
| h           | The height of the widget                                                                                                                                                                                                                         | YES      | `number`     |
| color       | The color of the text                                                                                                                                                                                                                            | NO       | `number`     |
| align_h     | The alignment of the horizontal axis (see ALIGN for values)                                                                                                                                                                                      | NO       | `ALIGN`      |
| align_v     | Alignment of the vertical axis (see ALIGN for values)                                                                                                                                                                                            | NO       | `ALIGN`      |
| text        | Text                                                                                                                                                                                                                                             | NO       | `string`     |
| text_size   | The size of the font                                                                                                                                                                                                                             | NO       | `number`     |
| text_style  | Text overlength handling, default is scrolling text (see TEXT_STYLE for values)                                                                                                                                                                   | NO       | `TEXT_STYLE` |
| line_space  | Row spacing                                                                                                                                                                                                                                      | NO       | `number`     |
| char_space  | Character spacing                                                                                                                                                                                                                                | NO       | `number`     |
| font        | Font path, resource storage path reference [Folder Structure](https://docs.zepp.com/docs/guides/architecture/folder-structure)                                                                                                                              | NO       | `string`     |
| text_i18n   | Multi-language text support, refer to the code example, where the 'en-US' field is required. When the current country language is not configured, the value of 'en-US' will be used. When passed in this way, the `text` attribute is disabled     | NO       | `object`     |
| start_angle | Arc layout starting angle                                                                                                                                                                                                                        | NO       | `number`     |
| end_angle   | Arc layout ending angle (start_angle < end_angle)                                                                                                                                                                                                 | NO       | `number`     |
| mode        | Arc layout mode, default 0<br/>0: inner<br/>1: outer                                                                                                                                                                                             | NO       | `number`     |
| radius      | Controls the arc layout radius, defaults to half of the widget's width and height                                                                                                                                                                 | NO       | `number`     |

### ALIGN alignment

| Value          | Description                   |
| -------------- | ----------------------------- |
| align.LEFT     | Horizontal axis-left aligned  |
| align.RIGHT    | Horizontal axis-right aligned |
| align.CENTER_H | Horizontal axis-centered      |
| align.TOP      | Vertical axis-top            |
| align.BOTTOM   | Vertical axis-bottom         |
| align.CENTER_V | Vertical axis-centered       |

### TEXT_STYLE Text layout

| Value               | Description                               |
| ------------------- | ----------------------------------------- |
| text_style.ELLIPSIS | Single line overflow character display... |
| text_style.NONE     | Scrolling text                           |
| text_style.WRAP     | Line wrap                                |

## Property Access Support List

| Property    | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| ----------- | ----------- | ----------- | ----------------------------- | ----------------------------- |
| x           | Y           | Y           | Y                             | Y                             |
| y           | Y           | Y           | Y                             | Y                             |
| w           | Y           | Y           | Y                             | Y                             |
| h           | Y           | Y           | Y                             | Y                             |
| color       | Y           | Y           | Y                             | Y                             |
| align_h     | Y           | Y           | Y                             | Y                             |
| align_v     | Y           | Y           | Y                             | Y                             |
| text        | Y           | Y           | Y                             | Y                             |
| text_size   | Y           | Y           | Y                             | Y                             |
| font        | Y           | Y           | Y                             | Y                             |
| text_style  | Y           | Y           | Y                             | Y                             |
| line_space  | Y           | Y           | Y                             | Y                             |
| char_space  | Y           | Y           | Y                             | Y                             |
| text_i18n   | N           | N           | Y                             | Y                             |
| start_angle | N           | N           | N                             | N                             |
| end_angle   | N           | N           | N                             | N                             |
| mode        | N           | N           | N                             | N                             |
| radius      | N           | N           | N                             | N                             |

## Code example

```js

Page({
  build() {
    const text = createWidget(widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: 'HELLO, Zepp OS'
    })

    text.addEventListener(event.CLICK_DOWN, (info) => {
      text.setProperty(prop.MORE, {
        y: 200
      })
    })

    const textWithFont = createWidget(widget.TEXT, {
      x: 96,
      y: 300,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      font: 'fonts/custom.ttf',
      text_i18n: {
        'en-US': 'Hello Zepp OS',
        'zh-CN': '你好 Zepp OS'
      }
    })
  }
})
```

---

## IMG

### Import

```js
import { IMG } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: img_sample]

The image widget is used to display images and supports image rotation.

> **💡 Tip**
>
> 1. Recommend using 24-bit or 32-bit png format images with RGB or RGBA color scheme.
>

## Create UI widget

```js

const img = createWidget(widget.IMG, Param)
```

## Type

### Param: object

| Properties         | Description                                                                                                                                                      | Required | Type      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| src                | The path of the image. Reference [folder-structure structure](https://docs.zepp.com/docs/guides/architecture/folder-structure)                                           | YES      | `string`  |
| w                  | The width of the widget.If not passed then set the width of the image itself                                                                                     | NO       | `number`  |
| h                  | The height of the widget.If not passed then set the height of the image itself                                                                                   | NO       | `number`  |
| x                  | The x-axis coordinate of the widget.                                                                                                                             | YES      | `number`  |
| y                  | The y-axis coordinate of the widget.                                                                                                                             | YES      | `number`  |
| pos_x              | Relative coordinates.Horizontal offset of the image relative to the widget coordinates.                                                                                               | NO       | `number`  |
| pos_y              | Relative coordinates.Vertical offset of the image relative to the widget coordinates.                                                                                                 | NO       | `number`  |
| angle              | The rotation angle of the picture (the 12-point direction is 0 degrees).                                                                                         | NO       | `number`  |
| center_x           | The rotation center of the picture.                                                                                                                              | NO       | `number`  |
| center_y           | The rotation center of the picture.                                                                                                                              | NO       | `number`  |
| alpha              | Transparency, 0 - 255, default value is 255 for opaque, 0 for full transparency                                                                                  | NO       | `number`  |
| auto_scale         | Whether the image scales with the widget width and height, the default image area size is the size of the resource file itself                                   | NO       | `boolean` |
| auto_scale_obj_fit | This field takes effect only when `auto_scale` is `true`, indicating whether the image fills the entire widget area (without maintaining the image aspect ratio) | NO       | `boolean` |

## Image example

> **⚠️ Caution**
>
> `w` and `h` are the width and height of the image widget, and the IMG area is the display boundary of the image resource

[Image: axis]

[Image: rotate]

## Code example

```js

Page({
  build() {
    const img = createWidget(widget.IMG, {
      x: 125,
      y: 125,
      src: 'zeppos.png'
    })
    img.addEventListener(event.CLICK_DOWN, (info) => {
      img.setProperty(prop.MORE, {
        y: 200
      })
    })
  }
})
```

```js

Page({
  build() {
    const img_hour = createWidget(widget.IMG)
    img_hour.setProperty(prop.MORE, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      pos_x: 454 / 2 - 27,
      pos_y: 50 + 50,
      center_x: 454 / 2,
      center_y: 454 / 2,
      src: 'hour.png',
      angle: 30
    })
  }
})
```

---

## BUTTON

### Import

```js
import { BUTTON } from '@zos/ui'
```

> Supported from API_LEVEL `2.0`. For API compatibility, please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: button_sample]

The button widget supports setting images and colors for normal and pressed states.

## Create UI Widget

```js

const button = createWidget(widget.BUTTON, Param)
```

## Types

### Param: object

| Properties     | Description                                                                                              | Required | Type        | API_LEVEL |
| -------------- | -------------------------------------------------------------------------------------------------------- | -------- | ----------- | --------- |
| x              | The x-coordinate of the widget                                                                            | YES      | `number`    | 2.0       |
| y              | The y-coordinate of the widget                                                                            | YES      | `number`    | 2.0       |
| w              | The width of the widget. Note: If set to -1, it will prioritize adapting to normal_src size, default is 100 | YES      | `number`    | 2.0       |
| h              | The height of the widget. Note: If set to -1, it will prioritize adapting to normal_src size, default is 40  | YES      | `number`    | 2.0       |
| text           | Text displayed on the button                                                                               | NO       | `string`    | 2.0       |
| color          | Text color                                                                                                | NO       | `number`    | 2.0       |
| text_size      | Text font size                                                                                            | NO       | `number`    | 2.0       |
| normal_color   | Background color in normal state, must be set together with `press_color` to take effect                   | NO       | `number`    | 2.0       |
| press_color    | Background color when pressed, must be set together with `normal_color` to take effect                     | NO       | `number`    | 2.0       |
| radius         | Corner radius when using color as button background                                                        | NO       | `number`    | 2.0       |
| normal_src     | Background image in normal state, must be set together with `press_src` to take effect                     | NO       | `string`    | 2.0       |
| press_src      | Background image when pressed, must be set together with `normal_src` to take effect                       | NO       | `string`    | 2.0       |
| click_func     | Button click callback                                                                                      | NO       | `ClickFunc` | 2.0       |
| longpress_func | Long press (700ms) button callback                                                                          | NO       | `ClickFunc` | 2.0       |
| font           | Font path, refer to [Directory Structure](https://docs.zepp.com/docs/guides/architecture/folder-structure)           | NO       | `string`    | 3.6       |
| text_w         | Button text width                                                                                          | NO       | `number`    | 3.6       |

> **⚠️ Caution**
>
> - When neither background nor color is set for the button, it will use the default click state background color (normal black, clicked gray)
> - When both background and color are set for the button, background color takes precedence over background image
> - The radius field only works after setting the background color
> - Background color `normal_color` and pressed color `press_color` must be set together to take effect
> - Background image `normal_src` and pressed image `press_src` must be set together to take effect
> - When using [`widget.setProperty`](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/setProperty) API to modify BUTTON widget properties, you must pass in the required fields `x`, `y`, `w`, `h` (refer to code example)

### ClickFunc

```js
(button: Button) => void
```

The `button` instance created by the `createWidget` method

## Property Access Support List

| Property Name  | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| -------------- | ----------- | ----------- | ----------------------------- | ----------------------------- |
| x              | Y           | Y           | Y                             | Y                             |
| y              | Y           | Y           | Y                             | Y                             |
| w              | Y           | Y           | Y                             | Y                             |
| h              | Y           | Y           | Y                             | Y                             |
| text           | Y           | Y           | Y                             | Y                             |
| color          | Y           | Y           | Y                             | Y                             |
| text_size      | Y           | Y           | Y                             | Y                             |
| font           | Y           | Y           | Y                             | Y                             |
| press_src      | N           | N           | Y                             | Y                             |
| normal_src     | N           | N           | Y                             | Y                             |
| press_color    | N           | N           | Y                             | Y                             |
| normal_color   | N           | N           | Y                             | Y                             |
| radius         | Y           | Y           | Y                             | Y                             |
| click_func     | N           | N           | Y                             | Y                             |
| longpress_func | N           | N           | Y                             | Y                             |
| text_w         | N           | N           | Y                             | Y                             |

## Code Example

> **💡 Tip**
>
> Please refer to [Design Resources](https://docs.zepp.com/docs/reference/related-resources/design-resources) for the image resources in the code example

```js

Page({
  build() {
    const img_button = createWidget(widget.BUTTON, {
      x: (480 - 96) / 2,
      y: 120,
      text: 'Hello',
      w: -1,
      h: -1,
      normal_src: 'button_normal.png',
      press_src: 'button_press.png',
      click_func: () => {
        console.log('button click')
      }
    })

    createWidget(widget.BUTTON, {
      x: (480 - 400) / 2,
      y: 240,
      w: 400,
      h: 100,
      radius: 12,
      normal_color: 0xfc6950,
      press_color: 0xfeb4a8,
      text: 'Hello',
      click_func: (button_widget) => {
        button_widget.setProperty(prop.MORE, {
          x: (480 - 400) / 2,
          y: 300,
          w: 400,
          h: 100
        })
      }
    })
  }
})
```

---

## FILL_RECT

### Import

```js
import { FILL_RECT } from '@zos/ui'
```

> Supported from API_LEVEL `2.0`. For API compatibility, please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: fill_rect_sample]

The Fill Rectangle widget is used to draw a solid color rectangular area.

## Create UI Widget

```js

const fillRect = createWidget(widget.FILL_RECT, Param)
```

## Types

### Param: object

| Property    | Description                                                         | Required | Type     | API_LEVEL |
| ----------- | ------------------------------------------------------------------- | -------- | -------- | --------- |
| x           | The x-coordinate of the widget                                       | YES      | `number` | 2.0       |
| y           | The y-coordinate of the widget                                       | YES      | `number` | 2.0       |
| w           | The width of the widget                                             | YES      | `number` | 2.0       |
| h           | The height of the widget                                            | YES      | `number` | 2.0       |
| color       | The color of the widget                                             | YES      | `number` | 2.0       |
| radius      | The corner radius of the rectangle                                  | NO       | `number` | 2.0       |
| angle       | The rotation angle                                                  | NO       | `number` | 2.0       |
| alpha       | Opacity, value range 0-255, default 255 (opaque), 0 (transparent)   | NO       | `number` | 3.0       |
| pos_x       | Drawing area x offset (only works when angle%360!=0)                | NO       | `number` | 4.0       |
| pos_y       | Drawing area y offset (only works when angle%360!=0)                | NO       | `number` | 4.0       |
| rect_width  | Width of the drawing area (only works when angle%360!=0)            | NO       | `number` | 4.0       |
| rect_height | Height of the drawing area (only works when angle%360!=0)           | NO       | `number` | 4.0       |

## Property Access Support List

| Property    | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| ----------- | ----------- | ----------- | ----------------------------- | ----------------------------- |
| x           | Y           | Y           | Y                             | Y                             |
| y           | Y           | Y           | Y                             | Y                             |
| w           | Y           | Y           | Y                             | Y                             |
| h           | Y           | Y           | Y                             | Y                             |
| color       | Y           | Y           | Y                             | Y                             |
| radius      | Y           | Y           | Y                             | Y                             |
| angle       | Y           | Y           | Y                             | Y                             |
| pos_x       | N           | Y           | N                             | Y                             |
| pos_y       | N           | Y           | N                             | Y                             |
| rect_width  | N           | N           | N                             | Y                             |
| rect_height | N           | N           | N                             | Y                             |
| center_x    | Y           | Y           | Y                             | Y                             |
| center_y    | Y           | Y           | Y                             | Y                             |
| alpha       | Y           | Y           | Y                             | Y                             |

## Code Example

```js

Page({
  build() {
    const fill_rect = createWidget(widget.FILL_RECT, {
      x: 125,
      y: 125,
      w: 230,
      h: 150,
      radius: 20,
      color: 0xfc6950
    })

    fill_rect.addEventListener(event.CLICK_DOWN, (info) => {
      fill_rect.setProperty(prop.MORE, {
        x: 125,
        y: 200,
        w: 230,
        h: 150
      })
    })
  }
})
```

---

## STROKE_RECT

### Import

```js
import { STROKE_RECT } from '@zos/ui'
```

> Supported from API_LEVEL `2.0`. For API compatibility, please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: stroke_rect_sample]

The stroked rectangle widget adds a stroke on the basis of the filled rectangle widget.

## Create UI Widget

```js

const strokeRect = createWidget(widget.STROKE_RECT, Param)
```

## Type

### Param: object

| Property     | Description                                                  | Required | Type     | API_LEVEL |
| ------------ | ------------------------------------------------------------ | -------- | -------- | --------- |
| x            | The x-axis coordinate of the widget                          | YES      | `number` | 2.0       |
| y            | The y-axis coordinate of the widget                          | YES      | `number` | 2.0       |
| w            | The width of the widget                                      | YES      | `number` | 2.0       |
| h            | The height of the widget                                     | YES      | `number` | 2.0       |
| color        | The widget's color                                           | YES      | `number` | 2.0       |
| radius       | The rectangle's rounded corners                              | NO       | `number` | 2.0       |
| line_width   | The width of stroke                                          | NO       | `number` | 2.0       |
| angle        | Rotation angle                                               | NO       | `number` | 2.0       |
| pos_x        | Drawing area x offset (only effective when angle%360!=0)     | NO       | `number` | 4.0       |
| pos_y        | Drawing area y offset (only effective when angle%360!=0)     | NO       | `number` | 4.0       |
| rect_width   | Width of the drawing area (only effective when angle%360!=0) | NO       | `number` | 4.0       |
| rect_height  | Height of the drawing area (only effective when angle%360!=0) | NO       | `number` | 4.0       |

## Property Access Support List

| Property Name | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| ------------- | ----------- | ----------- | ---------------------------- | ---------------------------- |
| x             | Y           | Y           | Y                            | Y                            |
| y             | Y           | Y           | Y                            | Y                            |
| w             | Y           | Y           | Y                            | Y                            |
| h             | Y           | Y           | Y                            | Y                            |
| color         | Y           | Y           | Y                            | Y                            |
| radius        | Y           | Y           | Y                            | Y                            |
| line_width    | Y           | Y           | Y                            | Y                            |
| angle         | Y           | Y           | Y                            | Y                            |
| pos_x         | N           | Y           | N                            | Y                            |
| pos_y         | N           | Y           | N                            | Y                            |
| rect_width    | N           | N           | N                            | Y                            |
| rect_height   | N           | N           | N                            | Y                            |

## Code Example

```js

Page({
  build() {
    const strokeRect = createWidget(widget.STROKE_RECT, {
      x: 125,
      y: 125,
      w: 230,
      h: 150,
      radius: 20,
      line_width: 4,
      color: 0xfc6950
    })

    strokeRect.addEventListener(event.CLICK_DOWN, (info) => {
      strokeRect.setProperty(prop.MORE, {
        y: 200
      })
    })
  }
})
```

---

## CIRCLE

### Import

```js
import { CIRCLE } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: circle_sample]

Draws a circle with support for color, transparency, and other properties.

## Creating UI widgets

```js

const circle = createWidget(widget.CIRCLE, Param)
```

## Type

### Param: object

| Properties | Description                                  | Required | Type     |
| ---------- | -------------------------------------------- | -------- | -------- |
| center_x   | Center of circle x.                          | YES      | `number` |
| center_y   | Center of circle y.                          | YES      | `number` |
| radius     | Radius.                                      | YES      | `number` |
| color      | Color 16-increment value.                    | YES      | `number` |
| alpha      | Transparency.[0-255] 0 for full transparency | NO       | `number` |

## Supported Property Access List

| Property   | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
|------------|-------------|-------------|-------------------------------|-------------------------------|
| center_x   | Y           | Y           | Y                             | Y                             |
| center_y   | Y           | Y           | Y                             | Y                             |
| radius     | Y           | Y           | Y                             | Y                             |
| color      | Y           | Y           | Y                             | Y                             |
| alpha      | Y           | Y           | Y                             | Y                             |

## Code example

```js

Page({
  build() {
    const circle = createWidget(widget.CIRCLE, {
      center_x: 240,
      center_y: 240,
      radius: 120,
      color: 0xfc6950,
      alpha: 200
    })
  }
})
```

---

## ARC

### Import

```js
import { ARC } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: arc_sample]

Arc widget to display arc progress. Support setting line width, color, start and end angle.

## Create UI widget

```js

const arc = createWidget(widget.ARC, Param)
```

## Type

### Param: object

| Properties        | Description                                                                                |  Required | Type     |
| ----------------- | ------------------------------------------------------------------------------------------ | --------- | -------- |
| x                 | The x-coordinate of widgets                                                             | YES       | `number` |
| y                 | The y-coordinate of widgets                                                             | YES       | `number` |
| w                 | The width of widgets                                                                    | YES       | `number` |
| h                 | The height of widgets                                                                   | YES       | `number` |
| radius            | Radius                                                                                     | YES       | `number` |
| start_angle       | The angle at the beginning of the arc. (0 degrees is the positive three o'clock direction) | YES       | `number` |
| end_angle         | The angle at the end of the arc. (0 degrees is the positive three o'clock direction)       | YES       | `number` |
| line_width        | Width of circular arc.                                                                     | YES       | `number` |
| color             | Color of circular arc.                                                                     | YES       | `number` |

> **ℹ️ Info**
>
> The `ARC` widget draws an ellipse within the boundaries of a rectangle of width `w` and height `h` with the (`x`,`y`) coordinates as the upper left corner, and then cuts it into an arc at a given angle

## Supported Property Access List

| Property | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
|--------------|-------------|-------------|-------------------------------|-------------------------------|
| x           | Y           | Y           | Y                             | Y                             |
| y           | Y           | Y           | Y                             | Y                             |
| w           | Y           | Y           | Y                             | Y                             |
| h           | Y           | Y           | Y                             | Y                             |
| start_angle | Y           | Y           | Y                             | Y                             |
| end_angle   | Y           | Y           | Y                             | Y                             |
| line_width  | Y           | Y           | Y                             | Y                             |
| color       | Y           | Y           | Y                             | Y

## Code example

```js

Page({
  build() {
    const arc = createWidget(widget.ARC, {
      x: 100,
      y: 100,
      w: 250,
      h: 250,
      start_angle: -90,
      end_angle: 90,
      color: 0xfc6950,
      line_width: 20
    })

    arc.addEventListener(event.CLICK_DOWN, (info) => {
      arc.setProperty(prop.MORE, {
        y: 150
      })
    })
  }
})
```

---

## IMG_ANIM

### Import

```js
import { IMG_ANIM } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: img_anim_sample]

Play the pre-given image at the set frame rate to create an animation effect.

## Create UI widget

```js

const imgAnim = createWidget(widget.IMG_ANIM, Param)
```

## Type

### Param: object

| Properties         | Description                                                                                                                                                        | Required | Type       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------- |
| x                  | The x-coordinate of animation.                                                                                                                                     | YES      | `number`   |
| y                  | The y-coordinate of animation.                                                                                                                                     | YES      | `number`   |
| anim_path          | The path to the image for animation.                                                                                                                               | YES      | `string`   |
| anim_prefix        | The name to the image for animation.                                                                                                                               | YES      | `string`   |
| anim_ext           | Image extensions.                                                                                                                                                  | YES      | `string`   |
| anim_fps           | Number of frames of animation.                                                                                                                                     | YES      | `number`   |
| repeat_count       | Number of animation repetitions, can be set `0`: infinite repetition, `1`: single repetition.                                                                      | YES      | `number`   |
| anim_repeat        | Whether to repeat the playback; this value is true if repeat_count is 0.                                                                                           | No       | `boolean`  |
| anim_size          | The number of images.                                                                                                                                              | YES      | `number`   |
| anim_status        | The status of animation; Reference `anim_status`                                                                                                                   | YES      | `number`   |
| anim_complete_call | This function is callback when the animation is executed successfully. `repeat_count` is invalid if `0`. Parameters `anim` is an instance to create the animation. | NO       | `function` |
| step               | Frame animation step size, more than '1' will jump frame                                                                                                           | NO       | `number`   |

### Supported properties `anim_status`

Please pay attention to the animation order of the current settings when setting animation properties, the widget has been protected internally.

| Value              | Description                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| anim_status.START  | Start animation; only pause stop is allowed to be called after starting the animation. |
| anim_status.PAUSE  | Pause animation; can only be called after starting the animation and resuming it.      |
| anim_status.RESUME | Resume animation; can only be called after pausing the animation.                      |
| anim_status.STOP   | Stop animation; can only be called after starting the animation and resuming it.       |

### Get animation status Return type boolean

| Value                | Description                       |
| -------------------- | --------------------------------- |
| prop.ANIM_IS_RUNINNG | Is the animation running.         |
| prop.ANIM_IS_PAUSE   | Whether the animation is paused.  |
| prop.ANIM_IS_STOP    | Whether the animation is stopped. |

## Supported Property Access List

| Property        | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
|-----------------------|-------------|-------------|-------------------------------|-------------------------------|
| x                    | Y           | Y           | Y                             | Y                             |
| y                    | Y           | Y           | Y                             | Y                             |
| w                    | Y           | Y           | Y                             | Y                             |
| h                    | Y           | Y           | Y                             | Y                             |
| anim_path            | N           | N           | N                             | Y                             |
| anim_prefix          | N           | N           | N                             | Y                             |
| anim_ext             | N           | N           | N                             | Y                             |
| anim_fps             | N           | N           | N                             | Y                             |
| repeat_count         | N           | N           | N                             | Y                             |
| anim_repeat          | N           | N           | N                             | N                             |
| anim_size            | N           | N           | N                             | N                             |
| anim_status          | N           | N           | N                             | N                             |
| anim_complete_call   | N           | N           | N                             | N                             |
| display_on_restart    | N           | N           | N                             | N                             |
| anim_auto_resume_call | N           | N           | N                             | N                             |
| step                 | Y           | Y           | Y                             | Y                             |
| default_frame_index   | N           | N           | N                             | N                             |

## Code example

> **💡 Tip**
>
> Please refer to [Design Resources](https://docs.zepp.com/docs/reference/related-resources/design-resources) for the image resources in the code example

```tree
// Resource Storage Directory
.
└── assets
        └── gtr-3
                └── anim // anim_path
                        ├── animation_0.png
                        ├── animation_1.png
                        ├── animation_2.png
                        ├── animation_3.png
                        ├── animation_4.png
                        └── animation_5.png
```

```js

Page({
  build() {
    const imgAnimation = createWidget(widget.IMG_ANIM, {
      anim_path: 'anim',
      anim_prefix: 'animation',
      anim_ext: 'png',
      anim_fps: 60,
      anim_size: 36,
      repeat_count: 1,
      anim_status: 3,
      x: 208,
      y: 230,
      anim_complete_call: () => {
        console.log('animation complete')
      }
    })

    imgAnimation.setProperty(prop.ANIM_STATUS, anim_status.START)
    imgAnimation.addEventListener(event.CLICK_DOWN, () => {
      const isRunning = imgAnimation.getProperty(prop.ANIM_IS_RUNINNG)

      if (!isRunning) {
        imgAnimation.setProperty(prop.ANIM_STATUS, anim_status.START)
      }
    })
  }
})
```

---

## QRCODE

### Import

```js
import { QRCODE } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

The QRCODE widget consists of a QR code and a background (white).

[Image: qrcode_sample]

## Create UI widget

```js

const qrcode = createWidget(widget.QRCODE, Param)
```

## Type

### Param: object

| Properties | Description                     | Required | Required | Version |
| ---------- | ------------------------------- | -------- | -------- | ------- |
| content    | QR code content                 | YES      | `string` | -       |
| x          | QR Code x Coordinate            | YES      | `number` | -       |
| y          | QR Code y Coordinate            | YES      | `number` | -       |
| w          | QR code width                   | YES      | `number` | -       |
| h          | QR code height                  | YES      | `number` | -       |
| bg_x       | Background x coordinates        | NO       | `number` | -       |
| bg_y       | Background y coordinates        | NO       | `number` | -       |
| bg_w       | Background width                | NO       | `number` | -       |
| bg_h       | Background height               | NO       | `number` | -       |
| bg_radius  | Background area rounding radius | NO       | `number` | 2.1     |

## Supported Property Access List

| Property | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| --------- | ----------- | ----------- | ----------------------------- | ----------------------------- |
| x         | Y           | Y           | Y                             | Y                             |
| y         | Y           | Y           | Y                             | Y                             |
| w         | N           | N           | N                             | N                             |
| h         | N           | N           | N                             | N                             |
| bg_x      | N           | N           | N                             | N                             |
| bg_y      | N           | N           | N                             | N                             |
| bg_w      | N           | N           | N                             | N                             |
| bg_h      | N           | N           | N                             | N                             |
| bg_radius | N           | N           | N                             | N                             |
| content   | N           | N           | N                             | N                             |

## Code example

```js

Page({
  build() {
    const qrcode = createWidget(widget.QRCODE, {
      content: 'Hello Zepp OS',
      x: 140,
      y: 140,
      w: 200,
      h: 200,
      bg_x: 120,
      bg_y: 120,
      bg_w: 240,
      bg_h: 240
    })
  }
})
```

---

## DIALOG

### Import

```js
import { DIALOG } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

> **⚠️ Caution**
>
> This widget has been discontinued. It is recommended to replace it with the more powerful [@zos/interaction createModal API](https://docs.zepp.com/docs/reference/device-app-api/newAPI/interaction/createModal)

[Image: dialog_sample.jpg]

Dialog popup consists of a piece of text and two buttons. The popup box disappears when the buttons are clicked.

## Create UI widget

```js

const dialog = createWidget(widget.DIALOG, Param)
```

## Type

### Param: object

| Properties           | Description                                            | Required | Type                       |
| -------------------- | ------------------------------------------------------ | -------- | -------------------------- |
| text                 | Contents of dialog.                                    | YES      | `string`                   |
| content_text_size    | The text size of the dialog content.                  | NO       | `number`                   |
| content_text_color   | The text color of the dialog content.                  | NO       | `number`                   |
| content_bg_color     | The background color of the dialog content.            | NO       | `number`                   |
| content_text_align_h | Alignment of dialog content text.(horizontal axis)     | NO       | `string`                   |
| content_text_align_v | Alignment of dialog content text.(vertical axis)       | NO       | `string`                   |
| ok_text              | Text on the confirmed button.                          | NO       | `string`                   |
| ok_text_color        | The color of the text on the confirmed button.         | NO       | `number`                   |
| ok_press_color       | The color when the confirmed button is pressed.        | NO       | `number`                   |
| ok_nomal_color       | The color when the confirmed button is normal.         | NO       | `number`                   |
| ok_press_src         | Background image when the confirmed button is pressed. | NO       | `string`                   |
| ok_nomal_src         | Background image when the confirmed button is normal.  | NO       | `string`                   |
| cancel_text          | Text on the canceled button.                           | NO       | `string`                   |
| cancel_text_color    | The color of the text on the canceled button.          | NO       | `number`                   |
| cancel_press_color   | The color when the canceled button is pressed.         | NO       | `number`                   |
| cancel_nomal_color   | The color when the canceled button is normal.          | NO       | `number`                   |
| cancel_press_src     | Background image when the canceled button is pressed.  | NO       | `string`                   |
| cancel_nomal_src     | Background image when the canceled button is normal.   | NO       | `string`                   |
| dialog_align_h       | The horizontal axis of the dialog.                     | NO       | `number`                   |
| dialog_align_v       | The vertical axis of the dialog.                       | NO       | `number`                   |
| ok_func              | Click the callback of the confirmed button.            | NO       | `(dialog: Dialog) => void` |
| cancel_func          | Click the callback of the canceled button.             | NO       | `(dialog: Dialog) => void` |

### Dialog: object

| Property    | Description                                             | Type     |
| ----------- | ------------------------------------------------------- | -------- |
| text        | The content of dialog.                                  | `string` |
| ... omitted | Refer to dialog related properties in the setting field |

### prop Properties

| Properties     | Support get/set | Type      | Notes                      |
| -------------- | --------------- | --------- | -------------------------- |
| prop.SHOW | set             | `boolean` | dialog whether to display. |

## Code example

```js

Page({
  build() {
    const dialog = createWidget(widget.DIALOG, {
      ok_text: 'OK',
      cancel_text: 'CANCEL'
    })
    dialog.setProperty(prop.MORE, {
      text: 'DIALOG',
      content_text_size: 40,
      content_bg_color: 0x000000,
      content_text_color: 0xffffff,
      dialog_align_h: align.CENTER_H,
      content_text_align_h: align.CENTER_H,
      content_text_align_v: align.CENTER_V,
      ok_func: () => {
        console.log('OK')
      },
      cancel_func: () => {
        console.log('CANCEL')
      }
    })
    dialog.setProperty(prop.SHOW, true)
  }
})
```

---

## HISTOGRAM

### Import

```js
import { HISTOGRAM } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: histogram]

Draws a histogram.

## Create UI widget

```js

const histoGram = createWidget(widget.HISTOGRAM, Param)
```

## Type

### Param: object

| Properties      | Description                                                                       | Required | Type            |
| --------------- | --------------------------------------------------------------------------------- | -------- | --------------- |
|       x         | The x-coordinate of widget.                                                    | YES      | `number` |
|       y         | The y-coordinate of widget.                                                    | YES      | `number` |
|       w         | The width of widget.                                                           | YES      | `number` |
|       h         | The height of the widget.                                                      | YES      | `number` |
| item_width      | Width of column.                                                                  | YES       | `number`        |
| item_space      | Space of column.                                                                  | YES       | `number`        |
| item_radius     | Radius of column.                                                                 | YES       | `number`        |
| item_start_y    | The starting Y point of the column, relative coordinate, default is 0 if not filled. | NO       | `number`        |
| item_max_height | Maximum height of column.If unfilled,default is widget height.                      | NO       | `number`        |
| item_color      | Column color. In API_LEVEL 3.5, supports passing an array `Array<number>` to specify the color of each column | YES      | `number`        |
| item_alpha      | Column color transparency. In API_LEVEL 3.5, supports passing an array `Array<number>` to specify the transparency of each column | NO       | `number`        |
| data_min_value  | Minimum value of the column.Used to calculate the actual height of the column.       | YES       | `number`        |
| data_max_value  | Maximum value of the column.Used to calculate the actual height of the column.       | YES       | `number`        |
| data_array      | Data array of columns.                                                               | YES       | `Array<number>` |
| data_count      | Length of data.                                                                      | YES       | `number`        |
| xline           | Configuration objects for the x-axis.                                                | YES       | `XLine`         |
| xText           | Configuration object for x-axis text.                                                | YES       | `XText`         |
| yline           | Configuration objects for the y-axis.                                                | YES       | `YLine`         |
| yText           | Configuration object for y-axis text.                                                | YES       | `YText`         |

### XLine: object

| Properties   | Description                                                                           | Required | Type     |
| ------------ | ------------------------------------------------------------------------------------- | -------- | -------- |
| pading       | Margin of dividing line based on x-axis.                                              | YES | `number` |
| space        | The interval of the dividing line.                                                    | YES | `number` |
| start        | The y-axis coordinates of the start of the divider.                                    | YES | `number` |
| end          | The y-axis coordinate of the end of the divider end-start is the width of the divider. | YES | `number` |
| width        | The width of the line.                                                                 | YES | `number` |
| count        | The number of dividers.                                                                | YES | `number` |
| color        | The color of the dividing line.                                                        | YES | `number` |

### YLine: object

| Properties   | Description                                                                           | Required | Type     |
| ------------ | ------------------------------------------------------------------------------------- | -------- | -------- |
| pading       | Margin of dividing line based on y-axis.                                              | YES | `number` |
| space        | The interval of the dividing line.                                                    | YES | `number` |
| start        | The x-axis coordinates of the start of the divider.                                    | YES | `number` |
| end          | The x-axis coordinate of the end of the divider end-start is the width of the divider. | YES | `number` |
| width        | The width of the line.                                                                 | YES | `number` |
| count        | The number of dividers.                                                                | YES | `number` |
| color        | The color of the dividing line.                                                        | YES | `number` |

### XText: object

| Properties | Description                                                                    | Required | Type |
| ---------- | ------------------------------------------------------------------------------ | -------- | --------------- |
|     x      | The initial x-coordinate of the text.                                          | YES      | `number` |
|     y      | The initial y-coordinate of the text.                                          | YES      | `number` |
|     w      | The width of the text.                                                         | YES | `number` |
|     h      | The height of the text.                                                        | YES | `number` |
|   space    | The spacing of the text.The x-coordinate of the nth text = x + (w + space)\*(n - 1). | YES | `number` |
|   color    | The color of the text                                                          | YES | `number` |
| data_array | The array of text.                                                             | YES | `Array<string>` |
|   count    | The length of the array.                                                       | YES | `number` |

### yText: object

| Properties | Description                                                                    | Required | Type |
| ---------- | ------------------------------------------------------------------------------ | -------- | --------------- |
|     x      | The initial x-coordinate of the text.                                          | YES      | `number` |
|     y      | The initial y-coordinate of the text.                                          | YES      | `number` |
|     w      | The width of the text.                                                         | YES | `number` |
|     h      | The height of the text.                                                        | YES | `number` |
|   space    | The spacing of the text.The x-coordinate of the nth text = y + (h + space)\*(n - 1). | YES | `number` |
|   color    | The color of the text                                                          | YES | `number` |
| data_array | The array of text.                                                             | YES | `Array<string>` |
|   count    | The length of the array.                                                       | YES | `number` |

## Update item data

```js
const view = ......;
  view.setProperty(prop.UPDATE_DATA, {
  data_array: [100, 100, 0, 0, 0, 100],
  data_count: 6
})
```

## Code example

```js

Page({
  build() {
    const fillRect = createWidget(widget.FILL_RECT, {
      x: 100,
      y: 120,
      w: 300,
      h: 300,
      color: 0xffffff
    })

    const view = createWidget(widget.HISTOGRAM, {
      x: 100,
      y: 120,
      h: 300,
      w: 300,
      item_width: 20,
      item_space: 10,
      item_radius: 10,
      item_start_y: 50,
      item_max_height: 230,
      item_color: 0x304ffe,
      data_array: [20, 30, 40, 50, 60, 100, 80, 90, 20, 30],
      data_count: 10,
      data_min_value: 10,
      data_max_value: 100,
      xline: {
        pading: 20,
        space: 20,
        start: 0,
        end: 300,
        color: 0x00c853,
        width: 1,
        count: 15
      },
      yline: {
        pading: 10,
        space: 10,
        start: 0,
        end: 300,
        color: 0xff6d00,
        width: 1,
        count: 30
      },
      xText: {
        x: 12,
        y: 270,
        w: 20,
        h: 50,
        space: 10,
        align: align.LEFT,
        color: 0x000000,
        count: 10,
        data_array: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
      },
      yText: {
        x: 0,
        y: 20,
        w: 50,
        h: 50,
        space: 10,
        align: align.LEFT,
        color: 0x000000,
        count: 6,
        data_array: ['a', 'b', 'c', 'd', 'e', 'f']
      }
    })
  }
})
```

---

## POLYLINE

### Import

```js
import { GRADIENT_POLYLINE } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: polyline]

Draws polylines that can be done on a line graph with multiple segments.

## Create UI widget

```js

const polyline = createWidget(widget.GRADKIENT_POLYLINE, Param)
```

## Type

### Param: object

| Properties | Description                                                                                                                                                                                                                                      | Required | Type     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------- |
| x          | The x-coordinate of widget.                                                                                                                                                                                                                      | YES      | `number` |
| y          | The y-coordinate of widget.                                                                                                                                                                                                                      | YES      | `number` |
| w          | The width of widget.                                                                                                                                                                                                                             | YES      | `number` |
| h          | Widget height, the maximum height on a circular screen with a screen height of `480` and a square device with a screen height of `390` is `150`, and the maximum height of other models is scaled proportionally according to the screen height. | YES      | `number` |
| line_color | Line color, default `0xe60039`                                                                                                                                                                                                                   | NO       | `number` |
| line_width | Line width, default `2` px                                                                                                                                                                                                                       | NO       | `number` |

### polyline instance

#### polyline.clear()

```ts
() => void
```

Clear drawn lines

#### polyline.addLine()

```ts
(option: Option) => void
```

##### Option: object

| Properties  | Description                                          | Type              | Version |
| ----------- | ---------------------------------------------------- | ----------------- | ------- |
| data        | Coordinate arrays                                    | `Array<AxisItem>` | -       |
| count       | Coordinate array length                              | `number`          | -       |
| color_from  | Initial fill gradient color                          | `number`          | 2.1     |
| color_to    | End fill gradient color                              | `number`          | 2.1     |
| curve_style | Whether to use interpolation, smoothing curve effect | `boolean`         | 2.1     |

##### AxisItem: object

| Properties | Description                                                                             | Type     |
| ---------- | --------------------------------------------------------------------------------------- | -------- |
| x          | Horizontal coordinates, relative coordinates, distance from the left side of the widget | `number` |
| y          | Vertical coordinates, relative coordinates, distance from the bottom of the widget      | `number` |

## Supported Property Access List

| Property      | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
|-------------|-------------|-------------|-------------------------------|-------------------------------|
| x           | N           | Y           | N                             | Y                             |
| y           | N           | Y           | N                             | Y                             |
| w           | N           | Y           | N                             | Y                             |
| h           | N           | Y           | N                             | Y                             |
| line_color  | N           | N           | N                             | N                             |
| line_width  | N           | N           | N                             | N                             |
| bg_color    | N           | N           | N                             | N                             |

## Code example

```js

Page({
  build() {
    const lineDataList = [
      { x: 0, y: px(120) },
      { x: px(100), y: px(10) },
      { x: px(200), y: px(50) },
      { x: px(300), y: px(50) },
      { x: px(400), y: px(150) }
    ]
    const polyline = createWidget(widget.GRADKIENT_POLYLINE, {
      x: 0,
      y: px(200),
      w: px(480),
      h: px(150),
      line_color: 0x00ffff,
      line_width: 4
    })
    polyline.clear()
    polyline.addLine({
      data: lineDataList,
      count: lineDataList.length
    })
  }
})
```

---

## CANVAS

### Import

```js
import { CANVAS } from '@zos/ui'
```

> Start from API_LEVEL `3.0`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility)。

[Image: canvas_demo.jpg]

Canvas

Current Canvas capabilities include

1. Basic drawing, line, point, rectangle, rectangle fill, ellipse, sector, polygon
1. Image drawing
1. Text drawing
1. Paint
1. The canvas is stacked vertically, up to three layers can be stacked
1. Clean up the canvas
1. Support `addEventListener` method to listen for user interaction events

## Create UI widget

```js

const canvas = createWidget(widget.CANVAS, Param)
```

### Param: object

| Properties | Description          | Required | Type     |
| ---------- | -------------------- | -------- | -------- |
| x          | Canvas x coordinates | YES      | `number` |
| y          | Canvas y coordinates | YES      | `number` |
| w          | Canvas canvas width  | YES      | `number` |
| h          | Canvas canvas height | YES      | `number` |

```js
const canvas = createWidget(widget.CANVAS, {
  x: 0,
  y: 0,
  w: 100,
  h: 100
})
```

## canvas.setPaint

Set Paint

```js
setPaint(Param: object): void
```

#### Param: object

| Properties | Description | Required | Type     |
| ---------- | ----------- | -------- | -------- |
| color      | Color       | YES      | `number` |
| line_width | Line Width  | YES      | `number` |

```js
canvas.setPaint({
  color: 0xff0000,
  line_width: 10
})
```

## canvas.drawPixel

Drawing individual pixel point

```js
drawPixel(Param: object): void
```

#### Param: object

| Properties | Description   | Required | Type     |
| ---------- | ------------- | -------- | -------- |
| x          | x coordinates | YES      | `number` |
| y          | y coordinates | YES      | `number` |
| color      | Color         | NO       | `number` |

```js
canvas.drawPixel({
  x: 0,
  y: 0,
  color: 0xffffff
})
```

## canvas.drawLine

Draws a line segment, with the line width and color set by `setPaint` paint

```js
drawLine(Param: object): void
```

#### Param: object

| Properties | Description               | Required | Type     |
| ---------- | ------------------------- | -------- | -------- |
| x1         | Start point x coordinates | YES      | `number` |
| y1         | Start point y coordinates | YES      | `number` |
| x2         | End point x coordinates   | YES      | `number` |
| y2         | End point y coordinates   | YES      | `number` |
| color      | Color                     | NO       | `number` |

```js
canvas.drawLine({
  x1: 100,
  y1: 100,
  x2: 200,
  y2: 100,
  color: 0xffffff
})
```

## Rectangle

1. Draw a rectangle path with line width and color set using the `setPaint` brush

```js
strokeRect(Param: object): void
```

2. Draw rectangle fill

```js
drawRect(Param: object): void
```

#### Param: object

| Properties | Description               | Required | Type     |
| ---------- | ------------------------- | -------- | -------- |
| x1         | Start point x coordinates | YES      | `number` |
| y1         | Start point y coordinates | YES      | `number` |
| x2         | End point x coordinates   | YES      | `number` |
| y2         | End point y coordinates   | YES      | `number` |
| color      | Color                     | NO       | `number` |

```js
canvas.drawRect({
  x1: 60,
  y1: 20,
  x2: 120,
  y2: 60,
  color: 0xff00ff
})
```

## Circle

1. Draw a circle path with line width and color set using the `setPaint` brush

```js
strokeCircle(Param: object): void
```

2. Draw circle fill

```js
drawCircle(Param: object): void
```

#### Param: object

| Properties | Description          | Required | Type     |
| ---------- | -------------------- | -------- | -------- |
| center_x   | Center x coordinates | YES      | `number` |
| center_y   | Center y coordinates | YES      | `number` |
| radius     | Radius               | YES      | `number` |
| color      | Color                | NO       | `number` |

```js
canvas.drawCircle({
  center_x: 80,
  center_y: 140,
  radius: 40,
  color: 0xfff400
})
```

## Ellipse

1. Draw a ellipse path with line width and color set using the `setPaint` brush

```js
strokeEllipse(Param: object): void
```

2. Draw ellipse fill

```js
drawEllipse(Param: object): void
```

#### Param: object

| Properties | Description                  | Required | Type     |
| ---------- | ---------------------------- | -------- | -------- |
| center_x   | Ellipse center x coordinates | YES      | `number` |
| center_y   | Ellipse center y-coordinate  | YES      | `number` |
| radius_x   | x-directional axis radius    | YES      | `number` |
| radius_y   | y-directional axis radius    | YES      | `number` |
| color      | Color                        | NO       | `number` |

```js
canvas.drawEllipse({
  center_x: 80,
  center_y: 300,
  radius_x: 60,
  radius_y: 80,
  color: 0xff0000
})
```

## Arc

Compared to `drawEllipse`, `start_angle` and `end_angle` are added to intercept a part of the ellipse from the center of the ellipse as a sector.

1. Draw path

```js
strokeArc(Param: object): void
```

2. Draw fill

```js
drawArc(Param: object): void
```

#### Param: object

| Properties  | Description                                        | Required | Type     |
| ----------- | -------------------------------------------------- | -------- | -------- |
| center_x    | Ellipse center x coordinates                       | YES      | `number` |
| center_y    | Ellipse center y-coordinate                        | YES      | `number` |
| radius_x    | x-directional axis radius                          | YES      | `number` |
| radius_y    | y-directional axis radius                          | YES      | `number` |
| start_angle | Start angle (0 degrees in the 3 o'clock direction) | YES      | `number` |
| end_angle   | Start angle (0 degrees in the 3 o'clock direction) | YES      | `number` |
| color       | Color                                              | NO       | `number` |

```js
canvas.drawArc({
  center_x: 280,
  center_y: 200,
  radius_x: 60,
  radius_y: 80,
  start_angle: -150,
  end_angle: -30,
  color: 0xfff400
})
```

## Polygon

1. Draw a polygon path with line width and color set using the `setPaint` brush

```js
strokePoly(Param: object): void
```

2. Draw polygon fill

```js
drawPoly(Param: object): void
```

#### Param: object

| Properties | Description                                    | Required | Type         |
| ---------- | ---------------------------------------------- | -------- | ------------ |
| data_array | An array of coordinates of at least '3' length | YES      | `Coordinate` |
| color      | Color                                          | NO       | `number`     |

#### Coordinate

| Properties | Description  | Type     |
| ---------- | ------------ | -------- |
| x          | x coordinates | `number` |
| y          | y coordinates | `number` |

```js
const coordinateArray = [
  { x: 233, y: 30 },
  { x: 130, y: 230 },
  { x: 400, y: 200 },
  { x: 233, y: 30 }
]

canvas.strokePoly({
  data_array: coordinateArray
  color: 0x00ffff,
})
```

## canvas.drawText

Drawing text

```js
drawText(Param: object): void
```

#### Param: object

| Properties | Description        | Required | Type     |
| ---------- | ------------------ | -------- | -------- |
| x          | Text x Coordinates | YES      | `number` |
| y          | Text y Coordinates | YES      | `number` |
| text       | Text Content       | YES      | `string` |
| text_size  | Text Size          | YES      | `number` |
| color      | Color              | NO       | `number` |

```js
canvas.drawText({
  x: 200,
  y: 260,
  text_size: 30,
  text: 'Hello Zepp OS'
})
```

## canvas.drawImage

Drawing Image

```js
drawImage(Param: object): void
```

#### Param: object

| Properties | Description                                   | Required | Type     |
| ---------- | --------------------------------------------- | -------- | -------- |
| x          | Image x Coordinates                           | YES      | `number` |
| y          | Image y Coordinates                           | YES      | `number` |
| w          | Image width                                   | YES      | `number` |
| h          | Image height                                  | YES      | `number` |
| image      | Image path                                    | YES      | `string` |
| alpha      | Transparency [0-255], 0 for full transparency | NO       | `number` |

```js
canvas.drawImage({
  x: 0,
  y: 0,
  w: 466,
  h: 466,
  alpha: 255,
  image: 'images/canvas/background.png'
})
```

## canvas.clear

Clean up the canvas by rectangular area

```js
clear(Param: object): void
```

#### Param: object

| Properties | Description             | Required | Type     |
| ---------- | ----------------------- | -------- | -------- |
| x          | Rectangle x Coordinates | YES      | `number` |
| y          | Rectangle y Coordinates | YES      | `number` |
| w          | Rectangle area width    | YES      | `number` |
| h          | Rectangle area height   | YES      | `number` |

```js
canvas.clear({
  x: 400,
  y: 0,
  w: 64,
  h: 64
})
```

## Interaction events

Canvas supports `widget.addEventListener` to listen for interaction events, see [widget.addEventListener(eventId, callback)](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/addEventListener)

```js

canvas.addEventListener(event.CLICK_UP, function cb(info) {
  console.log(info.x)
  console.log(info.y)
})
```

---

## PAGE_INDICATOR

### Import

```js
import { PAGE_INDICATOR } from '@zos/ui'
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

When a page is set to Swiper scroll mode using the `@zos/page setScrollMode` method, an indicator control is created on the page to indicate the total number of pages and to indicate which page is currently stopped.

## Create UI widget

```js

const pageIndicator = createWidget(widget.PAGE_INDICATOR, Param)
```

## Type

### Param: object

| Properties   | Description                                                                                                                                                  | Required | Type      | API_LEVEL |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------- | --------- |
| x            | The x-axis coordinate of the widget.                                                                                                                         | YES      | `number`  | 2.1       |
| y            | The y-axis coordinate of the widget.                                                                                                                         | YES      | `number`  | 2.1       |
| w            | The width of the widget.                                                                                                                                     | YES      | `number`  | 2.1       |
| h            | The height of the widget.                                                                                                                                    | YES      | `number`  | 2.1       |
| align_h      | The alignment of the horizontal axis (see ALIGN for values).                                                                                                 | NO       | `ALIGN`   | 2.1       |
| h_space      | Horizontal spacing                                                                                                                                           | NO       | `number`  | 2.1       |
| v_space      | Vertical spacing                                                                                                                                             | NO       | `number`  | 3.0       |
| select_src   | Indicator current page highlight image path, resource storage path reference [Folder Structure](https://docs.zepp.com/docs/guides/architecture/folder-structure)     | YES      | `string`  | 2.1       |
| unselect_src | Indicator non-current page highlight image path, resource storage path reference [Folder Structure](https://docs.zepp.com/docs/guides/architecture/folder-structure) | YES      | `string`  | 2.1       |
| horizontal   | Horizontal or not, default is `true`, set `false` for vertical layout                                                                                        | NO       | `boolean` | 3.0       |
| use_color    | Whether to use colors to configure indicator dots                             | NO       | `boolean` | 4.0       |
| select_color | Selected color configuration                                                  | NO       | `number`  | 4.0       |
| unselect_color | Unselected color configuration                                             | NO       | `number`  | 4.0       |
| element_height | Width of the page indicator element                                         | NO       | `number`  | 4.0       |
| element_radius | Height of the page indicator element                                        | NO       | `number`  | 4.0       |

### ALIGN alignment

| Value          | Description                   |
| -------------- | ----------------------------- |
| align.LEFT     | Horizontal axis-left aligned. |
| align.RIGHT    | Horizontal axis-align right.  |
| align.CENTER_H | Horizontal axis-centered.     |

## Code Example

```js

Page({
  build() {
    const itemCount = 10
    const pageSize = px(480)

    setScrollMode({
      mode: SCROLL_MODE_SWIPER_HORIZONTAL,
      options: {
        height: pageSize,
        count: itemCount
      }
    })

    const pageIndicator = createWidget(widget.PAGE_INDICATOR, {
      x: 0,
      y: px(470),
      w: px(480),
      h: px(10),
      align_h: align.CENTER_H,
      h_space: 8,
      select_src: 'images/test/select/select.png',
      unselect_src: 'images/test/select/unselect.png'
    })

    for (let i = 0; i < itemCount; i++) {
      let xPos = 0
      let yPos = px(400) + pageSize * i
      createWidget(widget.TEXT, {
        x: xPos,
        y: yPos,
        w: px(480),
        h: px(120),
        text_size: 35,
        color: 0xffffff,
        align_h: align.CENTER_H,
        text: `PAGE ${i}`
      })
    }
  }
})
```

---

## PAGE_SCROLLBAR

### Import

```js
import { PAGE_SCROLLBAR } from '@zos/ui'
```

> Start from API_LEVEL `3.0`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility)。

Page Scrollbar.

## Create UI widget

```js

const scrollBar = createWidget(widget.PAGE_SCROLLBAR, Param)
```

### Param: object

| Properties   | Description                                                 | Required | Type     |
| ------ | ---------------------------------------------------- | -------- | -------- |
| target | The `VIEW_CONTAINER` widget that needs to be bound is the whole page scroll bar by default, and the `VIEW_CONTAINER` scroll bar is passed in | NO       | `object` |

## Code example

```js

const scrollBar = createWidget(widget.PAGE_SCROLLBAR)
```

---

## SPORT_DATA

### Import

```js
import { SPORT_DATA } from '@zos/ui'
```

> Start from API_LEVEL `3.6` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Displaying workout data in the workout extension can display a rich variety of workouts data types.

## Create UI widget

```js

const sportData = createWidget(widget.SPORT_DATA, Param)
```

### Param: object

| Properties       | Description                                                                                                             | Required | Type      |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| x                | Widget x coordinate                                                                                                     | YES      | `number`  |
| y                | Widget y coordinate                                                                                                     | YES      | `number`  |
| w                | Widget display width                                                                                                    | YES      | `number`  |
| h                | Widget display height                                                                                                   | YES      | `number`  |
| edit_id          | Widget ID, ensuring uniqueness of each instance                                                                         | YES      | `number`  |
| category         | Data type, currently only supports `edit_widget_group_type.SPORTS`                                                      | YES      | `number`  |
| default_type     | Displayed data items, see supported data items below                                                                    | YES      | `number`  |
| text_size        | Text font size, default `36` px                                                                                         | NO       | `number`  |
| text_color       | Text color, default `0x0000FF`                                                                                          | NO       | `number`  |
| sub_text_visible | Whether to display subtext, default is `false`                                                                          | NO       | `boolean` |
| sub_text_size    | Subtext font size, default `36` px                                                                                      | NO       | `number`  |
| sub_text_color   | Subtext color, default `0x0000FF`                                                                                       | NO       | `number`  |
| rect_visible     | Whether to display the text box, default is `false`                                                                     | NO       | `boolean` |
| line_color       | Text box color, default `0x0000FF`                                                                                      | NO       | `number`  |
| text_x           | Relative coordinates.Text box displays location x coordinates                                                                                | NO       | `number`  |
| text_y           | Relative coordinates.Text box displays position y coordinates                                                                                | NO       | `number`  |
| text_w           | Text box width                                                                                                          | NO       | `number`  |
| text_h           | Text box height                                                                                                         | NO       | `number`  |
| sub_text_x       | Relative coordinates.Subtext box displays position x coordinates                                                                             | NO       | `number`  |
| sub_text_y       | Relative coordinates.Subtext box displays position y coordinates                                                                             | NO       | `number`  |
| sub_text_w       | Secondary text box width                                                                                                | NO       | `number`  |
| sub_text_h       | Secondary text box height                                                                                               | NO       | `number`  |
| mock_data        | The simulated data only takes effect in the emulator, and the data items of the widget will display the incoming string | NO       | `string`  |

### Data item type

Data item types are accessed through the `sport_data` object of the `@zos/ui` module

| Data item Key                 | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| DURATION_NET                  | Exercise time                                  |
| DURATION_CUR_SECTION          | This segment time                              |
| DURATION_PREV_SECTION         | Previous segment time                          |
| DURATION_AVG_SECTION          | Average segment time                           |
| DURATION_CUR_GROUP            | This set time                                  |
| DISTANCE_TOTAL                | Distance                                       |
| DISTANCE_CUR_SECTION          | This segment distance                          |
| DISTANCE_PREV_SECTION         | Previous segment distance                      |
| COUNT_TOTAL                   | Total count                                    |
| COUNT_CUR_ROPE                | This set count                                 |
| COUNT_BROKEN_ROPE             | Number of broken ropes                         |
| COUNT_TOTAL_BOAT              | Total strokes                                  |
| COUNT_CUR_BOAT                | This set strokes                               |
| COUNT_CUR_FITNESS             | This set count                                 |
| GLIDE_COUNT                   | Number of descents                             |
| GLIDE_TOTAL_DISTANCE          | Cumulative descent distance                    |
| GLIDE_CUR_DISTANCE            | This descent distance                          |
| GLIDE_TOTAL_ALTITUDE          | Cumulative descent drop                        |
| GLIDE_CUR_ALTITUDE            | This descent drop                              |
| CLIMB_UP_FLOORS               | Floors ascended                                |
| CLIMB_UP_CUR_FLOORS           | This segment floors ascended                   |
| CLIMB_UP_PREV_FLOORS          | Previous segment floors ascended               |
| CLIMB_DOWN_FLOORS             | Floors descended                               |
| CLIMB_DOWN_CUR_FLOORS         | This segment floors descended                  |
| CLIMB_DOWN_PREV_FLOORS        | Previous segment floors descended              |
| CLIMB_UP_FLOORS_IN_MIN        | Floors ascended per minute                     |
| CLIMB_UP_TOTAL_ALTITUDE       | Ascent height                                  |
| CLIMB_UP_CUR_ALTITUDE         | This segment ascent height                     |
| CLIMB_UP_PREV_ALTITUDE        | Previous segment ascent height                 |
| CLIMB_DOWN_ALTITUDE_TOTAL     | Descent height                                 |
| CLIMB_DOWN_CUR_ALTITUDE       | This segment descent height                    |
| CLIMB_DOWN_PREV_ALTITUDE      | Previous segment descent height                |
| SWIM_TOTAL_LAPS               | Number of trips                                |
| SWIM_CUR_LAPS                 | This segment trips                             |
| SWIM_PREV_LAPS                | Previous segment trips                         |
| SWIM_TOTAL_STROKE_count       | Total paddle strokes                           |
| SWIM_CUR_STROKE_count         | This segment paddle strokes                    |
| SWIM_PREV_STROKE_count        | Previous segment paddle strokes                |
| SWIM_AVG_STROKE_DISTANCE      | Average paddle distance                        |
| SWIM_AVG_SECTION_STROKE_count | Average paddle strokes per segment             |
| SWIM_STROKE_SPEED             | Paddle stroke rate                             |
| SWIM_CUR_STROKE_SPEED         | This segment paddle stroke rate                |
| SWIM_PREV_STROKE_SPEED        | Previous segment paddle stroke rate            |
| SWIM_AVG_STROKE_SPEED         | Average paddle stroke rate                     |
| SWIM_AVG_SWOLF                | Average Swolf                                  |
| SWIM_CUR_SWOLF                | This segment Swolf                             |
| SWIM_PREV_SWOLF               | Previous segment Swolf                         |
| PACE                          | Pace                                           |
| PACE_AVG                      | Average pace                                   |
| PACE_CUR_AVG                  | This segment pace                              |
| PACE_PREV_AVG                 | Previous segment pace                          |
| STRIDE_FREQ                   | Cadence                                        |
| STRIDE_AVG_FREQ               | Average cadence                                |
| STRIDE_CUR_FREQ               | This segment cadence                           |
| STRIDE_PREV_FREQ              | Previous segment cadence                       |
| STRIDE                        | Stride length                                  |
| STRIDE_AVG                    | Average stride length                          |
| STRIDE_CUR                    | This segment stride length                     |
| STRIDE_PREV                   | Previous segment stride length                 |
| STRIDE_COUNT                  | Steps                                          |
| SPEED                         | Speed                                          |
| SPEED_AVG                     | Average speed                                  |
| SPEED_AVG_GLIDE               | Average descent speed                          |
| SPEED_PREV_GLIDE              | Previous descent speed                         |
| SPEED_CUR_SECTION             | This segment speed                             |
| SPEED_PREV_SECTION            | Previous segment speed                         |
| SPEED_MAX                     | Maximum speed                                  |
| SPEED_VERTICAL                | Vertical speed                                 |
| ALTITUDE                      | Altitude                                       |
| ALTITUDE_MAX                  | Maximum altitude                               |
| ALTITUDE_MIN                  | Minimum altitude                               |
| ALTITUDE_AVG                  | Average altitude                               |
| SLOPE_TOTAL_RISING_DISTANCE   | Cumulative ascent                              |
| SLOPE_CUR_RISING_DISTANCE     | This segment ascent                            |
| SLOPE_PREV_RISING_DISTANCE    | Previous segment ascent                        |
| ALTITUDE_TOTAL_UP             | Cumulative ascent                              |
| ALTITUDE_CUR_UP               | This segment ascent                            |
| ALTITUDE_PREV_UP              | Previous segment ascent                        |
| ALTITUDE_TOTAL_DOWN           | Cumulative descent                             |
| ALTITUDE_CUR_DOWN             | This segment descent                           |
| ALTITUDE_PREV_DOWN            | Previous segment descent                       |
| SLOPE                         | Gradient                                       |
| SLOPE_AVG                     | Average gradient                               |
| SLOPE_CUR                     | This segment gradient                          |
| SLOPE_PREV                    | Previous segment gradient                      |
| SLOPE_GLIDE                   | Glide ratio                                    |
| SLOPE_AVG_GLIDE               | Average glide ratio                            |
| SLOPE_CUR_GLIDE               | This segment glide ratio                       |
| SLOPE_PREV_GLIDE              | Previous segment glide ratio                   |
| BRANDISH_TOTAL_count          | Total shots                                    |
| BRANDISH_POSITIVE_count       | Forehand shots                                 |
| BRANDISH_NEGATIVE_count       | Backhand shots                                 |
| BRANDISH_SERVE_count          | Serves                                         |
| CONSUME                       | Consumption                                    |
| CONSUME_CUR                   | This set consumption                           |
| BOATING_FREQ                  | Stroke rate                                    |
| BOATING_AVG_FREQ              | Average stroke rate                            |
| BOATING_CUR_FREQ              | This set average stroke rate                   |
| BOATING_PULL                  | Pull time                                      |
| BOATING_PUSH                  | Recovery time                                  |
| FREQ                          | Frequency                                      |
| FREQ_AVG                      | Average frequency                              |
| FREQ_CUR                      | This set average frequency                     |
| GOLF_SPEED                    | Hand speed                                     |
| GOLF_ANGLE                    | Plane                                          |
| GOLF_UP_TIME                  | Upstroke time                                  |
| GOLF_DOWN_TIME                | Downstroke time                                |
| GOLF_BEAT                     | Rhythm                                         |
| GOLF_SWING_COUNTER_GROUP      | This set strokes                               |
| GOLF_SWING_COUNTER            | Total strokes                                  |
| GOLF_AVG_SCORE                | Average score                                  |
| GOLF_SCORE                    | Score                                          |
| HR                            | Heart rate                                     |
| HR_AVG                        | Average heart rate                             |
| HR_CUR_AVG                    | This set average heart rate                    |
| HR_INTERVAL                   | Heart rate zone                                |
| HR_MAX_PERCENT                | Maximum heart rate percentage                  |
| HR_RESERVED_PERCENT           | Reserve heart rate percentage                  |
| HR_AVG_MAX_PERCENT            | Average maximum heart rate percentage          |
| HR_AVG_RESERVED_PERCENT       | Average reserve heart rate percentage          |
| HR_CUR_SECTION                | This segment heart rate                        |
| HR_CUR_MAX_PERCENT            | This segment maximum heart rate percentage     |
| HR_CUR_RESERVED_PERCENT       | This segment reserve heart rate percentage     |
| HR_PREV_SECTION               | Previous segment heart rate                    |
| HR_PREV_MAX_PERCENT           | Previous segment maximum heart rate percentage |
| HR_PREV_RESERED_PERCENT       | Previous segment reserve heart rate percentage |
| PRESSURE                      | Pressure                                       |
| PRESSURE_AVG                  | Average pressure                               |
| PRESSURE_CUR                  | This segment pressure                          |
| PRESSURE_PREV                 | Previous segment pressure                      |
| TEMP                          | Temperature                                    |
| TEMP_MAX                      | Maximum temperature                            |
| TEMP_MIN                      | Minimum temperature                            |
| OTHER_SECTION_ORDER           | Current set                                    |
| OTHER_AEROBIC_TE              | Aerobic TE                                     |
| OTHER_ANAEROBIC_TE            | Anaerobic TE                                   |
| OTHER_TRAIN_LOAD              | Training load                                  |
| OTHER_CUR_TIME                | Current time                                   |
| OTHER_SUNRISE_TIME            | Sunrise time                                   |
| OTHER_SUNSET_TIME             | Sunset time                                    |
| OTHER_BORAMETER               | Barometric pressure                            |
| OTHER_ACTIONNAME              | Movement name                                  |
| CHART_HR                      | Heart rate graph                               |
| CHART_SPEED                   | Speed graph                                    |
| CHART_STROKE_FREP             | Stroke rate graph                              |
| CHART_TE                      | Training effect graph                          |
| CHART_STROKE_SPEED            | Paddle stroke rate graph                       |
| CHART_PACE                    | Pace graph                                     |
| CHART_ALTITUDE                | Altitude graph                                 |
| CHART_FREQ                    | Frequency graph                                |
| DEVICE_POWER                  | Power                                          |
| DEVICE_POWER_WEIGHT           | Power-to-weight ratio                          |
| DEVICE_WORK                   | Work                                           |
| DEVICE_AVG_POWER              | Average power                                  |
| DEVICE_MAX_POWER              | Maximum power                                  |
| DEVICE_3S_AVG_POWER           | 3s average power                               |
| DEVICE_10S_AVG_POWER          | 10s average power                              |
| DEVICE_30S_AVG_POWER          | 30s average power                              |
| DEVICE_LAP_AVG_POWER          | This segment power                             |
| DEVICE_PREV_AVG_POWER         | Previous segment power                         |
| DEVICE_CADENCE                | Cadence                                        |
| DEVICE_FAST_CADENCE           | Maximum cadence                                |
| DEVICE_AVG_CADENCE            | Average cadence                                |
| DEVICE_LAP_AVG_CADENCE        | This segment cadence                           |
| DEVICE_PREV_AVG_CADENCE       | Previous segment cadence                       |
| DURATION_GLIDE                | Descent time                                   |
| DURATION_TOTAL_CLIMB          | Ascent time                                    |
| GLIDE_PREV_DISTANCE           | Previous descent distance                      |
| GLIDE_PREV_ALTITUDE           | Previous descent drop                          |
| SPEED_MAX_GLIDE               | Maximum descent speed                          |
| SLOPE_GLIDE_MAX               | Maximum descent gradient                       |
| SLOPE_GLIDE_AVG               | Average descent gradient                       |
| GLIDE_ANGLE_MAX               | Maximum descent angle                          |
| GLIDE_ANGLE_AVG               | Average descent angle                          |
| DURATION_SURFACE              | Time on water                                  |
| DURATION_CUR_DIVING           | This dive time                                 |
| DURATION_PREV_DIVING          | Previous dive time                             |
| COUNT_DIVING                  | Number of dives                                |
| COUNT_CAUGHT                  | Catch count                                    |
| SPEED_DIVING                  | Dive speed                                     |
| DEPTH                         | Depth                                          |
| DEPTH_AVG                     | Average depth                                  |
| DEPTH_MAX                     | Maximum depth                                  |
| DEPTH_MAX_PREV                | Previous dive depth                            |
| HEIGHT                        | Elevation                                      |
| DESENT_SPEED                  | Descent rate                                   |
| DESENT_SPEED_MAX              | Maximum descent rate                           |
| DESENT_SPEED_AVG              | Average descent rate                           |
| SKYDIVING_HEIGHT              | Parachute jump height                          |
| COUNT_CONTINUOUS_ROPE         | Maximum consecutive jumps                      |

## Code example

```js

createWidget(widget.SPORT_DATA, {
  edit_id: 1,
  category: edit_widget_group_type.SPORTS,
  default_type: sport_data.CONSUME,
  x: 50,
  y: 200,
  w: 380,
  h: 80
})
```

---

