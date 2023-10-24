---
title: Text
---

# Text

Create a new Watchface (or edit an existing Watchface), in the toolbar at the top of the Watchface maker, select the "Component - Text" module, and select "Text" in the left menu

![addText.png](/img/docs/guides/tools/watchface/text_add_text_en.png)

## Normal text

Add the relevant assets in the right action bar

- Modify the "Placement" coordinates to (100,40)
- Modify "Dimension" width "W" to 100, height "H" to 40
- Modify the content of "Text Field" to Time
- "Color", "Text Appearance" can be modified, keep the default value here

![textNormalPreview.png](/img/docs/guides/tools/watchface/text_normal_preview_en.png)

## Tag text

Select "Component - Text" in the top menu, add new text component, select this component

- Modify the coordinates of "Placement" to (190,113)
- Modify the "Alignment", "Horizontal align" and "Vertical align" are both configured as "Center"
- Modify "Text Field", click "Tag"

![textAddTag.png](/img/docs/guides/tools/watchface/text_add_tag.png)

- In the pop-up, delete the default value, click the "`[HOUR_24_Z]`" tag, enter ":", then click the "`[MIN_Z]`" tag, click "OK" to save the content

![textDialog.png](/img/docs/guides/tools/watchface/text_dialog.png)

- Modify "Font Size" in "Text Appearance" to 24
- See the effect in the workspace

![textTagPreview.png](/img/docs/guides/tools/watchface/text_tag_preview_en.png)

## Note

1. On the Watchface, when the actual width of the text is greater than the set width, the text rotates in a carousel way
2. Tag text, support multiple tags, tags and text at the same time
