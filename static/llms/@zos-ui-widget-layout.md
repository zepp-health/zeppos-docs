# @zos/ui-widget-layout

Layout widget APIs.

## GROUP

### Import

```js
import { GROUP } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

GROUP group widget is used to group a series of widgets together for unified widget of show/hide, registering events, etc.

The returned `group` instance has the method `createWidget`, which is used to Create UI widget belonging to the `group` group, and the sub-widgets need to use relative positions for layout.

> **⚠️ Caution**
>
> 1. The `group` instance of `createWidget` cannot create child `GROUP` components, i.e. `GROUP` components cannot be nested.
> 2. GROUP cannot be used in [SecondaryWidget](https://docs.zepp.com/docs/reference/device-app-api/newAPI/global/SecondaryWidget) and [Shorcut cards](https://docs.zepp.com/docs/reference/device-app-api/newAPI/global/AppWidget)

## Create UI widget

```js

const group = createWidget(widget.GROUP, Param)

// Creating UI sub-widgets
group.createWidget(xxx, xxx)
```

## Type

### Param: object

| Properties |            Description           | Required | Type |
| --------- | --------------------------------- | -------- | -------- |
|     x     | The x-coordinate of widget.    | YES | `number` |
|     y     | The y-coordinate of widget.    | YES | `number` |
|     w     | The width of widget.           | YES | `number` |
|     h     | The height of the widget.      | YES | `number` |

---

## SCROLL_LIST

### Import

```js
import { SCROLL_LIST } from '@zos/ui'
```

> Start from API_LEVEL `2.0`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: scroll_list_sample]

Create a list area with sliding support, where each list item can contain images and text, and supports horizontal sliding.

## Create UI widget

```js

const scrollList = createWidget(widget.SCROLL_LIST, Param)
```

## Type

### Param: object

| Properties               | Description                                                                                                                                               | Required | Type                    | API_LEVEL |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------- | --------- |
| x                        | The x-coordinate of the widget                                                                                                                           | YES      | `number`                | 2.0       |
| y                        | The y-coordinate of the widget                                                                                                                           | YES      | `number`                | 2.0       |
| w                        | Width of the widget                                                                                                                                      | YES      | `number`                | 2.0       |
| h                        | Height of the widget                                                                                                                                     | YES      | `number`                | 2.0       |
| item_space               | Space between items                                                                                                                                      | NO       | `number`                | 2.0       |
| item_config              | Item type configuration, see [`ItemConfig`](#itemconfig-object)                                                                                           | YES      | `Array<ItemConfig>`     | 2.0       |
| item_config_count        | Length of the item_config array                                                                                                                           | YES      | `number`                | 2.0       |
| data_array               | Data array                                                                                                                                                | YES      | `DataArray`             | 2.0       |
| data_count               | Length of the data array                                                                                                                                  | YES      | `number`                | 2.0       |
| item_click_func          | Item click callback function, where the item index corresponds to the data_array, see [`ItemClickFunc`](#itemclickfunc)                                                                                       | NO       | `ItemClickFunc`         | 2.0       |
| data_type_config         | Item index type configuration array, see [DataTypeConfig](#datatypeconfig-object)                                                                          | NO       | `Array<DataTypeConfig>` | 2.0       |
| data_type_config_count   | Length of the item index type configuration array                                                                                                          | NO       | `number`                | 2.0       |
| on_page                  | Used when updating data, set to `1` to keep the list at current position after update, otherwise returns to list top                                       | NO       | `number`                | 2.0       |
| snap_to_center           | Whether the list should snap to the center height of SCROLL_LIST                                                                                           | NO       | `boolean`               | 2.0       |
| item_focus_change_func   | List sliding focus change callback function, see [ItemFocusChangeFunc](#itemfocuschangefunc)                                                               | NO       | `ItemFocusChangeFunc`   | 2.0       |
| item_enable_horizon_drag | Whether items can be dragged horizontally                                                                                                                 | NO       | `boolean`               | 2.0       |
| item_drag_max_distance   | Maximum horizontal drag distance, positive values for left drag, negative for right drag                                                                    | NO       | `number`                | 2.0       |
| snap_type               | Set snap mode (see snap_type snap mode)                                                                | NO       | `number`                | 4.0       |
| item_common_focus       | Whether to show common focus (effective in key mode)                                                   | NO       | `boolean`               | 4.0       |
| item_key_focus_change_func | Key event listener callback in key mode                                                            | NO       | `function`              | 4.0       |
| enable_scroll_bar       | Create page indicator (arcScrollBar)                                                                   | NO       | `boolean`               | 4.0       |
| view_index              | Set list item to visible area (Note: Round screen: center screen, Square screen: top of screen)        | NO       | `number`                | 4.0       |

### ItemConfig: object

| Properties       | Description                                                                                              | Required | Type               |
| ---------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------------ |
| type_id          | Current item type ID, optional when item_config_count is `0`, required otherwise                          | NO       | `number`           |
| item_height      | Item height                                                                                               | YES      | `number`           |
| item_bg_color    | Item background color                                                                                     | YES      | `number`           |
| item_bg_radius   | Item background corner radius                                                                             | YES      | `number`           |
| text_view        | Array of textView structures, each item is a `textView`, see explanation below                            | NO       | `Array<TextView>`  |
| text_view_count  | Length of text_view array                                                                                 | NO       | `number`           |
| image_view       | Array of imageView, each item is an `imageView`, see explanation below                                    | NO       | `Array<ImageView>` |
| image_view_count | Length of image_view array                                                                                | NO       | `number`           |

### TextView: object

| Properties | Description                                                                                                                | Required | Type      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| x          | The x-coordinate, relative coordinate                                                                                        | YES      | `number`  |
| y          | The y-coordinate, relative coordinate                                                                                        | YES      | `number`  |
| w          | Widget width                                                                                                                 | YES      | `number`  |
| h          | Widget height                                                                                                                | YES      | `number`  |
| color      | Text color                                                                                                                   | NO       | `number`  |
| text_size  | Font size                                                                                                                    | NO       | `number`  |
| key        | Data binding key, see examples and data_array description for details                                                        | YES      | `string`  |
| action     | Whether to respond to click events, after response, the corresponding data `key` can be captured in `item_click_func`, default `false` | NO       | `boolean` |

```js
const text_view = [
  { x: 100, y: 0, w: 100, h: 20, key: 'name', color: 0xffffff, action: true },
  { x: 0, y: 30, w: 100, h: 100, key: 'age', color: 0xffffff, text_size: 20 }
]
```

### ImageView: object

| Properties | Description                                                                                                                                | Required | Type      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------- |
| x          | The x-coordinate, relative coordinate                                                                                                        | YES      | `number`  |
| y          | The y-coordinate, relative coordinate                                                                                                        | YES      | `number`  |
| w          | Widget width                                                                                                                                 | YES      | `number`  |
| h          | Widget height                                                                                                                                | YES      | `number`  |
| key        | Data binding key, see examples and data_array description for details                                                                        | YES      | `string`  |
| action     | Whether to respond to click events, after response, the corresponding data `key` can be captured in `item_click_func`, default `false`       | NO       | `boolean` |

```js
// Each structure in the array is an imageView
const image_view = [{ x: 0, y: 0, w: 20, h: 20, key: 'img_src', action: true }]

### data_array

Data arrays, TextView and ImageView take values from each data_array object based on property names (configured via `key`) and render them to the view based on the corresponding configuration.

```js
const dataList = [
  { img_src: rootPath + 'step/step_num_1.png', name: 'name1', age: '12' },
  { img_src: rootPath + 'step/step_num_1.png', name: 'name1', age: '13' },
  { img_src: rootPath + 'step/step_num_1.png', name: 'name1', age: '13' }
]
```

### DataTypeConfig: object

Set the type of list index item.

Each index item uses the configuration of `item_config[0]` by default.

| Properties | Description | Required | Type |
| ------- | -------------------------------------- | -------- | -------- |
| start | Starting index | YES | `number` |
| end | Ending index | YES | `number` |
| type_id | The `type_id` corresponding to the type configuration in item_config | YES | `number` |

`start` and `end` form a closed interval `[start, end]`

```js
{
data_type_config:[
  // Represents that data entries from index 0 to 2 use the style configuration with type_id 2
  {
  start: 0,
  end: 2,
  type_id: 2,
  },
  {
  start: 3,
  end: 10,
  type_id: 1,
  },
],
data_type_config_count:2
}
```

### ItemClickFunc

```ts
(list: ScrollList, index: number, data_key: string) => void
```

| Parameters | Description | Type |
| -------- | ---------------------------------------------------- | -------- |
| list | SCROLL_LIST widget | `any` |
| index | Clicked item index | `number` |
| data_key | Clicked data `key` name, can locate the clicked area through `key` | `string` |

### ItemFocusChangeFunc

```ts
(list: ScrollList, index: number, focus: boolean) => void
```

| Parameters | Description | Type |
| ----- | ----------------- | --------- |
| list | SCROLL_LIST widget | `any` |
| index | Item index | `number` |
| focus | Whether the item is in focus state | `boolean` |

### snap_type Snap Mode

| Snap Mode Enum Value | Description |
| --- | --- |
| SCROLL_LIST.snap_type.SNAPCENTER_ALL | Center snap |
| SCROLL_LIST.snap_type.SNAPCENTER_EXCEPTTITLE | Center snap except for title |
| SCROLL_LIST.snap_type.SNAP_TOP | Top snap |
| SCROLL_LIST.snap_type.SNAP_BOTTOM | Bottom snap |

```js

console.log(SCROLL_LIST.snap_type.SNAPCENTER_ALL)
```

## Refresh Data

```js

const scrollList = createWidget(widget.SCROLL_LIST, Param)
scrollList.setProperty(prop.UPDATE_DATA, {
  // Reset configuration information
  data_type_config: [
    {
      start: 0,
      end: 2,
      type_id: 2
    }
  ],
  // Configuration information length
  data_type_config_count: 1,
  // New data
  data_array: [
    { img_src: rootPath + 'test/normalbtn_h.png', name: 'Name', age: '12', like: 'type2' },
    { img_src: rootPath + 'test/normalbtn_h.png', name: 'namex1', age: '13', like: 'type2' },
    { img_src: rootPath + 'test/normalbtn_h.png', name: 'namex2', age: '13', like: 'type2' },
    { img_src: rootPath + 'test/normalbtn_h.png', name: 'namex3', age: '12', like: 'type2' },
    { img_src: rootPath + 'test/normalbtn_h.png', name: 'name666', age: '13', like: 'type2' }
  ],
  // Data length
  data_count: 5,
  // Stay on current page after data refresh, if not set or set to 0, it will return to the top of the list
  on_page: 1
})
```

## Update/Delete Single Item

```js
// Update a specific data
scrollList.setProperty(prop.UPDATE_ITEM, {
  index: gScrollListSelectIndex,
  item_data: dataList2[gScrollListSelectIndex]
})
// Delete a specific data
list.setProperty(prop.DELETE_ITEM, { index: delete_index })
```

## Control Horizontal Sliding Parameters of Single Item

```js
scrollList.setProperty(prop.MOVE_ITEM, {
  start: 0, // Start row
  end: 0, // End row
  item_enable_horizon_drag: false, // Whether horizontal sliding is enabled
  item_drag_max_distance: -200 // Horizontal sliding distance, only takes effect when enabled
})
```

## Property Access Support List

| 属性名                     | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| -------------------------- | ----------- | ----------- | ----------------------------- | ----------------------------- |
| x                          | N           | Y           | N                             | Y                             |
| y                          | N           | Y           | N                             | Y                             |
| w                          | N           | Y           | N                             | Y                             |
| h                          | N           | Y           | N                             | Y                             |
| item_space                 | N           | N           | N                             | N                             |
| item_config                | N           | N           | N                             | N                             |
| item_config_count          | N           | N           | N                             | N                             |
| data_array                 | N           | N           | N                             | N                             |
| data_count                 | N           | N           | N                             | N                             |
| item_click_func            | N           | N           | N                             | N                             |
| data_type_config           | N           | N           | N                             | N                             |
| data_type_config_count     | N           | N           | N                             | N                             |
| on_page                    | N           | N           | N                             | N                             |
| snap_to_center             | N           | N           | N                             | N                             |
| item_focus_change_func     | N           | N           | N                             | N                             |
| item_enable_horizon_drag   | N           | N           | N                             | N                             |
| item_drag_max_distance     | N           | N           | N                             | N                             |
| snap_type                  | N           | N           | N                             | N                             |
| item_common_focus          | N           | N           | N                             | N                             |
| item_key_focus_change_func | N           | N           | N                             | N                             |
| enable_scroll_bar          | N           | N           | N                             | N                             |
| view_index                 | N           | N           | N                             | N                             |

## 代码示例

```js

Page({
  build() {
    const dataList = [
      { name: 'Amazfit T-Rex 2', size: 454, del_img: 'btn/delete.png' },
      { name: 'Amazfit GTR 3 Pro', size: 480, del_img: 'btn/delete.png' },
      { name: 'Amazfit GTR 3', size: 454, del_img: 'btn/delete.png' }
    ]

    const scrollList = createWidget(widget.SCROLL_LIST, {
      x: 0,
      y: 120,
      h: 300,
      w: 480,
      item_space: 20,
      snap_to_center: true,
      item_enable_horizon_drag: true,
      item_drag_max_distance: -120,
      item_config: [
        {
          type_id: 1,
          item_bg_color: 0xef5350,
          item_bg_radius: 10,
          text_view: [
            { x: 0, y: 0, w: 480, h: 80, key: 'name', color: 0xffffff, text_size: 20 },
            { x: 0, y: 80, w: 480, h: 40, key: 'size', color: 0xffffff }
          ],
          text_view_count: 2,
          image_view: [{ x: 492, y: 28, w: 64, h: 64, key: 'del_img', action: true }],
          image_view_count: 1,
          item_height: 120
        },
        {
          type_id: 2,
          item_bg_color: 0xef5350,
          item_bg_radius: 10,
          text_view: [
            { x: 0, y: 0, w: 480, h: 80, key: 'name', color: 0x000000, text_size: 20 },
            { x: 0, y: 80, w: 480, h: 40, key: 'size', color: 0x000000 }
          ],
          text_view_count: 2,
          image_view: [{ x: 492, y: 28, w: 64, h: 64, key: 'del_img', action: true }],
          image_view_count: 1,
          item_height: 120
        }
      ],
      item_config_count: 2,
      data_array: dataList,
      data_count: dataList.length,
      item_focus_change_func: (list, index, focus) => {
        console.log('scrollListFocusChange index=' + index)
        console.log('scrollListFocusChange focus=' + focus)
      },
      item_click_func: (item, index, data_key) => {
        console.log(`scrollListItemClick index=${index}`)
        if (data_key === 'del_img') {
          scrollList.setProperty(prop.DELETE_ITEM, { index })
          dataList.splice(index, 1)
        } else {
          updateConfig()
        }
      },
      data_type_config: [
        {
          start: 0,
          end: 1,
          type_id: 1
        },
        {
          start: 1,
          end: 2,
          type_id: 2
        }
      ],
      data_type_config_count: 2,
      snap_to_center: true,
      item_enable_horizon_drag: true,
      item_drag_max_distance: -112
    })

    function updateConfig() {
      scrollList.setProperty(prop.UPDATE_DATA, {
        data_type_config: [
          {
            start: 0,
            end: dataList.length - 1,
            type_id: 1
          }
        ],
        data_type_config_count: 1,
        data_array: dataList,
        data_count: dataList.length,
        on_page: 1
      })
    }
  }
})
```

---

## VIEW_CONTAINER

### Import

```js
import { VIEW_CONTAINER } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

<div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
  <img src={useBaseUrl('/img/api/view_container_sample.gif')} width="50%" title="vc_showcase" />
  <img src={useBaseUrl('/img/api/swiper_vc.gif')} width="50%" title="vc_showcase2" />
</div>

The `VIEW_CONTAINER` widget container is a very powerful layout widget with the following features.

- It is a rectangular layout container that can create child widgets by its instance method
- The `z_index` property controls the cascading order of the widget container, allowing for vertical cascading of widgets. And you can create multiple VIEW_CONTAINER widgets in the same page. In Zepp OS v3, you can create up to 7
- The VIEW_CONTAINER widget container itself supports scrolling and can be used as a scrolling container
- Used with [`setScrollMode`](https://docs.zepp.com/docs/reference/device-app-api/newAPI/page/setScrollMode) Swiper mode to achieve the complex layout in the second GIF (full-screen scrolling, where each screen can also be viewed as a scrollable independent container)

## Create UI widget

```js

const viewContainer = createWidget(widget.VIEW_CONTAINER, Param)

// Creating UI sub-widgets
viewContainer.createWidget(xxx, xxx)
```

## Type

## Param: object

| Properties | Description | Required | Type | API_LEVEL |
| --- | --- | --- | --- | --- |
| x | Widget x-coordinate, default `0` | NO | `number` | 2.0 |
| y | Widget y-coordinate, default `0` | NO | `number` | 2.0 |
| w | Widget width, default screen width | NO | `number` | 2.0 |
| h | Widget height, default screen height | NO | `number` | 2.0 |
| scroll_enable | When the layout of widgets in VIEW_CONTAINER exceeds the width/height, it is considered a long page. `0`: disable scrolling, you can set container scroll position offset by `pos_x` or `pos_y`; `1`: allow scrolling (default) | NO | `number` | 2.0 |
| pos_x | When VIEW_CONTAINER is a long horizontal page layout, you can read/set the horizontal offset | NO | `number` | 2.0 |
| pos_y | When VIEW_CONTAINER is a long vertical page layout, you can read/set the vertical offset | NO | `number` | 2.0 |
| z_index | When using multiple VIEW_CONTAINER widgets, the cascading relationship can be controlled by this field, with `0` at the bottom by default | NO | `number` | 2.0 |
| modal | Modal layer switch. `0`: disable; `1`: enable (default). When enabled, it can be used to create a modal overlay/dialog inside a `VIEW_CONTAINER` and block the base layer from scrolling. | NO | `number` | 2.0 |
| bounce | Rebound effect, `0`: disabled, `1`: enabled (default) | NO | `number` | 3.0 |
| page | Used with [`setScrollMode`](https://docs.zepp.com/docs/reference/device-app-api/newAPI/page/setScrollMode) Swiper mode. The entire screen uses Swiper mode, and each independent page is implemented using `VIEW_CONTAINER`. Marks the page index to coordinate with Swiper mode | NO | `number` | 3.0 |

### FrameParams: object

| Properties | Description                                                                                                              | Type     | API_LEVEL |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ | -------- | --------- |
| type       | `0`: the user is still touching the screen and dragging, `1`: the user has let go and is in an inertial scrolling effect | `number` | 2.0       |
| yoffset    | y-axis offset pixels                                                                                                     | `number` | 3.0       |

## Supported Property Access List

| Properties           | setProperty | getProperty | [setter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) | [getter](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/gettersetter) |
| -------------------- | ----------- | ----------- | ----------------------------- | ----------------------------- |
| x                    | Y           | Y           | Y                             | Y                             |
| y                    | Y           | Y           | Y                             | Y                             |
| w                    | Y           | Y           | Y                             | Y                             |
| h                    | Y           | Y           | Y                             | Y                             |
| pos_x                | Y           | Y           | Y                             | Y                             |
| pos_y                | Y           | Y           | Y                             | Y                             |
| page                 | N           | N           | N                             | Y                             |
| modal                | N           | N           | N                             | Y                             |
| z_index              | N           | N           | N                             | Y                             |
| bounce               | N           | N           | N                             | Y                             |
| scroll_enable        | N           | Y           | N                             | Y                             |
| scroll_frame_func    | N           | N           | N                             | N                             |
| scroll_complete_func | N           | N           | N                             | N                             |

## Code example

The code runs as shown in the image at the top of the document, creating two VIEW_CONTAINER widgets

```js

const getRandomColor = () => {
  const randomArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

  function getRandomFromSection(low, high) {
    const RANDOM = Math.random()
    const RANGE = high - low + 1

    return Math.floor(RANDOM * RANGE) + low
  }

  const colorStr = Array.from({ length: 6 }).reduce((prev, curr) => {
    const random = getRandomFromSection(0, 15)
    return prev + randomArr[random]
  }, '0x')

  return Number(colorStr)
}

Page({
  build() {
    createWidget(widget.TEXT, {
      x: px(96),
      y: px(40),
      w: px(288),
      h: px(46),
      color: 0xffffff,
      text_size: px(36),
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: 'VIEW_CONTAINER'
    })

    const viewContainer = createWidget(widget.VIEW_CONTAINER, {
      x: px(0),
      y: px(86),
      w: px(480),
      h: px(400)
    })

    Array.from({ length: 5 }).forEach((_, index) => {
      viewContainer.createWidget(widget.FILL_RECT, {
        x: 0,
        y: px(index * 400),
        w: px(480),
        h: px(400),
        color: getRandomColor()
      })

      viewContainer.createWidget(widget.TEXT, {
        x: px(96),
        y: px(170) + px(index * 400),
        w: px(288),
        h: px(46),
        text_size: px(36),
        color: 0xffffff,
        align_h: align.CENTER_H,
        align_v: align.CENTER_V,
        text: `INDEX: ${index}`
      })
    })

    const viewContainerButton = createWidget(widget.VIEW_CONTAINER, {
      x: px(0),
      y: px(86),
      w: px(480),
      h: px(400),
      z_index: 1,
      scroll_enable: false
    })

    viewContainerButton.createWidget(widget.BUTTON, {
      x: 0,
      y: px(50),
      w: px(200),
      h: px(100),
      text: 'Click',
      radius: px(12),
      normal_color: DEFAULT_COLOR,
      press_color: DEFAULT_COLOR_TRANSPARENT,
      click_func: () => {
        console.log('click button')
      }
    })
  }
})
```

Used in conjunction with SetScrollMode Swiper mode, the effect is shown in the second GIF at the top.

```js

const PAGE_WIDTH = 480;
const PAGE_HEIGHT = 480;

Page({
  build() {
    setScrollMode({
      mode: SCROLL_MODE_SWIPER_HORIZONTAL,
      options: {
        width: px(PAGE_WIDTH),
        count: 2,
      },
    });

    const viewContainer1 = createWidget(widget.VIEW_CONTAINER, {
      x: px(0),
      y: px(0),
      w: px(PAGE_WIDTH),
      h: px(PAGE_HEIGHT),
      scroll_enable: 1,
      page: 0,
    });

    viewContainer1.createWidget(widget.TEXT, {
      x: 0,
      y: 0,
      w: px(PAGE_WIDTH),
      h: px(40),
      text: "ViewContainer1",
      text_size: px(26),
      color: 0xffffff,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
    });

    viewContainer1.createWidget(widget.FILL_RECT, {
      x: 0,
      y: px(40),
      w: px(PAGE_WIDTH),
      h: px(440),
      color: 0xF84E3F,
    });

    viewContainer1.createWidget(widget.FILL_RECT, {
      x: 0,
      y: px(480),
      w: px(PAGE_WIDTH),
      h: px(480),
      color: 0x42A5F5,
    });

    const viewContainer2 = createWidget(widget.VIEW_CONTAINER, {
      x: px(0),
      y: px(0),
      w: px(PAGE_WIDTH),
      h: px(PAGE_HEIGHT),
      scroll_enable: 1,
      page: 1,
    });

    viewContainer2.createWidget(widget.TEXT, {
      x: 0,
      y: 0,
      w: px(PAGE_WIDTH),
      h: px(40),
      text: "ViewContainer2",
      text_size: px(26),
      color: 0xffffff,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
    });

    viewContainer2.createWidget(widget.FILL_RECT, {
      x: 0,
      y: px(40),
      w: px(PAGE_WIDTH),
      h: px(PAGE_HEIGHT) / 2,
      color: 0xFFA726,
    });

    viewContainer2.createWidget(widget.FILL_RECT, {
      x: 0,
      y: px(280),
      w: px(PAGE_WIDTH),
      h: px(PAGE_HEIGHT) / 2,
      color: 0xFFD54F,
    });

    viewContainer2.createWidget(widget.FILL_RECT, {
      x: 0,
      y: px(40) + px(PAGE_HEIGHT),
      w: px(PAGE_WIDTH),
      h: px(PAGE_HEIGHT) / 2,
      color: 0x66BB6A,
    });
  },
});
```

---

## CYCLE_LIST

### Import

```js
import { CYCLE_LIST } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: cycle_list_sample]

Create a list that scrolls in a loop, which can be populated with images.

## Create UI widget

```js

const cycleList = createWidget(widget.CYCLE_LIST, Param)
```

## Type

### Param: object

|    Properties     |                         Description               |  Required |      Type       |
| ----------------- | --------------------------------------------------| --------- | --------------- |
| item_bg_color     |  Background color.                                | YES       | `number`        |
| item_height       |  The height of item.                              | YES       | `number`        |
| x                 | The x-coordinate of widgets.                   | YES       | `number` |
| y                 | The y-coordinate of widgets.                   | YES       | `number` |
| w                 | The width of widgets.                          | YES       | `number` |
| h                 | The height of widgets.                         | YES       | `number` |
| data_array        | Data arrays.                                      | YES       | `Array<Data>`   |
| data_size         | The length of the array.                          | YES       | `number`        |
| item_click_func   | Callback for item click.                          | NO        | `ItemClickFunc` |
| item_focus_change_func | Item focus state callback.  | NO       | `ItemFocusChangeFunc` |

### ItemClickFunc: function

```ts
(cycleList: CycleList, index: number) => void
```

| Properties | Type     | Notes                      |
| ---------- | -------- | -------------------------- |
|  cycleList | `object` | The instance of cycleList.  |
|  index     | `number` | Clicked item index.Starting from 0. |

### ItemFocusChangeFunc: function

```ts
(cycleList: CycleList, index: number, isFocus: boolean) => void
```

| 参数      | 说明                       | 类型     |
| --------- | -------------------------- | -------- |
| cycleList | The instance of cycleList.             | `object` |
| index     | Losing/getting the index of the focus item. | `number` |
| isFocus     | Whether to get the focus. | `boolean` |

## Code example

> **💡 Tip**
>
> Please refer to [Design Resources](https://docs.zepp.com/docs/reference/related-resources/design-resources) for the image resources in the code example

```js

Page({
  state: {
    pageName: 'CYCLE_LIST'
  },

  build() {
    const imgArray = ['number-img/0.png', 'number-img/1.png', 'number-img/2.png', 'number-img/3.png', 'number-img/4.png']
    const cycleList = createWidget(widget.CYCLE_LIST, {
      x: 230,
      y: 120,
      h: 300,
      w: 30,
      data_array: imgArray,
      data_size: 5,
      item_height: 100,
      item_click_func: (list, index) => {
        console.log(index)
      },
      item_bg_color: 0xffffff
    })
  }
})
```

---

## CYCLE_IMAGE_TEXT_LIST

### Import

```js
import { CYCLE_IMAGE_TEXT_LIST } from '@zos/ui'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

[Image: cycle_image_text_list_sample]

Create a list that can be scrolled in a loop, and each list item can be placed with an image and text.

## Create UI widget

```js

const cycleImageTextList = createWidget(widget.CYCLE_IMAGE_TEXT_LIST, Param)
```

## Type

### Param: object

|    Properties     |                         Description                   |  Required |      Type       |
| ----------------- | ----------------------------------------------------- | --------- | --------------- |
| x                 | The x-coordinate of widgets.                   | YES       | `number` |
| y                 | The y-coordinate of widgets.                   | YES       | `number` |
| w                 | The width of widgets.                          | YES       | `number` |
| h                 | The height of widgets.                         | YES       | `number` |
| item_image_x      |  The x-coordinate of Image.(Relative coordinate)  | YES       | `number`        |
| item_image_y      |  The y-coordinate of Image.(Relative coordinate)  | YES       | `number`        |
| item_text_x       |  The x-coordinate of text.(Relative coordinate)   | YES       | `number`        |
| item_text_y       |  The y-coordinate of text.(Relative coordinate)   | YES       | `number`        |
| item_text_size    |  Font Size.                                       | YES       | `number`        |
| item_text_color   |  Font color.                                      | YES       | `number`        |
| item_bg_color     |  Background color.                                | YES       | `number`        |
| item_height       |  The height of item.                              | YES       | `number`        |
| data_array        | Data arrays.                                      | YES       | `Array<Data>`   |
| data_size         | The length of the array.                          | YES       | `number`        |
| item_text_align_h | Text horizontal orientation.Unfilled default horizontal centering.              | NO | `number` |
| item_text_align_v | Vertical orientation of text.Unfilled defaults to vertical centering.           | NO | `number` |
| item_text_height  | Actual display area of text.Default to item_height if not filled.               | NO | `number` |
| item_text_width   | The actual text display area.Default to the widget display width if not filled. | NO | `number` |
| item_image_x           | item Image x-coordinate, relative coordinates                | NO       | `number`              |
| item_image_y           | item Image y-coordinate, relative coordinates                | NO       | `number`              |
| item_click_func   | Callback for item click.                                                         | NO | `ItemClickFunc` |
| item_focus_change_func | Item focus state callback.  | NO       | `ItemFocusChangeFunc` |

### Data: object

| Properties |      Description     | Required |   Type   |
| --------- | -------------------- | -------- | -------- |
|    src    | The path of image.   |    NO    | `string` |
|   text    | The content of text. |   YES    | `string` |

### ItemClickFunc: function

```ts
(cycleList: CycleList, index: number) => void
```

| Properties | Type     | Notes                      |
| ---------- | -------- | -------------------------- |
|  cycleList | `object` | The instance of cycleList.  |
|  index     | `number` | Clicked item index.Starting from 0. |

### ItemFocusChangeFunc: function

```ts
(cycleList: CycleList, index: number, isFocus: boolean) => void
```

| 参数      | 说明                       | 类型     |
| --------- | -------------------------- | -------- |
| cycleList | The instance of cycleList.             | `object` |
| index     | Losing/getting the index of the focus item. | `number` |
| isFocus     | Whether to get the focus. | `boolean` |

## Set the properties of a single item text

> **⚠️ Caution**
>
> Setting the properties of a single `item` text is not stored by the widget and the changed values are not available via `getProperty`.

| Properties      | Description                        | Required | Type     |
| --------------- | ---------------------------------- | -------- | -------- |
| index           | The index of item.Starting from 0. | YES       | `number` |
| item_text_color | The color of the text.             | NO       | `number` |
| item_text_size  | The size of the text.              | NO       | `number` |

```js
const widget = ...
widget.setProperty(prop.ITEM_MORE,{
  index:0,
  item_text_color:0x2f4988,
  item_text_size:50
})
```

## Refresh ITEM

- This is set for the property `ITEM_MORE`. After setting the property with `ITEM_MORE`, you can refresh `ITEM` if you want to revert to its original state.

```js
widget.setProperty(prop.ITEM_REFRESH, 0) // 0 is the index of item , starting from 0.
```

## Set the top item index of the list

- Set the index value of the top `item` of the `list` with the `LIST_TOP` property to display the `list` at the specified position of the `item`.

| Name   | Description                        |  Required | Type     |
| ------ | ---------------------------------- | --------- | -------- |
| index  | The index of item.Starting from 0. | YES       | `number` |

## Code example

```js

const data_array = [
  { src: rootPath + 'step/step_num_0.png', text: '1' },
  { src: rootPath + 'step/step_num_1.png', text: '2' },
  { src: rootPath + 'step/step_num_2.png', text: '3' }
]
cycleList = createWidget(widget.CYCLE_IMAGE_TEXT_LIST, {
  x: 0,
  y: 0,
  w: 200,
  h: 400,
  data_array: data_array,
  data_size: 3,
  item_height: 100,
  item_bg_color: 0xffffff,
  item_text_color: 0x000000,
  item_text_x: 10,
  item_text_y: 10,
  item_text_size: 18
})

//Get the index value of the first row.
ret = cycleList.getProperty(prop.MORE, {})
console.log(ret.index)
```

---

## VIRTUAL_CONTAINER

### Import

```js
import { VIRTUAL_CONTAINER } from '@zos/ui'
```

> Supported from API_LEVEL `4.0`. Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility) for compatibility.

VIRTUAL_CONTAINER is a special container widget used to implement Flex layout. It serves as the root node of a Flex layout container, and the widgets inside the container will be arranged and rendered according to the rules of Flex layout.

## Creating UI Widget

```js

const container = createWidget(widget.VIRTUAL_CONTAINER, Param)
```

## Types

### Param: object

| Property | Description                                     | Required | Type     | API_LEVEL |
| -------- | ----------------------------------------------- | -------- | -------- | --------- |
| layout   | Layout properties for Flex layout configuration | YES       | `object` | 4.0       |

## Layout Properties

VIRTUAL_CONTAINER widget supports Flex layout through the `layout` property. For detailed layout property configuration, please refer to [Widget Layout Properties for Flex Layout](https://docs.zepp.com/docs/guides/framework/device/layout).

## Instance Methods

### setLayoutParent(parent)

Sets the parent node of the current node.

**Parameters**

- `parent`: Widget instance participating in the layout

**Return Value**

None

### addLayoutChild(child, index)

Adds a child node to the current node.

**Parameters**

- `child`: Child widget instance to be added
- `index`: Optional, specifies the insertion position index, defaults to adding at the end

**Return Value**

None

### removeLayoutChild(child)

Removes the specified child node from the current node.

**Parameters**

- `child`: Child widget instance to be removed

**Return Value**

None

### updateLayoutStyle(style)

Updates the layout style of the node.

**Parameters**

- `style`: Object containing layout properties

**Return Value**

None

## Code Example

The following example shows how to use VIRTUAL_CONTAINER to create a simple Flex layout:

```js

// Create root container
const root = createWidget(widget.VIRTUAL_CONTAINER, {
  layout: {
    x: '0',
    y: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    'flex-flow': 'column',
    'justify-content': 'center',
    'align-items': 'center'
  }
})

// Create child element
const text = createWidget(widget.TEXT, {
  text: 'Hello Zepp OS',
  align_h: align.CENTER_H,
  layout: {
    width: '100%',
    height: 'auto',
    'font-size': '36'
  }
})

// Set text widget as a child node of root
text.setLayoutParent(root)

// Create button
const button = createWidget(widget.BUTTON, {
  text: 'Click Me',
  layout: {
    width: '80%',
    height: '60px',
    'margin-top': '20px'
  }
})

// Add button as a child node of root
root.addLayoutChild(button)

// Update layout style
button.updateLayoutStyle({
  'background-color': '#ff0000'
})
```

## Notes

1. VIRTUAL_CONTAINER widget is mainly used to implement Flex layout and needs to be used with the `layout` property and widget node operation APIs.
2. When using Flex layout, it is recommended to use relative units (such as %, vw, vh, etc.) to implement responsive layouts.
3. After updating the layout style, you may need to call `updateLayout()` to refresh the layout.

---

