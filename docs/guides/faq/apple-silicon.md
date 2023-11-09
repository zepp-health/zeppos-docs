---
title: Enable System Extensions or Kernel Extension on Apple Silicon Mac
---

## Introduction

Extending third-party kernels on Apple Silicon Mac requires Secure Boot to be configured as "Reduced Security".

## Operation process

### 1. Enter macOS Recovery

Image intercepted from [Apple Support - Mac startup key combinations](https://support.apple.com/en-us/HT201255)。

Follow the steps on the picture.

![CLI Bridge](/img/docs/guides/faq/apple-silicon/recovery.jpg)

Then click on "Options" and you may be asked to log in to your account. After you have done so, go to macOS Recovery.

### 2. Allow kernel extensions

1. Click "Utilities" on the menu bar
2. Go to "Startup Security Utility"
3. Go to "Security Policy"
4. Select "Reduce Security" and check "Allow user management of kernel extensions from identified developers"
5. Select "OK"

:::tip
If you need to enter a password during the process, follow the prompts to enter the password to confirm
:::

This completes the system expansion configuration. After the setup is finished, click "Apple Menu" => "Restart" in the menu bar.

This configuration will take effect after the reboot is complete.

For more information, please refer to [Apple Support - System and kernel extensions in macOS](https://support.apple.com/guide/mac-help/change-security-settings-startup-disk-a-mac-mchl768f7291/mac)。
