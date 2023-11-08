# Zepp OS 开发者文档

简体中文 | [English](./README.md)

## 介绍

访问链接 https://docs.zepp.com/docs/intro/

Zepp OS 文档内容以 markdown 写作，使用 [Docusaurus](https://docusaurus.io/) 构建成网站静态资源，部署至服务器后通过 URL 即可访问。

## 项目起步

### 1. fork 项目并 clone 至本地

首先 fork Zepp OS 文档仓库。

在终端使用 `git clone https://github.com/{your github name}/zeppos-docs.git` 命令将项目仓库 clone 至本地。

### 2. 安装依赖，编译预览

使用 npm 或者 yarn 安装依赖

```sh
npm i

// or
yarn
```

预览项目，默认 en 语言

```sh
npm start

// or
yarn start
```

指定 zh-cn 语言预览项目

```sh
npm start -- --locale zh-cn

// or
yarn start --locale zh-cn
```

## 项目开发流程

1. 从最新版本的 main 分支新建一个分支：git checkout -b \<branch-name\>
2. 基于 \<branch-name\> 修改文档内容并提交，并发起 Pull Request
3. Zepp OS 官方维护人员会定期处理 Pull Request，进行 Code Review
4. Pull Request 成功合并之后，官方人员会定期进行文档部署

## 目录结构

由于使用了 [Docusaurus](https://docusaurus.io/) 的版本特性与多语言功能，项目的目录结构较为复杂，需要特别说明。

版本详细用法请参考：https://docusaurus.io/docs/versioning

以下是项目缩略版目录结构：

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

首先有一个版本概念叫做 `current`，代表文档平台最新的版本，现阶段来说就是我们的 v3 版本。

`current` 版本的文档存放在目录 `/docs` 下，其余老版本的文档存放在目录 `/versioned_docs` 下。

除了文档有版本的概念，sidebar 侧边栏配置也有版本的概念，`current` 版本的侧边栏配置在根目录 `./sidebars.js`，老版本的侧边栏配置在 `/versioned_sidebars` 目录下。

多语言的文件目录组织参考 `/i18n` 目录。

## 最佳实践

### 新增、修改文档内容

Docusaurus 支持 md 和 mdx 文件格式，语法参考 [Markdown Features](https://docusaurus.io/docs/markdown-features)

如果要修改文档，找到对应的文档完成修改提交即可。

新增文档需要在 `/docs` 目录下创建相关文件，同时在 `/i18n` 目录对应的目录下也需要创建相关文件，否则 Docusaurus 会报错。

新增文件后需要在 `sidebar.js` 中合适的位置添加文档的侧边栏配置。

### 文档相互引用

文档间的相互引用均使用相对路径，有如下几个好处

1. Docusaurus 在构建的时候会对相对路径进行检查，如果路径书写错误，命令行会有报错
2. 每创建一个新的版本副本后，所有文档仍然保持原有引用关系，无需对路径进行修改

### 插入图片

所有图片全部存放在 `/static/img` 目录下，举个例子，在 md 文件中如下方式指定路径即可

```md
![histogram](/img/api/histogram_sample.jpg)
```

如果需要对图片指定宽高等属性，参考 [`useBaseUrl`](https://docusaurus.io/docs/docusaurus-core#useBaseUrl)。

```markdown
import useBaseUrl from '@docusaurus/useBaseUrl'

<img src={useBaseUrl('/img/docs/quick-start/download_zepp.jpg')} width="300" title="download_zepp" />
```

### 嵌入 Youtube 视频

使用 [`react-lite-youtube-embed`](https://github.com/ibrahimcesar/react-lite-youtube-embed) 库，参考示例用法。

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

### 多语言和多版本

部分文档可能存在多语言版本和其他文档版本的副本，开发者在对文档做修改的时候，无需对上述情况进行处理，官方团队在处理 Pull Request 的时候会执行这部分检查。

## 许可协议

本项目遵循 Apache License Version 2.0 协议，详情见 [LICENSE 声明](LICENSE.txt)。

Copyright (c) 2023-present Zepp Health. All Rights Reserved.
