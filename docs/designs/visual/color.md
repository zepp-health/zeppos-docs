---
sidebar_label: Color
---

# Color

Color is the intuitive medium for users to perceive interface information and product features. The color system of Zepp OS is derived from nature and life. By extracting the colors and light and shadow features of warm living scenes —— the soft light passing through translucent glass and  casting blurry colors and mottled reflections on the glass to obtain different types of color palettes are obtained to guide and standardize the application scenarios of colors.

## Design principles

- The color system of Zepp OS 3.0 is colorful and full of warmth. The overall color matching is designed to make users feel light, relaxed, and evoke pleasant emotions.
- Increase the diversity of colors within the system, enhance the colorful atmosphere, set different application theme colors for different functional modules, enhance the uniqueness of the application, and provide users with more personalized imagination space to meet diverse needs.
- Designers should fully understand the psychological effects of different colors and follow the basic principles of color psychology when using them. When it comes to color matching, the use of colors for icons and corresponding functional pages should ensure continuity and consistency.
- It is recommended to test the colors used in different usage scenarios to improve the usability of the interface.

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

## Auxiliary colors

Data chart colors, special colors within features, etc.

![Design](/img/design/secondary-colors.png)

**Usage examples:**

![Design](/img/design/usage-examples_1.png)

![Design](/img/design/usage-examples_2.png)

## Color status changes

Change the color of page elements based on the properties or states of page elements, such as tapped state and disabled state.

- For a control element in a "tapped state", when the tap action is triggered, the overall color brightness of the control element is reduced by 28.6%. After the tap action is completed, the color returns to the normal state.

![Design](/img/design/color-status-change_1.png)

![Design](/img/design/color-status-change_2.png)

>①②List: Normal state
>
>③④List: Tapped state

![Design](/img/design/color-status-change_3.png)

>①②③Button: Normal state
>
>④⑤⑥Button: Tapped state

- For a control element in the "disabled state", the overall color brightness of the control element is reduced by 50%. At the same time, for controls in the highlighted state, the highlighted color should be replaced with a grayscale color.

![Design](/img/design/color-status-change_4.png)

![Design](/img/design/color-status-change_5.png)

>① Radio button list: Normal state
>
>② Radio button list: Disabled state

## Application theme color/brand color

By using the theme color/brand color on visual elements (functional icons, buttons, illustrations, etc.), the application is given unique color characteristics to showcase its unique personality or brand. When setting the theme color for the application, it is recommended to maintain continuity and consistency with the color design of the application icon.

**Usage examples:Set different theme colors for different application pages.**

![Design](/img/design/application-theme-color_1.png)

>① Blood oxygen function widget, use red for buttons and page animation elements.
>
>② Alarm reminder page, use blue-green color for the alarm icon and button.
>
>③ The widget of the world clock, buttons and illustrations should be in blue.

**Example of use: Maintain continuity and consistency in the color usage of the application function icon and its functional page.**

![Design](/img/design/application-theme-color_2.png)

![Design](/img/design/application-theme-color_3.png)

>① Breathing training application icon and breathing training function widget.
>
>② Heart rate application icon and heart rate function widget.

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

>① Button text: button background = 12.63
>
>② Button text: button background = 1.74
>
>③ The contrast ratio between the foreground content and the background should be equal to or greater than 3:1
