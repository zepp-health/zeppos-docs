---
title: Register Settings App
sidebar_label: Register Settings App
---

The settings application needs to be registered using the `AppSettingsPage` constructor and has only one `build` lifecycle.

```js title="app.js"
AppSettingsPage({
  build(props) {
    return RenderFunc
  }
})
```

`AppSettingsPage` constructor signature.

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

The `build` lifecycle is executed immediately after the constructor call, the returned `RenderFunc` is the UI rendering function, the UI is drawn by `RenderFunc`, all the UI component functions return the value of `RenderFunc`, for more information about the UI components, please refer to [Introduction to the use of UI components](./ui-intro.md).

Call the SettingsStorage API via `props.settingsStorage` for the purpose of data updates, view updates, and communication with companion services, see [SettingsStorage API](../../../reference/side-service-api/settings-storage.mdx).

:::info
The Settings app is responsive, executing the `build` lifecycle function to re-render the view whenever the data in `SettingsStorage` changes.
:::

## Example

It is recommended that developers refer to the following code structure to develop a Settings App.

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

It is recommended that the code for the Settings App be organized in five sections

1. Define `state`, which can be accessed from within the constructor via `this.state`
2. Get the data in `SettingsStorage` at the beginning of the `build` lifecycle and store it in `state`
3. Program logic
4. Returns the Render function, which renders the UI
5. Manipulate `SettingsStorage` in the registration event callback function to re-execute the `build` lifecycle function to trigger the UI update
