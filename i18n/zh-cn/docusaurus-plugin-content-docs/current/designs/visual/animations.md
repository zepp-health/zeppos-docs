---
sidebar_label: 动效
---

# 动效  

ZeppOS “空气”动效体系，打造具有自然感、空间感、透明感的操作体验，赋予产品生命力。  

**自然**：遵循自然界的物理规律，感知真实世界的元素变化，让用户更快地认知、理解和接受。  

**空间**：通过动效建立纵深的视觉空间，强化页面结构和父子关系，建立空间感和秩序感。让用户对界面之间的联系有更直接的认知。  

**透明**：最好的动效是让用户感受不到动效的存在，润物细无声，在需要的时候才会被感知，简洁且适度，一切都恰到好处。

## 设计原则

### 自然流畅  

动效在视觉上是连贯的，运动方式符合自然运动规律。  

![Design](/img/design/59a1b0ef96e80f511c386c4c6971f136.gif)  

### 层次清晰  

动效需要清晰地表达系统层级关系，使界面间衔接自然明确，用户能够通过动画感知页面结构。  

![Design](/img/design/88462a8e918d7cbf05ef27c52bb3b4fb.gif)  

### 保持克制  

由于可穿戴设备的屏幕大小限制，动效更应该简洁适度、减少动态元素和运动路径，不超过用户操作时限，关注动效带给用户的心理感受。  

![Design](/img/design/a7cbe46e869353fb046bb7f0fda05488.gif)

## 图标动效  

图标引导动画，通过界面中图标元素的变化，引起用户注意或引导用户进行操作，自然而然的聚焦用户视线，降低其他视觉元素的干扰。  

![Design](/img/design/8977fe4180318e70331ee89a91c82c77.gif)

## 插图动效
插图动画可以丰富表达的视觉信息，吸引用户的情感并帮助他们理解功能和流程。  

- 等待动画  

测量中的过渡动画可以减少用户等待时的焦虑感。  

![Design](/img/design/Illustration-animations.gif)

- 激励动画  

激励动画可以在用户接触和使用产品的过程中，激发用户的正向情感。  

![Design](/img/design/Illustration-animations_2.gif)

- 引导动画
引导动画可帮助用户快速了解如何操作，减少困惑达成任务。  

![Design](/img/design/Illustration-animations_3.gif)

## 图表动效  

图表动效可以提高图表的阅读效率，减少枯燥感，提高改用户体验。  

![Design](/img/design/Illustration-animations_4.gif)

## 控件动效  

控件动效通过动效体现元素操作逻辑。  

- 单选按钮  

![Design](/img/design/Illustration-animations_5.gif)  

- 复选框  

![Design](/img/design/Illustration-animations_6.gif)

- 卡片删除  

![Design](/img/design/Illustration-animations_7.gif)

- 应用删除  

![Design](/img/design/Illustration-animations_8.gif)

- 长按编辑  

![Design](/img/design/Illustration-animations_9.gif)

- 列表拖拽  

![Design](/img/design/Illustration-animations_10.gif)

- 轻提示  

![Design](/img/design/Illustration-animations_11.gif)

## 页面动效  

页面动效用来展示系统内不同页面之间的切换，表明层级关系。  

![Design](/img/design/Illustration-animations_12.gif)

## 文本滚动展示  

当文本长度超过显示空间时，使用滚动方式展示完整文本。滚动速度为6800ms滚动屏幕宽度的100%。以一个480宽度的屏幕为例，滚动速度大约为每1000ms滚动71px。在文本完成一次完整滚动后，将准确停在起点处，并在停顿2000ms后继续滚动。  

![Design](/img/design/Illustration-animations_13.gif)

在文本滚动展示的时候，文本末端应添加渐变遮罩。  

![Design](/img/design/Illustration-animations_14.gif)  

>①遮罩的尺寸与单行文本的高度相同，记为a。
>
>②我们在一个边长为a的正方形方格上绘制一个从右向左渐变的区域，从纯黑色逐渐过渡到透明。

### 使用规则  

**基本时间单位**

无论动画的风格如何，动画过渡时间都不应该太快或太慢，过渡适度的动画能带给用户舒适的体验。  

根据动画影响的范围和动画类型我们划分成如下时间区间：  

最短时间100ms，短时间: 200ms，基本时间: 300ms，较长时间：400ms，后续时间以 100ms 的倍增方式分段。  

![Design](/img/design/basic-time-unit.png)  

- 最短时间：控件的出现和消失等。
- 短时间：控件的轻量交互动画，如单选、多选等。
- 基本时间：页面切换交互动画，如轻提示、页面切换、删除等。
- 较长时间：图表动画，如指示器动画等。
- 自定义倍增时间：插画，图标动画，如手表佩戴指引动画等。  

![Design](/img/design/basic-time-unit_2.png)

### 动画曲线  

在物理世界中，元素不会立即移动或停止。相反，他们受摩擦力、重力等自然力影响，需要时间来加速和减速，也就是缓动。

- 位移动效  

物体在可视范围内的运动采用的是ease - in - out ，cubic-bezier(.42,0,.58,1)  

![Design](/img/design/01f5329d4b05cb88f51a632cee8d3920.gif)

- 入场动效  

物体进入可视范围内的运动采用的是 ease - out，cubic-bezier(0,0,.58,1)  

![Design](/img/design/ffd916968c3ec5067aad82f0daed31bf.gif)

- 出场动效  

物体移出可视范围的运动采用 ease - in，cubic-bezier(.42,0,1,1)  

![Design](/img/design/53d015d2268b4a278da7ffba44777293.gif)