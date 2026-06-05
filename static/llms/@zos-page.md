# @zos/page

## Constants

| Constant | Description | API_LEVEL |
|----------|-------------|-----------|
| `SCROLL_MODE_FREE` | Free scrolling mode, system default scrolling mode | — |
| `SCROLL_MODE_SWIPER` | Swiper mode, vertical rotating map, walking lights, by configuring the height and number of individual pages can achieve the whole screen scrolling effect | — |
| `SCROLL_MODE_SWIPER_HORIZONTAL` | Swiper mode, horizontal rotating map, walking lights, by configuring the width and number of individual pages can achieve the whole screen scrolling effect | 2.1 |
| `SCROLL_ANIMATION_SMOOTH` | Scroll smoothly to the corresponding position | — |
| `SCROLL_ANIMATION_NONE` | No animation, scroll directly to the corresponding position | — |

## getScrollTop

### Import

```js
import { getScrollTop } from '@zos/page'
```

### Typings

- Description: Get the vertical coordinate of the current scroll position of the page
- Example:

```js
import { getScrollTop } from '@zos/page'

const top = getScrollTop()
console.log(top)
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the vertical coordinate of the current scroll position of the page.

## Type

```ts
function getScrollTop(): Result
```

## Parameters

### Result

| Type                | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| `number` | The vertical coordinate of the current scroll position of the page |

## Example

```js

const top = getScrollTop()
console.log(top)
```

---

## getSwiperIndex

### Import

```js
import { getSwiperIndex } from '@zos/page'
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Get the scroll position of the current page, only if the page scroll mode is `SCROLL_MODE_SWIPER` or `SCROLL_MODE_SWIPER_HORIZONTAL` return the index of the current item (starting from `1`), otherwise return `undefined`.

## Type

```ts
function getSwiperIndex(): Result
```

## Parameters

### Result

| Type                               | Description                                                                                                                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number&#124;undefined` | If the page scroll mode is `SCROLL_MODE_SWIPER` or `SCROLL_MODE_SWIPER_HORIZONTAL`, the value is the index of the current item (starting from `1`). Otherwise, it is `undefined`. |

## Example

```js

setScrollMode({
  mode: SCROLL_MODE_SWIPER,
  options: {
    height: 480,
    count: 10,
  },
})

swipeToIndex({
  index: 5,
})

const currentIndex = getSwiperIndex()
console.log(currentIndex)
```

---

## scrollTo

### Import

```js
import { scrollTo } from '@zos/page'
```

### Typings

- Description: Scroll the page to the specified position
- Example:

```js
import { scrollTo } from '@zos/page'

scrollTo({
   y: -200
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Scroll the page to the specified position.

## Type

```ts
function scrollTo(option: Option): void
```

### Simplified calling method

```ts
function scrollTo(y: number): void
```

## Parameters

### Option

| Property   | Type                    | Required | DefaultValue | Description                                                                                                                  | API_LEVEL |
| ---------- | ----------------------- | -------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------- | --------- |
| y          | `number`     | Y        | -            | The vertical axis coordinates of the page, the 12 o'clock direction of the watch is positive, and scrolling down is negative | 2.0       |
| animConfig | `animConfig` | N        | -            | Scroll animation configuration                                                                                               | 3.6       |

### animConfig

| Property           | Type                        | Required | DefaultValue    | Description                                                                                                                       | API_LEVEL |
| ------------------ | --------------------------- | -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------- |
| anim_rate          | `string`         | N        | -               | Animation curve, optional values `linear`, `easein`, `easeout`, `easeinout` refer to [https://easings.net/](https://easings.net/) | 3.6       |
| anim_duration      | `number`         | N        | -               | Animation duration, in milliseconds                                                                                               | 3.6       |
| anim_fps           | `number`         | N        | `25` | Animation frame rate                                                                                                              | 3.6       |
| anim_complete_func | `() => void` | N        | -               | End of animation callback function                                                                                                | 3.6       |

## Example

```js

scrollTo({
  y: -200,
})
```

---

## setScrollLock

### Import

```js
import { setScrollLock } from '@zos/page'
```

### Typings

- Description: Set the current page scrolling position to be locked, i.e. the screen position will not change with the gesture swipe. After calling this API to perform the unlock operation, the page scrolling mode will be set to free scrolling mode
- Example:

```js
import { setScrollLock } from '@zos/page'

setScrollLock({
  lock: true
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set the current page scrolling position to be locked, i.e. the screen position will not change with the gesture swipe. After calling this API to perform the unlock operation, the page scrolling mode will be set to free scrolling mode.

## Type

```ts
function setScrollLock(option: Option): void
```

## Parameters

### Option

| Property | Type                 | Required | DefaultValue      | Description                                      | API_LEVEL |
| -------- | -------------------- | -------- | ----------------- | ------------------------------------------------ | --------- |
| lock     | `boolean` | N        | `true` | Whether to lock the current page scroll position | 2.0       |

## Example

```js

setScrollLock({
  lock: true,
})
```

---

## setScrollMode

### Import

```js
import { setScrollMode } from '@zos/page'
```

### Typings

- Description: Set the scroll mode of the page
- Constants: `scrollMode`
- Example:

```js
import { setScrollMode, SCROLL_MODE_SWIPER } from '@zos/page'

setScrollMode({
  mode: SCROLL_MODE_SWIPER,
  options: {
    height: 480,
    count: 10
  }
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Set the scroll mode of the page.

## Type

```ts
function setScrollMode(option: Option): Result
```

## Parameters

### Option

| Property | Type                 | Required | DefaultValue | Description                                                  | API_LEVEL |
| -------- | -------------------- | -------- | ------------ | ------------------------------------------------------------ | --------- |
| mode     | `string`  | Y        | -            | Page scroll mode, value reference page scroll mode constants | 2.0       |
| options  | `Options` | N        | -            | Other Options                                                | 2.0       |

### Options

| Property   | Type                                             | Required | DefaultValue | Description                                                                                                                             | API_LEVEL |
| ---------- | ------------------------------------------------ | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| height     | `number`                              | N        | -            | Specify the height of a single item in Swiper, effective only if the scroll mode is `SCROLL_MODE_SWIPER`                                | 2.0       |
| count      | `number`                              | N        | -            | Specify the number of items in the Swiper, effective only if the scroll mode is `SCROLL_MODE_SWIPER` or `SCROLL_MODE_SWIPER_HORIZONTAL` | 2.0       |
| width      | `number`                              | N        | -            | Specify the width of a single item in Swiper, effective only if the scroll mode is `SCROLL_MODE_SWIPER_HORIZONTAL`                      | 2.1       |
| modeParams | `FreeModeParams&#124;SwipeModeParams` | N        | -            | Parameters for the scroll mode                                                                                                          | 3.0       |

### FreeModeParams

| Property             | Type                                         | Description                                                                                                                                                                                                                                                                      | API_LEVEL |
| -------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| scroll_frame_func    | `(params: ScrollObj) => void` | The callback function for each frame during scrolling                                                                                                                                                                                                                            | 3.0       |
| scroll_complete_func | `(params: ScrollObj) => void` | The end of the scroll callback function                                                                                                                                                                                                                                          | 3.0       |
| bounce               | `boolean`                         | Control whether the page rebound effect is turned on. When the page content exceeds one screen, it is turned on by default. If the page content is less than one screen, it is turned off by default. This parameter needs to be passed in the `build` lifecycle to take effect. | 3.6       |

### ScrollObj

| Property | Type                | Description                | API_LEVEL |
| -------- | ------------------- | -------------------------- | --------- |
| type     | `number` | Todo                       | 3.0       |
| yoffset  | `number` | Pixel offset on the y axis | 3.0       |

### SwipeModeParams

| Property     | Type                                         | Description                                                                                                             | API_LEVEL |
| ------------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------- |
| on_page      | `(pageIndex: number) => void` | Callback function after page flipping, `pageIndex` is the page index after page flipping, and the index starts from `0` | 3.0       |
| crown_enable | `boolean`                         | Whether to respond to crown events, the default response, you can use the crown to control page turning                 | 3.0       |

### Result

| Type                | Description                                 |
| ------------------- | ------------------------------------------- |
| `number` | If `true` is returned, success is indicated |

## Constants

### Page scroll mode constants

| Constant                        | Description                                                                                                                                                 | API_LEVEL |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `SCROLL_MODE_FREE`              | Free scrolling mode, system default scrolling mode                                                                                                          | 2.0       |
| `SCROLL_MODE_SWIPER`            | Swiper mode, vertical rotating map, walking lights, by configuring the height and number of individual pages can achieve the whole screen scrolling effect  | 2.0       |
| `SCROLL_MODE_SWIPER_HORIZONTAL` | Swiper mode, horizontal rotating map, walking lights, by configuring the width and number of individual pages can achieve the whole screen scrolling effect | 2.1       |

## Example

```js

setScrollMode({
  mode: SCROLL_MODE_SWIPER,
  options: {
    height: 480,
    count: 10,
  },
})
```

---

## swipeToIndex

### Import

```js
import { swipeToIndex } from '@zos/page'
```

### Typings

- Description: Scrolls the page to the Swiper's target item, only if the current page scroll mode is `SCROLL_MODE_SWIPER`
- Constants: `scrollAnimation`
- Example:

```js
import { setScrollMode, swipeToIndex, SCROLL_MODE_SWIPER } from '@zos/page'

setScrollMode({
  mode: SCROLL_MODE_SWIPER,
  options: {
    height: 480,
    count: 10
  }
})

swipeToIndex({
  index: 5
})
```

> Start from API_LEVEL `2.0` . Please refer to [API_LEVEL](https://docs.zepp.com/docs/guides/framework/device/compatibility).

Scrolls the page to the Swiper's target item, only if the current page scroll mode is `SCROLL_MODE_SWIPER`.

## Type

```ts
function swipeToIndex(option: Option): void
```

## Parameters

### Option

| Property  | Type                | Required | DefaultValue                           | Description                                                             | API_LEVEL |
| --------- | ------------------- | -------- | -------------------------------------- | ----------------------------------------------------------------------- | --------- |
| index     | `number` | Y        | -                                      | Index of the target project, starting from 0                            | 2.0       |
| animation | `string` | N        | ``SCROLL_ANIMATION_SMOOTH`` | Scrolling animation, value reference page scrolling animation constants | 2.0       |

## Constants

### Page scroll mode constants

| Constant                  | Description                                                 | API_LEVEL |
| ------------------------- | ----------------------------------------------------------- | --------- |
| `SCROLL_ANIMATION_SMOOTH` | Scroll smoothly to the corresponding position               | 2.0       |
| `SCROLL_ANIMATION_NONE`   | No animation, scroll directly to the corresponding position | 2.0       |

## Example

```js

setScrollMode({
  mode: SCROLL_MODE_SWIPER,
  options: {
    height: 480,
    count: 10,
  },
})

swipeToIndex({
  index: 5,
})
```

---

