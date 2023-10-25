---
sidebar_label: Buttons
---

# Buttons

A button is an interactive element that indicates a specific action. It triggers functionality, guides user actions, and supports user cognitive actions.

## Design principles

- Write button labels that clearly explain what each button does, so that users can quickly understand its action.
- Provide feedback for button interactions, reduce unnecessary user operations, and enhance usage efficiency.
- Ensure the tappable area of the button. Due to the screen size limitation of wearable devices, for smaller buttons, expand the tappable area of the button to ensure the accuracy of user operations.
- Avoid using too many buttons. Be sure to control the number of buttons on the page, consider the most important actions, and control the priority and complexity of buttons.
- Pay attention to the order of buttons. The order of buttons on the page should follow the directional principle, which is in line with the user's interaction habits. Ensure that the buttons are in the same order to help the user improve operation efficiency and reduce the likelihood of user operation errors.

## Floating buttons

Fixed buttons contain highly informative features. They float on the top layer of a page and do not slide with the page.

![Design](/img/design/f8b8a043408d2ee489d71795593c4ca2.png)

![Design](/img/design/9db22be976265dd72d7c6ff097f8b149.png)

## Capsule buttons

As a common button style displayed on pages, capsule buttons slide with the interface. Based on the usage scenario, they are divided into ➀ default buttons, ② emphasis buttons, and ③ warning buttons.

![Design](/img/design/821e6b022c6c057855294a465fe88224.png)

## Circular buttons

Circular buttons use graphics to visualize the button content and display more content in a relatively small screen space. Limit the number of circular buttons of different sizes on the page.

![Design](/img/design/88c02b58be7a502f9f6d0186f57f01b6.png)

## Icon buttons

Compared with circular buttons, icon buttons offer a more lightweight visual hierarchy as they can save more interface space. Avoid using icon buttons to express complex meanings.

![Design](/img/design/8cb66d7c277e8bd138fef75a7ebbfc6f.png)

## Text buttons

Because text buttons don't have a visible container, they don't distract from nearby content and are less visually appealing. Text buttons have a low level of emphasis to less important actions.

![Design](/img/design/454dc39d-ddc0-466f-8f3b-ab5206865e0a.png)

## Rules for use

- Choose an appropriate button style based on the current level of button interaction behavior, and take into account both the screen space size and the overall layout.
- Keep the button text concise. The length limit of the capsule button text is two lines.

![Design](/img/design/f0a1b035e4ab0e0c592731b0ad0cd22f.png)

- The maximum number of characters in the two lines of the button copy should be controlled within 26 characters (take the "A" character as an example), and text that cannot be displayed beyond two lines should be omitted with "..." at the end.

![Design](/img/design/buttons-rules-for-use.png)

>① Indication of limit number of characters
>
>② Display style of ultra-long characters  
  

- Avoid all caps to increase the level of visual perception.  

![Design](/img/design/avoid-all-caps.png)

- Add key colors to the button to inform the user of progress and status. For example: to use offline voice commands to set an alarm, we recommend using a floating button and clearly informing the user of countdown progress.

![Design](/img/design/4c7538d6c0dddb75dc43234b7c6b45b2.png)

## Visual specifications

Buttons on square screens and round screens have different specifications. Call the button components in the corresponding component library as required. For more details about specification differences, see the examples below:

- Floating button styles on square screen and round screen devices

![Design](/img/design/9168f0921543809043346ba7042e02ed.png)

- The size of a capsule button on a square device is different from that on a round screen device

![Design](/img/design/3d41fd78e3e8e24dc7420aa817cc5e58.png)

>① Round screen device  
>
>② Rectangular screen device

- Circular buttons are available in six sizes. When a specific circular button is used, its size remains the same in circular screen devices and rectangular screen devices. When drawing slices, please follow the corresponding size specification of the icon (we recommend expanding the tappable area for smaller icon buttons, and the size of the drawing area should not be less than 64px).

![Design](/img/design/c5e786bdd6c3832b798ece0176b7f866.png)

- Set the button state and color value definition based on the corresponding specifications.

![Design](/img/design/15cf2e946c828842927ec9439f9c9a2b.png)

>➀ Default button background color: color_sys_item bg Text/icon: color_text_button
>
>② Emphasis button background color: color_sys_key Text/icon: color_text_button
>
>③ Define the color value of a button with a special attribute based on the color specifications, such as the incoming call button and the delete button

![Design](/img/design/7714d6ffd05a28508360a921b16f4a7b.png)

>④ Text button color value: color_text_link

- When a tap action is triggered, the overall color brightness of the button is reduced by 28.6%.

![Design](/img/design/424672ce8de01374da6b5fb21374099c.png)

>➀ Default state and tapped state of a colored button ② Default state and tapped state of a colorless button

