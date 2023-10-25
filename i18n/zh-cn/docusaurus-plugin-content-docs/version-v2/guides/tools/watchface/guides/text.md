---
title: 文本组件
sidebar_label: 文本组件
---

# 文本组件

新建一款表盘(或编辑已有的一款表盘)，在表盘制作工具顶部工具栏中，选择“组件 - 文本”模块，在左侧菜单中选中“Text”

![addText.png](/img/zh-cn/docs/guides/tools/watchface/text_add_text_zh.png)

## 普通文本

在右侧菜单中配置相关参数

- 修改“Placement”坐标为(100,40)
- 修改“Dimension”宽度“W”为 100，高度“H”为 40
- 修改“Text Field”内容为 Time
- 可修改“Color”、“Text Appearance”，此处取默认值

![textNormalPreview.png](/img/zh-cn/docs/guides/tools/watchface/text_normal_preview_zh.png)

## Tag 文本

在顶部菜单中选择“组件 - 文本”，新增一个文本组件，选中该组件，配置相关参数

- 修改“Placement”坐标为(190,113)
- 修改对齐方式“Alignment”，“Horizontal align”、“Vertical align”均配置为“Center”
- 修改“Text Field”，点击“Tag”

![textAddTag.png](/img/docs/guides/tools/watchface/text_add_tag.png)

- 在弹出框中，删除默认内容，点击“`[HOUR_24_Z]`”标签，输入“:”，再点击“`[MIN_Z]`”标签，点击“OK”保存内容

![textDialog.png](/img/docs/guides/tools/watchface/text_dialog.png)

- 修改“Text Appearance”中“Font Size”为 24
- 效果如图

![textTagPreview.png](/img/zh-cn/docs/guides/tools/watchface/text_tag_preview_zh.png)

## 注意事项

1. 表盘中，文本实际宽度大于设定宽度时，文本以走马灯方式轮播
2. Tag 文本，支持多个 Tag、Tag 与文本同时使用