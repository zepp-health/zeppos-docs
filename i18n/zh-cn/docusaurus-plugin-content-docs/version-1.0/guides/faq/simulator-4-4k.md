---
title: 模拟器在4K屏幕的异常解决
---


### windows版本手表模拟器在4K屏上点击区域异常处理

1. 在安装目录下找到 qemu-system-arm.exe（simulator\resources\firmware\qemu_win） 右击打开属性
2. 在兼容性一栏中点击按钮 “更改高DPI设置”
3. 在打开的窗口中选中 “替代高DPI缩放行为” 并选择执行缩放为 “系统” 即可解决

![simu44k-z](/img/docs/guides/faq/simulator/simu44k-z.png)
