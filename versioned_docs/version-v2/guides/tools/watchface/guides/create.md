---
title: Create a Watchface
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Create a Watchface

Here's a simple Watchface, "Art Ideas-Hi", with the following effects:

<img src={useBaseUrl('/img/zh-cn/docs/watchface/example.png')} width="30%" />

## Preparations

1. A computer with a browser is recommended for chrome
2. Prepare the design resource. <a href="https://upload-cdn.huami.com/20211103/6fd50ae2ff34fde02c996d5b8602007e.zip" target="_self" download>Resource .zip</a>
3. Go to the [Watchface maker interface](https://watchface.zepp.com). Complete developer registration, login according to the relevant tips on the page

## Start

### 1. Create a new Watchface

1. Visit [https://watchface.zepp.com](https://watchface.zepp.com)
2. Click the New button in the navigation bar at the top to jump to the creating page
3. Enter the name of Watchface in the creating page, select the Watchface type, resolution（[Device Resolution Information](../../../../../reference/related-resources/device-list)）, support language and other information, upload the preview images by support languages
4. Click the Create button. When you're done creating, you'll be taken to the Watchface details page.

![create.png](/img/docs/guides/tools/watchface/create.png)

### 2.Add a background picture

1. Click "Background" to select "Background" in the pop-up drop-down menu
2. Tap the "Background" module that was just added to the left side of the screen
3. Upload the background picture in the configuration panel on the right

![addBg.png](/img/docs/guides/tools/watchface/add_bg.png)

### 3. Add heart rate

1. Select "Workout & Health" - "Heart Rate" and add the Heart Rate module
2. Configure the Data Empty picture (the default picture that appears when the data is not available) and 10 digital tangents (0 - 9) in the configuration panel on the right
3. You can see the display of the digital picture in the preview area of the center of the interface, adjusting the position of the picture to (110, 80) and alignment to center left and right

![addHr.png](/img/docs/guides/tools/watchface/add_hr.png)

<img src={useBaseUrl('/img/docs/guides/tools/watchface/hr_pos.png')} width="300" />

### 4. Add pointer time

1. Click "Time" to select "Pointer Time" in the pop-up drop-down menu
2. Click "Pointer Time" - "Hour hand" in the left panel to add a time-hand picture (pointer/hour.png in footage) in the right-most configuration panel
3. Enter the following coordinate information in the configuration panel on the right:

- Center of Watchface rotation - The center point of the entire Watchface, the current Watchface resolution is 454 x 454, so the center coordinate of the Watchface rotation is (227, 227)
- Pointer rotation center - the coordinates of the rotation point on the pointer picture, reference to the figure below can be seen that the pointer rotation center coordinates of the current pointer are (25, 227)

<p>
  <img src={useBaseUrl('/img/zh-cn/docs/watchface/lesson/pointer_pos_info.png')} width="300" />
</p>

Similarly, we configure the minute hand and the second hand in turn, so that we can adjust the preview value of the minute and second hand when adjusting the panel on the right, with the following effect:

![addPointer.png](/img/docs/guides/tools/watchface/add_pointer.png)

### 5. Save the Watchface

Click the "Save" button on the page to save the current Watchface configuration
