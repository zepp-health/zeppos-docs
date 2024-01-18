---
sidebar_label: Icons
---

# Icons

Icons are specific graphics that guide the user with information. Zepp OS provides various icon elements to suit applications in different scenarios. This specification lists the usage scenarios, icon composition, graphic modeling, icon size, resource output, and other rules to guide the use of icon elements.

## Design principles

Zepp OS icons follow the "lightweight" and "friendly" design concepts. Use simple geometric configurations in modeling, simplify redundant details, ensure recognizability, and convey meanings clearly. Avoid straight edges and sharp corners in details, and use curves that are curvature continuous to convey natural beauty.

## Icon types

- App icons
- Common function icons
- Button icons

## App icons

An application icon should clearly and transparently convey its feature /brand/service information, and the design style should follow Zepp OS system application icons. Provide resources in multiple sizes based on the requirements of this specification to ensure that the icons are suitable for mobile devices, mobile application stores, and other scenarios.

- The overall application icon is a perfect circle with a size of 248×248px, and a blank and transparent safe area should be reserved inside (4px on the top, bottom, left, and right).

![Design](/img/design/app-icons_1.png)

>① App icon content size
>
>② Transparent safe area
>
>③ App icon final size

- The main graphic of an app list icon should not exceed the background image area.

![Design](/img/design/app-icons_2.png)

>① The main graphic should not exceed the background image area.

- Avoid using a solid black background image, transparent areas, and transparency.

![Design](/img/design/app-icons_3.png)

>① Do not use a solid black background image.
>
>② The background image should not contain transparent areas
>
>③ Do not use transparency

- Do not use non-circular background images.

![Design](/img/design/app-icons_4.png)

>① Do not use non-circular background images.

- The icon resource should output an image in PNG format with a blank transparent safe area.

![Design](/img/design/app-icons_5.png)

>① The background image should be surrounded by a blank and transparent safe area (2px on the top, bottom, left, and right).
>
>② The background image should be circular. Avoid using other shapes.
>
>③ The non-icon area should be kept blank and transparent.

- Design example

![Design](/img/design/app-icons_6.png)

>① Icon content size is 240×240px
>
>② A 4px transparent safety zone around all four sides
>
>③ The final size of the application icon should be 248×248px

- Actual use examples

![Design](/img/design/app-icons_7.png)

>① The application icon for "NetEase Music" in the enhanced grid view.
>
>② The application icon of "NetEase Music" in the list view.

**Icon resource output**

- Size comparison:

<table>
    <tr>
        <th>Device resolution</th>
        <th>480×480px</th>
    </tr>
    <tr>
        <td>App icons</td>
        <td>248×248px（The inside of the icon should contain a blank transparent safe area, 4px on the top, bottom, left, and right）</td>
    </tr>
    <tr>
        <td>Store icons</td>
        <td>240×240px</td>
    </tr>
</table>

- Format: a PNG image surrounded by a blank and transparent area.

## Common function icons

Function icons are mainly used to communicate system or feature information and indicate status information. Common function icons support regular size, medium size, and ultra-small size.

**Usage examples:**

![Design](/img/design/general-feature-icons_1.png)

![Design](/img/design/general-feature-icons_2.png)

>① Settings page: List icon (regular size)
>
>② Temperature page: Thermometer icon (regular size)

![Design](/img/design/53131af143a11a917a844fa935337c51.png)

![Design](/img/design/392f3fd895dd550a899ec76fb763a0d9.png)

>① Sun and moon page: Moonrise/sunset time icons (medium size)
>
>② Pre-workout page: Heart rate icon (medium size)

![Design](/img/design/general-feature-icons_3.png)

>① Call record card: Outgoing call icon (ultra-small size)
>
>② Event reminder card: location icon (ultra-small size)

**Icon resource output:**

- Size comparison:

<table>
    <tr>
        <th>Device resolution</th>
        <th>480×480px</th>
    </tr>
    <tr>
        <td>Regular size</td>
        <td>64×64px</td>
    </tr>
    <tr>
        <td>Medium size</td>
        <td>52×52px</td>
    </tr>
    <tr>
        <td>Ultra-small size</td>
        <td>32×32px</td>
    </tr>
    <tr>
        <td colspan="5">Note: The icon needs to contain a blank and transparent safe area (2px on the top, bottom, left, and right).</td>
    </tr>
</table>

- Format: a PNG image surrounded by a blank and transparent area.

## Button icons

Button icons are used to represent actions and guidance for a specific operation button. Button icons support regular size, medium size, small size, and ultra-small size.

**Usage examples:**

![Design](/img/design/button-icons_1.png)

>① Refresh button icon (regular size)
>
>② Confirm button icon (regular size)
>
>③ Backspace button icon (regular size)

![Design](/img/design/button-icons_2.png)

>① Delete button icon (regular size)
>
>② Hang Up button icon (regular size)

![Design](/img/design/button-icons_3.png)

>① Add button icon on the right side of a list (medium size)
>
>② Download button (medium size)

![Design](/img/design/button-icons_4.png)

>① Refresh button icon (regular size)
>
>② Confirm button icon (regular size)
>
>③ Backspace button icon (regular size)

![Design](/img/design/button-icons_5.png)

![Design](/img/design/button-icons_6.png)

>① Watch face edit button icon (small size)
>
>② Explanation button icon at the bottom of a page (small size)

![Design](/img/design/button-icons_7.png)

![Design](/img/design/button-icons_8.png)

>① Explanation button icon for after text information (ultra-small size)

**Icon resource output:**

- Size comparison:

<table>
    <tr>
        <th>Device resolution</th>
        <th>480×480px</th>
    </tr>
    <tr>
        <td>Regular size</td>
        <td>64×64px</td>
    </tr>
    <tr>
        <td>Medium size</td>
        <td>52×52px</td>
    </tr>
     <tr>
        <td>Small size</td>
        <td>40×40px</td>
    </tr>
    <tr>
        <td>Ultra-small size</td>
        <td>32×32px</td>
    </tr>
    <tr>
        <td colspan="5">Note: The icon size needs to contain a blank and transparent safe area (2px on the top, bottom, left, and right).</td>
    </tr>
</table>

- Format: a PNG image surrounded by a blank and transparent area.
