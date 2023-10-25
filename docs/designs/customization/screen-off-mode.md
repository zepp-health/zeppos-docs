---
sidebar_label: Screen off mode
---
# Screen off mode

![Design](/img/design/customization_27.png)  

The screen-off mode means that the Watchface displays only important information such as time in a limited manner, which helps users obtain information without raising their wrists. It is an essential mode for a Watchface.  

There are two types of screen-off mode display, one which follows the current Watchface and the other that users can configure independently. The screen-off mode display that follows the current Watchface requires special design from the Watchface designer.For production specifications, please refer to：[Rest Screen Production Specifications](../../watchface/specification.md);

## Design Principles
- Minimize Watchface elements. When an element on the Watchface lights up, its pixels cannot exceed 10% of the pixels of the screen.
- Watch face hands do not include a second hand.
- The background color of the Watchface must be black (#000000), and the main color of the hands must be white (#FFFFFF).
- Keep the hands/digital slices the same size.
- Since it is necessary to switch between screen off and screen on states, try to minimize the movement of elements and avoid jumping during switching.
- To ensure legibility, the basic time scale can be retained .
- Except for time, the priority of other elements is: steps > date > weather > battery level > heart rate > Other Data
