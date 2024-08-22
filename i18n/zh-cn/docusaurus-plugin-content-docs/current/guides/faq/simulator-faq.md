# 模拟器常见问题

## ubuntu 24 无法正常运行

2.0 Simulator 模拟器在 ubuntu 24 下运行需要运行以下脚本（使用 `sudo` 权限运行）。

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

在启动模拟器之前，运行以下命令：

```sh
sudo chmod 4755 /opt/simulator/chrome-sandbox
```
