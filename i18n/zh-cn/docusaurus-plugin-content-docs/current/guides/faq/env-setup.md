# 环境安装常见问题

## 中国大陆地区 zeus-cli 安装不成功

由于中国大陆地区网络访问存在限制，执行 `npm i @zeppos/zeus-cli -g` 有安装失败的情况，尝试以下命令安装

```sh
npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
npm i @zeppos/zeus-cli -g --registry "https://registry.npmmirror.com"
```
