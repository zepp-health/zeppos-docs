---
title: 设备应用服务
sidebar_label: 设备应用服务
---

## 介绍

在 Zepp OS v3 版本之前，用户在手表退出小程序「设备应用」 页面，整个小程序被销毁，失去调用 Zepp OS 开放能力的机会。

我们在 Zepp OS v3 中推出了重磅功能「设备应用服务」。

「设备应用服务」以无 UI 的方式运行，在用户退出小程序页面后，仍然可以运行。

受系统资源约束和无 UI 特性影响，「设备应用服务」在 API 调用方面存在部分限制，会在后文 [限制](#限制) 中详细说明。

「设备应用服务」从使用方式上来说分为两种，分为「单次执行」和「持续运行」。

### 1. 单次执行

使用以下方式唤起「设备应用服务」，「设备应用服务」的运行遵循「单次执行」的策略。

- [@zos/alarm](../../../reference/device-app-api/newAPI/alarm/set.mdx) 定时器 API
- [`@zos/notification`](../../../reference/device-app-api/newAPI/notification/notify.mdx) 系统通知 API
- 系统事件

「单次执行」即在相关代码执行完成后，立即退出「设备应用服务」。

:::tip
「单次执行」对系统资源消耗较少，是更为推荐的使用方式
:::

<!-- // TODO: 补充一个监听系统事件的例子，图片 -->

### 2. 持续运行

在「设备应用」中通过 [`@zos/app-service start API`](../../../reference/device-app-api/newAPI/app-service/start.mdx) 方法可以启动「设备应用服务」，做到服务持续运行。

:::info
使用 [`@zos/app-service start API`](../../../reference/device-app-api/newAPI/app-service/start.mdx) 启动「设备应用服务」之后，退出「设备应用」UI 界面，「设备应用服务」仍然保持运行。如果在「设备应用服务」运行途中进行设备重启操作，「设备应用服务」会跟随系统重新启动，并保持运行状态。

只有当主动调用退出服务 API，或触发了系统相关限制后，「设备应用服务」才会退出。
:::

<!-- // TODO: 补充一个服务的示例，图片 -->

## 使用「设备应用服务」

### 配置「设备应用服务」

在 [小程序配置 app.json](../../../reference/app-json.mdx) 中的 module 进行配置，一个小程序可以配置多个「设备应用服务」。

```json
{
  "module": {
    "app-service": {
      "services": ["app-service/demo_service"]
    }
  }
}
```

如果需要持续运行「设备应用服务」，需要调用 `@zos/app-service` 模块下的方法如 `start`，这些方法依赖 `device:os.bg_service` 权限，还需在 `permissions` 字段中配置权限信息。

```json
{
  "permissions": ["device:os.bg_service"],
  "module": {
    "app-service": {
      "services": ["app-service/demo_service"]
    }
  }
}
```

### 注册「设备应用服务」

使用 [`AppService`](../../../reference/device-app-api/newAPI/global/AppService.mdx) 构造函数注册「设备应用服务」。

看一个代码示例，「设备应用服务」中使用 [`Time`](../../../reference/device-app-api/newAPI/sensor/Time.mdx) 传感器每分钟打印一次当前时间。

```js
import { Time } from '@zos/sensor'

const timeSensor = new Time();

AppService({
  onInit(e) {
    logger.log(`service onInit(${e})`);

    timeSensor.onPerMinute(() => {
      logger.log(
        `${moduleName} time report: ${timeSensor.getHours()}:${timeSensor.getMinutes()}:${timeSensor.getSeconds()}`
      );
    });
  },
  onDestroy() {
    logger.log("service on destroy invoke");
  },
});
```

### 「设备应用服务」执行策略

#### 唤起单次执行的「设备应用服务」

目前有以下方式可以唤起单次执行的「设备应用服务」

- [@zos/alarm](../../../reference/device-app-api/newAPI/alarm/set.mdx) 定时器 API
- [`@zos/notification`](../../../reference/device-app-api/newAPI/notification/notify.mdx) 系统通知 API
- 系统事件

<!-- // TODO: 补充图片，单次执行 -->

#### 管理持续运行的「设备应用服务」

在「设备应用」中通过 [`@zos/app-service start API`](../../../reference/device-app-api/newAPI/app-service/start.mdx) 和 [`@zos/app-service stop API`](../../../reference/device-app-api/newAPI/app-service/stop.mdx) 来管理「设备应用服务」。

在「设备应用服务」中调用 [`@zos/app-service exit API`](../../../reference/device-app-api/newAPI/app-service/exit.mdx) 来退出当前「设备应用服务」。

<!-- // TODO: 补充代码示例 -->

<!-- // TODO: 补充图片，持续运行 -->

### 系统 API 能力与限制

「设备应用服务」无 UI 界面，在系统 API 能力使用上有较多限制，以下表格中列举 API 的可用性，`*` 代表整个模块。

| API 模块          | API 描述                                                       | 是否可用 | 描述                       |
| ----------------- | -------------------------------------------------------------- | -------- | -------------------------- |
| 全局              | 定时器相关接口，如 `setTimeout`                                | 不可用   | 无法使用定时器相关接口     |
| @zos/ui           | \*                                                             | 不可用   | 「设备应用服务」无 UI 界面 |
| @zos/sensor       | 高功耗传感器，包括 `Accelerometer`、`Geolocation`、`Gyroscope` | 不可用   | 无法使用功耗较高接口       |
| @zos/sensor       | 除高功耗传感器以外的传感器，如 `HeartRate`                     | 可用     | -                          |
| @zos/app-service  | \*                                                             | 可用     | -                          |
| @zos/notification | \*                                                             | 可用     | -                          |
| @zos/app          | 名称以 `get` 开头的 API，如 `getPackageInfo`                   | 可用     | -                          |
| @zos/settings     | 名称以 `get` 开头的 API，如 `getSystemInfo`                    | 可用     | -                          |
| @zos/display      | 名称以 `get` 开头的 API，如 `getSettings`                      | 可用     | -                          |
| @zos/device       | 名称以 `get` 开头的 API，如 `getDeviceInfo`                    | 可用     | -                          |
| @zos/user         | 名称以 `get` 开头的 API，如 `getProfile`                       | 可用     | -                          |
| @zos/media        | 音频播放相关 API                                               | 可用     | -                          |
| @zos/ble          | 除名称以 `mst` 开头的 API，如 `send`                           | 可用     | -                          |

:::info
「设备应用服务」无 UI 界面，与用户进行视图交互的唯一方式是 `@zos/notification` 「系统通知」API
:::

## 限制

### 权限

唤醒单次执行的「设备应用服务」无权限限制。

持续运行的「设备应用服务」除了需要在 app.json 中注册 permissions 字段外，还需要向用户申请运行允许，使用 `@zos/app` 模块下的 `queryPermission` 进行权限的查询，`requestPermission` 向用户申请权限。如果用户拒绝权限，则持续运行的「设备应用服务」无法启动。

![enable_service.jpg](/img/docs/guides/version_info/enable_service.jpg)

### 系统限制

对于单次执行的「设备应用服务」，系统限制其执行时间在 600ms 内。

对于持续运行的「设备应用服务」，系统限制统一时间只能运行一个「设备应用服务」，如果遇到服务冲突，会弹出交互界面，由用户指定运行哪一个「设备应用服务」。

![service_manage.jpg](/img/docs/guides/version_info/service_manage.jpg)

## 完整示例

Github Sample 仓库中提供了一个后台服务 demo 用于演示完整功能，请参考 [3.0-feature](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/3.0-feature)
