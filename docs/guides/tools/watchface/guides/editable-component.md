---
title: Editable Component
---

# Editable Component

The Editable Component allows watch face data fields to be switched on the device. By long-pressing on the watch face to enter edit mode and tapping the pencil icon, users can switch between different data items (Heart Rate, Steps, Calories) by sliding or tapping on the data editing page. After exiting edit mode, the watch face displays the real data from the selected type.

## Goal

Use the provided resource pack to create an editable watch face from scratch.

**Final result**: A round watch face that supports switching between **Heart Rate, Steps, and Calories** data items, including pointer clock, date, editable component, and background image.

## Resource List

Resource pack: [assets.zip](https://upload-cdn.zepp.com/watchface-maker/20260708/assets.zip)

```
assets/
├── images/
│   ├── preview.png        # Watch face preview image (480×480)
│   ├── font/              # Digit images (11 images: 0-9 + default placeholder for no data)
│   ├── pointer/           # Pointer images (hour h / minute m / progress pointer_progress)
│   ├── date/              # Date number images (0-9)
│   ├── img/
│   │   └── bg.png         # Watch face background image (480×480)
│   ├── edit/
│   │   ├── select.png     # Edit mode selection state background
│   │   ├── tip.png        # Component switch tip text background
│   │   ├── mask100.png    # Mask layer - 100% transparent
│   │   └── mask70.png     # Mask layer - 70% transparent
│   ├── widgetText/        # Data item icons
│   │   ├── step.png
│   │   ├── cal.png
│   │   └── heart.png
│   └── widgetPreview/     # Edit mode data item preview images
│       ├── steps.png
│       ├── cal.png
│       └── hr.png
```

## Step 1: Create a Watch Face

Go to the [Watchface Maker](https://watchface.zepp.com) and navigate to the watch face creation page.

1. Fill in the watch face name, e.g. "custom data field"
2. Click the Create button to enter the main designer page

## Step 2: Configure Background

1. Select the "Background" component from the component dropdown menu and add it
2. In the left layer tree, click "Background" and configure in the right panel:
   - **Display Type**: Select `Image Background`
   - **Background Image**: Upload `assets/images/img/bg.png`

## Step 3: Configure Date

1. Select the "Date" component from the component dropdown menu and add it
2. In the left layer tree, click the added "Date", check "Day", then configure in the right panel:
   - **Number Images**: Batch upload `assets/images/date/0.png` ~ `9.png`
   - **Display Position**: x: 357, y: 231

## Step 4: Configure Editable Component

### Add Editable Component

Select "Editable" / "Editable Component" from the component dropdown menu and add it.

### Configure Switchable Data Fields

1. Click the "Editable Component" in the left layer area and check the sub-components to enable switching:
   - **Heart Rate** with its display forms: **Data**, **Icon**, **Pointer Progress**

2. Configure the sub-component data:

   **Digital Text (Data)**

   | Parameter | Value |
   |---|---|
   | No data | Upload `none.png` |
   | Font images | Upload `assets/images/font/0.png` ~ `9.png` |
   | Position | Heart Rate (214, 120) |
   | Alignment | center |

   > **Note**: The digital text configuration for other data items (Calories, Steps) is the same as Heart Rate. The same set of digit images can be reused.

   **Icon**

   | Parameter | Value |
   |---|---|
   | HEART_RATE icon | `assets/images/widgetText/heart.png` |
   | Position | x: 189, y: 152 |

   **Pointer Progress**

   | Parameter | Value |
   |---|---|
   | Center X | 240 |
   | Center Y | 334 |
   | Pointer image | Upload `assets/images/pointer/pointer_progress.png` |
   | Pointer origin | x: 16, y: 80 |
   | Start angle | 0 |
   | End angle | 360 |

   > **Note**: All data items share the same pointer progress configuration. The same pointer image is used for all three data items.

3. Repeat the same operation for Calories and Steps. Only the text component display coordinates differ due to varying data digit lengths:

   **Digital Text (Data)**

   | Parameter | Value |
   |---|---|
   | No data | Upload `none.png` |
   | Font images | Use the Heart Rate digit images already uploaded, or upload `assets/images/font/0.png` ~ `9.png` |
   | Position | Calories (206, 120), Steps (200, 120) |
   | Alignment | center |

### Configure Edit Mode Display Elements

Click "Edit" in the toolbar above the preview area to switch to edit preview mode. Configure the following parameters in the right panel:

1. **Touch Area**

   Upload the data component selection state background image `assets/images/edit/select.png`. Width and height are auto-filled based on the image dimensions.

   | Parameter | Value |
   |---|---|
   | Position X | 184 |
   | Position Y | 102 |
   | Width | 113 |
   | Height | 80 |

2. **Tip Label**

   Upload the background image for displaying the component name `assets/images/edit/tip.png`.

   | Parameter | Value |
   |---|---|
   | Label position X | 199 |
   | Label position Y | 63 |
   | Label width | 89 |
   | Label height | 36 |
   | Text display width | 89 |
   | Text margin | 10 |

3. **Configure Default Type**

   Select a data item from the "Default Type" dropdown as the default type shown on first display (e.g. Heart Rate).

4. **Data Preview Images**

   Each data item displays a preview image on the edit mode canvas. Upload the corresponding widgetPreview images:

   | Data Item | Preview Image File |
   |---|---|
   | STEP | `assets/images/widgetPreview/steps.png` |
   | CALORIE | `assets/images/widgetPreview/cal.png` |
   | HEART_RATE | `assets/images/widgetPreview/hr.png` |

### Add Mask Layer

In the left layer tree, click "Component Mask" and configure:

| Parameter | Value |
|---|---|
| Mask layer image | `assets/images/edit/mask100.png` |
| Mask image | `assets/images/edit/mask70.png` |

**Purpose of mask layers:**
- **Mask layer image** (mask100): Covers the area outside the editable component, dimming unselected regions with a cutout for the editable area
- **Mask image** (mask70): Semi-transparent overlay outside the selected component, with a cutout for the editable area

## Step 5: Add Pointer Clock

1. Select the "Pointer Time" component from the component dropdown menu and add it
2. In the left layer tree, check ☑️ "Hour Hand" / "Minute Hand", then configure in the right panel:

   **Hour Hand**

   | Parameter | Value |
   |---|---|
   | Center position | x: 240, y: 240 |
   | Pointer image | `assets/images/pointer/h.png` |
   | Pointer origin | x: 33, y: 240 |

   **Minute Hand**

   | Parameter | Value |
   |---|---|
   | Center position | x: 240, y: 240 |
   | Pointer image | `assets/images/pointer/m.png` |
   | Pointer origin | x: 27, y: 240 |

## Step 6: On-Device Verification

1. Click the "Run on device" button
2. Upload the preview image `assets/images/preview.png`
3. [Install to the device by scanning the QR code](scanCode.md)
