# Zepp OS Developers Documentation

English | [简体中文](./README-cn.md)

## Introduction

Zepp OS Developers Documentation Link https://docs.zepp.com/docs/intro/

Zepp OS documents are written in markdown and built as static website resources using [Docusaurus](https://docusaurus.io/), which can be accessed via a URL after deployment to a server.

## Quick Start

### 1. Fork project and clone it locally

First fork the Zepp OS documentation repository.

Use the `git clone https://github.com/{your github name}/zeppos-docs.git` command in the terminal to clone the project repository locally.

### 2. Install dependencies, compile preview

Install dependencies with npm or yarn

```sh
npm i

// or
yarn
```

Preview project, default `en` language

```sh
npm start

// or
yarn start
```

Specify the zh-cn language preview project

```sh
npm start -- --locale zh-cn

// or
yarn start --locale zh-cn
```

## Project Development Flow

1. Create a new branch from the latest version of the main branch: git checkout -b \<branch-name\>
2. Based on \<branch-name\> Modify the content of the document and submit it, and initiate a Pull Request.
3. Zepp OS officials regularly process Pull Requests and conduct Code Reviews.
4. After the Pull Request has been successfully merged, the official staff will regularly deploy the documentation.

## Directory Structure

The project's directory structure is complicated by the use of [Docusaurus](https://docusaurus.io/)'s versioning features and multi-language capabilities, and requires special instructions.

For detailed usage of the version, please refer to: https://docusaurus.io/docs/versioning

The following is an abbreviated version of the project's catalog structure.

```tree
├── docusaurus.config.js
├── sidebars.js        # sidebar for the current docs version
├── versions.json        # file to indicate what versions are available
├── docs                 # docs directory for the current docs version
│   ├── reference
│   │   └── app-json.mdx       # https://docs.zepp.com/docs/reference/app-json/
│   └── intro.mdx         # https://docs.zepp.com/docs/intro/
├── versioned_docs
│   ├── version-1.0
│   │   ├── reference
│   │   │   └── app-json.mdx    # https://docs.zepp.com/docs/1.0/reference/app-json/
│   │   └── intro.md      # https://docs.zepp.com/docs/1.0/intro/
│   └── version-v2
│       ├── reference
│       │   └── app-json.mdx    # https://docs.zepp.com/docs/v2/reference/app-json/
│       └── intro.md    # https://docs.zepp.com/docs/v2/intro/
├── i18n
│   └── zh-cn
│       └── docusaurus-plugin-content-docs
│           ├── current
│           │     ├── reference
│           │     │    └── app-json.mdx     # https://docs.zepp.com/zh-cn/docs/reference/app-json/
│           │     └── intro.md    # https://docs.zepp.com/zh-cn/docs/intro/
│           ├── version-v2 
│           │     ├── reference
│           │     │    └── app-json.mdx     # https://docs.zepp.com/zh-cn/docs/v2/reference/app-json/
│           │     └── intro.md    # https://docs.zepp.com/zh-cn/docs/v2/intro/
│           └── version-1.0
│                 ├── reference
│                 │    └── app-json.mdx     # https://docs.zepp.com/zh-cn/docs/1.0/reference/app-json/
│                 └── intro.md    # https://docs.zepp.com/zh-cn/docs/1.0/intro/
├── versioned_sidebars
│   ├── version-1.0-sidebars.json
│   └── version-v2-sidebars.json
└── package.json
```

First of all, there is a versioning concept called `current`, which stands for the latest version of the documentation platform, which at this stage is our v3 version.

The `current` version of the document is stored in the directory `/docs`, and the rest of the older versions are stored in the directory `/versioned_docs`.

In addition to the concept of versioning the documentation, sidebar configuration also has the concept of versioning, `current` version of the sidebar configuration in the root directory `./sidebars.js`, the old version of the sidebar configuration in the `/versioned_sidebars` directory.

Refer to the `/i18n` directory for multi-language file directory organization.

## Best Practice

### Add and modify document content

Docusaurus supports md and mdx file formats, see [Markdown Features](https://docusaurus.io/docs/markdown-features) for syntax.

If you want to modify a document, just find the corresponding document and complete the modification and submit it.

Add documents need to be created in the `/docs` directory, as well as in the directory corresponding to the `/i18n` directory, otherwise Docusaurus will report an error.

After adding the new file, you need to add the document's sidebar configuration in the appropriate place in `sidebar.js`.

### Document cross-referencing

The use of relative paths for cross-references between documents has several advantages

1. Docusaurus checks relative paths at build time, and reports an error on the command line if the path is written incorrectly
1. Each time a new version of the copy is created, all the documents still maintain their original references, and there is no need to modify the paths

### Insert image

All images are stored in the `/static/img` directory. As an example, you can specify the path in the md file as follows

```md
![histogram](/img/api/histogram_sample.jpg)
```

If you need to specify attributes such as the width of the image, refer to [`useBaseUrl`](https://docusaurus.io/docs/docusaurus-core#useBaseUrl).

```markdown
import useBaseUrl from '@docusaurus/useBaseUrl'

<img src={useBaseUrl('/img/docs/quick-start/download_zepp.jpg')} width="300" title="download_zepp" />
```

### Embed Youtube Video

Use the [`react-lite-youtube-embed`](https://github.com/ibrahimcesar/react-lite-youtube-embed) library, refer to the example usage.

<pre>
```mdx-code-block
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

&lt;div className="video-container">
  &lt;LiteYouTubeEmbed
    id="RPyTge0kjWQ"
    title="Zepp OS Program Environment Setup and Development Beginner's Guide"
  />
&lt;/div>
```
</pre>

### Documentation in multiple languages and versions

Some documents may have multi-language versions and copies of other document versions, developers do not need to deal with the above situation when making changes to the document, the official team will perform this part of the check when processing the Pull Request.

## License

Copyright (c) 2023-present Zepp Health. All Rights Reserved.

Licensed under the [Apache License, Version 2.0](LICENSE.txt) license.
