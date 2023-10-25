---
title: 表盘规范
---
表盘是智能可穿戴设备核心体验要素也是用户最常使用的功能。表盘既有传统手表的时间显示能力，同时又具备了不同种类数据展示的功能，表盘的设计需要适应用户的个性化需求，并匹配不同场景。

![表盘示例](/img/zh-cn/docs/watchface/specification/wfExample.png)

### 构成
#### 时间
时分秒
- 数字、指针。
- 手表指针显示顺序是秒针在最上，中间层是分针，最下层是时针。

![时分秒](/img/zh-cn/docs/watchface/specification/hms.png)

上午下午
- 文字。

星期
- 图片、指针、进度。

![星期](/img/zh-cn/docs/watchface/specification/week.png)

年月日
- 图片、指针、进度。
- 如表盘显示年，必须年/月/日一起，显示不支持年分开显示。

![年月日](/img/zh-cn/docs/watchface/specification/ymd.png)


农历
- 文字
- 可单独配置节日/节气坐标

![农历](https://img-cdn.huami.com/20220518/c9794d3932fa0fe275061ef6d3fcf7ea.png)

#### 运动
步数
- 图标、图片、数字、指针、进度。
- 步数数字显示：最大5位数“00000”。
- 目标步数数字显示：最大5位数“00000”。

![运动](/img/zh-cn/docs/watchface/specification/sport.png)

距离
- 图标、数字。
- 距离数字显示：最大4位数“0.00”，“00.0”。

![距离](/img/zh-cn/docs/watchface/specification/distance.png)

卡路里
- 图标、图片、数字、指针、进度。
- 消耗数字显示：最大4位数“0000”。

![卡路里](/img/zh-cn/docs/watchface/specification/calories.png)

站立
- 图标、图片、数字、指针、进度。
- 当前站立显示：最大2位数“00”。
- 站立目标显示： 12 小时 （固定）

![站立](https://img-cdn.huami.com/20220518/029adb4811d7a40f0ca07768a79c3088.png)

#### 健康
心率
- 由图标、图片、数字、指针、进度组成。
- 心率数字显示：最大3位数“000”。

![心率](/img/zh-cn/docs/watchface/specification/heartrate.png)

PAI
- 图标、图片、数字、指针、进度。
- PAI数字显示(最大3位数“000”）。

![PAI](/img/zh-cn/docs/watchface/specification/pai.png)

#### 天气
温度
- 图标、图片、数字、指针、进度。
- 实时温度显示：最大5位数“-000°”。
- 最低温度显示：最大5位数“-000°”。
- 最高温度显示：最大5位数“-000°”。

![温度](/img/zh-cn/docs/watchface/specification/temperature.png)

紫外线
- 图标、图片、数字、指针、进度
- 紫外线等级数字显示：最大2位数“00”。

![紫外线](/img/zh-cn/docs/watchface/specification/uvi.png)

湿度
- 图标、图片、数字、指针、进度
- 湿度数字显示：最大4位数“000%”。

![湿度](/img/zh-cn/docs/watchface/specification/humidity.png)

空气质量
- 图标、图片、数字、指针、进度。
- 空气质量数字显示：最大3位数“000”。
- 非中国地区无法展示空气质量。替换成湿度

![空气质量](/img/zh-cn/docs/watchface/specification/airQuality.png)

日出日落
- 图标、图片、数字、指针、进度。
- 当前时间显示：最大5位数“00:00”。
- 日出时间显示：最大5位数“00:00”。
- 日落时间显示：最大5位数“00:00”。

![日出日落](/img/zh-cn/docs/watchface/specification/sun.png)

月相
- 图片
- 7/13/30张月相图片

![月相](https://img-cdn.huami.com/20220518/74770c636c9c6c7740f09e2a60291ded.png)

气压
- 图标、图片、数字、指针、进度。
- 气压显示：最大5位数“00000”。

![气压](https://img-cdn.huami.com/20220518/af2d506be80451a6c53cf1c079107ce8.png)

#### 系统
电量
- 图标、图片、数字、指针、进度。
- 电量数字显示：最大4位数“100%”。

![电量](/img/zh-cn/docs/watchface/specification/battery.png)

系统状态
- 图标。
- 勿扰、蓝牙、锁屏、闹钟（必须设计开关状态）。

![系统状态](/img/zh-cn/docs/watchface/specification/system.png)

### 安全区域
边缘留出 2px 安全距离。顶部和底部留出状态点和离线语音的展示区域，不摆放重要信息。

![安全区域](/img/zh-cn/docs/watchface/specification/safeArea.png)

### 息屏模式
![息屏模式](/img/zh-cn/docs/watchface/specification/idle.png)

息屏模式是指表盘在息屏状态下可以有限地显示时间等重要信息，帮助用户在不抬腕情况下的信息获取，它是一个表盘的必备模式；
息屏模式的显示分为两类，跟随当前表盘的息屏和用户可单独选择设置的表盘；跟随当前表盘的息屏需要表盘设计者单独设计，设计规范请参考[息屏视觉规范](#指针处理方法)；

#### 设计规则
- 尽量减少表盘元素，亮起像素不超过屏幕的10%
- 表盘指针不要秒针
- 表盘底色必须为黑（#000000），指针主色必须为白（#FFFFFF）
- 保持指针/数字切图尺寸一致
- 由于要在息屏与亮屏切换，所以尽量减少元素移动，避免切换时的跳动
- 为保证辨识度，保留基本的时间刻度（非强制）
- 除时间外，其他元素取舍优先级为：步数>日期>天气>电量>心率>其他（非强制但基本遵守）

#### 指针处理方法
指针剪影/数字剪影 + 外边缘黑色描边
- 去掉渐变、高光、阴影等质感类的参数，保留指针/数字的剪影图形
- 指针增加外边缘1~2px的黑色描边，作用是：区分指针的上下层关系,区分指针与数据的上下层关系
- 可根据表盘特点增加指针颜色，但尽量要少

![指针处理](/img/zh-cn/docs/watchface/specification/pointerHandle.png)

白膜 + 外边缘黑色描边
- 指针保留部分结构性光影，整体为“白膜”效果
- 指针增加外边缘1~2px的黑色描边，作用是：区分指针的上下层关系,区分指针与数据的上下层关系

![指针处理](/img/zh-cn/docs/watchface/specification/pointerHandle1.png)

#### 数字时间处理方法
字体描边或缩小字体
- 数字时间一般图形面积较大，所以采用外轮廓描边处理，描边宽度不少于2px
- 描边颜色选取明度较高的白色或彩色，当亮起面积小于10%时，则可以不使用描边处理

![数字时间处理](/img/zh-cn/docs/watchface/specification/numberHandle.png)

### 默认数据
表盘预览图和制作表盘时默认数据需要按照以下规范输入<br/>

**时间**
- 数字/指针时间：10:09:36
10:09:36（秒针角度可以自己选，避开主要元素，避免遮挡即可）<br/>
时：304 度（时针跟随分钟变动，不跟随秒针变动）<br/>
分：54 度（分针不跟随秒变动）<br/>
秒：216 度（秒针只要不转满一圈，可以任意调整角度，分时针不用变）
- 日期: 02/08

**健康**
- 热量：280千卡、280kcal
- 心率：86次/分、86bpm
- 步数：8670步、8670steps
- 距离：5.30

**天气**
- 天气：22°C/-108°F （单位支持华氏度与摄氏度切换）
- 湿度：42%
- AQI （空气质量指数）：26
- UVI（紫外线）：4
- 日出：06:30   日落：06:30

**设置**
- 电量：75%

### 星期月份缩写规范

|类型|大小写|全大写|首字母大写，以点（.）结尾|缩写1|缩写2|
|:--|:--|:--|:--|:--|:--|
|星期|1. Monday <br/> 2. Tuesday<br/> 3. Wednesday<br/>4. Thursday<br/>5. Friday<br/>6. Saturday<br/>7. Sunday|1. MONDAY<br/>2. TUESDAY<br/>3. WEDNESDAY<br/>4. THURSDAY<br/>5. FRIDAY<br/>6. SATURDAY<br/>7. SUNDAY|1. Mon.<br/>2. Tue./Tues.<br/>3. Wed.<br/>4. Thu./Thur./Thurs.<br/>5. Fri.<br/>6. Sat.<br/>7. Sun.|1. MON<br/>2. TUE/TUES<br/>3. WED<br/>4. THU/THUR/THURS<br/>5. FRI<br/>6. SAT<br/>7. SUN|1. Mo.<br/>2. Tu.<br/>3. We.<br/>4. Th.<br/>5. Fr.<br/>6. Sa.<br/>7. Su.|
|月份|1. January<br/>2. February<br/>3. March<br/>4. April<br/>5. May<br/>6. June<br/>7. July<br/>8. August<br/>9. September<br/>10. October<br/>11. November<br/>12. December|1. JANUARY<br/>2. FEBRUARY<br/>3. MARCH<br/>4. APRIL<br/>5. MAY<br/>6. JUNE<br/>7. JULY<br/>8. AUGUST<br/>9. SEPTEMBER<br/>10. OCTOBER<br/>11. NOVEMBER<br/>12. DECEMBER|1. Jan.<br/>2. Feb.<br/>3. Mar.<br/>4. Apr.<br/>5. May<br/>6. Jun.<br/>7. Jul.<br/>8. Aug.<br/>9. Sep./Sept.<br/>10. Oct.<br/>11. Nov.<br/>12. Dec.|1. JAN<br/>2. FEB<br/>3. MAR<br/>4. APR<br/>5. MAY<br/>6. JUN<br/>7. JUL<br/>8. AUG<br/>9. SEP/SEPT<br/>10. OCT<br/>11. NOV<br/>12. DEC|无|

### 命名规则
连续元素必须以0~9结尾，以保证读写正确。

#### 基础数据
|类型|命名|说明|
|:--|:--|:--|
|时间|time_# ( “#” 序列 0~9)|当时/分/秒数字字体样式相同时，采用统一命名。|
|   |hour_#，minute_#，second_#|当时/分/秒数字字体样式不同时，采用单独命名。|
|指针|hour，minute，second|当时/分/秒是指针样式时，采用单独命名。|
|数字|font_#_(0~9)|例：“ font_power_1 ”，|
|空数据 “ - - ”|#_invalid|例：“ heart_invalid ” |
|分隔符 “ / ”|slash|常用于日期，温度分割，例：“12/04”|
|分隔符 “ - ”|negative|常用于日期分割，温度，例：“12-04”|
|分隔符 “ : ”|colon|常用于时间分割，例：“10:09”|
|分隔符 “ . ”|dot|常用于时间记录分割，例：“1:30.27”|
|分隔符 “ % ”|percent|常用于电量百分比，例：“100%”|
|上午|am_#||
|下午|pm_#||
|月份|month_#_（jan~dec）||
|年份|year_#||
|背景|bg||
|线性进度|#_line||
|环形进度|#_circle||
|自定义进度|#_stage_(0~10)||
|应用预览图|preview_#|“ # ” 语言分类，简体 (sc)，繁体 (tc)，英文 (en)|
|手表预览图|preview_#|“ # ” 语言分类，简体 (sc)，繁体 (tc)，英文 (en)|

#### 类型数据
|类型|命名|说明|自定义进度|最大位数|
|:--|:--|:--|:--|:--|
|心率|heart||6段|3 位（000）|
|消耗|calorie||10段|4 位（0000）|
|pai|pai||10段|3 位（000）|
|步数|step||10段|5 位（00000）|
|距离|distance|||5 位（00000）|
|天气|多云：0<br/>阵雨：1<br/>阵雪：2<br/>晴天：3<br/>阴天：4<br/>小雨：5<br/>小雪：6<br/>中雨：7<br/>中雪：8<br/>大雪：9<br/>大雨：10<br/>沙尘暴：11<br/>雨夹雪：12<br/>雾：13<br/>霾：14<br/>雷阵雨：15<br/>暴雪：16<br/>浮尘：17<br/>特大暴雨：18<br/>雨加冰雹：19<br/>雷阵雨伴有冰雹：20<br/>大暴雨：21<br/>扬尘：22<br/>强沙尘暴：23<br/>暴雨：24<br/>未知天气：25<br/>夜间多云：26<br/>夜间阵雨：27<br/>夜间晴：28|切图必须要对应数字|||
|温度|temperature||10段|3位（000）|
|湿度|humidity||10段|3 位（000）|
|紫外线|uvi||10段|2 位（00）|
|空气质量|aqi||6段|3 位（000）|
|日出|sunrise||||
|日落|sunset||||
|电量|power||10段|3位（000）|
|蓝牙|connect/disconnect||||
|锁屏|lock / unlock||||
|闹钟|clock / unclock||||
|勿扰|DNDoff / DNDopen||||

### 切图规范
#### 元素
- 同类元素切图大小保持一致，安全距离最少保持2px。
- 指针：指针切图宽度必须为奇数，高度不限。红色色块的宽高是指针的旋转中心点。

![指针](/img/zh-cn/docs/watchface/specification/pointer.png)

#### 预览图
每个表盘必需提供预览图切图<br/>

|设备分辨率|缩略图尺寸|
|:--|:--|
|480\*480|324\*324|
|454\*454|306\*306|
|416\*416|280\*280|
|390\*450|266\*306|
|402\*476|273\*316|
|302\*320|202\*214|
|306\*354|210\*242|
