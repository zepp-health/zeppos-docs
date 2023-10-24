---
title: Register to set up the application
sidebar_label: Register to set up the application
---

Setting up the application requires registering an instance using the `AppSettingsPage` constructor, binding the lifecycle callback function.

Currently there is only one `build` lifecycle.

```js title="app.js"
AppSettingsPage({
  build(props) {}
})
```

Expand on the type of this constructor：

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

In short, `props.settings` is the `option` in `AppSettingsPage(option)`, `props.settingsStorage` is the body of the SettingsStorage API call, refer to the API chapter for how to use it.

`RenderFunc` is the UI rendering function, all the UI component functions return value is `RenderFunc`, about UI components, refer to [Introduction to the use of UI components](./ui-intro.md).
