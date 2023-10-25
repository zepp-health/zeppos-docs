---
sidebar_label: Pop-up windows
---

# Pop-up windows

A pop-up window is a container displayed on the user interface. It is used for user operation guidance, information presentation, and message prompts.

## Design principles

Effective: Provide informative feedback to help users improve operation efficiency.

Easy to understand: The pop-up window must be brief and clear, the task must be short and focused, making it easy for users to quickly understand the information and tasks.

Restraint: Since the pop-up window will affect the user's current operation, select an appropriate reminder method according to the priority of the information, avoid excessive use, and ensure a good user experience.

## Pop-up window types

Based on the usage scenarios and feature attributes, pop-up windows on wearable devices can be divided into four categories: task completion, notification display, status notification, and information prompt.

The interaction rules for pop-up windows are as follows:

<table>
    <tr>
        <th>Pop-up window type</th>
        <th>Page type name</th>
        <th>Display time</th>
        <th>Display after screen is off for 10 seconds</th>
        <th>Swipe right to exit</th>
        <th>Page operations</th>
        <th>Long page</th>
    </tr>
	 <tr>
        <td>Task Completion pop-up window</td>
        <td>Task Popup</td>
        <td>No time limit</td>
        <td>Display</td>
        <td>No</td>
        <td>Button Operation</td>
        <td>No</td>
    </tr>
	<tr>
        <td>Status notification pop-up window</td>
        <td>Alert pop-up window</td>
        <td>No time limit</td>
        <td>Display</td>
        <td>No</td>
        <td>Button Operation</td>
        <td>Yes</td>
    </tr>
  	<tr>
        <td>Notification display pop-up window</td>
        <td>Notification pop-up window</td>
        <td>No time limit</td>
        <td>Follow system (return to the Watchface or the on-going page)</td>
        <td>Yes</td>
        <td>Button operations/None</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td rowspan="3">Message prompt pop-up window</td>
        <td>Global Alert</td>
        <td>At least 2 seconds, customizable</td>
        <td>Follow system</td>
        <td>Yes</td>
        <td>None</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>Drawer</td>
        <td>Disappear after 6 seconds
Disappear after pressing the UP/DOWN button</td>
        <td>Follow system</td>
        <td>No</td>
        <td>None</td>
        <td>No</td>
    </tr>
    <tr>
        <td>Toast</td>
        <td>Disappear after 3 seconds</td>
        <td>Follow system</td>
        <td>No</td>
        <td>None</td>
        <td>No</td>
    </tr>
</table> 

## Task Popup

Task pop-up refers to an important task initiated by the system that requires the user to interrupt their current operation and complete the task.

![Design](/img/design/task-popup.png)

![Design](/img/design/task-popup_2.png)
## Alert pop-up windows

Based on the user's status or operation, the system needs to clearly inform the user of the feedback result and allow the user to select or confirm the information. Long page display is supported.

![Design](/img/design/alert-pop-up-windows_1.png)

![Design](/img/design/alert-pop-up-windows_2.png)


## Notification pop-up windows

Notification pop-up windows navigate the user to the Notification Center, convey notification content, and inform the user of the current state of the system. The user is not forced to give feedback. Long page display is supported.

![Design](/img/design/56d3d9f7b548100d36ee4e8a5b412bbe.png)

![Design](/img/design/notification-pop-up-windows_2.png)

>① ② Special symbols are used in OS health advice notifications to differentiate them from regular notifications.

![Design](/img/design/notification-pop-up-windows_3.png)

## Global Alert

It refers to using a complete interface to present lightweight status information. If the user does not see it inadvertently, it will not have any impact on the result. A display time or swipe right to exit can be set to minimize the impact on the user.

![Design](/img/design/global-alert.png)

## Drawers

A drawer appears by sliding in from the edge of the screen. Drawers are suitable for items strongly related to the current task, and allow immediate task information prompts while the task is in progress. They significantly reduce the sense of obstruction by using a translucent background. To reduce disturbance to the user, persistence time can be set or manually turned off.

![Design](/img/design/99a5f0a80f1b12ad1e22aeb62964b803.png)

## Toasts

A toast is the most lightweight feedback and does not affect the user's operations. The user can choose not to respond to a toast.

![Design](/img/design/toasts_1.png)

![Design](/img/design/toasts_2.png)

## Visual specifications

- There should be no space between illustrations, titles, and text, and a safe distance should be left on both sides. The illustrations, titles, and body text are centered left and right for round devices, and left aligned for square devices.

![Design](/img/design/645f6ac9595d1881a561643b2b691ced.png)

- The coordinates of the illustration and the text are arranged on the upper side of the screen, and the overall content is centered on the layout. If the content exceeds one screen, it will be treated as oversized text.

![Design](/img/design/visual-specifications_2.png)

- Typesetting Rules For Ultra-long Text on Circular Screen Devices: 

  Line break, unlimited number of lines.  

  Leave a safe distance from the top for the illustration, layout the overall content downwards.  
  
  Center align the text.

  ![Design](/img/design/visual-specifications_3.png)

- Typesetting Rules For Ultra-long Text on Landscape Devices:  

  Line break, unlimited number of lines.  

  Illustrations and titles are aligned center horizontally, layout the overall content downwards.  

  Left aligned text.  

  Since the in-app status bar is always present, any pop-up triggered within the app needs to preserve the status bar.

  ![Design](/img/design/visual-specifications_4.png)

  - When the operation buttons of the pop-up window are capsule buttons, it is recommended to use no more than 4 operation buttons.

  ![Design](/img/design/visual-specifications_5.png)
