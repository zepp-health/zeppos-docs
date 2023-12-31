---
sidebar_label: 实体按键
---

# 实体按键

穿戴式设备上通常会有多个实体按钮，也称为“表冠按钮”。一直以来，Zepp OS 设备上至少会有一个按钮，即电源按钮。除此之外，还可能会有多个多功能按钮（也可能没有）。

## 设计原则

- 提供视觉反馈以响应实体按键交互
- 避免定义多重按键交互造成用户混淆

## 命名规则

接入 Zepp OS 的手表在硬件产品定义没有明确印刷实体键名称时，在用户界面展示名称，产品定义原则主要依据以下几条：

- 如果硬件的印刷上标明了按键名称，就用硬件印刷名称，如：Blanc 的 Select、Back。
- 如果硬件的印刷没有标明按键名称，用按键在手表上的位置来标记按键名称，不用具体软件定义的实体键功能的作为按键名称。

**单键表**

名称：侧键①

![Design](/img/design/653b52eabf91a479e0f6aa6902567c07.png)

**双键表**

| **表达按下相关（ECG 触摸、单击、长按、双击、三击）功能时的名称** | **表达旋转功能时的名称** |
| ------------------------------------------------------------ | ------------------------ |
| 上键①                                                        | 表冠①                    |
| 下键②                                                        | 下键②                    |

![Design](/img/design/5f7ff267bfec0835d379de5caf58699e.png)

**三键表**

名称：上键①、中键②、下键③

![Design](/img/design/253ec9b4f4693b0799fdc826a802a38d.png)

**四键表**

| **左侧按键名称** | **右侧按键名称** |
| ---------------- | ---------------- |
| 上键①            | SELECT③          |
| 下键②            | BACK④            |

![Design](/img/design/e8ed43e283b4f4fc7b87b4fd09870794.png)

## 使用规则

说明：个别界面如果有特殊定义会在每个页面交互文档具体体现，如果没有特别定义都遵循下表规则

要允许应用和具体某个界面有定义实体键功能的能力（包括：单击，长按 1 秒、长按 5 秒）

- 非 JS 应用：有权限拦截所有实体键操作
- JS 应用
    - 单击：不能拦截实体键操作
    - 1s 长按、5s 长按：有权限拦截所有实体键操作

**单键表**

| **操作**     | **触发事件**                       |
| ------------ | ---------------------------------- |
| 点按侧键     | 进入应用列表；再次点按上键跳转表盘 |
| 长按侧键1秒  | 快速启动默认在线语音               |
| 长按侧键5秒  | 关机/重启                          |
| 长按侧键12秒 | 强制重启                           |

**双键表**

| **操作**              | **触发事件**                       |
| --------------------- | ---------------------------------- |
| 点按上键              | 跳转应用列表；再次点按上键跳转表盘 |
| 长按上键1秒           | 快速启动默认在线语音               |
| 同时长按上键和下键5秒 | 关机/重启                          |
| 长按上键12秒          | 强制重启                           |
| 点按下键              | 快速启动（默认）                   |

**四键表**

<table>
    <tr>
        <th colspan="2">所在界面 →<br/> 按键 ↓ 交互 ↘</th>
        <th>表盘</th>
        <th>秒表 & 运动中</th>
        <th>对话框</th>
        <th>其余多数界面</th>
    </tr>
	 <tr>
        <td rowspan="4">单击 =按下并快速松开</td>
        <td>SELECT</td>
        <td>快速启动：默认运动列表</td>
        <td>暂停/继续 </td>
        <td>右侧按钮</td>
        <td>进入下一级 / 执行焦点项的交互</td>
    </tr>
	<tr>
        <td>BACK</td>
        <td>应用列表</td>
        <td>记录分段</td>
        <td>左侧按钮</td>
        <td>返回上一级</td>
    </tr>
      <tr>
        <td>UP</td>
        <td>控制中心</td>
        <td colspan="3">看上一页 / 看到上方更多内容 / +1；</td>
    </tr>
      <tr>
        <td>DOWN</td>
        <td>快捷卡片</td>
        <td colspan="3">看下一页 / 看到下方更多内容 / -1；</td>
    </tr>
    <tr>
        <td>长按上键5秒</td>
        <td>SELECT</td>
        <td colspan="4">选择关机或重启</td>
    </tr>
    <tr>
        <td>长按上键12秒</td>
        <td>SELECT</td>
        <td colspan="4">强制重启</td>
    </tr>
    <tr>
        <td>点按下键1秒</td>
        <td>BACK</td>
        <td>息屏</td>
        <td colspan="3">无操作</td>
    </tr>
    <tr>
        <td>按住UP键不松开</td>
        <td>UP</td>
        <td colspan="4">快速向上翻页（如能翻页）</td>
    </tr>
    <tr>
        <td>按住Down键不松开</td>
        <td>DOWN</td>
        <td colspan="4">快速向下翻页（如能翻页）</td>
    </tr>
</table>   

## 响应速度

**双键表：单击、长按、超长按同时存在**

表格中分别定义了在灭屏状态和亮屏状态，点击实体键应该响应的操作和时间：

- 红色代表灭屏状态
- 蓝色代表亮屏状态

| **响应动作** | **响应时间定义**                                             |
| ------------ | ------------------------------------------------------------ |
| 单击         | ![Design](/img/design/cb51d72a6b71f6b3f9b801fc2764bf8b.png) ①按下 ②抬起 ③响应亮屏 ④响应单击 ⑤响应长按 |
| 长按         | ![Design](/img/design/4194c295a5019b5eb80a88bc1225afa9.png) ①按下 ②抬起 ③响应亮屏 ④响应长按 |
| 超长按定义   | ![Design](/img/design/56d9383863323071971adc64af18f29a.png) ①按下 ②抬起 ③响应亮屏 ④响应长按 ⑤响应超长按 |

**单键表：支持单击、双击、长按、超长按同时存在**

表格中分别定义了在灭屏状态和亮屏状态，点击实体键应该响应的操作和时间：

- 红色代表灭屏状态
- 蓝色代表亮屏状态
- 灰色代表亮屏和灭屏状态都需要支持

| **响应动作** | **响应时间定义**                                             |
| ------------ | ------------------------------------------------------------ |
| 单击         | ![Design](/img/design/4f9c5dd5a90ead606d85bf44a219735f.png) ①按下 ②抬起 ③响应亮屏 ④响应单击  ![Design](/img/design/7ce4ce8dce3e68440d99f44b19b3fbab.png) ①按下 ②抬起 ③响应亮屏 ④响应单击 |
| 双击         | ![Design](/img/design/c70139fa958e9dd60210d13469d68d6f.png) ①按下 ②抬起 ③响应亮屏 ④区间按下响应双击  ![Design](/img/design/c7b0c7318d65da72984162ac9c7d87a5.png) ①按下 ②抬起 ③响应亮屏 ④区间按下响应双击 |
| 长按         | ![Design](/img/design/5563bf0ba7b42947772935da1ba11520.png) ①按下 ②抬起 ③响应亮屏 ④响应长按 |
| 超长按       | ![Design](/img/design/1f5e3200c73291bf85062768e7f33ed0.png) ①按下 ②抬起 ③响应亮屏 ④响应长按 ⑤响应超长按 |
