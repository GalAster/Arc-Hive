Arc Hive
========
[![Site](https://img.shields.io/badge/ARC-v0.4-%23FF4D5B.svg?style=flat-square)](https://github.com/toml-lang/toml)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
[![LICENSE](https://img.shields.io/badge/license-MPL%202.0-blue.svg?style=flat-square)](https://github.com/GalAster/vscode-toml/blob/master/License.md)

Arc Readable Configuration: https://github.com/Moe-Net/Arc-Language

## Install

```sh
yarn add @nyar/arc-ir
npm install @nyar/arc-ir
```

## Start

```ts
import { ArcParser } from '@nyar/arc-ir'
const ans = ArcParser(`
(a)
b = null
(/c)
d = true
e/f = false
`)
console.log(JSON.stringify(ans, null, 4))
```



```json
{
    "a": {
        "b": null,
        "c": {
            "d": true,
            "e": {
                "f": false
            }
        }
    }
}
```