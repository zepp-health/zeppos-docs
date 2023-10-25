---
sidebar_position: 1
sidebar_label: Designer's Self-Checklist
---

# Designer's Self-Checklist

The self-checklist describes the rules that need to be followed in the system design process, which will improve the consistency across the system and reduce user confusion and mistakes in interactive data visualization.

The self-checklist has two categories, "Required" and "Recommended". For the "Recommended" category, consider the product definition and make appropriate modifications.

| **Dimension**        | **Item**                       | **Requirement**                                              | **Measurements** |
| -------------------- | ------------------------------ | ------------------------------------------------------------ | ---------------- |
| Structure            | Right swipe return             | Avoid interactions that conflict with the right swipe return. If this constrains your design, you can negotiate to modify the interaction or change the hot zone. | Required         |
| Visual               | Color                          | Whether the colors of key content and information, warnings, controls, basic graphics, and so on refer to component library presets. | Required         |
|                      | Font                           | Whether the font size refers to the component library.       | Required         |
|                      | Icon                           | Reserve a 2px blank and transparent safe area around the icon.<br/>The icon output resource must be in PNG format, and the blank area must be transparent. | Required         |
|                      |                                | The style of app icon design must follow that of system app icons. | Recommended      |
|                      | Illustrations                  | Use different types of illustrations on different pages.     | Required         |
| Templates            | Pop-up windows                 | Whether the component is referenced.<br/>Distinguish between round/square screen devices for pop-up window alignment. | Required         |
|                      | Empty page                     | Distinguish between operating and non-operating scenarios.   | Required         |
|                      | Cards                          | The height of the card should not exceed one screen.<br/>The space between the card and the content around is 16px.<br/>Use unified components for the right swipe delete. | Required         |
|                      | List                           | The spacing between lists is 8px.<br/>A space is required between the description text and the next element. | Required         |
| Elements             | Charts                         | Choose the appropriate chart style according to the data.<br/>Note the default state of the chart data. | Recommended      |
|                      | Loading                        | Whether the corresponding control in the system control library is referenced. | Required         |
|                      | Page indicators                | Whether the corresponding control in the system control library is referenced. | Required         |
|                      | Buttons                        | Whether an appropriate button style is used based on the button interaction behavior level.<br/>Whether the button text is accurate and concise.<br/>Whether the buttons of square screen and round screen devices call the corresponding component library. | Required         |
|                      | Switches                       | Whether the switches use the same layout on the right side of the page. | Required         |
|                      | Selection and status indicator | Whether the controls use the same layout on the right side of the page. | Required         |
|                      | Sliders                        | Whether the corresponding control in the system control library is referenced. | Required         |
|                      | Selectors                      | There cannot be more than 5 single-digit columns.<br/>There cannot be more than 3 double-digit columns.<br/>There cannot be more than 2 three-digit columns. | Required         |
|                      | Digit input                    | Whether the corresponding control in the system control library is referenced. | Required         |
|                      | Fast reply                     | Whether the corresponding control in the system control library is referenced. | Required         |
|                      | Text                           | Whether the component is referenced.<br/>Whether the color references a style.<br/>Specify the size of the text box. | Required         |
|                      | Progress                       | Whether the component is referenced.                         | Required         |
| Internationalization | Text                           | Texts in English, Russian, and German are relatively long. Consider the method to handle multiple lines of text that occur at the same time. | Required         |
| Accessibility        | Color                          | Whether the prompt message contains text.<br/>When using only colors to distinguish information, avoid the use of similar colors that are difficult to recognize by visually impaired users.<br/>Color contrast ratio self-check. | Recommended      |