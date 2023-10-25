---
sidebar_label: Watchface
---
# Watchface

The Watchface is the core experience element of smart wearable devices and the most frequently used feature. The Watchface has the time display feature of traditional watches and is also capable of displaying different types of data. The design of Watchfaces needs to adapt to the individual requirements of users and match different scenarios.  

For watchface design and production documentation, please refer to: [Watchface configuration | ZeppOS Developers Documentation](../../watchface/app-json.md)

## Design Principles  

**Distinctiveness**: The data is presented clearly, with distinct visual hierarchy and a harmonious color combination that allows users to efficiently and accurately read the information.  

**Diversity**: Ensure the diversity of dials from different dimensions such as dial functions, design styles, and data display, providing users with more choices.  

**Interactivity**: Make good use of the interactive features of smart wearable devices, combine with the crown, gyroscope, gestures and other interactions to enhance the playability of the watch dial.
## Composition
### Time

**Hours, minutes, and seconds**

- Numbers, pointers.
- Digits (negative picture-spacing values are supported to achieve cascading effects) and hands.
- The display order of the watch hands: the second hand is on the top, the minute hand is in the middle, and the hour hand is at the bottom.

![Design](/img/design/customization_1.png)

**AM/PM**
- Text.
 
**Week**
- Icons, digits, pointer, and progress.

![Design](/img/design/customization_2.png)

**Year/month/day**
- Icons, digits, pointer, and progress.
- If the Watchface displays the year, it must be displayed in the year/month/day format. Separate display of the year is not supported.

![Design](/img/design/customization_3.png)
 


### Workouts

**Steps**

- Icons, pictures, digits, hands, and progress.
- Digital display of steps: up to 5 characters. For example, "00000".
- Digital display of target steps: up to 5 characters. For example, "00000".
- Empty state: "0"

![Design](/img/design/customization_4.png)

**Distance**

- Icons and digits.
- Digital display of distance: up to 4 characters. For example, "0.00", "00.0".
- Empty state: "0"

![Design](/img/design/customization_5.png)

**Calories**

- Icons, pictures, digits, hands, and progress.
- Digital display of calorie consumption: up to 4 characters. For example, "0000".
- Empty state: "0"

![Design](/img/design/customization_6.png)

**Standing**

- Icons, pictures, digits, hands, and progress.
- Digital display of current standing times: up to 2 characters. For example, "00".
- Digital display of the standing times within 12 hours.
- Empty state: "0"

![Design](/img/design/customization_7.png)

### Health
**Heart rate**
- Consists of icons, pictures, digits, hands, and progress.
- Digital display of heart rate: up to 3 characters. For example, "000".
- Empty state: "- -"

![Design](/img/design/customization_8.png)

**PAI**
- Icons, pictures, digits, hands, and progress.
- Digital display of PAI: up to 3 characters. For example, "000".
- Empty state: "0"

![Design](/img/design/customization_9.png)

**Weight**
- Icons, numbers, pointers, progress.
- Weight: Up to 3 characters, display example: "000".
- Empty state: "--"

![Design](/img/design/customization_10.png)

**Exercise load**
- Icons, numbers, pointers, progress.
- Exercise load: up to 4 characters, displayed as "0000".
- Empty state: "--"

![Design](/img/design/customization_11.png)

**Readiness**
- Icons, numbers, pointers, progress.
- Readiness: up to 3 characters, display example: "000".
- Empty state: "--"

![Design](/img/design/customization_12.png)

### Weather
**Temperature**
- Icons, pictures, digits, hands, and progress.
- Digital display of real-time temperature: up to 5 characters. For example, "-000°".
- Digital display of lowest temperature: up to 5 characters. For example, "-000°".
- Digital display of highest temperature: up to 5 characters. For example, "-000°".
- Empty state: "- -"

![Design](/img/design/customization_13.png)

**UV ray**
- Icons, pictures, digits, hands, and progress
- Digital display of UV ray level: up to 2 characters. For example, "00".
- Empty state: "- -"

![Design](/img/design/customization_14.png)

**Humidity**
- Icons, pictures, digits, hands, and progress
- Digital display of humidity: up to 4 characters. For example, "000%".
- Empty state: "- -"

![Design](/img/design/customization_15.png)

**Air quality**
- Icons, pictures, digits, hands, and progress.
- Digital display of air quality: up to 3 characters. For example, "000".
- Air quality display is not supported in regions outside China. Replace it with humidity.
- Empty state: "- -"

![Design](/img/design/customization_16.png)

**Sunrise and Sunset**
- Icons, pictures, digits, hands, and progress.
- Current time display: up to 5 characters. For example, "00:00".
- Sunrise time display: up to 5 characters. For example, "00:00".
- Sunset time display: up to 5 characters. For example, "00:00".
- Empty state: "- -"

![Design](/img/design/customization_17.png)

**Moon phase**
- 7/13/30 Moon phase images

![Design](/img/design/customization_18.png)

**Air pressure**
- Icons, pictures, digits, hands, and progress.
- Air pressure display: up to 5 characters. For example, "00000".
- Empty state: "- -"

![Design](/img/design/customization_19.png)

### System
**Battery level**
- Icons, pictures, digits, hands, and progress.
- Digital display of battery level: up to 4 characters. For example, "100%".

![Design](/img/design/customization_20.png)

### System status
**Icons**
- Switch status is required for DND, Bluetooth, screen lock, and alarm clock.

![Design](/img/design/customization_21.png)

**Compass**  

Display the current direction pointed by the watch.  

Display current angle and direction.

![Design](/img/design/customization_22.png)

**Alarm clock**
- Icon.
- Next alarm time: Display in system 12/24 hour format, for example: "08:00", "12:00".
- Empty state: "--".

![Design](/img/design/customization_23.png)

**Breathing**
- Icon

![Design](/img/design/customization_24.png)

**Countdown**
- Consists of icons, numbers, pointers, and progress.
- Display the current countdown timer, for example: "00:36".
- Empty state: "- -".

![Design](/img/design/customization_25.png)

## Visual Guidelines
- Time information is a necessary element of every Watchface, and it can be designed by choosing pointer time, digital time, or a combination of pointer and digital time.
- The minimum font size is 22px and the line thickness of the dial elements must be ≥1px.
- Leave a 2px safe distance on the edge. The display area for status points and offline voice is reserved at the top and bottom, and important information is not placed.

![Design](/img/design/customization_26.png)

- Multi-language support: The Watchface must support three languages: English, Traditional Chinese, and Simplified Chinese. When the watch is switched to a language that is not supported by the Watchface, English will be displayed.
- The time data in the preview image of the Watchface must display 10:09, and the rest of the data should comply with the specifications and basic knowledge.
