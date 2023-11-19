---
title: Zeus CLI Command Line Tools
sidebar_label: Introduction
---

## Intro

The Zeus CLI is a command line toolset that has the following main features.

- `zeus create` Create Zepp OS Mini Program or Watchface project
  - Command line interactive Q&A format for a more user-friendly experience
  - Multiple project templates to choose from
- `zeus dev` compilation preview
  - Connect to the simulator and preview the project
  - Listen to project code changes and refresh automatically
- `zeus preview` generates a QR code that can be scanned and installed on the device via the Zepp APP
- `zeus build` to build the application zab package

## Environmental Preparation

Zeus CLI relies on Node.js >= 14.0.0, for Node.js installation please refer to [Basic Environment Build - Installing Node.js](../../best-practice/Basic-environment-construction.mdx#installing-nodejs).

## Installing the Zeus CLI

Global installation via npm [`@zeppos/zeus-cli`](https://www.npmjs.com/package/@zeppos/zeus-cli).

```sh
npm i @zeppos/zeus-cli -g

// or

yarn global add @zeppos/zeus-cli
```

## `zeus create` Create project

Create project.

```sh
zeus create hello-world
```

:::tip
`hello-world` is the name of the created project, you can change it yourself
:::

Generate projects according to the following selection.

```sh
? Which kind of template application need to created? Empty
? What type of application should be created? APP
? Should this application contain a app-side component? Yes
? Should this application contain a settings component? Yes
? Which platforms should this application be built for? GTR3 Pro, GTR3
```

After completing the project creation, the `hello-world` project directory structure is as follows.

```tree
└── hello-world
    ├── app-side
    │   ├── i18n
    │   │   └── en-US.po
    │   └── index.js
    ├── app.js
    ├── app.json
    ├── assets
    │   ├── 436x436-gtr-3
    │   └── 480x480-gtr-3-pro
    ├── pages
    │   ├── example
    │   │   └── index.js
    │   ├── i18n
    │   │   └── en-US.po
    │   └── index.js
    └── setting
        ├── i18n
        │   └── en-US.po
        └── index.js
```

## `zeus dev` compilation preview (simulator)

Execute `zeus dev` in the project root for a preview of the compilation.

Preview requires launching the simulator and turning on "Device Simulator:"

- For simulator installation and launch, please refer to [Simulator Installation and launch](../simulator/setup.md)
- For downloading and opening "Device Simulator", please refer to [Installing and opening "Device Simulator"](../simulator/index.md#install-and-open-device-simulator)

Zeus CLI connects to the simulator and automatically previews the project while listening for changes to the project code, automatically compiling and previewing the latest content.

```sh
# Enter the project root directory
cd hello-world

# Start compilation preview
zeus dev
```

## `zeus login` Login

Execute `zeus login` to automatically jump to the login screen, enter your Open Platform account/password to log in, after logging in you can use some of the features associated with your account, such as `zeus preview`.

:::caution
Some commands that require login are checked for login before execution, and if they are not logged in, they will be forced to log in.
:::

## `zeus preview` compilation preview (real machine)

Execute `zeus preview` in the project root for compilation preview (real machine).

```sh
# compilation preview (real machine)
zeus preview
```

Select the compile option according to the command line prompt.

```sh
? Which target would like you to build?
> 480x480-gtr-3-pro
  454x454-gtr-3


? Which target would like you to build? 480x480-gtr-3-pro
begin generate qrcode
```

After successful compilation, a QR code will be displayed on the terminal, which can be scanned with the Zepp App "Developer Mode" scan function to install the Mini Program or Watchface on the device.

:::tip
This step requires the developer mode of Zepp App to be enabled, refer to [Zepp App - Developer Mode](../zepp-app.md)

Zepp App Developer Mode Scan Action Path

Profile => Bound Devices page and scroll down to the bottom => Developer Mode
:::

![developMode](/img/docs/guides/tools/studio/devmode.png)

## `zeus build` Build the application installer

Execute `zeus build` to build the application installation package.

```sh
zeus build
```

After the build is complete, the application installation package is available in the project `dist/` directory.

## `zeus config` Configuration-related

- `zeus config list`
  - See all current configurations
- `zeus config set <key>=<value>`
  - Add Configuration
  - Multiple configurations are separated by spaces
- `zeus config get <key>`
  - View the configuration corresponding to `key`
- `zeus config delete <key>`
  - Delete the configuration corresponding to `key`

## `zeus bridge` Turn on Developer Bridge mode

Execute `zeus bridge` in the project root directory to enter Developer Bridge mode.

The Developer Bridge mode allows you to establish a connection with the runtime environment. For details, see [Developer Bridge Mode](guides/faq/developer-bridge-mode.md).

## `zeus status` Related status

Run `zeus status` to see the current login status and user information (nickname/userID), simulator connection status, and other information.

:::info
User information can only be viewed if you are logged in
:::
