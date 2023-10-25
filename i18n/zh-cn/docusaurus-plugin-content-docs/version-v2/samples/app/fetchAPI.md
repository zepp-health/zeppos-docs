# FetchAPI

## 介绍

[FetchAPI - https://github.com/zepp-health/zeppos-samples/tree/main/application/2.0/fetch-api](https://github.com/zepp-health/zeppos-samples/tree/main/application/2.0/fetch-api) 是一个完整的请求网络接口的示例小程序

:::caution
此小程序展示完成一次网络请求的全过程，网络请求的返回值使用 `Promise` 模拟，并未请求真实接口。

开发者可对伴生服务中注释代码稍加调整，传入 fetch API 的相关参数，即可轻松实现请求真实网络数据。
:::

:::tip
该应用 /shared 目录下的 message.js 是对底层通信 API 过程的封装，现阶段建议开发者参考示例应用中的用法进行模仿。
:::

## 覆盖场景

- 设备应用、伴生服务通信
- 伴生服务使用 fetch API 请求网络接口

## 说明

点击按钮，即可触发网络请求过程，将接口中返回的 `HELLO ZEPPOS` 字样进行展示

![FetchAPI](/img/sample/app/fetchAPI.jpg)
