---
title: Zepp OS 3.5 新特性
sidebar_label: Zepp OS 3.5 新特性
---

import useBaseUrl from '@docusaurus/useBaseUrl'

Zepp OS 3.5 带来了非常多激动人心的新特性。

## 运动扩展

「运动扩展」是 Zepp OS 3.5 版本的新特性，以插件的形式扩展系统应用「运动」的功能，旨在提升用户在运动中的体验。

该功能允许开发者使用 Zepp OS JS API 创建「运动扩展」插件，在系统应用「运动」中为用户提供更多功能，包括不限于运动数据、运动图表、指南针、GoPro 等应用。

<img src={useBaseUrl('/img/docs/workout-extension/sample_both.jpeg')} width="80%" title="download_zepp" />

:::info
目前「运动扩展」功能在 Amazfit T-Rex 3、Amazfit Cheetah Pro、Amazfit Cheetah (Round)、Amazfit Cheetah Square、Amazfit T-Rex Ultra、Amazfit Falcon 设备上可以体验。
:::

「运动扩展」有以下核心价值：

1. **可定制性**

- **个性化 UI 设计**：开发者可以利用 Zepp OS 的强大控件能力，完全自由地绘制和定制视图。
- **专属运动数据组合**：开发者能够根据个人的运动类型和偏好，设计并选择显示的数据组合，使界面更加贴合特定运动的需求。
- **即时功能拓展**：无需通过空中下载技术（OTA），用户即可为设备增加新的运动功能。

2. **实时且丰富的运动数据**

- **实时关键指标监控**：在锻炼或训练中，开发者可以实时监控心率、速度、距离等关键指标，这有助于他们及时调整运动强度和策略，以优化训练效果。
- **深入的高阶数据分析**：提供更高层次和多维度的运动数据，帮助用户深入理解自己的运动表现，进一步提升运动技能和成绩。

3. **功能扩展性**

- **蓝牙连接能力**：智能手表能够与外部设备如踏频传感器进行连接，获取更全面的数据，从而增强运动分析的准确性和深度。
- **网络功能**：智能手表将能够利用网络连接实时同步数据到云端，进行更复杂的数据处理和分析。

详情参考 [运动扩展](../workout-extension/intro.mdx)

## 接口能力新增

### UI 和交互相关

- [Button 控件](../../reference/device-app-api/newAPI/ui/widget/BUTTON.mdx)
  - 支持设置自定义字体
- [createModal](../../reference/device-app-api/newAPI/interaction/createModal.mdx)
  - 增强弹窗的形式，丰富参数可以实现多种样式
- [scrollTo](../../reference/device-app-api/newAPI/page/scrollTo.mdx)
  - 新增动画配置
- [setScrollMode](../../reference/device-app-api/newAPI/page/setScrollMode.mdx)
  - 新增页面回弹的 bounce 效果
- [控件动画](../../reference/device-app-api/newAPI/ui/widgetAnimations.mdx)
  - 新增 `anim_repeat_func` 回调函数，让开发者更精确响应动画

### 传感器相关

- [SCREEN 传感器](../../reference/device-app-api/newAPI/sensor/Screen.mdx)
  - 新增 `getLight` 方法，可以测量光照强度
- [BUZZ 传感器](../../reference/device-app-api/newAPI/sensor/Buzzer.mdx)
  - 新增蜂鸣器
- [VIBRATOR 传感器](../../reference/device-app-api/newAPI/sensor/Vibrator.mdx)
  - 新增震动模式，并且可以设置多个场景，做到连续震动
- [SystemSounds 传感器](../../reference/device-app-api/newAPI/sensor/SystemSounds.mdx)
  - 播放系统铃声
- [Time 传感器](../../reference/device-app-api/newAPI/sensor/Time.mdx)
  - 新增 `onPerHourEnd` 事件，每小时结束触发一次

### 蓝牙相关

- [mstStartScan](../../reference/device-app-api/newAPI/ble/mstStartScan.mdx)
  - 新增扫描超时参数，可以更好控制扫描时间

### 运动扩展相关

- [SPORT_DATA 控件](../../reference/device-app-api/newAPI/ui/widget/SPORT_DATA.mdx)
  - 在运动扩展应用中展示实时运动数据
- [getSportData](../../reference/device-app-api/newAPI/app-access/getSportData.mdx)
  - 新增获取运动数据的接口
