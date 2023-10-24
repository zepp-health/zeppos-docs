---
title: 系统通知
sidebar_label: 系统通知
---

## 介绍

在 Zepp OS v3 中，开放了系统通知中心的 API，小程序可以发送系统通知，是触达用户更友好的方式。

系统通知 API 提供了高度可定制性，按钮数量内容，震动效果都可以通过参数定制。

用户通过点击按钮可以打开小程序页面，或者唤起「设备应用服务」。

![notification_demo.jpg](/img/docs/guides/version_info/notification_demo.jpg)

## 代码示例

```js
import { parseQuery } from '../libs/utils'
import { log } from '@zos/utils'
import * as notificationMgr from '@zos/notification'
import * as appServiceMgr from '@zos/app-service'
import { Time } from '@zos/sensor'

const moduleName = "Time Service";
const timeSensor = new Time();

const logger = log.getLogger('time.service')

// Send a notification
function sendNotification() {
  logger.log('send notification')
  notificationMgr.notify({
    title: "Time Service",
    content: `Now the time is ${timeSensor.getHours()}:${timeSensor.getMinutes()}:${timeSensor.getSeconds()}`,
    actions: [
      {
        text: "Home Page",
        file: "pages/index",
      },
      {
        text: "Stop Service",
        file: "app-service/time_service",
        param: "action=exit", //! processed in onEvent()
      },
    ],
  });
}

AppService({
  onEvent(e) {
    logger.log(`service onEvent(${e})`);
    let result = parseQuery(e);
    if (result.action === "exit") {
      appServiceMgr.exit();
    }
  },
  onInit(e) {
    logger.log(`service onInit(${e})`);

    timeSensor.onPerMinute(() => {
      logger.log(
        `${moduleName} time report: ${timeSensor.getHours()}:${timeSensor.getMinutes()}:${timeSensor.getSeconds()}`
      );
      sendNotification();
    });

    timeSensor.onPerDay(() => {
      logger.log(moduleName + " === day change ===");
    });
  },
  onDestroy() {
    logger.log("service on destroy invoke");
  },
});
```
