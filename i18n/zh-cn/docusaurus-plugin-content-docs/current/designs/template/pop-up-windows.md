---
sidebar_label: 弹窗
---

# 弹窗  

弹窗是展现在用户界面之上的一种容器，用于对用户的操作引导、信息传达和消息提示；

## 设计原则  

有效：提供有价值的信息反馈，提高用户的操作效率；

易懂：弹窗表意需要简要且明确，任务需要简短且聚焦，易于用户对信息和任务的快速理解；

克制：由于弹窗会影响用户当前操作，先要根据信息优先级，选择合适的提醒方式，避免过度使用，保障用户体验；

## 弹窗类型  

按照弹窗在穿戴设备上的使用场景和功能属性可分为四大类，分别是：任务完成、通知展示、状态告知、信息提示；

弹窗的交互规则如下表：

<table>
    <tr>
        <th>弹窗类型</th>
        <th>页面类型名称</th>
        <th>显示时间</th>
        <th>灭屏10秒后显示</th>
        <th>右滑退出</th>
        <th>页面操作</th>
        <th>长页面</th>
    </tr>
	 <tr>
        <td>任务完成类型弹窗</td>
        <td>任务弹窗Task</td>
        <td>不限时</td>
        <td>显示</td>
        <td>不支持</td>
        <td>按钮操作</td>
        <td>不支持</td>
    </tr>
	<tr>
        <td>状态告示类型弹窗</td>
        <td>告示弹窗Alert</td>
        <td>不限时</td>
        <td>显示</td>
        <td>不支持</td>
        <td>按钮操作</td>
        <td>支持</td>
    </tr>
  	<tr>
        <td>通知展示类型弹窗</td>
        <td>通知弹窗Notify</td>
        <td>不限时</td>
        <td>跟随系统（返回表盘或进行中页面）</td>
        <td>支持</td>
        <td>按钮操作/无</td>
        <td>支持</td>
    </tr>
    <tr>
        <td rowspan="3">信息提示类型弹窗</td>
        <td>全局提示</td>
        <td>至少2秒，支持自定义</td>
        <td>跟随系统</td>
        <td>支持</td>
        <td>无</td>
        <td>不支持</td>
    </tr>
    <tr>
        <td>轻浮窗/Drawer</td>
        <td>6S 后消失按UP/DOWN键消失</td>
        <td>跟随系统</td>
        <td>不支持</td>
        <td>无</td>
        <td>不支持</td>
    </tr>
    <tr>
        <td>轻提示/Toast </td>
        <td>3S 后消失</td>
        <td>跟随系统</td>
        <td>不支持</td>
        <td>无</td>
        <td>不支持</td>
    </tr>
</table> 

## 任务弹窗  

任务弹窗是指用于由系统发起，需要用户中断当前操作，强制用户必须进行操作去完成的重要任务。  

![Design](/img/design/task-popup.png)

![Design](/img/design/task-popup_2.png)

## 告示弹窗  

是指根据用户的状态或者用户的操作，系统需要明确告知用户反馈结果，必须让用户主动选择或确认信息，支持长页面展示。   

![Design](/img/design/alert-pop-up-windows_1.png)

![Design](/img/design/alert-pop-up-windows_2.png)

## 通知弹窗  

用于会进入通知中心，用来传达通知内容信息或者告知用户当前系统发生的状况，不强制用户做出反馈，支持长页面展示。  

![Design](/img/design/56d3d9f7b548100d36ee4e8a5b412bbe.png)

![Design](/img/design/notification-pop-up-windows_2.png)  

>① ② OS 健康建议通知中使用特殊角标来区分普通通知。  

![Design](/img/design/notification-pop-up-windows_3.png)  


## 全局提示  

是指使用完整的界面呈现轻量级状态信息，用户不经意没有看到也不会对结果有任何影响，为减少对用户影响，可设置停留时间也可右滑退出。  

![Design](/img/design/global-alert.png)

## 轻浮窗  

以从屏幕边缘滑进来的方式出现，适用于与当前任务强相关，在任务进行中即时任务信息提示，以浮窗形式提醒任务中的用户，通过半透明背景降低阻断感，能很大程度上减轻对用户的干扰，可设置停留时间也可手动关闭。  

![Design](/img/design/99a5f0a80f1b12ad1e22aeb62964b803.png)

## 轻提示  

是最轻量级的反馈，不会影响用户操作，用户可以不与回应。  

![Design](/img/design/toasts_1.png)

![Design](/img/design/toasts_2.png)


## 视觉规范  

- 插图、标题、正文之间不设间距，两侧留出安全距离；圆形设备的插图、标题和正文左右居中对齐，方形设备的正文居左对齐。
![Design](/img/design/645f6ac9595d1881a561643b2b691ced.png)

- 插图和正文坐标相对屏幕做偏上排版，整体内容居中布局；超出一屏后按超长文本处理。  

![Design](/img/design/visual-specifications_2.png)

- 圆屏设备超长文本排版规则：  
    
    换行，行数不限。  

    插图距离顶部留出安全距离，整体内容向下布局。  

    文字左右居中对齐。  

![Design](/img/design/visual-specifications_3.png)

- 方屏设备超长文本排版规则：  

    换行，行数不限。  

    插图和标题左右居中对齐，整体内容向下布局。  

    文字左对齐。  

由于应用内状态栏常驻，应用内触发的弹窗需要保留状态栏。  

![Design](/img/design/visual-specifications_4.png)

- 当弹窗的操作按钮为胶囊按钮时，操作按钮建议不超过4个。  

![Design](/img/design/visual-specifications_5.png)