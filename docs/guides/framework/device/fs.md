---
title: File System
sidebar_label: File System
---

## Introduction

The Zepp OS Mini Program file system directory is divided into two parts, the `/assets` resource directory and the `/data` data directory.

The `/assets` directory holds the Mini Program's resources, and only readable operations can be performed in this directory.

:::info
The `statAssetsSync` and `openAssetsSync` APIs use the `/assets` resource directory as the root directory.
:::

Each Mini Program has its own `/data` data directory, which can be read and written to, and each Mini Program will be isolated from each other.

:::info
Except for the `statAssetsSync` and `openAssetsSync` APIs, the rest of the file system operations APIs use `/data` as the root directory.
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

## Zepp OS 3.0 path specification

After Zepp OS 3.0, the paths in the API support absolute path writing, and support using the `assets://` prefix to access the resource `/assets` directory, and `data://` to access the Mini Program data `/data` directory.

See an example:

```tree
.
assets
└── image
    └── hello.png

.
data
└── download
    └── world.png
```

| Resource Directory | Prefix      | Readonly | Example                     |
| ------------------ | ----------- | -------- | --------------------------- |
| `/assets`          | `assets://` | YES       | `assets://images/hello.png` |
| `/data`            | `data://`   | NO       | `data://download/world.png` |
