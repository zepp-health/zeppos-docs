---
title: 版本历史
sidebar_label: 版本历史
---

# 版本历史

### V4.8.2 (2022 年 11 月 6 日)

#### 🚀 新增

1. 移除表盘 “通用” 语言，原 “通用” 语言表盘转换为简体中文、繁体中文、英文表盘
1. GT2 表盘温度仅支持上传一张单位图片"°"

#### 📈 优化

1. 支持一次性清除全部已上传星期图片
1. Text 组件添加区域线显示
1. 安装表盘若表盘没有预览图先提示配置预览图

---

### V4.8.1 (2022 年 10 月 19 日)

#### 🚀 新增

1. 去除新建页及编辑页预览图设置
1. 表盘预览图在导出时由系统生成或者自定义
1. 弃用 GT2 设备右对齐及居中对齐方式


#### 📈 优化

1. 导出预览图时根据设备圆角进行裁剪

#### 🔧 修复

1. 修复可编辑组件跳转热区 bug

---

### V4.8.0 (2022 年 09 月 14 日)

#### 🚀 新增

1. 导出时可指定表盘包支持哪些设备
1. 新增网格、坐标、控件宽度和高度等信息展示

#### 🔧 修复

1. 导出的预览图中缺少上下午
1. 偶现二维码生成失败，一直处于 loading 状态
1. GT2 表盘设置“跟随”，图片资源错误

---

### V4.7.9 (2022 年 08 月 31 日)

#### 🚀 新增

1. 新建表盘时预览图改为非必填，导出支持选择由系统生成预览图还是自定义上传预览图
1. 新建表盘表盘名称扩充至30个字符
1. 教程：新增[文档教程](https://docs.zepp.com/zh-cn/docs/guides/tools/watchface/guides/date/) - 指针时间、日期、星期及[视频教程](https://www.youtube.com/watch?v=luCC6byMxK8&ab_channel=ZeppHealthDeveloper) - ”Adding a Date and Week to the Watchface“

#### 📈 优化

1. 优化用户信息展示，显示用户账号ID、头像、昵称、邮箱或手机号等信息

#### 🔧 修复

1. 修复工具预览区外围显示 1 像素黑色边框问题
1. 修复日期与其它 tag 组合，其它 tag 显示为 undefined

---

### V4.7.8 (2022 年 08 月 22 日)

#### 🚀 新增

1. 新增表盘背景、时间、文本组件教程文档
1. 新增可编辑组件的外边距设置
1. 支持缩放时展示目标设备名称

#### 📈 优化

1. 优化表盘列表的搜索方式
1. 优化热区跳转

#### 🔧 修复

1. 修复一些已知问题

---

### V4.7.7 (2022 年 08 月 03 日)

#### 🚀 新增

1. 新增表盘测试教程文档
1. 支持图片下载
1. 支持修改表盘语言 (Zepp OS)
1. 文本组件新增秒相关 Tag 表达式 (Zepp OS)
1. 示例表盘新增动画表盘和可编辑组件表盘

#### 📈 优化

1. 优化文本组件日期显示。支持按照手表设置的日期格式显示

#### 🔧 修复

1. 修复导出的预览图中缺少天气和图片进度

---

### V4.7.6 (2022 年 07 月 21 日)

#### 🚀 新增
1. 新增最大摄氧量、训练负荷控件（Zepp OS）
1. 文本组件 tag 表达式新增步数、消耗、星期 (Zepp OS)
1. 表盘详情页支持修改 appId
1. 表盘列表页支持通过 appId 搜索表盘

#### 📈 优化

1. 优化导出预览图功能
1. 优化表盘包名称格式

#### 🔧 修复

1. 修复一些已知问题

---

### V4.7.5 (2022 年 07 月 06 日)

#### 🚀 新增
1. 新增血氧、风力、压力控件（Zepp OS）
1. 文本组件添加 tag 表达式 (Zepp OS)
1. 表盘名称改为必填项
1. 多语言名称支持设置默认语言名称

#### 📈 优化

1. 提升缩放后表盘图片资源的图片质量，解决圆角图片锯齿问题

#### 🔧 修复

1. 修复图标层级高于指针层级
1. 修复动画控件不能仅播放一次 (Zepp OS)

---

### V4.7.4 (2022 年 06 月 22 日)

#### 🚀 新增

1. 新增气压控件（Zepp OS）

#### 📈 优化

1. 打包速度优化。速度提升约 30% (Zepp OS)
1. 表盘详情页效果区形状按照设备圆角展示

---

### V4.7.3 (2022 年 06 月 15 日)

#### 🚀 新增

1. 支持通过方向键移动控件位置
1. 导出预览图支持自定义尺寸及语言
1. 支持配置表盘的多语言名称
1. 新增可编辑背景使用文档

#### 📈 优化

1. 优化图片上传组件文件名称自动排序
1. 动画组件可全量清空所有图片
1. 距离单位支持设置公里和英里

#### 🔧 修复

1. 修复正常表盘和息屏表盘切换后图片层级改变问题
1. 修复数据组件层级问题

---

### V4.7.2 (2022 年 06 月 01 日)

#### 🚀 新增

1. 新增图片基础组件（Zepp OS)
1. 添加保存、撤销、重做快捷键支持
1. 支持高耗电表盘配置，可在新建和编辑表盘时进行配置（Zepp OS)

#### 📈 优化

1. 支持调整 Text 组件水平垂直方向对齐方式（Zepp OS)
1. 支持上传背景图和缩略图时进行裁剪或缩放
1. 更改跳转热区图片为非必填

#### 🔧 修复

1. 修复可编辑组件日 pai 界面显示问题

---
### V4.7.1 (2022 年 05 月 18 日)

#### 🚀 新增

1. 新增 Bridge 功能，目前支持通过 Bridge 安装表盘（Zepp OS)
1. 新增基础组件 - Text 组件（Zepp OS)
1. 新增退出登录功能
1. 支持按照设备圆角自动裁剪新建页表盘预览图

#### 📈 优化

1. 支持一键删除所有已上传图片
1. 支持常规色值进度逆时针效果预览

#### 🔧 修复

1. 温度单位图片取消可上传摄氏度（℃）和华氏度（℉），统一上传度（°）（Zepp OS）

---

### V4.7.0 (2022 年 04 月 27 日)

#### 🚀 新增

1. 新增意见反馈界面

#### 📈 优化

1. 域名变更为 [watchface.zepp.com](https://watchface.zepp.com)，原域名 [watchface.huami.com](https://watchface.huami.com) 仍可访问
1. 非 zepp os 与 zepp os 表盘提审界面统一到[开放平台](https://developer.zepp.com/#/admin/service/app/audit/form/create/watchface)提审
1. 优化指针旋转中心点在旋转时的抖动问题

---

### V4.6.9 (2022 年 04 月 13 日)

#### 🚀 新增

1. 新增站立、月相功能(Zepp OS)

#### 📈 优化

1. 农历优化：可单独配置节日/节气坐标(Zepp OS)

#### 🔧 修复

1. 修复部分功能的跳转热区不生效问题(Zepp OS)

---

### V4.6.8 (2022 年 03 月 31 日)

#### 🚀 新增

1. 新增撤销和重做功能
1. 图片间隔支持输入负数，实现层叠效果
1. 设备分辨率对照表增加圆角信息

#### 🔧 修复

1. 月份使用图片形式展示时坐标不准确问题
1. 无法切换多语言表盘中月份的语言预览效果

---

### V4.6.7 (2022 年 03 月 16 日)

#### 🚀 新增

1. 新建表盘时支持裁剪表盘缩略图
1. 支持设置锁屏图标
1. 新建页添加设备分辨率对照表

#### 📈 优化

1. 优化了图片拖拽的使用体验，增强了流畅性和稳定性

---

### V4.6.6（2022 年 03 月 07 日）

#### 🚀 新增

1. 添加农历功能，入口位于“日期-农历”
1. 接入 ubuntu 模拟器，支持模拟器预览表盘效果

#### 📈 优化

1. 可编辑背景组件交互优化，功能迁移至“背景”
1. 扫码安装二维码界面提示优化

---

### V4.6.5（2022 年 02 月 17 日）

#### 🚀 新增

1. 支持 GTR2e 设备的表盘制作
1. 新增了 “可编辑背景” 组件
1. 表盘数据展示新增了 “常规进度 (色值)” 模块
1. 表盘数据展示新增了 ”每日 Pai“ 数据模块
1. 纯色表盘背景支持设置圆角

---

### V4.6.4（2022 年 01 月 20 日）

#### 🔧 修复

1. 修复了一些已知问题

---

### V4.6.3（2022 年 01 月 13 日）

#### 🚀 新增

1. 对部分可旋转组件显示了其旋转中心
1. 支持导出当前表盘的预览图
1. 补充了[扫码安装](./guides/scanCode.md)和[表盘设计规范](../../../watchface/specification.md)相关文档
1. 移除了页面上对于表盘类别的展示
1. 移除了对韩语的支持

#### 📈 优化

1. 优化了表盘缩放功能

---

### V4.6.2（2021 年 12 月 28 日）

#### 🚀 新增

1. 新增了三方审核适配功能
1. 新增了示例表盘
1. 新增了扫码安装功能
1. GT3 设备支持帧动画功能
1. 移除了访问时的认证限制
1. 更新了帮助文档链接

#### 🔧 修复

1. 修复了部分表盘指针层级错误的问题

---

### V4.6.1（2021 年 12 月 16 日）

#### 🚀 新增

1. 支持在制作表盘时对某些组件图片进行拖拽以修改其参数

#### 📈 优化

1. 提升了用户制作表盘时的交互体验

#### 🔧 修复

1. 修复了部分地区用户访问网站出现的白屏问题
1. 修复了某些表盘在制作时出现的参数错误问题
1. 修复了一些用户登录时的报错问题

---

### V4.6.0（2021 年 12 月 6 日）

#### 🚀 新增

1. 我的表盘页面新增了搜索功能
1. 更新了新建表盘时的表单填写条目
1. 更新了表盘制作工具的访问域名，新域名为 https://watchface.huami.com
1. 更新了表盘制作工具的登录方式

#### 📈 优化

1. 优化了海外用户访问页面的速度

#### 🔧 修复

1. 修复了部分页面的样式显示问题

---

### V4.5（2021 年 9 月 21 日）

#### 🚀 新增

1. 按协议类型开发表盘，界面功能差异化：GT、GT3、LITE
1. 新建页及上传审核页新增类型筛选
1. 新建页及上传审核页新增 GT3 分辨率 302 _ 320、306 _ 354、402 \* 476
1. 支持复制同分辨率表盘到不同类型

---

### V4.4 (2021 年 8 月 2 日)

#### 🚀 新增

1. 帮助页新增更新日志显示
1. 帮助页支持多语言
1. 上传审核新增分辨率 480 _ 480、390 _ 450 - GT2 系列
1. 新增可编辑组件复制功能

#### 📈 优化

1. 可编辑组件、图片进度、年份预览优化
1. 导出的表盘 bin 文件文案自动按照所建项目信息名称命名

---

### V4.3 (2021 年 7 月 15 日)

#### 🚀 新增

1. 新增导出 JS 表盘功能

---

### V4.2（2021 年 5 月 19 日）

#### 🚀 新增

1. 新增英、韩文多语言支持
1. 新增表盘搜索、删除、复制功能
1. 新增帮助页

#### 📈 优化

1. 可编辑组件可设置默认显示组件

---

### V4.1（2021 年 4 月 8 日）

#### 🚀 新增

1. 支持全球 6 区服务部署
1. 支持息屏表盘 - Como Ness 系列
1. 距离新增单位 mi - Como、Ness 系列
1. 新增图片上传时类型选择（实心图片/渐变图片/透明实心）- Como、Ness 系列
1. 新增 480 _ 480、390 _ 450 分辨率

#### 📈 优化

1. 优化可编辑组件预览，当前预览组件自动切换为用户所编辑的组件模块

---

### V4.0（2021 年 2 月 23 日)

#### 🚀 新增

1. 新增通讯功能模块（短信、电话）- GT 系列
1. 新增可编辑组件功能模块 - GT 系列
1. 常规进度支持百分比预览 - GT 系列
1. 文字支持使用系统字体 - GT 系列
1. 支持缩放当前分辨率表盘至同形状其他分辨率表盘

#### 📈 优化

1. 优化图层定位，点击预览界面图标，可直接定位到左侧对应图层
1. 优化导出界面，支持自定义导出文件名称

---

### V3.0（2020 年 11 月 3 日）

#### 🚀 新增

1. 支持 como、ness 表盘制作
1. 新增创建页缩略图尺寸提示，切换分辨率时自动显示对应缩略图的尺寸
1. 新增快捷功能、日出时间、日落时间、帧动画功能模块 - Como、Ness 系列

#### 📈 优化

1. 移除 "PAI" 模块下的 "每日 PAI" 子模块

---

### V2.1 （2020 年 8 月 12 日）

#### 🚀 新增

1. 新增功能模块（PAI、空气质量、湿度、紫外线等级、日出日落
1. 新增跳转热区功能
1. 新增息屏表盘功能，且支持复制正常表盘至息屏表盘
1. 新增修改表盘名称和缩略图功能
1. 功能模块支持以拖拽方式改变层级

#### 📈 优化

1. 优化顶部菜单显示，由平铺展示改为层级展示
1. 优化天气模块，将天气拆分为天气和温度两大功能模块
1. 优化指针进度和星期模块功能，支持多语言

---

### V2.0 （2020 年 6 月 22 日）

#### 🚀 新增

1. 打通开放平台登录注册流程
1. 新增创建、保存、查看、导出表盘等功能
1. 新增背景、刻度、指针时间、数字时间、进度时间、日期、星期、电量、心率、消耗、步数、距离、天气、系统等 14 个功能模块及子模块
