# FetchAPI

## Introduction

The [FetchAPI - https://github.com/zepp-health/zeppos-samples/tree/main/application/2.0/fetch-api](https://github.com/zepp-health/zeppos-samples/tree/main/application/2.0/fetch-api) is a complete sample Mini Program for requesting the web interface

:::caution
This Mini Program shows the whole process of completing a network request. The return value of the network request is simulated using `Promise` and the real interface is not requested.

Developers can easily request real network data by slightly adjusting the commented code in the Side Service and passing in the relevant parameters of the fetch API.
:::

:::tip
The message.js in the /shared directory of this application is a wrapper around the underlying communication API process, and at this stage it is recommended that developers refer to the usage in the sample application for emulation.
:::

## Coverage Scenes

- Communication between Device App and Side Service
- The Side Service uses the fetch API to request the web interface

## Description

Click on the button to trigger the web request process and display the `HELLO ZEPPOS` words returned in the interface

![FetchAPI](/img/sample/app/fetchAPI.jpg)
