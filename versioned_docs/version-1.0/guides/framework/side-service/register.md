---
title: Register for Side Service
sidebar_label: Register for Side Service
---

The companion service needs to register an instance using the `AppSideService` constructor and bind the lifecycle callback function.

lifecycle

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
