# 无法在模拟器或者真机预览小程序

无法正确预览小程序的问题，通常在预览示例小程序项目时出现。

排查此类问题首先我们需要在 [小程序配置 app.json](../../reference/app-json.mdx) 中查看到当前小程序支持的机型项目。

首先在 `app.json` 文件中搜索 `deviceSource` 字符串，如果搜索到结果，`deviceSource` 数字值即小程序所支持的机型，可以在 [设备基本信息](../../reference/related-resources/device-list.mdx) 中查询到 `deviceSource` 对应的手表设备。

下面的配置截取自 [calories - 2.0](https://github.com/zepp-health/zeppos-samples/blob/main/application/2.0/calories/app.json) `app.json`。

```json
"platforms": [
  {
    "name": "gts4",
    "deviceSource": 7995648
  },
  {
    "name": "gts4-w",
    "deviceSource": 7995649
  }
],
```

在 [设备基本信息](../../reference/related-resources/device-list.mdx) 文档中查询 `7995648`、`7995649` 得知，此小程序适配 Amazfit GTS 4 设备，我们只有在 Amazfit GTS 4 模拟器或者真机设备上才能预览这款小程序。否则我们需要在小程序配置中新增更多的支持机型。

如果 `app.json` 未搜索到 `deviceSource` 字符串，尝试搜索 `st`、`sr` 字符串，如果有类似的搜索结果，则表明此小程序遵循 [屏幕适配规范](../framework/device/screen-adaption.md) 来组织。

## 模拟器中预览的注意事项

启动模拟器，运行 `zeus dev` 命令后，小程序会在模拟器列表中显示，并且会显示支持的设备型号，我们只需启动对应型号的模拟器，即可正确预览小程序。

![simulator](/img/docs/guides/faq/simulator_devicesource.jpg)

## 真机预览中常见的错误

按照上文提示，检查小程序配置 app.json，确认支持机型无误后，如果扫码还是无法预览小程序，大概率是由于传输通道被占用。

当手表在下载系统更新，或者与 Zepp 做信息同步的时候，传输通道被占用，此时检查一下 Zepp 是否在同步数据，或者传输系统更新，等待其完成之后，再扫码预览小程序即可。
