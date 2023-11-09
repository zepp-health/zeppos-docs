---
title: Windows Terminal Zeus Preview QR code display exception
---

## Problem description

Execute the zeus preview command at the Windows Terminal, and the QR code cannot be scanned to install.

![win cli](/img/docs/guides/faq/win-cli/1.png)

## Solution steps

### 1. Search for `intl.cpl` to open the Control Panel item

![win cli](/img/docs/guides/faq/win-cli/2.png)

### 2. Go to Control Panel, click Manage Tab, and click Change System Regional Settings

![win cli](/img/docs/guides/faq/win-cli/3.png)

### 3. Select Use Unicode UTF-8 to provide global language support and click Confirm

![win cli](/img/docs/guides/faq/win-cli/4.png)

### 4. Reboot and run `zeus preview` again to view the QR code
