---
sidebar_label: Digital Crown
---

# Digital Crown

The Digital Crown is the primary hardware input for watch devices. As people rotate the Digital Crown, it generates information you can use to enhance or facilitate interactions with your app, like scrolling or operating standard or custom controls. You can use a set of methods to track user interactions with the Digital Crown and receive notifications when the user rotates the crown or when the rotation stops.

## Design principles

- As people rotate the Digital Crown slowly, the page content should move smoothly and with animation between every two page refreshes.
- When the page stops, the animation deceleration curve after stopping should be determined according to the acceleration before the crown stops scrolling.
- The scrolling effect of all pages should be roughly the same on the level perceived by the user.
- Accidental touch prevention is required for all rotation interactions: When the user has an obvious intent to rotate in the app list, a response is required (see the table below for the definition of the obvious rotation intention parameter), and the page should not move when there is no obvious rotation intention.

## Rules for use

**Dual accidental touch prevention logic**

**First layer: accidental touch prevention that is not displayed to the user**

The value reported from when the digital crown is at rest (no value reported for 1 second) to when it starts to rotate: The first time, only after there are changes in the value report for 20 consecutive cycles (16 ms per cycle) will the input be displayed to the user on the page and digital crown-related responses engage (e.g. list rotation and long page scrolling)

**Second layer: accidental touch prevention that is displayed to the user**

When the rotation passes first-layer screening, the second layer of accidental touch prevention logic is triggered, and different accidental touch prevention effects are used according to different control types. Only when there is a clear intention to rotate the crown can the user trigger the corresponding rotation effect of the page. Otherwise, rotation effect processing should not be engaged. (For example: When the list page is rotated, which satisfies the first layer logic but does not satisfy the second layer logic, the effect displayed on the page is a slight jump repeated in this list item, and the page will not rotate to the next list item.)
