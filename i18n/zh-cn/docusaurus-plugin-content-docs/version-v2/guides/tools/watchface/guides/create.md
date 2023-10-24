---
title: 创建表盘
sidebar_label: 创建表盘
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# 创建表盘

下面我们一起制作一款简单的表盘 —— ”艺术创意-Hi“，效果如下：

<img src={useBaseUrl('../../../../../../../img/zh-cn/docs/watchface/example.png')} width="30%" />

## 准备工作

1. 一台安装有浏览器的电脑，推荐使用 chrome 浏览器
2. 准备切图资源。<a href="https://upload-cdn.huami.com/20211103/6fd50ae2ff34fde02c996d5b8602007e.zip" target="_self" download>资源.zip</a>
3. 进入[表盘制作工具界面](https://watchface.zepp.com)。根据页面相关提示完成开发者注册、登录

## 开始制作

### 1. 新建表盘

1. 访问 [https://watchface.zepp.com](https://watchface.zepp.com)
2. 点击顶部导航栏中的”新建“按钮，跳转到新建页面
3. 在新建页面中输入表盘名称，选择表盘类型、表盘分辨率（[设备分辨率信息](../../../../../reference/related-resources/device-list)）、表盘支持语言等信息，上传表盘支持语言对应的预览图
4. 点击“创建”按钮。创建完成后会进入表盘详情页。

![create.png](/img/zh-cn/docs/watchface/lesson/create.png)

### 2.添加背景图片

1. 点击“背景”，在弹出的下拉菜单中选择“背景”
2. 点击屏幕左侧刚添加进来的”背景“模块
3. 在右侧配置面板中上传背景图

![addBg.png](/img/zh-cn/docs/watchface/lesson/add_bg.png)

### 3. 添加心率

1. 选择“运动健康” - “心率”，添加“心率”模块
2. 在右侧的配置面板中配置“数据为空”图片（获取不到数据时显示的缺省图片）和 10 张数字切图（0 - 9）
3. 在界面中心预览区域可以看到数字图片的显示，调整图片位置为（110, 80）及对齐方式为“左右居中”

![addHr.png](/img/zh-cn/docs/watchface/lesson/add_hr.png)

<img src={useBaseUrl('/img/zh-cn/docs/watchface/lesson/add_hr_pos.png')} width="300" />

### 4. 添加指针时间

1. 点击“时间”，在弹出的下拉菜单中选择”指针时间“
2. 点击左侧面板中的”指针时间“-”时针“，在最右侧配置面板中添加时针图片（素材中 pointer/hour.png）
3. 在右侧配置面板中输入以下坐标信息：

- 表盘旋转中心 —— 整个表盘的中心点，当前表盘分辨率为 454 x 454，所以表盘旋转中心坐标为(227, 227)
- 指针旋转中心 —— 指针图片上旋转点的坐标，参考下图可看出当前指针的指针旋转中心坐标为(25, 227)

<p>
  <img src={useBaseUrl('/img/zh-cn/docs/watchface/lesson/pointer_pos_info.png')} width="300" />
</p>

同理，我们依次配置分针和秒针，可在右侧配置面板调整时分秒针的预览值，最终效果如下：

![addPointer.png](/img/zh-cn/docs/watchface/lesson/add_pointer.png)

### 5. 保存表盘

点击页面上的“保存”按钮，保存当前表盘配置
