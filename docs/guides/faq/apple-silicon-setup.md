---
title: Apple Silicon Installation Zepp OS Development Environment
---

## Intro

The steps to set up Zepp OS Development Environment on Apple Silicon models are quite special. Please refer to this document for environment configuration.

:::info
How to know if a Mac is equipped with an Apple chip?

1. Click the Apple icon in the upper left corner of the desktop
2. Select About This Mac
3. In the “Overview” tab, look for “Processor” or “Chip”. Check if it says “Apple”

:::

If your Mac meets the above conditions, please follow the steps below. Otherwise, refer to [Quick Start - Environment Preparation](../../guides/quick-start/environment.mdx).

## Operation process

### 1.Enable system expansion

Refer [Enable System Extensions or Kernel Extension on Apple Silicon Mac](./apple-silicon.md)

### 2.Install Node.js

Refer to [Node.js official website](https://nodejs.org/en), it is recommended to use the `nvm`(Node Version Manager) method for installation.

The following installation script is excerpted from the official website of Node.js, for reference only.

It is recommended to use Terminal end point to execute commands.

```js
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.12.0`

# verifies the right NPM version is in the environment
npm -v # should print `10.5.0`
```

### 3.Install zeus-cli

Refer to [Zeus CLI Command-Line Tools](../tools/cli/index.md) to install `zeus-cli`.

### 4.Install Zepp OS Simulator

Go to the [Simulator download](../tools/simulator/download.md) page to download the latest version of emulator and complete the installation.

### 5.Install `tun/tap` system extension

The normal operation of the Simulator requires the `tun/tap` system extension. We use the `Tunnelblick` tool to install the'tun/tap 'system extension.

Refer to [Install virtual network interface card](../tools/simulator/setup.md#1-installing-a-virtual-network-card) for complete steps .

Congratulations on completing the installation of Zepp OS Development Environment on Apple Silicon models.
