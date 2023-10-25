---
sidebar_label: 列表
---

# 列表

## 通常列表  

通常列表是由相同宽度的数据项构成的有限序列，即按照一定的线性顺序，排列而成的数据项集合。

### 构成  

列表的布局分左右两部分。左侧为信息区域，包含图标和文字，文字部分由主标题和副标题组成。右侧为操作区域，包含操作按钮和状态显示。  

![Design](/img/design/composition.png)


### 不可操作列表  

只包含文字描述，不能进入到下一级且没有操作的列表项。  

![Design](/img/design/inoperable-list.png)

### 可操作列表  

用户可根据描述进行进一步操作的列表项，它由示意图标、描述文字和操作选项组成，其中操作选项又包含进入、开关、单选和多选；  

![Design](/img/design/operable-list.png)

列表联级：通过当前项的操作选项（开关），控制当前序列的展开和收起，从而用来显示该项目的更多信息和操作。  

![Design](/img/design/operable-list_2.png)

### 辅助文字  

列表子标题：分类标题固定与顶部的距离，如果超长换行处理。  

![Design](/img/design/auxiliary-text.png)

![Design](/img/design/auxiliary-text_2.png)

说明文字：文本框中说明文字与底部保持固定距离，如果超长换行处理，说明文字不可被点击。  

![Design](/img/design/auxiliary-text_3.png)

### 列表排序  

对列表项进行拖拽操作，快速修改列表项顺序。  

![Design](/img/design/list-sorting.png)

### 使用规则  

- 用户可以从列表中选择一个项目以查看详细信息或执行更多任务。
- 一个列表页面中，可以包含多个不同的列表项，列表项可以设定不同的高度。  

![Design](/img/design/list-rules-for-use_1.png)  

- 列表标题在不同设备上会有不同的布局方案  

![Design](/img/design/list-rules-for-use_2.png)  

>① 圆形屏幕的标题于列表的上方
>
>② 方形屏幕的标题在状态栏上

## 功能列表

功能列表是一个用于将不同功能入口按照一定的线性顺序，排列而成的集合。

### 构成  

功能列表的布局分左右两部分。由左侧图标、右侧文字所构成。

### 应用列表  

应用列表包括应用程序的图标及其名称。  

![Design](/img/design/application-list.png)

### 运动列表  

运动列表包含运动类型图标及运动名称。  

![Design](/img/design/list-of-exercises.png)

### 使用规则  

- 用户可以从功能列表中选择一个项目以进入某个功能
- 一个功能列表页面中，应统一配有图标与名称
- 功能列表文字最多显示两行，如果超过两行，超出的内容使用省略号...表示  

![Design](/img/design/list-rules-for-use_3.png)  

>① 超出的名称文本截断后结尾加“...”
>
>② 名称文本不应超出2行