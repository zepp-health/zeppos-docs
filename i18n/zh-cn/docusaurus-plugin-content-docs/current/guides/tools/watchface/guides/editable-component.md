---
title: 可编辑数据组件
sidebar_label: 可编辑数据组件
---

# 可编辑数据组件

数据可编辑组件支持在手表上切换表盘数据项。在手表上长按表盘进入编辑态，点击小铅笔图标可以在数据编辑页面通过上下滑动或者点击的方式切换数据预览图（心率、步数、卡路里），退出编辑态后显示真实数据。

## 目标

使用提供的资源包从零制作一款可编辑表盘。

**最终成品**：支持 **心率、步数、卡路里** 三个数据项切换显示的圆形表盘，包含指针时钟、日期、可编辑组件和背景图。

## 资源清单

资源包：[assets.zip](https://upload-cdn.zepp.com/watchface-maker/20260708/assets.zip)

```
assets/
├── images/
│   ├── preview.png        # 表盘预览图 (480×480)
│   ├── font/              # 数字字体图片 (共 11 张: 0-9 + 无数据时的缺省占位图)
│   ├── pointer/           # 指针图片 (时 h / 分 m / 指针 pointer_progress)
│   ├── date/              # 日期数字图片 (0-9)
│   ├── img/
│   │   └── bg.png         # 表盘背景图 (480×480)
│   ├── edit/
│   │   ├── select.png     # 编辑模式选中态背景图
│   │   ├── tip.png        # 组件切换提示文字背景图
│   │   ├── mask100.png    # 遮罩层- 100% 全透明
│   │   └── mask70.png     # 遮罩层- 70% 透明
│   ├── widgetText/        # 数据项文本图标
│   │   ├── step.png
│   │   ├── cal.png
│   │   └── heart.png
│   └── widgetPreview/     # 编辑模式数据项预览图
│       ├── steps.png
│       ├── cal.png
│       └── hr.png
```

## 第一步：创建表盘

进入表盘制作工具 - 表盘创建页。

1. 填写表盘名称，如"custom data field"
2. 点击创建按钮，进入设计器主页面

## 第二步：配置背景

1. 从组件下拉菜单选择"Background"组件并添加
2. 左侧图层树 → 点击"背景" → 右侧面板设置：
   - **显示类型**：选择 `Image Background`
   - **背景图片**：上传 `assets/images/img/bg.png`

## 第三步：配置日期

1. 从组件下拉菜单选择"Date"组件并添加
2. 左侧图层树 → 点击添加的"Date" → 勾选 Day → 右侧面板配置：
   - **数字图片**：批量上传 `assets/images/date/0.png` ~ `9.png`
   - **显示位置**：x: 357, y: 231

## 第四步：配置可编辑组件

### 添加可编辑组件

从组件下拉菜单选择 "Editable" / "Editable Component" 并添加。

### 配置可切换的 Data Field

1. 点击左侧图层区"Editable Component"组件，勾选需要切换的子组件：
   - **Heart Rate** 及其展示形式：**Data**、**Icon**、**Pointer Progress**

2. 配置子组件数据：

   **数字文本（Data）**

   | 参数 | 值 |
   |---|---|
   | No data | 上传 `none.png` |
   | 字体图片 | 上传 `assets/images/font/0.png` ~ `9.png` |
   | 位置 | 心率 (214, 120) |
   | 对齐 | center（居中对齐） |

   > **提示**：其他数据项（卡路里、步数）的数字文本配置与 Heart Rate 相同，可复用同一组字体图片。

   **图标（Icon）**

   | 参数 | 值 |
   |---|---|
   | HEART_RATE 图标 | `assets/images/widgetText/heart.png` |
   | 位置 | x: 189, y: 152 |

   **指针进度（Pointer Progress）**

   | 参数 | 值 |
   |---|---|
   | 圆心 X | 240 |
   | 圆心 Y | 334 |
   | 指针图片 | 上传 `assets/images/pointer/pointer_progress.png` |
   | 指针位置 | x: 16, y: 80 |
   | 起始角度 | 0 |
   | 结束角度 | 360 |

   > **提示**：所有数据项共享同一个指针进度条配置。三个数据项共用一个指针图片。

3. 同样操作设置卡路里、步数，仅文本组件因数据位数不同显示坐标存在差异：

   **数字文本（Data）**

   | 参数 | 值 |
   |---|---|
   | No data | 上传 `none.png` |
   | 字体图片 | 使用已上传的心率数字图片，或上传 `assets/images/font/0.png` ~ `9.png` |
   | 位置 | 卡路里 (206, 120)，步数 (200, 120) |
   | 对齐 | center（居中对齐） |

### 配置编辑模式显示元素

点击预览区上方工具"Edit"切换到编辑预览模式，右侧面板配置以下参数：

1. **触控区域**

   上传数据组件选中态背景图 `assets/images/edit/select.png`，宽高会根据图片尺寸自动填充。

   | 参数 | 值 |
   |---|---|
   | 位置 X | 184 |
   | 位置 Y | 102 |
   | 宽度 | 113 |
   | 高度 | 80 |

2. **提示标签**

   上传显示组件名称的背景图 `assets/images/edit/tip.png`。

   | 参数 | 值 |
   |---|---|
   | 标签位置 X | 199 |
   | 标签位置 Y | 63 |
   | 标签宽度 | 89 |
   | 标签高度 | 36 |
   | 文字显示宽度 | 89 |
   | 文字边距 | 10 |

3. **配置默认类型**

   在"默认类型"下拉中选择一个数据项作为手表端首次展示的默认类型（例如 Heart Rate）。

4. **数据预览图**

   每个数据项在编辑态画布上显示一张预览图。上传对应的 widgetPreview 图片：

   | 数据项 | 预览图文件 |
   |---|---|
   | STEP | `assets/images/widgetPreview/steps.png` |
   | CALORIE | `assets/images/widgetPreview/cal.png` |
   | HEART_RATE | `assets/images/widgetPreview/hr.png` |

### 添加遮罩层

左侧图层 → 点击"Component Mask"遮罩层 → 配置：

| 参数 | 值 |
|---|---|
| 遮罩层图片 | `assets/images/edit/mask100.png` |
| 遮罩图片 | `assets/images/edit/mask70.png` |

**遮罩层的作用：**
- **遮罩层图片**（mask100）：可编辑组件区域外覆盖层，使未选中区域变暗，镂空
- **遮罩图片**（mask70）：选中状态下组件外部的半透明遮罩，镂空

## 第五步：添加指针时钟

1. 从组件下拉菜单选择"Pointer Time"组件并添加
2. 左侧图层树 → 勾选 Hour Hand/Minute Hand → 右侧面板配置：

   **时针（hour）**

   | 参数 | 值 |
   |---|---|
   | 中心位置 | x: 240, y: 240 |
   | 指针图片 | `assets/images/pointer/h.png` |
   | 指针位置 | x: 33, y: 240 |

   **分针（minute）**

   | 参数 | 值 |
   |---|---|
   | 中心位置 | x: 240, y: 240 |
   | 指针图片 | `assets/images/pointer/m.png` |
   | 指针位置 | x: 27, y: 240 |

## 第六步：真机验证

1. 点击"Run on device"
2. 上传预览图 `assets/images/preview.png`
3. [扫码安装到设备](scanCode.md)
