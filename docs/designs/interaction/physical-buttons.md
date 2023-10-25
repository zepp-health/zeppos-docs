---
sidebar_label: Physical buttons
---

# Physical buttons

Wearable devices often have multiple physical buttons, also known as "crown buttons". There has always been at least one button on a Zepp OS device, namely the power button. In addition to this, there may be multiple multifunction buttons (or none).

## Design principles

- Provide visual feedback in response to physical button interactions
- Avoid defining multiple button interactions to minimize confusion

## Naming rules

Watches connected to Zepp OS display names on the user interface when the name of the physical button is not printed on the hardware. The product definition principles are based on the following:

- If the button name is marked on the printing of the hardware, use the name printed on the hardware, such as: Blanc Select or Blanc Back.
- If the printing on the hardware does not indicate the name of the button, the position of the button on the watch is used to mark the name of the button. The feature of the physical button as defined by the specific software is not used as the button name.

## Rules for use

Note: If there are special definitions for specific interfaces, they will be embodied in the interactive document on each page. If there are no special definitions, rules in the following table shall prevail.

Allow applications and a specific interface to have the ability to define physical button features (including: tap, long press for 1 second, and long press for 5 seconds)

- Non-JS applications: have the permission to intercept all physical button operations
- JS applications
    - Tap: do not have the permission to intercept physical button operations
    - Long press for 1 second or 5 seconds: have the permission to intercept all physical button operations

**Single button watch**

| **Operation**                                 | **Triggered event**                                          |
| --------------------------------------------- | ------------------------------------------------------------ |
| Press the side button                         | Go to the application list. Press the upper button again to jump to the Watchface |
| Press and hold the side button for 1 second   | Quick start default online voice                             |
| Press and hold the side button for 5 seconds  | Power-off/Reboot                                             |
| Press and hold the side button for 12 seconds | Force reboot                                                 |

**Double button watch**

| **Operation**                                                | **Triggered event**                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Press the upper button                                       | Jump to the application list. Press the upper button again to jump to the Watchface |
| Press and hold the upper button for 1 second                 | Quick start default online voice                             |
| Press and hold the upper button and the lower button for 5 seconds | Power-off/Reboot                                             |
| Press and hold the upper button for 12 seconds               | Force reboot                                                 |
| Press the lower button                                       | Quick start-up (default)                                     |

**Four button watch**

<table>
    <tr>
        <th colspan="2">Interface location → <br/> Button ↓ interaction ↘</th>
        <th>Watch faces</th>
        <th>Stopwatch & ongoing workout</th>
        <th>Dialog box</th>
        <th>Majority of other interfaces</th>
    </tr>
	 <tr>
        <td rowspan="4">Tap = press and release quickly</td>
        <td>SELECT</td>
        <td>Quick start-up: default workout list</td>
        <td>Pause/resume</td>
        <td>Right button</td>
        <td>Go to next level/interact with focused item</td>
    </tr>
	<tr>
        <td>BACK</td>
        <td>App List</td>
        <td>Record lap</td>
        <td>Left button</td>
        <td>Back to previous level</td>
    </tr>
    <tr>
        <td>UP</td>
        <td>Control center</td>
        <td colspan="3">View previous page/view more above/ + 1;</td>
    </tr>
    <tr>
        <td>DOWN</td>
        <td>Shortcut Cards</td>
        <td colspan="3">View next page/view more below/ - 1;</td>
    </tr>
    <tr>
        <td>Press and hold the upper button for 5 seconds</td>
        <td>SELECT</td>
        <td colspan="4">Select power-off or reboot</td>
    </tr>
    <tr>
        <td>Press and hold the upper button for 12 seconds</td>
        <td>SELECT</td>
        <td colspan="4">Force reboot</td>
    </tr>
    <tr>
        <td>Press the lower button for 1 second</td>
        <td>BACK</td>
        <td>Screen off</td>
        <td colspan="3">No operations</td>
    </tr>
    <tr>
        <td>Press and hold the upper button without releasing it</td>
        <td>UP</td>
        <td colspan="4">Page up quickly (if applicable)</td>
    </tr>
    <tr>
        <td>Press and hold the Down button without releasing it</td>
        <td>DOWN</td>
        <td colspan="4">Page down quickly (if applicable) </td>
    </tr>
</table> 

## Response speed

**Double button watch: supports tap, long press, and super long press**

This table defines the expected response actions and time when a physical button is pressed in the off-screen state and on-screen state:

- Red indicates that the screen is off
- Blue indicates that the screen is on

| **Response action**         | **Response time definition**                                 |
| --------------------------- | ------------------------------------------------------------ |
| Tap                         | ![Design](/img/design/cb51d72a6b71f6b3f9b801fc2764bf8b.png) ①Press ②Lift ③Response to screen on ④Response to tap ⑤Response to long press |
| Long press                  | ![Design](/img/design/4194c295a5019b5eb80a88bc1225afa9.png) ①Press ②Lift ③Response to screen on ④Response to long press |
| Super long press definition | ![Design](/img/design/56d9383863323071971adc64af18f29a.png) ①Press ②Lift ③Response to screen on ④Response to long press ⑤Response to super long press |

**Single button watch: supports tap, double tap, long press, and super long press**

This table defines the expected response actions and time when a physical button is pressed in the off-screen state and on-screen state:

- Red indicates that the screen is off
- Blue indicates that the screen is on
- Gray indicates that both on-screen and off-screen states need to be supported.


