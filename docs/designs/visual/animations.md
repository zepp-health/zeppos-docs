---
sidebar_label: Animations
---

# Animations

The Zepp OS "Air" dynamic animation system creates an operation experience with a sense of nature, space, and transparency to vitalize the product.

**Nature**: Follow the physical laws of nature, display perceptible changes in the elements of the real world, and allow users to recognize, understand, and accept them more quickly.

**Space**: Create a vertical visual space using animations, strengthen page structure and the relationship between parent-child pages, and establish a sense of space and order. Give users a more direct perception of the connection between interfaces.

**Transparency**: The best animations are the ones the user doesn't notice at all. The movement is silent and imperceptible and the effects are only perceived when needed. They are concise, moderate, and appropriate.

## Design principles

### Natural and smooth

The animations should be visually consistent, and the movement method should conform to the laws of natural movement.

![Design](/img/design/59a1b0ef96e80f511c386c4c6971f136.gif)

### Clear hierarchy

The animations must clearly express the hierarchical relationship within the system, so that the connection between interfaces is natural and clear, and users can perceive the page structure through animations.

![Design](/img/design/88462a8e918d7cbf05ef27c52bb3b4fb.gif)

### Exercise restraint

Due to the screen size limitation of wearable devices, animations should be concise and moderate. Reduce animation elements and motion paths. Do not exceed the user's operation time limit. Pay attention to the psychological impact of the animations on the user.

![Design](/img/design/a7cbe46e869353fb046bb7f0fda05488.gif)

## Icon animations

Icon guidance animations use the change of icon elements in the interface to attract user's attention or guide user operation. Reduce the interference of other visual elements to keep the user focused.

![Design](/img/design/8977fe4180318e70331ee89a91c82c77.gif)

## Illustration animations

Illustrated animations can enhance the visual information expressed, engage users’ emotions, and help them understand features and processes.

- Transition animations

Transition animations in measurement apps can reduce user anxiety while they are waiting for the results.

![Design](/img/design/Illustration-animations.gif)

- Motivational animations

Motivational animations can stimulate positive emotions as users interact with and use the product.

![Design](/img/design/Illustration-animations_2.gif)

- Guide animations

Guide animations help users quickly understand how to conduct operations, reduce confusion, and complete tasks.

![Design](/img/design/Illustration-animations_3.gif)

## Chart animations

Chart animations can make it easier to read charts, reduce feelings of monotony, and improve the user experience.

![Design](/img/design/Illustration-animations_4.gif)

## Control animations

Control animations use animations to reflect an element's operation logic.

- Radio button

![Design](/img/design/Illustration-animations_5.gif)

- Checkbox

![Design](/img/design/Illustration-animations_6.gif)

- Card Deletion

![Design](/img/design/Illustration-animations_7.gif)

- Application Deletion

![Design](/img/design/Illustration-animations_8.gif)

- Long press to edit

![Design](/img/design/Illustration-animations_9.gif)

- List drag and drop

![Design](/img/design/Illustration-animations_10.gif)

- Toasts

![Design](/img/design/Illustration-animations_11.gif)

## Page animations

Page animations are used to display switching between different pages in the system and indicate the page hierarchy.

![Design](/img/design/Illustration-animations_12.gif)

### Text scrolling display

When the text length exceeds the display space, use scrolling to display the full text. The scrolling speed is 100% of the screen width every 6800ms. Taking a screen with a width of 480px as an example, the scrolling speed is about 71px every 1000ms. After the text completes a full scroll, it will stop exactly at the starting point and continue scrolling after a pause of 2000ms.

![Design](/img/design/Illustration-animations_13.gif)

When the text scrolls, a gradient mask should be added to the end of the text.

![Design](/img/design/Illustration-animations_14.gif)

>①The size of the mask is the same as the height of a single line of text, marked as “a”.
>
>②Draw a gradient area from right to left on a square grid with side length “a”, gradually transitioning from pure black to transparent.

### Rules for use

**Basic time unit**

Regardless of the animation style, the animation transition time should not be too long or too short. Animations with moderate transitions can bring users a comfortable experience.

Based on the scope and type of animation, animation transition time intervals can be divided into the following types:

Shortest time: 100 ms, Short time: 200ms, median time: 300 ms, long time: 400 ms. Subsequent times are segmented in increments of 100ms.

![Design](/img/design/basic-time-unit.png)

- Shortest time: Appearance and disappearance of controls etc.
- Short time：Lightweight interactive animation of controls, such as radio buttons and checkboxes.
- Median time: Interactive animations for page switching, such as toasts, page switching, and deletion.
- Long time: Chart animations, such as indicator animations.
- Custom animation time: illustrations and icon animations, such as watch wearing guide animations, etc.

![Design](/img/design/basic-time-unit_2.png)

### Animation curve

In the physical world, elements do not move or stop immediately. Instead, they are affected by natural forces such as friction and gravity, and take time to accelerate and decelerate, which is also known as easing.

- Movement shift animations

The movement of an object within the visible range is ease-in-out, cubic-bezier (.42,0,.58,1)

![Design](/img/design/01f5329d4b05cb88f51a632cee8d3920.gif)

- Entry animations

The movement of an object into the visible range is ease-out, cubic-bezier (0,0,.58,1)

![Design](/img/design/ffd916968c3ec5067aad82f0daed31bf.gif)

- Exit animations

The movement of an object out of the visible range is ease-in, cubic-bezier (.42,0,1,1)

![Design](/img/design/53d015d2268b4a278da7ffba44777293.gif)
