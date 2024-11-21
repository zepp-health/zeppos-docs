# Watch recorded opus audio file format conversion

## Watch Recorded Opus Audio File Parameters

- Sampling rate: 16000
- Channel: 1
- PCM encoding: 16-bit little endian sequence

## Option 1: Node.js script

Refer to the following `Node.js` script.

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

The `wav` library can be replaced with [ffmpeg's WASM implementation](https://github.com/ffmpegwasm/ffmpeg.wasm) to enable conversions to more formats such as wav, aac, mp3, etc.

## Option 2: opus_demo and ffmpeg command line tools

### The following tools are required

1. Opus official demo library and tools https://gitlab.xiph.org/xiph/opus

Refer to the readme document compile of the Opus official tool library to generate opus_demo tool.

2. FFmpeg https://www.ffmpeg.org/

### Steps

1. Convert Opus files to pcm raw format using opus_demo tool

```sh
# opus_demo -d <sampling rate (Hz)> <channels (1/2)> <input> <output>
./opus_demo -d 16000 1 userContent.opus userContent.pcm
```

Successful output

![img](/img/docs/guides/faq/output1.png)

2. Use ffmpeg to convert PCM files to WAV or other formats

Data format: s16le signed, integer, little endian

```sh
# ffmpeg -f <format> -ar <sampling rate> -ac <channels> -i <input> <output>
ffmpeg -f s16le -ar 16000 -ac 1 -i userContent.pcm userContent.wav
```

Successful output

![img](/img/docs/guides/faq/output2.png)
