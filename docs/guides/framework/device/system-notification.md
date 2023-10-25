---
title: System Notification
sidebar_label: System Notification
---

## Introduction

In Zepp OS v3, the API for the system notification center is opened, and Mini Programs can send system notifications, a friendlier way to reach users.

The system notification API provides a high degree of customizability, with the number of buttons, content, and vibration effects all customizable through parameters.

Users can open the Mini Program page or evoke the "App Service" by tapping the button.

![notification_demo.jpg](/img/docs/guides/version_info/notification_demo.jpg)

## Code Example

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
