---
title: 注册伴生服务
sidebar_label: 注册伴生服务
---

伴生服务需要使用使用 `AppSideService` 构造函数注册实例，绑定生命周期回调函数。

生命周期

```js title="index.js"
AppSideService({
  onInit() {
    // ...
  },
  onRun() {
    // ...
  },
  onDestroy() {
    // ...
  },
})
```
