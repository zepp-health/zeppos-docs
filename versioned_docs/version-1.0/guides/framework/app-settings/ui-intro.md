---
title: Introduction to the use of UI components
sidebar_label: Introduction to the use of UI components
---

The return value of the `build` lifecycle is of type `RenderFunc` as mentioned above in the registration setup application.

UI components exist as functions whose types can be represented as follows, with some UI components supporting `renderFuncArr` subcomponents.

```ts
(props: Props, renderFuncArr?: RenderFunc | Array<RenderFunc>) => result: RenderFunc
```

Please refer to [UI Components](../../../reference/app-settings-api/ui/auth.mdx)for details of usage.

Some of these components support passing in the `style` attribute, and support [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) related properties with names like [camelCase](https://en.wikipedia.org/wiki/Camel_case).

## Code example

```js
AppSettingsPage({
  build(props) {
    return Button({
      label: 'Delete',
      style: {
        fontSize: '12px',
        borderRadius: '30px',
        background: '#D85E33',
        color: 'white'
      },
      onClick: () => {
        // ...
      }
    })
  }
})
```

```js
AppSettingsPage({
  build(props) {
    return Section({}, [
      Section(
        {},
        TextInput({
          label: 'Name',
        })
      ),
      Section(
        {},
        Button({
          label: 'Start',
          onClick() {
            // ...
          }
        })
      )
    ])
  }
})
```
