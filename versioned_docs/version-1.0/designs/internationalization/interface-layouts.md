---
sidebar_label: Interface layouts
---

# Interface layouts

**Separation of graphics and text**

Do not embed text directly into images. When creating text in an image, we recommend layering the image and text.

![Design](/img/design/e60d54dddb1ee7b9d3ac7a75466eda32.png)

**Text space**

Considering the large differences in the length of translated texts in different languages, try to use concise descriptions, reserve enough space for all texts, and set the processing methods in case of overflow.

Reserve enough space for the display of localized control text based on the text length. Use a letter string as an example. If the number of letters is less than 10, reserve 50% of the space. If the number of letters is greater than 10 and less than 20, reserve 30% of the space. If the number of letters is greater than 20, reserve 20% of the space.

![Design](/img/design/1c1fec829eedada660c3ba27c098aa57.png)

When the text cannot wrap and is too long, use an ellipsis (...).

![Design](/img/design/1acb43175d60ef491e0756a7dbdd25a4.png)

When the text needs to be displayed completely and cannot be omitted, use the "marquee" effect.

![Design](/img/design/6b621b82a74e0b9804f29b7874c65494.png)

>① Only single-line text can use the "marquee" effect.
>
>② The marquee effect features a gradient mask on the right side of the text, moving from 0% to 100% opaque. It is a square with the same height as the single-line text box.

**Correct handling of RTL languages**

RTL (Right to Left) languages refer to languages written from right to left. Common features of this language are: sentences are read from right to left; sequence of events progresses from right to left; an arrow pointing right to left (←) indicates forward motion, and an arrow pointing left to right (→) indicates backward motion.

![Design](/img/design/83cb867d377ccf5ce5a7df2b1d573c90.png)

>① When the direction in which UI elements is displayed is changed, untranslated text (even if it is part of a phrase) and digits are not mirrored, and they should be maintained in the correct direction that fits the target language.
>
>② Mirror the operations that indicate specific directions.
>
>③ Maintain consistency in icons that do not indicate directions and only change their positions.
>
>④ Mirror the icons that indicate specific directions.
>
>⑤ After a word is translated, it is written from right to left.
