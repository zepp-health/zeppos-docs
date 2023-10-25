---
sidebar_position: 3
title: Overview
---

# VS Code Extension Plugin（Zepp OS Dev Tools）

:::danger
This plugin is deprecated and no longer provides documentation or technical support, please use the [Zeus CLI Tool](../cli/index.md)
:::

## Introduction
Zepp OS Dev Tools is an extension to the popular Visual Studio Code editor, currently implementing the npm package [@zeppos/zeus-cli](https://www.npmjs.com/package/@zeppos/zeus-cli) (CLI for short) commands for visual interaction, and will support more new features in the future, so stay tuned.

## Prerequisites

 - Requires Visual Studio Code version 1.67.0 and above

## Plugin Installation

Search for [Zepp OS Dev Tools](https://marketplace.visualstudio.com/items?itemName=Zepp.zeppos-dev-tools) in the VS Code Plugin Marketplace, then click Install.

![zeppos-dev-tools](/img/docs/guides/tools/vscode-extension/zeppos-dev-tools.gif)

## Plugin Configuration

### Configure 1(Version 0.1.0 is not supported)
  Run mode `Terminal-based`, or `GUI-based`:
- terminal: Command interaction is based on the terminal command line
- GUI: Command interaction is based on the GUI

The default value is GUI

![mode](/img/docs/guides/tools/vscode-extension/mode.png)

### Configure 2
  The shortcut displayed in the status bar at the bottom:
- dev: The `zeus dev` command corresponding to the CLI
- preview: The `zeus preview` command corresponding to the CLI
- bridge: The `zeus bridge` command corresponding to the CLI
- build: The `zeus build` command corresponding to the CLI
- rocket: Full Feature List

The default value is []

![set-statusbar](/img/docs/guides/tools/vscode-extension/set-statusbar.gif)

## Plugin Usage
### Mode 1

Add zepp-os-explorer view for USER, STATUS, BUILD related information display and provide shortcut function buttons.

![zepp-os-explorer](/img/docs/guides/tools/vscode-extension/zepp-os-explorer.png)

### Mode 2

In any interface of VS Code, use the shortcut command `Command + P` or `Ctrl + P`  to bring up the window and type `>zeus`, then all supported commands will appear, click on the one you need to proceed.
![command+p](/img/docs/guides/tools/vscode-extension/command+p.gif)

### Mode 3

On the editor page, open any file and you can see a little ZEPP OS icon in the title status bar in the upper right corner, click it to summon a pop-up list of all commands.

![right-corner-zepp-os](/img/docs/guides/tools/vscode-extension/right-corner-zepp-os.gif)

### Mode 4

After activating the plug-in (i.e., having executed Mode 1 or 2 or 3 once, and the Plugin Configure 2 is effectively set), the common commands of the CLI will appear in the status bar at the bottom of VS Code, making subsequent development faster.

![statusbar](/img/docs/guides/tools/vscode-extension/statusbar.gif)

## Support commands

- `zeus.commands` Full Feature List
- `zeus.docs` View Documents
- `zeus.check.install` Check if the `@zeppos/zeus-cli` dependency is installed globally
- `zeus.create` The `zeus create` command corresponding to the CLI
- `zeus.init` The `zeus init` command corresponding to the CLI
- `zeus.login` The `zeus login` command corresponding to the CLI
- `zeus.logout` The `zeus logout` command corresponding to the CLI
- `zeus.status` The `zeus status` command corresponding to the CLI
- `zeus.config` The `zeus config` command corresponding to the CLI
- `zeus.dev` The `zeus dev` command corresponding to the CLI
- `zeus.build` The `zeus build` command corresponding to the CLI
- `zeus.preview` The `zeus preview` command corresponding to the CLI
- `zeus.bridge` The `zeus bridge` command corresponding to the CLI
- `zeus.simulator` Shortcut command for `zeus config` to set simulator

If you are not familiar with the CLI and its commands, you can check out the [CLI documentation](../cli/)



