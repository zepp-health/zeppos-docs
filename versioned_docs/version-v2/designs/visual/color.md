---
sidebar_label: Color
---

# Color

Color is an intuitive way for users to perceive interface information and product features. Zepp OS's color system originates from our "natural" design value and follows the law of color changes in nature. Extract the color, light, and shadow characteristics of Magic Hour to obtain different types of color palettes and guide and standardize color application scenarios.

## Design principles

Fully understand the psychological effects of different colors and use colors following the basic principles of color psychology. In terms of color matching, use a global accent color to give each page consistency and familiarity. At the same time, we recommend testing colors in different usage scenarios to improve interface usability.

## Color types

- System colors
- Text colors
- Secondary colors

## System colors

Colors for key content and information, alerts, controls, base graphics, and so on.

![Design](/img/design/7fa4caf1a468c72b211b39df5c20cd7f-en.png)

**Usage examples:**

![Design](/img/design/2ec79d5687d9bc9519330972192306fb.png)

![Design](/img/design/2c8a976e0bdf89ea45fbf35e7b8fbe7c.png)

>① Switch
>
>② Delete button

## Text colors

The color of text content in titles, subtitles, descriptions, buttons, and other elements.

![Design](/img/design/d98c5e3517f17700ec691335719992f5-en.png)

**Usage examples:**

![Design](/img/design/6bea6c32e35237ddbafb24ae0e68cd7d.png)

![Design](/img/design/6036996313488c12f28286ae985ce3c3.png)

## Secondary colors

Data chart colors, special colors within features, etc.

![Design](/img/design/451873e6d0ba51cd887b83bd664f25a6-en.png)

**Usage examples:**

![Design](/img/design/451873e6d0ba51cd887b83bd664f25a7.png)

![Design](/img/design/451873e6d0ba51cd887b83bd664f25a8.png)

## Color status changes

Change the color of page elements based on the properties or states of page elements, such as tapped state and disabled state.

- For a control element in a "tapped state", when the tap action is triggered, the overall color brightness of the control element is reduced by 40%. After the tap action is completed, the color returns to the normal state.

![Design](/img/design/58bc3a23f506284f990a098e0c1b2b48.png)

>①②List: Normal state
>
>③④List: Tapped state

![Design](/img/design/50f3fab3369ed3781a9de406f458a124.png)

>①②③Button: Normal state
>
>④⑤⑥Button: Tapped state

- For a control element in the "disabled state", the overall color brightness of the control element is reduced by 30%-50%. At the same time, for controls in the highlighted state, replace the highlight color replaced with a grayscale color.

![Design](/img/design/9722b4f790d6deb7381cac8e8b095e74.png)

>① Radio button list: Normal state
>
>② Radio button list: Disabled state

## Color availability

To ensure the readability of information and the integrity of the visual element display, follow these principles when using colors:

- Avoid excessive use of low grayscale colors (RGB values between 1 and 46).

![Design](/img/design/5e214d0946239d432a89fd7b096a54ae.png)

>① Make sure that the RGB value is not between 1 and 46.

- Avoid gradients with too great a span. At the same time, we recommended testing the colors used on a real device to ensure correct color display.

![Design](/img/design/6c67050f13d6d74f5f19e46a73f35310.png)

>① Avoid gradients with too great a span.

- The recommended color contrast ratio between foreground and background content is ≥ 3:1. For more information, see [Accessibility Design](../accessibility/color.md).

![Design](/img/design/3ff33fdf59147d346c3fdea4f718c9ca.png)

![Design](/img/design/b41c0be48e24d87e027a27b5169d5330.png)

>① Button text: button background = 12.63
>
>② Button text: button background = 1.74
>
>③ The contrast ratio between the foreground content and the background should be equal to or greater than 3:1
