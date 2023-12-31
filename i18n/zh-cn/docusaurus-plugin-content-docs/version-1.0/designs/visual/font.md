---
sidebar_label: 字体
---

# 字体

文字是信息最直接最清晰的表达方式，而字体则直接决定了文字信息能否正确、准确地传达，字体通过字号、字重、大小写、字体风格等差异来区分信息的层次和权重。

Zepp OS 的主字体使用 noto sans ，特殊字体的使用规范见下文 [特殊字体](#特殊字体) 部分。

## 字号

基于调研用户在不同场景下使用可穿戴设备的观看距离：25 厘米 \~ 50 厘米，以及最佳阅读角度：5 弧分，通过结合Snellen理论，推导出在 1.45" AMOLED 屏，分辨率为480\* 480，PPI 331的设备上， Zepp OS 的主字体的最小字号的计算公式 ：Caption1 = 0.0143\*331\*5 = 23.6665 ，取接近较大整数 24px，即此屏幕尺寸主字体最小字号为 24px，通过此公式可计算中不同屏幕尺寸的设备的最小字号，来保证用户在阅读过程中的文字可读性。

| 字号样式名  | 圆屏设备480 | 圆屏设备466 | 方屏设备390 |
| ----------- | ----------- | ----------- | ----------- |
| Caption2    | 24          | 23          | 24          |
| Caption1    | 28          | 27          | 28          |
| Subheadline | 32          | 31          | 32          |
| Body        | 36          | 35          | 36          |
| Title       | 40          | 39          | 40          |

字阶是指一组保持一定规律变化的不同尺寸的字体，不同屏幕尺寸对应不同组字阶，我们使用等差数列定义同组字阶的字号大小，从而更好地区分系统内容的信息层级，满足用户更舒适流畅的阅读体验。

480px \* 480px 的设备的字阶规范表如下。

![Design](/img/design/6270f1ee20fb3803d65ad33d17d84070.png)

## 文本框高度计算规则

文本框是包裹内容文字的容器。一行文本高度的计算规则：行高= 字号 + 10。

![Design](/img/design/df7325701750e5461b133f0c657e6281.png)

## 特殊字体

DIN1451

特殊数字使用 DIN1451MittelschriftAlternat。

![Design](/img/design/76f2c322b070b586738376cc306ddcbb.png)

ZEPP OS NUMBER

Zepp os number 字体在运动模块使用，它可使用户在运动中获得更好的阅读体验。

![Design](/img/design/ea373c016dcfd20bbd27734e1d1c19a2.png)

## 字体使用规则

界面内容避免使用小于24号的文本，较为突出的大数字使用特殊数字字体。

![Design](/img/design/ae9beade365be434d99d744fa1284dd5.png)

![Design](/img/design/8a1388cbb9eb536f9dce4875241fd3ee.png)

![Design](/img/design/0046a33752f786962c69c3d74ada078b.png)

Zepp OS 相关字体资源下载请查看：[字体资源](../download.md)。
