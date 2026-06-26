---
sidebar_label: 字体
---

# 字体

在字体选择及应用时，需要确保文本显示清晰、信息层级清晰、重要信息突出。Zepp OS 系统使用以下字体：

- Noto Sans
- Zepp OS Number
- Zepp OS Number Condensed

## Noto Sans

Noto Sans 是 Zepp OS 的系统默认字体，包括 Regular 和 Medium 两个字重。主要用于系统和功能界面、一般内容和信息的文本显示。

![Noto Sans 示例](/img/design/font_specification1.png)

## Zepp OS Number

在部分场景中，使用 Zepp OS Number 字体来突出显示运动或健康类关键数据信息，以吸引用户注意力。该字体包含 Regular 和 Bold 两个字重，请根据具体场景选择使用。

![Zepp OS Number 示例](/img/design/font_specification2.png)

![Zepp OS Number 示例](/img/design/font_specification3.png)

>① 心率应用中的心率数值，使用 Zepp OS Number 字体
>
>② 今日活动应用中的步数数值，使用 Zepp OS Number 字体

## Zepp OS Number Condensed

在运动相关功能中，关键数值信息使用 Zepp OS Number Condensed 字体进行显示，例如「配速」「距离」等数值信息。该字体包含 Regular 和 Bold 两个字重，请根据具体场景选择使用。

![Zepp OS Number Condensed 示例](/img/design/font_specification4.png)

![Zepp OS Number Condensed 示例](/img/design/font_specification5.png)

>① 运动过程中，数据类信息使用 Zepp OS Number Condensed 字体，以实现更清晰的数值识别与信息强化。
>
>② 运动完成后，使用 Zepp OS Number Condensed 字体，强化用户对关键结果的关注

## 行高设置

为保障多语言界面的可读性与视觉一致性，系统默认字体 Noto Sans 在不同语言环境下采用分级设定的行高参数。根据各语言文字的特征和排版节奏，行高控制分为以下三类：

- ① 类英语语言  建议行高：字号*116%
  此类语言字形结构接近英语，包含使用拉丁字母（不含越南语）、希腊字母、西里尔字母、希伯来文、亚美尼亚文和格鲁吉亚文。
- ② 高位语言  建议行高：字号*132%
  此类语言包含较高的字形结构，需要额外垂直空间，常见于南亚、东南亚及部分东语言系统。
- ③ 紧凑语言  建议行高：字号*125%
  中文、日文、韩文属于高密度方块字结构，尽管字符整体视觉占比高，但其垂直需求与高位语言不同，需单独设定以维持文字块间的节奏与呼吸感。

| 类别 | 语言 | 字体行高 |
| --- | --- | --- |
| 拉丁类文字 | 英语、西班牙语、法语、德语、意大利语、葡萄牙语（巴西/葡萄牙）、荷兰语、瑞典语、挪威语、丹麦语、芬兰语、波兰语、捷克语、匈牙利语、罗马尼亚语等 | 116% |
| 高位字母文字 | 阿拉伯语、印地语、泰语、越南语等 | 132% |
| 密集 CJK 文字 | 中文（简体）、中文（繁体，香港）、中文（繁体，台湾）、日语、韩语 | 125% |

![行高设置示例](/img/design/font_specification6.png)

对于特殊字体 Zepp OS Number 和 Zepp OS Number Condensed，建议行高为 100%。

![特殊字体行高示例](/img/design/font_specification7.png)

Zepp OS 相关字体资源下载请查看：[字体资源](../download.md)。
