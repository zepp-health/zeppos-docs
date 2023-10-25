---
sidebar_position: 1
---

# ToDoList

## Introduction

[ToDoList - https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/todo-list](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/todo-list) is a simple task management tool. It supports the creation and deletion of tasks.

:::tip
The message.js in the /shared directory of this application is a wrapper around the underlying communication API process, and at this stage it is recommended that developers refer to the usage in the sample application for emulation.
:::

## Coverage Scenes

- Full communication including Device App, Settings App, Side Service
  - For the communication method, please refer to [Overall Architecture - Communication Relationships](../../guides/architecture/arc.mdx)
- Device App
  - `SCROLL_LIST` widget
- Settings App
  - Building pages with UI components
  - Settings Storage API
- Side Service
  - Settings Storage API

## Description

Users add/delete tasks on mobile.

![toDoList](/img/sample/app/toDoList.jpg)

![addToDo](/img/sample/app/addToDo.jpg)

Tasks are synchronized in "Device Application", click "Add" button in the upper left corner of Device Application to generate a random number of tasks, and click "Device Application" task item to delete the current task.

![toDoList.jpeg](/img/sample/app/toDoDevice.jpg)
