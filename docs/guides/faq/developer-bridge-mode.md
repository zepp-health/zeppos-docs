---
title: Developer Bridge Mode
---

To make it easier for Developers to use Zepp OS Development Tools efficiently, we are proud to announce the release of Developer Bridge.
The function allows easy connection between the development tools (Zepp CLI / Watchface Maker) and the runtime environments(Zepp OS Simulator / Zepp APP), eliminating the need for complicated parameters and network configuration.

> To use the Developer Bridge, you need to know the basic knowledge of using Zepp OS tools, and ensure the version of the tools you are using meets the minimum version requirements. <br/>
> Zepp CLI: `>= 1.1.0` <br/>
> Zepp Simulator: `>= 1.0.8` <br/>
> Zepp APP：`>= 6.9.0`

## Usage
1. open the runtime environment Developer Bridge mode
2. open the development tool Developer Bridge mode
3. establish a link between the development tool and the runtime environment
4. execute the relevant commands
![Developer Bridge Main](/img/docs/guides/faq/bridge/main.png)

## How to turn on Developer Bridge mode
### Zepp APP
Open the Developer Mode of Zepp APP, click the + button on the top right corner to expand the collapsed menu, and click the Bridge menu to open the Developer Bridge mode.

![App Bridge](/img/docs/guides/faq/bridge/zepp-en.gif)


### Zepp OS Simulator
First of all, you need to login to your Zepp account. Click on your avatar in the upper left corner to open the login pop-up window, enter your account password, and your avatar image will be displayed in the upper left corner after login is complete.

![Simulator Login](/img/docs/guides/faq/bridge/simulator-login.png)

After logging in, you can use the Developer Bridge function. Click on the Bridge button  in the top bar, and the button will light up to indicate that the Developer Bridge Model is successfully enabled.

![Simulator Bridge](/img/docs/guides/faq/bridge/simulator-bridge.png)

### Zepp CLI
Open the terminal, go to the project root directory, and enter zeus bridge on the command line to enter the Developer Bridge Model.
> **Attention** <br/>
> Before using zeus bridge, you need to login to the same account as the runtime environment via zeus bridge.

![CLI Bridge](/img/docs/guides/faq/bridge/cli-bridge.png)

Enter connect to establish a connection to the operating environment device. After a successful connection, the terminal will display a successful message.

![CLI Bridge](/img/docs/guides/faq/bridge/cli-bridge-connect.png)

After establishing a connection to the runtime environment, enter install to build the project from the current directory, and install it to the connected runtime environment.

![CLI Bridge Install](/img/docs/guides/faq/bridge/cli-bridge-install.png)

Enter uninstall to uninstall the application from the current directory in the runtime environment.
![CLI Bridge Uninstall](/img/docs/guides/faq/bridge/cli-bridge-uninstall.png)


### Watchface Maker

Visit [Watchface Maker](https://watchface.zepp.com/), enter the Watchface Edit page, click the "Bridge" button, the Bridge page will pop up

![Bridge Button](/img/docs/guides/faq/bridge/wf-bridge-en-btn.png)

The Bridge page will display the currently connectable devices or simulators

![Bridge Can Connect Devices](/img/docs/guides/faq/bridge/wf-bridge-can-connect-devices-en.png)

Click the "Connect" button and the status will change to "connected"

![Bridge-connected](/img/docs/guides/faq/bridge/wf-bridge-connected-en.png)

After connecting the device or simulator, select the "Action" to be performed, such as "Install the Watchface", and click the "Execute" button to install the Watchface currently being produced on the watch or simulator
