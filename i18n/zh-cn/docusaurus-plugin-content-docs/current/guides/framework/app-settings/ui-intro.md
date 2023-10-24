---
title: UI 组件使用介绍
sidebar_label: UI 组件使用介绍
---

在上文注册设置应用中提到过 `build` 生命周期的返回值是 `RenderFunc` 类型。

UI 组件以函数的形式存在，其类型可以如下表示，其中部分 UI 组件支持 `renderFuncArr` 子组件。

```ts
(props: Props, renderFuncArr?: RenderFunc | Array<RenderFunc>) => result: RenderFunc
```

具体用法请参考 [UI 组件](../../../reference/app-settings-api/ui/auth.mdx)。

其中部分组件支持传入 `style` 属性，支持 [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 相关属性，属性名以 [小驼峰(camelCase)](https://en.wikipedia.org/wiki/Camel_case) 方式命名。

## 代码示例

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
          label: '姓名',
        })
      ),
      Section(
        {},
        Button({
          label: '开始',
          onClick() {
            // ...
          }
        })
      )
    ])
  }
})
```
