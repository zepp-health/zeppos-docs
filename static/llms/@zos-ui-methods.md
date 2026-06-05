# @zos/ui-methods

General UI methods, page-level helpers, layout helpers, dialogs, toast, keyboard, and widget lifecycle APIs.

## addEventListener

### Import

```js
import { addEventListener } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Register a listener to the UI widget and the given callback function will be executed when the specified event is triggered.

## Type

```ts
(eventId: EventId, callback: (event: Event) => void) => void
```

## Parameters

| Parameter | Description                                         |   Type    |
| --------- | --------------------------------------------------- | --------- |
| eventId   | Event type. (e.g., `event.MOVE`, `event.CLICK_DOWN`, etc.) | `EventId` |
| event     | Event details, refer to different events.           | `object` |

### EventId

| Value                   | Description |
| ----------------------- | ----------- |
| `event.MOVE`       | Slide       |
| `event.CLICK_DOWN` | Press       |
| `event.CLICK_UP`   | Lift up     |
| `event.MOVE_IN`    | Move in     |
| `event.MOVE_OUT`   | Move out    |

## Code example

```js

const img_bkg = createWidget(widget.IMG)

img_bkg.addEventListener(event.CLICK_DOWN, function (info) {
  //Registering event listeners.
  console.log(info.x)
})
```

---

## removeEventListener

### Import

```js
import { removeEventListener } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Remove event listeners registered by the UI widget using the `widget.addEventListener` method.

## Type

```ts
(eventId: EventId, callback) => void
```

## Parameters

| Parameter | Description                                |    Type    |
| --------- | ------------------------------------------ | ---------- |
| eventId   | Event type (e.g., swipe, press, lift, etc.)| `number` |
| callback  | The callback function to register.         | `function` |

### EventId

Refer to the `EventId` of `addEventListener`.

## Code example

```js

const img_bkg = createWidget(widget.IMG)
const listenerFunc = (info) => {
  console.log(info.x)
}

img_bkg.addEventListener(event.CLICK_DOWN, listenerFunc)
img_bkg.removeEventListener(event.CLICK_DOWN, listenerFunc)
```

---

## setProperty

### Import

```js
import { setProperty } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set the properties of the UI widget.

## Type

```ts
(propertyId: string, val: any) => void
```

## Parameters

| Parameter  | Description                                                                                                                             | Type         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| propertyId | The property of ID.                                                                                                                     | `PropertyId` |
| val        | Set the value. (when property is `prop.MORE`, val is used in the same way as createWidget's option, which can set multiple parameters.) | `any`        |

### PropertyId

List the properties commonly supported by the widgets.

| Properties | Description                                                                                                                                                                                | Type      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| x          | The x-axis coordinate of the widget.                                                                                                                                                    | `number`  |
| y          | The y-axis coordinate of the widget.                                                                                                                                                    | `number`  |
| w          | The width of the widget.                                                                                                                                                                | `number`  |
| h          | The height of the widget.                                                                                                                                                               | `number`  |
| VISIBLE    | Whether the widget is visible or not, `true` is visible, `false` is not, this property does not support `setProperty(prop.MORE, {})`, only `setProperty` sets the `VISIBLE` property alone | `boolean` |
| DATASET    | Developer-defined properties of the widget, obtained via `widget.getProperty(prop.DATASET)`                                                                                                | `any`     |

## Code example

```js

const button = createWidget(widget.BUTTON, Param)
button.setProperty(prop.VISIBLE, false)

const text = createWidget(widget.TEXT, Param)
text.setProperty(prop.MORE, {
  x: 0,
  y: 0,
  w: 200,
  h: 200,
  text: 'hello',
  color: 0x34e073,
  align_h: align.LEFT
})

text.setProperty(prop.DATASET, {
  name: 'text1'
})

const dataset = text.getProperty(prop.DATASET)
```

---

## getProperty

### Import

```js
import { getProperty } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the UI widget properties, use `widget.getProperty(prop.MORE, {})` to get all the properties of the widget.

## Type

```ts
(key: any) => result
```

## Parameters

| Parameter | Description            | Type |
| --------- | ---------------------- | ----- |
| key       | The value of property. | `any` |

## Code example

```js

const img_bkg = createWidget(widget.IMG)
const img_prop = img_bkg.getProperty(prop.MORE, {})
const { angle, w, h } = img_prop

const imgHeight = img_bkg.getProperty(prop.H)
```

> **⚠️ Caution**
>
> At this stage, some widgets do not support property acquisition, it is recommended to try to get first, if you can not get the value, you can refer to the following code snippet, manually maintain a variable in the current page to record the corresponding property changes

```js

Page({
  state: {
    buttonY: 0
  },
  build() {
    this.state.buttonY = 300

    createWidget(widget.BUTTON, {
      y: this.state.buttonY,
      // ...
    })

    showToast({
      text: this.state.buttonY
    })
  }
})
```

---

## getType

### Import

```js
import { getType } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the UI widget type.

## Type

```ts
() => result
```

## Parameters

### result

| Description            |   Type   |
| ---------------------- | -------- |
| The type of UI widget. Refer to `WIDGET_ID` in `createWidget`. | `number` |

---

## getId

### Import

```js
import { getId } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the unique ID of the widget.

## Type

```ts
() => result
```

## Parameters

### result

| Description |   Type   |
| ----------- | -------- |
| unique ID   | `number` |

---

## setAlpha

### Import

```js
import { setAlpha } from '@zos/ui'
```

> Start from API_LEVEL `2.1` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set the opacity of the widget.

> **ℹ️ Info**
>
> For widgets that do not support the `alpha` property, use `widget.setAlpha` to set opacity.

## Type

```ts
(val: any) => void
```

### val

| Description                                          | Type     |
| --------------------------------------------- | -------- |
| Transparency, 0 - 255, default value is 255 for opaque, 0 for full | `number` |

## Code example

```js

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
  text: 'HELLO ZEPPOS'
})

text.setAlpha(80)
```

---

## gettersetter

### Import

```js
import { gettersetter } from '@zos/ui'
```

> Supported since API_LEVEL `4.0`. For API compatibility, please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Starting from API_LEVEL 4.0, Zepp OS supports direct access and modification of widget properties through getter/setter features, making property read/write operations more concise and intuitive.

## Overview

Before API_LEVEL 4.0, we needed to use `getProperty` and `setProperty` methods to read and set widget properties. Now, we can directly use the `.` operator to access or set these properties, just like accessing regular JavaScript object properties.

## Usage

### Reading Properties (getter)

```js
// Old way
const textWidth = textWidget.getProperty(prop.W)

// New way (API_LEVEL 4.0+)
const textWidth = textWidget.w
```

### Setting Properties (setter)

```js
// Old way
textWidget.setProperty(prop.TEXT, 'Hello Zepp OS')

// New way (API_LEVEL 4.0+)
textWidget.text = 'Hello Zepp OS'
```

## Code Example

Here's a complete example demonstrating the getter/setter features using a TEXT widget:

```js

Page({
  build() {
    // Create TEXT widget
    const textWidget = createWidget(widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text: 'Hello Zepp OS',
      text_size: 36
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

## Property Access Support List

Different widgets may support different properties through getter/setter access. Please refer to the property support table in each widget's documentation.

Here's an example of the property list supported by the `TEXT` widget:

| Property Name | setProperty | setProperty | setter | getter |
| ----------- | ----------- | ----------- | ------ | ------ |
| x           | Y           | Y           | Y      | Y      |
| y           | Y           | Y           | Y      | Y      |
| w           | Y           | Y           | Y      | Y      |
| h           | Y           | Y           | Y      | Y      |
| color       | Y           | Y           | Y      | Y      |
| align_h     | Y           | Y           | Y      | Y      |
| align_v     | Y           | Y           | Y      | Y      |
| text        | Y           | Y           | Y      | Y      |
| text_size   | Y           | Y           | Y      | Y      |
| font        | Y           | Y           | Y      | Y      |
| text_style  | Y           | Y           | Y      | Y      |
| line_space  | Y           | Y           | Y      | Y      |
| char_space  | Y           | Y           | Y      | Y      |
| text_i18n   | N           | N           | Y      | Y      |
| start_angle | N           | N           | N      | N      |
| end_angle   | N           | N           | N      | N      |
| mode        | N           | N           | N      | N      |
| radius      | N           | N           | N      | N      |

- Y: Indicates the property access method is supported
- N: Indicates the property access method is not supported

## Related References

- [createWidget](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/createWidget)
- [setProperty](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/setProperty)
- [getProperty](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/getProperty)

---

## createWidget

### Import

```js
import { createWidget } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Create UI widgets.

## Type

```ts
(widgetId: WIDGET_ID, option?: Option) => widget: WIDGET
```

## Parameters

| Parameter | Description                                               | Required | Type |
| --------- | --------------------------------------------------------- | -------- | ---- |
| widgetId  | The ID of the widget to be created. (Reference WIDGET_ID) | YES      | -    |
| option    | Parameters.                                               | NO       | -    |
| widget    | The instance of widget.                                   | -        | -    |

### WIDGET_ID

| Value           | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| `widget.BUTTON` | Button widget ID.                                                       |
| IMG`            | Image widget ID.                                                        |
| ...             | The rest of the values are not listed, refer to the `widget` directory. |

### WIDGET

| Description   | Type     |
| ------------- | -------- |
| Widget object | `object` |

## Code examples

> Reference to a widget example.

```js

Page({
  build() {
    const textWidget = createWidget(widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: 'HELLO ZEPPOS'
    })
  }
})
```

---

## deleteWidget

### Import

```js
import { deleteWidget } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Delete the UI widget.

## Type

```ts
(widget: WIDGET) => void
```

## Parameters

### WIDGET

| Description                            | Type |
| -------------------------------------- | -------- |
| widget object, returned by `createWidget`  | `number` |

## Code Example

```js

Page({
  build() {
    const textWidget = createWidget(widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: 'HELLO ZEPPOS'
    })

    deleteWidget(textWidget)
  }
})
```

---

## createDialog

### Import

```js
import { createDialog } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: create_dialog]

Create a Dialog.

## Type

```ts
(option: Option) => result
```

## Parameters

### Option: object

| Properties    | Description                                                                                    | Required | Type                       |
| ------------- | ---------------------------------------------------------------------------------------------- | -------- | -------------------------- |
| title         | The title of the widget.                                                                    | YES      | `string`                   |
| show          | Whether to display Dialog immediately after the creation is completed, default `false`.         | NO       | `boolean`                  |
| click_listener | Callback function, type: 0 click to cancel, type: 1 click to confirm.                          | YES      | `({type: number}) => void` |
| auto_hide     | Whether the dialog disappears after clicking the "Confirm" or "Cancel" button, default `true`. | NO       | `boolean`                  |

> **⚠️ Caution**
>
> Setting `auto_hide` to `false` allows the Dialog to be shown and hidden manually through the `show` API via the Dialog instance method.
>
> If you need to call routing-related APIs like `back` in the popup callback function, it is recommended to set `auto_hide` to `false` to make the page jump smoother. Otherwise, when the page is switched, the Dialog popup will be destroyed first, and then the page will be jumped, which will make the page feel switched once more.

### dialog instance

#### dialog.show()

```ts
(isShow: boolean) => void
```

| `isShow` | Description |
| -------- | ----------- |
| `true`   | show        |
| `false`  | hide        |

## Code examples

```js

Page({
  build() {
    const dialog = createDialog({
      title: 'HELLO ZEPP OS',
      auto_hide: false,
      click_listener: ({ type }) => {
        dialog.show(false)
        console.log('type', type)
        console.log('click dialog')
      }
    })

    dialog.show(true)
  }
})
```

---

## showToast

### Import

```js
import { showToast } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: show_toast]

Show Toast with `\n` text line feed support.

## Type

```ts
(option: Option) => void
```

## Parameters

### Option: object

| Properties | Description                |   Type   |
| ---------- | -------------------------- | -------- |
|    text    | The text content of toast. | `string` |

## Code examples

```js

Page({
  build() {
    showToast({
      text: 'Hello\nZepp OS'
    })
  }
})
```

---

## setStatusBarVisible

### Import

```js
import { setStatusBarVisible } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

This interface is only available on square screen devices, set the status bar visible or not.

For square screen title bar, refer to [Screen Adaptation](https://docs.zepp.com/docs/guides/best-practice/multi-screen-adaption).

## Type

```ts
(visible: boolean) => void
```

## Parameters

| parameter | description | type |
| ------- | --------------------------------------- | --------- |
| visible | `true`: show the status bar; `false`: hide the status bar | `boolean` |

## Code examples

```js

setStatusBarVisible(false)
```

---

## updateStatusBarTitle

### Import

```js
import { updateStatusBarTitle } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

This interface is only available on square screen devices, set the status bar to display text content.

For square screen title bar, refer to [Screen Adaptation](https://docs.zepp.com/docs/guides/best-practice/multi-screen-adaption).

## Type

```ts
(title: string) => void
```

## Parameters

| parameter | description | type |
| ----- | -------------- | -------- |
| title | Status bar display text | `string` |

## Code example

```js

const title = 'Mini Program Title'

updateStatusBarTitle(title)
```

---

## getTextLayout

### Import

```js
import { getTextLayout } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Calculate the height and width of the target text after the layout is completed, and does not actually render it, only performs the layout calculation.

Can be used to calculate the height of a multi-line text layout with a fixed width, or the width of a single-line text layout.

## Type

```ts
(text: string, options: object) => result
```

## Parameters

| Parameter | Description                                 | Required | Type      |
| --------- | ------------------------------------------- | -------- | --------- |
| text      | Text content of the layout to be calculated | YES      | `string`  |
| options   | Options                                     | YES      | `Options` |

### Options

| Properties | Description                                                                                                                                                                                            | Required | Type     | API_LEVEL |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------- | --------- |
| text_size  | Text size                                                                                                                                                                                              | YES      | `number` | 2.0       |
| text_width | Width of a single line of text                                                                                                                                                                         | YES      | `number` | 2.0       |
| wrapped    | whether the text is line feed, `0`: no line feed; `1`: line feed                                                                                                                                       | NO       | `number` | 2.0       |
| rows_max   | Limit the maximum number of lines (when the given text exceeds the maximum number of lines, it will be truncated and followed by an ellipsis). The default value is `0`, which means there is no limit | NO       | `number` | 3.0       |

### result: object

| Properties | Description                                                            | Type     | API_LEVEL |
| ---------- | ---------------------------------------------------------------------- | -------- | --------- |
| width      | Width pixel value                                                      | `number` | 2.0       |
| height     | Height pixel value                                                     | `number` | 2.0       |
| rows       | The text displays the number of lines. When the `wrapped` field is `false`, the value of `rows` is `1`.           | `number` | 2.0       |
| result     | Calculation result, `-1` - error, `0` - success, `1` - success, characters truncated and ellipses added | `number` | 2.0       |
| text       | When the calculation is successful, the truncated and ellipsed text content is returned, which can be used for the display of actual UI widgets | `string` | 2.0       |

## Code example

```js

const { width, height } = getTextLayout('turn right and go alone the road', {
  text_size: 30,
  text_width: 200
})

console.log('width', width)
console.log('height', height)
```

```js

const { width, height } = getTextLayout('turn right and go alone the road', {
  text_size: 30,
  text_width: 0,
  wrapped: 0
})

console.log('width', width)
console.log('height', height)
```

---

## getImageInfo

### Import

```js
import { getImageInfo } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get information about the image resources in the `/assets` resource directory.

## Type

```ts
(img_path: string) => result
```

## Parameters

| Parameter | Description                                                              | Required | Type     |
| --------- | ------------------------------------------------------------------------ | -------- | -------- |
| img_path  | The path to the image file, relative to the `/assets` resource directory | YES      | `string` |

### result: object

| Parameter | Description        | Type     |
| --------- | ------------------ | -------- |
| width     | Image width value  | `number` |
| height    | Image height value | `number` |

## Code example

```js

getImageInfo('test.png')
```

---

## redraw

### Import

```js
import { redraw } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

In some boundary cases, after `deleteWidget`, the view may not be updated in time, need to call `redraw()` manually to update the view

## Type

```ts
() => undefined
```

## Code example

```js

redraw()
```

---

## setEnable

### Import

```js
import { setEnable } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set whether the widget responds to screen gesture interaction events, the default is to respond.

If the widgets are stacked in the Z-axis direction, the widgets above the stack will block events and the widgets below will not receive events such as `CLICK_DOWN` and `CLICK_UP`. If you want the widgets below to receive gesture events, set `widget.setEnable(false)` for the widgets stacked above.

## Type

```ts
(response: boolean) => void
```

## Parameters

### response

| Description                                                                                          | Type      |
| ---------------------------------------------------------------------------------------------------- | --------- |
| Whether the widget responds to gesture interaction events, `true` responds, `false` does not respond | `boolean` |

---

## setAppWidgetSize

### Import

```js
import { setAppWidgetSize } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set the size of the Shortcut cards, currently only height adjustment is supported.

## Type

```ts
(option: Option) => undefined
```

## Parameters

### Option: object

| Properties | Description          | Required | Type     |
| ---------- | -------------------- | -------- | -------- |
| h          | Shortcut card height | `YES`    | `number` |

## Code example

```js

setAppWidgetSize({ h: 100 })
```

---

## getAppWidgetSize

### Import

```js
import { getAppWidgetSize } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the system default shortcut card size for developers to layout the widget.

## Type

```ts
() => result
```

### result: object

| Parameter | Description                                             | Type     |
| --------- | ------------------------------------------------------- | -------- |
| w         | Shortcut card width                                     | `number` |
| h         | shortcut card height                                    | `number` |
| margin    | Margin of the shortcut card from the edge of the screen | `number` |
| radius    | Quick Card Rounded Corners                              | `number` |

## Code example

```js

const { w } = getAppWidgetSize()
```

---

## getRtlLayout

### Import

```js
import { getRtlLayout } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Query whether the current system language setting is RTL language. Setting the language to Hebrew and Arabic will return `true`.

## Type

```ts
() => result
```

### result: boolean

| Description                                                                      | Type      |
| -------------------------------------------------------------------------------- | --------- |
| Query results, `true` indicates RTL language, `false` indicates non-RTL language | `boolean` |

## Code example

```js

const result = getRtlLayout()
console.log(result)
```

---

## relayoutRtl

### Import

```js
import { relayoutRtl } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Apply RTL layout to the widget based on the current system language.

> **📝 Note**
>
> After calling this method, the current system language will be queried. If it is an RTL language, RTL layout adjustments will be made to all widgets on the current calling page. If there are widgets on the current page that do not need to be flipped, you need to organize the calling timing of `relayoutRtl()` and widget creation
>

Design specification reference [Design Specifications - Internationalization - Interface layouts](https://docs.zepp.com/docs/designs/internationalization/interface-layouts)

## Type

```ts
() => result
```

### result: boolean

| Description                     | Type      |
| ------------------------------- | --------- |
| Call result, `true` succeeds, `false` fails | `boolean` |

## 代码示例

```js

const result = relayoutRtl()
console.log(result)
```

---

## setLayoutParent

### Import

```js
import { setLayoutParent } from '@zos/ui'
```

> Supported from API_LEVEL `4.0`. For API compatibility, please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Sets the parent node of the current node.

## Type

```ts
(parent: UIWidget) => void
```

## Parameters

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| parent    | `UIWidget` | Widget instance object participating in layout |

## Example

```js
const container = hmUI.createWidget(hmUI.widget.VIRTUAL_CONTAINER, {
  x: 0,
  y: 0,
  w: 480,
  h: 480
})

const text = hmUI.createWidget(hmUI.widget.TEXT, {
  text: 'Hello Zepp OS'
})

// Set text widget as child node of container
text.setLayoutParent(container)
```

## Related References

- [Flex Layout Guide](https://docs.zepp.com/docs/guides/framework/device/layout)

---

## addLayoutChild

### Import

```js
import { addLayoutChild } from '@zos/ui'
```

> Supported from API_LEVEL `4.0`. For API compatibility, please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Adds a child node to the current widget.

## Type

```ts
(child: UIWidget, index?: number) => void
```

## Parameters

| Parameter | Type       | Required | Description                 |
| --------- | ---------- | -------- | --------------------------- |
| child     | `UIWidget` | Yes      | Child widget instance to add |
| index     | `number`   | No       | Insertion position index    |

## Example

```js

const container = createWidget(widget.VIRTUAL_CONTAINER)
const button = createWidget(widget.BUTTON)

// Add child node to the end of container
container.addLayoutChild(button)

// Add child node at specified position
container.addLayoutChild(button, 0)
```

## Related References

- [Widget layout property implements Flex layout](https://docs.zepp.com/docs/guides/framework/device/layout)

---

## removeLayoutChild

### Import

```js
import { removeLayoutChild } from '@zos/ui'
```

> Supported from API_LEVEL `4.0`. For API compatibility, please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Removes the specified child node from the current node.

## Type

```ts
(child: UIWidget) => void
```

## Parameters

| Parameter | Type      | Description                 |
| --------- | --------- | --------------------------- |
| child     | `UIWidget` | Child widget instance to remove |

## Example

```js
// Remove child widget from parent container
container.removeLayoutChild(button)
```

## Related References

- [Flex Layout Guide](https://docs.zepp.com/docs/guides/framework/device/layout)

---

## updateLayoutStyle

### Import

```js
import { updateLayoutStyle } from '@zos/ui'
```

> Supported from API_LEVEL `4.0`. For API compatibility, please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Updates the layout style of a widget node. For detailed `layout` object properties, please refer to [layout property configuration](https://docs.zepp.com/docs/guides/framework/device/layout.md#layout-properties).

## Type

```ts
(style: LayoutStyle) => void
```

## Parameters

| Parameter | Type          | Description               |
| --------- | ------------- | ------------------------- |
| style     | `LayoutStyle` | Object containing layout properties, the `layout` object |

## Example

```js

const container = createWidget(widget.VIRTUAL_CONTAINER)

// Update container layout style
container.updateLayoutStyle({
  display: 'flex',
  'flex-direction': 'row',
  'justify-content': 'space-between',
  'align-items': 'center',
  width: '100%',
  height: '200px'
})
```

## Related References

- [Widget layout properties for Flex layout](https://docs.zepp.com/docs/guides/framework/device/layout)

---

## updateLayout

### Import

```js
import { updateLayout } from '@zos/ui'
```

> Supported from API_LEVEL `4.0`. For API compatibility, please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Used to re-render the view after modifying the widget tree.

## Type

```ts
() => void
```

## Example

```js

const container = createWidget(widget.VIRTUAL_CONTAINER)
const button = createWidget(widget.BUTTON)

// Add child node
container.addLayoutChild(button)

// Update layout and re-render the view
updateLayout()
```

## Related References
- [Widget layout properties for Flex layout](https://docs.zepp.com/docs/guides/framework/device/layout)

---

## openInspector

### Import

```js
import { openInspector } from '@zos/ui'
```

> Supported since API_LEVEL `4.0`. For API compatibility, please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

<img
  src={useBaseUrl('/img/docs/guides/framework/layout_debug.jpg')}
  width="50%"
  title="layout_debug"
/>

During development, especially when using Flex layout, you may need to check the actual layout position and size of each widget. Using `openInspector()` can visually display the boundaries of all widgets participating in layout in the simulator, helping developers debug layout issues.

Used in the simulator to draw boundary rectangles for all widgets participating in layout, helping developers debug layout issues. This method should be called after the `build()` lifecycle.

## Type

```ts
function openInspector(): Inspector
```

## Parameters

None

## Return Value

| Type        | Description               |
| ----------- | ------------------------- |
| `Inspector` | Inspector object instance |

## Inspector Object Methods

### draw(options)

Draws boundary rectangles for all widgets participating in layout.

#### Parameters

| Parameter | Type                | Required | Default | Description  |
| --------- | ------------------- | -------- | ------- | ------------ |
| options   | `object` | No       | -       | Draw options |

#### options Object Properties

| Property    | Type                | Required | Default | Description                                                       |
| ----------- | ------------------- | -------- | ------- | ----------------------------------------------------------------- |
| line_color  | `number` | No       | -       | Border line color, hexadecimal value, e.g., `0xff0000` for red    |
| line_width  | `number` | No       | -       | Border line width                                                 |
| border_mode | `number` | No       | `0`     | Border draw mode, `0` for outward drawing, `1` for inward drawing |

### clear()

Clears all drawn boundary rectangles.

## Code Example

```js

Page({
  build() {
    // Create layout...

    // Draw boundary rectangles for all widgets participating in layout
    setTimeout(() => {
      openInspector().draw({
        line_color: 0xff0000, // Red
        line_width: 1, // Line width of 1
        border_mode: 1 // Draw border inward
      })
    }, 100)
  }
})
```

---

## keyboard API

### Import

```js
import { keyboard } from '@zos/ui'
```

> Start from API_LEVEL `4.2`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

The keyboard API provides rich input interface capabilities, greatly simplifying the development complexity of custom keyboards.

## Overview

The Keyboard API includes the following main functional modules:

- Input: input field management, cursor and text operations
- Keyboard switching
- Input buffer management
- System integration

## Import

```js

```

## API List

### 1. Input Field Area

#### setContentRect(rect)

Set the size and position of the input field.

##### Type

```ts
(rect: object) => void
```

##### Parameters

| Parameter | Description                        | Required | Type     |
| --------- | ---------------------------------- | -------- | -------- |
| rect      | Object containing x, y, w, h properties | YES      | `object` |

##### Code Example

```js
keyboard.setContentRect({
  x: 10,
  y: 20,
  w: 300,
  h: 310
})
```

#### getContentRect()

Get the size and position of the input area.

##### Type

```ts
() => {x: number, y: number, w: number, h: number}
```

##### Code Example

```js
let rect = keyboard.getContentRect()
console.log(rect.x, rect.y, rect.w, rect.h)
```

### 2. Input Field Text Operations

#### getTextContext()

Get the text content of the current input field.

##### Type

```ts
() => string
```

##### Code Example

```js
const text = keyboard.getTextContext()
```

#### inputText(text)

Insert text at the current cursor position.

##### Type

```ts
(text: string) => void
```

##### Parameters

| Parameter | Description      | Required | Type     |
| --------- | ---------------- | -------- | -------- |
| text      | Text to be inserted | YES      | `string` |

##### Code Example

```js
keyboard.inputText('yesterday')
```

#### backspace(count)

Delete a specified number of characters.

##### Type

```ts
(count?: number) => void
```

##### Parameters

| Parameter | Description                | Required | Type     | Default |
| --------- | -------------------------- | -------- | -------- | ------- |
| count     | Number of characters to delete | NO       | `number` | 1       |

##### Code Example

```js
keyboard.backspace() // Delete 1 character
keyboard.backspace(4) // Delete 4 characters
```

#### clearInput()

Clear the input field content.

##### Type

```ts
() => void
```

##### Code Example

```js
keyboard.clearInput()
```

### 3. Special Key Operations

#### sendFnKey(keyType)

Send special function key events.

##### Type

```ts
(keyType: number) => void
```

##### Parameters

| Parameter | Description      | Required | Type     |
| --------- | ---------------- | -------- | -------- |
| keyType   | Key type constant | YES      | `number` |

##### Key Type Constants

| Constant             | Description           |
| -------------------- | --------------------- |
| `keyboard.BACKSPACE` | Backspace delete      |
| `keyboard.ENTER`     | Confirm/submit input  |
| `keyboard.SWITCH`    | Switch keyboard input method |
| `keyboard.SELECT`    | Enter keyboard selection |

##### Code Example

```js
keyboard.sendFnKey(keyboard.BACKSPACE)
keyboard.sendFnKey(keyboard.ENTER)
```

### 4. Cache Management

#### inputBuffer(text, color, underlineColor)

Set input buffer content.

##### Type

```ts
(text: string, color?: number, underlineColor?: number) => void
```

##### Parameters

| Parameter      | Description      | Required | Type     | Default    |
| -------------- | ---------------- | -------- | -------- | ---------- |
| text           | Buffer text      | YES      | `string` | -          |
| color          | Text color       | NO       | `number` | `0xffffff` |
| underlineColor | Underline color  | NO       | `number` | `0xffffff` |

##### Code Example

```js
keyboard.inputBuffer('国')
keyboard.inputBuffer('me', 0xff00ff, 0x00ff00)
```

#### getBuffer()

Read buffer text.

##### Type

```ts
() => string
```

##### Code Example

```js
let text = keyboard.getBuffer()
```

#### clearBuffer()

Clear buffer text.

##### Type

```ts
() => void
```

##### Code Example

```js
keyboard.clearBuffer()
```

### 5. Keyboard Switching

#### switchInputType(inputType)

Switch to a specified type of keyboard.

##### Type

```ts
(inputType: number) => void
```

##### Parameters

| Parameter | Description        | Required | Type     |
| --------- | ------------------ | -------- | -------- |
| inputType | Input type constant | YES      | `number` |

##### Input Type Constants

| Constant          | Description      |
| ----------------- | ---------------- |
| `inputType.EMOJI` | Emoji keyboard   |
| `inputType.NUM`   | Number keyboard  |
| `inputType.CHAR`  | Character keyboard |
| `inputType.VOICE` | Voice input      |
| `inputType.JSKB`  | Custom keyboard  |

##### Code Example

```js
keyboard.switchInputType(inputType.NUM)
```

### 6. System Integration

#### checkVoiceInputAvailable()

Check if voice input is supported.

##### Type

```ts
() => boolean
```

##### Code Example

```js
let voiceSupport = keyboard.checkVoiceInputAvailable()
```

#### isEnabled()

Check if the current keyboard is enabled in settings.

##### Type

```ts
() => boolean
```

##### Code Example

```js
let enable = keyboard.isEnabled()
```

#### isSelected()

Check if the current keyboard is selected for use.

##### Type

```ts
() => boolean
```

##### Code Example

```js
let select = keyboard.isSelected()
```

#### gotoSettings()

Navigate to the keyboard settings page in system settings: System Settings -> Preferences -> Keyboard.

##### Type

```ts
() => void
```

##### Code Example

```js
keyboard.gotoSettings()
```

## Code Example

```js

// Keyboard Widget usage example
DataWidget({
  build() {
    // Set input area
    keyboard.setContentRect({
      x: 10,
      y: 20,
      w: 300,
      h: 310
    })

    // Check keyboard status
    if (keyboard.isEnabled()) {
      console.log('Keyboard is enabled')
    }

    // Handle text input
    keyboard.inputText('Hello')

    // Switch to number keyboard
    keyboard.switchInputType(inputType.NUM)
  }
})
```

## Related References

- [Custom Keyboard](https://docs.zepp.com/docs/guides/keyboard/intro)
- [SYSTEM_KEYBOARD](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/SYSTEM_KEYBOARD)

---

