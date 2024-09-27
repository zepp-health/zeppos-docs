# Simulator FAQ

## Ubuntu 24 is not running properly

2.0 Simulator running on ubuntu 24 requires running the following script (with `sudo` privileges).

```sh title="simulator_env.sh"
ARCH=$(uname -m)
LIB_DIR="/usr/lib/$ARCH-linux-gnu"

if [ -f "/etc/lsb-release" ] && [ "$(lsb_release -sc)" == "noble" ]; then
  apt-get install -y libcapstone4 libsdl2-dev libaio-dev
  if [ ! -e "${LIB_DIR}/libaio.so.1" ]; then
    ln -s ${LIB_DIR}/libaio.so.1t64 ${LIB_DIR}/libaio.so.1
  fi
fi
```

Before starting the Simulator, run the following command

```sh
sudo chmod 4755 /opt/simulator/chrome-sandbox
```

## Mac and Linux users do not display device Emulator list after upgrading from v1.x to v2.x Simulator

It is recommended to delete the `~/.zepp` directory and reinstall the v2.x version of Simulator.

## The Windows username contains special characters, causing the device Emulator to fail to start

It is recommended to create a new user with only uppercase and lowercase English letters and numbers, and reinstall Simulator under the new user.
