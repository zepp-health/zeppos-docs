---
title: 注册设置应用
sidebar_label: 注册设置应用
---

设置应用需要使用使用 `AppSettingsPage` 构造函数注册实例，绑定生命周期回调函数。

目前仅有一个 `build` 生命周期。

```js title="app.js"
AppSettingsPage({
  build(props) {}
})
```

展开说一下这个构造函数的类型：

```ts
interface Props {
  settings: Option
  settingsStorage: SettingsStorage
}

interface Option {
  build: (props: Props) => RenderFunc
  [propName: string]
}

interface AppSettingsPage {
  (option: Option): void
}
```

简单来说就是 `props.settings` 就是 `AppSettingsPage(option)` 中的 `option`、`props.settingsStorage` 是 SettingsStorage API 的调用主体，如何使用参考 API 章节。

`RenderFunc` 则是 UI 渲染函数，所有的 UI 组件函数返回值均为 `RenderFunc`，关于 UI 组件，参考 [UI 组件使用介绍](./ui-intro.md)。
