---
sidebar_label: Page types
---

# Page types

| **Page type**                                                | **Priority** | **Typical page example**                                     |
| ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| Permanent                                                    | P0           | Watch face synchronization                                   |
| Floating layer - important reminders<br/>Floating layer - normal pop-up windows<br/>Floating layer - message reminders<br/>Floating layer - short reminders | P1           | Floating layer - important reminders: Alarm clock reminders <br/>Floating layer - normal pop-up windows: Battery life warnings<br/>Floating layer - message reminders: Goal reached reminders and notifications<br/>Floating layer - short reminders: WeChat, Alipay successfully enabled, Watchface synchronized successfully |
| Basic<br/>Watch faces<br/>Basic - In Progress status                 | P2           | Basic: Weather<br/>Watchface: Watch face, quick access apps<br/>Basic - In Progress status: Timer in use |

## Usage specifications

- Pages of the same priority level are arranged in chronological order, pages that appear earlier will be overlaid with pages that appear later, and pages of higher priority levels will not be overlaid with pages of lower priority levels.
- Pages that do not support right-swipe exit will appear as overlaid. For the exit animation, see [Overlay Pages](../structure/switching-pages.md#overlay-pages).
