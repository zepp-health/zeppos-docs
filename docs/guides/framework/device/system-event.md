---
title: "System Events"
sidebar_label: "System Events"
---

## Introduction

In Zepp OS v3, we organize system level state changes, health sensor anomalies, and other scenarios and notify them in the form of ""System Events"s" to ["App Service"](./app-service.md).

## "System Events" Definition

| "System Events"                      | Scene        | Other Params                            | API_LEVEL |
| --------------------------------- | ------------ | --------------------------------------- | --------- |
| `event:os.health.sleep_status`    | Sleep state change | -                                       | 3.0       |
| `event:os.health.heart_rate_abnl` | Abnormal heart rate     | -                                       | 3.0       |
| `event:os.helath.stress_remind`   | Stress Relief Alert     | -                                       | 3.0       |
| `event:os.health.wear_status`     | Change of wearing status | -                                       | 3.0       |
| `event:os.system.sleep_mode`      | Sleep mode switch | `status`: `enter` - Enter, `exit` - Exit | 3.0       |
| `event:os.weather.sun_rise`       | Sunrise         | -                                       | 3.0       |
| `event:os.weather.sun_set`       | Sunset         | -                                       | 3.0       |
| `event:os.weather.moon_rise`      | Moonrise         | -                                       | 3.0       |
| `event:os.weather.moon_set`       | Moonset         | -                                       | 3.0       |

## Listening to ""System Events"s" with "App Service"

### Configuring "System Events"s

Configure the module in [Mini Program configuration app.json](../../../reference/app-json.mdx), an Mini Program specifies an `App Service` to respond to `"System Events"s`, and the `path` is the path to the `App Service`.

During the coding process, first register the "App Service", and then specify one of the registered "App Service"s to respond to the "System Events", refer to the sample configuration.

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

To listen to a system event, developer need to add the corresponding event name to the `permissions` array. For example, if you want to listen to the sunset event, you need to add the event name `event:os.weather.sun_rise` to the `permissions` array.

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

### "App Service" Response to System Events Policy

When the `System Event` is triggered, the `AppService` that responds to the `System Event` is evoked and the `AppService` constructor is executed, and the event-related parameters are passed in the `options`.

```js
AppService({
  onInit(options) {
    // evoke
  }
})
```

<!-- // TODO: 这里有流程图 -->

### options Data format

Parameters are organized in a manner similar to WEB URI query parameter splicing, with `&` separating parameters and `=` separating keys and values.

Look at two examples:

- Sunrise event：`event:os.weather.sun_rise`
- Enter sleep mode `event=event:os.system.sleep_mode&status=enter`

## Custom Events

In addition to registering "App Service" to respond to System Events, we have also opened up this event-based communication mechanism to allow developers to customize system events and perform event dispatching to evoke "App Service" in response to System Events

Refer to [@zos/app emitCustomSystemEvent](../../../reference/device-app-api/newAPI/app/emitCustomSystemEvent.mdx)
