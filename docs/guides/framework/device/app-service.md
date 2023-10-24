---
title: App Service
sidebar_label: App Service
---

## Introduction

Before Zepp OS v3, when a user exits the Mini Program's "Device App" page on the watch, the entire Mini Program is destroyed, losing the opportunity to invoke Zepp OS's open capabilities.

In Zepp OS v3, Zepp OS Team have introduced a new feature "App Service".

The "App Service" runs in a no-UI manner and can still run after the user exits the Mini Program page.

Due to the constraints of system resources and the feature of no UI, there are some limitations of "App Service" in terms of API calls, which will be explained in detail in [Limitations](#Limitations) later.

There are two types of usage for "App Service": "Single Execution" and "Continuous Running".

### 1. Single Execution

The "App Service" is invoked using the following method, and the "App Service" runs according to the "Single Execution" policy.

- [@zos/alarm](../../../reference/device-app-api/newAPI/alarm/set.mdx) Alarm API
- [`@zos/notification`](../../../reference/device-app-api/newAPI/notification/notify.mdx) Notification API
- System Event

"Single Execution" means exiting the "App Service" as soon as the execution of the relevant code is completed.

:::tip
"Single Execution" consumes less system resources and is more recommended.
:::

<!-- // TODO: 补充一个监听系统事件的例子，图片 -->

### 2. Continuous Running

You can start the "App Service" by using the [`@zos/app-service start API`](../../../reference/device-app-api/newAPI/app-service/start.mdx) method in the "Device App" to keep the service running.

:::info
After starting the "App Service" with [`@zos/app-service start API`](../../../reference/device-app-api/newAPI/app-service/start.mdx), exit the "Device App" UI and the "App Service" will still be running. If the device reboots while the "App Service" is running, the "App Service" will follow the system reboot and keep running.

The "App Service" will exit only when the exit service API is actively called or when system-related restrictions are triggered.
:::

<!-- // TODO: 补充一个服务的示例，图片 -->

## Using the "App Service"

### Configuring "App Service"

In [app.json](../../../reference/app-json.mdx), a Mini Program can be configured with multiple "App Service".

```json
{
  "module": {
    "app-service": {
      "services": ["app-service/demo_service"]
    }
  }
}
```

If you need to run the "App Service" continuously, you need to call the methods under the `@zos/app-service` module, such as `start`, which depend on the `device:os.bg_service` permission, and you need to configure the permission information in the `permissions` field.

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

### Register for "App Service"

Use the [`AppService`](../../../reference/device-app-api/newAPI/global/AppService.mdx) constructor to register the "App Service".

Look at a code example that uses [`Time`](../../../reference/device-app-api/newAPI/sensor/Time.mdx) sensor in the "App Service". The sensor prints the current time every minute.

```js
import { Time } from '@zos/sensor'

const timeSensor = new Time()

AppService({
  onInit(e) {
    logger.log(`service onInit(${e})`)

    timeSensor.onPerMinute(() => {
      logger.log(
        `${moduleName} time report: ${timeSensor.getHours()}:${timeSensor.getMinutes()}:${timeSensor.getSeconds()}`
      )
    })
  },
  onDestroy() {
    logger.log('service on destroy invoke')
  }
})
```

### "App Service" Implementation Strategy

#### Invoking single execution "App Service"

There are currently the following ways to invoke a single execution of the "App Service"

- [@zos/alarm](../../../reference/device-app-api/newAPI/alarm/set.mdx) Alarm API
- [`@zos/notification`](../../../reference/device-app-api/newAPI/notification/notify.mdx) Notification API
- System Event

<!-- // TODO: 补充图片，单次执行 -->

#### Managing Continuously Running "App Service"

The "App Service" is managed in the "Device App" via [`@zos/app-service start API`](../../../reference/device-app-api/newAPI/app-service/start.mdx) and [`@zos/app-service stop API`](../../../reference/device-app-api/newAPI/app-service/stop.mdx).

Call [`@zos/app-service exit API`](../../../reference/device-app-api/newAPI/app-service/exit.mdx) in the "App Service" to exit the current "App Service".

<!-- // TODO: 补充代码示例 -->

<!-- // TODO: 补充图片，持续运行 -->

### System API Capabilities and Limitations

The "App Service" has no UI interface and has more limitations on the use of system API capabilities. The following table lists the availability of APIs, and `*` represents the entire module.

| API Module        | API Description                                                           | Availability | Description                                     |
| ----------------- | ------------------------------------------------------------------------- | ------------ | ----------------------------------------------- |
| global            | Timer related interfaces such as `setTimeout`                             | NO           | Timer-related interfaces are not available      |
| @zos/ui           | \*                                                                        | NO           | No UI for "Device App"                          |
| @zos/sensor       | High-power sensors, including `Accelerometer`, `Geolocation`, `Gyroscope` | NO           | Unable to use high power consumption interfaces |
| @zos/sensor       | Sensors other than high power sensors, such as `HeartRate`.               | YES          | -                                               |
| @zos/app-service  | \*                                                                        | YES          | -                                               |
| @zos/notification | \*                                                                        | YES          | -                                               |
| @zos/app          | APIs whose names start with `get`, such as `getPackageInfo`               | YES          | -                                               |
| @zos/settings     | APIs whose names start with `get`, such as `getSystemInfo`                | YES          | -                                               |
| @zos/display      | APIs whose names start with `get`, such as `getSettings`                  | YES          | -                                               |
| @zos/device       | APIs whose names start with `get`, such as `getDeviceInfo`                | YES          | -                                               |
| @zos/user         | APIs whose names start with `get`, such as `getProfile`                   | YES          | -                                               |
| @zos/media        | Audio Playback Related APIs                                               | YES          | -                                               |
| @zos/ble          | Except for APIs whose names begin with `mst`, such as `send`              | YES          | -                                               |

:::info
The "App Service" has no UI and the only way to interact with the user's view is the `@zos/notification` System Notification API.
:::

## Limitation

### Permission

There is no permission limit for waking up a single execution of "App Service".

In addition to registering the permissions field in `app.json`, a continuously running app service also needs to request permission from the user, using `queryPermission` under the `@zos/app` module to query for permissions and `requestPermission` to request permissions from the user. If the user denies the permission, the "App Service" will not be able to run continuously.

![enable_service.jpg](/img/docs/guides/version_info/enable_service.jpg)

### System Limitation

The system limits the execution time for a single execution of the "App Service" to 600ms.

For a continuously running "App Service", the system ensures that only one instance of the "App Service" can run at a time. If there is a conflict between multiple services, an interactive interface will be displayed for the user to choose which "App Service" to run.

![service_manage.jpg](/img/docs/guides/version_info/service_manage.jpg)

## Full Example

A "Service App" demo is available in the Github Sample repository to demonstrate full functionality, see [3.0-feature](https://github.com/zepp-health/zeppos-samples/tree/main/application/3.0/3.0-feature)
