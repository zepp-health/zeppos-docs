---
sidebar_label: Color
---

# Color

## Avoid using colors as the only way to convey important information.

Many visually impaired users have difficulty distinguishing between blue and orange or red and green. In the application design process, avoid using only colors to convey information. Combine text or graphics to help visually impaired users understand.  

The switch provides a tag to describe the state of the toggle control, using graphics to inform the user of the corresponding on/off status.

![Design](/img/design/color.png)
> ① Regular switch style   ② Switch style with labels

## Choose colorblind-friendly palettes based on the requirements of visually impaired users. 

You can simulate color vision deficiency to find proper colorblind-friendly palettes. You can use the color vision deficiency (CVD) simulator to improve your design: [Simulator](https://www.colorhexa.com/d14221)

![Design](/img/design/3bf292eb0e6389150a27e7f80e9f6d9c.png)

- Two colors that need to be distinguished must have a sufficient hue difference to ensure △Euv≥20 (ISO 9421-307).

    The color difference value is △Eab\* in the CIE L\*A\*B\* color space and △Euv\* in the CIE LUV color space.

    [Color toolset](https://www.colortell.com/colortool) is used to convert RGB color to CIE L\*A\*B\* color space and CIE LUV color space.

    [Color difference calculator](https://m.qtccolor.com/tool/colorde.aspx) is used to calculate △Euv.

![Design](/img/design/d558d054b485affa60a96baca7c1b7df.png)

