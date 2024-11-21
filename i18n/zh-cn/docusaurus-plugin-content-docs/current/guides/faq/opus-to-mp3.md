# 手表录制的 Opus 音频文件格式转换

## 手表录制的 Opus 音频文件参数

- 采样率：16000
- 声道：1
- PCM 编码：16bit 小端序

## 方案一：Node.js 脚本

参考以下 `Node.js` 脚本。

```js
// npm i opusscript wav
const OpusScript = require("opusscript");
const fs = require("node:fs");
const wav = require("wav");
function opus2wav(input, output, rate = 16000, channels = 1) {
  const encoder = new OpusScript(rate, channels, OpusScript.Application.AUDIO);
  const data = fs.readFileSync(input);
  const out = [];
  for (let pos = 0; pos < data.byteLength;) {
    const len = data.readUint32BE(pos);
    const payload = data.subarray(pos + 8, pos + 8 + len);
    out.push(encoder.decode(payload));
    pos += 8 + len;
  }
  const pcm = Buffer.concat(out);
  const writer = new wav.FileWriter(output, {
    channels: channels,
    sampleRate: rate,
    bitDepth: 16
  });
  writer.write(pcm);
  writer.end();
}

opus2wav("userContent.opus", "userContent.wav");
```

可以将 `wav` 库替换为 [ffmpeg 的 WASM 实现](https://github.com/ffmpegwasm/ffmpeg.wasm)，从而可以实现到 wav、aac、mp3 等更多格式的转换。

## 方案二：opus_demo 和 ffmpeg命令行工具

### 需要如下工具

1. Opus 官方 demo 库和工具 https://gitlab.xiph.org/xiph/opus

参考 Opus 官方工具库的 readme 文档编译生成 opus_demo 工具

2. FFmpeg https://www.ffmpeg.org/

### 步骤

1. 使用 opus_demo 工具将 Opus 文件转成 pcm 原始格式

```sh
# opus_demo -d <sampling rate (Hz)> <channels (1/2)> <input> <output>
./opus_demo -d 16000 1 userContent.opus userContent.pcm
```

成功输出

![img](/img/docs/guides/faq/output1.png)

2. 使用 ffmpeg 将 pcm 文件转成 wav 或者其他格式

数据格式： s16le 有符号，整形，小端序

```sh
# ffmpeg -f <format> -ar <sampling rate> -ac <channels> -i <input> <output>
ffmpeg -f s16le -ar 16000 -ac 1 -i userContent.pcm userContent.wav
```

成功输出

![img](/img/docs/guides/faq/output2.png)
