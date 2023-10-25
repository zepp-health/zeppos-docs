---
title: 发布表盘
sidebar_position: 1
sidebar_label: 发布表盘
---

## 操作流程

![watchface_process](/img/docs/distribute/watchface_process.png)

## 发布表盘前提条件
- 您已准备表盘的ZAB软件包，满足如下要求：
  - 表盘名称未被自己开发的其他表盘占用。
  - 软件包中的appId必须与表盘发布时指定的appId一致。
- 您需要提前准备如下信息。

  | 准备项           | 说明            |
  | --------------- | -------------- |
  |表盘付费情况|付费/免费|
  |发布国家和地区|您需要提前确定表盘的发布国家和地区。|

## 配置表盘基本信息
- 在表盘制作工具中制作的表盘，会在开发者中心->应用服务->表盘列表中生成相应的表盘
- 准备好表盘ZAB软件包，就可以选择您想要发布的表盘，提交审核。

  ![watchface_submit](/img/docs/distribute/watchface_submit.png)

- 进入表盘发布页面，填写表盘基本信息，包含付费情况、上架地区、表盘安装包、支持设备、表盘分类、表盘语种。

  ![watchface_information](/img/docs/distribute/watchface_information.png)

### appId
appId为表盘的唯一标识，在表盘制作工具导出表盘ZAB安装包时会自动分配

### 付费情况
设置表盘是否付费购买才能使用。付费表盘需选择付费金额档位，且只支持特定的国家/地区。

![watchface_pay_status](/img/docs/distribute/watchface_pay_status.png)

### 上架地区
请选择您的表盘希望上架的国家地区

![watchface_country](/img/docs/distribute/watchface_country.png)

### 开发者
展示您的账号昵称，昵称修改入口为账号中心->账号信息->昵称。昵称修改后再次发起任意提审且审核通过时，将在表盘商城更新昵称
###  表盘安装包
本地上传表盘ZAB软件包，该软件包中的appId需与当前页面的appId一致

### 支持设备
上传表盘ZAB软件包后，会自动识别填入支持的设备名称

### 表盘分类
根据表盘特点，选择合适的类型

![watchface_category](/img/docs/distribute/watchface_category.png)

### 表盘语种
选择您的表盘支持的语种并填写表盘名称、表盘描述、表盘预览图

![watchface_language](/img/docs/distribute/watchface_language.png)

## 提交审核
- 所有信息确认无误后，点击**提交审核**按钮发起审核。

  ![watchface_submit_audit](/img/docs/distribute/watchface_submit_audit.png)

- 提交成功后，在表盘列表中可查看该表盘的审核状态，审核时间一般为1~5个工作日，请耐心等待。

  ![watchface_audit_status](/img/docs/distribute/watchface_audit_status.png)

- 如果审核不通过，可以查看审核不通过原因，选择**编辑**，重新修改。

  ![watchface_unapproved](/img/docs/distribute/watchface_unapproved.png)

- 审核通过的表盘，还可以升级功能或修复异常，选择**更新**，更新版本。

  ![watchface_approved](/img/docs/distribute/watchface_approved.png)

