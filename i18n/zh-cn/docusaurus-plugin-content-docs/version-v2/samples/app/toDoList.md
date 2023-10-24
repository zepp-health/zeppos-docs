# ToDoList

## 介绍

[ToDoList - https://github.com/zepp-health/zeppos-samples/tree/main/application/2.0/todo-list](https://github.com/zepp-health/zeppos-samples/tree/main/application/2.0/todo-list) 是一款简单的任务管理工具。支持任务的新建、删除。

:::tip
该应用 /shared 目录下的 message.js 是对底层通信 API 过程的封装，现阶段建议开发者参考示例应用中的用法进行模仿。
:::

## 覆盖场景

- 「设备应用」、「设置应用」、「伴生服务」完整通信过程
  - 通信方式请参考 [整体架构-通信关系](../../guides/architecture/arc.mdx)
- 设备应用
  - `SCROLL_LIST` 控件
- 设置应用
  - 使用 UI 组件构建页面
  - Settings Storage API
- 伴生服务
  - Settings Storage API

## 说明

用户在手机端添加/删除任务

![toDoList](/img/sample/app/toDoList.jpg)

![addToDo](/img/sample/app/addToDo.jpg)

任务同步在「设备应用」，点击设备应用左上角的「Add」按钮可以生成一个随机数任务，点击「设备应用」任务 item，可以对当前任务进行删除操作。

![toDoList.jpeg](/img/sample/app/toDoDevice.jpg)
