---
sidebar_label: Digit input
---

# Digit input

Digit input provides users with a visual way to enter digit-related information.

## Design goals

Provide users with a simple and effective form to enter digital information so that they can complete tasks with efficient input.  

Provide clear visual feedback to guide user input during operations.

## Types

- Unlock control
- Dial control
- Calculator tool  

![Design](/img/design/input_14.png)  

![Design](/img/design/input_15.png)

## Rules for use

The unlock control is enabled when it detects that the wearable device is off the wrist. The user taps to enter the digits, and the screen displays the digits for 500ms before it hides the digits.

![Design](/img/design/input_16.png)

## Visual specifications

- For the dial/unlock control, when the user taps a digit in the digit input area, the digit and its background color are enlarged by a ratio of 1.26, and they will return to the normal size when the tap ends.Background color value for a tapped digit: #FFFFFF 20% 

![Design](/img/design/input_17.png)

- In the circular button area of the calculator tool, when the user taps a digit/character, the digit/character and its background color are enlarged by a ratio of 1.26, and they will return to the normal size when the tap ends.

![Design](/img/design/input_18.png)

>The changes of the background color values for tapped digits/symbols/signs: 
>
>① digits: #333333 — #666666 
>
>② math symbols: #666666 — #999999 
>
>③ equals sign: #0986D4 — #3A9EDD       
 
- The calculator tool symbol button will light up after the user taps OK to inform the user of the current calculation method.  

![Design](/img/design/input_19.png)