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
