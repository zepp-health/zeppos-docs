# @zos/ui-widget-form

Form widget APIs.

## RADIO_GROUP

### Import

```js
import { RADIO_GROUP } from '@zos/ui'
```

> Start from API_LEVEL `2.0`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: radio_group_sample]

Used to select a single option among multiple options. Each individual option is a `STATE_BUTTON` widget that needs to be created separately.

## Create UI Widget

```js

const radioGroup = createWidget(widget.RADIO_GROUP, radioGroupParam)
const stateButton = createWidget(widget.STATE_BUTTON, stateButtonParam)
```

## Types

### radioGroupParam: object

| Properties   | Description                               | Required | Type        | API_LEVEL |
| ------------ | ----------------------------------------- | -------- | ----------- | --------- |
| x            | The x-coordinate of the widget            | YES      | `number`    | 2.0       |
| y            | The y-coordinate of the widget            | YES      | `number`    | 2.0       |
| w            | Width of the widget                       | YES      | `number`    | 2.0       |
| h            | Height of the widget                      | YES      | `number`    | 2.0       |
| select_src   | Image displayed when widget is selected   | YES      | `string`    | 2.0       |
| unselect_src | Image displayed when widget is unselected | YES      | `string`    | 2.0       |
| check_func   | Callback when button state changes        | NO       | `CheckFunc` | 2.0       |
| use_color    | Whether to display widget using colors    | NO       | `boolean`   | 4.0       |

### CheckFunc: function

```js
(radioGroup: RadioGroup, index: number, checked: boolean) => void
```

| Parameters | Description                 | Type         |
| ---------- | --------------------------- | ------------ |
| radioGroup | The radioGroup instance     | `RadioGroup` |
| index      | Index of the option        | `number`     |
| checked    | Whether selected           | `boolean`    |

### StateButton: object

| Properties     | Description                                                  | Required | Type     | API_LEVEL |
| -------------- | ------------------------------------------------------------ | -------- | -------- | --------- |
| x              | The x-coordinate relative to radioGroup                      | YES      | `number` | 2.0       |
| y              | The y-coordinate relative to radioGroup                      | YES      | `number` | 2.0       |
| w              | Width of the widget                                          | YES      | `number` | 2.0       |
| h              | Height of the widget                                         | YES      | `number` | 2.0       |
| select_color   | Color when selected                                          | NO       | `number` | 4.0       |
| unselect_color | Color when unselected                                        | NO       | `number` | 4.0       |
| fill_width     | Button color display area width                              | NO       | `number` | 4.0       |
| fill_height    | Button color display area height                             | NO       | `number` | 4.0       |

> **⚠️ Caution**
>
> The widget must be initialized once with `prop.INIT` to render the view

### Prop Properties

| Properties       | Support get/set | Type     | Notes                                                                                                                                    |
| ---------------- | -------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `prop.INIT`      | set            | `object` | Initialize the component and set the default selected item                                                                                |
| `prop.CHECKED`   | set/get        | `object` | Set the selected child widget to selected state, or get the selected state of the child widget, the value type is `boolean`               |
| `prop.UNCHECKED` | get            | `object` | Set the selected child widget to unselected state, or get the selected state of the child widget, the value type is `boolean`             |

## Property Access Support List

### RADIO_GROUP

| Property Name | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| ------------ | ----------- | ----------- | ----------------------------- | ----------------------------- |
| x            | Y           | Y           | Y                             | Y                             |
| y            | Y           | Y           | Y                             | Y                             |
| w            | Y           | Y           | Y                             | Y                             |
| h            | Y           | Y           | Y                             | Y                             |
| select_src   | N           | N           | N                             | N                             |
| unselect_src | N           | N           | N                             | N                             |
| check_func   | N           | N           | N                             | N                             |
| use_color    | N           | N           | N                             | N                             |

### STATE_BUTTON

| Property Name   | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| -------------- | ----------- | ----------- | ----------------------------- | ----------------------------- |
| x              | Y           | Y           | Y                             | Y                             |
| y              | Y           | Y           | Y                             | Y                             |
| w              | Y           | Y           | Y                             | Y                             |
| h              | Y           | Y           | Y                             | Y                             |
| select_color   | N           | N           | N                             | N                             |
| unselect_color | N           | N           | N                             | N                             |
| fill_width     | N           | N           | N                             | N                             |
| fill_height    | N           | N           | N                             | N                             |

## Code Example

> **💡 Tip**
>
> Please refer to [Design Resources](https://docs.zepp.com/docs/reference/related-resources/design-resources) for the image resources in the code example

```js

Page({
  build() {
    const radioGroup = createWidget(widget.RADIO_GROUP, {
      x: 0,
      y: 0,
      w: 480,
      h: 64,
      select_src: 'selected.png',
      unselect_src: 'unselected.png',
      check_func: (group, index, checked) => {
        console.log('index', index)
        console.log('checked', checked)
      }
    })

    const button1 = radioGroup.createWidget(widget.STATE_BUTTON, {
      x: 40,
      y: 200,
      w: 64,
      h: 64
    })
    const button2 = radioGroup.createWidget(widget.STATE_BUTTON, {
      x: 190,
      y: 200,
      w: 64,
      h: 64
    })
    const button3 = radioGroup.createWidget(widget.STATE_BUTTON, {
      x: 340,
      y: 200,
      w: 64,
      h: 64
    })

    radioGroup.setProperty(prop.INIT, button3)
  }
})
```

---

## CHECKBOX_GROUP

### Import

```js
import { CHECKBOX_GROUP } from '@zos/ui'
```

> Supported from API_LEVEL `2.0`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility) for API compatibility.

[Image: check_group_sample]

Used to select multiple options from a set of choices. Each option needs to be created using `STATE_BUTTON`.

## Create UI Widget

```js

const checkGroup = createWidget(widget.CHECKBOX_GROUP, checkboxGroupParam)
const stateButton = createWidget(widget.STATE_BUTTON, stateButtonParam)
```

## Types

### checkboxGroupParam: object

| Properties   | Description                             | Required | Type        | API_LEVEL |
| ------------ | --------------------------------------- | -------- | ----------- | --------- |
| x            | The x-coordinate of the widget          | YES      | `number`    | 2.0       |
| y            | The y-coordinate of the widget          | YES      | `number`    | 2.0       |
| w            | The width of the widget                 | YES      | `number`    | 2.0       |
| h            | The height of the widget                | YES      | `number`    | 2.0       |
| select_src   | Image displayed when selected           | YES      | `string`    | 2.0       |
| unselect_src | Image displayed when unselected         | YES      | `string`    | 2.0       |
| check_func   | Callback when button state changes      | NO       | `CheckFunc` | 2.0       |
| use_color    | Whether to display widget using colors  | NO       | `boolean`   | 4.0       |

### CheckFunc: function

```js
(checkboxGroup: CheckboxGroup, index: number, checked: boolean) => void
```

| Parameters    | Description                     | Type            |
| ------------- | ------------------------------- | --------------- |
| checkboxGroup | The `checkboxGroup` instance    | `CheckboxGroup` |
| index         | Index of the option            | `number`        |
| checked       | Whether selected               | `boolean`       |

### StateButton: object

| Properties     | Description                                          | Required | Type     | API_LEVEL |
| -------------- | ---------------------------------------------------- | -------- | -------- | --------- |
| x              | The x-coordinate relative to `radioGroup`            | YES      | `number` | 2.0       |
| y              | The y-coordinate relative to `radioGroup`            | YES      | `number` | 2.0       |
| w              | The width of the widget                              | YES      | `number` | 2.0       |
| h              | The height of the widget                             | YES      | `number` | 2.0       |
| select_color   | Color when selected                                  | NO       | `number` | 4.0       |
| unselect_color | Color when unselected                                | NO       | `number` | 4.0       |
| fill_width     | Button color display area width                      | NO       | `number` | 4.0       |
| fill_height    | Button color display area height                     | NO       | `number` | 4.0       |

### Prop Properties

| Properties         | Supports get/set | Type     | Notes                                                                   |
| ------------------ | --------------- | -------- | ----------------------------------------------------------------------- |
| `prop.INIT`        | set             | `object` | Initialize the widget and set default selected item                      |
| `prop.CHECKED`     | set/get         | `object` | Set/get selected sub-widget state, returns boolean type when getting    |
| `prop.UNCHECKED`   | set             | `object` | Set sub-widget to unselected state                                      |

> **⚠️ Caution**
>
> The widget must be initialized once with `prop.INIT` to render the view. Currently, initialization only supports single option parameter passing. To initialize multiple options, use `prop.CHECKED` to set them.

## Property Access Support List

### CHECKBOX_GROUP

| Property     | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| ------------ | ----------- | ----------- | ----------------------------- | ----------------------------- |
| x            | Y           | Y           | Y                             | Y                             |
| y            | Y           | Y           | Y                             | Y                             |
| w            | Y           | Y           | Y                             | Y                             |
| h            | Y           | Y           | Y                             | Y                             |
| select_src   | N           | N           | N                             | N                             |
| unselect_src | N           | N           | N                             | N                             |
| check_func   | N           | N           | N                             | N                             |
| use_color    | N           | N           | N                             | N                             |

### STATE_BUTTON

| Property       | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| -------------- | ----------- | ----------- | ----------------------------- | ----------------------------- |
| x              | Y           | Y           | Y                             | Y                             |
| y              | Y           | Y           | Y                             | Y                             |
| w              | Y           | Y           | Y                             | Y                             |
| h              | Y           | Y           | Y                             | Y                             |
| select_color   | N           | N           | N                             | N                             |
| unselect_color | N           | N           | N                             | N                             |
| fill_width     | N           | N           | N                             | N                             |
| fill_height    | N           | N           | N                             | N                             |

## Code Example

> **💡 Tip**
>
> Please refer to [Design Resources](https://docs.zepp.com/docs/reference/related-resources/design-resources) for the image resources in the code example

```js

Page({
  build() {
    const checkbox_group = createWidget(widget.CHECKBOX_GROUP, {
      x: 0,
      y: 0,
      w: 480,
      h: 64,
      select_src: 'selected.png',
      unselect_src: 'unselected.png',
      check_func: (group, index, checked) => {
        console.log('index', index)
        console.log('checked', checked)
      }
    })

    const button1 = checkbox_group.createWidget(widget.STATE_BUTTON, {
      x: 40,
      y: 200,
      w: 64,
      h: 64
    })
    const button2 = checkbox_group.createWidget(widget.STATE_BUTTON, {
      x: 190,
      y: 200,
      w: 64,
      h: 64
    })
    const button3 = checkbox_group.createWidget(widget.STATE_BUTTON, {
      x: 340,
      y: 200,
      w: 64,
      h: 64
    })

    checkbox_group.setProperty(prop.INIT, button2)
    checkbox_group.setProperty(prop.CHECKED, button3)
  }
})
```

---

## SLIDE_SWITCH

### Import

```js
import { SLIDE_SWITCH } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: slide_switch_sample]

Used to switch between open and closed states.

## Create UI widget

```js

const slideSwitch = createWidget(widget.SLIDE_SWITCH, Param)
```

## Type

### Param: object

| Properties          | Description                                                          | Required | Type                |
| ------------------- | -------------------------------------------------------------------- | -------- | ------------------- |
| x                   | The x-axis coordinate of the widget.                              | YES      | `number`            |
| y                   | The y-axis coordinate of the widget.                              | YES      | `number`            |
| w                   | The width of the widget.                                          | YES      | `number`            |
| h                   | The height of the widget.                                         | YES      | `number`            |
| select_bg           | The selected background.                                             | YES      | `string`            |
| un_select_bg        | Unselected background.                                               | YES      | `string`            |
| slide_src           | Switch button.                                                       | YES      | `string`            |
| slide_select_x      | Relative coordinates.The selected state of the switch button.   | YES      | `number`            |
| slide_un_select_x   | Relative coordinates.The unselected state of the switch button. | YES      | `number`            |
| slide_y             | Relative coordinates.The y-axis offset of the switch button.   | NO       | `number`            |
| checked_change_func | Callback on state change.                                            | NO       | `CheckedChangeFunc` |
| checked             | Default switch state.                                                | NO       | `boolean`           |

### CheckedChangeFunc: function

```js
(slideSwitch: SlideSwitch, checked: boolean) => void
```

| Parameters  | Description                 | Type          |
| ----------- | --------------------------- | ------------- |
| slideSwitch | The instance of slideSwitch | `SlideSwitch` |
| checked     | checked or unchecked        | `boolean`     |

### Prop Properties

| properties          | description                       | support get/set | types                                    |
| ------------------- | --------------------------------- | --------------- | ---------------------------------------- |
| `prop.CHECKED` | Set switch state.Get switch state | set/get         | `boolean` returns bool type when you get |

## Code example

> **💡 Tip**
>
> Please refer to [Design Resources](https://docs.zepp.com/docs/reference/related-resources/design-resources) for the image resources in the code example

```js

Page({
  build() {
    const slide_switch = createWidget(widget.SLIDE_SWITCH, {
      x: 200,
      y: 200,
      w: 96,
      h: 64,
      select_bg: 'switch_on.png',
      un_select_bg: 'switch_off.png',
      slide_src: 'radio_select.png',
      slide_select_x: 40,
      slide_un_select_x: 8,
      checked: true,
      checked_change_func: (slideSwitch, checked) => {
        console.log('checked', checked)
      }
    })

    console.log('slide checked', slide_switch.getProperty(prop.CHECKED))
  }
})
```

---

## PICK_DATE

### Import

```js
import { PICK_DATE } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

> **⚠️ Warning**
>
> After API_LEVEL 3.6, please use the [`TIME_PICKER`](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/TIME_PICKER) widget.

[Image: pick_date]

Time picker widget, providing user choice

## Create UI widget

```js

const pickDate = createWidget(widget.PICK_DATE, Param)
```

## Type

### Param: object

| Properties | Description                                                                                                                                | Required | Type     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------- |
| x          | x-coordinate (x \<= 0 will be centered by default)                                                                                         | YES      | `number` |
| y          | y-coordinate                                                                                                                               | YES      | `number` |
| w          | Width of the entire widget (width less than 1/2 of the device width will be determined as an exception, set to the default value of 300px) | NO       | `number` |
| padding_1  | padding between the first and second columns                                                                                               | NO       | `number` |
| padding_2  | padding between two and three columns                                                                                                      | NO       | `number` |
| font_size  | The size of the text on the widget, default 36                                                                                             | NO       | `number` |
| startYear  | Start year                                                                                                                                 | NO       | `number` |
| endYear    | End year                                                                                                                                   | NO       | `number` |
| initYear   | Initial year                                                                                                                               | NO       | `number` |
| initMonth  | Initial month                                                                                                                              | NO       | `number` |
| initDay    | Initial day                                                                                                                                | NO       | `number` |
| initHour   | Initial hour                                                                                                                               | NO       | `number` |
| initMin    | Initial minute                                                                                                                             | NO       | `number` |

### `getProperty` supported Fields

| Properties | Description | Type     |
| ---------- | ----------- | -------- |
| year       | Year        | `number` |
| month      | Month       | `number` |
| day        | Day         | `number` |
| hour       | Hour        | `number` |
| minute     | Minute      | `number` |

## Code example

```js

Page({
  build() {
    const pick_date_date = createWidget(widget.PICK_DATE)
    pick_date_date.setProperty(prop.MORE, {
      w: 480,
      x: 20,
      y: 120,
      startYear: 2000,
      endYear: 2030,
      initYear: 2021,
      initMonth: 2,
      initDay: 3
    })

    const confirm = createWidget(widget.TEXT, {
      x: 0,
      y: 400,
      w: 480,
      h: 80,
      text_size: 42,
      color: 0xffffff,
      text: 'confirm'
    })

    confirm.addEventListener(event.CLICK_UP, (info) => {
      const dateObj = pick_date_date.getProperty(prop.MORE, {})
      const { year, month, day } = dateObj

      console.log('year', year)
      console.log('month', month)
      console.log('day', day)
    })
  }
})
```

---

## KEYBOARD

### Import

```js
import { KEYBOARD } from '@zos/ui'
```

> Start from API_LEVEL `3.0`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility)。

## Create UI widget

```js

const keyboard = createWidget(widget.KEYBOARD, Param)
```

### Param: object

| Properties | Description                                                                                             | Required | Type             |
| ---------- | ------------------------------------------------------------------------------------------------------- | -------- | ---------------- |
| x          | X position, default value is `0`                                                                        | NO       | `number`         |
| y          | Y position, default value is `0`                                                                        | NO       | `number`         |
| click_func | Callback function when Key clicked                                                                      | YES      | `ClickFunc`      |
| key_attr   | Key attributes, if no key attribute is passed in, the default configuration of numeric keyboard is used | NO       | `Array<KeyAttr>` |

#### ClickFunc: function

```ts
click_func(keyboard: WIDGET, id: number, value: number): void
```

| Param    | Description           |
| -------- | --------------------- |
| keyboard | The keyboard instance |
| id       | Key id                |
| value    | Key value             |

#### KeyAttr: object

| Properties | Description                                          | Required | Type     |
| ---------- | ---------------------------------------------------- | -------- | -------- |
| id         | Key id                                               | NO       | `number` |
| x          | X position of key                                    | YES      | `number` |
| y          | Y position of key                                    | YES      | `number` |
| text       | Key text, Only single ASCII characters are supported | NO       | `string` |
| image      | Key image path, recommended image size is 64 x 64 px | NO       | `string` |
| value      | Key value                                            | NO       | `number` |

## Property Operations

Property operations are set via `widget.setProperty`

```js
keyboard.setProperty(prop, Param)
```

### `prop.ADD_KEY`

Add a new key, Params refer to `KeyAttr`

```js
keyboard.setProperty(prop.ADD_KEY, {
  id: 100,
  x: 280,
  y: 350,
  text: '!'
})
```

### `prop.DEL_KEY`

Delete a key

#### Param: object

| Properties | Description | Required | Type     |
| ---------- | ----------- | -------- | -------- |
| id         | Key id      | NO       | `number` |

```js
keyboard.setProperty(prop.DEL_KEY, {
  id: 20
})
```

### `prop.KEY_PARA`

Modify a key properties, Params refer to `KeyAttr`

```js
keyboard.setProperty(prop.KEY_PARA, {
  id: 1,
  x: 50,
  y: 30,
  image: 'images/common/widgetsbc/phoneCall/phone call_ic_answer_64px.png',
  text: 'c',
  value: 98
})
```

### `prop.TEXT_STYLE`

Text styles

#### Param: object

| Properties | Description                                                     | Required | Type      |
| ---------- | --------------------------------------------------------------- | -------- | --------- |
| x          | X position of text                                              | YES      | `number`  |
| w          | Text width                                                      | YES      | `number`  |
| align_h    | The alignment of the horizontal axis, alignment refer to `TEXT` | NO       | `number`  |
| alpha      | Text alpha value [0-255], 0 for full transparency               | NO       | `number`  |
| color      | Text color                                                      | NO       | `number`  |
| show       | Text showon                                                     | NO       | `boolean` |

```js
keyboard.setProperty(prop.TEXT_STYLE, {
  x: 0,
  w: 480,
  align_h: align.CENTER,
  alpha: 255,
  color: 0xff0000,
  show: 1
})
```

### `prop.TEXT`

Update text, `Param` is `string`

```js
keyboard.setProperty(prop.TEXT, 'hello rose !')
```

### `prop.X` and `prop.Y`

Adjust the overall position of the keyboard, `Param` is `number`

```js
keyboard.setProperty(prop.X, 0)
keyboard.setProperty(prop.Y, 10)
```

## Code example

```js

function callback(keyboard, id, value) {
  console.log(`id:${id} char:${value}`)
  keyboard.setProperty(prop.TEXT, `id:${id} char:${value}`)

  ret = keyboard.getProperty(prop.KEY_PARA, id)
  if (ret !== undefined) {
    console.log(id)
    console.log(ret.value)
    console.log(ret.x)
    console.log(ret.y)
  }
}

const keyboard = createWidget(widget.KEYBOARD, {
  click_func: callback,
  key_attr: [
    {
      id: 0,
      x: 0,
      y: 150,
      text: 'H',
      value: 1
    },
    {
      id: 1,
      x: 90,
      y: 150,
      text: 'E',
      value: 2
    },
    {
      id: 20,
      x: 180,
      y: 150,
      text: 'L',
      value: 3
    },
    {
      id: 3,
      x: 270,
      y: 150,
      text: 'L',
      value: 4
    },
    {
      id: 4,
      x: 360,
      y: 150,
      text: 'O',
      value: 5
    },
    {
      id: 6,
      x: 45,
      y: 250,
      text: 'R',
      value: 6
    },
    {
      id: 7,
      x: 135,
      y: 250,
      text: 'O',
      value: 7
    },
    {
      id: 8,
      x: 225,
      y: 250,
      text: 'S',
      value: 8
    },
    {
      id: 9,
      x: 315,
      y: 250,
      text: 'E',
      value: 9
    },

    {
      id: 10,
      x: 180,
      y: 350,
      image: 'images/common/widgetsbc/phoneCall/phone call_ic_answer_64px.png',
      text: ' ',
      value: 10
    }
  ]
})

keyboard.setProperty(prop.TEXT_STYLE, {
  x: 0,
  w: 480,
  align_h: align.CENTER,
  alpha: 255,
  color: 0xff0000,
  show: 1
})

keyboard.setProperty(prop.TEXT, 'hello rose !')

keyboard.setProperty(prop.X, 0)
keyboard.setProperty(prop.Y, 10)

keyboard.setProperty(prop.KEY_PARA, {
  id: 1,
  text: 'c',
  value: 98
})

keyboard.setProperty(prop.DEL_KEY, {
  id: 20
})

keyboard.setProperty(prop.ADD_KEY, {
  id: 100,
  x: 280,
  y: 350,
  text: '!',
  value: 11
})

keyboard.setProperty(prop.ADD_KEY, {
  id: 99,
  x: 80,
  y: 350,
  text: '!',
  value: 11
})
```

---

## PICKER

### Import

```js
import { PICKER } from '@zos/ui'
```

> Start from API_LEVEL `3.0`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility)。

An universal selector, use to text and number list selection

## Create UI widget

```js

const picker_widget = createWidget(widget.WIDGET_PICKER, Param)
```

### Param: object

| Properties     | Description                                          | Required | Type                |
| -------------- | ---------------------------------------------------- | -------- | ------------------- |
| nb_of_columns  | Maximum Picker columns (Maximum number is 5)         | YES      | `number`            |
| data_config    | Array of column configuration, refer to `DataConfig` | YES      | `Array<DataConfig>` |
| title          | Title of Picker                                      | NO       | `string`            |
| subtitle       | Subtitle of Picker                                   | NO       | `string`            |
| done_icon      | Resource path of icon about done status              | NO       | `string`            |
| picker_cb      | Callback function of Picker                          | NO       | `CallBack`          |
| init_col_index | Initialize the index of the focused column           | NO       | `number`            |
| normal_color   | Color value of unselected item                       | NO       | `number`            |
| select_color   | Color value of selected item                         | NO       | `number`            |

#### DataConfig: object

| Properties          | Description                                     | Required | Type                                   |
| ------------------- | ----------------------------------------------- | -------- | -------------------------------------- |
| data_array          | Data array of column                            | YES      | `Array\<number&#124;string\>` |
| support_loop        | support circular drag and drop                  | YES      | `boolean`                              |
| unit                | Unit                                            | NO       | `string`                               |
| connector           | Data separator                                  | NO       | `string`                               |
| font_name           | Path of font file, refer to `TEXT`              | NO       | `string`                               |
| font_size           | Font size                                       | NO       | `number`                               |
| select_font_size    | Font size of selected item                      | NO       | `number`                               |
| connector_font_size | Font size of separator                          | NO       | `number`                               |
| unit_font_size      | Font size of unit                               | NO       | `number`                               |
| init_val_index      | Default selected index                          | NO       | `number`                               |
| col_width           | Column width, all columns need to be configured | NO       | `number`                               |

#### CallBack: function

Callback function of Picker

```ts
picker_cb(picker: WIDGET, event_type: number, column_index: number, select_index: index): void
```

| Properties   | Description                               |
| ------------ | ----------------------------------------- |
| picker       | The Picker instance                       |
| event_type   | Event type of Picker, see `EVENT_TYPE`    |
| column_index | Column index for triggering Picker events |
| select_index | The index of selected item                |

| EVENT_TYPE value | Description               |
| ---------------- | ------------------------- |
| `0`              | Lose focus                |
| `1`              | Get focus                 |
| `2`              | Selected item has a value |

```js
function picker_cb(picker, event_type, column_index, select_index) {
  if (event_type == 2) {
    picker.setProperty(prop.TITLE, 'End Date')
    picker.setProperty(prop.SUBTITLE, '3 days in totals')

    picker.setProperty(prop.UPDATE_DATA, {
      col_index: 0,
      val_index: 5,
      data_array: new Array(10).fill(0).map((d, index) => index + 1)
    })

    picker.setProperty(prop.CUR_COLUMN, 1)
  }
}
```

## Property Operations

The `SET` and `GET` means `widget.setProperty` and `widget.getProperty`

| Property Name      | SET/GET   | Description               |
| ------------------ | --------- | ------------------------- |
| `prop.TITLE`       | `SET`     | Update `title`            |
| `prop.SUBTITLE`    | `SET`     | Update `subtitle`         |
| `prop.UPDATE_DATA` | `SET`     | Update data of a column   |
| `prop.CUR_COLUMN`  | `SET/GET` | Update the current column |

## Code example

```js

const time = new Time()

const picker_widget = createWidget(widget.WIDGET_PICKER, {
  title: 'Start Date',
  subtitle: '',
  nb_of_columns: 3,
  single_wide: true,
  init_col_index: 1,
  data_config: [
    {
      data_array: new Array(12).fill(0).map((d, index) => index + 1),
      init_val_index: time.getMonth() - 1,
      unit: 'Month',
      support_loop: true,
      font_name: 'fonts/x.ttf',
      font_size: 24,
      select_font_size: 48,
      connector_font_size: 18,
      unit_font_size: 18,
      col_width: 80
    },
    {
      data_array: new Array(31).fill(0).map((d, index) => index + 1),
      init_val_index: time.getDate() - 1,
      unit: 'Day',
      support_loop: true,
      font_name: 'fonts/x.ttf',
      font_size: 24,
      select_font_size: 48,
      connector_font_size: 36,
      unit_font_size: 36,
      col_width: 80
    },
    {
      data_array: new Array(100).fill(0).map((d, index) => index + 1970),
      init_val_index: time.getFullYear() - 1970,
      unit: 'Year',
      support_loop: true,
      font_name: 'fonts/x.ttf',
      font_size: 24,
      select_font_size: 48,
      connector_font_size: 36,
      unit_font_size: 36,
      col_width: 80
    }
  ],
  picker_cb
})

function picker_cb(picker, event_type, column_index, select_index) {
  console.log(
    'timePickerCb: ' + event_type,
    'column_index: ' + column_index,
    'select_index: ' + select_index
  )
}
```

---

## TIME_PICKER

### Import

```js
import { TIME_PICKER } from '@zos/ui'
```

> Start from API_LEVEL `3.6`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility)。

[Image: time_picker]

A full-screen widget that supports time and date selection.

## Create UI widget

```js

const time_picker = createWidget(widget.WIDGET_TIME_PICKER, Param)
```

### Param: object

| Properties         | Description                         | Required | Type       |
| ------------------ | ----------------------------------- | -------- | ---------- |
| `type`             | Selector type, `0` time, `1` date   | YES      | `number`   |
| `style`            | Value must be `1`                   | YES      | `number`   |
| `title`            | Title of selector                   | NO       | `string`   |
| `done_icon`        | Image path of done icon             | NO       | `string`   |
| `font_size`        | Font size setting                   | YES      | `number`   |
| `select_font_size` | Font size setting for selected item | YES      | `number`   |
| `initHour`         | Initial hour, default is 12         | NO       | `number`   |
| `initMin`          | Initial minute, default is 0        | NO       | `number`   |
| `startYear`        | Start year, default is 1970         | NO       | `number`   |
| `endYear`          | End year, default is 2100           | NO       | `number`   |
| `initYear`         | Initial year, default is 2020       | NO       | `number`   |
| `initMonth`        | Initial month, default is 1         | NO       | `number`   |
| `initDay`          | Initial day, default is 1           | NO       | `number`   |
| `picker_cb`        | Callback function of picker         | NO       | `CallBack` |

#### CallBack: function

Time/Date picker callback function

```ts
picker_cb(picker: WIDGET, event_type: number, column: number, value_index: number): void
```

| Properties    | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| `picker`      | The time/date picker widget instance                               |
| `event_type`  | Event type of picker, see `EVENT_TYPE`                             |
| `column`      | Index of current focus column (only valid under UPDATE event type) |
| `value_index` | Current value of the column (only valid under UPDATE event type)   |

| EVENT_TYPE Value | Description        |
| ---------------- | ------------------ |
| `0`              | Cancel selection   |
| `1`              | Update selection   |
| `2`              | Complete selection |

## Property Operations

The `SET` and `GET` means `widget.setProperty` and `widget.getProperty`

| Property Name           | SET/GET | Description |
| ----------------------- | ------- | ----------- |
| `prop.type`             | -       | -           |
| `prop.style`            | -       | -           |
| `prop.title`            | -       | -           |
| `prop.done_icon`        | -       | -           |
| `prop.font_size`        | -       | -           |
| `prop.select_font_size` | -       | -           |
| `prop.initHour`         | -       | -           |
| `prop.initMin`          | -       | -           |
| `prop.startYear`        | -       | -           |
| `prop.endYear`          | -       | -           |
| `prop.initYear`         | -       | -           |
| `prop.initMonth`        | -       | -           |
| `prop.initDay`          | -       | -           |
| `prop.picker_cb`        | -       | -           |
| `prop.YEAR`             | `GET`   | Get year    |
| `prop.MONTH`            | `GET`   | Get month   |
| `prop.DAY`              | `GET`   | Get day     |
| `prop.HOUR`             | `GET`   | Get hour    |
| `prop.MINUTE`           | `GET`   | Get minute  |

## Code example

```js

const time_picker = createWidget(widget.WIDGET_TIME_PICKER, {
  type: 0, // 0: select time  1: select date
  style: 1,
  title: 'Time Picker',
  initHour: 16,
  initMin: 55,
  font_size: 45,
  select_font_size: 48,
  picker_cb: callbackFunc
})

function callbackFunc(picker, event_type, column, value_index) {
  console.log('timePickerCb: ' + event_type, 'column: ' + column, 'value_index: ' + value_index)
}
```

---

## SYSTEM_KEYBOARD

### Import

```js
import { SYSTEM_KEYBOARD } from '@zos/ui'
```

> Start from API_LEVEL `4.0`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

<img src={useBaseUrl('/img/api/smart_keyboard.jpg')} width="50%" title="smart_keyboard" />

Create a system-level input keyboard that supports multiple input modes.

## Create Keyboard Widget

```js

const keyboard = createKeyboard({
  // Required parameters
  inputType: inputType.NUM,
  onComplete: (keyboardWidget, result) => {
    /* Handle input completion */
  },
  onCancel: (keyboardWidget, result) => {
    /* Handle input cancellation */
  },

  // Optional parameters
  text: 'Initial text'
})
```

## Type Definitions

### Param: object

| Property   | Description                                            | Required | Type       | Version |
| ---------- | ------------------------------------------------------ | -------- | ---------- | ------- |
| inputType  | Input type, refer to `inputType` enum                  | YES      | `number`   | 4.0     |
| onComplete | Callback when user confirms input                      | YES      | `function` | 4.0     |
| onCancel   | Callback when user swipes right or presses back button | YES      | `function` | 4.0     |
| text       | Initial text for editing                               | NO       | `string`   | 4.0     |
| onClick    | Click event callback (Not available yet)               | NO       | `function` | 4.0     |
| selection  | Quick reply options (Not available yet)                | NO       | `array`    | 4.0     |

### `inputType` Enum

| Value           | Description        | API_LEVEL |
| --------------- | ------------------ | --------- |
| inputType.EMOJI | Emoji keyboard     | 4.0       |
| inputType.NUM   | Number keyboard    | 4.0       |
| inputType.CHAR  | Character keyboard | 4.0       |
| inputType.VOICE | Voice input        | 4.0       |
| inputType.JSKB  | Custom Keyboard Widget  | 4.2       |

## Methods

### deleteKeyboard()

Exit and destroy the current keyboard input interface

```js

deleteKeyboard()
```

## Code Example

```js

Page({
  onInit() {
    this.createKeyboard()
  },

  createKeyboard() {
    createKeyboard({
      inputType: inputType.NUM,
      onComplete: (_, result) => {
        console.log('Input content:', result.data)
        this.destroyKeyboard()
      },
      onCancel: (_, result) => {
        console.log('Input cancelled')
        this.destroyKeyboard()
      },
      text: '100' // Initial text
    })
  },

  destroyKeyboard() {
    deleteKeyboard()
    // Execute subsequent operations like page navigation...
  }
})
```

---

