---
title: Life Cycle
sidebar_label: Life Cycle
---

As shown in the picture：

![Life Cycle](/img/docs/guides/framework/life-cycle-en.jpg)

## Description

- App onCreate
  - Initialize the app global data for use by all pages. (Note: You can't draw the UI here, you haven't loaded the page yet)
  - Function signature `(params: string) => void`, where `params` is passed by the `params` parameter in [`launchApp`](../../../reference/device-app-api/newAPI/router/launchApp.mdx)
- Page onInit
  - page Initialization
  - Function signature `(params: string) => void`, where `params` is passed by the `params` parameter in [`push`](../../../reference/device-app-api/newAPI/router/push.mdx) or [`replace`](../../../reference/device-app-api/newAPI/router/replace.mdx)
- Page build
  - Drawing UI
  - Function signature `() => void`
- Page onDestroy
  - Destroy page
  - Function signature `() => void`
- App onDestroy
  - Destroy app
  - Function signature `() => void`

:::info
The life cycle of SecondaryWidget and Shortcut Cards is extended with `onResume` and `onPause` based on Page, see [Register SecondaryWidget and Shortcut Cards](secondary-widget.md)
:::
