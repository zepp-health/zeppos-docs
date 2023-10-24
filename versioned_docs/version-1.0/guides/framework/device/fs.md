---
title: File System
sidebar_label: File System
---

## Introduction

The Zepp OS Mini Program file system directory is divided into two parts, the `/assets` resource directory and the `/data` data directory.

The `/assets` directory holds the Mini Program's resources, and only readable operations can be performed in this directory.

:::info
The `hmFS.stat_asset` and `hmFS.open_asset` APIs use the `/assets` resource directory as the root directory.
:::

Each Mini Program has its own `/data` directory, which can be read and written to, and each Mini Program will be isolated from each other.

:::info
Except for the `hmFS.stat_asset` and `hmFS.open_asset` APIs, the rest of the file system operations APIs use `/data` as the root directory.
:::

## `/assets` resource directory

There are two `/assets` directory concepts that need to be clarified here.

- The `/assets` directory in the directory structure for Mini Program development
- Mini Program file system `/assets` directory

The two are very closely related, see an example.

The following figure shows the `/assets` directory in the directory structure for Mini Program development.

```tree
.
assets
├── gtr-3
│   ├── icon.png
│   └── image
│       └── logo.png
├── gtr-3-pro
│   ├── icon.png
│   └── image
│       └── logo.png
└── gts-3
│   ├── icon.png
│   └── image
│       └── logo.png
└── raw
    └── data.txt
```

After the Mini Program is compiled and built, the Mini Program file system `/assets` directory corresponds to the following.

```tree
.
assets
├── icon.png
└── image
│   └── logo.png
└── raw
    └── data.txt
```

For example, you need to access `raw/data.txt`.

```js title="page.js"
Page({
  build() {
    const fileId = hmFS.open_asset('raw/data.txt', hmFS.O_RDONLY)
  }
})
```

:::tip
`/raw` is an agreed directory name, the `/raw` directory will be copied to the Mini Program `/assets` directory during compilation and packaging.
:::

## File System API Caution

:::caution
All file system APIs need to be called within the lifecycle of an App or Page, otherwise an error will occur.
:::

### Error Code

| Error Code | Description                          |
| ---------- | ------------------------------------ |
| 0          | Operation success                    |
| -1         | Disk Error                           |
| -2         | Internal Error                       |
| -3         | Disk Error                           |
| -4         | Path not found                       |
| -5         | Path not found                       |
| -6         | Incorrect path format                |
| -7         | No access rights                     |
| -8         | No access rights                     |
| -9         | Invalid file handle                  |
| -10        | Disk Write Protection                |
| -11        | Disk Error                           |
| -12        | Insufficient disk space              |
| -13        | Insufficient disk space              |
| -14        | Execution Failure                    |
| -15        | No access rights                     |
| -16        | Disk Error                           |
| -17        | Open too many files at the same time |
| -18        | Invalid incoming parameters          |
