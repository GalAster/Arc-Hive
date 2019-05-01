
    "name": "@nyar/arc-reader",
    "version": "0.1.0",
    "main": "source/index.ts",
    "license": "MPL-2.0",
    "scripts": {
        "antlr": "antlr4ts -visitor ../../node_modules/@nyar/arc-antlr/ARC.g4 -o ./source/antlr",
        "test": "ts-node ./test/test.ts",
        "build": "yarn install && yarn antlr && tsc -b",
        "upload": "yarn build && npm publish --access public"
    },
    "dependencies": {
        "@nyar/arc-antlr": "^1.0.12",
        "antlr4ts": "^0.5.0-alpha.3",
        "js-big-decimal": "^1.2.1",
        "ramda": "^0.26.1"
    },
    "devDependencies": {
        "@types/ramda": "^0.26.8"
    }