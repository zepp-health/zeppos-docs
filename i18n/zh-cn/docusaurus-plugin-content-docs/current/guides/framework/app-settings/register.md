---
title: 注册设置应用
sidebar_label: 注册设置应用
---

设置应用需要使用 `AppSettingsPage` 构造函数注册，仅有一个 `build` 生命周期。

```js title="app.js"
AppSettingsPage({
  build(props) {
    return RenderFunc
  }
})
```

`AppSettingsPage` 构造函数签名:

```ts
interface Props {
  settingsStorage: SettingsStorage
}

interface Option {
  build: (props: Props) => RenderFunc
}

interface AppSettingsPage {
  (option: Option): void
}
```

`build` 生命周期中在构造函数调用后立即执行，返回的 `RenderFunc` 是 UI 渲染函数，通过 `RenderFunc` 绘制视图，所有的 UI 组件函数返回值均为 `RenderFunc`，关于 UI 组件，参考 [UI 组件使用介绍](./ui-intro.md)。

通过 `props.settingsStorage` 调用 SettingsStorage API，实现数据更新、视图更新、与伴生服务通信的目的，参考 [SettingsStorage API](../../../reference/side-service-api/settings-storage.mdx)。

:::info
设置应用具有响应式的特性，每当 `SettingsStorage` 中数据变化，都会执行 `build` 生命周期函数，重新渲染视图。
:::

## 完整示例

建议开发者参考以下的代码结构来开发设置应用。

```js
AppSettingsPage({
  // 1. Define state
  state: {
    testKey: null
  },
  build(props) {
    // 2. Get SettingsStorage
    this.getStorage(props)

    // 3. Logic
    const toggleButtonMap = {
      ['Hello Zepp OS']: 'Hello World',
      ['Hello World']: 'Hello Zepp OS'
    }

    // 4. Return Render Function
    return Button({
      label: this.state.testKey,
      style: {
        fontSize: '12px',
        borderRadius: '30px',
        background: '#D85E33',
        color: 'white'
      },
      onClick: () => {
        // 5. Modify the data in settingsStorage in the callback function of the event
        props.settingsStorage.setItem('testKey', toggleButtonMap[this.state.testKey])
      }
    })
  },
  getStorage(props) {
    this.state.testKey = props.settingsStorage.getItem('testKey') || 'Hello World'
  }
})
```

建议设置应用的代码分为五个部分来组织

1. 定义 `state`，在构造函数内部可以通过 `this.state` 来访问
2. 在 `build` 生命周期一开始获取 `SettingsStorage` 中的数据，并存入 `state` 中
3. 程序逻辑
4. 返回 Render 函数，渲染视图
5. 在视图注册的事件回调函数中操作 `SettingsStorage`，重新执行 `build` 生命周期函数，触发视图更新
