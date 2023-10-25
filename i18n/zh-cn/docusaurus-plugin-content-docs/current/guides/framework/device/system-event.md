---
title: 系统事件
sidebar_label: 系统事件
---

## 介绍

在 Zepp OS v3 中，我们将系统级别的状态变更，健康传感器异常等场景进行整理，以「系统事件」的形式通知到[「设备应用服务」](./app-service.md)。

## 系统事件定义

| 系统事件                          | 事件场景     | 其余参数                                | API_LEVEL 版本 |
| --------------------------------- | ------------ | --------------------------------------- | -------------- |
| `event:os.health.sleep_status`    | 睡眠状态变更 | -                                       | 3.0            |
| `event:os.health.heart_rate_abnl` | 心率异常     | -                                       | 3.0            |
| `event:os.helath.stress_remind`   | 舒压提醒     | -                                       | 3.0            |
| `event:os.health.wear_status`     | 佩戴状态变更 | -                                       | 3.0            |
| `event:os.system.sleep_mode`      | 睡眠模式开关 | `status`: `enter` - 进入, `exit` - 退出 | 3.0            |
| `event:os.weather.sun_rise`       | 日出         | -                                       | 3.0            |
| `event:os.weather.sun_set`       | 日落         | -                                       | 3.0            |
| `event:os.weather.moon_rise`      | 月出         | -                                       | 3.0            |
| `event:os.weather.moon_set`       | 月落         | -                                       | 3.0            |

## 使用「设备应用服务」监听「系统事件」

### 配置系统事件

在 [小程序配置 app.json](../../../reference/app-json.mdx) 中的 module 进行配置，一个小程序指定一个「设备应用服务」来响应「系统事件」，`path` 路径是「设备应用服务」的路径。

编码过程中先注册「设备应用服务」，从注册的「设备应用服务」中，指定一个来响应「系统事件」，参考示例配置。

```json
{
  "module": {
    "app-service": {
      "services": ["app-service/demo_service"]
    },
    "app-event": {
      "path": "app-service/demo_service"
    }
  }
}
```

监听某一个系统事件需要在 `permissions` 权限数组中加入对应事件名称，比如想要监听日落事件，需要将事件名 `event:os.weather.sun_rise` 添加至 `permissions` 数组中。

```json
{
  "permissions": ["event:os.weather.sun_rise"],
  "module": {
    "app-service": {
      "services": ["app-service/demo_service"]
    },
    "app-event": {
      "path": "app-service/demo_service"
    }
  }
}
```

### 「设备应用服务」响应「系统事件」策略

当「系统事件」触发，唤起响应「系统事件」的「设备应用服务」，执行 `AppService` 构造函数，事件相关参数在 `options` 中传递。

```js
AppService({
  onInit(options) {
    // evoke
  }
})
```

<!-- // TODO: 这里有流程图 -->

### options 数据格式

以类似 WEB URI query 参数拼接的方式进行参数组织，参数之间以 `&` 进行分隔，键值之间用 `=` 分隔。

看两个例子：

- 日出事件：`event:os.weather.sun_rise`
- 进入睡眠模式 `event=event:os.system.sleep_mode&status=enter`

## 自定义事件

除了注册「设备应用服务」响应「系统事件」外，我们还将这套基于事件的通信机制进行了开放，允许开发者自定义系统事件，并进行事件派发，唤起响应「系统事件」的「设备应用服务」

参考 [@zos/app emitCustomSystemEvent](../../../reference/device-app-api/newAPI/app/emitCustomSystemEvent.mdx)
