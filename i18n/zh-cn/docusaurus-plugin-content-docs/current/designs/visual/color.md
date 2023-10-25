---
sidebar_label: 色彩
---

# 色彩

色彩是用户感知界面信息及产品特征的直观媒介，Zepp OS 的色彩体系源于自然和生活。通过提取温暖生活场景的色彩和光影特征：透过半透明玻璃的柔和的光线，投射在玻璃上模糊的色彩和斑驳的倒影。获得不同类型色板，指导和规范色彩应用场景。

## 设计原则

- Zepp OS 3.0 色彩体系是多彩的、充满温度感的。整体的色彩搭配要让用户感受到轻盈、放松，调动愉悦美好情绪。
- 增加系统内颜色多样性，强化多彩氛围，为不同功能模块设定不同应用主题色，提升应用的独特性，让用户拥有更多个性化的想象空间，以满足多元化需求。
- 应充分理解不同色彩的心理效应，在使用上符合色彩心理学的基础原则。在色彩搭配上，应用图标与对应功能页面的色彩使用，要保证连续性和一致性。
- 建议在不同使用场景下对所用颜色进行测试，提高界面可用性。

## 系统颜色

关键、警示、控件、基础图形等颜色。

![Design](/img/design/color-cn.png)

**使用示例:**

![Design](/img/design/2ec79d5687d9bc9519330972192306fb.png)

![Design](/img/design/2c8a976e0bdf89ea45fbf35e7b8fbe7c.png)

>① 开关
>
>② 删除按钮

## 文本色

标题、副标题、说明文本、按钮文字等文本内容颜色。

![Design](/img/design/text-color-cn.png)

**使用示例:**

![Design](/img/design/6bea6c32e35237ddbafb24ae0e68cd7d.png)

![Design](/img/design/6036996313488c12f28286ae985ce3c3.png)

## 辅助颜色

数据图表颜色、功能内特殊颜色等。

![Design](/img/design/secondary-colors-cn.png)

**使用示例：**

![Design](/img/design/usage-examples_1.png)

![Design](/img/design/usage-examples_2.png)

## 颜色变化

页面元素的颜色应跟随其本身属性或状态而变化，例如点按态、禁用态等。

- 对于「点按态」，在触发点按动作时，控件元素的整体颜色亮度降低 28.6%，完成点按动作后，回复正常状态。

![Design](/img/design/color-status-change_1.png)

![Design](/img/design/color-status-change_2.png)

>① ② 列表：正常状态
>
>③ ④ 列表：点按状态

![Design](/img/design/color-status-change_3.png)

>① ② ③ 按钮：正常状态
>
>④ ⑤ ⑥ 按钮：点按状态

- 对于「禁用态」，控件元素的整体颜色亮度降低 50%，同时，对于高亮状态的控件，应替换高亮色为灰度颜色。

![Design](/img/design/color-status-change_4.png)

![Design](/img/design/color-status-change_5.png)

>① 单选按钮：正常状态
>② 单选按钮：禁用状态

## 应用主题色/品牌色

通过在视觉元素（功能图标、按钮、插图等）上使用主题色/品牌色，为应用赋予独特的色彩特征，以展示应用的独特个性或品牌。在设定应用的主题颜色时，建议与应用图标的色彩设计保持连续性和一致性。

**使用示例：为不同的应用功能页面设定不同主题颜色**

![Design](/img/design/application-theme-color_1.png)

>① 血氧功能副屏，按钮与页面动画元素使用红色
>
>② 闹钟提醒页面，闹钟图标与按钮使用蓝绿色
>
>③ 世界时钟副屏，按钮与插图使用蓝色

**使用示例：应用功能图标与其功能页面，在色彩使用上保持连续性和一致性。**

![Design](/img/design/application-theme-color_2.png)

![Design](/img/design/application-theme-color_3.png)

>① 呼吸训练应用图标和呼吸训练功能副屏
>
>② 心率应用图标和心率功能副屏

## 色彩可用性

为保证信息可读性和视觉元素显示的完整度，请在使用色彩时遵循以下原则：

- 避免大面积使用低灰度颜色（ RGB 值在1~46 之间）。

![Design](/img/design/5e214d0946239d432a89fd7b096a54ae.png)

>①不要让 RGB 值处于 1~46 之间

-避免使用跨度过大的渐变色。同时，建议对所使用的颜色进行实机测试，以保证颜色的正确显示

![Design](/img/design/6c67050f13d6d74f5f19e46a73f35310.png)

>①不要使用跨度过大的渐变。

- 前景内容与背景的色彩对比度建议≥ 3:1，更多信息请参考[无障碍使用](../accessibility/color.md).

![Design](/img/design/3ff33fdf59147d346c3fdea4f718c9ca.png)

>①按钮文字:按钮背景 = 12.63
>
>②按钮文字:按钮背景 = 1.74
>
>③前景内容与背景的对比度不应该小于3:1
