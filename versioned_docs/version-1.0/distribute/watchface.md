---
title: How to submit a Watchface
sidebar_position: 1
sidebar_label: How to submit a Watchface
---

## Operation Process

![watchface_process](/img/docs/distribute/watchface_process_en.png)

## Prerequisites For Publishing Watchface
- You have prepared the watchface for the ZAB package that meets the following requirements：
  - The watchface name is not occupied by other watchface developed by yourself.
  - The appId in the package must be the same as the appId specified in the watchface release.
- You will need to prepare the following information in advance.

  | Preparation Items          | Description             |
  | --------------- | -------------- |
  |Country and region|You need to determine in advance the country and region where the watchface will be published.|

## Configure Basic Watchface Information
- Watchface made in the Watchface Maker tool will generate the corresponding item in the Zepp Console->Application Services->Watchface
- Once you have the watchface ZAB package ready, you can select the watchface you want to publish and **Submit** them for review.

  ![watchface_submit](/img/docs/distribute/watchface_submit_en.png)

- Enter the watchface release page and fill in the basic information of the watchface, including country, watchface installer, supported devices, watchface category, watchface language, and work statement.

  ![watchface_information](/img/docs/distribute/watchface_information_en.png)

### AppId
The appId is a unique identifier for the watchface, which will be automatically assigned when the watchface maker exports the watchface ZAB installation package.

### Country
Please select the country where you want your watchface to be listed.

![watchface_country](/img/docs/distribute/watchface_country_en.png)

### Developer
Display your account nickname, the entrance of nickname modification is Account Center->Account Information->Nickname. After the nickname modification, if you launch any review again and the review is passed, the nickname will be updated in the watchface store.
###  Watchface Package
Upload of the watchface ZAB package, the appId in the package should be the same as the appId of the current page.

### Support Devices
After uploading the watchface ZAB package, the name of the supported devices will be automatically recognized and filled in.

### Watchface Category
Choose the right type according to the watchface characteristics

![watchface_category](/img/docs/distribute/watchface_category_en.png)

### Language
Select the languages supported by your app and fill in the watchface name, watchface details, watchface preview image.

![watchface_language](/img/docs/distribute/watchface_language_en.png)
## Submit For Review
- Once all information is confirmed, click the **Submit for Approval** button to initiate the review.

  ![watchface_submit_audit](/img/docs/distribute/watchface_submit_audit_en.png)

- After successful submission, you can check the review status of the watchface in the watchface list，the review time is generally 1~5 working days, please wait patiently.

  ![watchface_audit_status](/img/docs/distribute/watchface_audit_status_en.png)

- If the audit does not pass, you can check the reason or select **Edit** to revise it again.

  ![watchface_unapproved](/img/docs/distribute/watchface_unapproved_en.png)

- Audited watchface can also upgrade features or fix exceptions by selecting **Update** and updating the version.

  ![watchface_approved](/img/docs/distribute/watchface_approved_en.png)



