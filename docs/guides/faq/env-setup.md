# Environment Installation FAQ

## Failed to install zeus-cli in Chinese mainland

Due to network access restrictions in the Chinese mainland, there may be installation failures when executing `npm i @zeppos/zeus-cli -g`. Try the following command to install.

```sh
npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
npm i @zeppos/zeus-cli -g --registry "https://registry.npmmirror.com"
```
