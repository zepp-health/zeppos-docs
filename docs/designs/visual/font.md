---
sidebar_label: Font
---

# Font

Text is the most direct and clear way of expressing information, and font directly determines whether the text information can be conveyed correctly and accurately. Fonts distinguish the layer and priority of information through the differences in font size, font weight, capitalization, and font style.

The main font used by Zepp OS is Noto Sans. Usage specifications for special fonts are described in the [Special Fonts](font.md#special-fonts) section below.

![Design](/img/design/font.png)

## Font size

Based on the results of user survey, the best reading experience occurs in different scenarios when the viewing distance from the wearable device falls within the range of 25 cm-50 cm and the screen subtends a visual angle of 5 minutes of arc at the eye. Based on the Snellen theory, it has been deduced that on a 1.45-inch AMOLED screen with a display resolution of 480×480 pixels and a pixel density of 331 PPI, the calculation formula for the minimum font size for the Zepp OS main font is Caption1 = 0.0143×331*5 = 23.6665. Rounding up to the nearest integer gives us 24px, so 24px is the minimum size for the main font on this screen. To ensure the readability of text, use this formula to calculate the minimum font size for devices that have different screen sizes.

| Font style name | Round screen device 480 | Round screen device 454 | Round screen device 416  | Square screen device 390 |
| --------------- | ----------------------- | ----------------------- | ------------------------ | ------------------------ |
| Caption1        | 24                      | 23                      | 23                       | 24                       |
| Subheadline     | 28                      | 27                      | 27                       | 28                       |
| Body            | 32                      | 31                      | 31                       | 32                       |
| Title           | 36                      | 35                      | 35                       | 36                       |
| Title1          | 40                      | 39                      | 39                       | 40                       |
| LargeTitle      | 48                      | 47                      | 47                       | 48                       |

A typographic scale is a progression of font sizes that grow by the same ratio. Use different sets of typographic scales to fit different screen sizes. We use arithmetic progression to define font sizes in a typographic scale, so as to distinguish the information layer of system content and offer a more comfortable and smooth reading experience.
The typographic scale specification table for devices with a display resolution of 480×480 pixels is as follows:

![Design](/img/design/font_2.png)

## Line height

A text box is a container that wraps content text. In order to provide a better reading experience on the screen and display more content, we set the line height to 1.25 times.

- Calculation rule for single-line text height: text box height = (font size * 1.25).

![Design](/img/design/Lineheight.png)

## Special fonts

### Zepp OS Number Regular

Use Zepp OS Number Regular for special digits.

![Design](/img/design/special-font_1.png)

### Zepp OS Number Condensed

The Zepp OS Number Condensed font is used in the workout module, which allows users to get a better reading experience while doing sports.

![Design](/img/design/special-font_2.png)

Please refer to the link for font-related resources to download: [Font Resources](../download.md).
