---
sidebar_label: Font
---

# Font

Text is the most direct and clear way of expressing information, and font directly determines whether the text information can be conveyed correctly and accurately. Fonts distinguish the layer and priority of information through the differences in font size, font weight, capitalization, and font style.

The main font used by Zepp OS is Noto Sans. Usage specifications for special fonts are described in the [Special Fonts](font.md#special-fonts) section below.

## Font size

Based on the results of user survey, the best reading experience occurs in different scenarios when the viewing distance from the wearable device falls within the range of 25 cm-50 cm and the screen subtends a visual angle of 5 minutes of arc at the eye. Based on the Snellen theory, it has been deduced that on a 1.45-inch AMOLED screen with a display resolution of 480\*480 pixels and a pixel density of 331 PPI, the calculation formula for the minimum font size for the Zepp OS main font is Caption1 = 0.0143\*331\*5 = 23.6665. Rounding up to the nearest integer gives us 24px, so 24px is the minimum size for the main font on this screen. To ensure the readability of text, use this formula to calculate the minimum font size for devices that have different screen sizes.

| Font style name | Round screen device 480 | Round screen device 466 | Square screen device 390 |
| --------------- | ----------------------- | ----------------------- | ------------------------ |
| Caption2        | 24                      | 23                      | 24                       |
| Caption1        | 28                      | 27                      | 28                       |
| Subheadline     | 32                      | 31                      | 32                       |
| Body            | 36                      | 35                      | 36                       |
| Title           | 40                      | 39                      | 40                       |

A typographic scale is a progression of font sizes that grow by the same ratio. Use different sets of typographic scales to fit different screen sizes. We use arithmetic progression to define font sizes in a typographic scale, so as to distinguish the information layer of system content and offer a more comfortable and smooth reading experience.

The typographic scale specification table for devices with a display resolution of 480\*480 pixels is as follows:

![Design](/img/design/6270f1ee20fb3803d65ad33d17d84070.png)

## Text box height calculation rules

A text box is a container that wraps text content. Calculation rule for the height of a line of text: line height = font size + 10.

![Design](/img/design/df7325701750e5461b133f0c657e6281.png)

## Special fonts

DIN1451

Use DIN1451MittelschriftAlternat for special digits.

![Design](/img/design/76f2c322b070b586738376cc306ddcbb.png)

ZEPP OS NUMBER

Use the ZEPP OS NUMBER font to fit the screen display during workout and provide a better reading experience.

![Design](/img/design/ea373c016dcfd20bbd27734e1d1c19a2.png)

## Font usage rules

Avoid using text smaller than 24 in interface content. Use special digit fonts for prominent large digits.

![Design](/img/design/ae9beade365be434d99d744fa1284dd5.png)

![Design](/img/design/8a1388cbb9eb536f9dce4875241fd3ee.png)

![Design](/img/design/0046a33752f786962c69c3d74ada078b.png)

For more information about Zepp OS font resource downloads, see: [Font Resources](../download.md).
