---
title: Installation and launch
sidebar_label: Installation and launch
---

Different operating systems correspond to different installation and startup methods, so developers should refer to the corresponding chapters according to the operating system.

- [Windows Version Installation](#windows-version-installation)
  - [Environmental Preparation](#environmental-preparation)
    - [1. Installing a virtual network card](#1-installing-a-virtual-network-card)
    - [2. Configuring the virtual network card](#2-configuring-the-virtual-network-card)
      - [2.1 Rename the virtual network card](#21-rename-the-virtual-network-card)
      - [2.2 Virtual network card IPv4 Configuration Changes](#22-virtual-network-card-ipv4-configuration-changes)
  - [Install and launch the Simulator](#install-and-launch-the-simulator)
- [MacOS Version Installation](#macos-version-installation)
  - [Environmental Preparation](#environmental-preparation-1)
    - [1. Installing a virtual network card](#1-installing-a-virtual-network-card-1)
      - [Method 1: Installation via Homebrew](#method-1-installation-via-homebrew)
      - [Method 2: Visit Tunnelblick official website to download and install the installation package](#method-2-visit-tunnelblick-official-website-to-download-and-install-the-installation-package)
    - [2. Configuring the virtual network card](#2-configuring-the-virtual-network-card-1)
    - [3. Verify the virtual network card](#3-verify-the-virtual-network-card)
  - [Install and launch the Simulator](#install-and-launch-the-simulator-1)
- [Linux Version Installation](#linux-version-installation)
  - [Environmental Preparation](#environmental-preparation-2)
  - [Installation](#installation)
  - [Launch](#launch)

## Windows Version Installation

:::tip
It is recommended to run the installation package with administrator privileges during the process.
:::

### Environmental Preparation

The simulator communication relies on the virtual network card, so developers should follow the steps below to install and configure it.

#### 1. Installing a virtual network card

Download and install the Virtual network card [Tap-Windows](https://upload-cdn.huami.com/zeppos/simulator/download/tap-windows-9.21.2.zip), and perform the default installation.

#### 2. Configuring the virtual network card

##### 2.1 Rename the virtual network card

Open "Network and Sharing Center" - "Change Adapter Settings" and rename the virtual network card (TAP-Windows Adapter) you installed in the previous step to `tun`.

![renametun2.png](/img/simulator/renametunE.png)

##### 2.2 Virtual network card IPv4 Configuration Changes

Right-click to open the properties of `tun` and select Modify IPv4 Properties.

![network_properties](/img/simulator/network_properties.png)

After modifying the configuration to the following, click OK.

### Install and launch the Simulator

Download the simulator installer for Windows platform, [click to jump to download](./download.md).

Double click on the simulator icon after installation to start the simulator.

![simulator_icon.jpg](/img/simulator/simulator_icon.jpg)

## MacOS Version Installation

### Environmental Preparation

The simulator communication relies on the virtual network card, so developers should follow the steps below to install and configure it.

:::info
Requires macOS version 10.12 Sierra and above.
:::

#### 1. Installing a virtual network card

Tunnelblick is an open source VPN software for macOS, it is easy to install `tun/tap` system extensions through it.

Two ways to install the Tunnelblick virtual network card are provided.

##### Method 1: Installation via [Homebrew](https://brew.sh/)

Execute the following command in the terminal command line.

```sh
brew install --cask tunnelblick
```

##### Method 2: Visit Tunnelblick official website to download and install the installation package

[Official Download Address](https://tunnelblick.net/downloads.html)

:::caution
If you are blocked by macOS during installation or use, you can set permission under "System Preferences" - "Security & Privacy" - "General".

If you do not see a prompt, try installing again.
:::

#### 2. Configuring the virtual network card

:::caution
If you are using a Mac with an Apple chip, you need to perform this step before. [Enable System Extensions or Kernel Extension on Apple Silicon Mac](../../faq/apple-silicon.md)

How to know if a Mac is equipped with an Apple chip?

1. Click the Apple icon in the upper left corner of the desktop
2. Select About This Mac
3. In the “Overview” tab, look for “Processor” or “Chip”. Check if it says “Apple”
:::

Run Tunnelblick and find the `tun/tap` installation option in the interface, under the action path `Utillites` => `Install tun and tap system extensions`.

![tun.png](/img/simulator/tun.png)

#### 3. Verify the virtual network card

Execute the following command from the terminal command line.

```sh
ls /dev
```

Check if `tap0` - `tap15` appears in the result list, if it does, then the installation is successful.

:::tip
If the installation fails, please double check the above steps, you can try the following methods

Re-execute [Configuring the virtual network card](#2-configuring-the-virtual-network-card-1), if it shows that `tun/tap` system extension is installed, uninstall it first and then reinstall it, and reboot the operating system after the installation is completed.
:::

### Install and launch the Simulator

Download the simulator installer for macOS platform, [click to jump to download](./download.md).

:::caution
If you encounter a system block, please follow the instructions in [Configuring the virtual network card](#2-configuring-the-virtual-network-card-1) above and set the Allow in "System Preferences" - "Security & Privacy" - "General".
:::

After the installation is complete, execute the following command in the terminal to add executable permissions to the simulator startup script.

```sh
cd /Applications/simulator.app/Contents/Resources/firmware && chmod +x ./start_qemu.sh
```

Re-open a terminal and run the following command to start the simulator.

```sh
cd /Applications/simulator.app/Contents/MacOS && sudo -s ./simulator
```

Enter the password and enter OK, the simulator icon appears in the control bar and the simulator starts successfully.

:::info

- Click on the simulator button of the simulator and try to open the watch simulator, if it does not respond, it is recommended to check the "Security and Privacy" in the system preferences to see if there is a prompt
- If the terminal requires a password, just enter it
- To exit the simulator, press control + c in the terminal or right-click on the control bar icon
:::

## Linux Version Installation

### Environmental Preparation

It is recommended to use `Ubuntu 20.04+` or `Debian 11+` to run the simulator.

### Installation

Download the [simulator installer for Linux platform](download.md), click the jump to download, and install it.

You need to get administrator privileges before starting the simulator. `$` is normal privileges and `#` is administrator privileges.

Or execute the following command.

```bash
sudo chmod -R 777 /dir
```

- `-R` means that the cascade is applied to all subdirectories and files in the directory
- `777` means that all users have the highest privileges
- `/dir` is the target folder, this can be the simulator installation directory, usually `/opt/simulator`

If your installation directory is in `/opt` you can execute it in the terminal next, if not, you need to execute it in your own installation directory to install the environment.

```sh
cd /opt/simulator/resources/firmware/ && sudo ./setup_for_linux.sh
```

### Launch

Execute the command to launch.

```sh
cd /opt/simulator/ && ./simulator
```
