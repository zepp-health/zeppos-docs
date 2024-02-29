# Unable to preview Mini Program in Simulator or real machine

The problem of not being able to preview the Mini Program correctly usually occurs when previewing sample Mini Program projects.

To troubleshoot such problems, first we need to check the current supported models of Mini Program in [Mini Program Configuration app.json](../../reference/app-json.mdx).

First, search for the `deviceSource` string in the `app.json` file. If the search results are found, the number value of `deviceSource` is the model supported by Mini Program. You can query the watch device corresponding to `deviceSource` in [Device Basic Information](../../reference/related-resources/device-list.mdx).

The following configuration is taken from [calories - 2.0 app.json](https://github.com/zepp-health/zeppos-samples/blob/main/application/2.0/calories/app.json).

```json
"platforms": [
  {
    "name": "gts4",
    "deviceSource": 7995648
  },
  {
    "name": "gts4-w",
    "deviceSource": 7995649
  }
],
```

Query `7995648` and `7995649` in the [Device Basic Information](../../reference/related-resources/device-list.mdx) document to learn that this Mini Program is compatible with Amazfit GTS 4 devices. We can only preview this Mini Program on Amazfit GTS 4 emulator or real devices. Otherwise, we need to add more supported models in the `app.json`.

If `app.json` does not find `deviceSource` string, try searching for `st` and `sr` strings. If there are search results, it indicates that this Mini Program follows the [Screen adaptation Specification](../framework/device/screen-adaption.md). For details, please refer to the specification content.

## Notes on previewing in Simulator

Start the Simulator, run the `zeus dev` command, and the Mini Program will be displayed in the emulator list, and the supported device models will be displayed. We only need to start the emulator of the corresponding model to preview the Mini Program correctly.

![simulator](/img/docs/guides/faq/simulator_devicesource.jpg)

## Common errors in real machine preview

According to the previous prompt, check the Mini Program configuration `app.json` and confirm that the supported models are correct. If you still cannot preview the Mini Program by scanning the code, it is most likely due to the occupation of the transmission channel.

When the watch is downloading system updates or synchronizing information with Zepp, the transmission channel is occupied. At this time, check whether Zepp is synchronizing data or transmitting system updates, wait for it to complete, and then scan the code to preview the Mini Program.
