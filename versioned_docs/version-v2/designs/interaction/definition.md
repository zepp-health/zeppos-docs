---
sidebar_label: Definition of the keyType field
---

# Definition of the keyType field

You can use this field to determine the definitions of the watch buttons, including the following:

- Number of buttons
- Whether crown exists
- Mode type distinction (Normal/Workout)

## Naming rules

```javascript
{button mode}_{number of buttons} // {whether crown exists,  1 means yes, 0 means no}
```

For example, sport_21 indicates that "the number of buttons is 2", "crown exists", "button mode: workout"

Button mode: Normal, Workout

Number of buttons: 1 (single-button), 2 (double-button), 4 (four-button)

Whether crown exists: 0 (no), 1 (yes)

| **Name**                                         | **Type: English** |
| ------------------------------------------------ | ----------------- |
| Single button watch/crown exists/normal mode     | normal_11         |
| Single button watch/no crown exists/normal mode  | normal_10         |
| Double button watch/crown exists/normal mode     | normal_21         |
| Double button watch/no crown exists/normal mode  | normal_20         |
| Double button watch/crown exists/workout mode    | sport_21          |
| Double button watch/no crown exists/workout mode | sport_20          |
| Four button watch/no crown exists/workout mode   | sport_40          |

## Rules for use

- Default button mode for a sport watch: Workout
- Default button mode for a non-sport watch: Normal
- The button mode will be added later, so there will be two button modes supported in the double button watch.
