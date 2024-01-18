---
title: How to submit an App
sidebar_position: 1
sidebar_label: How to submit an App
---

## Operation Process

![app_process](/img/docs/distribute/app_process_en.png)

## App Registration

- On the application list page, select **Create App**, enter the application name, and select **Submit**.

  ![app_register](/img/docs/distribute/app_register_en.png)

- Once the registration is completed, you can view the registered application information in the application list.
- During the application development, you need to configure the `appId` of registered application in the application `app.json`.

  ```json
  {
    "app": {
      "appId": appId
    }
  }
  ```

## Prerequisites For Publishing App

- You have prepared the application for the ZAB package that meets the following requirements.
  - The application name is not occupied by other applications developed by yourself.
  - The appId in the package must be the same as the appId specified in the application release.
- You will need to prepare the following information in advance.

  | Preparation Items  | Description                                                                                                                                                                                                                                 |
  | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Country and region | You need to determine in advance the country and region where the application will be published.                                                                                                                                            |
  | Privacy Statement  | Providing the text content of this application's privacy policy helps users understand how you handle sensitive user data and device data. The privacy policy must fully describe how your application collects, uses and shares user data. |

## Configure Basic Application Information

- After completing the application registration and preparing the application ZAB package, you can select the application you want to publish and **Submit** it for review.

  ![app_submit](/img/docs/distribute/app_submit_en.png)

- Enter the application release page, fill in the basic information of the application, including country, application category, application package, supported devices, version number, application language, application icon, privacy statement, call permission, whether the installer contains SDK.

  ![app_infomation](/img/docs/distribute/app_infomation_en.png)

### AppId

The appId is a unique identifier for the application, which is automatically assigned at the time of application registration.

### Country

Please select the country where you want your app to be listed.

![app_country](/img/docs/distribute/app_country_en.png)

### Application Category

- General: no attachment is required;
- Medical: attach the approval letter from a medical institution;
- Insurance: attach the corporate permit and insurance business permit of the insurance company, the permit for insurance brokerage business, the permit for loss adjuster business, and the permit for insurance agency business;
- Sales of General Products: attach the ICP certificate (telecommunications and information service business license) and the EDI certificate (value-added telecommunications business license);
- Sales of Food, Medicine, Health Care Products, and Medical Devices: attach the food business license, Internet drug information service qualification certificate, health care food approval certificate, Class I medical device production record certificate, medical device manufacturing enterprise license, and medical device distributing enterprise license;

![app_category](/img/docs/distribute/app_category_en.png)

### Developer

Display your account nickname, the entrance of nickname modification is Account Center->Account Information->Nickname. After the nickname modification, if you launch any review again and the review is passed, the nickname will be updated in the app store.

### Application Package

Upload of the application ZAB package, the appId in the package should be the same as the appId of the current page.

### Support Devices

After uploading the application ZAB package, the name of the supported devices will be automatically recognized and filled in.

If the platform subsequently detects that the developer's Mini Program has a new device that can be supported, the platform will take the initiative to adapt and distribute the developer's Mini Program to the new device.

### Version

After uploading the application ZAB package, the version number of the current package will be automatically recognized and filled in.

### Language

Select the languages supported by your app and fill in the app name, app profile, app details, app profile preview image.

![app_language](/img/docs/distribute/app_language_en.png)

### App Introduction Screenshots

App Introduction Screenshots：

- The output size: 360×360px, format: PNG
- The background of screenshots should be transparent and not have a fill color.
- Please ensure that the app interface is maximally displayed in the image area.
- 3 or more screenshots are recommended.

App Introduction Screenshots (Circular screen devices)

![app_preview_round](/img/docs/distribute/app_preview_round.png)

- ① Screenshot of the application interface
- ② 360×360px square transparent background
- ③ App introduction screenshot: place the screenshot of the application interface in the middle of the square transparent background with no margins around

App Introduction Screenshots (Rectangular Screen Devices)

![app_preview_square](/img/docs/distribute/app_preview_square.png)

- ① Screenshot of the application interface
- ② 360×360px square transparent background
- ③ App introduction screenshot: place the screenshot of the application interface in the middle of the square transparent background with an equal margins on the left and right, and no margins on the top or bottom

### Application icon

- Icon size: 240 * 240px, image format: PNG
- The icon should be a circular image with transparent background, keep the area around the image transparent and not filled with color or any other things.
- Please design the icon according to the [Design Specifications - app icons](../designs/visual/icons.md#app-icons).

![icon_standard](/img/docs/distribute/icon_standard.png)

- Application icon
- 240×240 px square transparent background
- Application icon: place the App icon image in the middle of the square transparent background，make sure there are no margins around the icon

### Privacy Statement

Please provide the text content of this application's privacy policy, which can help users understand how you handle sensitive user data and device data. The privacy policy must fully describe how your application collects, uses and shares user data.

### Calling Permissions

Check the data permissions that the application needs to call, or "None" if none.

### Whether the installation package include the SDK

If the SDK is included, please describe the name of the SDK and the purpose of use.

## Submit For Review

- Once all information is confirmed, click the **Submit for Approval** button to initiate the review.

  ![app_submit_audit](/img/docs/distribute/app_submit_audit_en.png)

- After successful submission, you can check the review status of the app in the app list，the review time is generally 1~5 working days, please wait patiently.

  ![app_audit_status](/img/docs/distribute/app_audit_status_en.png)

- If the audit does not pass, you can check the reason or select **Edit** to revise it again.

  ![app_unapproved](/img/docs/distribute/app_unapproved_en.png)

- Audited applications can also upgrade features or fix exceptions by selecting **Version Upgrade** and updating the version.

  ![app_approved](/img/docs/distribute/app_approved_en.png)
