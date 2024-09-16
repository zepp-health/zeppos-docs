---
title: Simulator click exception in Ubuntu
---

### Exception handling of clicking area on 4K screen of watch simulator in Ubuntu version

Having the emulator running on a fractional-sized screen can cause GDK errors.
To solve this issue, you must reset the `GDK_SCALE` and `GDK_DPI_SCALE` environment variables to `1`.

**It is normal** if the emulator window is smaller (+100% scale) or larger (-100% scale) than the actual screen, but 
**will fix clicking errors in the emulator**.

1. Find file `start_quemu.sh` under `/opt/simulator/resources/firmware`
2. Open file with a text editor
3. Add the following code in the start of the file:
```sh
export GDK_SCALE=1
export GDK_DPI_SCALE=1
```

![ubuntu-fractional-error](/img/docs/guides/faq/simulator/ubuntu-fractional-error.png)
