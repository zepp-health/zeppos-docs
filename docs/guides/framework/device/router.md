---
title: Routing
sidebar_label: Routing
---

The routing function can be implemented through the [Routing Module API], mainly by the following methods.

- [`push`](../../../reference/device-app-api/newAPI/router/push.mdx)
- [`exit`](../../../reference/device-app-api/newAPI/router/exit.mdx)
- [`replace`](../../../reference/device-app-api/newAPI/router/replace.mdx)
- [`home`](../../../reference/device-app-api/newAPI/router/home.mdx)

## Example

There are two pages `pageA` and `pageB`.

Currently at `pageA`, the `push` API is called and goes to `pageB`, at which point the page lifecycle is executed in the following order.

- pageA `onDestroy`
- pageB `onInit`
- pageB `build`

At this point, it stays on the `pageB` page, calls the `back` API, and returns to `pageA`, with the following lifecycle execution sequence.

- pageB `onDestroy`
- pageA `onInit`
- pageA `build`
