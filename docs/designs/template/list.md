---
sidebar_label: List
---

# List

## Typical list

A typical list is a finite sequence of data items of the same width, or in other words, a set of data items arranged in a certain linear order.

### Composition

The layout of the list is divided into left and right parts. The left side is the information area, which includes icons and text. The text part consists of a main title and a subtitle. The right side is the operation area, which includes operation buttons and status display.

![Design](/img/design/composition.png)

### Inoperable list

List items that only contain text descriptions. The user cannot go to the next level or perform any operations.

![Design](/img/design/inoperable-list.png)

### Operable list

List items for which the user can perform further operations according to the description. The list item consists of a schematic icon, a description text, and an operation option. The operation option includes entry, switch, radio button, and checkbox.

![Design](/img/design/operable-list.png)

List cascading: Control the expansion and contraction of the current sequence by the operation options (switch) of the current item, in order to display more information and operations for the item.

![Design](/img/design/operable-list_2.png)

### Auxiliary text

List subheading: The distance between the subtitle title and the top is fixed, carry out a newline if the subtitle is too long.

![Design](/img/design/auxiliary-text.png)

![Design](/img/design/auxiliary-text_2.png)

Description text: The description text in the text box must maintain a fixed distance from the bottom. carry out a newline if it is too long, the description text can not be tapped.

![Design](/img/design/auxiliary-text_3.png)

### List Sorting

Drag and drop list items,  quickly modify the order of the list.

![Design](/img/design/list-sorting.png)

### Rules for use

- Users can select an item from the list to view details or perform more tasks.
- A list page can contain multiple different list items, and the list items can be set to different heights.

![Design](/img/design/list-rules-for-use_1.png)

- List headers have different layout schemes on different devices.

![Design](/img/design/list-rules-for-use_2.png)

>① On a circular screen, the title is at the top of the list.
>
>② On a square screen, the title is on the status bar.

## Function List 

The feature list is a collection of different functional entry points arranged in a certain linear order.
### Composition

The layout of the function list is divided into left and right parts.It consists of icons on the left and text on the right.

### Application List

The application list includes the icons and names of the applications.

![Design](/img/design/application-list.png)

### List of exercises.

The exercise list contains icons of exercise types and exercise names.

![Design](/img/design/list-of-exercises.png)

### Usage Rules

- Users can select an item from the function list to enter a certain function.
- On a feature list page, icons and names should be provided uniformly
- The text in the function list should be limited to two lines. If it exceeds two lines, the excess content will be indicated by an ellipsis ...

![Design](/img/design/list-rules-for-use_3.png)

>① Add ... at the end after truncating the excess name text
>
>② Name text should not exceed 2 lines