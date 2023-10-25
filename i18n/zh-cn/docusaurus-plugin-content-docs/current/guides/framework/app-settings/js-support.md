---
title: JavaScript 支持情况
sidebar_label: JavaScript 支持情况
---

## 运行限制

出于安全考虑，小程序中不允许动态执行 JS 代码，即：

- 不支持使用 `eval` 执行 JS 代码
- 不支持使用 `new Function` 创建函数
  - `new Function('return this')` 除外

## ECMAScript 支持

支持 ES6 语言特性
