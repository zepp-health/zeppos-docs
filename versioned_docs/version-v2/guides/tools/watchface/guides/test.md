---
title: Watchface Test
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Watchface Test

## Preparation

1. Enable Developer Bridge mode, see [Developer Bridge Mode](guides/faq/developer-bridge-mode.md) for version requirements and enabling steps
   
2. Log in with **same account** in the [Watchface maker interface](https://watchface.zepp.com), simulator, Zepp APP

3. The device supported by the current Watchface in the Watchface maker interface, the device selected by the simulator, the device bound to the Zepp APP should be the **same**

## Testing

### Simulator test

Open the [Simulator](guides/tools/simulator/index.md), click the "Simulator" button in the upper left corner to open the watch simulator window, click the "Bridge" button at the top to open the Developer Bridge mode

![bridgeSimulator.png](/img/docs/guides/tools/watchface/bridge_simulator.png)

Select a finished Watchface in the Watchface maker interface, click the "Bridge" button in the upper right corner, and the Bridge interface will pop up

![bridgeToolBtn.png](/img/docs/guides/tools/watchface/bridge_tool_btn.png)

Click the "Connect" button, and the status will change to "Connected", that means, the simulator and the Watchface tool are successfully connected. Select the "Action" to be performed, such as "Install the Watchface", click the "Execute" button, and wait for the Watchface to be installed to the simulator

![bridgeSimulatorConnect.png](/img/docs/guides/tools/watchface/bridge_simulator_connect.png)
![bridgeSimulatorConnectSuccess.png](/img/docs/guides/tools/watchface/bridge_simulator_connect_success.png)

After the installation is complete, you can see the Watchface you created on the simulator

![simulatorRun.png](/img/docs/guides/tools/watchface/simulator_run.png)

In the simulator, you can refer to [Debugger](../../../tools/simulator/index.md#sensors) to configure parameters such as heart rate and power

### Device Test

Open the developer mode of Zepp APP, click the + button in the upper right corner to expand the collapsed menu, click "Bridge" to open the Developer Bridge mode

<img src={useBaseUrl('/img/docs/guides/faq/bridge/zepp-en.gif')} width="30%" />

Select a finished Watchface in the Watchface tool, click the "Bridge" button in the upper right corner, and the Bridge interface will pop up

![bridgeToolBtn.png](/img/docs/guides/tools/watchface/bridge_tool_btn.png)

Click the "Connect" button, the status will change to "Connected", that is, the connection between the APP and the Watchface tool is successful. Select the "Action" to be executed, such as "Install the Watchface", click the "Execute" button, and wait for the Watchface to be transferred to the APP

![bridgeAppConnect.png](/img/docs/guides/tools/watchface/bridge_app_connect.png)
![bridgeAppConnectSuccess.png](/img/docs/guides/tools/watchface/bridge_app_connect_success.png)

After the installation is complete, you can see the Watchface you created on your watch

<img src="/img/docs/guides/tools/watchface/app_install_success.png" width="30%" title="appInstallSuccess"/>
<img src="/img/docs/guides/tools/watchface/watch_install_success.png" width="40%" title="watchInstallSucess"/>

## Note

1. If the connection to the simulator or APP fails, or there is no device or simulator to connect to, please refer to [Developer Bridge Mode](guides/faq/developer-bridge-mode.md) for configuration

2. For more simulator related information, please refer to [Simulator](guides/tools/simulator/index.md)
