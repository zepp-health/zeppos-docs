---
title: API_LEVEL 5.0 新特性
sidebar_label: API_LEVEL 5.0 新特性
---

# API_LEVEL 5.0 新特性

API_LEVEL 5.0 新增可组合列表项的列表容器、二进制序列化、硬件随机数和数据分区容量查询能力，并在固件侧优化多语言处理。

## LIST_VIEW 列表容器

新增 `LIST_VIEW`，以 `GROUP` 作为列表项，可在每项中组合文字、图片、`BUTTON`、`SLIDE_SWITCH` 等非容器控件，适合带行内操作的任务列表、设置列表等场景。

相较于 `SCROLL_LIST` 的模板与数据数组方式，`LIST_VIEW` 可以直接创建子控件，使用各控件自身的回调处理操作，并直接更新某一行中的子控件，无需先定义 `item_config` 中的文本和图片模板。

参数与示例参考 [LIST_VIEW](../../reference/device-app-api/newAPI/ui/widget/LIST_VIEW.mdx)，包括直接创建列表项、每行添加按钮和更新行内内容。

## 二进制序列化

`@zos/utils` 新增两组接口，用于在 JS 值与二进制缓冲区之间转换。根据数据用途选择格式，并配套使用对应的编码和解码接口。

- [valueToBuffer](../../reference/device-app-api/newAPI/utils/valueToBuffer.mdx) / [bufferToValue](../../reference/device-app-api/newAPI/utils/bufferToValue.mdx)：使用 JS 引擎内置的序列化方法，稳定、可靠、高效。推荐用于应用内持久化，无需预估缓冲区大小。
- [cborEncode](../../reference/device-app-api/newAPI/utils/cborEncode.mdx) / [cborDecode](../../reference/device-app-api/newAPI/utils/cborDecode.mdx)：在 JS 值与 CBOR 缓冲区之间转换，适合需要 CBOR 格式的数据交换。

## 硬件随机数

`@zos/crypto` 新增 [getRandomValues](../../reference/device-app-api/newAPI/crypto/getRandomValues.mdx)，使用硬件随机数填充传入的 `Uint8Array`，并返回同一个数组对象，便于需要随机字节的应用逻辑使用。

## 数据分区容量查询

`@zos/device` 新增 [getDataDiskInfo](../../reference/device-app-api/newAPI/device/getDataDiskInfo.mdx)，获取 `data://` 数据分区的总容量、可用容量和已用容量，单位为字节。应用可以在下载或保存较大文件前检查可用空间。

查询范围为整个数据分区，而非当前应用的占用空间。先检查返回值的 `isSuccess`，查询成功后再读取容量字段。

## 多语言性能优化

多语言处理在固件侧完成优化。开发者可以继续沿用现有的国际化接口，无需修改代码。
