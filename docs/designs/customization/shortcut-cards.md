---
sidebar_label: Shortcut Cards
---

# Shortcut Cards

Shortcut Cards are visual containers on the Negative Screen that display core functionalities or important information of an application.

## Design Principles

**Lightweight and Practical**: With shortcuts cards, users can quickly view function information, or perform quick actions through lightweight interactions, It allows users to reach functions directly, reducing the need for navigating through multiple levels.Please distill and display the information or functions that users care most about on the shortcut cards, avoiding too many secondary functions or marketing messages.

**Clear at a Glance**: The core concept of shortcut cards is to provide users with clear, immediate access to information and facilitate convenient, quick operations. Within the limited space of the card, please arrange text, images, and operational entry points rationally, It allows users to obtain information or complete actions at a glance.

## Composition

The components of a shortcut card include the card background, text, actions, and rich media.

Background: By default, use the system color `color_sys_item_bg` for the background. Custom colors or textures that add additional meaning can also be used.

![Design](/img/design/6e07088d-5c2b-4200-9c76-496d9f543716.png)

>① Default system color background.
>
>② Meaningful colored backgrounds.
>
>③ Texture backgrounds that incorporate brand-specific colors and graphic information.

Text: Title, subtitle, and descriptive text.

![Design](/img/design/a4502ace-d793-42e0-9aa0-4e6b582a5666.png)

Rich Media: Elements such as charts, graphics, audio playback, etc.

![Design](/img/design/897f2682-86eb-4ac3-add4-872e4080c49e.png)

>① 带有图表元素的卡片
>
>② 带有图形元素的卡片
>
>③ 音频播放样式的卡片

Actions: Buttons, switches, selectors, and other operable components.

![Design](/img/design/23c230ae-33c1-4f57-bee9-e4b1cfcb7df2.png)

>① Card with chart elements
>
>② Card with graphic elements
>
>③ Card styled for audio playback

## Visual guidelines

- - There is a fixed maximum height for a single card. If the card exceeds this height, the top text will not display completely when the card is at the top of the screen. Additionally, the minimum height for a single card is the height of two lines of text (120 px).

![Design](/img/design/33c879df-bee4-4dc2-a2c2-877538135818.png)

>① Maximum card height for round screen devices
>
>② Maximum card height for square screen devices

![Design](/img/design/eb303f9b-cd30-4fda-bf7c-f24ac2838ac5.png)

>① Minimum card height for round screen devices
>
>② Minimum card height for square screen devices

- A safety margin (16px) should be maintained between the card content and the card edges to prevent the content from crowding the edges, which could make the overall appearance look cluttered.

![Design](/img/design/d3e08c30-baf5-46ab-b52c-c35c850d10b2.png)

![Design](/img/design/24fdc203-eedb-4b8d-b945-9531597df6dc.png)

- Due to limited space on the card, focus on the core content when arranging the layout. Use concise and summarized text for titles and content to convey information effectively. For overly long text, prioritize refining and optimizing the copy first. Depending on the specific usage scenario, choose suitable display methods such as showing ellipses or scrolling text. For further details, refer to guidelines [Interface layouts](../internationalization/interface-layouts.md#compatible-with-multilingual-text)

![Design](/img/design/05181aa4-7c2c-4169-a74f-a2531105cacc.png)

![Design](/img/design/c3a0649a-3445-4140-a046-6df814275de0.png)

![Design](/img/design/769717d6-0640-4ad7-99ad-9b28e485dee7.gif)

## Content layout

We offer a variety of content layout styles to accommodate different information display or functional needs. You can design  the layout by referencing corresponding templates based on the content.

- Plain text

![Design](/img/design/1de4eb78-e974-4772-a8ff-0ce4281884d5.png)

>① Title and annotation information, for example: event, To Do.

![Design](/img/design/a21b080d-6c9e-4ebe-b60a-2923f13d920f.png)

>② Title and large numerical information, for example: flight information, pollen allergy index.

- Combinations

![Design](/img/design/302bca11-8797-421a-95a4-201d189d9d82.png)

>③ Text with icons or images, for example: call logs, weather conditions.

![Design](/img/design/5e49b336-f027-49b7-9341-3db2f4b643f0.png)

>④ Text with charts, for example: last night sleep, air pressure trend, temperature.

![Design](/img/design/fccf41dc-6f52-4b15-ab76-6d55116367d0.png)

>⑤ Text with actionable elements, for example: breathe, alarm, To Do.

![Design](/img/design/0d64c6e9-2bee-41a9-b6cd-2ceac01ba744.png)

>⑥ Vertical layout of Peer information, for example: workout record, weather indicator.

![Design](/img/design/334b7648-9a38-4013-a9f0-07ad6559b0b4.png)

>⑦ Horizontal layout of Peer information, for example: recent workout, today's activities, timers.

## Figma Design template file link

[Shortcut Cards Templates](https://www.figma.com/community/file/1372844485569677237)
