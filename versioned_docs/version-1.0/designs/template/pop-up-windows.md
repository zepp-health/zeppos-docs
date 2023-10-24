---
sidebar_label: Pop-up windows
---

# Pop-up windows

A pop-up window is a container displayed on the user interface. It is used for user operation guidance, information presentation, and message prompts.

## Design principles

Effective: Provide informative feedback to help users improve operation efficiency.

Easy to understand: The pop-up window must be brief and clear, the task must be short and focused, making it easy for users to quickly understand the information and tasks.

Restraint: Since the pop-up window will affect the user's current operation, select an appropriate reminder method according to the priority of the information, avoid excessive use, and ensure a good user experience.

## Types

Based on the usage scenarios and feature attributes, pop-up windows on wearable devices can be divided into four categories: task completion, notification display, status notification, and information prompt.

The interaction rules for pop-up windows are as follows:

| **Pop-up window type**             | **Page type name**         | **Display time**                                             | **Display after screen is off for 10 seconds**               | **Swipe right to exit** | **Page operations**    | **Long page** |
| ---------------------------------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------- | ---------------------- | ------------- |
| Status notification pop-up window  | Alert pop-up window        | NO time limit                                                | Display                                                      | NO                      | Button operations      | Yes           |
| Notification display pop-up window | Notification pop-up window | NO time limit                                                | Follow system (return to the Watchface or the on-going page) | Yes                     | Button operations/None | Yes           |
| Message prompt pop-up window       | Drawer                     | Disappear after 6 seconds Disappear after pressing the UP/DOWN button | Follow system                                                | NO                      | None                   | NO            |
|                                    | Toast                      | Disappear after 3 seconds                                    | Follow system                                                | NO                      | None                   | NO            |

## Alert pop-up windows

Based on the user's status or operation, the system needs to clearly inform the user of the feedback result and allow the user to select or confirm the information. Long page display is supported.

![Design](/img/design/26a7ef57fe029ff37fed19c4de116108.png)

![Design](/img/design/f2302c570aebd0513fa3772a4a3119e0.png)

## Notification pop-up windows

Notification pop-up windows navigate the user to the Notification Center, convey notification content, and inform the user of the current state of the system. The user is not forced to give feedback. Long page display is supported.

![Design](/img/design/56d3d9f7b548100d36ee4e8a5b412bbe.png)

## Drawers

A drawer appears by sliding in from the edge of the screen. Drawers are suitable for items strongly related to the current task, and allow immediate task information prompts while the task is in progress. They significantly reduce the sense of obstruction by using a translucent background. To reduce disturbance to the user, persistence time can be set or manually turned off.

![Design](/img/design/99a5f0a80f1b12ad1e22aeb62964b803.png)

## Toasts

A toast is the most lightweight feedback and does not affect the user's operations. The user can choose not to respond to a toast.

![Design](/img/design/147ee02ba3c1d0cdebb446ca8eb2972c.png)

![Design](/img/design/ba407fddd5023b562c8843bf3d2f46f0.png)

## Visual specifications

- There should be no space between illustrations, titles, and text, and a safe distance should be left on both sides. The illustrations, titles, and body text are centered left and right for round devices, and left aligned for square devices.

![Design](/img/design/645f6ac9595d1881a561643b2b691ced.png)

- When the operation buttons of the pop-up window are capsule buttons, it is recommended to use no more than 4 operation buttons.

![Design](/img/design/d4082ced81ce3733bd36014123f683b4.png)
