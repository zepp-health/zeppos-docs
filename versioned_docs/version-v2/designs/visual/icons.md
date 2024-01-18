---
sidebar_label: Icons
---

# Icons

Icons are specific graphics that guide the user with information. Zepp OS provides various icon elements to suit applications in different scenarios. This specification lists the usage scenarios, icon composition, graphic modeling, icon size, resource output, and other rules to guide the use of icon elements.

## Design principles

Zepp OS icons follow the "lightweight" and "friendly" design concepts. Use simple geometric configurations in modeling, simplify redundant details, ensure recognizability, and convey meanings clearly. Avoid straight edges and sharp corners in details, and use curves that are curvature continuous to convey natural beauty.

## Icon types

- App icons
- General feature icons
- Button icons

## App icons

An application icon should clearly and transparently convey its feature /brand/service information, and the design style should follow Zepp OS system application icons. Provide resources in multiple sizes based on the requirements of this specification to ensure that the icons are suitable for mobile devices, mobile application stores, and other scenarios.

- The application icon as a whole should be round, with a size of 124\*124px, and a blank and transparent safe area should be reserved inside (2px on the top, bottom, left, and right).

![Design](/img/design/a8e48906324b129b79483b5c8aac47d1.png)

>① App icon content size
>
>② Transparent safe area
>
>③ App icon final size

- The app icon consists of a main graphic and a background image.

![Design](/img/design/f9d4a5e3c8160597e1f7170cda8c7266.png)

>① Main graphic
>
>② Background image

- ② The size of the app icon's main graphic is 80\*80px, and generally the drawing area is kept at 70\*70px. If the graphic needs additional visual weight to ensure consistency with other icons, the drawing area can be extended to the reserved area (note: in any case, the graphic should remain within the 80\*80px range).

![Design](/img/design/7485e4a8d6eb69f4980aa6b75066910a.png)

>① Basic drawing area of the icon body
>
>② Reserved area of the icon body
>
>③ Actual size of the icon body

![Design](/img/design/60d2295116047e4528fc7085dbca776d.png)

>① The size of the icon body should not exceed 80\*80px.

- The background image of the icon is circular, with a size of 124\*124px, and a blank and transparent safe area should be reserved inside (2px on the top, bottom, left, and right).

![Design](/img/design/182d8dc374dc74b02e739864c7bd8555.png)

>① Size of the icon background image
>
>② Transparent safe area
>
>③ Example of the actual size of an icon background image

- Do not use non-circular background images.

![Design](/img/design/bff1704bf3f433cfbc6ae0fb32bab7df.png)

>①  Do not use non-circular background images.

- Avoid using a solid black background image, transparent areas, and transparency.

![Design](/img/design/218ae4f95268d9ff791db306a2c43ccf.png)

>① Do not use a solid black background image.
>
>② The background image should not contain transparent areas
>
>③ Do not use transparency

- The main graphic of an app list icon should not exceed the background image area.

![Design](/img/design/8e33b7f896553c21f5ca1b33666f30b1.png)

>① The main graphic should not exceed the background image area.

- The icon resource should output an image in PNG format with a blank transparent safe area.

![Design](/img/design/d5f20d2475642e7039470407c7107db8.png)

>① The background image should be surrounded by a blank and transparent safe area (2px on the top, bottom, left, and right).
>
>② The background image should be circular. Avoid using other shapes.
>
>③ The non-icon area should be kept blank and transparent.

- Design example

![Design](/img/design/a2a1b95c9a020468e777d78d5ad065c5.png)

>① Icon main body graphic: 80\*80px
>
>② Icon background image: 124\*124px, including the blank and transparent safe area around the image (2px on the top, bottom, left, and right)
>
>③ Final application icon

- Actual use examples

![Design](/img/design/f3e7ee29bf94f611ca529a5172bcc720.png)

>① "NetEase Cloud Music" app icon
>
>② ③ "NetEase Cloud Music" app icon in the app list.

**Icon resource output**

- Size comparison:

<table>
    <tr>
        <th>Device resolution</th>
        <th>480×480px</th>
        <th>466×466px</th>
        <th>454×454px</th>
        <th>390×450px</th>
    </tr>
    <tr>
        <td>App icons</td>
        <td colspan="4" align="center">124×124px</td>
    </tr>
    <tr>
        <td>Store icons</td>
        <td colspan="4" align="center">240×240px</td>
    </tr>
    <tr>
        <td colspan="5">Note: The icon needs to contain a blank and transparent safe area (2px on the top, bottom, left, and right).</td>
    </tr>
</table>

- Format: a PNG image surrounded by a blank and transparent area.

## General feature icons

Feature icons are mainly used to communicate system or feature information and indicate status information. Common feature icons support regular size, medium size, and ultra-small size.

**Usage examples:**

![Design](/img/design/d6af53cfdd673b74c93e6ab685cd59e2.png)

![Design](/img/design/0cf71f2616cbcf6c0b9d129e98bdcc56.png)

>① Settings page: List icon (regular size)
>
>② Temperature page: Thermometer icon (regular size)

![Design](/img/design/53131af143a11a917a844fa935337c51.png)

![Design](/img/design/392f3fd895dd550a899ec76fb763a0d9.png)

>① Sun and moon page: Moonrise/sunset time icons (medium size)
>
>② Pre-workout page: Heart rate icon (medium size)

![Design](/img/design/69f73901bea43728e71e709835a8b790.png)

>① Call record card: Outgoing call icon (ultra-small size)
>
>② Event reminder card: location icon (ultra-small size)

**Icon resource output:**

- Size comparison:

<table>
    <tr>
        <th>Device resolution</th>
        <th>480×480px</th>
        <th>466×466px</th>
        <th>454×454px</th>
        <th>390×450px</th>
    </tr>
    <tr>
        <td>Regular size</td>
        <td>64×64px</td>
        <td>63×63px</td>
        <td>61×61px</td>
        <td>64×64px</td>
    </tr>
    <tr>
        <td>Medium size</td>
        <td>52×52px</td>
        <td>51×51px</td>
        <td>50×50px</td>
        <td>52×52px</td>
    </tr>
    <tr>
        <td>Ultra-small size</td>
        <td>32×32px</td>
        <td>32×32px</td>
        <td>31×31px</td>
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

![Design](/img/design/be5ec75e491eef068732ad121db40847.png)

>① Refresh button icon (regular size)
>
>② Confirm button icon (regular size)
>
>③ Backspace button icon (regular size)

![Design](/img/design/855254a1ddb44b9d3c974ca44a4c53a3.png)

>① Delete button icon (regular size)
>
>② Hang Up button icon (regular size)

![Design](/img/design/58a28cc97f124c5a3e7879a2cb60e5b1.png)

>① Add button icon on the right side of a list (medium size)
>
>② Download button (medium size)

![Design](/img/design/bd38998422f32a62ba85cc4bc780a961.png)

>① Refresh button icon (medium size)
>
>② Confirm button icon (medium size)
>
>③ Backspace button icon (medium size)

![Design](/img/design/675c4e08fd6c129df1eac2ae92bb2a56.png)

![Design](/img/design/c219ac40539fdff839f8d9a2a405968a.png)

>① Watch face edit button icon (small size)
>
>② Explanation button icon at the bottom of a page (small size)

![Design](/img/design/070b124f3575e48ed6e2db46d820b04e.png)

![Design](/img/design/a2bd4715a1aabcd2302c8e2c07c22e55.png)

>① Explanation button icon after text information (ultra-small size)

**Icon resource output:**

- Size comparison:

<table>
    <tr>
        <th>Device resolution</th>
        <th>480×480px</th>
        <th>466×466px</th>
        <th>454×454px</th>
        <th>390×450px</th>
    </tr>
    <tr>
        <td>Regular size</td>
        <td>64×64px</td>
        <td>63×63px</td>
        <td>61×61px</td>
        <td>64×64px</td>
    </tr>
    <tr>
        <td>Medium size</td>
        <td>52×52px</td>
        <td>51×51px</td>
        <td>50×50px</td>
        <td>52×52px</td>
    </tr>
     <tr>
        <td>Small size</td>
        <td>40×40px</td>
        <td>39×39px</td>
        <td>38×38px</td>
        <td>40×40px</td>
    </tr>
    <tr>
        <td>Ultra-small size</td>
        <td>32×32px</td>
        <td>32×32px</td>
        <td>31×31px</td>
        <td>32×32px</td>
    </tr>
    <tr>
        <td colspan="5">Note: The icon needs to contain a blank and transparent safe area (2px on the top, bottom, left, and right).</td>
    </tr>
</table>

- Format: a PNG image surrounded by a blank and transparent area.
