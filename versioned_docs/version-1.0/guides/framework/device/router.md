---
title: Routing
sidebar_label: Routing
---

A series of routing-related APIs are provided:

- `hmApp.gotoPage`
- `hmApp.goBack`
- `hmApp.reloadPage`
- `hmApp.gotoHome`

## Example

There are two pages `pageA` and `pageB`.

Currently in `pageA`, `hmApp.gotoPage` is called to go to `pageB`, at which point the page lifecycle is executed in the following order:

- pageA `onDestroy`
- pageB `onInit`
- pageB `build`

At this point, the page stays at `pageB` and calls `hmApp.goBack` to return to `pageA`, and the life cycle execution order is as follows:

- pageB `onDestroy`
- pageA `onInit`
- pageA `build`
