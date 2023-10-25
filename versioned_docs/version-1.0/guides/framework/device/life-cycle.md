---
title: Life Cycle
sidebar_label: Life Cycle
---

As shown in the figure:

![life cycle](/img/docs/guides/framework/life-cycle-en.jpg)

## Description

- App onCreate
  - Initialize the app global data for use by all pages. (Note: UI cannot be drawn here, no page is loaded yet)
  - Function signature `(param: string) => void`, where `param` is passed by the `param` parameter in `hmApp.startApp`
- Page onInit
  - Initialize page
  - Function signature `(param: string) => void`, where `param` is passed by the `param` parameter in `hmApp.gotoPage` or `hmApp.reloadPage`
- Page build
  - Draws the UI
  - Function signature `() => void`
- Page onDestroy
  - Destroy page
  - Function signature `() => void`
- App onDestroy
  - Destroy the app
  - Function signature `() => void`
