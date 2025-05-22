---
title: 控件 layout 属性实现 Flex 布局
sidebar_label: 控件 layout 属性实现 Flex 布局
---

import useBaseUrl from '@docusaurus/useBaseUrl'

在 Zepp OS 中，API_LEVEL 4.0 引入了对 Flex 布局的支持，使开发者能够使用与 Web 开发类似的方式来构建智能手表应用的界面，大大提高了布局的灵活性和开发效率。

<img src={useBaseUrl('/img/docs/guides/framework/layout_effect.jpg')} width="50%" title="layout_effect" />

Flex（弹性盒子）是 CSS3 中的一种布局模式，专门用于创建灵活的一维布局（行或列）。Flex 布局可以简化复杂布局的实现，特别适合响应式设计。如需深入了解 Flex 布局的概念和用法，可以参考以下文档：

- [MDN Web Docs: Flex 布局基础](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

在 Zepp OS 中的实现 Flex 布局主要有如下几个部分：

1. 新增 `VIRTUAL_CONTAINER` 控件作为 Flex 布局容器
2. 控件新增 layout 属性，传入类似 CSS 的属性
3. 控件节点操作 API，像操作 DOM 树一样对控件节点树进行增删改查

## VIRTUAL_CONTAINER 控件

`VIRTUAL_CONTAINER` 是一个特殊容器控件，指定当前容器为 Flex 布局容器的根节点，这个容器内的控件会按照 Flex 布局的规则进行排布和渲染。

## layout 属性

### 长度单位

`layout` 属性支持 `px` 绝对长度单位，举例：`"width":"20px"`。

`layout` 还支持以下相对长度单位：

| 单位 | 描述                                                           | 案例               |
| ---- | -------------------------------------------------------------- | ------------------ |
| %    | 相对于父元素的尺寸的百分比；对于根容器，以 screen 的尺寸为参考 | `"width":"20%"`    |
| vw   | 视窗宽度的 1%，支持使用浮点值                                  | `"width":"20vw"`   |
| vh   | 视窗高度的 1%，支持使用浮点值                                  | `"width":"20vh"`   |
| vmin | 视窗宽度和长度中较小尺寸的 1%，支持使用浮点值                  | `"width":"20vmin"` |
| vmax | 视图宽度和长度中较大尺寸的 1%，支持使用浮点值                  | `"width":"20vmax"` |

注：单位 vw、vh、vmin、vmax 支持描述浮点数值，精确到 0.001，例如："top" : "-3.549vmin"。

### 配置项

layout 属性支持以下配置项，与 CSS 非常类似：

| 属性名          | 描述                                                                                                                                                                                  | 值及单位                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width           | 容器的宽度                                                                                                                                                                            | 长度值，支持所有单位；`auto`：自动计算实际的宽度（含有 text 的控件）                                                                                                                                                                                                                            |
| height          | 容器的高度                                                                                                                                                                            | 长度值，支持所有单位；`auto`：自动计算实际的高度（含有 text 的控件）                                                                                                                                                                                                                            |
| min-width       | 容器的最小宽度；在 width 被设置时，与 max-width 一起配合用于限定 width 的范围                                                                                                         | 长度值，支持所有单位                                                                                                                                                                                                                                                                            |
| max-width       | 容器的最大宽度；在 width 被设置时，与 min-width 一起配合用于限定 width 的范围                                                                                                         | 长度值，支持所有单位                                                                                                                                                                                                                                                                            |
| min-height      | 容器的最小高度；在 height 被设置时，与 max-height 一起配合用于限定 height 的范围                                                                                                      | 长度值，支持所有单位                                                                                                                                                                                                                                                                            |
| max-height      | 容器的最大高度；在 height 被设置时，与 min-height 一起配合用于限定 height 的范围                                                                                                      | 长度值，支持所有单位                                                                                                                                                                                                                                                                            |
| padding-top     | 容器的上内边距                                                                                                                                                                        | 长度值，支持除 % 外的单位（支持简写 padding）                                                                                                                                                                                                                                                   |
| padding-bottom  | 容器的下内边距                                                                                                                                                                        | 长度值，支持除 % 外的单位（支持简写 padding）                                                                                                                                                                                                                                                   |
| padding-left    | 容器的左内边距                                                                                                                                                                        | 长度值，支持除 % 外的单位（支持简写 padding）                                                                                                                                                                                                                                                   |
| padding-right   | 容器的右内边距                                                                                                                                                                        | 长度值，支持除 % 外的单位（支持简写 padding）                                                                                                                                                                                                                                                   |
| row-gap         | 容器的行间隙                                                                                                                                                                          | 长度值，支持除 % 外的单位（支持简写 gap）                                                                                                                                                                                                                                                       |
| column-gap      | 容器的列间隙                                                                                                                                                                          | 长度值，支持除 % 外的单位（支持简写 gap）                                                                                                                                                                                                                                                       |
| left            | 容器的左侧偏移，主要用于相对定位                                                                                                                                                      | 长度值，支持除 % 外的单位                                                                                                                                                                                                                                                                       |
| top             | 容器的上侧偏移，主要用于相对定位                                                                                                                                                      | 长度值，支持除 % 外的单位                                                                                                                                                                                                                                                                       |
| right           | 容器的右侧偏移，主要用于相对定位                                                                                                                                                      | 长度值，支持除 % 外的单位                                                                                                                                                                                                                                                                       |
| bottom          | 容器的下侧偏移，主要用于相对定位                                                                                                                                                      | 长度值，支持除 % 外的单位                                                                                                                                                                                                                                                                       |
| align           | 描述容器在其父容器内容区域内的对齐方式                                                                                                                                                | - `left` 横向左对齐<br/>- `center` 横向居中对齐<br/>- `right` 横向右对齐<br/>- `top` 纵向顶部对齐<br/>- `middle` 纵向居中对齐<br/>- `bottom` 纵向底部对齐<br/>例：`"align": "center bottom"` 设置容器对象为横向居中对齐纵向底部对齐                                                             |
| display         | 布局类型                                                                                                                                                                              | - `flex`<br/>- `grid`（暂不支持）                                                                                                                                                                                                                                                               |
| flex-flow       | flex-direction 属性和 flex-wrap 属性的合集，描述一个 flexbox 布局的方向和是否换行                                                                                                     | - `row`（默认值）<br/>- `row-reverse`<br/>- `column`<br/>- `column-reverse`<br/>- `nowrap`<br/>- `wrap`<br/>- `wrap-reverse`                                                                                                                                                                    |
| justify-content | 描述 flex items 沿 main 轴的对齐方式                                                                                                                                                  | - `flex-start` 或 `start`（默认值）<br/>- `flex-end` 或 `end`<br/>- `center`<br/>- `space-between` 项目在轨道中均匀分布：第一个项目在起始行，最后一个项目在结束行<br/>- `space-around` 物品均匀分布在轨道上，周围的空间相等<br/>- `space-evenly` 任意两个项目之间的间距（以及到边缘的空间）相等 |
| align-items     | 描述 flex items 沿 cross 轴的对齐方式                                                                                                                                                 | 同 justify-content（默认值为 `center`）                                                                                                                                                                                                                                                         |
| align-content   | 当 cross 轴上有额外空间时，这表示所有轨道组成的内容在 cross 轴上的对齐方式                                                                                                            | - `flex-start` 或 `start`<br/>- `flex-end` 或 `end`<br/>- `center`（默认值）                                                                                                                                                                                                                    |
| flex-grow       | flex item 在必要时增长的能力                                                                                                                                                          | 16 位正整数                                                                                                                                                                                                                                                                                     |
| tags            | 用于打开或关闭（默认）那些扩展的或者用于调试的特性；对象可以有很多标签，标签间使用空格字符进行分割                                                                                    | - `update`<br/>- `unscaled`<br/>- `scale-with-dpi`（简写 swdpi）<br/>- `scale-with-width`（简写 sww）<br/>- `scale-with-height`（简写 swh）<br/>- `ignore-layout`<br/>- `newtrack`                                                                                                              |
| font-size       | 指示对象的文字尺寸，即字号；如果修饰的对象是 render，那么仅对此 render 生效；如果修饰的对象是 control，那么对此 control 下所有 text 类型的 render 对象生效                            | 长度值，支持除 % 外的单位                                                                                                                                                                                                                                                                       |
| corner-radius   | 指示对象的角半径；角半径包含 rw 和 rh 两个值，使用时 rw 在 rh 之前，以空格间隔开，例如：`corner-radius="33 20"`；如果 rw 和 rh 相等，也可以用一个值来表示，例如：`corner-radius="33"` | 长度值，支持除 % 外的单位                                                                                                                                                                                                                                                                       |
| line-clamp      | 对 text 进行最大行数的限制，若 text 未超过限制，则以实际行数为准                                                                                                                      | 16 位正整数                                                                                                                                                                                                                                                                                     |

## 控件节点操作 API

为了方便开发者管理控件树结构，Zepp OS 提供了一系列控件节点操作 API。以下是详细说明：

### [createWidget(type, props)](../../../reference/device-app-api/newAPI/ui/createWidget.mdx)

在创建控件的时候，新增一个 `parent` 属性，可以指定当前控件的父节点。

### [setLayoutParent(parent)](../../../reference/device-app-api/newAPI/ui/setLayoutParent.mdx)

设置当前节点的父节点。

**参数**

- `parent`: 参与布局的控件实例

**示例**

```js
import { createWidget, widget, align } from '@zos/ui'

const container = createWidget(widget.VIRTUAL_CONTAINER, {
  layout: {
    x: '0',
    y: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  },
})

const text = createWidget(widget.TEXT, {
  text: 'Hello Zepp OS',
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
  layout:{
    width:'200',
    height:'100',
  }
})

// 将 text 控件设置为 container 的子节点
text.setLayoutParent(container)
```

### [addLayoutChild(child, index)](../../../reference/device-app-api/newAPI/ui/addLayoutChild.mdx)

添加子节点到当前节点。

**参数**

- `child`: 要添加的子控件实例
- `index`: 可选，指定插入位置的索引，默认添加到末尾

**示例**

```js
const container = createWidget(widget.VIRTUAL_CONTAINER)
const button = createWidget(widget.BUTTON)

// 将 button 添加为 container 的第一个子节点
container.addLayoutChild(button, 0)
```

### [removeLayoutChild(child)](../../../reference/device-app-api/newAPI/ui/removeLayoutChild.mdx)

从当前节点移除指定的子节点。

**参数**

- `child`: 要移除的子控件实例

**示例**

```js
// 从父容器中移除子控件
container.removeLayoutChild(button)
```

### [updateLayoutStyle(style)](../../../reference/device-app-api/newAPI/ui/updateLayoutStyle.mdx)

更新节点的布局样式。

### [openInspector](../../../reference/device-app-api/newAPI/ui/openInspector.mdx)

用于在模拟器中绘制所有参与布局的 widget 的边界矩形，帮助开发者调试布局问题。此方法需要在 `build()` 生命周期之后调用。

**参数**

- `style`: 包含布局属性的对象

**示例**

```js
// 更新控件的布局样式
widget.updateLayoutStyle({
  display: 'flex',
  'flex-flow': 'column',
  'justify-content': 'center',
  'align-items': 'center',
  width: '100%',
  height: 'auto'
})
```

### [updateLayout()](../../../reference/device-app-api/newAPI/ui/updateLayout.mdx)

在修改控件树之后，需要用这个方法来重新渲染视图。

### 控件支持性

以下控件支持 `layout` 属性进行 Flex 布局：

**容器类控件**

- SCROLL_LIST（滚动列表）
- VIEW_CONTAINER（视图容器）
- GROUP（组容器）

**输入类控件**

- CHECK_GROUP（复选框组）
- SLIDE_SWITCH（滑动开关）
- KEYBOARD（键盘）
- RADIO_GROUP（单选框组）

**图形绘制类控件**

- CANVAS（画布）
- CIRCLE（圆形）
- ARC（弧形）
- FILL_RECT（填充矩形）
- STROKE_RECT（描边矩形）

**列表类控件**

- CYCLE_LIST（循环列表）
- CYCLE_IMAGE_TEXT_LIST（图文循环列表）

**基础控件**

- BUTTON（按钮）
- TEXT（文本）
- STATE_BUTTON（状态按钮）
- IMG（图片）
- IMG_ANIM（图片动画）

**其他控件**

- WIDGET_PIKCER（选择器）
- HISTOGRAM（直方图）
- PAGE_INDICTOR（页面指示器）

**注意**：每个控件可能支持特定的 `layout` 属性，具体请参考各控件的详细文档。

## 完整示例

下面我们将通过一个完整的示例，演示如何使用 Flex 布局创建一个 3x3 的网格布局。这个布局由三个横向排列的容器组成，每个容器内部包含三个纵向排列的元素，并且实现事件注册，和控件的样式修改。

<img src={useBaseUrl('/img/docs/guides/framework/layout_effect.jpg')} width="50%" title="layout_effect" />

上图是一个 3 行 3 列的布局：

- 整个布局由一个根容器和三个列容器组成（`VIRTUAL_CONTAINER` 根容器创建、子节点创建指定父容器）
- 三个列容器横向排列，均匀分布（layout 属性实现 Flex 布局）
- 每个列容器内部有三个元素纵向排列：文本、圆形控件和按钮
- 点击圆形控件会改变其颜色和大小（修改元素属性）
- 点击按钮会删除当前文本控件，再次点击按钮重新创建文本控件，插入到控件节点树中（删除控件节点、新增控件节点，并重新渲染视图）

### 布局原理解析

1. **根容器**：使用 `flex-flow: 'row'` 实现横向布局，使用 `justify-content: 'space-between'` 使三个列容器均匀分布。

2. **列容器**：使用 `flex-flow: 'column'` 实现纵向布局，使用 `width: '33%'` 控制宽度，使用 `justify-content: 'space-between'` 使内部元素均匀分布。

3. **交互元素**：
   - 圆形控件支持点击事件，点击后改变颜色和大小
   - 按钮支持点击事件，点击后切换文本控件的显示和隐藏状态
   - 使用 `updateLayout()` 函数在动态修改 layout 属性或者控件树后刷新界面

### 完整代码

```js
import {
  createWidget,
  widget,
  align,
  event,
  updateLayout,
  deleteWidget,
  openInspector
} from '@zos/ui'

Page({
  build() {
    // 创建根容器 - 1行3列的布局
    const rootContainer = createWidget(widget.VIRTUAL_CONTAINER, {
      layout: {
        display: 'flex',
        x: '100px',
        y: '100px',
        width: '60vw',
        height: '60vh',
        'justify-content': 'space-between',
        'align-items': 'center'
      }
    })

    // 创建列容器的辅助函数
    const createColumnContainer = () => {
      return createWidget(widget.VIRTUAL_CONTAINER, {
        parent: rootContainer,
        layout: {
          display: 'flex',
          'flex-flow': 'column',
          width: '33%',
          height: '100%',
          'justify-content': 'space-between'
        }
      })
    }

    // 创建三个列容器
    const column1 = createColumnContainer()
    const column2 = createColumnContainer()
    const column3 = createColumnContainer()

    // 创建子元素的辅助函数
    const createElements = (parent, label) => {
      // 第一列：文本
      let text = createWidget(widget.TEXT, {
        parent: parent,
        layout: {
          width: '80%',
          height: '20%'
        },
        text: label,
        color: 0xffffff,
        text_size: 36,
        align_h: align.CENTER_H
      })

      // 第二列：圆形控件
      const circle = createWidget(widget.CIRCLE, {
        parent: parent,
        layout: {
          width: '80%',
          height: '33%'
        },
        color: 0x0986d4
      })

      // 控件注册事件监听
      circle.addEventListener(event.CLICK_DOWN, function (info) {
        console.log('圆形控件被点击了')
        // 点击时在两种颜色之间切换
        if (circle.color === 0x0986d4) {
          circle.color = 0xff0000

          circle.updateLayoutStyle({
            width: '30%'
          })
          updateLayout()
        } else {
          circle.color = 0x0986d4

          circle.updateLayoutStyle({
            width: '80%'
          })
          updateLayout()
        }
      })

      // 第三列：按钮
      const button = createWidget(widget.BUTTON, {
        parent: parent,
        layout: {
          width: '90%',
          height: '33%'
        },
        text: 'Button' + label,
        color: 0x000000,
        normal_color: 0x0986d4,
        press_color: 0x055e8b,
        click_func: () => {
          console.log('Button' + label + 'clicked')

          if (text) {
            // 删除 text 控件
            parent.removeLayoutChild(text)
            deleteWidget(text)
            text = null
          } else {
            text = createWidget(widget.TEXT, {
              parent: parent,
              layout: {
                width: '80%',
                height: '20%'
              },
              text: label,
              color: 0xffffff,
              text_size: 36,
              align_h: align.CENTER_H
            })

            parent.addLayoutChild(text, 0)
          }

          // 使用控件节点树方法之后需要手动更新布局
          updateLayout()
        }
      })
    }

    // 为每个列容器创建子元素
    createElements(column1, 'A')
    createElements(column2, 'B')
    createElements(column3, 'C')

    // 查看控件布局边界，用于调试
    // setTimeout(() => {
    //   openInspector().draw({
    //     line_color: 0xff0000,
    //     line_width: 1,
    //     border_mode: 1,
    //   });
    // }, 200);
  }
})
```

### 代码解析

1. **导入必要的模块**

首先，我们导入了所需的 UI 模块，包括创建控件、控件类型、对齐方式、事件处理、布局更新和控件删除等功能：

```js
import {
  createWidget,
  widget,
  align,
  event,
  updateLayout,
  deleteWidget,
  openInspector
} from '@zos/ui'
```

2. **创建根容器**

我们创建了一个根容器，设置了 Flex 布局，并指定了位置、大小和子元素的排列方式：

```js
const rootContainer = createWidget(widget.VIRTUAL_CONTAINER, {
  layout: {
    display: 'flex',
    x: '100px',
    y: '100px',
    width: '60vw',
    height: '60vh',
    'justify-content': 'space-between',
    'align-items': 'center'
  }
})
```

注意这里使用了相对单位 `vw` 和 `vh`，使布局能够适应不同尺寸的屏幕。

3. **创建列容器**

我们定义了一个辅助函数来创建列容器，每个列容器都是一个垂直方向的 Flex 布局：

```js
const createColumnContainer = () => {
  return createWidget(widget.VIRTUAL_CONTAINER, {
    parent: rootContainer,
    layout: {
      display: 'flex',
      'flex-flow': 'column',
      width: '33%',
      height: '100%',
      'justify-content': 'space-between'
    }
  })
}
```

这里使用了 `parent` 属性直接指定父容器，这是一种比 `setLayoutParent` 更简洁的方式。

4. **创建交互元素**

我们定义了一个辅助函数来为每个列容器创建子元素，包括文本、圆形控件和按钮：

```js
const createElements = (parent, label) => {
  // 创建文本、圆形控件和按钮
  // ...
}
```

5. **实现交互功能**

我们为圆形控件添加了点击事件，点击后改变颜色和大小：

```js
circle.addEventListener(event.CLICK_DOWN, function (info) {
  // 点击时在两种颜色之间切换
  if (circle.color === 0x0986d4) {
    circle.color = 0xff0000
    circle.updateLayoutStyle({
      width: '30%'
    })
    updateLayout()
  } else {
    // ...
  }
})
```

我们为按钮添加了点击事件，点击后删除文本控件，和重新创建文本控件，并插入控件树中

:::warning
这里注意，删除控件不仅需要使用 `parent.removeLayoutChild` 删除节点，还需要使用 `deleteWidget` 删除控件实例。
:::

```js
click_func: () => {
  if (text) {
    // 删除 text 控件
    parent.removeLayoutChild(text)
    deleteWidget(text)
    text = null
  } else {
    // 重新创建 text 控件
    // ...
    parent.addLayoutChild(text, 0)
  }

  // 使用控件节点树方法之后需要手动更新布局
  updateLayout()
}
```

6. **调试工具**

代码中还包含了一个被注释的 `openInspector` 调用，可以用来查看控件的布局边界：

<img src={useBaseUrl('/img/docs/guides/framework/layout_debug.jpg')} width="50%" title="layout_debug" />

```js
setTimeout(() => {
  openInspector().draw({
    line_color: 0xff0000,
    line_width: 1,
    border_mode: 1
  })
}, 200)
```

这个工具在开发过程中非常有用，可以帮助我们检查控件的位置和大小是否符合预期。

### 布局技巧总结

1. **使用相对单位**：使用 `vw`、`vh` 和百分比单位可以创建响应式布局，适应不同尺寸的屏幕。

2. **嵌套 Flex 布局**：通过嵌套的 Flex 布局可以创建复杂的界面结构，横向和纵向布局可以组合使用。

3. **动态更新布局**：使用 `updateLayoutStyle` 方法可以动态修改控件的布局样式，配合 `updateLayout` 函数刷新界面。

4. **控件树操作**：使用 `addLayoutChild` 和 `removeLayoutChild` 方法可以动态添加和移除控件，实现更丰富的交互效果。

5. **事件处理**：为控件添加事件监听器，可以响应用户的交互操作，实现动态的界面效果。

通过这个完整的示例，我们展示了如何使用 Flex 布局创建一个响应式的交互界面。这种布局方式不仅使代码更加简洁，也使界面更加灵活，能够适应不同尺寸的屏幕和不同的交互场景。
