---
title: 蓝牙主机模式
sidebar_label: 蓝牙主机模式
---

## 介绍

在 Zepp OS v3 前，手表设备与手机设备通过 BLE 通信，手机设备是主机，手表设备是从机。

Zepp OS v3 中，大大增强了手表设备蓝牙能力，使其可以作为主机使用，连接蓝牙设备。

## BLE 相关介绍

BLE 设备角色主要分为两种角色，主机（Master 或 Central）和从机（Peripheral），当主机和从机建立连接之后才能相互收发数据。

主机设备可以扫描从机设备，并在发现有从机设备存在后与之建立连接，之后就可以使用从机设备提供的服务（Service）。

从机设备一直处于广播状态，等待被主机设备搜索和连接，不能主动发起搜索。

在两个蓝牙低功耗设备建立连接之后，双方的数据交互是基于 GATT (Generic Attribute Profile) 规范，根据该规范可以定义出一个个配置文件 (Profile)，描述该蓝牙设备提供的服务 (Service)。

在整个通信过程中，有几个重要概念：

- 配置文件 (Profile)
  - Profile 是被蓝牙标准预先定义的一些 Service 的集合，并不真实存在于蓝牙设备中。如果蓝牙设备之间要相互兼容，它们只要支持相同的 Profile 即可。一个蓝牙设备可以支持多个 Profile。
- 服务 (Service)
  - Service 是蓝牙设备对外提供的服务，一个设备可以提供多个服务，比如电量信息服务、系统信息服务等。每个服务由一个 UUID 唯一标识。
- 特征 (Characteristic)
  - 每个 Service 包含 0 至多个 Characteristic。比如，电量信息服务就会有个 Characteristic 表示电量数据。Characteristic 包含一个值 (value)和 0 至多个描述符 (Descriptor) 组成。在与蓝牙设备通信时，主要就是通过读写 Characteristic 的 value 完成。 每个 Characteristic 由一个 UUID 唯一标识。
- 描述符 (Descriptor)
  - Descriptor 是描述特征值的已定义属性。例如，Descriptor 可指定人类可读的描述、特征值的取值范围或特定于特征值的度量单位。每个 Descriptor 由一个 UUID 唯一标识。

下图摘自 BLE 官方文档，描述了几个关键概念的关系，每个蓝牙设备可能提供多个 Service，每个 Service 可能有多个 Characteristic，我们根据蓝牙设备的协议对对应 Characteristic 的值进行读写即可达到与其通信的目的。

![profile](/img/docs/guides/framework/ble_profile.jpg)

:::info
从机设备的蓝牙协议文档需要开发者自行寻找，建议去各设备官网查看文档。

以 GoPro 运动相机为例，协议文档参考 [Bluetooth Low Energy (BLE) Specification](https://gopro.github.io/OpenGoPro/ble_2_0)
:::

## 主机模式使用流程

![BLE](/img/docs/guides/version_info/BLE.svg)

API 文档请参考 [@zos/ble mstConnect](../../../reference/device-app-api/newAPI/ble/mstConnect.mdx)
