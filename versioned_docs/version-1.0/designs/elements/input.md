---
sidebar_label: Input
---

# Input

## **Selectors**

### Data selectors

A data selector component is an option collection control that provides a single or multiple parameters for the user.

### Design principles

**Reasonable**

- Provide reasonable default options: Provide reasonable default options to convey the correct information, reduce the number of user operations, and improve efficiency.
- Reasonable sorting: Sort the options based on product features, logics, or user experience to help users make quick selections.

**Simplicity**

- Simple description: The text (titles and description text) in the selector should be simple and clear, so the user can understand it with ease. Use internationally accepted abbreviations for option units.
- Simple options: Due to the screen size limitation of smart wearables, if there are too many options or the options are complicated and difficult to understand, use another form of operation. We recommend that selector options do not exceed 3 lines. Try not to use selectors that require text description for options.

![Design](/img/design/1f2545a8c17e3e2105bf72c60ca0ebd2.png)

### Types

- Digit selectors
- Combination selectors

![Design](/img/design/9a35163a0e0b26fdec29034e0924d1fe.png)

![Design](/img/design/9618093ec30c0d97b80b77c9fee7ea4b.png)

### Rules for use

- Use internationally accepted abbreviations for option units.

![Design](/img/design/0797b5d169cc895de1d8154a73e9758a.png)

### Visual specifications

- The control should be positioned at the center of the entire page.
- Option digit font: DIN1451 Default color value: color_text_title, color value for selected digits: color_sys_key

![Design](/img/design/15363abff0d132aefbb4bfd58b07f3ea.png)

### Page selectors

A page selector is a control that provides the user with a choice of pages.

![Design](/img/design/2aef3e0089194c3669ce34390e337c62.png)

### Rules for use

The user switches pages by swiping horizontally or rotating the crown, and taps to confirm the current page. For example, Watchface editing.

![Design](/img/design/ffa19550d541bc80aee7bba10da5a482.png)

### Visual specifications

- Scrollable pages ➀ The interval space between two pages is 2px, color value name: color_sys_item bg

![Design](/img/design/0aa8317be7b430ae4ca5ad97c30b0dce.png)

- The same interval space applies to scrollable pages on both square screen devices and circular screen devices.

![Design](/img/design/e8b4704a6f45d6947ca66abe74ee08b0.png)

## **Digit input**

Digit input provides users with a visual way to enter digit-related information.

### Design goals

Provide users with a simple and effective form to enter digital information so that they can complete tasks with efficient input.

Provide clear visual feedback to guide user input during operations.

### Types

- Unlock control
- Dial control
- Calculator tool

![Design](/img/design/fffc01e569622dcb2bf1e2882eac304b.png)

![Design](/img/design/8073d8d0821b1d4d5d4a50a579153d1b.png)

### Rules for use

The unlock control is enabled when it detects that the wearable device is off the wrist. The user taps to enter the digits, and the screen displays the digits for 500ms before it hides the digits.

![Design](/img/design/9ce5450bcd1539ba1d3c18a76bfe94de.png)

### Visual specifications

- For the dial/unlock control, when the user taps a digit in the digit input area, the digit and its background color are enlarged by a ratio of 1.26, and they will return to the normal size when the tap ends.

    Background color value for a tapped digit: \#FFFFFF 20%

![Design](/img/design/913464e3f62715329b66385c7ad6fad2.png)

- In the circular button area of the calculator tool, when the user taps a digit/character, the digit/character and its background color are enlarged by a ratio of 1.26, and they will return to the normal size when the tap ends.
  
    The changes of the background color values for tapped digits/symbols/signs: 

    ① digits: \#333333 — \#666666 

    ② math symbols: \#666666 — \#999999 
    
    ③ equals sign: \#0986D4 — \#3A9EDD

![Design](/img/design/a905e54f2a2a5b051b6e63ee78315887.png)

- The calculator tool symbol button will light up after the user taps OK to inform the user of the current calculation method.

![Design](/img/design/b62c16910fe0ce57bbc1e59c5fcb2cf0.png)
