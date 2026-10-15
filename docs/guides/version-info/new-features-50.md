---
title: API_LEVEL 5.0 New Features
sidebar_label: API_LEVEL 5.0 New Features
---

# API_LEVEL 5.0 New Features

API_LEVEL 5.0 adds composable list items, binary serialization, hardware-generated random values, and data partition storage queries. It also includes firmware optimizations for internationalization.

## LIST_VIEW list container

The new `LIST_VIEW` uses `GROUP` widgets as list items. Each item can contain text, images, `BUTTON`, `SLIDE_SWITCH`, and other non-container widgets, making it suitable for task and settings lists with controls inside each row.

Compared with `SCROLL_LIST`, which uses templates and data arrays, `LIST_VIEW` lets you create child widgets directly, handle their own callbacks, and update individual child widgets. There is no need to first define text and image templates in `item_config`.

See [LIST_VIEW](../../reference/device-app-api/newAPI/ui/widget/LIST_VIEW.mdx) for parameters and examples of creating items, adding buttons, and updating content within a row.

## Binary serialization

`@zos/utils` adds two pairs of APIs for converting between JS values and binary buffers. Choose the format based on how the data will be used, and pair each encoder with its corresponding decoder.

- [valueToBuffer](../../reference/device-app-api/newAPI/utils/valueToBuffer.mdx) / [bufferToValue](../../reference/device-app-api/newAPI/utils/bufferToValue.mdx): Use stable, reliable, and efficient serialization methods built into the JS engine. Recommended for application-local persistence; no buffer size estimate is needed.
- [cborEncode](../../reference/device-app-api/newAPI/utils/cborEncode.mdx) / [cborDecode](../../reference/device-app-api/newAPI/utils/cborDecode.mdx): Convert between JS values and CBOR buffers for data exchange that requires the CBOR format.

## Hardware-generated random values

`@zos/crypto` adds [getRandomValues](../../reference/device-app-api/newAPI/crypto/getRandomValues.mdx), which fills a supplied `Uint8Array` with hardware-generated random values and returns the same array object. Use it when application logic needs random bytes.

## Data partition storage information

`@zos/device` adds [getDataDiskInfo](../../reference/device-app-api/newAPI/device/getDataDiskInfo.mdx) to query the total, free, and used capacity of the `data://` data partition in bytes. Applications can check free space before downloading or saving large files.

The query covers the entire data partition, rather than storage used by the current application. Check `isSuccess` before reading the capacity fields.

## Internationalization improvements

Internationalization processing is optimized in the firmware. Existing internationalization code can continue using the same APIs without modification.
