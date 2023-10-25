---
title: 时间
sidebar_label: 时间
---

# 时间
## 数字时间
新建一款表盘（或编辑已有的一款表盘），从表盘制作工具顶部工具栏中添加“时间 - 数字时间”模块，在左侧菜单中选中“数字时间”

![timeAddNumber.png](/img/zh-cn/docs/guides/tools/watchface/time_add_number_zh.png)

### 添加“时”

展开“数字时间”下拉框，选中“时”，在右侧菜单中添加相关数据

![timeHrChoose.png](/img/zh-cn/docs/guides/tools/watchface/time_hr_choose_zh.png)

- 添加“数据为空”时的图片
- 添加“数字切图”，切图名按序号（00 - 09）标注，防止乱序
- 确定数字图片的起始坐标，填写坐标为(155,76)

![timeAddNumber.png](/img/zh-cn/docs/guides/tools/watchface/time_hr_add_number_zh.png)

- 可选择“对齐方式”，此处选择“左对齐”

![timeAlign.png](/img/zh-cn/docs/guides/tools/watchface/time_align_zh.png)

- 可配置“间隔”（数字与数字间、数字与单位间的间隔），此处为 0
- 可配置“格式”（数字是否补零），此处选择补零
- 可增加“单位图片”，此处为空

![timeFormatter.png](/img/zh-cn/docs/guides/tools/watchface/time_formatter_zh.png)

- 可添加“数据类型图片”，确定数据类型图片的起始坐标，填写坐标为(235,94)

![timeNumberType.png](/img/zh-cn/docs/guides/tools/watchface/time_number_type_zh.png)

- 改变“时钟预览”对应的数字，切换预览效果

![timeHrChangePreview.png](/img/zh-cn/docs/guides/tools/watchface/time_hr_change_preview_zh.png)

### 添加“分”、“秒”

- 按同样的方式，添加“分”对应的数据
- 如本表盘中已上传过数字切图，可选择已上传的切图

![timeNumberUseUploaded.png](/img/zh-cn/docs/guides/tools/watchface/time_number_use_uploaded_zh.png)

- 填写“分”的坐标为(245,76)，效果如图 

![timeNumberPreview.png](/img/docs/guides/tools/watchface/time_number_preview.png)

- 可参考上述步骤添加“秒”，此处不做演示

### 添加“上午下午”

- 展开“数字时间”下拉框，选中“上午下午”

![timeApmChoose.png](/img/zh-cn/docs/guides/tools/watchface/time_apm_choose_zh.png)

- 可切换语言，选择语言“英文”

![timeApmLanguage.png](/img/zh-cn/docs/guides/tools/watchface/time_apm_lang_zh.png)

- 上传对应图片，并修改上午和下午坐标均为(149,156)，切换“上下午预览”，预览表盘效果

![timeApmPreview.png](/img/zh-cn/docs/guides/tools/watchface/time_apm_preview_zh.png)

### 添加“跟随”

- 时、分、秒，后一元素可选择跟随前一元素

![timeFollow.png](/img/zh-cn/docs/guides/tools/watchface/time_follow_zh.png)

- 选择跟随后，该元素的“数字切图”、“对齐方式”、“间隔”无法编辑且跟随前一元素

![timeFollowPreview.png](/img/docs/guides/tools/watchface/time_follow_preview.png)


## 指针时间

新建一款表盘（或编辑已有的一款表盘），从表盘制作工具顶部工具栏中添加“时间 - 指针时间”模块，在左侧菜单中选中“指针时间”

![timeAddPoint.png](/img/zh-cn/docs/guides/tools/watchface/time_point_choose_zh.png)

### 修改“时”

展开“指针时间”下拉框，选中“时针”，在右侧菜单中添加相关数据

- 上传时针图片
- 填写“表盘旋转中心”坐标为(240,240)，填写“指针旋转中心”坐标为(33,164)

![timePointHr.png](/img/zh-cn/docs/guides/tools/watchface/time_point_hr_zh.png)

>表盘旋转中心 —— 整个表盘的中心点，如表盘分辨率为 480 x 480，则表盘旋转中心坐标为(240, 240)
>
>指针旋转中心 —— 指针图片上旋转点相对指针图片左上角的坐标，参考下图

![timePointCenter.png](/img/docs/guides/tools/watchface/time_point_center.png)

### 修改“分针”、“秒针”

- 按同样的方式，添加分针和秒针
- 填写分针的“表盘旋转中心”坐标为(240,240)，“指针旋转中心”坐标为(33,212)

![timePointMin.png](/img/zh-cn/docs/guides/tools/watchface/time_point_min_zh.png)

- 填写秒针的“表盘旋转中心”坐标为(240,240)，“指针旋转中心”坐标为(17,233)

![timePointSec.png](/img/zh-cn/docs/guides/tools/watchface/time_point_sec_zh.png)

- 完成后，可以选择任意一个指针进行预览，查看效果

![timePointPreview.png](/img/docs/guides/tools/watchface/time_point_previw.png)

## 注意事项

无
