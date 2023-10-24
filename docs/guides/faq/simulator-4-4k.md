---
title: Simulator click exception on 4K screen
---


### Exception handling of clicking area on 4K screen of watch simulator in Windows version

1. Find qemu-system-arm.exe under the installation directory (simulator\resources\firmware\qemu_win) and right click to open properties
2. Click the button "Change high DPI settings" in the compatibility column
3. Select "Override high DPI scaling behavior" in the open window and select "scaling performed by" as the "system"

![simu44k-e](/img/docs/guides/faq/simulator/simu44k-e.png)
