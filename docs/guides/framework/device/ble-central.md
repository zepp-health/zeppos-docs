---
title: BLE Central
sidebar_label: BLE Central
---

## Introduction

Prior to Zepp OS v3, the watch device communicated with the cell phone device via BLE, with the cell phone device being the Master and the watch device being the Peripheral.

In Zepp OS v3, the Bluetooth capability of the watch device has been greatly enhanced so that it can be used as a Master to connect to Bluetooth devices.

## BLE Introduction

The BLE device roles are mainly categorized into two roles, Master (or Central) and Peripheral, and data can only be sent and received to and from each other when a connection is established between the Master and the Peripheral.

A Master device can scan for Peripheral devices and establish a connection with them when it finds out that a Peripheral device exists, after which it can use the services provided by the Peripheral device.

Peripheral devices remain in the broadcast state, waiting to be searched and connected by the Master device, and cannot initiate searches.

After a connection is established between two BLE devices, the data interaction between the two parties is based on the GATT (Generic Attribute Profile) specification, according to which a Profile can be defined that describes the services provided by the Bluetooth device.

There are several important concepts throughout the communication process:

- Profile
  - A Profile is a collection of services that are predefined by the Bluetooth standard and do not really exist in a Bluetooth device. If Bluetooth devices are to be compatible with each other, they only need to support the same Profile. A Bluetooth device can support more than one Profile.
- Service
  - Service is a service provided by Bluetooth device to the outside world, a device can provide multiple services, such as power information service, system information service, etc. Each service is uniquely identified by a UUID.
- Characteristic
  - Each Service contains 0 to more Characteristic, for example, the Power Information Service will have a Characteristic to represent the power data. Characteristic consists of a value and 0 to more Descriptors. When communicating with a Bluetooth device, it is mainly done by reading and writing the value of the Characteristic. Each Characteristic is uniquely identified by a UUID.
- Descriptor
  - A Descriptor is a defined attribute that describes a feature value. For example, a Descriptor may specify a human-readable description, a range of values for the feature value, or a unit of measure specific to the feature value. Each Descriptor is uniquely identified by a UUID.

The following diagram from the official BLE documentation describes the relationship between several key concepts. Each Bluetooth device may provide multiple Services, and each Service may have multiple Characteristics, so we can read and write the value of the corresponding Characteristic according to the protocol of the Bluetooth device to achieve the purpose of communicating with it.

![profile](/img/docs/guides/framework/ble_profile.jpg)

:::info
The Bluetooth protocol documentation of the Peripheral device needs to be found by developers themselves, and it is recommended to go to the official website of each device to check the documentation.

Example of a GoPro sports camera, protocol documentation reference [Bluetooth Low Energy (BLE) Specification](https://gopro.github.io/OpenGoPro/ble_2_0).
:::

## Master Mode Usage Flow

![BLE](/img/docs/guides/version_info/BLE.svg)

See [@zos/ble mstConnect](../../../reference/device-app-api/newAPI/ble/mstConnect.mdx) for API documentation.
